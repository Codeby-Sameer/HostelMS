// src/features/shifts/api/shiftApi.js
import { appApi } from '../../../services/api/appApi';

export const shiftApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Shifts
    getShifts: builder.query({
      query: () => '/api/v1/api/shift-coordination/shifts',
      providesTags: ['Shift'],
    }),

    createShift: builder.mutation({
      query: (shiftData) => ({
        url: '/api/v1/api/shift-coordination/shifts',
        method: 'POST',
        body: shiftData,
      }),
      invalidatesTags: ['Shift'],
    }),

    // Schedules
    createShiftSchedule: builder.mutation({
      query: (scheduleData) => ({
        url: '/api/v1/api/shift-coordination/schedules',
        method: 'POST',
        body: scheduleData,
      }),
      invalidatesTags: ['Shift'],
    }),

    // Tasks
    createShiftTask: builder.mutation({
      query: (taskData) => ({
        url: '/api/v1/api/shift-coordination/tasks',
        method: 'POST',
        body: taskData,
      }),
      invalidatesTags: ['Shift'],
    }),

    updateShiftTask: builder.mutation({
      query: ({ taskId, ...data }) => ({
        url: `/api/v1/api/shift-coordination/tasks/${taskId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { taskId }) => [{ type: 'Shift', id: taskId }],
    }),

    delegateTask: builder.mutation({
      query: (delegationData) => ({
        url: '/api/v1/api/shift-coordination/tasks/delegate',
        method: 'POST',
        body: delegationData,
      }),
      invalidatesTags: ['Shift'],
    }),

    // Handovers
    createHandover: builder.mutation({
      query: (handoverData) => ({
        url: '/api/v1/api/shift-coordination/handovers',
        method: 'POST',
        body: handoverData,
      }),
      invalidatesTags: ['Shift'],
    }),

    addHandoverItem: builder.mutation({
      query: (itemData) => ({
        url: '/api/v1/api/shift-coordination/handover-items',
        method: 'POST',
        body: itemData,
      }),
      invalidatesTags: ['Shift'],
    }),

    // Meetings
    createCoordinationMeeting: builder.mutation({
      query: (meetingData) => ({
        url: '/api/v1/api/shift-coordination/meetings',
        method: 'POST',
        body: meetingData,
      }),
      invalidatesTags: ['Shift'],
    }),

    getMeetings: builder.query({
      query: (hostelId) => `/api/v1/api/shift-coordination/meetings/${hostelId}`,
      providesTags: ['Shift'],
    }),
  }),
});

export const {
  useGetShiftsQuery,
  useCreateShiftMutation,
  useCreateShiftScheduleMutation,
  useCreateShiftTaskMutation,
  useUpdateShiftTaskMutation,
  useDelegateTaskMutation,
  useCreateHandoverMutation,
  useAddHandoverItemMutation,
  useCreateCoordinationMeetingMutation,
  useGetMeetingsQuery,
} = shiftApi;