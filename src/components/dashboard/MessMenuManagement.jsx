// src/components/dashboard/MessMenuManagement.jsx
import React, { useState } from 'react';

const MessMenuManagement = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const messMenu = {
    monday: {
      breakfast: 'Poha, Tea, Bread Butter',
      lunch: 'Dal, Rice, Roti, Mixed Vegetable, Salad',
      dinner: 'Paneer Butter Masala, Rice, Roti, Dal, Salad'
    },
    tuesday: {
      breakfast: 'Idli Sambhar, Coffee',
      lunch: 'Rajma, Rice, Roti, Aloo Gobhi, Salad',
      dinner: 'Chicken Curry, Rice, Roti, Dal Fry, Salad'
    },
    wednesday: {
      breakfast: 'Sandwich, Juice, Fruits',
      lunch: 'Chole, Rice, Roti, Bhindi, Salad',
      dinner: 'Egg Curry, Rice, Roti, Dal, Salad'
    },
    thursday: {
      breakfast: 'Paratha, Curd, Tea',
      lunch: 'Sambar, Rice, Roti, Baingan Bharta, Salad',
      dinner: 'Fish Curry, Rice, Roti, Dal, Salad'
    },
    friday: {
      breakfast: 'Cornflakes, Milk, Toast',
      lunch: 'Kadhi Pakoda, Rice, Roti, Aloo Matar, Salad',
      dinner: 'Mutton Curry, Rice, Roti, Dal, Salad'
    },
    saturday: {
      breakfast: 'Dosa, Chutney, Coffee',
      lunch: 'Dal Makhani, Rice, Roti, Mix Veg, Salad',
      dinner: 'Special Thali'
    },
    sunday: {
      breakfast: 'Pancakes, Syrup, Juice',
      lunch: 'Biriyani, Raita, Salad',
      dinner: 'Pizza, Pasta, Garlic Bread'
    }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mess Menu</h2>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Download Menu
        </button>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`filter-chip whitespace-nowrap ${
              selectedDay === day ? 'active' : ''
            }`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-bold mb-4 text-orange-600">🍳 Breakfast</h3>
          <p className="text-gray-700">{messMenu[selectedDay].breakfast}</p>
          <p className="text-sm text-gray-500 mt-2">7:00 AM - 9:00 AM</p>
        </div>

        <div className="dashboard-card p-6">
          <h3 className="text-lg font-bold mb-4 text-yellow-600">🍽️ Lunch</h3>
          <p className="text-gray-700">{messMenu[selectedDay].lunch}</p>
          <p className="text-sm text-gray-500 mt-2">12:30 PM - 2:30 PM</p>
        </div>

        <div className="dashboard-card p-6">
          <h3 className="text-lg font-bold mb-4 text-blue-600">🌙 Dinner</h3>
          <p className="text-gray-700">{messMenu[selectedDay].dinner}</p>
          <p className="text-sm text-gray-500 mt-2">7:30 PM - 9:30 PM</p>
        </div>
      </div>

      {/* Special Notes */}
      <div className="mt-6 dashboard-card p-6 bg-yellow-50 border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800 mb-2">📢 Important Notes</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Sunday dinner is special non-veg night</li>
          <li>• Special dietary requirements should be informed in advance</li>
          <li>• Mess timings are strictly followed</li>
          <li>• Wastage of food is strictly prohibited</li>
        </ul>
      </div>
    </div>
  );
};

export default MessMenuManagement;