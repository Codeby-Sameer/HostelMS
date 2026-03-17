// src/features/reminders/api/reminderApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const reminderApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Templates
    createReminderTemplate: builder.mutation({
      query: (templateData) => ({
        url: '/api/v1/reminders/templates/',
        method: 'POST',
        body: templateData,
      }),
      invalidatesTags: invalidatesList('Template'),
    }),

    getReminderTemplates: builder.query({
      query: (reminderType) => ({
        url: '/api/v1/reminders/templates/',
        params: { reminder_type: reminderType },
      }),
      providesTags: (result) => providesList(result, 'Template'),
    }),

    // Config
    saveReminderConfig: builder.mutation({
      query: (configData) => ({
        url: '/api/v1/reminders/config/',
        method: 'POST',
        body: configData,
      }),
      invalidatesTags: ['Template'],
    }),

    getReminderConfig: builder.query({
      query: (hostelId) => `/api/v1/reminders/config/${hostelId}`,
      providesTags: (result, error, hostelId) => [{ type: 'Template', id: hostelId }],
    }),
  }),
});

export const {
  useCreateReminderTemplateMutation,
  useGetReminderTemplatesQuery,
  useSaveReminderConfigMutation,
  useGetReminderConfigQuery,
} = reminderApi;