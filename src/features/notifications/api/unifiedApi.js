// src/features/notifications/api/unifiedNotificationApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const unifiedNotificationApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Templates
    createUnifiedTemplate: builder.mutation({
      query: (templateData) => ({
        url: '/routing/templates/',
        method: 'POST',
        body: templateData,
      }),
      invalidatesTags: invalidatesList('Template'),
    }),

    listUnifiedTemplates: builder.query({
      query: (category) => ({
        url: '/routing/templates/',
        params: { category },
      }),
      providesTags: (result) => providesList(result, 'Template'),
    }),

    getUnifiedTemplate: builder.query({
      query: (templateId) => `/routing/templates/${templateId}`,
      providesTags: (result, error, templateId) => [{ type: 'Template', id: templateId }],
    }),

    // Send Notifications
    sendUnifiedNotification: builder.mutation({
      query: (notificationData) => ({
        url: '/routing/send/',
        method: 'POST',
        body: notificationData,
      }),
      invalidatesTags: ['Notification'],
    }),

    broadcastUnifiedNotification: builder.mutation({
      query: (broadcastData) => ({
        url: '/routing/broadcast/',
        method: 'POST',
        body: broadcastData,
      }),
      invalidatesTags: ['Notification'],
    }),
  }),
});

export const {
  useCreateUnifiedTemplateMutation,
  useListUnifiedTemplatesQuery,
  useGetUnifiedTemplateQuery,
  useSendUnifiedNotificationMutation,
  useBroadcastUnifiedNotificationMutation,
} = unifiedNotificationApi;