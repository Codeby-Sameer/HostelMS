// src/components/dashboard/views/ComplaintsView.jsx
import React from 'react';

const ComplaintManagement = ({ openModal, allData }) => {
  allData=[]
  const complaints = allData.filter(item => item.type === 'complaints');
  const urgentComplaints = complaints.filter(c => c.priority === 'urgent').length;
  const highComplaints = complaints.filter(c => c.priority === 'high').length;
  const mediumComplaints = complaints.filter(c => c.priority === 'medium').length;
  const lowComplaints = complaints.filter(c => c.priority === 'low').length;
  const resolvedComplaints = complaints.filter(c => c.status === 'resolved').length;

  const assignStaff = () => {
    console.log('Assign staff');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Complaint Management System</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('complaint')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Log Complaint
          </button>
          <button 
            onClick={assignStaff}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Assign Staff
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-red-600">{urgentComplaints}</p>
          <p className="text-xs md:text-sm text-gray-600">Urgent</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-orange-600">{highComplaints}</p>
          <p className="text-xs md:text-sm text-gray-600">High</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-yellow-600">{mediumComplaints}</p>
          <p className="text-xs md:text-sm text-gray-600">Medium</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-green-600">{lowComplaints}</p>
          <p className="text-xs md:text-sm text-gray-600">Low</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-blue-600">{resolvedComplaints}</p>
          <p className="text-xs md:text-sm text-gray-600">Resolved</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Complaint Tracking</h3>
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
          {complaints.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">⚠️</div>
              <p className="text-sm md:text-base">No complaints registered</p>
            </div>
          ) : (
            complaints.map(complaint => (
              <div key={complaint.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{complaint.complainantName}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{complaint.category} • {complaint.priority} Priority</p>
                    <p className="text-sm text-gray-500 mt-1">{complaint.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    complaint.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    complaint.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    complaint.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {complaint.status}
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

export default ComplaintManagement;