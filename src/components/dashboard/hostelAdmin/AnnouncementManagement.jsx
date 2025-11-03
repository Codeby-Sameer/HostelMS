// src/components/dashboard/views/AnnouncementsView.jsx
import React from 'react';

const AnnouncementManagement = ({ openModal, allData }) => {
  allData=[]
  const announcements = allData.filter(item => item.type === 'announcements');
  const generalAnnouncements = announcements.filter(a => a.announcementCategory === 'general').length;
  const urgentAnnouncements = announcements.filter(a => a.announcementCategory === 'urgent').length;
  const eventAnnouncements = announcements.filter(a => a.announcementCategory === 'events').length;
  const rulesAnnouncements = announcements.filter(a => a.announcementCategory === 'rules').length;
  const emergencyAnnouncements = announcements.filter(a => a.announcementCategory === 'emergency').length;

  const emergencyAlert = () => {
    console.log('Emergency alert');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Announcements & Notice Board</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('announcement')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Create Announcement
          </button>
          <button 
            onClick={emergencyAlert}
            className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition text-sm md:text-base"
          >
            🚨 Emergency Alert
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-blue-600">{generalAnnouncements}</p>
          <p className="text-xs md:text-sm text-gray-600">General</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-red-600">{urgentAnnouncements}</p>
          <p className="text-xs md:text-sm text-gray-600">Urgent</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-green-600">{eventAnnouncements}</p>
          <p className="text-xs md:text-sm text-gray-600">Events</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-purple-600">{rulesAnnouncements}</p>
          <p className="text-xs md:text-sm text-gray-600">Rules</p>
        </div>
        <div className="bg-white rounded-lg shadow p-3 md:p-4 text-center">
          <p className="text-lg md:text-2xl font-bold text-orange-600">{emergencyAnnouncements}</p>
          <p className="text-xs md:text-sm text-gray-600">Emergency</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Recent Announcements</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Categories</option>
            </select>
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Hostels</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">📢</div>
              <p className="text-sm md:text-base">No announcements yet</p>
            </div>
          ) : (
            announcements.map(announcement => (
              <div key={announcement.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{announcement.announcementTitle}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{announcement.announcementContent}</p>
                    <p className="text-sm text-gray-500">Scheduled: {announcement.scheduledDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    announcement.announcementCategory === 'general' ? 'bg-blue-100 text-blue-800' :
                    announcement.announcementCategory === 'urgent' ? 'bg-red-100 text-red-800' :
                    announcement.announcementCategory === 'events' ? 'bg-green-100 text-green-800' :
                    announcement.announcementCategory === 'rules' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {announcement.announcementCategory}
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

export default AnnouncementManagement;