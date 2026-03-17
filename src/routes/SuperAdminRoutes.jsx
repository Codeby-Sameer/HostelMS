import { Route } from "react-router-dom"

import ProtectedRoute from "@/components/ProtectedRoute"
import RoleBasedRoute from "@/routes/RoleBasedRoutes"
import DashboardLayout from "@/components/DashboardLayout"

import SuperAdminDashboard from "@/pages/superAdmin/SuperAdminDashboard"
import HostelManagement from "@/pages/superAdmin/HostelManagement"
import AdminManagement from "@/pages/superAdmin/AdminManagement"
import SystemHealth from "@/pages/superAdmin/SystemHealth"
import Analytics from "@/pages/superAdmin/Analytics"
import Subscriptions from "@/pages/superAdmin/Subscription"
import Reports from "@/pages/superAdmin/Reports"

export const SuperAdminRoutes = (
  <Route
    path="/super-admin/*"
    element={
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["superadmin"]}>
          <DashboardLayout role="superadmin" basePath="/super-admin" />
        </RoleBasedRoute>
      </ProtectedRoute>
    }
  >
    <Route index element={<SuperAdminDashboard />} />

    <Route path="hostels" element={<HostelManagement />} />
    <Route path="users" element={<AdminManagement />} />

    <Route path="system-config" element={<SystemHealth />} />
    <Route path="revenue" element={<Analytics />} />

    <Route path="subscriptions" element={<Subscriptions />} />
    <Route path="reports" element={<Reports />} />

    <Route path="*" element={<SuperAdminDashboard />} />
  </Route>
) 