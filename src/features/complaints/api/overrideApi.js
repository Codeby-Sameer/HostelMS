// src/features/complaints/api/overrideApi.js
import { appApi } from '../../../services/api/appApi';
import { invalidatesItem } from '../../../services/api/apiHelpers';

export const overrideApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    overrideComplaint: builder.mutation({
      query: ({ complaintId, ...payload }) => ({
        url: `/api/v1/admin/overrides/complaints/${complaintId}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
        { type: 'Override' },
      ],
    }),

    overrideAttendance: builder.mutation({
      query: ({ attendanceId, ...payload }) => ({
        url: `/api/v1/admin/overrides/attendance/${attendanceId}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: (result, error, { attendanceId }) => [
        { type: 'Attendance', id: attendanceId },
        { type: 'Override' },
      ],
    }),

    overrideMaintenance: builder.mutation({
      query: ({ requestId, ...payload }) => ({
        url: `/api/v1/admin/overrides/maintenance/${requestId}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: 'MaintenanceRequest', id: requestId },
        { type: 'Override' },
      ],
    }),

    reassignTask: builder.mutation({
      query: ({ taskId, ...payload }) => ({
        url: `/api/v1/admin/overrides/tasks/${taskId}/reassign`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'MaintenanceTask', id: taskId },
        { type: 'Override' },
      ],
    }),

    emergencyAccess: builder.mutation({
      query: (payload) => ({
        url: '/api/v1/admin/overrides/emergency-access',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Override', 'User'],
    }),

    // Admin Overrides (from supervisor overrides)
    createAdminOverride: builder.mutation({
      query: (overrideData) => ({
        url: '/api/v1/admin/supervisors/overrides',
        method: 'POST',
        body: overrideData,
      }),
      invalidatesTags: ['Override'],
    }),

    listAdminOverrides: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/supervisors/overrides',
        params: {
          skip: params?.skip,
          limit: params?.limit,
          admin_employee_id: params?.adminEmployeeId,
          target_supervisor_id: params?.targetSupervisorId,
        },
      }),
      providesTags: ['Override'],
    }),
  }),
});

export const {
  useOverrideComplaintMutation,
  useOverrideAttendanceMutation,
  useOverrideMaintenanceMutation,
  useReassignTaskMutation,
  useEmergencyAccessMutation,
  useCreateAdminOverrideMutation,
  useListAdminOverridesQuery,
} = overrideApi;