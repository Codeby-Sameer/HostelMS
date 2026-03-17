// src/features/rooms/api/calendarApi.js
import { appApi } from '../../../services/api/appApi';

export const calendarApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Room Calendar
    getRoomCalendar: builder.query({
      query: (roomId) => `/calendar/room/${roomId}`,
      providesTags: (result, error, roomId) => [{ type: 'Room', id: roomId }],
    }),

    // Hostel Calendar
    getHostelCalendar: builder.query({
      query: (hostelId) => `/calendar/hostel/${hostelId}`,
      providesTags: (result, error, hostelId) => [{ type: 'Hostel', id: hostelId }],
    }),

    // Drag-Drop Validation
    validateDragDrop: builder.query({
      query: ({ bookingId, newRoomId, newCheckIn, newCheckOut }) => ({
        url: '/calendar/drag-drop/validate',
        params: {
          booking_id: bookingId,
          new_room_id: newRoomId,
          new_check_in: newCheckIn,
          new_check_out: newCheckOut,
        },
      }),
    }),

    // Apply Drag-Drop
    applyDragDrop: builder.mutation({
      query: ({ bookingId, newRoomId, newCheckIn, newCheckOut }) => ({
        url: '/calendar/drag-drop/apply',
        method: 'POST',
        params: {
          booking_id: bookingId,
          new_room_id: newRoomId,
          new_check_in: newCheckIn,
          new_check_out: newCheckOut,
        },
      }),
      invalidatesTags: (result, error, { bookingId }) => [
        { type: 'Booking', id: bookingId },
        { type: 'Room' },
      ],
    }),
  }),
});

export const {
  useGetRoomCalendarQuery,
  useGetHostelCalendarQuery,
  useLazyValidateDragDropQuery,
  useApplyDragDropMutation,
} = calendarApi;