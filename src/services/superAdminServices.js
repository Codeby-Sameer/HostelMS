// features/superAdmin/superadminService.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { createApiService } from "../config/apiConfig";

export const superadminService = createApi({
  // You can change reducerPath / tagTypes as you like
  ...createApiService({
    reducerPath: "superadminService",
    baseUrl: "", // using full URLs per endpoint (e.g. "/admins", "/api/v1/hostels", ...)
    tagTypes: [
      "Admin",
      "Hostel",
      "Location",
      "Analytics",
      "Dashboard",
      "Report",
      "Subscription",
      "Shift",
      "Financial",
    ],
    keepUnusedDataFor: 60,
  }),

  endpoints: (builder) => ({
    // ============================
    // ADMINS (/admins)
    // ============================
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
        body, // PermissionLevel payload
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

    // ============================
    // ANALYTICS (/api/analytics/{hostel_id})
    // ============================
    getHostelAnalyticsSummary: builder.query({
      query: (hostelId) => `/api/analytics/${hostelId}`,
      providesTags: ["Analytics"],
    }),

    // ============================
    // DASHBOARD (/dashboard)
    // ============================
    getSuperAdminDashboard: builder.query({
      query: () => "/dashboard",
      providesTags: ["Dashboard"],
    }),

    // ============================
    // HOSTELS (/api/v1/hostels)
    // ============================
    createHostel: builder.mutation({
      query: (body) => ({
        url: "/hostels",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Hostel"],
    }),

    updateHostel: builder.mutation({
      query: ({ hostelId, body }) => ({
        url: `/hostels/${hostelId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { hostelId }) => [
        "Hostel",
        { type: "Hostel", id: hostelId },
      ],
    }),

    listHostels: builder.query({
      query: ({ skip = 0, limit = 100, search } = {}) => ({
        url: "/hostels",
        params: {
          skip,
          limit,
          ...(search ? { search } : {}),
        },
      }),
      providesTags: ["Hostel"],
    }),

    getHostelById: builder.query({
      query: (hostelId) => `/hostels/${hostelId}`,
      providesTags: (result, error, hostelId) => [
        "Hostel",
        { type: "Hostel", id: hostelId },
      ],
    }),

    deleteHostel: builder.mutation({
      query: (hostelId) => ({
        url: `/hostels/${hostelId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, hostelId) => [
        "Hostel",
        { type: "Hostel", id: hostelId },
      ],
    }),

    // ============================
    // LOCATIONS (/api/v1/locations)
    // ============================
    createLocation: builder.mutation({
      query: (body) => ({
        url: "/api/v1/locations",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Location"],
    }),

    listLocations: builder.query({
      query: () => "/api/v1/locations",
      providesTags: ["Location"],
    }),

    getLocationById: builder.query({
      query: (locationId) => `/api/v1/locations/${locationId}`,
      providesTags: (result, error, locationId) => [
        "Location",
        { type: "Location", id: locationId },
      ],
    }),

    updateLocation: builder.mutation({
      query: ({ locationId, body }) => ({
        url: `/api/v1/locations/${locationId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { locationId }) => [
        "Location",
        { type: "Location", id: locationId },
      ],
    }),

    deleteLocation: builder.mutation({
      query: (locationId) => ({
        url: `/api/v1/locations/${locationId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, locationId) => [
        "Location",
        { type: "Location", id: locationId },
      ],
    }),

    // ============================
    // SUPER ADMIN REPORTS (/super-admin/reports /api/…)
    // ============================

    // /super-admin/reports/dashboard/multi-hostel
    getMultiHostelDashboard: builder.query({
      query: ({ hostelIds, startDate, endDate }) => ({
        url: "/super-admin/reports/dashboard/multi-hostel",
        params: {
          hostel_ids: hostelIds, // array: [1,2,3]
          start_date: startDate, // "YYYY-MM-DD"
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

    // ============================
    // BOOKINGS / COMMISSIONS / FINANCIAL / REPORTS (/api/…)
    // ============================
    createBooking: builder.mutation({
      query: (body) => ({
        url: "/api/bookings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Report", "Financial"],
    }),

    updateBookingStatus: builder.mutation({
      query: ({ bookingId, status, paymentStatus }) => ({
        url: `/api/bookings/${bookingId}/status`,
        method: "PATCH",
        params: {
          status,
          payment_status: paymentStatus,
        },
      }),
      invalidatesTags: ["Report", "Financial"],
    }),

    payCommission: builder.mutation({
      query: (commissionId) => ({
        url: `/api/commissions/${commissionId}/pay`,
        method: "POST",
      }),
      invalidatesTags: ["Financial"],
    }),

    getFinancialSummary: builder.query({
      query: ({ startDate, endDate } = {}) => ({
        url: "/api/financial/summary",
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      }),
      providesTags: ["Financial"],
    }),

    listFinancialSummaries: builder.query({
      query: ({ startDate, endDate, limit = 50 } = {}) => ({
        url: "/api/financial/summaries",
        params: {
          start_date: startDate,
          end_date: endDate,
          limit,
        },
      }),
      providesTags: ["Financial"],
    }),

    generateReport: builder.mutation({
      query: (body) => ({
        url: "/api/reports/generate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Report"],
    }),

    listRecentReports: builder.query({
      query: (limit = 10) => ({
        url: "/api/reports/recent",
        params: { limit },
      }),
      providesTags: ["Report"],
    }),

    getReportStatistics: builder.query({
      query: () => "/api/reports/statistics",
      providesTags: ["Report"],
    }),

    getReportById: builder.query({
      query: (reportId) => `/api/reports/${reportId}`,
      providesTags: (result, error, reportId) => [
        "Report",
        { type: "Report", id: reportId },
      ],
    }),

    exportReport: builder.query({
      query: ({ reportId, format }) => ({
        url: `/api/reports/${reportId}/export`,
        params: { format },
        // if your createApiService uses fetchBaseQuery, you can override:
        responseHandler: (response) => response.blob(),
      }),
      providesTags: ["Report"],
    }),

    // ============================
    // SHIFT COORDINATION (/api/shift-coordination)
    // ============================
    createShift: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/shifts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    getShifts: builder.query({
      query: () => "/api/shift-coordination/shifts",
      providesTags: ["Shift"],
    }),

    createShiftSchedule: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/schedules",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    createTask: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    updateTask: builder.mutation({
      query: ({ taskId, body }) => ({
        url: `/api/shift-coordination/tasks/${taskId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    delegateTask: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/tasks/delegate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    createHandover: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/handovers",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    addHandoverItem: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/handover-items",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    createCoordinationMeeting: builder.mutation({
      query: (body) => ({
        url: "/api/shift-coordination/meetings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),

    getMeetingsByHostel: builder.query({
      query: (hostelId) => `/api/shift-coordination/meetings/${hostelId}`,
      providesTags: ["Shift"],
    }),

    // ============================
    // SUBSCRIPTIONS (/subscriptions)
    // ============================
    createPlan: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/plans",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listPlans: builder.query({
      query: () => "/subscriptions/plans",
      providesTags: ["Subscription"],
    }),

    createSubscription: builder.mutation({
      query: (body) => ({
        url: "/subscriptions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listSubscriptions: builder.query({
      query: () => "/subscriptions",
      providesTags: ["Subscription"],
    }),

    createOrganisationPayment: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/Organisationpayments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listOrganisationPayments: builder.query({
      query: (subscriptionId) => ({
        url: "/subscriptions/Organisationpayments",
        params: subscriptionId ? { subscription_id: subscriptionId } : undefined,
      }),
      providesTags: ["Subscription"],
    }),

    createSubscriptionChange: builder.mutation({
      query: (body) => ({
        url: "/subscriptions/changes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subscription"],
    }),

    listSubscriptionChanges: builder.query({
      query: (subscriptionId) =>
        `/subscriptions/changes/${subscriptionId}`,
      providesTags: ["Subscription"],
    }),
  }),
});

// Hooks
export const {
  // Admins
  useCreateAdminMutation,
  useGetAdminsQuery,
  useGetAdminByIdQuery,
  useAssignHostelToAdminMutation,
  useBulkAssignHostelsMutation,
  useGetAdminHostelAssignmentsQuery,
  useUpdateAdminHostelPermissionMutation,
  useRemoveAdminHostelAssignmentMutation,

  // Analytics / Dashboard
  useGetHostelAnalyticsSummaryQuery,
  useGetSuperAdminDashboardQuery,
  useGetMultiHostelDashboardQuery,
  useGetRevenueComparisonQuery,
  useGetOccupancyTrendsQuery,
  useGetComplaintMetricsQuery,
  useGetMarketingAnalyticsQuery,
  useGetSearchTrendsQuery,
  useGetBookingConversionQuery,
  useGetConsolidatedAttendanceQuery,

  // Hostels
  useCreateHostelMutation,
  useUpdateHostelMutation,
  useListHostelsQuery,
  useGetHostelByIdQuery,
  useDeleteHostelMutation,

  // Locations
  useCreateLocationMutation,
  useListLocationsQuery,
  useGetLocationByIdQuery,
  useUpdateLocationMutation,
  useDeleteLocationMutation,

  // Booking / financial / reports
  useCreateBookingMutation,
  useUpdateBookingStatusMutation,
  usePayCommissionMutation,
  useGetFinancialSummaryQuery,
  useListFinancialSummariesQuery,
  useGenerateReportMutation,
  useListRecentReportsQuery,
  useGetReportStatisticsQuery,
  useGetReportByIdQuery,
  useExportReportQuery,

  // Shifts / coordination
  useCreateShiftMutation,
  useGetShiftsQuery,
  useCreateShiftScheduleMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDelegateTaskMutation,
  useCreateHandoverMutation,
  useAddHandoverItemMutation,
  useCreateCoordinationMeetingMutation,
  useGetMeetingsByHostelQuery,

  // Subscriptions
  useCreatePlanMutation,
  useListPlansQuery,
  useCreateSubscriptionMutation,
  useListSubscriptionsQuery,
  useCreateOrganisationPaymentMutation,
  useListOrganisationPaymentsQuery,
  useCreateSubscriptionChangeMutation,
  useListSubscriptionChangesQuery,
} = superadminService;

// Optional util exports like in authApi
export const {
  util: {
    updateQueryData,
    patchQueryData,
    prefetch,
    getRunningOperationPromises,
    getRunningMutations,
    getRunningQueries,
  },
} = superadminService;
