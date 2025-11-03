import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const SuperAdminLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Sidebar navigation data - you can replace this array
  const sidebarNav = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/super-admin/dashboard' },
    { id: 'hostels', name: 'Hostel Management', icon: '🏨', path: '/super-admin/hostels' },
    { id: 'admins', name: 'Admin Assignment', icon: '👥', path: '/super-admin/admins' },
    { id: 'subscriptions', name: 'Subscriptions', icon: '💳', path: '/super-admin/subscriptions' },
    { id: 'analytics', name: 'Analytics', icon: '📈', path: '/super-admin/analytics' },
    { id: 'reports', name: 'Reports', icon: '📋', path: '/super-admin/reports' },
    { id: 'system', name: 'System Health', icon: '⚙️', path: '/super-admin/system' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div 
        className="w-64 text-white flex flex-col" 
        style={{ background: 'linear-gradient(180deg, #1e40af 0%, #3b82f6 100%)' }}
      >
        <div className="p-6 border-b border-white border-opacity-20">
          <h1 className="text-xl font-bold">Super Administrator</h1>
          <p className="text-sm opacity-80 mt-1">Hostel Management Platform</p>
          <p className="text-xs opacity-60 mt-1">Your Company</p>
        </div>
        
        <nav className="flex-1 p-4">
          {sidebarNav.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`nav-item w-full text-left px-4 py-3 rounded-lg mb-2 flex items-center ${
                isActive(item.path) ? 'active' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  )
}

export default SuperAdminLayout