// src/features/visitor/api/visitorBookingApi.js
import { appApi } from '../../../services/api/appApi';

export const visitorBookingApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new booking
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: '/api/v1/bookings/',
        method: 'POST',
        body: bookingData,
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Get booking details by ID
    getBookingDetails: builder.query({
      query: (bookingId) => `/api/v1/bookings/${bookingId}`,
      providesTags: ['Bookings'],
    }),

    // Update booking
    updateBooking: builder.mutation({
      query: ({ bookingId, ...updateData }) => ({
        url: `/api/v1/bookings/${bookingId}`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Update booking status
    updateBookingStatus: builder.mutation({
      query: ({ bookingId, status }) => ({
        url: `/api/v1/bookings/${bookingId}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Cancel booking
    cancelBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/api/v1/bookings/${bookingId}/cancel`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Note: Backend doesn't have GET /api/v1/visitor/my-bookings endpoint
    // Frontend uses mock data for display instead
    getVisitorBookings: builder.query({
      query: () => ({
        url: '/api/v1/visitor/my-bookings',
        method: 'GET',
      }),
      providesTags: ['Bookings'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingDetailsQuery,
  useUpdateBookingMutation,
  useUpdateBookingStatusMutation,
  useCancelBookingMutation,
  useGetVisitorBookingsQuery,
} = visitorBookingApi;
