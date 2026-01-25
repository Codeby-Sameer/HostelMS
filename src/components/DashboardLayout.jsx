// src/components/DashboardLayout.jsx
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useUiStore } from '../store/uiStore';
import Sidebar from './Sidebar';


const DashboardLayout = ({ user, role, basePath }) => {
  const location = useLocation();
console.log(role,'iam role in dashboard layout')
console.log(basePath,'iam basepath in dashboard layout')
  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen);
  const isMobile = useUiStore((s) => s.isMobile);
  const setSidebar = useUiStore((s) => s.setSidebar);
  const setIsMobile = useUiStore((s) => s.setIsMobile);

  const userToggledRef = useRef(false);

  const toggleSidebar = useCallback(() => {
    userToggledRef.current = true;
    setSidebar(!isSidebarOpen);
  }, [isSidebarOpen, setSidebar]);

  // Responsive sidebar
  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);

        if (!userToggledRef.current) {
          setSidebar(!mobile);
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

  // Page Title
  const pageTitle = useMemo(() => {
    const pathSegment = location.pathname.split('/').pop();

    const titleMap = {
      hostels: 'All Hostels',
      users: 'User Management',
      rooms: 'Room Management',
      bookings: 'Booking Management',
      students: 'Student Management',
      payments: 'Payments',
      dashboard: 'Dashboard',
      profile: 'Profile',
    };

    return titleMap[pathSegment] || 'Dashboard';
  }, [location.pathname]);

  // Sidebar classes
  const sidebarBaseClasses = isMobile
    ? 'fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 w-72'
    : 'relative h-full flex-shrink-0 transition-all duration-300';

  const sidebarStateClasses = isMobile
    ? isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    : isSidebarOpen ? 'w-72' : 'w-0';

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      
      {/* Sidebar */}
      <div className={`${sidebarBaseClasses} ${sidebarStateClasses} bg-white shadow-lg`}>
        <Sidebar role={role} basePath={basePath} />
      </div>

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Header */}
        <header className="bg-white border-b px-4 py-3 sticky top-0 z-20">
          <div className="flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">
              {!isSidebarOpen && (
                <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded">
                  <FaBars size={20} className="text-blue-600" />
                </button>
              )}

              <div>
                <h1 className="text-lg font-bold">{pageTitle}</h1>
                <p className="text-sm text-gray-600">
                  Welcome back, <span className="font-semibold text-blue-600">{role}</span>
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                {user?.username?.[0]?.toUpperCase() || "U"}
              </div>
              <div className="hidden md:block">
                <p className="font-semibold">{user?.username}</p>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
            </div>

          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

        <footer className="bg-white border-t p-2 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hostel Management System
        </footer>

      </div>
    </div>
  );
};

export default DashboardLayout;
