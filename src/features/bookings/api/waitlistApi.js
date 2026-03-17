// src/features/bookings/api/waitlistApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const waitlistApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Waitlist Management
    getWaitlist: builder.query({
      query: (params) => ({
        url: '/waitlist/',
        params: {
          hostel_id: params?.hostelId,
          room_type: params?.roomType,
        },
      }),
      providesTags: (result) => providesList(result, 'Waitlist'),
    }),

    addToWaitlist: builder.mutation({
      query: (waitlistData) => ({
        url: '/waitlist/',
        method: 'POST',
        body: waitlistData,
      }),
      invalidatesTags: invalidatesList('Waitlist'),
    }),

    removeFromWaitlist: builder.mutation({
      query: (waitlistId) => ({
        url: `/waitlist/${waitlistId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, waitlistId) => [
        { type: 'Waitlist', id: waitlistId },
        { type: 'Waitlist', id: 'LIST' },
      ],
    }),

    promoteWaitlistEntry: builder.mutation({
      query: ({ waitlistId, targetRoomId, promoteCheckIn, promoteCheckOut }) => ({
        url: `/waitlist/${waitlistId}/promote`,
        method: 'POST',
        params: {
          target_room_id: targetRoomId,
          promote_check_in: promoteCheckIn,
          promote_check_out: promoteCheckOut,
        },
      }),
      invalidatesTags: ['Waitlist', 'Booking'],
    }),

    // Admin Jobs
    runWaitlistPromotion: builder.mutation({
      query: ({ hostelId, roomType }) => ({
        url: '/admin/jobs/promote',
        method: 'POST',
        params: {
          hostel_id: hostelId,
          room_type: roomType,
        },
      }),
    }),
  }),
});

export const {
  useGetWaitlistQuery,
  useAddToWaitlistMutation,
  useRemoveFromWaitlistMutation,
  usePromoteWaitlistEntryMutation,
  useRunWaitlistPromotionMutation,
} = waitlistApi;