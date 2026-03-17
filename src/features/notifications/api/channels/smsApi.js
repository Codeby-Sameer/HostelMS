// src/features/notifications/api/smsApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const smsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // SMS Templates
    createSMSTemplate: builder.mutation({
      query: (templateData) => ({
        url: '/sms/templates/',
        method: 'POST',
        body: templateData,
      }),
      invalidatesTags: invalidatesList('SMS'),
    }),

    listSMSTemplates: builder.query({
      query: (params) => ({
        url: '/sms/templates/',
        params: {
          skip: params?.skip,
          limit: params?.limit,
          message_type: params?.messageType,
        },
      }),
      providesTags: (result) => providesList(result, 'SMS'),
    }),

    deleteSMSTemplate: builder.mutation({
      query: (id) => ({
        url: `/sms/templates/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('SMS'),
    }),

    // Send SMS
    sendSMS: builder.mutation({
      query: (smsData) => ({
        url: '/sms/send/',
        method: 'POST',
        body: smsData,
      }),
      invalidatesTags: ['SMS'],
    }),

    // OTP
    sendOTP: builder.mutation({
      query: (otpData) => ({
        url: '/sms/otp/send/',
        method: 'POST',
        body: otpData,
      }),
    }),

    verifyOTP: builder.mutation({
      query: (verifyData) => ({
        url: '/sms/otp/verify/',
        method: 'POST',
        body: verifyData,
      }),
    }),

    // Emergency Alerts
    createEmergencyAlert: builder.mutation({
      query: (alertData) => ({
        url: '/sms/emergency-alerts/',
        method: 'POST',
        body: alertData,
      }),
      invalidatesTags: ['SMS'],
    }),

    // SMS Logs
    getSMSLogs: builder.query({
      query: (params) => ({
        url: '/sms/logs/',
        params: {
          phone_number: params?.phoneNumber,
          status: params?.status,
          message_type: params?.messageType,
        },
      }),
      providesTags: (result) => providesList(result, 'SMS'),
    }),
  }),
});

export const {
  useCreateSMSTemplateMutation,
  useListSMSTemplatesQuery,
  useDeleteSMSTemplateMutation,
  useSendSMSMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useCreateEmergencyAlertMutation,
  useGetSMSLogsQuery,
} = smsApi;