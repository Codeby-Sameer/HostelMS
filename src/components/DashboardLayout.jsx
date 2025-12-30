// src/components/DashboardLayout.jsx
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import { useUiStore } from '../store/uiStore';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
 
  const location = useLocation();
  
  const { 
    user,
    role, 
    getDashboardPath,
  } = useAuth();
  
  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen);
  const isMobile = useUiStore((s) => s.isMobile);
  const setSidebar = useUiStore((s) => s.setSidebar);
  const setIsMobile = useUiStore((s) => s.setIsMobile);
  
  const userToggledRef = useRef(false);


  const toggleSidebar = useCallback(() => {
    userToggledRef.current = true;
    setSidebar(!isSidebarOpen);
  }, [isSidebarOpen, setSidebar]);

  // Responsive sidebar handling
  useEffect(() => {
    let resizeTimeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);
        
        if (!userToggledRef.current) {
          setSidebar(!mobile); // Open on desktop, closed on mobile
        }
      }, 150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [setIsMobile, setSidebar]);

  // Memoized page title
  const pageTitle = useMemo(() => {
    const pathSegment = location.pathname.split('/').pop();
    
    const titleMap = {
      // Super Admin
      hostels: 'All Hostels',
      users: 'User Management',
      'system-config': 'System Configuration',
      revenue: 'Revenue Analytics',
      subscriptions: 'Subscriptions',
      reports: 'Reports',
      
      // Hostel Admin
      rooms: 'Room Management',
      bookings: 'Booking Management',
      students: 'Student Management',
      payments: 'Payment Management',
      complaints: 'Complaint Management',
      mess: 'Mess Management',
      announcements: 'Announcements',
      attendance: 'Attendance Management',
      maintenance: 'Maintenance',
      analytics: 'Analytics',
      settings: 'Settings',
      
      // Student
      'student-payments': 'My Payments',
      'student-complaints': 'My Complaints',
      'mess-menu': 'Mess Menu',
      notices: 'Notices',
      leave: 'Leave Applications',
      reviews: 'Reviews',
      
      // Visitor
      search: 'Search Hostels',
      'my-bookings': 'My Bookings',
      favorites: 'Favorites',
      
      // Common
      profile: 'Profile',
      dashboard: 'Dashboard',
      calendar: 'Calendar',
      supervisors: 'Staff Management'
    };
    
    return titleMap[pathSegment] || 'Dashboard';
  }, [location.pathname]);



  

  // Sidebar base + state classes so desktop can truly collapse to 0 width
  const sidebarBaseClasses = isMobile
    ? 'fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 w-72'
    : 'relative h-full flex-shrink-0 transition-all duration-300';

  const sidebarStateClasses = isMobile
    ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full')
    : (isSidebarOpen ? 'w-72' : 'w-0');

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${sidebarBaseClasses} ${sidebarStateClasses} bg-white shadow-lg`}
      >
        <Sidebar
          role={role}
          basePath={getDashboardPath()}
        />
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 lg:px-6 lg:py-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            {/* Left side - Toggle button and title */}
            <div className="flex items-center space-x-4">
              {/* Show bars icon ONLY when sidebar is closed */}
              {!isSidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Open sidebar"
                >
                  <FaBars size={20} className="text-blue-600" />
                </button>
              )}
              
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">
                  {pageTitle}
                </h1>
                <p className="text-gray-600 text-sm">
                  Welcome back,{' '}
                  <span className="font-semibold text-blue-600">
                    {user.username || 'User'}
                  </span>
                </p>
              </div>
            </div>

            {/* Right side - User info */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                  {user.username?.charAt(0)?.toUpperCase() || 'U'}
                </div>
              </div>
              
              <div className="hidden md:block">
                <p className="font-semibold text-gray-900 text-sm lg:text-base">
                  {user.username || 'User'}
                </p>
                <p className="text-xs lg:text-sm text-gray-600">
                  {role}
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile title */}
          <div className="sm:hidden mt-3">
            <h1 className="text-lg font-bold text-gray-900">{pageTitle}</h1>
          </div>
        </header>

        {/* Main content area (only this scrolls) */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto h-full p-4 lg:p-6">
            <Outlet />
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Hostel Management System</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
