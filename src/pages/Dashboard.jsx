// src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';
import HostelsManagement from '../components/dashboard/HostelsManagement';
import UsersManagement from '../components/dashboard/UsersManagement';
import PaymentsManagement from '../components/dashboard/PaymentsManagement';
import ComplaintsManagement from '../components/dashboard/ComplaintsManagement';
import BookingsManagement from '../components/dashboard/BookingsManagement';
import RoomManagement from '../components/dashboard/RoomManagement';
import TenantManagement from '../components/dashboard/TenantManagement';
import NoticesManagement from '../components/dashboard/NoticesManagement';
import ProfileManagement from '../components/dashboard/ProfileManagement';
import AttendanceManagement from '../components/dashboard/AttendanceManagement';
import MessMenuManagement from '../components/dashboard/MessMenuManagement';
import HostelManagement from '../components/dashboard/HostelsManagement';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardHome />} />
      
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;