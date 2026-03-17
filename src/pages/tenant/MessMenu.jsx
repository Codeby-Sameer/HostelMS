// src/components/dashboard/MessMenu.jsx
import React, { useState } from 'react';

const MessMenu = () => {
  const [selectedDay, setSelectedDay] = useState('today');

  const todayMenu = {
    breakfast: 'Poha, Bread, Butter, Tea/Coffee',
    lunch: 'Rice, Dal, Sabzi, Roti, Salad, Pickle',
    dinner: 'Rice, Dal, Paneer Curry, Roti, Papad',
  };

  const weeklyMenu = {
    monday: {
      breakfast: 'Idli, Sambar, Chutney',
      lunch: 'Rice, Sambar, Vegetable Curry, Curd',
      dinner: 'Chapati, Dal Fry, Mixed Vegetables',
    },
    tuesday: {
      breakfast: 'Puri, Aloo Sabzi',
      lunch: 'Jeera Rice, Rajma Masala, Salad',
      dinner: 'Rice, Kadhi, Pakora',
    },
    // Add other days...
  };

  const days = [
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday', special: true },
    { id: 'sunday', name: 'Sunday', special: true },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mess Menu</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Menu */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Today's Menu</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-white p-4 rounded-r-lg">
              <h4 className="font-bold text-blue-600">Breakfast (7:00 - 9:00 AM)</h4>
              <p className="text-gray-700 mt-2">{todayMenu.breakfast}</p>
            </div>
            <div className="border-l-4 border-blue-500 bg-white p-4 rounded-r-lg">
              <h4 className="font-bold text-blue-600">Lunch (12:00 - 2:00 PM)</h4>
              <p className="text-gray-700 mt-2">{todayMenu.lunch}</p>
            </div>
            <div className="border-l-4 border-blue-500 bg-white p-4 rounded-r-lg">
              <h4 className="font-bold text-blue-600">Dinner (7:00 - 9:00 PM)</h4>
              <p className="text-gray-700 mt-2">{todayMenu.dinner}</p>
            </div>
          </div>
        </div>

        {/* Weekly Menu */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Weekly Menu</h3>
          <div className="space-y-3">
            {days.map((day) => (
              <div
                key={day.id}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  day.special ? 'bg-blue-50' : 'bg-gray-50'
                }`}
              >
                <span className="font-medium">{day.name}</span>
                <button
                  onClick={() => setSelectedDay(day.id)}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  View Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Day Menu Modal */}
      {selectedDay !== 'today' && weeklyMenu[selectedDay] && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {days.find(d => d.id === selectedDay)?.name} Menu
              </h3>
              <button
                onClick={() => setSelectedDay('today')}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 bg-green-50 p-3 rounded-r-lg">
                <h4 className="font-bold text-green-700">Breakfast</h4>
                <p className="text-gray-700">{weeklyMenu[selectedDay].breakfast}</p>
              </div>
              <div className="border-l-4 border-orange-500 bg-orange-50 p-3 rounded-r-lg">
                <h4 className="font-bold text-orange-700">Lunch</h4>
                <p className="text-gray-700">{weeklyMenu[selectedDay].lunch}</p>
              </div>
              <div className="border-l-4 border-purple-500 bg-purple-50 p-3 rounded-r-lg">
                <h4 className="font-bold text-purple-700">Dinner</h4>
                <p className="text-gray-700">{weeklyMenu[selectedDay].dinner}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessMenu;