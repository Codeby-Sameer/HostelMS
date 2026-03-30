// src/features/rooms/api/bedApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const bedApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Bed Management
    getBeds: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/beds/',
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          hostel_id:params?.hostelId
        }),
      }),
      providesTags: (result) => providesList(result, 'Bed'),
    }),

    getAvailableBeds: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/beds/available',
        params: buildQueryParams({
          room_number: params?.roomNumber,
          room_id:params?.roomId,
          skip: params?.skip,
          limit: params?.limit,
          hostel_id:params?.hostelId
        }),
      }),
      providesTags: (result) => providesList(result, 'Bed'),
    }),

    getBedById: builder.query({
      query: (bedId) => `/api/v1/admin/beds/${bedId}`,
      providesTags: (result, error, bedId) => [{ type: 'Bed', id: bedId }],
    }),

    createBed: builder.mutation({
      query: (bedData) => ({
        url: '/api/v1/admin/beds/',
        method: 'POST',
        body: bedData,
      }),
      invalidatesTags: invalidatesList('Bed'),
    }),

    updateBed: builder.mutation({
      query: ({ bedId, ...data }) => ({
        url: `/api/v1/admin/beds/${bedId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { bedId }) => [
        { type: 'Bed', id: bedId },
        { type: 'Bed', id: 'LIST' },
      ],
    }),

    deleteBed: builder.mutation({
      query: (bedId) => ({
        url: `/api/v1/admin/beds/${bedId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Bed'),
    }),

    assignBed: builder.mutation({
      query: ({ bedId, studentId }) => ({
        url: `/api/v1/admin/beds/${bedId}/assign`,
        method: 'POST',
        params: { student_id: studentId },
      }),
      invalidatesTags: (result, error, { bedId }) => [
        { type: 'Bed', id: bedId },
        { type: 'Student' },
      ],
    }),

    releaseBed: builder.mutation({
      query: (bedId) => ({
        url: `/api/v1/admin/beds/${bedId}/release`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, bedId) => [
        { type: 'Bed', id: bedId },
        { type: 'Student' },
      ],
    }),

    transferBed: builder.mutation({
      query: ({ studentId, newBedId }) => ({
        url: '/api/v1/admin/beds/transfer',
        method: 'POST',
        params: { student_id: studentId, new_bed_id: newBedId },
      }),
      invalidatesTags: ['Bed', 'Student'],
    }),

    bulkAssignBeds: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: '/api/v1/admin/beds/bulk/assign',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: invalidatesList('Bed'),
    }),
  }),
});

export const {
  useGetBedsQuery,
  useGetAvailableBedsQuery,
  useGetBedByIdQuery,
  useCreateBedMutation,
  useUpdateBedMutation,
  useDeleteBedMutation,
  useAssignBedMutation,
  useReleaseBedMutation,
  useTransferBedMutation,
  useBulkAssignBedsMutation,
} = bedApi;