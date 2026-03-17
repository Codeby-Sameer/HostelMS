// src/features/payments/api/paymentApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const paymentApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Booking Payments
    getAllPayments: builder.query({
      query: () => '/api/v1/payments/payments',
      providesTags: (result) => providesList(result, 'Payment'),
    }),

    createBookingPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/api/v1/payments/payments',
        method: 'POST',
        body: paymentData,
      }),
      invalidatesTags: invalidatesList('Payment'),
    }),

    confirmPayment: builder.mutation({
      query: (paymentId) => ({
        url: `/api/v1/payments/payments/${paymentId}/confirm`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, paymentId) => [
        { type: 'Payment', id: paymentId },
      ],
    }),

    refundPayment: builder.mutation({
      query: (refundData) => ({
        url: '/api/v1/payments/payments/refund',
        method: 'POST',
        body: refundData,
      }),
      invalidatesTags: ['Payment', 'Refund'],
    }),

    releaseSecurityDeposit: builder.mutation({
      query: (releaseData) => ({
        url: '/api/v1/payments/payments/security-deposit/release',
        method: 'POST',
        body: releaseData,
      }),
      invalidatesTags: ['Payment'],
    }),

    getPaymentConfirmation: builder.query({
      query: (confirmationNumber) => 
        `/api/v1/payments/payments/confirmations/${confirmationNumber}`,
    }),

    downloadPaymentInvoice: builder.query({
      query: (confirmationNumber) => 
        `/api/v1/payments/payments/invoice/${confirmationNumber}`,
    }),

    // Razorpay
    createRazorpayOrder: builder.mutation({
      query: (orderData) => ({
        url: '/api/v1/payments/razorpay/create-order',
        method: 'POST',
        body: orderData,
      }),
    }),

    // Simple Payments
    confirmSimplePayment: builder.mutation({
      query: ({ userEmail, phone, amount }) => ({
        url: '/api/v1/simple-payments/confirm',
        method: 'POST',
        params: {
          user_email: userEmail,
          phone,
          amount,
        },
      }),
      invalidatesTags: ['Payment'],
    }),

    downloadSimpleInvoice: builder.query({
      query: (bookingRef) => `/api/v1/simple-payments/invoice/${bookingRef}`,
    }),
  }),
});

export const {
  useGetAllPaymentsQuery,
  useCreateBookingPaymentMutation,
  useConfirmPaymentMutation,
  useRefundPaymentMutation,
  useReleaseSecurityDepositMutation,
  useGetPaymentConfirmationQuery,
  useLazyDownloadPaymentInvoiceQuery,
  useCreateRazorpayOrderMutation,
  useConfirmSimplePaymentMutation,
  useLazyDownloadSimpleInvoiceQuery,
} = paymentApi;