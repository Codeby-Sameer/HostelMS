// src/features/audit/api/auditApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const auditApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Hostel Admin Audit
    getAuditLogs: builder.query({
      query: (params) => ({
        url: '/api/v1/hostel_admin/audit',
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          user_id: params?.userId,
          hostel_id: params?.hostelId,
          action: params?.action,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: (result) => providesList(result, 'AuditLog'),
    }),

    createAuditLog: builder.mutation({
      query: (logData) => ({
        url: '/api/v1/hostel_admin/audit/logs',
        method: 'POST',
        body: logData,
      }),
      invalidatesTags: invalidatesList('AuditLog'),
    }),

    // Supervisor Audit
    getSupervisorAuditLogs: builder.query({
      query: (params) => ({
        url: '/api/v1/supervisor/audit',
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          hostel_id: params?.hostelId,
          action: params?.action,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: (result) => providesList(result, 'AuditLog'),
    }),

    createSupervisorAuditLog: builder.mutation({
      query: (logData) => ({
        url: '/api/v1/supervisor/audit/logs',
        method: 'POST',
        body: logData,
      }),
      invalidatesTags: invalidatesList('AuditLog'),
    }),
  }),
});

export const {
  useGetAuditLogsQuery,
  useCreateAuditLogMutation,
  useGetSupervisorAuditLogsQuery,
  useCreateSupervisorAuditLogMutation,
} = auditApi;