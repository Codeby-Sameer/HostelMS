// src/features/notifications/api/notificationApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const notificationApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Unified Notification Routing Engine
    getUser: builder.query({
      query: (userId) => `/api/users/${userId}`,
      providesTags: (result, error, userId) => [{ type: 'User', id: userId }],
    }),

    getSupervisorsForAdmin: builder.query({
      query: (adminId) => `/api/supervisor-assignments/admin/${adminId}`,
    }),

    // Routing Rules
    createRoutingRule: builder.mutation({
      query: (ruleData) => ({
        url: '/api/routing-rules/',
        method: 'POST',
        body: ruleData,
      }),
      invalidatesTags: invalidatesList('RoutingRule'),
    }),

    listRoutingRules: builder.query({
      query: (params) => ({
        url: '/api/routing-rules/',
        params: {
          category: params?.category,
          source_role: params?.sourceRole,
        },
      }),
      providesTags: (result) => providesList(result, 'RoutingRule'),
    }),

    updateRoutingRule: builder.mutation({
      query: ({ ruleId, ...data }) => ({
        url: `/api/routing-rules/${ruleId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { ruleId }) => [
        { type: 'RoutingRule', id: ruleId },
        { type: 'RoutingRule', id: 'LIST' },
      ],
    }),

    // Notifications
    createNotification: builder.mutation({
      query: (notificationData) => ({
        url: '/api/notifications/',
        method: 'POST',
        body: notificationData,
      }),
      invalidatesTags: invalidatesList('Notification'),
    }),

    getNotification: builder.query({
      query: (notificationId) => `/api/notifications/${notificationId}`,
      providesTags: (result, error, notificationId) => [{ type: 'Notification', id: notificationId }],
    }),

    resolveNotification: builder.mutation({
      query: ({ notificationId, userId, resolutionNotes }) => ({
        url: `/api/notifications/${notificationId}/resolve`,
        method: 'PUT',
        params: {
          user_id: userId,
          resolution_notes: resolutionNotes,
        },
      }),
      invalidatesTags: (result, error, { notificationId }) => [
        { type: 'Notification', id: notificationId },
      ],
    }),

    // Stats
    getSupervisorStats: builder.query({
      query: ({ supervisorId, days = 30 }) => ({
        url: `/api/stats/supervisor/${supervisorId}`,
        params: { days },
      }),
    }),

    getAdminStats: builder.query({
      query: ({ adminId, days = 30 }) => ({
        url: `/api/stats/admin/${adminId}`,
        params: { days },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetSupervisorsForAdminQuery,
  useCreateRoutingRuleMutation,
  useListRoutingRulesQuery,
  useUpdateRoutingRuleMutation,
  useCreateNotificationMutation,
  useGetNotificationQuery,
  useResolveNotificationMutation,
  useGetSupervisorStatsQuery,
  useGetAdminStatsQuery,
} = notificationApi;