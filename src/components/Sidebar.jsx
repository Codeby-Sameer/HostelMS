// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ onLogout, userType, basePath = '/dashboard' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentUserType = currentUser?.type || 'student';

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get navigation items based on user type
  const getNavItems = () => {
    const navConfig = {
      'super-admin': [
        { id: 'dashboard', path: `${basePath}`, icon: '📊', label: 'Dashboard' },
        { id: 'hostels', path: `${basePath}/hostels`, icon: '🏢', label: 'All Hostels' },
        { id: 'users', path: `${basePath}/users`, icon: '👥', label: 'User Management' },
        { id: 'subscriptions', path: `${basePath}/subscriptions`, icon: '💳', label: 'Subscriptions' },
        { id: 'revenue', path: `${basePath}/revenue`, icon: '💰', label: 'Revenue Analytics' },
        { id: 'system-config', path: `${basePath}/system-config`, icon: '⚙️', label: 'System Config' },
        { id: 'reports', path: `${basePath}/reports`, icon: '📈', label: 'Reports' }
      ],
      'hostel-admin': [
        { id: 'dashboard', path: `${basePath}`, icon: '📊', label: 'Multi-Hostel Dashboard' },
        { id: 'profile', path: `${basePath}/profile`, icon: '🏨', label: 'Hostel Profile' },
        { id: 'rooms', path: `${basePath}/rooms`, icon: '🛏️', label: 'Room & Bed Management' },
        { id: 'bookings', path: `${basePath}/bookings`, icon: '📋', label: 'Booking Management' },
        { id: 'calendar', path: `${basePath}/calendar`, icon: '📅', label: 'Booking Calendar' },
        { id: 'students', path: `${basePath}/students`, icon: '👥', label: 'Student Profiles' },
        { id: 'payments', path: `${basePath}/payments`, icon: '💰', label: 'Fee Collection' },
        { id: 'complaints', path: `${basePath}/complaints`, icon: '⚠️', label: 'Complaint Management' },
        { id: 'mess', path: `${basePath}/mess`, icon: '🍽️', label: 'Mess Menu Management' },
        { id: 'announcements', path: `${basePath}/announcements`, icon: '📢', label: 'Announcements' },
        { id: 'attendance', path: `${basePath}/attendance`, icon: '📊', label: 'Attendance Management' },
        { id: 'maintenance', path: `${basePath}/maintenance`, icon: '🔧', label: 'Maintenance Management' },
        { id: 'supervisors', path: `${basePath}/supervisors`, icon: '👨‍💼', label: 'Role-Based Access' },
        { id: 'analytics', path: `${basePath}/analytics`, icon: '📈', label: 'Reports & Analytics' },
        { id: 'settings', path: `${basePath}/settings`, icon: '⚙️', label: 'Settings' }
      ],
      'student': [
        { id: 'dashboard', path: `${basePath}`, icon: '📊', label: 'Dashboard' },
        { id: 'payments', path: `${basePath}/payments`, icon: '💳', label: 'Payments' },
        { id: 'complaints', path: `${basePath}/complaints`, icon: '📝', label: 'Complaints' },
        { id: 'attendance', path: `${basePath}/attendance`, icon: '📅', label: 'Attendance' },
        { id: 'mess-menu', path: `${basePath}/mess-menu`, icon: '🍽️', label: 'Mess Menu' },
        { id: 'notices', path: `${basePath}/notices`, icon: '📢', label: 'Notices' },
        { id: 'leave', path: `${basePath}/leave`, icon: '🏖️', label: 'Leave Applications' },
        { id: 'reviews', path: `${basePath}/reviews`, icon: '⭐', label: 'Reviews' },
        { id: 'profile', path: `${basePath}/profile`, icon: '👤', label: 'Profile' }
      ],
      'visitor': [
        { id: 'dashboard', path: `${basePath}`, icon: '📊', label: 'Dashboard' },
        { id: 'search', path: `${basePath}/search`, icon: '🔍', label: 'Search Hostels' },
        { id: 'bookings', path: `${basePath}/bookings`, icon: '📅', label: 'My Bookings' },
        { id: 'favorites', path: `${basePath}/favorites`, icon: '❤️', label: 'Favorites' },
        { id: 'profile', path: `${basePath}/profile`, icon: '👤', label: 'Profile' }
      ]
    };

    return navConfig[currentUserType] || [];
  };

  const navItems = getNavItems();

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking on overlay (mobile)
  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg md:hidden"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed md:relative 
          top-0 left-0 
          h-full 
          w-64 
          flex-shrink-0 
bg-white
          flex flex-col 
          z-40
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isMobile ? 'shadow-2xl' : ''}
        `}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center p-6 border-b border-blue-500 md:hidden">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🏠</div>
            <div>
              <h2 className="text-blue font-bold text-lg">HostelHub</h2>
              <p className="text-blue-900 text-sm">
                {currentUserType === 'super-admin' && 'Super Administrator'}
                {currentUserType === 'hostel-admin' && 'Hostel Administrator'}
                {currentUserType === 'student' && 'Student/Tenant'}
                {currentUserType === 'visitor' && 'Visitor'}
              </p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Desktop header (without close button) */}
        <div className="hidden md:block p-6">
          <div className="flex items-center mb-8">
            <div className="text-2xl mr-3">🏠</div>
            <div>
              <h2 className="text-white font-bold text-lg">HostelHub</h2>
              <p className="text-blue-200 text-sm">
                {currentUserType === 'super-admin' && 'Super Administrator'}
                {currentUserType === 'hostel-admin' && 'Hostel Administrator'}
                {currentUserType === 'student' && 'Student/Tenant'}
                {currentUserType === 'visitor' && 'Visitor'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 space-y-1 p-4 pt-0 md:pt-4 overflow-y-auto">
          {navItems.map(item => (
            <Link
              key={item.id}
              className={`w-full text-left flex items-center px-4 py-3 rounded-lg transition ${
                location.pathname === item.path 
                  ? 'bg-white text-blue-600 font-semibold' 
                  : 'text-blue hover:bg-blue-500 hover:text-white'
              }`}
             to={`${item.path}`}
            >
              <span className="icon mr-3 text-lg">{item.icon}</span>
              <span className="whitespace-nowrap text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-blue-500">
          <button
            onClick={onLogout}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-semibold flex items-center justify-center"
          >
            <span className="mr-2">🚪</span>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;