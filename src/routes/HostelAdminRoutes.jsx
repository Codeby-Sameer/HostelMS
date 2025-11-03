// src/pages/dashboards/HostelAdminDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './../components/DashboardLayout';
import ProfileView from '../components/dashboard/hostelAdmin/HostelProfile';
import RoomManagement from '../components/dashboard/hostelAdmin/RoomManagement';
import BookingManagement from '../components/dashboard/hostelAdmin/BookingManagement';
import CalendarView from '../components/dashboard/hostelAdmin/CalenderView';
import StudentManagement from '../components/dashboard/hostelAdmin/StudentManagement';
import PaymentsManagement from '../components/dashboard/hostelAdmin/PaymentsManagement';
import ComplaintManagement from '../components/dashboard/hostelAdmin/ComplaintManagement';
import MessManagement from '../components/dashboard/hostelAdmin/MessManagement';
import AnnouncementManagement from '../components/dashboard/hostelAdmin/AnnouncementManagement';
import AttendanceManagement from '../components/dashboard/hostelAdmin/AttendenceManagement';
import MaintenanceManagement from '../components/dashboard/hostelAdmin/MaintenanceManagement';
import SupervisorsView from '../components/dashboard/hostelAdmin/RoleBaseAccessManagement';
import AnalyticsView from '../components/dashboard/hostelAdmin/Analytics';
import SettingsView from '../components/dashboard/hostelAdmin/Settings';
import Dashboard from '../components/dashboard/hostelAdmin/AdminDashboard';
const HostelAdminRoutes = () => {
  return (
    <DashboardLayout userType="hostel-admin">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfileView />} />
        <Route path="rooms" element={<RoomManagement />} />
        <Route path="bookings" element={<BookingManagement />} />
        <Route path="calendar" element={<CalendarView />} />
        <Route path="students" element={<StudentManagement />} />
        <Route path="payments" element={<PaymentsManagement />} />
        <Route path="complaints" element={<ComplaintManagement/>} />
        <Route path="mess" element={<MessManagement />} />
        <Route path="announcements" element={<AnnouncementManagement />} />
        <Route path="attendance" element={<AttendanceManagement/>} />
        <Route path="maintenance" element={<MaintenanceManagement />} />
        <Route path="supervisors" element={<SupervisorsView />} />
        <Route path="analytics" element={<AnalyticsView />} />
        <Route path="settings" element={<SettingsView />} />
        
        {/* Redirect any unknown routes to dashboard */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </DashboardLayout>
  );
};

export default HostelAdminRoutes;