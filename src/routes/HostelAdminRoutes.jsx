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
import { ModalProvider, useModal } from '../context/ModalContext';
import Modal from '../context/Modal'; // ← Import Modal component

const HostelAdminRoutes = () => {
 const{openModal}= useModal()
  return (
    
      <DashboardLayout userType="hostel-admin">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="bookings" element={<BookingManagement openModal={openModal} />} />
          <Route path="calendar" element={<CalendarView openModal={openModal}/>} />
          <Route path="students" element={<StudentManagement openModal={openModal} />} />
          <Route path="payments" element={<PaymentsManagement openModal={openModal} />} />
          <Route path="complaints" element={<ComplaintManagement openModal={openModal} />} />
          <Route path="mess" element={<MessManagement  openModal={openModal}/>} />
          <Route path="announcements" element={<AnnouncementManagement openModal={openModal} />} />
          <Route path="attendance" element={<AttendanceManagement openModal={openModal} />} />
          <Route path="maintenance" element={<MaintenanceManagement  openModal={openModal}/>} />
          <Route path="supervisors" element={<SupervisorsView  openModal={openModal}/>} />
          <Route path="analytics" element={<AnalyticsView openModal={openModal} />} />
          <Route path="settings" element={<SettingsView  openModal={openModal}/>} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
        <Modal /> {/* ← Add Modal component here */}
      </DashboardLayout>
    
  );
};

export default HostelAdminRoutes;