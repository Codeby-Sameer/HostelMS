// src/features/users/api/userApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList } from '../../../services/api/apiHelpers';

export const userApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin Management (SuperAdmin only)
    getAdmins: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/admins',
        params: { skip: params?.skip, limit: params?.limit, hostel_id: params?.hostelId },
      }),
      providesTags: (result) => providesList(result, 'Admin'),
    }),

    getAdminById: builder.query({
      query: (adminId) => `/api/v1/admin/admins/${adminId}`,
      providesTags: (result, error, adminId) => [{ type: 'Admin', id: adminId }],
    }),

    createAdmin: builder.mutation({
      query: (adminData) => ({
        url: '/api/v1/admin/admins',
        method: 'POST',
        body: adminData,
      }),
      invalidatesTags: invalidatesList('Admin'),
    }),

    updateAdmin: builder.mutation({
      query: ({ adminId, ...data }) => ({
        url: `/api/v1/admin/admins/${adminId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { adminId }) => [
        { type: 'Admin', id: adminId },
        { type: 'Admin', id: 'LIST' },
      ],
    }),

    deleteAdmin: builder.mutation({
      query: (adminId) => ({
        url: `/api/v1/admin/admins/${adminId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Admin'),
    }),

    uploadProfilePicture: builder.mutation({
      query: ({ adminId, file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `/api/v1/admin/admins/${adminId}/profile-picture`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: (result, error, { adminId }) => [
        { type: 'Admin', id: adminId },
        { type: 'User', id: adminId },
      ],
    }),

    assignHostelsToAdmin: builder.mutation({
      query: ({ adminId, hostelIds }) => ({
        url: `/api/v1/admin/admins/${adminId}/assign-hostels`,
        method: 'POST',
        body: { hostel_ids: hostelIds },
      }),
      invalidatesTags: (result, error, { adminId }) => [
        { type: 'Admin', id: adminId },
      ],
    }),

    // Supervisor Management
    getSupervisors: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/supervisors/',
        params: {
          skip: params?.skip,
          limit: params?.limit,
          name: params?.name,
          role: params?.role,
          department: params?.department,
        },
      }),
      providesTags: (result) => providesList(result, 'Supervisor'),
    }),

    getSupervisorById: builder.query({
      query: (employeeId) => `/api/v1/admin/supervisors/${employeeId}`,
      providesTags: (result, error, employeeId) => [{ type: 'Supervisor', id: employeeId }],
    }),

    createSupervisor: builder.mutation({
      query: (supervisorData) => ({
        url: '/api/v1/admin/supervisors/',
        method: 'POST',
        body: supervisorData,
      }),
      invalidatesTags: invalidatesList('Supervisor'),
    }),

    updateSupervisor: builder.mutation({
      query: ({ employeeId, ...data }) => ({
        url: `/api/v1/admin/supervisors/${employeeId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { employeeId }) => [
        { type: 'Supervisor', id: employeeId },
        { type: 'Supervisor', id: 'LIST' },
      ],
    }),

    deleteSupervisor: builder.mutation({
      query: (employeeId) => ({
        url: `/api/v1/admin/supervisors/${employeeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Supervisor'),
    }),

    assignHostelToSupervisor: builder.mutation({
      query: ({ employeeId, hostelId }) => ({
        url: `/api/v1/admin/supervisors/${employeeId}/assign-hostel`,
        method: 'POST',
        params: { hostel_id: hostelId },
      }),
      invalidatesTags: (result, error, { employeeId }) => [
        { type: 'Supervisor', id: employeeId },
      ],
    }),

    getSupervisorHostels: builder.query({
      query: (employeeId) => `/api/v1/admin/supervisors/${employeeId}/hostels`,
      providesTags: (result, error, employeeId) => [{ type: 'Supervisor', id: employeeId }],
    }),

    getSupervisorActivity: builder.query({
      query: (employeeId) => `/api/v1/admin/supervisors/${employeeId}/activity`,
      providesTags: (result, error, employeeId) => [{ type: 'Supervisor', id: employeeId }],
    }),
  }),
});

export const {
  // Admin hooks
  useGetAdminsQuery,
  useGetAdminByIdQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
  useUploadProfilePictureMutation,
  useAssignHostelsToAdminMutation,
  
  // Supervisor hooks
  useGetSupervisorsQuery,
  useGetSupervisorByIdQuery,
  useCreateSupervisorMutation,
  useUpdateSupervisorMutation,
  useDeleteSupervisorMutation,
  useAssignHostelToSupervisorMutation,
  useGetSupervisorHostelsQuery,
  useGetSupervisorActivityQuery,
} = userApi;