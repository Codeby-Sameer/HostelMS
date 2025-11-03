// src/components/dashboard/ComplaintsManagement.jsx
import React, { useState } from 'react';


const ComplaintsManagement = () => {
  const { currentUserType, allData, addData } = useApp();
  const [showComplaintModal, setShowComplaintModal] = useState(false);
  const [complaintForm, setComplaintForm] = useState({
    category: 'maintenance',
    priority: 'medium',
    title: '',
    description: ''
  });

  let complaints = [];
  
  if (currentUserType === 'student') {
    complaints = allData.filter(item => item.type === 'complaints' && item.userId === 'student-1');
  } else if (currentUserType === 'hostel-admin') {
    complaints = allData.filter(item => item.type === 'complaints');
  }

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    
    const complaintData = {
      id: `complaint-${Date.now()}`,
      type: 'complaints',
      userId: 'student-1',
      hostelId: 'hostel-1',
      complaintTitle: complaintForm.title,
      complaintDescription: complaintForm.description,
      complaintCategory: complaintForm.category,
      complaintStatus: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addData(complaintData);
    setShowComplaintModal(false);
    setComplaintForm({ category: 'maintenance', priority: 'medium', title: '', description: '' });
  };

  const viewComplaintDetails = (complaintId) => {
    alert(`Viewing details for complaint: ${complaintId}`);
  };

  const updateComplaintStatus = (complaintId) => {
    alert(`Updating status for complaint: ${complaintId}`);
  };

  const stats = {
    open: complaints.filter(c => c.complaintStatus === 'open').length,
    inProgress: complaints.filter(c => c.complaintStatus === 'in-progress').length,
    resolved: complaints.filter(c => c.complaintStatus === 'resolved').length
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Complaint Management</h2>
        {currentUserType === 'student' && (
          <button 
            onClick={() => setShowComplaintModal(true)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Submit Complaint
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="dashboard-card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.open}</div>
          <p className="text-gray-600">Open</p>
        </div>
        <div className="dashboard-card p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
          <p className="text-gray-600">In Progress</p>
        </div>
        <div className="dashboard-card p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.resolved}</div>
          <p className="text-gray-600">Resolved</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {complaints.map(complaint => (
          <div key={complaint.id} className="dashboard-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">{complaint.complaintTitle}</h3>
                <p className="text-gray-600 text-sm">
                  Category: {complaint.complaintCategory}
                </p>
              </div>
              <span className={`status-badge status-${complaint.complaintStatus}`}>
                {complaint.complaintStatus}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{complaint.complaintDescription}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>
                Submitted: {new Date(complaint.createdAt).toLocaleDateString()}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => viewComplaintDetails(complaint.id)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Details
                </button>
                {currentUserType === 'hostel-admin' && complaint.complaintStatus !== 'resolved' && (
                  <button 
                    onClick={() => updateComplaintStatus(complaint.id)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Update Status
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Complaint Modal */}
      {showComplaintModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200 bg-red-600 text-white rounded-t-xl">
              <h3 className="text-2xl font-bold">Submit Complaint</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleComplaintSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select 
                      value={complaintForm.category}
                      onChange={(e) => setComplaintForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="maintenance">Maintenance</option>
                      <option value="cleanliness">Cleanliness</option>
                      <option value="food">Food Quality</option>
                      <option value="staff">Staff Behavior</option>
                      <option value="facilities">Facilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select 
                      value={complaintForm.priority}
                      onChange={(e) => setComplaintForm(prev => ({ ...prev, priority: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input 
                    type="text" 
                    value={complaintForm.title}
                    onChange={(e) => setComplaintForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Brief description of the issue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea 
                    value={complaintForm.description}
                    onChange={(e) => setComplaintForm(prev => ({ ...prev, description: e.target.value }))}
                    rows="4" 
                    placeholder="Detailed description of the complaint"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Submit Complaint
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowComplaintModal(false)}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintsManagement;