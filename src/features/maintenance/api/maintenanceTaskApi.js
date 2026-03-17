// src/features/maintenance/api/maintenanceTaskApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const maintenanceTaskApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Maintenance Tasks
    getMaintenanceTasks: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/maintenance/tasks',
        params: buildQueryParams({
          maintenance_request_id: params?.maintenanceRequestId,
          assigned_to_id: params?.assignedToId,
          status: params?.status,
          priority: params?.priority,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: (result) => providesList(result, 'MaintenanceTask'),
    }),

    getMaintenanceTaskById: builder.query({
      query: (taskId) => `/api/v1/admin/maintenance/tasks/${taskId}`,
      providesTags: (result, error, taskId) => [{ type: 'MaintenanceTask', id: taskId }],
    }),

    createMaintenanceTask: builder.mutation({
      query: (taskData) => ({
        url: '/api/v1/admin/maintenance/tasks',
        method: 'POST',
        body: taskData,
      }),
      invalidatesTags: invalidatesList('MaintenanceTask'),
    }),

    deleteMaintenanceTask: builder.mutation({
      query: (taskId) => ({
        url: `/api/v1/admin/maintenance/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, taskId) => [
        { type: 'MaintenanceTask', id: taskId },
        { type: 'MaintenanceTask', id: 'LIST' },
      ],
    }),

    updateTaskProgress: builder.mutation({
      query: ({ taskId, ...data }) => ({
        url: `/api/v1/admin/maintenance/tasks/${taskId}/progress`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'MaintenanceTask', id: taskId },
      ],
    }),

    verifyTaskCompletion: builder.mutation({
      query: ({ taskId, qualityRating, verificationNotes }) => ({
        url: `/api/v1/admin/maintenance/tasks/${taskId}/verify`,
        method: 'PUT',
        params: {
          quality_rating: qualityRating,
          verification_notes: verificationNotes,
        },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'MaintenanceTask', id: taskId },
      ],
    }),

    reassignTask: builder.mutation({
      query: ({ taskId, newAssignedToId, reason }) => ({
        url: `/api/v1/admin/maintenance/tasks/${taskId}/reassign`,
        method: 'PUT',
        params: {
          new_assigned_to_id: newAssignedToId,
          reason,
        },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: 'MaintenanceTask', id: taskId },
      ],
    }),
  }),
});

export const {
  useGetMaintenanceTasksQuery,
  useGetMaintenanceTaskByIdQuery,
  useCreateMaintenanceTaskMutation,
  useDeleteMaintenanceTaskMutation,
  useUpdateTaskProgressMutation,
  useVerifyTaskCompletionMutation,
  useReassignTaskMutation,
} = maintenanceTaskApi;