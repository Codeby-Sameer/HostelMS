// src/pages/dashboards/SuperAdminDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import SuperAdminDashboard from '../components/dashboard/superAdmin/SuperAdminDashboard';
import HostelManagement from '../components/dashboard/superAdmin/HostelManagement';
import Analytics from '../components/dashboard/superAdmin/Analytics';
import SystemHealth from '../components/dashboard/superAdmin/SystemHealth';
import AdminManagement from '../components/dashboard/superAdmin/AdminManagement';
import Reports from '../components/dashboard/superAdmin/Reports';
import Subscriptions from '../components/dashboard/superAdmin/Subscription';

const SuperAdminRoutes = () => {
  return (
    <DashboardLayout userType="super-admin">
      <Routes>
        <Route index element={<SuperAdminDashboard />} />
        <Route path="hostels" element={<HostelManagement />} />
        <Route path="users" element={<AdminManagement />} />
        <Route path="system-config" element={<SystemHealth />} />
        <Route path="revenue" element={<Analytics />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<SuperAdminDashboard />} />
      </Routes>
    </DashboardLayout>
  );
};

export default SuperAdminRoutes;