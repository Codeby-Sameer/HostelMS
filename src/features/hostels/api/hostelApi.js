// src/features/hostels/api/hostelApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const hostelApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Hostel CRUD
    getHostels: builder.query({
      query: (params = {}) => ({
        url: '/api/v1/hostels/',
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
          search: params?.search,
        }),
      }),
      providesTags: (result) => providesList(result?.data || result || [], 'Hostel'),
    }),

    getHostelById: builder.query({
      query: (hostelId) => `/api/v1/hostels/${hostelId}`,
      providesTags: (result, error, hostelId) => [{ type: 'Hostel', id: hostelId }],
    }),

    createHostel: builder.mutation({
      query: (hostelData) => ({
        url: '/api/v1/hostels/',
        method: 'POST',
        body: hostelData,
      }),
      invalidatesTags: invalidatesList('Hostel'),
    }),

    updateHostel: builder.mutation({
      query: ({ hostelId, ...data }) => ({
        url: `/api/v1/hostels/${hostelId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { hostelId }) => [
        { type: 'Hostel', id: hostelId },
        { type: 'Hostel', id: 'LIST' },
      ],
    }),

    deleteHostel: builder.mutation({
      query: (hostelId) => ({
        url: `/api/v1/hostels/${hostelId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Hostel'),
    }),

    // Location Management - Use locationsApi instead
    // These endpoints are now managed in locationsApi.js

    // Hostel Comparison
    compareHostels: builder.query({
      query: (hostelIds) => ({
        url: '/api/v1/hostels/compare',
        params: { hostel_ids: hostelIds },
      }),
      providesTags: (result, error, hostelIds) => 
        hostelIds.map(id => ({ type: 'Hostel', id })),
    }),

    // Session Management (Hostel Admin)
    switchSession: builder.mutation({
      query: ({ hostel_id }) => ({
        url: '/api/v1/hostel_admin/session/switch',
        method: 'POST',
        body: { hostel_id },
      }),
      invalidatesTags: ['Dashboard'],
    }),

    setActiveHostel: builder.mutation({
      query: ({ hostel_id }) => ({
        url: '/api/v1/hostel_admin/session/set-active-hostel',
        method: 'POST',
        body: { hostel_id },
      }),
    }),

    getActiveSession: builder.query({
      query: () => '/api/v1/hostel_admin/session/active',
      providesTags: ['Hostel'],
    }),

    getRecentSessions: builder.query({
      query: (limit = 5) => ({
        url: '/api/v1/hostel_admin/session/recent',
        params: { limit },
      }),
    }),

    clearSession: builder.mutation({
      query: (sessionId) => ({
        url: '/api/v1/hostel_admin/session/clear',
        method: 'POST',
        body: { session_id: sessionId },
      }),
    }),

    // User Hostels (Admin)
    getUserHostels: builder.query({
      query: () => '/api/v1/admin/hostels',
      providesTags: ['Hostel'],
    }),

    assignAdminToHostel: builder.mutation({
      query: ({ hostelId, adminId }) => ({
        url: `/api/v1/admin/hostels/${hostelId}/assign-admin/${adminId}`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, { hostelId }) => [
        { type: 'Hostel', id: hostelId },
      ],
    }),
  }),
});

export const {
  // Hostel hooks
  useGetHostelsQuery,
  useGetHostelByIdQuery,
  useCreateHostelMutation,
  useUpdateHostelMutation,
  useDeleteHostelMutation,
  
  // Location hooks
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
  
  // Comparison hooks
  useCompareHostelsQuery,
  useLazyCompareHostelsQuery,
  
  // Session hooks
  useSwitchSessionMutation,
  useSetActiveHostelMutation,
  useGetActiveSessionQuery,
  useGetRecentSessionsQuery,
  useClearSessionMutation,
  useGetUserHostelsQuery,
  useAssignAdminToHostelMutation,
} = hostelApi;