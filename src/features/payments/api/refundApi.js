// src/features/payments/api/refundApi.js
import { appApi } from '../../../services/api/appApi';
import { invalidatesItem } from '../../../services/api/apiHelpers';

export const refundApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Request Refund
    requestRefund: builder.mutation({
      query: (refundData) => ({
        url: '/api/v1/refunds/refunds/request',
        method: 'POST',
        body: refundData,
      }),
      invalidatesTags: ['Refund'],
    }),

    // Approve Refund
    approveRefund: builder.mutation({
      query: ({ refundId, ...approvalData }) => ({
        url: `/api/v1/refunds/refunds/${refundId}/approve`,
        method: 'POST',
        body: approvalData,
      }),
      invalidatesTags: (result, error, { refundId }) => [
        { type: 'Refund', id: refundId },
        { type: 'Payment' },
      ],
    }),
  }),
});

export const {
  useRequestRefundMutation,
  useApproveRefundMutation,
} = refundApi;