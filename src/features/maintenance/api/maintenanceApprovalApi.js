// src/features/maintenance/api/maintenanceApprovalApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const maintenanceApprovalApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getApprovalThreshold: builder.query({
      query: () => '/api/v1/admin/maintenance/approvals/threshold',
    }),

    getPendingApprovals: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/maintenance/approvals/pending',
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: (result) => providesList(result, 'MaintenanceRequest'),
    }),

    submitForApproval: builder.mutation({
      query: ({ requestId, justification }) => ({
        url: '/api/v1/admin/maintenance/approvals/submit',
        method: 'POST',
        params: {
          request_id: requestId,
          justification,
        },
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: 'MaintenanceRequest', id: requestId },
      ],
    }),

    approveHighValueRepair: builder.mutation({
      query: ({ requestId, approvalNotes }) => ({
        url: `/api/v1/admin/maintenance/approvals/${requestId}/approve`,
        method: 'PUT',
        params: { approval_notes: approvalNotes },
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: 'MaintenanceRequest', id: requestId },
      ],
    }),

    rejectHighValueRepair: builder.mutation({
      query: ({ requestId, rejectionReason }) => ({
        url: `/api/v1/admin/maintenance/approvals/${requestId}/reject`,
        method: 'PUT',
        params: { rejection_reason: rejectionReason },
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: 'MaintenanceRequest', id: requestId },
      ],
    }),

    getApprovalHistory: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/maintenance/approvals/history',
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          status: params?.status,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
    }),

    getApprovalStats: builder.query({
      query: (hostelId) => ({
        url: '/api/v1/admin/maintenance/approvals/stats',
        params: { hostel_id: hostelId },
      }),
    }),
  }),
});

export const {
  useGetApprovalThresholdQuery,
  useGetPendingApprovalsQuery,
  useSubmitForApprovalMutation,
  useApproveHighValueRepairMutation,
  useRejectHighValueRepairMutation,
  useGetApprovalHistoryQuery,
  useGetApprovalStatsQuery,
} = maintenanceApprovalApi;