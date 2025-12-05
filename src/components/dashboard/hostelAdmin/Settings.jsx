// src/components/dashboard/views/SettingsView.jsx
import React from 'react';

const SettingsView = () => {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">Settings & Preferences</h2>
      <div className="space-y-4 md:space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Notification Preferences</h3>
          <div className="space-y-3 md:space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-4 h-4 md:w-5 md:h-5" defaultChecked />
              <span className="text-sm md:text-base">Email notifications for new booking requests</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-4 h-4 md:w-5 md:h-5" defaultChecked />
              <span className="text-sm md:text-base">SMS alerts for urgent maintenance requests</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Weekly performance reports</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-4 h-4 md:w-5 md:h-5" defaultChecked />
              <span className="text-sm md:text-base">Emergency alert notifications</span>
            </label>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Administrator Name</label>
              <input type="text" className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="+1 234 567 8900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
              <input type="text" className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="Hostel Management Co." />
            </div>
          </div>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base">
            Update Profile
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">System Configuration</h3>
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Check-in Time</label>
              <input type="time" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="14:00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Check-out Time</label>
              <input type="time" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" defaultValue="11:00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;