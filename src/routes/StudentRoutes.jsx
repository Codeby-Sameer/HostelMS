// src/pages/dashboards/StudentDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import UsersManagement from '../components/dashboard/UsersManagement';
// import StudentHome from '../../components/dashboard/student/StudentHome';
// import StudentPayments from '../../components/dashboard/student/StudentPayments';
// import StudentComplaints from '../../components/dashboard/student/StudentComplaints';
// import Attendance from '../../components/dashboard/student/Attendance';
// import MessMenu from '../../components/dashboard/student/MessMenu';
// import Notices from '../../components/dashboard/student/Notices';
// import LeaveApplications from '../../components/dashboard/student/LeaveApplications';
// import StudentProfile from '../../components/dashboard/student/StudentProfile';
// import Reviews from '../../components/dashboard/student/Reviews';

const StudentRoutes = () => {
  return (
    <DashboardLayout userType="student">
      <Routes>
        <Route index element={<UsersManagement />} />
        {/* <Route path="payments" element={<StudentPayments />} />
        <Route path="complaints" element={<StudentComplaints />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="mess-menu" element={<MessMenu />} />
        <Route path="notices" element={<Notices />} />
        <Route path="leave" element={<LeaveApplications />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<StudentHome />} /> */}
      </Routes>
    </DashboardLayout>
  );
};

export default StudentRoutes;