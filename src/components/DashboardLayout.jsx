// src/components/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;
  });
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  });

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Accepts a boolean and sets sidebar state accordingly
  const handleSidebarToggle = (open) => {
    setIsSidebarOpen(open);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // On desktop: open by default; on mobile: closed by default
      setIsSidebarOpen(mobile ? false : true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'} ${
        !isSidebarOpen && !isMobile ? 'w-0' : 'w-80'
      } transition-all duration-300`}>
        <Sidebar
          onLogout={handleLogout}
          userType={userType}
          basePath={getBasePath()}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={handleSidebarToggle}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 lg:p-6 sticky top-0 z-30 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Menu Button - show when sidebar is closed OR on mobile */}
              {(!isSidebarOpen || isMobile) && (
                <button
                  onClick={toggleSidebar}
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Open sidebar"
                >
                  <span className="text-lg">☰</span>
                </button>
              )}

              <div className="flex items-center space-x-4">
                {/* Logo */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <img
                    src="/logo.png"
                    alt="HostelHub Logo"
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-white font-bold text-lg hidden">🏠</span>
                </div>

                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {getPageTitle(location.pathname)}
                  </h1>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Welcome back, <span className="font-semibold text-blue-600">{currentUser?.name || 'User'}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Header Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-3 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
                <span className="text-xl">🔔</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  3
                </span>
                <div className="absolute -bottom-12 right-0 bg-white shadow-2xl rounded-lg p-3 w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 border">
                  <p className="text-sm font-medium text-gray-900">3 new notifications</p>
                </div>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div className="hidden md:block text-right">
                  <p className="font-semibold text-gray-900">{currentUser?.name || 'User'}</p>
                  <p className="text-sm text-gray-600 capitalize">
                    {userType?.replace('-', ' ') || 'user'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
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