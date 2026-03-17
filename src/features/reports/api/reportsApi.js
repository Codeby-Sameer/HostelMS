// src/features/dashboard/api/reportApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const reportApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Generate Report
    generateReport: builder.mutation({
      query: (reportData) => ({
        url: '/api/v1/api/reports/generate',
        method: 'POST',
        body: reportData,
      }),
    }),

    // Recent Reports
    listRecentReports: builder.query({
      query: (limit = 10) => ({
        url: '/api/v1/api/reports/recent',
        params: { limit },
      }),
      providesTags: ['Report'],
    }),

    // Statistics
    getReportStatistics: builder.query({
      query: () => '/api/v1/api/reports/statistics',
      providesTags: ['Report'],
    }),

    // Get Report
    getReport: builder.query({
      query: (reportId) => `/api/v1/api/reports/${reportId}`,
      providesTags: (result, error, reportId) => [{ type: 'Report', id: reportId }],
    }),

    // Export Report
    exportReport: builder.query({
      query: ({ reportId, format }) => ({
        url: `/api/v1/api/reports/${reportId}/export`,
        params: { format },
      }),
    }),

    // Analytics
    getHostelSummary: builder.query({
      query: (hostelId) => `/api/v1/api/analytics/${hostelId}`,
      providesTags: (result, error, hostelId) => [{ type: 'Hostel', id: hostelId }],
    }),
  }),
});

export const {
  useGenerateReportMutation,
  useListRecentReportsQuery,
  useGetReportStatisticsQuery,
  useGetReportQuery,
  useLazyExportReportQuery,
  useGetHostelSummaryQuery,
} = reportApi;