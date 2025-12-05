import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { useUiStore } from '../store/uiStore';
import { FaBars } from 'react-icons/fa';
// If you have an RTK logout action, uncomment and adjust:
// import { logout as logoutAction } from '../store/authSlice';

const DashboardLayout = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Prefer a memoized selector in production (reselect). Quick fallback:
  const currentUser = useSelector((s) => s.auth?.currentUser);

  // Zustand UI slices — subscribe only to what we need here
  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen);
  const isMobile = useUiStore((s) => s.isMobile);
  const setSidebar = useUiStore((s) => s.setSidebar);
  const setIsMobile = useUiStore((s) => s.setIsMobile);

  // keep track if user manually toggled sidebar to avoid resize override
  const userToggledRef = useRef(false);

  // stable logout handler
  const handleLogout = useCallback(() => {
    try {
      // dispatch(logoutAction()); // uncomment if you use RTK logout action
      // if you rely on RTK logout, that should clear localStorage/auth state
    } catch (e) {
      // fallback cleanup if you need it
      localStorage.removeItem('currentUser');
    } finally {
      navigate('/');
    }
  }, [dispatch, navigate]);

  // stable toggle callbacks
  const toggleSidebar = useCallback(() => {
    userToggledRef.current = true;
    setSidebar((prev) => !prev);
  }, [setSidebar]);

  const handleSidebarToggle = useCallback((open) => {
    userToggledRef.current = true;
    setSidebar(Boolean(open));
  }, [setSidebar]);

  // central resize handler (debounced)
  useEffect(() => {
    let t;
    const handleResize = () => {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);
        if (!userToggledRef.current) {
          setSidebar(!mobile); // open on desktop, keep user's choice on mobile
        }
      }, 120);
    };

    // initial sync and listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (t) clearTimeout(t);
    };
  }, [setIsMobile, setSidebar]);

  // memoized page title
  const pageTitle = useMemo(() => {
    const p = location.pathname.split('/').pop();
    const titles = {
      hostels: 'All Hostels',
      users: 'User Management',
      'system-config': 'System Configuration',
      revenue: 'Revenue Analytics',
      subscriptions: 'Subscriptions',
      rooms: 'Room Management',
      tenants: 'Tenant Management',
      bookings: 'Bookings Management',
      payments: 'Fee Collection',
      complaints: 'Complaints Management',
      notices: 'Notices Management',
      'mess-menu': 'Mess Menu Management',
      attendance: 'Attendance',
      leave: 'Leave Applications',
      reviews: 'Reviews & Feedback',
      search: 'Search Hostels',
      favorites: 'Favorite Hostels',
      profile: 'Profile',
      reports: 'Reports'
    };
    return titles[p] || 'Dashboard';
  }, [location.pathname]);

  const getBasePath = useCallback(() => {
    const paths = {
      'super-admin': '/super-admin',
      'hostel-admin': '/hostel-admin',
      student: '/student',
      visitor: '/visitor'
    };
    return paths[userType] || '/dashboard';
  }, [userType]);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-40' : 'relative'} ${isSidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-white`}>
        <Sidebar
          onLogout={handleLogout}
          userType={userType}
          basePath={getBasePath()}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 lg:p-5 sticky top-0 z-30 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {(!isSidebarOpen || isMobile) && (
              
                  <FaBars onClick={toggleSidebar} size={26} className='text-blue-500'/>
              
              )}

              <div>
               

                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-gray-900">{pageTitle}</h1>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Welcome back, <span className="font-semibold text-blue-600">{currentUser?.name || 'User'}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="hidden md:block text-right">
                <p className="font-semibold text-gray-900">{currentUser?.name || 'User'}</p>
                <p className="text-sm text-gray-600 capitalize">{userType?.replace('-', ' ') || 'user'}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto  bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto h-full p-4 lg:p-7">
            {/* Use Outlet so child routes render inside the layout and layout stays mounted */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
