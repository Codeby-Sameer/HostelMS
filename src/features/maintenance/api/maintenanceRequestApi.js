// src/features/maintenance/api/maintenanceRequestApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const maintenanceRequestApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Maintenance Requests
    getMaintenanceRequests: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/maintenance/requests',
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          category: params?.category,
          priority: params?.priority,
          status: params?.status,
          assigned_to_id: params?.assignedToId,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: (result) => providesList(result, 'MaintenanceRequest'),
    }),

    getMaintenanceRequestById: builder.query({
      query: (requestId) => `/api/v1/admin/maintenance/requests/${requestId}`,
      providesTags: (result, error, requestId) => [{ type: 'MaintenanceRequest', id: requestId }],
    }),

    createMaintenanceRequest: builder.mutation({
      query: ({ hostelId, ...data }) => ({
        url: '/api/v1/admin/maintenance/requests',
        method: 'POST',
        params: { hostel_id: hostelId },
        body: data,
      }),
      invalidatesTags: invalidatesList('MaintenanceRequest'),
    }),

    updateMaintenanceRequest: builder.mutation({
      query: ({ requestId, ...data }) => ({
        url: `/api/v1/admin/maintenance/requests/${requestId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: 'MaintenanceRequest', id: requestId },
        { type: 'MaintenanceRequest', id: 'LIST' },
      ],
    }),

    deleteMaintenanceRequest: builder.mutation({
      query: (requestId) => ({
        url: `/api/v1/admin/maintenance/requests/${requestId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('MaintenanceRequest'),
    }),

    getMaintenanceStats: builder.query({
      query: (hostelId) => ({
        url: '/api/v1/admin/maintenance/requests/stats/summary',
        params: { hostel_id: hostelId },
      }),
      providesTags: ['MaintenanceRequest'],
    }),

    // Maintenance Costs
    getMaintenanceCosts: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/maintenance-costs/maintenance/costs',
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          category: params?.category,
          payment_status: params?.paymentStatus,
          start_date: params?.startDate,
          end_date: params?.endDate,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: ['MaintenanceRequest'],
    }),
  }),
});

export const {
  useGetMaintenanceRequestsQuery,
  useGetMaintenanceRequestByIdQuery,
  useCreateMaintenanceRequestMutation,
  useUpdateMaintenanceRequestMutation,
  useDeleteMaintenanceRequestMutation,
  useGetMaintenanceStatsQuery,
  useGetMaintenanceCostsQuery,
} = maintenanceRequestApi;