// src/features/notifications/api/emailApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const emailApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Email Templates
    createEmailTemplate: builder.mutation({
      query: (templateData) => ({
        url: '/email/templates',
        method: 'POST',
        body: templateData,
      }),
      invalidatesTags: invalidatesList('Email'),
    }),

    getEmailTemplate: builder.query({
      query: (id) => `/email/templates/${id}`,
      providesTags: (result, error, id) => [{ type: 'Email', id }],
    }),

    updateEmailTemplate: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/email/templates/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Email', id },
        { type: 'Email', id: 'LIST' },
      ],
    }),

    deleteEmailTemplate: builder.mutation({
      query: (id) => ({
        url: `/email/templates/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Email'),
    }),

    // Send Email
    sendEmail: builder.mutation({
      query: (emailData) => ({
        url: '/email/send',
        method: 'POST',
        body: emailData,
      }),
      invalidatesTags: ['Email'],
    }),

    // Email Logs
    listEmailLogs: builder.query({
      query: (params) => ({
        url: '/email/logs',
        params: {
          skip: params?.skip,
          limit: params?.limit,
          recipient: params?.recipient,
          status: params?.status,
        },
      }),
      providesTags: (result) => providesList(result, 'Email'),
    }),
  }),
});

export const {
  useCreateEmailTemplateMutation,
  useGetEmailTemplateQuery,
  useUpdateEmailTemplateMutation,
  useDeleteEmailTemplateMutation,
  useSendEmailMutation,
  useListEmailLogsQuery,
} = emailApi;