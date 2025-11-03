// src/components/dashboard/ProfileManagement.jsx
import React, { useState } from 'react';


const ProfileManagement = () => {
  const { currentUser, currentUserType, allData } = useApp();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileForm, setProfileForm] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    address: '',
    emergencyContact: '',
    bloodGroup: '',
    dateOfBirth: ''
  });

  const userHostel = allData.find(item => item.id === currentUser?.hostelId);
  const userRoom = allData.find(item => 
    item.type === 'rooms' && item.roomNumber === currentUser?.roomNumber
  );

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('Password changed successfully!');
  };

  const renderProfileInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={profileForm.name}
            onChange={(e) => setProfileForm(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profileForm.email}
            onChange={(e) => setProfileForm(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profileForm.phone}
            onChange={(e) => setProfileForm(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={profileForm.dateOfBirth}
            onChange={(e) => setProfileForm(prev => ({ ...prev, dateOfBirth: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <textarea
          value={profileForm.address}
          onChange={(e) => setProfileForm(prev => ({ ...prev, address: e.target.value }))}
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Emergency Contact
          </label>
          <input
            type="text"
            value={profileForm.emergencyContact}
            onChange={(e) => setProfileForm(prev => ({ ...prev, emergencyContact: e.target.value }))}
            placeholder="Name and phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blood Group
          </label>
          <select
            value={profileForm.bloodGroup}
            onChange={(e) => setProfileForm(prev => ({ ...prev, bloodGroup: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleProfileUpdate}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );

  const renderPasswordChange = () => (
    <div className="space-y-6 max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          New Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm New Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePasswordChange}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Change Password
        </button>
      </div>
    </div>
  );

  const renderHostelInfo = () => (
    <div className="space-y-6">
      {userHostel ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="dashboard-card p-6">
              <h3 className="text-lg font-bold mb-4">Hostel Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hostel Name:</span>
                  <span className="font-medium">{userHostel.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-medium text-right">{userHostel.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{userHostel.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contact:</span>
                  <span className="font-medium">{userHostel.phone || '+91 XXXXX XXXXX'}</span>
                </div>
              </div>
            </div>

            <div className="dashboard-card p-6">
              <h3 className="text-lg font-bold mb-4">Room Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Number:</span>
                  <span className="font-medium">{currentUser?.roomNumber || '101'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bed Number:</span>
                  <span className="font-medium">{currentUser?.bedNumber || 'A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Type:</span>
                  <span className="font-medium">{userRoom?.roomType || 'Double Sharing'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in Date:</span>
                  <span className="font-medium">
                    {currentUser?.checkInDate ? new Date(currentUser.checkInDate).toLocaleDateString() : '2024-01-15'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {userHostel.amenities.split(',').map((amenity, index) => (
                <span key={index} className="filter-chip bg-blue-100 text-blue-800">
                  {amenity.trim()}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🏠</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Hostel Assigned</h3>
          <p className="text-gray-600">You are not currently assigned to any hostel.</p>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile Management</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="dashboard-card p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {currentUser?.name?.charAt(0) || 'U'}
              </div>
              <h3 className="text-lg font-bold">{currentUser?.name || 'User Name'}</h3>
              <p className="text-gray-600 text-sm capitalize">
                {currentUserType?.replace('-', ' ') || 'User'}
              </p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab('hostel')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'hostel' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Hostel Information
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'password' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Change Password
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="dashboard-card p-6">
            {activeTab === 'profile' && renderProfileInfo()}
            {activeTab === 'hostel' && renderHostelInfo()}
            {activeTab === 'password' && renderPasswordChange()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;