// src/components/dashboard/LeaveApplications.jsx
import React from 'react';
import { useModal } from '../../../context/ModalContext';

const LeaveApplications = () => {
   const{openModal}= useModal()
  const leaveStats = [
    { count: 2, label: 'Pending', color: 'text-yellow-600' },
    { count: 8, label: 'Approved', color: 'text-green-600' },
    { count: 1, label: 'Rejected', color: 'text-red-600' },
  ];

  const leaveApplications = [
    {
      id: 1,
      startDate: '2024-02-01',
      endDate: '2024-02-05',
      reason: 'Family function at hometown',
      status: 'Pending',
      appliedDate: '2024-01-25',
    },
    {
      id: 2,
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      reason: 'Medical checkup',
      status: 'Approved',
      appliedDate: '2024-01-18',
    },
    {
      id: 3,
      startDate: '2024-01-15',
      endDate: '2024-01-16',
      reason: 'Personal work',
      status: 'Rejected',
      appliedDate: '2024-01-12',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Leave Applications</h2>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" onClick={()=>{openModal('leave')}}>
          Apply for Leave
        </button>
      </div>

      {/* Leave Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaveStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Leave Applications Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold">My Leave Applications</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Leave Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaveApplications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{application.appliedDate}</td>
                  <td className="px-6 py-4">
                    {application.startDate} to {application.endDate}
                  </td>
                  <td className="px-6 py-4">{application.reason}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {application.status === 'Pending' && (
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplications;