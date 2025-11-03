// src/components/dashboard/NoticesManagement.jsx
import React, { useState } from 'react';


const NoticesManagement = () => {
  const { currentUserType, allData, addData } = useApp();
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    content: '',
    type: 'general',
    isUrgent: false,
    targetAudience: 'all'
  });

  const notices = allData.filter(item => item.type === 'notices');

  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    
    const noticeData = {
      id: `notice-${Date.now()}`,
      type: 'notices',
      hostelId: 'hostel-1',
      noticeTitle: noticeForm.title,
      noticeContent: noticeForm.content,
      noticeType: noticeForm.type,
      isUrgent: noticeForm.isUrgent,
      targetAudience: noticeForm.targetAudience,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addData(noticeData);
    setShowNoticeModal(false);
    setNoticeForm({ title: '', content: '', type: 'general', isUrgent: false, targetAudience: 'all' });
  };

  const deleteNotice = (noticeId) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      alert(`Notice ${noticeId} deleted`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Notices Management</h2>
        {currentUserType !== 'student' && (
          <button 
            onClick={() => setShowNoticeModal(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Create Notice
          </button>
        )}
      </div>

      <div className="space-y-4">
        {notices.map(notice => (
          <div 
            key={notice.id} 
            className={`dashboard-card p-6 border-l-4 ${
              notice.isUrgent 
                ? 'border-red-500 bg-red-50' 
                : 'border-blue-500 bg-blue-50'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className={`text-lg font-bold ${
                  notice.isUrgent ? 'text-red-800' : 'text-blue-800'
                }`}>
                  {notice.isUrgent && '🚨 '}{notice.noticeTitle}
                </h3>
                <div className="flex gap-2 mt-1">
                  <span className={`px-2 py-1 rounded text-xs ${
                    notice.isUrgent 
                      ? 'bg-red-200 text-red-800' 
                      : 'bg-blue-200 text-blue-800'
                  }`}>
                    {notice.noticeType}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">
                    {notice.targetAudience}
                  </span>
                </div>
              </div>
              {currentUserType !== 'student' && (
                <button 
                  onClick={() => deleteNotice(notice.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              )}
            </div>
            
            <p className={`mb-4 ${
              notice.isUrgent ? 'text-red-700' : 'text-blue-700'
            }`}>
              {notice.noticeContent}
            </p>
            
            <div className="flex justify-between items-center text-sm">
              <span className={
                notice.isUrgent ? 'text-red-600' : 'text-blue-600'
              }>
                Posted: {new Date(notice.createdAt).toLocaleDateString()} at{' '}
                {new Date(notice.createdAt).toLocaleTimeString()}
              </span>
              {notice.isUrgent && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                  Urgent
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Notice Modal */}
      {showNoticeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200 bg-blue-600 text-white rounded-t-xl">
              <h3 className="text-2xl font-bold">Create New Notice</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleNoticeSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Title
                  </label>
                  <input 
                    type="text" 
                    value={noticeForm.title}
                    onChange={(e) => setNoticeForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter notice title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Content
                  </label>
                  <textarea 
                    value={noticeForm.content}
                    onChange={(e) => setNoticeForm(prev => ({ ...prev, content: e.target.value }))}
                    rows="4" 
                    placeholder="Enter notice content"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notice Type
                    </label>
                    <select 
                      value={noticeForm.type}
                      onChange={(e) => setNoticeForm(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="event">Event</option>
                      <option value="important">Important</option>
                      <option value="payment">Payment Related</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Audience
                    </label>
                    <select 
                      value={noticeForm.targetAudience}
                      onChange={(e) => setNoticeForm(prev => ({ ...prev, targetAudience: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Users</option>
                      <option value="students">Students Only</option>
                      <option value="staff">Staff Only</option>
                      <option value="admins">Admins Only</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={noticeForm.isUrgent}
                        onChange={(e) => setNoticeForm(prev => ({ ...prev, isUrgent: e.target.checked }))}
                        className="sr-only"
                      />
                      <div className={`relative w-11 h-6 rounded-full ${
                        noticeForm.isUrgent ? 'bg-red-500' : 'bg-gray-300'
                      } transition-colors`}>
                        <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          noticeForm.isUrgent ? 'transform translate-x-5' : ''
                        }`}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        Mark as Urgent
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Create Notice
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowNoticeModal(false)}
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

export default NoticesManagement;