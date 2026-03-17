import { Route } from "react-router-dom"

import ProtectedRoute from "@/components/ProtectedRoute"
import RoleBasedRoute from "@/routes/RoleBasedRoutes"
import DashboardLayout from "@/components/DashboardLayout"

import Dashboard from "@/pages/hostelAdmin/AdminDashboard"
import ProfileView from "@/pages/hostelAdmin/HostelProfile"
import RoomManagement from "@/pages/hostelAdmin/RoomManagement"
import BookingManagement from "@/pages/hostelAdmin/BookingManagement"
import CalendarView from "@/pages/hostelAdmin/CalenderView"

import StudentManagement from "@/pages/hostelAdmin/StudentManagement"
import PaymentsManagement from "@/pages/hostelAdmin/PaymentsManagement"
import ComplaintManagement from "@/pages/hostelAdmin/ComplaintManagement"

import MessManagement from "@/pages/hostelAdmin/MessManagement"
import AnnouncementManagement from "@/pages/hostelAdmin/AnnouncementManagement"

import AttendanceManagement from "@/pages/hostelAdmin/AttendenceManagement"
import MaintenanceManagement from "@/pages/hostelAdmin/MaintenanceManagement"

import SupervisorsView from "@/pages/hostelAdmin/RoleBaseAccessManagement"

import AnalyticsView from "@/pages/hostelAdmin/Analytics"
import SettingsView from "@/pages/hostelAdmin/Settings"

export const HostelAdminRoutes = (
  <Route
    path="/hostel-admin/*"
    element={
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["admin"]}>
          <DashboardLayout role="hostel-admin" basePath="/hostel-admin" />
        </RoleBasedRoute>
      </ProtectedRoute>
    }
  >
    <Route index element={<Dashboard />} />

    <Route path="profile" element={<ProfileView />} />
    <Route path="rooms" element={<RoomManagement />} />

    <Route path="bookings" element={<BookingManagement />} />
    <Route path="calendar" element={<CalendarView />} />

    <Route path="students" element={<StudentManagement />} />
    <Route path="payments" element={<PaymentsManagement />} />

    <Route path="complaints" element={<ComplaintManagement />} />

    <Route path="mess" element={<MessManagement />} />
    <Route path="announcements" element={<AnnouncementManagement />} />

    <Route path="attendance" element={<AttendanceManagement />} />
    <Route path="maintenance" element={<MaintenanceManagement />} />

    <Route path="supervisors" element={<SupervisorsView />} />

    <Route path="analytics" element={<AnalyticsView />} />
    <Route path="settings" element={<SettingsView />} />

    <Route path="*" element={<Dashboard />} />
  </Route>
)