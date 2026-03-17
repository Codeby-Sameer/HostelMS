// src/features/payments/api/invoiceApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const invoiceApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    createInvoice: builder.mutation({
      query: (invoiceData) => ({
        url: '/api/v1/invoices/invoices/',
        method: 'POST',
        body: invoiceData,
      }),
      invalidatesTags: invalidatesList('Invoice'),
    }),

    getInvoiceById: builder.query({
      query: (invoiceId) => `/api/v1/invoices/invoices/${invoiceId}`,
      providesTags: (result, error, invoiceId) => [{ type: 'Invoice', id: invoiceId }],
    }),

    getUserInvoices: builder.query({
      query: (userId) => `/api/v1/invoices/invoices/user/${userId}`,
      providesTags: (result) => providesList(result, 'Invoice'),
    }),
  }),
});

export const {
  useCreateInvoiceMutation,
  useGetInvoiceByIdQuery,
  useGetUserInvoicesQuery,
} = invoiceApi;