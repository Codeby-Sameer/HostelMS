// src/components/dashboard/views/StudentsView.jsx
import React, { useState } from 'react';

const StudentManagement = ({ openModal, allData }) => {
  allData=[]
  const [activeStudentTab, setActiveStudentTab] = useState('active');
  const students = allData.filter(item => item.type === 'students');

  const handleTabClick = (tab) => {
    setActiveStudentTab(tab);
  };

  const transferStudent = (studentId) => {
    console.log('Transfer student:', studentId);
  };

  const viewProfile = (studentId) => {
    console.log('View profile:', studentId);
  };

  const importStudents = () => {
    console.log('Import students');
  };

  const exportStudents = () => {
    console.log('Export students');
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Student & Tenant Profile Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('student')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Add Student
          </button>
          <button 
            onClick={importStudents}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Import Data
          </button>
          <button 
            onClick={exportStudents}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Export Data
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {['active', 'inactive', 'alumni', 'pending'].map(tab => (
            <button 
              key={tab}
              className={`px-4 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap text-sm md:text-base ${
                activeStudentTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} ({students.filter(s => s.status === tab).length})
            </button>
          ))}
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input type="text" placeholder="Search students..." className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base w-full lg:w-64" />
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Hostels</option>
              </select>
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Rooms</option>
              </select>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <button 
                onClick={() => console.log('Bulk transfer')}
                className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Bulk Transfer
              </button>
              <button 
                onClick={() => console.log('Generate reports')}
                className="px-3 py-2 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Generate Reports
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {students.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl md:text-6xl mb-2">👥</div>
                <p className="text-sm md:text-base">No students registered yet</p>
              </div>
            ) : (
              students
                .filter(student => student.status === activeStudentTab)
                .map(student => (
                  <div key={student.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg md:text-xl">{student.studentName}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{student.studentEmail} • {student.studentPhone}</p>
                        <p className="text-sm text-gray-500">ID: {student.studentId} • Room: {student.roomAssignment || 'Not assigned'}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.status === 'active' ? 'bg-green-100 text-green-800' :
                        student.status === 'inactive' ? 'bg-red-100 text-red-800' :
                        student.status === 'alumni' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {student.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => transferStudent(student.id)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded text-sm md:text-base hover:bg-blue-700"
                      >
                        Transfer
                      </button>
                      <button 
                        onClick={() => viewProfile(student.id)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-purple-600 text-white rounded text-sm md:text-base hover:bg-purple-700"
                      >
                        View Profile
                      </button>
                      <button 
                        onClick={() => openModal('student', student)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded text-sm md:text-base hover:bg-green-700"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;