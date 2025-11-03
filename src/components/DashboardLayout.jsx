// src/components/DashboardLayout.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  // Get base path based on user type
  const getBasePath = () => {
    const paths = {
      'super-admin': '/super-admin',
      'hostel-admin': '/hostel-admin',
      'student': '/student',
      'visitor': '/visitor'
    };
    return paths[userType] || '/dashboard';
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        onLogout={handleLogout} 
        userType={userType}
        basePath={getBasePath()}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="bg-white shadow-sm p-4 md:p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {getPageTitle(location.pathname)}
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Welcome back, {currentUser?.name || 'User'}
              </p>
            </div>
            {/* Header content */}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Helper function to get page title
const getPageTitle = (pathname) => {
  const path = pathname.split('/').pop();
  const titles = {
    // Super Admin Titles
    'hostels': 'All Hostels',
    'users': 'User Management',
    'system-config': 'System Configuration',
    'revenue': 'Revenue Analytics',
    'subscriptions': 'Subscriptions',
    // Hostel Admin Titles
    'rooms': 'Room Management',
    'tenants': 'Tenant Management',
    'bookings': 'Bookings Management',
    'payments': 'Fee Collection',
    'complaints': 'Complaints Management',
    'notices': 'Notices Management',
    'mess-menu': 'Mess Menu Management',
    // Student Titles
    'attendance': 'Attendance',
    'leave': 'Leave Applications',
    'reviews': 'Reviews & Feedback',
    // Visitor Titles
    'search': 'Search Hostels',
    'favorites': 'Favorite Hostels',
    // Common Titles
    'profile': 'Profile',
    'reports': 'Reports'
  };
  
  return titles[path] || 'Dashboard';
};

export default DashboardLayout;