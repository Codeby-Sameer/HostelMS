// src/features/mess/api/mealPreferenceApi.js
import { appApi } from '../../../services/api/appApi';
import { invalidatesList } from '../../../services/api/apiHelpers';

export const mealPreferenceApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Submit Feedback
    submitMenuFeedback: builder.mutation({
      query: (feedbackData) => ({
        url: '/api/v1/student/mess-menu/feedback',
        method: 'POST',
        body: feedbackData,
      }),
      invalidatesTags: ['MenuFeedback'],
    }),

    // Create Meal Preference
    createMealPreference: builder.mutation({
      query: (preferenceData) => ({
        url: '/api/v1/student/mess-menu/preferences',
        method: 'POST',
        body: preferenceData,
      }),
      invalidatesTags: invalidatesList('MealPreference'),
    }),

    // Get My Preference
    getMyPreference: builder.query({
      query: ({ studentId, hostelId }) => 
        `/api/v1/student/mess-menu/preferences/${studentId}/hostel/${hostelId}`,
      providesTags: (result, error, { studentId }) => [{ type: 'MealPreference', id: studentId }],
    }),

    // Update Meal Preference
    updateMealPreference: builder.mutation({
      query: ({ preferenceId, ...data }) => ({
        url: `/api/v1/student/mess-menu/preferences/${preferenceId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { preferenceId }) => [
        { type: 'MealPreference', id: preferenceId },
      ],
    }),
  }),
});

export const {
  useSubmitMenuFeedbackMutation,
  useCreateMealPreferenceMutation,
  useGetMyPreferenceQuery,
  useUpdateMealPreferenceMutation,
} = mealPreferenceApi;