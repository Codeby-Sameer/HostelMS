// src/features/bookings/api/bookingApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const bookingApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Bookings
    getBookings: builder.query({
      query: () => '/api/v1/payments/payments',
      providesTags: (result) => providesList(result, 'Booking'),
    }),

    getBookingById: builder.query({
      query: (bookingId) => `/api/v1/bookings/${bookingId}`,
      providesTags: (result, error, bookingId) => [{ type: 'Booking', id: bookingId }],
    }),

    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: '/api/v1/bookings/',
        method: 'POST',
        body: bookingData,
      }),
      invalidatesTags: invalidatesList('Booking'),
    }),

    updateBooking: builder.mutation({
      query: ({ bookingId, ...data }) => ({
        url: `/api/v1/bookings/${bookingId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { bookingId }) => [
        { type: 'Booking', id: bookingId },
        { type: 'Booking', id: 'LIST' },
      ],
    }),

    updateBookingStatus: builder.mutation({
      query: ({ bookingId, ...data }) => ({
        url: `/api/v1/bookings/${bookingId}/status`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { bookingId }) => [
        { type: 'Booking', id: bookingId },
      ],
    }),

    cancelBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/api/v1/bookings/${bookingId}/cancel`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, bookingId) => [
        { type: 'Booking', id: bookingId },
      ],
    }),

    // Visitor Bookings
    getVisitorBooking: builder.query({
      query: (bookingId) => `/visitor/bookings/${bookingId}`,
      providesTags: (result, error, bookingId) => [{ type: 'Booking', id: bookingId }],
    }),

    // Simple Payments Bookings
    getBookingHistory: builder.query({
      query: (userEmail) => `/api/v1/simple-payments/history/${userEmail}`,
      providesTags: (result, error, userEmail) => [{ type: 'Booking' }],
    }),

    getSimpleTransaction: builder.query({
      query: (bookingRef) => `/api/v1/simple-payments/transactions/${bookingRef}`,
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useUpdateBookingStatusMutation,
  useCancelBookingMutation,
  useGetVisitorBookingQuery,
  useGetBookingHistoryQuery,
  useGetSimpleTransactionQuery,
} = bookingApi;