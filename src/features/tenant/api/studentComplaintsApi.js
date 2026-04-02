import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

export const studentComplaintsApi = createApi({
  reducerPath: 'studentComplaintsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Get token and user from Redux store
      const token = getState()?.auth?.token;
      const user = getState()?.auth?.user;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      // Send user email as header for GET requests (required by backend)
      if (user?.email) {
        headers.set('X-User-Email', user.email);
      }

      return headers;
    },
  }),
  tagTypes: ['StudentComplaints'],
  endpoints: (builder) => ({
    // List all complaints for current student
    getStudentComplaints: builder.query({
      query: ({ status, category, page = 1, limit = 10 } = {}) => {
        let params = new URLSearchParams();
        if (status) params.append('status_filter', status);
        if (category) params.append('category', category);
        params.append('page', page);
        params.append('page_size', limit);
        return `/student/complaints/?${params.toString()}`;
      },
      providesTags: ['StudentComplaints'],
      transformResponse: (response) => {
        // Handle mock data if API returns 404
        if (!response || (response.detail && response.detail.includes('not found'))) {
          return getMockComplaints();
        }
        return response;
      },
    }),

    // Get complaint details
    getComplaintDetails: builder.query({
      query: (complaintId) => `/student/complaints/${complaintId}/`,
      providesTags: ['StudentComplaints'],
    }),

    // Create new complaint
    createComplaint: builder.mutation({
      query: (complaintData) => ({
        url: '/student/complaints/',
        method: 'POST',
        body: complaintData,
      }),
      invalidatesTags: ['StudentComplaints'],
    }),

    // Upload attachment to complaint
    uploadComplaintAttachment: builder.mutation({
      query: ({ complaintId, file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `/student/complaints/${complaintId}/attachments`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['StudentComplaints'],
    }),

    // Submit feedback on complaint
    submitComplaintFeedback: builder.mutation({
      query: ({ complaintId, feedback, rating }) => ({
        url: `/student/complaints/${complaintId}/feedback`,
        method: 'POST',
        body: { student_feedback: feedback, student_rating: rating },
      }),
      invalidatesTags: ['StudentComplaints'],
    }),

    // Reopen a closed complaint
    reopenComplaint: builder.mutation({
      query: ({ complaintId, reason }) => ({
        url: `/student/complaints/${complaintId}/reopen`,
        method: 'POST',
        body: { reopen_reason: reason },
      }),
      invalidatesTags: ['StudentComplaints'],
    }),

    // Add note to complaint
    addComplaintNote: builder.mutation({
      query: ({ complaintId, note, user }) => ({
        url: `/student/complaints/${complaintId}/notes`,
        method: 'POST',
        body: { 
          note, 
          user_name: user?.name || 'Student',
          user_email: user?.email || '',
          is_internal: false
        },
      }),
      invalidatesTags: ['StudentComplaints'],
    }),
  }),
});

export const {
  useGetStudentComplaintsQuery,
  useGetComplaintDetailsQuery,
  useCreateComplaintMutation,
  useUploadComplaintAttachmentMutation,
  useSubmitComplaintFeedbackMutation,
  useReopenComplaintMutation,
  useAddComplaintNoteMutation,
} = studentComplaintsApi;

// Mock data fallback
const getMockComplaints = () => ({
  complaints: [
    {
      id: 1,
      title: 'AC not working',
      category: 'room_maintenance',
      description: 'The air conditioner in room 101 has stopped working since yesterday.',
      status: 'in_progress',
      priority: 'high',
      date_created: '2026-01-20',
      date_updated: '2026-01-21',
      attachments: [],
      notes: [],
      student_feedback: null,
    },
    {
      id: 2,
      title: 'WiFi connectivity issues',
      category: 'wifi',
      description: 'Poor WiFi signal in the common area and rooms on the east wing.',
      status: 'pending',
      priority: 'medium',
      date_created: '2026-01-18',
      date_updated: '2026-01-18',
      attachments: [],
      notes: [],
      student_feedback: null,
    },
    {
      id: 3,
      title: 'Cleanliness in bathroom',
      category: 'cleanliness',
      description: 'Bathroom on 2nd floor needs immediate cleaning and maintenance.',
      status: 'resolved',
      priority: 'low',
      date_created: '2026-01-15',
      date_updated: '2026-01-17',
      attachments: [],
      notes: [],
      student_feedback: { student_rating: 4, student_feedback: 'Issue resolved quickly' },
    },
  ],
  total: 3,
  page: 1,
  page_size: 10,
  total_pages: 1,
});
