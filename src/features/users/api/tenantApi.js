// src/features/users/api/studentApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const studentApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Student Management
    getStudents: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/students/',
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          name: params?.name,
          room: params?.room,
          hostel_id:params?.hostel_id,
          payment_status: params?.paymentStatus,
          attendance_status: params?.attendanceStatus,
        }),
      }),
      providesTags: (result) => providesList(result, 'Student'),
    }),

    searchStudents: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/students/search',
        params: buildQueryParams(params),
      }),
      providesTags: (result) => providesList(result, 'Student'),
    }),

    exportStudents: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/students/export',
        params: buildQueryParams(params),
      }),
    }),

    getStudentById: builder.query({
      query: (studentId) => `/api/v1/admin/students/${studentId}`,
      providesTags: (result, error, studentId) => [{ type: 'Student', id: studentId }],
    }),

    createStudent: builder.mutation({
      query: (studentData) => ({
        url: '/api/v1/admin/students/',
        method: 'POST',
        body: studentData,
      }),
      invalidatesTags: invalidatesList('Student'),
    }),

    updateStudent: builder.mutation({
      query: ({ studentId, ...data }) => ({
        url: `/api/v1/admin/students/${studentId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { studentId }) => [
        { type: 'Student', id: studentId },
        { type: 'Student', id: 'LIST' },
      ],
    }),

    deleteStudent: builder.mutation({
      query: (studentId) => ({
        url: `/api/v1/admin/students/${studentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Student'),
    }),

    setStudentStatus: builder.mutation({
      query: ({ studentId, newStatus, notes }) => ({
        url: `/api/v1/admin/students/${studentId}/status`,
        method: 'POST',
        params: { new_status: newStatus, notes },
      }),
      invalidatesTags: (result, error, { studentId }) => [
        { type: 'Student', id: studentId },
      ],
    }),

    transferStudent: builder.mutation({
      query: ({ studentId, newRoom, newBed, notes }) => ({
        url: `/api/v1/admin/students/${studentId}/transfer`,
        method: 'POST',
        params: { new_room: newRoom, new_bed: newBed, notes },
      }),
      invalidatesTags: (result, error, { studentId }) => [
        { type: 'Student', id: studentId },
        { type: 'Room' },
        { type: 'Bed' },
      ],
    }),

    getStudentHistory: builder.query({
      query: (studentId) => `/api/v1/admin/students/${studentId}/history`,
      providesTags: (result, error, studentId) => [{ type: 'Student', id: studentId }],
    }),

    // Student Documents
    getStudentDocuments: builder.query({
      query: (studentId) => `/api/v1/admin/students/${studentId}/documents`,
      providesTags: (result, error, studentId) => [{ type: 'Student', id: studentId }],
    }),

    createStudentDocument: builder.mutation({
      query: ({ studentId, ...data }) => ({
        url: `/api/v1/admin/students/${studentId}/documents`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, { studentId }) => [
        { type: 'Student', id: studentId },
      ],
    }),

    uploadStudentDocument: builder.mutation({
      query: ({ studentId, file, docType }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `/api/v1/admin/students/${studentId}/documents/upload`,
          method: 'POST',
          params: { doc_type: docType },
          body: formData,
        };
      },
      invalidatesTags: (result, error, { studentId }) => [
        { type: 'Student', id: studentId },
      ],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useSearchStudentsQuery,
  useLazyExportStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useSetStudentStatusMutation,
  useTransferStudentMutation,
  useGetStudentHistoryQuery,
  useGetStudentDocumentsQuery,
  useCreateStudentDocumentMutation,
  useUploadStudentDocumentMutation,
} = studentApi;