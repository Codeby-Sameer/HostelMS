import React, { useState, useEffect } from 'react'

const SuperAdminDashboard = () => {
  const [stats, setStats] = useState({
    totalHostels: 0,
    activeAdmins: 0,
    totalRevenue: 0,
    avgOccupancy: 0
  })

  const [recentActivity, setRecentActivity] = useState([])
  const [topHostels, setTopHostels] = useState([])

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setStats({
        totalHostels: 45,
        activeAdmins: 12,
        totalRevenue: 12500,
        avgOccupancy: 78
      })

      setRecentActivity([
        { id: 1, name: 'Sunrise Hostel', type: 'HOSTEL', action: 'created', time: '2 hours ago' },
        { id: 2, name: 'John Doe', type: 'ADMIN', action: 'registered', time: '4 hours ago' },
        { id: 3, name: 'Ocean View Hostel', type: 'SUBSCRIPTION', action: 'upgraded', time: '6 hours ago' },
        { id: 4, name: 'Mountain Lodge', type: 'HOSTEL', action: 'updated', time: '1 day ago' },
        { id: 5, name: 'Sarah Wilson', type: 'ADMIN', action: 'logged in', time: '1 day ago' }
      ])

      setTopHostels([
        { id: 1, name: 'Luxury Suites', location: 'New York', revenue: 8500, occupancy: 95 },
        { id: 2, name: 'City Center Hostel', location: 'Chicago', revenue: 7200, occupancy: 92 },
        { id: 3, name: 'Campus Living', location: 'Boston', revenue: 6800, occupancy: 88 },
        { id: 4, name: 'Urban Stay', location: 'San Francisco', revenue: 6200, occupancy: 85 },
        { id: 5, name: 'Metro Hostel', location: 'Seattle', revenue: 5800, occupancy: 82 }
      ])
    }, 1000)
  }, [])

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Platform Overview</h2>
        <p className="text-gray-600 mt-2 text-sm lg:text-base">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="stat-card bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl lg:text-4xl">🏨</span>
            <span className="text-2xl lg:text-3xl font-bold text-blue-800">{stats.totalHostels}</span>
          </div>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Total Hostels</p>
          <p className="text-xs lg:text-sm text-green-600 mt-1">↗ +12% this month</p>
        </div>
        
        <div className="stat-card bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl lg:text-4xl">👥</span>
            <span className="text-2xl lg:text-3xl font-bold text-blue-800">{stats.activeAdmins}</span>
          </div>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Active Admins</p>
          <p className="text-xs lg:text-sm text-blue-600 mt-1">↗ +5% this month</p>
        </div>
        
        <div className="stat-card bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl lg:text-4xl">💰</span>
            <span className="text-2xl lg:text-3xl font-bold text-blue-800">${stats.totalRevenue.toLocaleString()}</span>
          </div>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Monthly Revenue</p>
          <p className="text-xs lg:text-sm text-green-600 mt-1">↗ +18% this month</p>
        </div>
        
        <div className="stat-card bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl lg:text-4xl">📊</span>
            <span className="text-2xl lg:text-3xl font-bold text-blue-800">{stats.avgOccupancy}%</span>
          </div>
          <p className="text-gray-600 font-medium text-sm lg:text-base">Avg Occupancy</p>
          <p className="text-xs lg:text-sm text-green-600 mt-1">↗ +8% this month</p>
        </div>
      </div>

      {/* Recent Activity & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Recent Activity</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentActivity.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Loading recent activity...</p>
            ) : (
              recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm lg:text-base truncate">{activity.name}</p>
                    <p className="text-xs lg:text-sm text-gray-600 capitalize">{activity.type.toLowerCase()} • {activity.action}</p>
                  </div>
                  <span className="text-xs lg:text-sm text-gray-500 whitespace-nowrap ml-2">{activity.time}</span>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">System Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm lg:text-base">Server Status</span>
              <span className="flex items-center text-green-600 text-sm lg:text-base">
                <span className="status-indicator status-active"></span>
                Online
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm lg:text-base">Database</span>
              <span className="flex items-center text-green-600 text-sm lg:text-base">
                <span className="status-indicator status-active"></span>
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm lg:text-base">Payment Gateway</span>
              <span className="flex items-center text-green-600 text-sm lg:text-base">
                <span className="status-indicator status-active"></span>
                Connected
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm lg:text-base">Backup Status</span>
              <span className="flex items-center text-blue-600 text-sm lg:text-base">
                <span className="status-indicator status-pending"></span>
                Running
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm lg:text-base">API Response</span>
              <span className="flex items-center text-green-600 text-sm lg:text-base">
                <span className="status-indicator status-active"></span>
                98.5% Uptime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Hostels */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg lg:text-xl font-bold text-blue-800">Top Performing Hostels</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm lg:text-base font-medium">
            View All →
          </button>
        </div>
        <div className="space-y-3">
          {topHostels.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No hostel data available yet.</p>
          ) : (
            topHostels.map((hostel, index) => (
              <div key={hostel.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center flex-1 min-w-0">
                  <span className="text-2xl mr-3 flex-shrink-0">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏨'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm lg:text-base truncate">{hostel.name}</p>
                    <p className="text-xs lg:text-sm text-gray-600 truncate">{hostel.location}</p>
                  </div>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-green-600 text-sm lg:text-base">${hostel.revenue.toLocaleString()}</p>
                  <p className="text-xs lg:text-sm text-gray-500">{hostel.occupancy}% occupied</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SuperAdminDashboard