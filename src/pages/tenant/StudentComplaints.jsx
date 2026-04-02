// src/components/dashboard/StudentComplaints.jsx
import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { useGetStudentComplaintsQuery } from '../../features/tenant/api/studentComplaintsApi';
import FullScreenLoader from '../../loader/FullScreenLoader';
import { FaPlus, FaFilter, FaEye, FaTimes } from 'react-icons/fa';

const StudentComplaints = () => {
  const { openModal } = useModal();
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Fetch complaints
  const { 
    data: complaintsResponse, 
    isLoading, 
    error 
  } = useGetStudentComplaintsQuery({
    status: statusFilter !== 'all' ? statusFilter : undefined,
    category: categoryFilter !== 'all' ? categoryFilter : undefined,
    page,
  });

  const complaints = complaintsResponse?.complaints || [];
  const stats = {
    open: complaints.filter(c => c.status === 'pending').length,
    in_progress: complaints.filter(c => c.status === 'in_progress').length,
    resolved: complaints.filter(c => c.status === 'resolved').length,
  };

  const complaintStats = [
    { count: stats.open || 0, label: 'Open', color: 'text-yellow-600' },
    { count: stats.in_progress || 0, label: 'In Progress', color: 'text-blue-600' },
    { count: stats.resolved || 0, label: 'Resolved', color: 'text-green-600' },
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      case 'escalated': return 'bg-red-100 text-red-800';
      case 'reopened': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-orange-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Complaints</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Total complaints: {complaints.length}
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
          onClick={() => {
            openModal('complaint');
          }}
        >
          <FaPlus size={16} />
          Submit Complaint
        </button>
      </div>

      {/* Complaint Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complaintStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 text-center border-l-4 border-blue-500"
          >
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.count}</div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <span className="font-medium text-gray-700 dark:text-gray-300">Filters:</span>
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="escalated">Escalated</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
          <option value="reopened">Reopened</option>
        </select>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="room_maintenance">Room Maintenance</option>
          <option value="mess_quality">Mess Quality</option>
          <option value="cleanliness">Cleanliness</option>
          <option value="security">Security</option>
          <option value="wifi">WiFi</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-200">
          Failed to load complaints. Please try again.
        </div>
      )}

      {/* Complaints List */}
      <div className="space-y-4">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 hover:shadow-md transition border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {complaint.title}
                    </h3>
                    {complaint.priority && (
                      <span className={`text-xs font-semibold uppercase ${getPriorityColor(complaint.priority)}`}>
                        {complaint.priority} Priority
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Category: {complaint.category}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStatusColor(complaint.status)}`}
                >
                  {complaint.status}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {complaint.description}
              </p>

              {/* Attachments indicator */}
              {complaint.attachments && complaint.attachments.length > 0 && (
                <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                  📎 {complaint.attachments.length} attachment(s)
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-1">
                  <span>Submitted: {complaint.date_created || complaint.date}</span>
                  {complaint.date_updated && (
                    <div>Updated: {complaint.date_updated}</div>
                  )}
                </div>
                <button 
                  onClick={() => {
                    setSelectedComplaint(complaint);
                    setShowDetailsModal(true);
                  }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  <FaEye size={14} />
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No complaints found
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              Click "Submit Complaint" to create your first complaint
            </p>
          </div>
        )}
      </div>

      {/* Complaint Details Modal */}
      {showDetailsModal && selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Complaint Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
              >
                <FaTimes size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Title and Status */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedComplaint.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedComplaint.status)}`}>
                    {selectedComplaint.status}
                  </span>
                  {selectedComplaint.priority && (
                    <span className={`text-sm font-semibold uppercase ${getPriorityColor(selectedComplaint.priority)}`}>
                      {selectedComplaint.priority}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{selectedComplaint.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Priority</p>
                  <p className="font-semibold text-gray-900 dark:text-white capitalize">{selectedComplaint.priority || 'Medium'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Submitted By</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{selectedComplaint.student_name || 'Student'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Date Submitted</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {selectedComplaint.date_created 
                      ? new Date(selectedComplaint.date_created).toLocaleDateString() 
                      : 'N/A'}
                  </p>
                </div>
                {selectedComplaint.room_number && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Room Number</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedComplaint.room_number}</p>
                  </div>
                )}
                {selectedComplaint.date_updated && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {new Date(selectedComplaint.date_updated).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {selectedComplaint.description}
                </p>
              </div>

              {/* Attachments */}
              {selectedComplaint.attachments && selectedComplaint.attachments.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attachments</h4>
                  <div className="space-y-2">
                    {selectedComplaint.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-blue-600 dark:text-blue-400 hover:underline truncate"
                      >
                        📎 {attachment.file_name || `Attachment ${index + 1}`}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes/Updates */}
              {selectedComplaint.notes && selectedComplaint.notes.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Updates</h4>
                  <div className="space-y-3">
                    {selectedComplaint.notes.map((note, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <p className="font-medium text-gray-900 dark:text-white">{note.user_name || 'Admin'}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {note.created_at ? new Date(note.created_at).toLocaleDateString() : ''}
                          </p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{note.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Feedback Section */}
              {selectedComplaint.student_feedback && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your Feedback</h4>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{selectedComplaint.student_feedback}</p>
                    {selectedComplaint.student_rating && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rating: {selectedComplaint.student_rating}/5 ⭐</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 flex gap-3">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentComplaints;