// src/components/dashboard/Attendance.jsx
import React from 'react';

const Attendance = () => {
  const attendanceStats = [
    { value: '85%', label: 'This Month', color: 'text-green-600', progress: 85 },
    { value: '22', label: 'Present Days', color: 'text-blue-600', subtext: 'Out of 26' },
    { value: '4', label: 'Absent Days', color: 'text-red-600', subtext: 'This Month' },
  ];

  // Generate calendar days
  const generateCalendar = () => {
    const days = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="font-bold text-gray-500 text-center py-2">
          {day}
        </div>
      );
    });

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === today.toDateString();
      
      // Random attendance status for demo
      const statuses = ['present', 'present', 'present', 'absent', 'leave'];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      days.push(
        <div
          key={`day-${day}`}
          className={`p-2 text-center rounded-lg border-2 ${
            isToday ? 'border-blue-500 ' : 'border-transparent '
          }${
            status === 'present' ? 'bg-green-100 text-green-800' :
            status === 'absent' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Attendance Records</h2>

      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attendanceStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
            <p className="text-gray-600">{stat.label}</p>
            {stat.progress && (
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            )}
            {stat.subtext && (
              <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
            )}
          </div>
        ))}
      </div>

      {/* Attendance Calendar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Monthly Calendar</h3>
        <div className="grid grid-cols-7 gap-1">
          {generateCalendar()}
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-200 rounded mr-2"></div>
            <span className="text-sm">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-200 rounded mr-2"></div>
            <span className="text-sm">Absent</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-200 rounded mr-2"></div>
            <span className="text-sm">Leave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;