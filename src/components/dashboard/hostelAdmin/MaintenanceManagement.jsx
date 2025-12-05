// src/components/dashboard/views/MaintenanceView.jsx
import React from 'react';

const MaintenanceManagement = ({ openModal, allData }) => {
  allData=[]
  const maintenance = allData.filter(item => item.type === 'maintenance');
  const electricalRequests = maintenance.filter(m => m.maintenanceCategory === 'electrical').length;
  const plumbingRequests = maintenance.filter(m => m.maintenanceCategory === 'plumbing').length;
  const carpentryRequests = maintenance.filter(m => m.maintenanceCategory === 'carpentry').length;
  const cleaningRequests = maintenance.filter(m => m.maintenanceCategory === 'cleaning').length;
  const applianceRequests = maintenance.filter(m => m.maintenanceCategory === 'appliances').length;
  const structuralRequests = maintenance.filter(m => m.maintenanceCategory === 'structural').length;

  const schedulePreventive = () => {
    console.log('Schedule preventive maintenance');
  };

  const manageBudget = () => {
    console.log('Manage budget');
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Maintenance Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('maintenance')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Log Request
          </button>
          <button 
            onClick={schedulePreventive}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Schedule Preventive
          </button>
          <button 
            onClick={manageBudget}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Manage Budget
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-yellow-600">{electricalRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Electrical</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-blue-600">{plumbingRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Plumbing</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-amber-600">{carpentryRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Carpentry</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-green-600">{cleaningRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Cleaning</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-purple-600">{applianceRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Appliances</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-red-600">{structuralRequests}</p>
          <p className="text-xs md:text-sm text-gray-600">Structural</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Maintenance Requests</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Hostels</option>
            </select>
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Categories</option>
            </select>
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Status</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {maintenance.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">🔧</div>
              <p className="text-sm md:text-base">No maintenance requests yet</p>
            </div>
          ) : (
            maintenance.map(request => (
              <div key={request.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{request.description}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{request.maintenanceCategory} • {request.priority} Priority</p>
                    <p className="text-sm text-gray-500">Room: {request.roomNumber} • Requested: {request.requestDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    request.status === 'assigned' ? 'bg-blue-100 text-blue-800' :
                    request.status === 'in-progress' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {request.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceManagement;