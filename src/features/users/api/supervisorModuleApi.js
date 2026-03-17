// src/features/users/api/supervisorModuleApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const supervisorModuleApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Supervisor Dashboard
    getSupervisorDashboardMetrics: builder.query({
      query: () => '/api/v1/supervisor/dashboard/metrics',
      providesTags: ['Dashboard'],
    }),

    getSupervisorQuickStats: builder.query({
      query: () => '/api/v1/supervisor/dashboard/quick-stats',
      providesTags: ['Dashboard'],
    }),

    // Leave Applications
    getSupervisorLeaveApplications: builder.query({
      query: (params) => ({
        url: '/api/v1/supervisor/leave-applications',
        params: buildQueryParams({
          page: params?.page,
          size: params?.size,
          status: params?.status,
          pending_only: params?.pendingOnly,
        }),
      }),
      providesTags: ['Leave'],
    }),

    approveLeaveApplication: builder.mutation({
      query: (leaveId) => ({
        url: `/api/v1/supervisor/leave-applications/${leaveId}/approve`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, leaveId) => [
        { type: 'Leave', id: leaveId },
        { type: 'Leave', id: 'LIST' },
      ],
    }),

    rejectLeaveApplication: builder.mutation({
      query: ({ leaveId, rejectionReason }) => ({
        url: `/api/v1/supervisor/leave-applications/${leaveId}/reject`,
        method: 'PUT',
        params: { rejection_reason: rejectionReason },
      }),
      invalidatesTags: (result, error, { leaveId }) => [
        { type: 'Leave', id: leaveId },
        { type: 'Leave', id: 'LIST' },
      ],
    }),

    // Supervisor Reports
    getDailySummary: builder.query({
      query: ({ hostelId, reportDate }) => ({
        url: '/api/v1/supervisor/reports/daily-summary',
        params: buildQueryParams({
          hostel_id: hostelId,
          report_date: reportDate,
        }),
      }),
    }),

    getWeeklySummary: builder.query({
      query: ({ hostelId, endDate }) => ({
        url: '/api/v1/supervisor/reports/weekly-summary',
        params: buildQueryParams({
          hostel_id: hostelId,
          end_date: endDate,
        }),
      }),
    }),

    getMonthlyPerformance: builder.query({
      query: ({ hostelId, month, year }) => ({
        url: '/api/v1/supervisor/reports/monthly-performance',
        params: {
          hostel_id: hostelId,
          month,
          year,
        },
      }),
    }),

    getDailyAttendance: builder.query({
      query: ({ hostelId, reportDate }) => ({
        url: '/api/v1/supervisor/reports/attendance/daily',
        params: {
          hostel_id: hostelId,
          report_date: reportDate,
        },
      }),
    }),

    getAttendanceTrends: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/supervisor/reports/attendance/trends',
        params: {
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        },
      }),
    }),
  }),
});

export const {
  useGetSupervisorDashboardMetricsQuery,
  useGetSupervisorQuickStatsQuery,
  useGetSupervisorLeaveApplicationsQuery,
  useApproveLeaveApplicationMutation,
  useRejectLeaveApplicationMutation,
  useGetDailySummaryQuery,
  useGetWeeklySummaryQuery,
  useGetMonthlyPerformanceQuery,
  useGetDailyAttendanceQuery,
  useGetAttendanceTrendsQuery,
} = supervisorModuleApi;