// src/components/dashboard/views/CalendarView.jsx
import React, { useState } from 'react';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const toggleCalendarView = () => {
    console.log('Toggle calendar view');
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Booking Calendar</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base">
            <option value="">Select Hostel</option>
          </select>
          <button 
            onClick={toggleCalendarView}
            className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition text-sm md:text-base"
          >
            Switch to Grid View
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={previousMonth}
              className="p-2 hover:bg-gray-100 rounded-lg text-lg md:text-xl"
            >
              ◀
            </button>
            <h3 className="text-xl md:text-2xl font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg text-lg md:text-xl"
            >
              ▶
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded"></div>
              <span>Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded"></div>
              <span>Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded"></div>
              <span>Maintenance</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-6">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-gray-600 py-2 text-sm md:text-base">
              {day}
            </div>
          ))}
          {/* Calendar days would be generated here */}
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i} className="aspect-square border border-gray-200 p-1 md:p-2">
              <div className="text-xs md:text-sm">{i + 1}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-lg">Today's Check-ins</h4>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">No check-ins scheduled</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-lg">Today's Check-outs</h4>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">No check-outs scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;