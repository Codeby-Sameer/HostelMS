// components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ selectedHostel, onHostelSelect, hostels, currentView, onViewChange }) => {
  const [showHostelSelector, setShowHostelSelector] = useState(false);
  const location = useLocation();

  const toggleHostelSelector = () => {
    setShowHostelSelector(!showHostelSelector);
  };

  const selectHostel = (hostel) => {
    onHostelSelect(hostel);
    setShowHostelSelector(false);
  };

  const navItems = [
    { path: '/', icon: '📊', label: 'Multi-Hostel Dashboard' },
    { path: '/profile', icon: '🏨', label: 'Hostel Profile' },
    { path: '/rooms', icon: '🛏️', label: 'Room & Bed Management' },
    { path: '/bookings', icon: '📋', label: 'Booking Management' },
    { path: '/calendar', icon: '📅', label: 'Booking Calendar' },
    { path: '/students', icon: '👥', label: 'Student Profiles' },
    { path: '/payments', icon: '💰', label: 'Fee Collection' },
    { path: '/complaints', icon: '⚠️', label: 'Complaint Management' },
    { path: '/mess', icon: '🍽️', label: 'Mess Menu Management' },
    { path: '/announcements', icon: '📢', label: 'Announcements' },
    { path: '/attendance', icon: '📊', label: 'Attendance Management' },
    { path: '/maintenance', icon: '🔧', label: 'Maintenance Management' },
    { path: '/supervisors', icon: '👨‍💼', label: 'Role-Based Access' },
    { path: '/analytics', icon: '📈', label: 'Reports & Analytics' },
    { path: '/settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="sidebar w-64 text-white flex flex-col bg-gradient-to-b from-blue-500 to-blue-800">
      <div className="p-6 border-b border-white border-opacity-20">
        <h1 className="text-xl font-bold">Hostel Administrator</h1>
        <p className="text-sm opacity-80 mt-1">Administrator</p>
        <p className="text-xs opacity-60 mt-1">Your Organization</p>
      </div>

      {/* Hostel Selector */}
      <div className="p-4 border-b border-white border-opacity-20">
        <div className="relative">
          <button 
            onClick={toggleHostelSelector}
            className="w-full bg-white bg-opacity-10 rounded-lg p-3 text-left flex items-center justify-between hover:bg-opacity-20 transition"
          >
            <div>
              <p className="font-medium">
                {selectedHostel ? selectedHostel.hostelName : 'Select Hostel'}
              </p>
              <p className="text-xs opacity-70">
                {selectedHostel ? `${selectedHostel.hostelType} • ${Math.round(((selectedHostel.occupancy || 0) / (selectedHostel.totalBeds || 1)) * 100)}% occupied` : 'No hostel selected'}
              </p>
            </div>
            <span className={`transform transition-transform ${showHostelSelector ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {showHostelSelector && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50">
              <div className="p-3 border-b border-gray-200">
                <input 
                  type="text" 
                  placeholder="Search hostels..." 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm"
                />
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="border-b border-gray-200">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">All Hostels</p>
                  {hostels.map(hostel => (
                    <div 
                      key={hostel.id}
                      className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0"
                      onClick={() => selectHostel(hostel)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{hostel.hostelName}</p>
                          <p className="text-xs text-gray-500">
                            {hostel.hostelType} • {Math.round(((hostel.occupancy || 0) / (hostel.totalBeds || 1)) * 100)}% occupied
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {hostel.isFavorite && <span className="text-yellow-500 text-xs">⭐</span>}
                          <span className={`w-2 h-2 rounded-full ${hostel.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center transition ${
              location.pathname === item.path 
                ? 'bg-white bg-opacity-15 border-l-4 border-white' 
                : 'hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;