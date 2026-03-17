import { appApi } from "@/services/api/appApi";
import {
  providesList,
  invalidatesList,
  buildQueryParams,
} from "@/services/api/apiHelpers";

export const reviewAdminApi = appApi.injectEndpoints({
  endpoints: (builder) => ({

    getReviews: builder.query({
      query: (params) => ({
        url: "/api/v1/admin/reviews/reviews",
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          status: params?.status,
          rating: params?.rating,
          is_spam: params?.isSpam,
          skip: params?.skip,
          limit: params?.limit,
          sort_by: params?.sortBy,
        }),
      }),
      providesTags: (result) => providesList(result, "Review"),
    }),

    getPendingReviews: builder.query({
      query: (params) => ({
        url: "/api/v1/admin/reviews/reviews/pending",
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: ["Review"],
    }),

    getSpamReviews: builder.query({
      query: (params) => ({
        url: "/api/v1/admin/reviews/reviews/spam",
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: ["Review"],
    }),

    getReviewAnalytics: builder.query({
      query: (params) => ({
        url: "/api/v1/admin/reviews/reviews/analytics",
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          days: params?.days,
        }),
      }),
    }),

    moderateReview: builder.mutation({
      query: ({ reviewId, action, reason }) => ({
        url: `/api/v1/admin/reviews/reviews/${reviewId}/moderate`,
        method: "PUT",
        params: { action, reason },
      }),
      invalidatesTags: (result, error, { reviewId }) => [
        { type: "Review", id: reviewId },
        { type: "Review", id: "LIST" },
      ],
    }),

    deleteReviewByAdmin: builder.mutation({
      query: (reviewId) => ({
        url: `/api/v1/admin/reviews/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: invalidatesList("Review"),
    }),

  }),
});

export const {
  useGetReviewsQuery,
  useGetPendingReviewsQuery,
  useGetSpamReviewsQuery,
  useGetReviewAnalyticsQuery,
  useModerateReviewMutation,
  useDeleteReviewByAdminMutation,
} = reviewAdminApi;