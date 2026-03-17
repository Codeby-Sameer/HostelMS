import { Route } from "react-router-dom"

import ProtectedRoute from "@/components/ProtectedRoute"
import RoleBasedRoute from "@/routes/RoleBasedRoutes"
import DashboardLayout from "@/components/DashboardLayout"

import StudentHome from "@/pages/tenant/StudentHome"
import StudentPayments from "@/pages/tenant/StudentPayment"
import StudentComplaints from "@/pages/tenant/StudentComplaints"
import Attendance from "@/pages/tenant/Attendence"

import MessMenu from "@/pages/tenant/MessMenu"
import Notices from "@/pages/tenant/Notices"

import LeaveApplications from "@/pages/tenant/LeaveApplications"
import StudentProfile from "@/pages/tenant/StudentProfile"

import Reviews from "@/pages/tenant/Reviews"

export const StudentRoutes = (
  <Route
    path="/student/*"
    element={
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["student"]}>
          <DashboardLayout role="student" basePath="/student" />
        </RoleBasedRoute>
      </ProtectedRoute>
    }
  >
    <Route index element={<StudentHome />} />

    <Route path="payments" element={<StudentPayments />} />
    <Route path="complaints" element={<StudentComplaints />} />

    <Route path="attendance" element={<Attendance />} />

    <Route path="mess-menu" element={<MessMenu />} />
    <Route path="notices" element={<Notices />} />

    <Route path="leave" element={<LeaveApplications />} />
    <Route path="profile" element={<StudentProfile />} />

    <Route path="reviews" element={<Reviews />} />

    <Route path="*" element={<StudentHome />} />
  </Route>
)