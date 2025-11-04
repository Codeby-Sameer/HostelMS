// src/pages/dashboards/VisitorDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Modal from '../context/Modal';
import DashboardLayout from '../components/DashboardLayout';
import VisitorHome from '../components/dashboard/visitor/VisitorHome';
import VisitorProfile from '../components/dashboard/visitor/VisitorProfile';
import MyBookings from '../components/dashboard/visitor/MyBookings';
import Favorites from '../components/dashboard/visitor/Favorites';
import SearchHostels from '../components/dashboard/visitor/SearchHostels';
import { useModal } from '../context/ModalContext';

const VisitorRoutes = () => {
  const{openModal}=useModal()
  return (
    <DashboardLayout userType="visitor">
      <Routes>
        <Route index element={<VisitorHome />} />
        <Route path="search" element={<SearchHostels openModal={openModal} />} />
        <Route path="bookings" element={<MyBookings />}/>
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<VisitorProfile />} />
        <Route path="*" element={<VisitorHome />} />
      </Routes>
      <Modal/>
    </DashboardLayout>
  );
};

export default VisitorRoutes;