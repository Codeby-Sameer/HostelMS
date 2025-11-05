// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = ({ onLogout, userType, basePath = '/dashboard', isSidebarOpen, onToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentUserType = currentUser?.type || 'student';

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
      onToggleSidebar(false);
    }
  };

  const handleCloseSidebar = () => {
    onToggleSidebar(false);
  };

  const handleOverlayClick = () => {
    if (isMobile) {
      onToggleSidebar(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar with Fixed Height Layout */}
      <div 
        className={`
          h-screen w-80 
          bg-gradient-to-b from-blue-800 to-blue-900
          flex flex-col
          z-50
          transition-transform duration-300 ease-in-out
          shadow-2xl
          ${isMobile ? 'fixed top-0 left-0 transform' : 'relative'} 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header Section - Fixed Height */}
        <div className="flex-shrink-0 p-6 border-b border-blue-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl mr-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src='/logo.jpg' 
                    alt="HostelHub" 
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-blue-800 font-bold text-lg hidden">🏠</span>
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-xl whitespace-nowrap">HostelHub</h2>
                <p className="text-blue-200 text-sm whitespace-nowrap">
                  {currentUserType === 'super-admin' && 'Super Administrator'}
                  {currentUserType === 'hostel-admin' && 'Hostel Administrator'}
                  {currentUserType === 'student' && 'Student/Tenant'}
                  {currentUserType === 'visitor' && 'Visitor'}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleCloseSidebar}
              className="flex items-center justify-center w-8 h-8 text-blue-200 hover:text-white hover:bg-blue-700 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>
        </div>

        {/* Navigation items - Scrollable Area */}
        <nav className="flex-1 overflow-y-auto">
          <div className="space-y-2 p-4">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`
                  flex items-center px-4 py-3 rounded-xl transition-all duration-200
                  ${location.pathname === item.path 
                    ? 'bg-white shadow-lg text-blue-600 font-semibold' 
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-md'
                  }
                `}
              >
                <span className="icon text-xl mr-3">
                  {item.icon}
                </span>
                <span className="whitespace-nowrap text-sm">
                  {item.label}
                </span>
                
                {location.pathname === item.path && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Logout button - Fixed Height */}
        <div className="flex-shrink-0 p-4 border-t border-blue-600">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center py-3 rounded-xl transition-all duration-200 bg-red-500 text-white hover:bg-red-600 font-semibold shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;