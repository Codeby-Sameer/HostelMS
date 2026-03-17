import { appApi } from "@/services/api/appApi";
import {
  providesList,
  invalidatesList,
  buildQueryParams,
} from "@/services/api/apiHelpers";

export const leaveApi = appApi.injectEndpoints({
  endpoints: (builder) => ({

    // =====================================================
    // 🧑‍🎓 STUDENT LEAVE
    // =====================================================

    // Leave Balance
    getLeaveBalance: builder.query({
      query: () => "/api/v1/student/leave-enhanced/balance",
      providesTags: ["Leave"],
    }),

    // Apply Leave
    applyLeave: builder.mutation({
      query: ({ hostelId, ...leaveData }) => ({
        url: "/api/v1/student/leave-enhanced/apply",
        method: "POST",
        params: { hostel_id: hostelId },
        body: leaveData,
      }),
      invalidatesTags: invalidatesList("Leave"),
    }),

    // My Leave Requests
    getMyLeaveRequests: builder.query({
      query: () => "/api/v1/student/leave-enhanced/my",
      providesTags: (result) =>
        result?.map(({ id }) => ({ type: "Leave", id })) || [
          { type: "Leave", id: "LIST" },
        ],
    }),

    // Cancel Leave
    cancelLeaveRequest: builder.mutation({
      query: (requestId) => ({
        url: `/api/v1/student/leave-enhanced/${requestId}/cancel`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, requestId) => [
        { type: "Leave", id: requestId },
        { type: "Leave", id: "LIST" },
      ],
    }),

    // =====================================================
    // 🧑‍💼 ADMIN LEAVE
    // =====================================================

    // Get All Leave Requests (Admin)
    getLeaveRequests: builder.query({
      query: (params) => ({
        url: "/api/v1/admin/leave/leave/requests",
        params: buildQueryParams({
          hostel_id: params?.hostelId,
          status: params?.status,
          skip: params?.skip,
          limit: params?.limit,
        }),
      }),
      providesTags: (result) => providesList(result, "Leave"),
    }),

    // Update Leave Status
    updateLeaveRequestStatus: builder.mutation({
      query: ({ requestId, status }) => ({
        url: `/api/v1/admin/leave/leave/requests/${requestId}/status`,
        method: "PUT",
        params: { status },
      }),
      invalidatesTags: (result, error, { requestId }) => [
        { type: "Leave", id: requestId },
        { type: "Leave", id: "LIST" },
      ],
    }),

  }),
});

// =====================================================
// 🎯 EXPORT HOOKS
// =====================================================

export const {
  // student
  useGetLeaveBalanceQuery,
  useApplyLeaveMutation,
  useGetMyLeaveRequestsQuery,
  useCancelLeaveRequestMutation,

  // admin
  useGetLeaveRequestsQuery,
  useUpdateLeaveRequestStatusMutation,

} = leaveApi;