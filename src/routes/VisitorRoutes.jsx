import { Route } from "react-router-dom"

import ProtectedRoute from "@/components/ProtectedRoute"
import RoleBasedRoute from "@/routes/RoleBasedRoutes"
import DashboardLayout from "@/components/DashboardLayout"

import VisitorHome from "@/pages/visitor/VisitorHome"
import SearchHostels from "@/pages/visitor/SearchHostels"
import MyBookings from "@/pages/visitor/MyBookings"

import Favorites from "@/pages/visitor/Favorites"
import VisitorProfile from "@/pages/visitor/VisitorProfile"

export const VisitorRoutes = (
  <Route
    path="/visitor/*"
    element={
      <ProtectedRoute>
        <RoleBasedRoute allowedRoles={["visitor"]}>
          <DashboardLayout role="visitor" basePath="/visitor" />
        </RoleBasedRoute>
      </ProtectedRoute>
    }
  >
    <Route index element={<VisitorHome />} />

    <Route path="search" element={<SearchHostels />} />
    <Route path="bookings" element={<MyBookings />} />

    <Route path="favorites" element={<Favorites />} />
    <Route path="profile" element={<VisitorProfile />} />

    <Route path="*" element={<VisitorHome />} />
  </Route>
)