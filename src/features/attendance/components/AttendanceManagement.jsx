// src/components/dashboard/AttendanceManagement.jsx
import React from 'react';

const AttendanceManagement = () => {
  const attendanceData = [
    { date: '2024-03-01', status: 'present' },
    { date: '2024-03-02', status: 'present' },
    { date: '2024-03-03', status: 'absent' },
    { date: '2024-03-04', status: 'present' },
    { date: '2024-03-05', status: 'present' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Attendance Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="stat-card">
          <div className="stat-number text-green-600">85%</div>
          <div className="stat-label">Overall Attendance</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-blue-600">24</div>
          <div className="stat-label">Present Days</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-red-600">4</div>
          <div className="stat-label">Absent Days</div>
        </div>
      </div>

      <div className="dashboard-card p-6">
        <h3 className="text-lg font-bold mb-4">Recent Attendance</h3>
        <div className="space-y-3">
          {attendanceData.map((record, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">
                  {new Date(record.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <span className={`status-badge ${
                record.status === 'present' ? 'status-active' : 'status-overdue'
              }`}>
                {record.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagement;