// src/pages/dashboards/VisitorDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
// import VisitorHome from '../../components/dashboard/visitor/VisitorHome';
// import SearchHostels from '../../components/dashboard/visitor/SearchHostels';
// import MyBookings from '../../components/dashboard/visitor/MyBookings';
// import Favorites from '../../components/dashboard/visitor/Favorites';
// import VisitorProfile from '../../components/dashboard/visitor/VisitorProfile';

const VisitorRoutes = () => {
  return (
    <DashboardLayout userType="visitor">
      <Routes>
        {/* <Route index element={<VisitorHome />} />
        <Route path="search" element={<SearchHostels />} />
        <Route path="bookings" element={<MyBookings />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<VisitorProfile />} />
        <Route path="*" element={<VisitorHome />} /> */}
      </Routes>
    </DashboardLayout>
  );
};

export default VisitorRoutes;