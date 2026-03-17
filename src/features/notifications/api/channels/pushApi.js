// src/features/notifications/api/pushNotificationApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const pushNotificationApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Device Tokens
    registerDeviceToken: builder.mutation({
      query: (tokenData) => ({
        url: '/notifications/device-tokens/',
        method: 'POST',
        body: tokenData,
      }),
      invalidatesTags: ['DeviceToken'],
    }),

    // Push Notification Templates
    createPushTemplate: builder.mutation({
      query: (templateData) => ({
        url: '/notifications/templates/',
        method: 'POST',
        body: templateData,
      }),
      invalidatesTags: invalidatesList('Template'),
    }),

    listPushTemplates: builder.query({
      query: (notificationType) => ({
        url: '/notifications/templates/',
        params: { notification_type: notificationType },
      }),
      providesTags: (result) => providesList(result, 'Template'),
    }),

    // Send Push Notifications
    sendPushNotification: builder.mutation({
      query: (notificationData) => ({
        url: '/notifications/send/',
        method: 'POST',
        body: notificationData,
      }),
      invalidatesTags: ['Notification'],
    }),

    broadcastPushNotification: builder.mutation({
      query: (broadcastData) => ({
        url: '/notifications/broadcast/',
        method: 'POST',
        body: broadcastData,
      }),
      invalidatesTags: ['Notification'],
    }),

    // User Logs
    getUserPushLogs: builder.query({
      query: (userId) => `/notifications/user/${userId}`,
      providesTags: (result, error, userId) => [{ type: 'Notification', id: userId }],
    }),

    // Preferences
    getUserPushPreferences: builder.query({
      query: (userId) => `/notifications/preferences/${userId}`,
    }),
  }),
});

export const {
  useRegisterDeviceTokenMutation,
  useCreatePushTemplateMutation,
  useListPushTemplatesQuery,
  useSendPushNotificationMutation,
  useBroadcastPushNotificationMutation,
  useGetUserPushLogsQuery,
  useGetUserPushPreferencesQuery,
} = pushNotificationApi;