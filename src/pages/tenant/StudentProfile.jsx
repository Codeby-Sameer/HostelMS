// src/components/dashboard/StudentProfile.jsx
import React from 'react';

const StudentProfile = () => {
  const profileData = {
    personal: {
      name: 'John Doe',
      studentId: 'STU001',
      email: 'john.doe@student.edu',
      phone: '+91 9876543210',
      dateOfBirth: '2000-05-15',
      gender: 'Male',
    },
    academic: {
      course: 'B.Tech Computer Science',
      semester: '6th',
      rollNumber: 'CS202001',
      admissionYear: '2020',
    },
    hostel: {
      roomNumber: '101',
      block: 'A',
      floor: '1',
      bedNumber: '2',
    },
    emergency: {
      contactName: 'Robert Doe',
      relation: 'Father',
      phone: '+91 9876543211',
      address: '123 Main St, City, State - 560001',
    },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Student Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
              JD
            </div>
            <h3 className="text-xl font-bold">{profileData.personal.name}</h3>
            <p className="text-gray-600">{profileData.personal.studentId}</p>
            <p className="text-blue-600 font-medium mt-2">{profileData.academic.course}</p>
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Edit Profile
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profileData.personal).map(([key, value]) => (
                <div key={key}>
                  <label className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profileData.academic).map(([key, value]) => (
                <div key={key}>
                  <label className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hostel Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Hostel Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profileData.hostel).map(([key, value]) => (
                <div key={key}>
                  <label className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profileData.emergency).map(([key, value]) => (
                <div key={key}>
                  <label className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;