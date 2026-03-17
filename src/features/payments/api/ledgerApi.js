// src/features/payments/api/ledgerApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const ledgerApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionHistory: builder.query({
      query: (params) => ({
        url: '/api/v1/ledger/transactions',
        params: buildQueryParams({
          start_date: params?.startDate,
          end_date: params?.endDate,
          hostel_id: params?.hostelId,
          user_id: params?.userId,
          transaction_type: params?.transactionType,
          page: params?.page,
          page_size: params?.pageSize,
        }),
      }),
      providesTags: ['Transaction'],
    }),

    getOutstandingPayments: builder.query({
      query: (params) => ({
        url: '/api/v1/ledger/outstanding',
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          overdue_only: params?.overdueOnly,
        }),
      }),
      providesTags: ['Invoice'],
    }),

    getRevenueByHostel: builder.query({
      query: (params) => ({
        url: '/api/v1/ledger/reports/revenue-by-hostel',
        params: buildQueryParams({
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
    }),

    getMonthlyRevenue: builder.query({
      query: ({ year, hostelId }) => ({
        url: `/api/v1/ledger/reports/monthly-revenue/${year}`,
        params: { hostel_id: hostelId },
      }),
    }),
  }),
});

export const {
  useGetTransactionHistoryQuery,
  useGetOutstandingPaymentsQuery,
  useGetRevenueByHostelQuery,
  useGetMonthlyRevenueQuery,
} = ledgerApi;