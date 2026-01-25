import React, { useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useUiStore } from '../store/uiStore';
import {
  FaTachometerAlt,
  FaBuilding,
  FaUsers,
  FaCreditCard,
  FaChartLine,
  FaCog,
  FaFileAlt,
  FaBed,
  FaClipboardList,
  FaCalendarAlt,
  FaUserGraduate,
  FaMoneyCheckAlt,
  FaExclamationTriangle,
  FaUtensils,
  FaBullhorn,
  FaRegCalendarCheck,
  FaTools,
  FaUserTie,
  FaChartBar,
  FaSignOutAlt,
  FaSearch,
  FaHeart,
  FaUser,
  FaSignInAlt,
  FaArrowAltCircleLeft,
  FaChevronRight
} from 'react-icons/fa';
import { logout } from '../features/authSlice';

const Sidebar = ({  role, basePath = '/dashboard' }) => {
  const location = useLocation();
const dispatch=  useDispatch()

console.log(role,'iam role in sidebar')
  // subscribe minimally to zustand slices
  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen);
  const isMobile = useUiStore((s) => s.isMobile);
  const setSidebar = useUiStore((s) => s.setSidebar);

  // nav config with react-icons
  const navItems = useMemo(() => {
    const navConfig = {
      'superadmin': [
        { id: 'dashboard', path: `${basePath}`, icon: <FaTachometerAlt />, label: 'Dashboard' },
        { id: 'hostels', path: `${basePath}/hostels`, icon: <FaBuilding />, label: 'All Hostels' },
        { id: 'users', path: `${basePath}/users`, icon: <FaUsers />, label: 'User Management' },
        { id: 'subscriptions', path: `${basePath}/subscriptions`, icon: <FaCreditCard />, label: 'Subscriptions' },
        { id: 'revenue', path: `${basePath}/revenue`, icon: <FaChartLine />, label: 'Revenue Analytics' },
        { id: 'system-config', path: `${basePath}/system-config`, icon: <FaCog />, label: 'System Config' },
        { id: 'reports', path: `${basePath}/reports`, icon: <FaFileAlt />, label: 'Reports' }
      ],
      'hostel-admin': [
        { id: 'dashboard', path: `${basePath}`, icon: <FaTachometerAlt />, label: 'Multi-Hostel Dashboard' },
        { id: 'profile', path: `${basePath}/profile`, icon: <FaUser />, label: 'Hostel Profile' },
        { id: 'rooms', path: `${basePath}/rooms`, icon: <FaBed />, label: 'Room & Bed Management' },
        { id: 'bookings', path: `${basePath}/bookings`, icon: <FaClipboardList />, label: 'Booking Management' },
        { id: 'calendar', path: `${basePath}/calendar`, icon: <FaCalendarAlt />, label: 'Booking Calendar' },
        { id: 'students', path: `${basePath}/students`, icon: <FaUserGraduate />, label: 'Tenant Profiles' },
        { id: 'payments', path: `${basePath}/payments`, icon: <FaMoneyCheckAlt />, label: 'Fee Collection' },
        { id: 'complaints', path: `${basePath}/complaints`, icon: <FaExclamationTriangle />, label: 'Complaint Management' },
        { id: 'mess', path: `${basePath}/mess`, icon: <FaUtensils />, label: 'Mess Menu Management' },
        { id: 'announcements', path: `${basePath}/announcements`, icon: <FaBullhorn />, label: 'Announcements' },
        { id: 'attendance', path: `${basePath}/attendance`, icon: <FaRegCalendarCheck />, label: 'Attendance Management' },
        { id: 'maintenance', path: `${basePath}/maintenance`, icon: <FaTools />, label: 'Maintenance Management' },
        { id: 'supervisors', path: `${basePath}/supervisors`, icon: <FaUserTie />, label: 'Role-Based Access' },
        { id: 'analytics', path: `${basePath}/analytics`, icon: <FaChartBar />, label: 'Reports & Analytics' },
        { id: 'settings', path: `${basePath}/settings`, icon: <FaCog />, label: 'Settings' }
      ],
      'student': [
        { id: 'dashboard', path: `${basePath}`, icon: <FaTachometerAlt />, label: 'Dashboard' },
        { id: 'payments', path: `${basePath}/payments`, icon: <FaCreditCard />, label: 'Payments' },
        { id: 'complaints', path: `${basePath}/complaints`, icon: <FaExclamationTriangle />, label: 'Complaints' },
        { id: 'attendance', path: `${basePath}/attendance`, icon: <FaRegCalendarCheck />, label: 'Attendance' },
        { id: 'mess-menu', path: `${basePath}/mess-menu`, icon: <FaUtensils />, label: 'Mess Menu' },
        { id: 'notices', path: `${basePath}/notices`, icon: <FaBullhorn />, label: 'Notices' },
        { id: 'leave', path: `${basePath}/leave`, icon: <FaCalendarAlt />, label: 'Leave Applications' },
        { id: 'reviews', path: `${basePath}/reviews`, icon: <FaChartLine />, label: 'Reviews' },
        { id: 'profile', path: `${basePath}/profile`, icon: <FaUser />, label: 'Profile' }
      ],
      'visitor': [
        { id: 'dashboard', path: `${basePath}`, icon: <FaTachometerAlt />, label: 'Dashboard' },
        { id: 'search', path: `${basePath}/search`, icon: <FaSearch />, label: 'Search Hostels' },
        { id: 'bookings', path: `${basePath}/bookings`, icon: <FaCalendarAlt />, label: 'My Bookings' },
        { id: 'favorites', path: `${basePath}/favorites`, icon: <FaHeart />, label: 'Favorites' },
        { id: 'profile', path: `${basePath}/profile`, icon: <FaUser />, label: 'Profile' }
      ]
    };

    return navConfig[role] || [];
  }, [role, basePath]);

  const handleNavigation = useCallback(() => {
    if (isMobile) setSidebar(false);
  }, [isMobile, setSidebar]);

  const handleCloseSidebar = useCallback(() => setSidebar(false), [setSidebar]);

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white  z-40 lg:hidden transition-opacity duration-300"
          onClick={handleCloseSidebar}
        />
      )}

      <aside
        className={`h-screen w-72 flex flex-col z-50 transition-transform duration-300 ease-in-out 
          ${isMobile ? 'fixed top-0 left-0 transform' : 'relative'}
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex-shrink-0 p-3 border-b border-blue-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl mr-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/img/Media (2).jpg" alt="HostelHub Logo" className="w-14 h-14 object-contain" />
                </div>
              </div>
              <div>
                <h2 className=" font-bold text-xl whitespace-nowrap">HostelHub</h2>
                <p className="text-slate-800 text-sm whitespace-nowrap">
                  {role === 'superadmin' && 'Super Administrator'}
                  {role === 'hostel-admin' && 'Hostel Administrator'}
                  {role === 'student' && 'Student/Tenant'}
                  {role === 'visitor' && 'Visitor'}
                </p>
              </div>
            </div>


            <FaArrowAltCircleLeft onClick={handleCloseSidebar} size={28} className='text-slate-700 hover:text-slate-900' />

          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-2 ps-1 pt-4">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavigation}
                  className={`sidebar-item ${active ? 'active' : ''}`}
                >
                  <span className="icon text-lg mr-3 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap text-sm font-medium flex-1">
                    {item.label}
                  </span>
                  {active && (
                    <div className="ml-auto flex items-center">
                      <FaChevronRight className="text-xs text-blue-300 mr-3" />
                    </div>
                    
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="flex-shrink-0 p-4 border-t border-blue-600">
          <Link
            // onClick={()=>dispatch(logout())}
            to="/"
            className="w-full flex items-center justify-center py-3 rounded-xl transition-all duration-200 bg-red-500 text-white hover:bg-red-600 font-semibold shadow-lg hover:shadow-xl"
          >
            <FaSignOutAlt className="mr-2" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default React.memo(Sidebar);
