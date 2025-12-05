// components/Dashboard.js
import React from 'react';
import { useModal } from '../../../context/ModalContext';

const Dashboard = () => {
 const{openModal}= useModal()
  const hostels=[ ]
  const totalHostels = 1;
  const totalOccupancy = 1> 0 
    ? Math.round(hostels.reduce((sum, h) => sum + ((h.occupancy || 0) / (h.totalBeds || 1)), 0) / hostels.length * 100)
    : 0;
  const totalRevenue = hostels.reduce((sum, h) => sum + (h.revenue || 0), 0);
  const pendingRequests = hostels.reduce((sum, h) => sum + (h.bookingRequests || 0) + (h.complaints || 0) + (h.maintenanceRequests || 0), 0);

  const notifications = [];
  hostels.forEach(hostel => {
    if (hostel.bookingRequests > 0) {
      notifications.push({
        type: 'booking',
        message: `${hostel.bookingRequests} new booking requests for ${hostel.hostelName}`,
        time: '2 hours ago',
        priority: 'high'
      });
    }
    if (hostel.complaints > 0) {
      notifications.push({
        type: 'complaint',
        message: `${hostel.complaints} unresolved complaints at ${hostel.hostelName}`,
        time: '4 hours ago',
        priority: 'urgent'
      });
    }
  });

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900">Multi-Hostel Dashboard</h2>
        <button 
          onClick={() => openModal('hostel')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          + Add New Hostel
        </button>
      </div>

      {/* Quick Stats Overview */}
      <div className="quick-stats rounded-xl p-6 text-white mb-8 bg-gradient-to-r from-blue-500 to-purple-600">
        <h3 className="text-xl font-bold mb-4">Portfolio Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold">{totalHostels}</p>
            <p className="text-sm opacity-80">Total Hostels</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{totalOccupancy}%</p>
            <p className="text-sm opacity-80">Avg Occupancy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
            <p className="text-sm opacity-80">Total Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{pendingRequests}</p>
            <p className="text-sm opacity-80">Pending Requests</p>
          </div>
        </div>
      </div>

      {/* Hostel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {hostels.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500 col-span-3">
            <div className="text-6xl mb-4">🏨</div>
            <p className="text-lg font-medium mb-2">No hostels yet</p>
            <p className="text-sm">Click "Add New Hostel" to get started</p>
          </div>
        ) : (
          hostels.map(hostel => (
            <div 
              key={hostel.id}
              className={`hostel-card bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl ${
                selectedHostel?.id === hostel.id ? 'border-2 border-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => onHostelSelect(hostel)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{hostel.hostelName}</h3>
                  <p className="text-gray-600 text-sm mb-1">{hostel.hostelType}</p>
                  <p className="text-gray-600 text-sm mb-2">📍 {hostel.address.substring(0, 50)}...</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`cursor-pointer ${hostel.isFavorite ? 'text-yellow-500' : 'text-gray-300'}`}>
                    ⭐
                  </span>
                  <span className={`w-2 h-2 rounded-full ${
                    hostel.status === 'Active' ? 'bg-green-500' : 
                    hostel.status === 'Inactive' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(((hostel.occupancy || 0) / (hostel.totalBeds || 1)) * 100)}%
                  </p>
                  <p className="text-xs text-gray-600">Occupancy</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">
                    ${(hostel.revenue || 0).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600">Revenue</p>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>{hostel.occupancy || 0}/{hostel.totalBeds || 0} beds</span>
                <span className="flex items-center">
                  {hostel.visibility === 'Public' ? '🌐' : '🔒'} {hostel.visibility || 'Private'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Notifications Panel */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Recent Notifications</h3>
        <div className="space-y-3">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No notifications yet</p>
          ) : (
            notifications.slice(0, 5).map((notif, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">
                    {notif.type === 'booking' ? '📋' : notif.type === 'complaint' ? '⚠️' : '🔧'}
                  </span>
                  <div>
                    <p className="font-medium text-sm">{notif.message}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  notif.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                  notif.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {notif.priority}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;