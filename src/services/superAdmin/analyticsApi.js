// features/superAdmin/api/analyticsApi.js
import { appApi } from "@/services/api/appApi";

export const analyticsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getHostelAnalyticsSummary: builder.query({
      query: (hostelId) => `/api/analytics/${hostelId}`,
      providesTags: ["Analytics"],
    }),

    getMultiHostelDashboard: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/dashboard/multi-hostel",
        params: {
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getRevenueComparison: builder.query({
      query: ({ hostelIds, currentStart, currentEnd }) => ({
        url: "/super-admin/reports/cross-hostel/revenue-comparison",
        params: {
          hostel_ids: hostelIds,
          current_start: currentStart,
          current_end: currentEnd,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getOccupancyTrends: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/cross-hostel/occupancy-trends",
        params: {
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getComplaintMetrics: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/cross-hostel/complaint-metrics",
        params: {
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getMarketingAnalytics: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/marketing/analytics",
        params: {
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getSearchTrends: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "/super-admin/reports/marketing/search-trends",
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getBookingConversion: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/marketing/booking-conversion",
        params: {
          hostel_ids: hostelIds || undefined,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),

    getConsolidatedAttendance: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/attendance/consolidated",
        params: {
          hostel_ids: hostelIds,
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Analytics"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetHostelAnalyticsSummaryQuery,
  useGetMultiHostelDashboardQuery,
  useGetRevenueComparisonQuery,
  useGetOccupancyTrendsQuery,
  useGetComplaintMetricsQuery,
  useGetMarketingAnalyticsQuery,
  useGetSearchTrendsQuery,
  useGetBookingConversionQuery,
  useGetConsolidatedAttendanceQuery,
} = analyticsApi;