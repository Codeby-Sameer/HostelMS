// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingLayout from './pages/Layout';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import RoleBasedRoute from './routes/RoleBasedRoutes';
import { ModalProvider } from './context/ModalContext';
import DashboardLayout from './components/DashboardLayout';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';
import Signup from './pages/Signup';


//super admin pages 
import SuperAdminDashboard from './components/dashboard/superAdmin/SuperAdminDashboard';
import HostelManagement from './components/dashboard/superAdmin/HostelManagement';
import Analytics from './components/dashboard/superAdmin/Analytics';
import SystemHealth from './components/dashboard/superAdmin/SystemHealth';
import AdminManagement from './components/dashboard/superAdmin/AdminManagement';
import Reports from './components/dashboard/superAdmin/Reports';
import Subscriptions from './components/dashboard/superAdmin/Subscription';

// Hostel Admin pages (from your earlier files)
import Dashboard from './components/dashboard/hostelAdmin/AdminDashboard';
import ProfileView from './components/dashboard/hostelAdmin/HostelProfile';
import RoomManagement from './components/dashboard/hostelAdmin/RoomManagement';
import BookingManagement from './components/dashboard/hostelAdmin/BookingManagement';
import CalendarView from './components/dashboard/hostelAdmin/CalenderView';
import StudentManagement from './components/dashboard/hostelAdmin/StudentManagement';
import PaymentsManagement from './components/dashboard/hostelAdmin/PaymentsManagement';
import ComplaintManagement from './components/dashboard/hostelAdmin/ComplaintManagement';
import MessManagement from './components/dashboard/hostelAdmin/MessManagement';
import AnnouncementManagement from './components/dashboard/hostelAdmin/AnnouncementManagement';
import AttendanceManagement from './components/dashboard/hostelAdmin/AttendenceManagement';
import MaintenanceManagement from './components/dashboard/hostelAdmin/MaintenanceManagement';
import SupervisorsView from './components/dashboard/hostelAdmin/RoleBaseAccessManagement';
import AnalyticsView from './components/dashboard/hostelAdmin/Analytics';
import SettingsView from './components/dashboard/hostelAdmin/Settings';

// Student pages (from your earlier files)
import StudentHome from './components/dashboard/tenant/StudentHome';
import StudentPayments from './components/dashboard/tenant/StudentPayment';
import StudentComplaints from './components/dashboard/tenant/StudentComplaints';
import Attendance from './components/dashboard/tenant/Attendence';
import MessMenu from './components/dashboard/tenant/MessMenu';
import Notices from './components/dashboard/tenant/Notices';
import LeaveApplications from './components/dashboard/tenant/LeaveApplications';
import StudentProfile from './components/dashboard/tenant/StudentProfile';
import Reviews from './components/dashboard/tenant/Reviews';

// Visitor pages
import VisitorHome from './components/dashboard/visitor/VisitorHome';
import VisitorProfile from './components/dashboard/visitor/VisitorProfile';
import MyBookings from './components/dashboard/visitor/MyBookings';
import Favorites from './components/dashboard/visitor/Favorites';
import SearchHostels from './components/dashboard/visitor/SearchHostels';
import Modal from './context/Modal';

import NavigateToRoleDashboard from './routes/NavigateToRoleDashboard';
import AuthGate from './routes/AuthGate';

// You can lazy-load big pages like this (optional):
// const BigAnalytics = React.lazy(() => import('./components/dashboard/hostelAdmin/Analytics'));

function App() {  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ModalProvider>
          {/* Suspense around top-level routes only if you use lazy imports */}
          <Suspense fallback={<div />}>
            <Routes>
              {/* Public / Landing routes */}
              <Route path="/" element={<LandingLayout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="features" element={<Features />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="signup" element={<Signup />} />
              </Route>

              {/* Super Admin parent - replace children with your actual components */}
                <Route
                  path="/super-admin/*"
                  element={
                    <AuthGate>

                    <ProtectedRoute>
                      <RoleBasedRoute allowedRoles={['superadmin']}>
                        <DashboardLayout />
                      </RoleBasedRoute>
                    </ProtectedRoute>
                    </AuthGate>
                  }
              >
                {/* Example nested children for super-admin */}
                <Route index element={<SuperAdminDashboard />} />
                <Route path="hostels" element={<HostelManagement />} />
                <Route path="users" element={<AdminManagement />} />
                <Route path="system-config" element={<SystemHealth />} />
                <Route path="revenue" element={<Analytics />} />
                <Route path="subscriptions" element={<Subscriptions />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<SuperAdminDashboard />} />
                {/* add other super-admin child routes here */}
              </Route>

              {/* Hostel Admin parent with nested routes */}
              <Route
                path="/hostel-admin/*"
                element={
                  <AuthGate>

                  <ProtectedRoute>
                    <RoleBasedRoute allowedRoles={['hostel-admin']}>
                      <DashboardLayout userType="hostel-admin" />
                    </RoleBasedRoute>
                  </ProtectedRoute>
                  </AuthGate>
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

              {/* Student parent with nested routes */}
              <Route
                path="/student/*"
                element={
                  <AuthGate>

                  <ProtectedRoute>
                    <RoleBasedRoute allowedRoles={['student']}>
                      <DashboardLayout userType="student" />
                    </RoleBasedRoute>
                  </ProtectedRoute>
                  </AuthGate>
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

              {/* Visitor parent (placeholder - wire your visitor pages here) */}
              <Route
                path="/visitor/*"
                element={
                  <ProtectedRoute>
                    <RoleBasedRoute allowedRoles={['visitor']}>
                      <DashboardLayout userType="visitor" />
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

              {/* Redirect to role dashboard */}
              <Route path="/dashboard" element={<NavigateToRoleDashboard />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Modal/>
          </Suspense>
        </ModalProvider>
      </div>
    </Router>
  );
}



export default App;
