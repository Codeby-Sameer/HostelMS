// src/features/payments/api/financialApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const financialApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Financial Summary
    getFinancialSummary: builder.query({
      query: (params) => ({
        url: '/api/v1/api/financial/summary',
        params: buildQueryParams({
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: ['Transaction'],
    }),

    listFinancialSummaries: builder.query({
      query: (params) => ({
        url: '/api/v1/api/financial/summaries',
        params: buildQueryParams({
          start_date: params?.startDate,
          end_date: params?.endDate,
          limit: params?.limit,
        }),
      }),
      providesTags: ['Transaction'],
    }),

    // Commission
    payCommission: builder.mutation({
      query: (commissionId) => ({
        url: `/api/v1/api/commissions/${commissionId}/pay`,
        method: 'POST',
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const {
  useGetFinancialSummaryQuery,
  useListFinancialSummariesQuery,
  usePayCommissionMutation,
} = financialApi;