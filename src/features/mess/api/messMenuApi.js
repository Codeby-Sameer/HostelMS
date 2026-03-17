// src/features/mess/api/messMenuApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const messMenuApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin Menu Endpoints
    createMenu: builder.mutation({
      query: (menuData) => ({
        url: '/api/v1/admin/mess-menu/',
        method: 'POST',
        body: menuData,
      }),
      invalidatesTags: invalidatesList('MessMenu'),
    }),

    getMenu: builder.query({
      query: (menuId) => `/api/v1/admin/mess-menu/${menuId}`,
      providesTags: (result, error, menuId) => [{ type: 'MessMenu', id: menuId }],
    }),

    updateMenu: builder.mutation({
      query: ({ menuId, ...data }) => ({
        url: `/api/v1/admin/mess-menu/${menuId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { menuId }) => [
        { type: 'MessMenu', id: menuId },
        { type: 'MessMenu', id: 'LIST' },
      ],
    }),

    deleteMenu: builder.mutation({
      query: (menuId) => ({
        url: `/api/v1/admin/mess-menu/${menuId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('MessMenu'),
    }),

    getHostelMenus: builder.query({
      query: ({ hostelId, ...params }) => ({
        url: `/api/v1/admin/mess-menu/hostel/${hostelId}`,
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          menu_type: params?.menuType,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: (result) => providesList(result, 'MessMenu'),
    }),

    duplicateMenu: builder.mutation({
      query: (duplicateData) => ({
        url: '/api/v1/admin/mess-menu/duplicate',
        method: 'POST',
        body: duplicateData,
      }),
      invalidatesTags: invalidatesList('MessMenu'),
    }),

    approveMenu: builder.mutation({
      query: ({ menuId, ...data }) => ({
        url: `/api/v1/admin/mess-menu/${menuId}/approve`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, { menuId }) => [{ type: 'MessMenu', id: menuId }],
    }),

    getDietaryRestrictionsReport: builder.query({
      query: (hostelId) => ({
        url: `/api/v1/admin/mess-menu/hostel/${hostelId}/dietary-restrictions`,
      }),
    }),

    // Supervisor Menu Endpoints
    proposeMenu: builder.mutation({
      query: (menuData) => ({
        url: '/api/v1/supervisor/mess-menu/',
        method: 'POST',
        body: menuData,
      }),
      invalidatesTags: invalidatesList('MessMenu'),
    }),

    getSupervisorMenu: builder.query({
      query: (menuId) => `/api/v1/supervisor/mess-menu/${menuId}`,
      providesTags: (result, error, menuId) => [{ type: 'MessMenu', id: menuId }],
    }),

    updateSupervisorMenu: builder.mutation({
      query: ({ menuId, ...data }) => ({
        url: `/api/v1/supervisor/mess-menu/${menuId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { menuId }) => [{ type: 'MessMenu', id: menuId }],
    }),

    getSupervisorHostelMenus: builder.query({
      query: ({ hostelId, ...params }) => ({
        url: `/api/v1/supervisor/mess-menu/hostel/${hostelId}`,
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          menu_type: params?.menuType,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: (result) => providesList(result, 'MessMenu'),
    }),

    publishMenu: builder.mutation({
      query: (menuId) => ({
        url: `/api/v1/supervisor/mess-menu/${menuId}/publish`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, menuId) => [{ type: 'MessMenu', id: menuId }],
    }),

    getMenuFeedback: builder.query({
      query: (menuId) => `/api/v1/supervisor/mess-menu/${menuId}/feedback`,
      providesTags: (result, error, menuId) => [{ type: 'MessMenu', id: menuId }],
    }),

    getFeedbackSummary: builder.query({
      query: (menuId) => `/api/v1/supervisor/mess-menu/${menuId}/feedback/summary`,
    }),

    getHostelPreferences: builder.query({
      query: (hostelId) => `/api/v1/supervisor/mess-menu/hostel/${hostelId}/preferences`,
    }),

    getSupervisorDietaryRestrictions: builder.query({
      query: (hostelId) => `/api/v1/supervisor/mess-menu/hostel/${hostelId}/dietary-restrictions`,
    }),

    // Student Menu Endpoints
    viewHostelMenus: builder.query({
      query: ({ hostelId, ...params }) => ({
        url: `/api/v1/student/mess-menu/hostel/${hostelId}`,
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: (result) => providesList(result, 'MessMenu'),
    }),

    viewMenuDetails: builder.query({
      query: (menuId) => `/api/v1/student/mess-menu/${menuId}`,
      providesTags: (result, error, menuId) => [{ type: 'MessMenu', id: menuId }],
    }),

    getTodayMenu: builder.query({
      query: (hostelId) => `/api/v1/student/mess-menu/hostel/${hostelId}/today`,
      providesTags: ['MessMenu'],
    }),
  }),
});

export const {
  // Admin hooks
  useCreateMenuMutation,
  useGetMenuQuery,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
  useGetHostelMenusQuery,
  useDuplicateMenuMutation,
  useApproveMenuMutation,
  useGetDietaryRestrictionsReportQuery,
  
  // Supervisor hooks
  useProposeMenuMutation,
  useGetSupervisorMenuQuery,
  useUpdateSupervisorMenuMutation,
  useGetSupervisorHostelMenusQuery,
  usePublishMenuMutation,
  useGetMenuFeedbackQuery,
  useGetFeedbackSummaryQuery,
  useGetHostelPreferencesQuery,
  useGetSupervisorDietaryRestrictionsQuery,
  
  // Student hooks
  useViewHostelMenusQuery,
  useViewMenuDetailsQuery,
  useGetTodayMenuQuery,
} = messMenuApi;