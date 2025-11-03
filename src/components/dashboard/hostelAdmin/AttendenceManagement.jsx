// src/components/dashboard/views/AttendanceView.jsx
import React from 'react';

const AttendanceManagement = ({ openModal, allData }) => {
  
  allData=[]
  const attendance = allData.filter(item => item.type === 'attendance');
  const presentToday = attendance.filter(a => a.status === 'present' && new Date(a.attendanceDate).toDateString() === new Date().toDateString()).length;
  const absentToday = attendance.filter(a => a.status === 'absent' && new Date(a.attendanceDate).toDateString() === new Date().toDateString()).length;
  const lateToday = attendance.filter(a => a.isLate && new Date(a.attendanceDate).toDateString() === new Date().toDateString()).length;
  const attendanceRate = attendance.length > 0 ? Math.round((presentToday / (presentToday + absentToday)) * 100) : 0;

  const generateAttendanceReport = () => {
    console.log('Generate attendance report');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Attendance Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('attendance')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            Record Attendance
          </button>
          <button 
            onClick={generateAttendanceReport}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Generate Report
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Present Today</p>
              <p className="text-xl md:text-2xl font-bold text-green-600">{presentToday}</p>
            </div>
            <div className="text-2xl md:text-3xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Absent Today</p>
              <p className="text-xl md:text-2xl font-bold text-red-600">{absentToday}</p>
            </div>
            <div className="text-2xl md:text-3xl">❌</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Late Arrivals</p>
              <p className="text-xl md:text-2xl font-bold text-orange-600">{lateToday}</p>
            </div>
            <div className="text-2xl md:text-3xl">⏰</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Attendance Rate</p>
              <p className="text-xl md:text-2xl font-bold text-blue-600">{attendanceRate}%</p>
            </div>
            <div className="text-2xl md:text-3xl">📊</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Attendance Records</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Hostels</option>
            </select>
            <input type="date" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" />
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Modes</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {attendance.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">📊</div>
              <p className="text-sm md:text-base">No attendance records yet</p>
            </div>
          ) : (
            attendance.map(record => (
              <div key={record.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{record.studentName}</h4>
                    <p className="text-gray-600 text-sm md:text-base">Date: {record.attendanceDate} • Mode: {record.attendanceMode}</p>
                    <p className="text-sm text-gray-500">Check-in: {record.checkInTime} {record.checkOutTime ? `• Check-out: ${record.checkOutTime}` : ''}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    record.status === 'present' ? 'bg-green-100 text-green-800' :
                    record.status === 'absent' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
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

export default AttendanceManagement;