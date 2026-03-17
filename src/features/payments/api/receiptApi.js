// src/features/payments/api/receiptApi.js
import { appApi } from '../../../services/api/appApi';

export const receiptApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceiptByTransaction: builder.query({
      query: (transactionId) => 
        `/api/v1/receipts/receipts/transaction/${transactionId}`,
    }),

    downloadReceipt: builder.query({
      query: (receiptId) => 
        `/api/v1/receipts/receipts/${receiptId}/download`,
    }),
  }),
});

export const {
  useGetReceiptByTransactionQuery,
  useLazyDownloadReceiptQuery,
} = receiptApi;