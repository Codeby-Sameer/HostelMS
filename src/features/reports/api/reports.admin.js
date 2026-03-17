// src/features/dashboard/api/adminReportApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const adminReportApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin Dashboard
    getAdminDashboard: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/dashboard',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
      providesTags: ['Dashboard'],
    }),

    // Financial Reports
    getIncomeStatement: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/financial/income',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    getOutstandingPayments: builder.query({
      query: (hostelId) => ({
        url: '/api/v1/admin/reports/financial/outstanding-payments',
        params: { hostel_id: hostelId },
      }),
    }),

    // Operational Reports
    getOccupancyReport: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/operational/occupancy',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    getStudentDemographics: builder.query({
      query: (hostelId) => ({
        url: '/api/v1/admin/reports/operational/demographics',
        params: { hostel_id: hostelId },
      }),
    }),

    getAttendancePatterns: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/operational/attendance-patterns',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    getComplaintMetrics: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/operational/complaints',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    getMaintenanceCosts: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/operational/maintenance-costs',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    // Marketing Reports
    getProfileAnalytics: builder.query({
      query: ({ hostelId, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/marketing/profile-views',
        params: buildQueryParams({
          hostel_id: hostelId,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),

    // Multi-Hostel Reports
    compareHostels: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: '/api/v1/admin/reports/multi-hostel/comparison',
        params: buildQueryParams({
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        }),
      }),
    }),
  }),
});

export const {
  useGetAdminDashboardQuery,
  useGetIncomeStatementQuery,
  useGetOutstandingPaymentsQuery,
  useGetOccupancyReportQuery,
  useGetStudentDemographicsQuery,
  useGetAttendancePatternsQuery,
  useGetComplaintMetricsQuery,
  useGetMaintenanceCostsQuery,
  useGetProfileAnalyticsQuery,
  useCompareHostelsQuery,
} = adminReportApi;