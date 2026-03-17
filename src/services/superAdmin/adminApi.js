// features/superAdmin/api/adminApi.js
import { appApi } from "@/services/api/appApi";

export const adminApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (body) => ({
        url: "/admins",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),

    getAdmins: builder.query({
      query: () => "/admins",
      providesTags: ["Admin"],
    }),

    getAdminById: builder.query({
      query: (adminId) => `/admins/${adminId}`,
      providesTags: (result, error, adminId) => [{ type: "Admin", id: adminId }],
    }),

    assignHostelToAdmin: builder.mutation({
      query: ({ adminId, body }) => ({
        url: `/admins/${adminId}/hostels`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { adminId }) => [
        "Admin",
        { type: "Admin", id: adminId },
      ],
    }),

    bulkAssignHostels: builder.mutation({
      query: (body) => ({
        url: "/admins/bulk-assign",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),

    getAdminHostelAssignments: builder.query({
      query: (adminId) => `/admins/${adminId}/hostels`,
      providesTags: (result, error, adminId) => [
        "Admin",
        { type: "Admin", id: adminId },
      ],
    }),

    updateAdminHostelPermission: builder.mutation({
      query: ({ adminId, hostelId, body }) => ({
        url: `/admins/${adminId}/hostels/${hostelId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { adminId }) => [
        "Admin",
        { type: "Admin", id: adminId },
      ],
    }),

    removeAdminHostelAssignment: builder.mutation({
      query: ({ adminId, hostelId }) => ({
        url: `/admins/${adminId}/hostels/${hostelId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { adminId }) => [
        "Admin",
        { type: "Admin", id: adminId },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAdminMutation,
  useGetAdminsQuery,
  useGetAdminByIdQuery,
  useAssignHostelToAdminMutation,
  useBulkAssignHostelsMutation,
  useGetAdminHostelAssignmentsQuery,
  useUpdateAdminHostelPermissionMutation,
  useRemoveAdminHostelAssignmentMutation,
} = adminApi;