import { lazy } from "react"

export const formRegistry = {
  hostel: lazy(() => import("@/features/hostels/forms/HostelForm")),
  location: lazy(() => import("@/features/locations/forms/LocationForm")),
  room: lazy(() => import("@/features/rooms/forms/RoomForm")),
  bed: lazy(() => import("@/features/rooms/forms/BedForm")),

  booking: lazy(() => import("@/features/bookings/forms/BookingForm")),

  student: lazy(() => import("@/features/users/forms/StudentForm")),
  supervisor: lazy(() => import("@/features/users/forms/SuperVisiorForm")),

  payment: lazy(() => import("@/features/payments/forms/PaymentForm")),

  complaint: lazy(() => import("@/features/complaints/forms/ComplaintForm")),

  menu: lazy(() => import("@/features/mess/forms/MenuForm")),

  announcement: lazy(() =>
    import("@/features/announcements/forms/AnnouncementForm")
  ),

  attendance: lazy(() =>
    import("@/features/attendance/forms/AttendenceForm")
  ),

  maintenance: lazy(() =>
    import("@/features/maintenance/forms/MaintenanceForm")
  ),
}