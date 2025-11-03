// src/components/dashboard/views/SupervisorsView.jsx
import React from 'react';

const SupervisorsView = ({ openModal, allData }) => {
  allData=[]
  const supervisors = allData.filter(item => item.type === 'supervisors');
  const wardensCount = supervisors.filter(s => s.role === 'Warden').length;
  const managersCount = supervisors.filter(s => s.role === 'Manager').length;
  const accountantsCount = supervisors.filter(s => s.role === 'Accountant').length;
  const staffCount = supervisors.filter(s => s.role === 'Staff').length;

  const managePermissions = () => {
    console.log('Manage permissions');
  };

  const viewActivityLog = () => {
    console.log('View activity log');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Role-Based Access Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('supervisor')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Add Supervisor
          </button>
          <button 
            onClick={managePermissions}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Manage Permissions
          </button>
          <button 
            onClick={viewActivityLog}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Activity Log
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Wardens</p>
              <p className="text-xl md:text-2xl font-bold text-blue-600">{wardensCount}</p>
            </div>
            <div className="text-2xl md:text-3xl">👨‍💼</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Managers</p>
              <p className="text-xl md:text-2xl font-bold text-green-600">{managersCount}</p>
            </div>
            <div className="text-2xl md:text-3xl">👩‍💼</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Accountants</p>
              <p className="text-xl md:text-2xl font-bold text-purple-600">{accountantsCount}</p>
            </div>
            <div className="text-2xl md:text-3xl">💼</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Staff</p>
              <p className="text-xl md:text-2xl font-bold text-orange-600">{staffCount}</p>
            </div>
            <div className="text-2xl md:text-3xl">👥</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Supervisor Directory</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <input type="text" placeholder="Search supervisors..." className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base w-full lg:w-64" />
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Roles</option>
            </select>
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Departments</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {supervisors.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">👨‍💼</div>
              <p className="text-sm md:text-base">No supervisors added yet</p>
            </div>
          ) : (
            supervisors.map(supervisor => (
              <div key={supervisor.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{supervisor.supervisorName}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{supervisor.role} • {supervisor.department}</p>
                    <p className="text-sm text-gray-500">ID: {supervisor.employeeId} • Access: {supervisor.accessLevel}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    supervisor.status === 'active' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {supervisor.status}
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

export default SupervisorsView;