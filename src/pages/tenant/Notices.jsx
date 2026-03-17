// src/components/dashboard/Notices.jsx
import React from 'react';

const Notices = () => {
  const noticeStats = [
    { count: 2, label: 'Urgent', color: 'text-red-600' },
    { count: 5, label: 'General', color: 'text-blue-600' },
    { count: 3, label: 'Events', color: 'text-green-600' },
  ];

  const notices = [
    {
      id: 1,
      title: 'Water Supply Maintenance',
      content: 'Water supply will be unavailable from 2:00 PM to 4:00 PM today for maintenance work.',
      type: 'maintenance',
      urgent: true,
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Hostel Meeting',
      content: 'Monthly hostel meeting scheduled for this Friday at 6:00 PM in the common area.',
      type: 'general',
      urgent: false,
      time: '1 day ago',
    },
    {
      id: 3,
      title: 'Cultural Fest Registration',
      content: 'Registrations open for annual cultural fest. Last date: January 30, 2024.',
      type: 'event',
      urgent: false,
      time: '2 days ago',
    },
    {
      id: 4,
      title: 'Electricity Maintenance',
      content: 'Scheduled power outage from 10:00 AM to 12:00 PM tomorrow for maintenance.',
      type: 'maintenance',
      urgent: true,
      time: '3 days ago',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Notices & Announcements</h2>

      {/* Notice Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {noticeStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${
              notice.urgent
                ? 'border-red-500 bg-red-50'
                : 'border-green-500'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">
                {notice.urgent && '🚨 '}
                {notice.title}
              </h3>
              <span className="text-sm text-gray-500">{notice.time}</span>
            </div>
            <p className="text-gray-700 mb-3">{notice.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Type: {notice.type}</span>
              {notice.urgent && (
                <span className="text-red-600 font-bold text-sm">URGENT</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;