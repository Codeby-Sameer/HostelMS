// src/pages/dashboards/StudentDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

import StudentHome from '../components/dashboard/tenant/StudentHome';
import StudentComplaints from '../components/dashboard/tenant/StudentComplaints';
import StudentPayments from '../components/dashboard/tenant/StudentPayment';
import StudentProfile from '../components/dashboard/tenant/StudentProfile';
import MessMenu from '../components/dashboard/tenant/MessMenu';
import Attendance from '../components/dashboard/tenant/Attendence';
import Notices from '../components/dashboard/tenant/Notices';
import LeaveApplications from '../components/dashboard/tenant/LeaveApplications';
import Reviews from '../components/dashboard/tenant/Reviews';
import Modal from '../context/Modal';

const StudentRoutes = () => {
  return (
    <DashboardLayout userType="student">
      <Routes>
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
      </Routes>
      <Modal/>
    </DashboardLayout>
  );
};

export default StudentRoutes;