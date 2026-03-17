import { appApi } from "@/services/api/appApi";
import { providesList, invalidatesList } from "@/services/api/apiHelpers";

export const reviewStudentApi = appApi.injectEndpoints({
  endpoints: (builder) => ({

    getMyReviews: builder.query({
      query: () => "/api/v1/student/reviews/my",
      providesTags: (result) => providesList(result, "Review"),
    }),

    canReviewHostel: builder.query({
      query: (hostelId) =>
        `/api/v1/student/reviews/can-review/${hostelId}`,
    }),

    postReview: builder.mutation({
      query: ({ hostelId, ...reviewData }) => ({
        url: `/api/v1/student/reviews/${hostelId}`,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: invalidatesList("Review"),
    }),

    getReview: builder.query({
      query: (reviewId) =>
        `/api/v1/student/reviews/${reviewId}`,
      providesTags: (result, error, reviewId) => [
        { type: "Review", id: reviewId },
      ],
    }),

    updateReview: builder.mutation({
      query: ({ reviewId, ...reviewData }) => ({
        url: `/api/v1/student/reviews/${reviewId}`,
        method: "PUT",
        body: reviewData,
      }),
      invalidatesTags: (result, error, { reviewId }) => [
        { type: "Review", id: reviewId },
        { type: "Review", id: "LIST" },
      ],
    }),

    deleteMyReview: builder.mutation({
      query: (reviewId) => ({
        url: `/api/v1/student/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, reviewId) => [
        { type: "Review", id: reviewId },
        { type: "Review", id: "LIST" },
      ],
    }),

    markReviewHelpful: builder.mutation({
      query: (reviewId) => ({
        url: `/api/v1/student/reviews/${reviewId}/helpful`,
        method: "POST",
      }),
      invalidatesTags: (result, error, reviewId) => [
        { type: "Review", id: reviewId },
      ],
    }),

  }),
});

export const {
  useGetMyReviewsQuery,
  useCanReviewHostelQuery,
  usePostReviewMutation,
  useGetReviewQuery,
  useUpdateReviewMutation,
  useDeleteMyReviewMutation,
  useMarkReviewHelpfulMutation,
} = reviewStudentApi;