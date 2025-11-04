// src/components/dashboard/StudentComplaints.jsx
import React from 'react';
import { useModal } from '../../../context/ModalContext';


const StudentComplaints = () => {
 const{openModal}= useModal()
  const complaintStats = [
    { count: 3, label: 'Open', color: 'text-yellow-600' },
    { count: 2, label: 'In Progress', color: 'text-blue-600' },
    { count: 8, label: 'Resolved', color: 'text-green-600' },
  ];

  const complaints = [
    {
      id: 1,
      title: 'AC not working',
      category: 'Maintenance',
      description: 'The air conditioner in room 101 has stopped working since yesterday.',
      status: 'In Progress',
      date: '2024-01-20',
    },
    {
      id: 2,
      title: 'WiFi connectivity issues',
      category: 'Facilities',
      description: 'Poor WiFi signal in the common area and rooms on the east wing.',
      status: 'Open',
      date: '2024-01-18',
    },
    {
      id: 3,
      title: 'Cleanliness in bathroom',
      category: 'Housekeeping',
      description: 'Bathroom on 2nd floor needs immediate cleaning and maintenance.',
      status: 'Resolved',
      date: '2024-01-15',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Complaints</h2>
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={()=>{openModal('complaint')}}>
          Submit Complaint
        </button>
      </div>

      {/* Complaint Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complaintStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">{complaint.title}</h3>
                <p className="text-gray-600 text-sm">Category: {complaint.category}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
                {complaint.status}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{complaint.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Submitted: {complaint.date}</span>
              <button className="text-blue-600 hover:text-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentComplaints;