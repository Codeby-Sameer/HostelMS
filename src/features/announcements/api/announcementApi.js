// src/features/announcements/api/announcementApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const announcementApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin Announcements
    listAdminAnnouncements: builder.query({
      query: () => '/api/v1/admin/announcements/',
      providesTags: (result) => providesList(result, 'Announcement'),
    }),

    createAdminAnnouncement: builder.mutation({
      query: (announcementData) => ({
        url: '/api/v1/admin/announcements/',
        method: 'POST',
        body: announcementData,
      }),
      invalidatesTags: invalidatesList('Announcement'),
    }),

    getAdminAnnouncement: builder.query({
      query: (announcementId) => `/api/v1/admin/announcements/${announcementId}`,
      providesTags: (result, error, announcementId) => [{ type: 'Announcement', id: announcementId }],
    }),

    updateAdminAnnouncement: builder.mutation({
      query: ({ announcementId, ...data }) => ({
        url: `/api/v1/admin/announcements/${announcementId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { announcementId }) => [
        { type: 'Announcement', id: announcementId },
        { type: 'Announcement', id: 'LIST' },
      ],
    }),

    deleteAdminAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/api/v1/admin/announcements/${announcementId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Announcement'),
    }),

    approveAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/api/v1/admin/announcements/${announcementId}/approve`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, announcementId) => [{ type: 'Announcement', id: announcementId }],
    }),

    publishAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/api/v1/admin/announcements/${announcementId}/publish`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, announcementId) => [{ type: 'Announcement', id: announcementId }],
    }),

    // Supervisor Announcements
    createSupervisorAnnouncement: builder.mutation({
      query: (announcementData) => ({
        url: '/api/v1/supervisor/announcements/',
        method: 'POST',
        body: announcementData,
      }),
      invalidatesTags: invalidatesList('Announcement'),
    }),

    updateSupervisorAnnouncement: builder.mutation({
      query: ({ announcementId, ...data }) => ({
        url: `/api/v1/supervisor/announcements/${announcementId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { announcementId }) => [{ type: 'Announcement', id: announcementId }],
    }),

    deleteSupervisorAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/api/v1/supervisor/announcements/${announcementId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Announcement'),
    }),

    attachFileToAnnouncement: builder.mutation({
      query: ({ announcementId, file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `/api/v1/supervisor/announcements/${announcementId}/attach`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: (result, error, { announcementId }) => [{ type: 'Announcement', id: announcementId }],
    }),

    // Student Announcements
    listStudentAnnouncements: builder.query({
      query: () => '/api/v1/student/announcements/',
      providesTags: (result) => providesList(result, 'Announcement'),
    }),

    getStudentAnnouncement: builder.query({
      query: (announcementId) => `/api/v1/student/announcements/${announcementId}`,
      providesTags: (result, error, announcementId) => [{ type: 'Announcement', id: announcementId }],
    }),

    acknowledgeAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/api/v1/student/announcements/${announcementId}/acknowledge`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, announcementId) => [{ type: 'Announcement', id: announcementId }],
    }),
  }),
});

export const {
  // Admin hooks
  useListAdminAnnouncementsQuery,
  useCreateAdminAnnouncementMutation,
  useGetAdminAnnouncementQuery,
  useUpdateAdminAnnouncementMutation,
  useDeleteAdminAnnouncementMutation,
  useApproveAnnouncementMutation,
  usePublishAnnouncementMutation,
  
  // Supervisor hooks
  useCreateSupervisorAnnouncementMutation,
  useUpdateSupervisorAnnouncementMutation,
  useDeleteSupervisorAnnouncementMutation,
  useAttachFileToAnnouncementMutation,
  
  // Student hooks
  useListStudentAnnouncementsQuery,
  useGetStudentAnnouncementQuery,
  useAcknowledgeAnnouncementMutation,
} = announcementApi;