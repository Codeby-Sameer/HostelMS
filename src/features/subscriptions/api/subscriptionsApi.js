// src/features/subscriptions/api/subscriptionsApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const subscriptionsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Plans endpoints
    getPlans: builder.query({
      query: (params = {}) => ({
        url: '/api/v1/subscriptions/plans',
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
          search: params?.search,
        }),
      }),
      providesTags: (result) => providesList(result?.data || result || [], 'Plan'),
    }),

    createPlan: builder.mutation({
      query: (planData) => ({
        url: '/api/v1/subscriptions/plans',
        method: 'POST',
        body: planData,
      }),
      invalidatesTags: invalidatesList('Plan'),
    }),

    updatePlan: builder.mutation({
      query: ({ id, ...planData }) => ({
        url: `/api/v1/subscriptions/plans/${id}`,
        method: 'PUT',
        body: planData,
      }),
      invalidatesTags: ['Plan'],
    }),

    deletePlan: builder.mutation({
      query: (id) => ({
        url: `/api/v1/subscriptions/plans/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Plan'),
    }),

    // Subscriptions endpoints
    getSubscriptions: builder.query({
      query: (params = {}) => ({
        url: '/api/v1/subscriptions/',
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
          search: params?.search,
          status: params?.status,
        }),
      }),
      providesTags: (result) => providesList(result?.data || result || [], 'Subscription'),
    }),

    createSubscription: builder.mutation({
      query: (subscriptionData) => ({
        url: '/api/v1/subscriptions/',
        method: 'POST',
        body: subscriptionData,
      }),
      invalidatesTags: invalidatesList('Subscription'),
    }),

    updateSubscription: builder.mutation({
      query: ({ id, ...subscriptionData }) => ({
        url: `/api/v1/subscriptions/${id}`,
        method: 'PUT',
        body: subscriptionData,
      }),
      invalidatesTags: ['Subscription'],
    }),

    deleteSubscription: builder.mutation({
      query: (id) => ({
        url: `/api/v1/subscriptions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Subscription'),
    }),

    // Organisation Payments endpoints
    createPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/api/v1/subscriptions/organisationpayments',
        method: 'POST',
        body: paymentData,
      }),
      invalidatesTags: [
        { type: 'Subscription', id: 'LIST' },
      ],
    }),

    getPayments: builder.query({
      query: (params = {}) => ({
        url: '/api/v1/subscriptions/organisationpayments',
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
          search: params?.search,
        }),
      }),
      providesTags: (result) => providesList(result?.data || result || [], 'Payment'),
    }),

    // Changes endpoints
    createChange: builder.mutation({
      query: (changeData) => ({
        url: '/api/v1/subscriptions/changes',
        method: 'POST',
        body: changeData,
      }),
      invalidatesTags: [
        { type: 'Subscription', id: 'LIST' },
        { type: 'Change', id: 'LIST' },
      ],
    }),

    getChanges: builder.query({
      query: (subscriptionId, params = {}) => ({
        url: `/api/v1/subscriptions/changes/${subscriptionId}`,
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
        }),
      }),
      providesTags: (result, error, subscriptionId) => 
        result?.data?.length > 0 
          ? [
              ...providesList(result?.data || [], 'Change'),
              { type: 'Subscription', id: subscriptionId },
            ]
          : [{ type: 'Subscription', id: subscriptionId }],
    }),
  }),
});

export const {
  useGetPlansQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
  useGetSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
  useDeleteSubscriptionMutation,
  useCreatePaymentMutation,
  useGetPaymentsQuery,
  useCreateChangeMutation,
  useGetChangesQuery,
} = subscriptionsApi;
