// src/features/complaints/api/complaintApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const complaintApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin Complaints
    getAllComplaints: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/complaints/',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          category: params?.category,
          status_filter: params?.statusFilter,
          priority: params?.priority,
          assigned_to_email: params?.assignedToEmail,
          student_email: params?.studentEmail,
          is_escalated: params?.isEscalated,
          start_date: params?.startDate,
          end_date: params?.endDate,
          page: params?.page,
          page_size: params?.pageSize,
        }),
      }),
      providesTags: (result) => providesList(result?.complaints, 'Complaint'),
    }),

    getAdminComplaintById: builder.query({
      query: (complaintId) => `/api/v1/admin/complaints/${complaintId}`,
      providesTags: (result, error, complaintId) => [{ type: 'Complaint', id: complaintId }],
    }),

    updateAdminComplaint: builder.mutation({
      query: ({ complaintId, ...data }) => ({
        url: `/api/v1/admin/complaints/${complaintId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
        { type: 'Complaint', id: 'LIST' },
      ],
    }),

    deleteAdminComplaint: builder.mutation({
      query: (complaintId) => ({
        url: `/api/v1/admin/complaints/${complaintId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Complaint'),
    }),

    reassignComplaint: builder.mutation({
      query: ({ complaintId, ...data }) => ({
        url: `/api/v1/admin/complaints/${complaintId}/reassign`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    getComplaintAnalytics: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/complaints/analytics/overview',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
      providesTags: ['Complaint'],
    }),

    getCrossHostelAnalytics: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/complaints/analytics/cross-hostel',
        params: buildQueryParams({
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
    }),

    getAllSupervisorPerformance: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/complaints/analytics/supervisor-performance',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          start_date: params?.startDate,
          end_date: params?.endDate,
        }),
      }),
    }),

    getSlaViolations: builder.query({
      query: (hostelName) => ({
        url: '/api/v1/admin/complaints/analytics/sla-violations',
        params: { hostel_name: hostelName },
      }),
    }),

    getEscalatedComplaints: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/complaints/analytics/escalated',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          page: params?.page,
          page_size: params?.pageSize,
        }),
      }),
    }),

    // Supervisor Complaints
    getSupervisorComplaints: builder.query({
      query: (params) => ({
        url: '/api/v1/supervisor/complaints/',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          category: params?.category,
          status_filter: params?.statusFilter,
          priority: params?.priority,
          assigned_to_me: params?.assignedToMe,
          page: params?.page,
          page_size: params?.pageSize,
        }),
        headers: params?.userEmail ? { 'X-User-Email': params.userEmail } : {},
      }),
      providesTags: (result) => providesList(result?.complaints, 'Complaint'),
    }),

    getSupervisorComplaintById: builder.query({
      query: (complaintId) => `/api/v1/supervisor/complaints/${complaintId}`,
      providesTags: (result, error, complaintId) => [{ type: 'Complaint', id: complaintId }],
    }),

    updateSupervisorComplaint: builder.mutation({
      query: ({ complaintId, ...data }) => ({
        url: `/api/v1/supervisor/complaints/${complaintId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    assignSupervisorComplaint: builder.mutation({
      query: ({ complaintId, ...data }) => ({
        url: `/api/v1/supervisor/complaints/${complaintId}/assign`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    resolveComplaint: builder.mutation({
      query: ({ complaintId, userEmail, ...data }) => ({
        url: `/api/v1/supervisor/complaints/${complaintId}/resolve`,
        method: 'POST',
        headers: { 'X-User-Email': userEmail },
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    closeComplaint: builder.mutation({
      query: (complaintId) => ({
        url: `/api/v1/supervisor/complaints/${complaintId}/close`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, complaintId) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    addComplaintNote: builder.mutation({
      query: ({ complaintId, note, isInternal = true, userName, userEmail }) => ({
        url: `/api/v1/supervisor/complaints/${complaintId}/notes`,
        method: 'POST',
        params: { note, is_internal: isInternal },
        headers: {
          'X-User-Name': userName,
          'X-User-Email': userEmail,
        },
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    getSupervisorPerformance: builder.query({
      query: ({ startDate, endDate, userEmail }) => ({
        url: '/api/v1/supervisor/complaints/analytics/performance',
        params: buildQueryParams({
          start_date: startDate,
          end_date: endDate,
        }),
        headers: { 'X-User-Email': userEmail },
      }),
      providesTags: ['Complaint'],
    }),

    getUnresolvedComplaints: builder.query({
      query: ({ hostelName, userEmail }) => ({
        url: '/api/v1/supervisor/complaints/analytics/unresolved',
        params: { hostel_name: hostelName },
        headers: { 'X-User-Email': userEmail },
      }),
    }),

    // Student Complaints
    createStudentComplaint: builder.mutation({
      query: (complaintData) => ({
        url: '/api/v1/student/complaints/',
        method: 'POST',
        body: complaintData,
      }),
      invalidatesTags: invalidatesList('Complaint'),
    }),

    getStudentComplaints: builder.query({
      query: (params) => ({
        url: '/api/v1/student/complaints/',
        params: buildQueryParams({
          hostel_name: params?.hostelName,
          category: params?.category,
          status_filter: params?.statusFilter,
          page: params?.page,
          page_size: params?.pageSize,
        }),
        headers: { 'X-User-Email': params?.userEmail },
      }),
      providesTags: (result) => providesList(result?.complaints, 'Complaint'),
    }),

    getStudentComplaintById: builder.query({
      query: ({ complaintId, userEmail }) => ({
        url: `/api/v1/student/complaints/${complaintId}`,
        headers: { 'X-User-Email': userEmail },
      }),
      providesTags: (result, error, { complaintId }) => [{ type: 'Complaint', id: complaintId }],
    }),

    uploadComplaintAttachment: builder.mutation({
      query: ({ complaintId, userEmail, file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `/api/v1/student/complaints/${complaintId}/attachments`,
          method: 'POST',
          headers: { 'X-User-Email': userEmail },
          body: formData,
        };
      },
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    submitComplaintFeedback: builder.mutation({
      query: ({ complaintId, userEmail, ...data }) => ({
        url: `/api/v1/student/complaints/${complaintId}/feedback`,
        method: 'POST',
        headers: { 'X-User-Email': userEmail },
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    reopenComplaint: builder.mutation({
      query: ({ complaintId, userEmail, ...data }) => ({
        url: `/api/v1/student/complaints/${complaintId}/reopen`,
        method: 'POST',
        headers: { 'X-User-Email': userEmail },
        body: data,
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),

    addStudentComplaintNote: builder.mutation({
      query: ({ complaintId, note, userName, userEmail }) => ({
        url: `/api/v1/student/complaints/${complaintId}/notes`,
        method: 'POST',
        params: { note },
        headers: {
          'X-User-Name': userName,
          'X-User-Email': userEmail,
        },
      }),
      invalidatesTags: (result, error, { complaintId }) => [
        { type: 'Complaint', id: complaintId },
      ],
    }),
  }),
});

export const {
  // Admin hooks
  useGetAllComplaintsQuery,
  useGetAdminComplaintByIdQuery,
  useUpdateAdminComplaintMutation,
  useDeleteAdminComplaintMutation,
  useReassignComplaintMutation,
  useGetComplaintAnalyticsQuery,
  useGetCrossHostelAnalyticsQuery,
  useGetAllSupervisorPerformanceQuery,
  useGetSlaViolationsQuery,
  useGetEscalatedComplaintsQuery,
  
  // Supervisor hooks
  useGetSupervisorComplaintsQuery,
  useGetSupervisorComplaintByIdQuery,
  useUpdateSupervisorComplaintMutation,
  useAssignSupervisorComplaintMutation,
  useResolveComplaintMutation,
  useCloseComplaintMutation,
  useAddComplaintNoteMutation,
  useGetSupervisorPerformanceQuery,
  useGetUnresolvedComplaintsQuery,
  
  // Student hooks
  useCreateStudentComplaintMutation,
  useGetStudentComplaintsQuery,
  useGetStudentComplaintByIdQuery,
  useUploadComplaintAttachmentMutation,
  useSubmitComplaintFeedbackMutation,
  useReopenComplaintMutation,
  useAddStudentComplaintNoteMutation,
} = complaintApi;