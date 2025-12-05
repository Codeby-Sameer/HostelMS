// src/components/dashboard/views/MessView.jsx
import React, { useState } from 'react';

const MessManagement = ({ openModal }) => {
  const [activeMenuTab, setActiveMenuTab] = useState('daily');

  const handleTabClick = (tab) => {
    setActiveMenuTab(tab);
  };

  const duplicateMenu = () => {
    console.log('Duplicate menu');
  };

  const publishMenu = () => {
    console.log('Publish menu');
  };

  const notifyStudents = () => {
    console.log('Notify students');
  };

  const exportMenu = () => {
    console.log('Export menu');
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Mess Menu Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('menu')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Add Menu Item
          </button>
          <button 
            onClick={duplicateMenu}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Duplicate Menu
          </button>
          <button 
            onClick={publishMenu}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Publish Menu
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {['daily', 'weekly', 'monthly', 'special'].map(tab => (
            <button 
              key={tab}
              className={`px-4 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap text-sm md:text-base ${
                activeMenuTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Menu
            </button>
          ))}
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Hostels</option>
              </select>
              <input type="date" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" />
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Meals</option>
              </select>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <button 
                onClick={notifyStudents}
                className="px-3 py-2 md:px-4 md:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Notify Students
              </button>
              <button 
                onClick={exportMenu}
                className="px-3 py-2 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Export Menu
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">🍽️</div>
              <p className="text-sm md:text-base">No menu items scheduled yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessManagement;