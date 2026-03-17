// src/features/payments/api/feeStructureApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const feeStructureApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Hostels for Fee Structure
    getFeeStructureHostels: builder.query({
      query: () => '/api/v1/fee-structure/hostels',
      providesTags: (result) => providesList(result, 'Hostel'),
    }),

    // Fee Plans
    createFeePlan: builder.mutation({
      query: (planData) => ({
        url: '/api/v1/fee-structure/fee-plans',
        method: 'POST',
        body: planData,
      }),
      invalidatesTags: ['Hostel'],
    }),

    // Security Deposits
    createSecurityDeposit: builder.mutation({
      query: (depositData) => ({
        url: '/api/v1/fee-structure/security-deposits',
        method: 'POST',
        body: depositData,
      }),
      invalidatesTags: ['Hostel'],
    }),

    // Mess Charges
    createMessCharge: builder.mutation({
      query: (chargeData) => ({
        url: '/api/v1/fee-structure/mess-charges',
        method: 'POST',
        body: chargeData,
      }),
      invalidatesTags: ['Hostel'],
    }),

    // Additional Services
    createAdditionalService: builder.mutation({
      query: (serviceData) => ({
        url: '/api/v1/fee-structure/additional-services',
        method: 'POST',
        body: serviceData,
      }),
      invalidatesTags: ['Hostel'],
    }),
  }),
});

export const {
  useGetFeeStructureHostelsQuery,
  useCreateFeePlanMutation,
  useCreateSecurityDepositMutation,
  useCreateMessChargeMutation,
  useCreateAdditionalServiceMutation,
} = feeStructureApi;