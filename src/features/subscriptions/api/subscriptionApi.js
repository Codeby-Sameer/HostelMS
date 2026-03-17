// features/superAdmin/api/subscriptionApi.js
import { appApi } from "@/services/api/appApi";

export const subscriptionApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    createPlan: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/plans",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listPlans: builder.query({
      query: () => "/subscriptions/plans",
      providesTags: ["Subscription"],
    }),

    createSubscription: builder.mutation({
      query: (body) => ({
        url: "/subscriptions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listSubscriptions: builder.query({
      query: () => "/subscriptions",
      providesTags: ["Subscription"],
    }),

    createOrganisationPayment: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/Organisationpayments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listOrganisationPayments: builder.query({
      query: (subscriptionId) => ({
        url: "/subscriptions/Organisationpayments",
        params: subscriptionId ? { subscription_id: subscriptionId } : undefined,
      }),
      providesTags: ["Subscription"],
    }),

    createSubscriptionChange: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/changes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listSubscriptionChanges: builder.query({
      query: (subscriptionId) =>
        `/subscriptions/changes/${subscriptionId}`,
      providesTags: ["Subscription"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreatePlanMutation,
  useListPlansQuery,
  useCreateSubscriptionMutation,
  useListSubscriptionsQuery,
  useCreateOrganisationPaymentMutation,
  useListOrganisationPaymentsQuery,
  useCreateSubscriptionChangeMutation,
  useListSubscriptionChangesQuery,
} = subscriptionApi;