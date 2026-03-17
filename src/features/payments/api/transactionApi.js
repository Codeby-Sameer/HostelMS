// src/features/payments/api/transactionApi.js
import { appApi } from '@/services/api/appApi';
import { providesList, invalidatesList } from '@/services/api/apiHelpers';

export const transactionApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    processPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/api/v1/transactions/transactions/process',
        method: 'POST',
        body: paymentData,
      }),
      invalidatesTags: ['Transaction', 'Invoice'],
    }),

    getTransactionById: builder.query({
      query: (transactionId) => `/api/v1/transactions/transactions/${transactionId}`,
      providesTags: (result, error, transactionId) => [{ type: 'Transaction', id: transactionId }],
    }),
  }),
});

export const {
  useProcessPaymentMutation,
  useGetTransactionByIdQuery,
} = transactionApi;