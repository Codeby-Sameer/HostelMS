// src/components/dashboard/views/AnalyticsView.jsx
import React from 'react';

const AnalyticsView = () => {
  const generateReport = (reportType) => {
    console.log('Generate report:', reportType);
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">Reports & Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-600">Financial Reports</h3>
          <div className="space-y-2 md:space-y-3">
            <button onClick={() => generateReport('income')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              📊 Income Statements
            </button>
            <button onClick={() => generateReport('expense')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              💸 Expense Tracking
            </button>
            <button onClick={() => generateReport('profit')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              💰 Profit & Loss
            </button>
            <button onClick={() => generateReport('outstanding')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              ⏳ Outstanding Payments
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-600">Operational Reports</h3>
          <div className="space-y-2 md:space-y-3">
            <button onClick={() => generateReport('occupancy')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              🏠 Occupancy Reports
            </button>
            <button onClick={() => generateReport('attendance')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              📊 Attendance Patterns
            </button>
            <button onClick={() => generateReport('complaints')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              ⚠️ Complaint Metrics
            </button>
            <button onClick={() => generateReport('maintenance')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              🔧 Maintenance Costs
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-purple-600">Marketing Reports</h3>
          <div className="space-y-2 md:space-y-3">
            <button onClick={() => generateReport('profile-views')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              👁️ Profile Analytics
            </button>
            <button onClick={() => generateReport('booking-conversion')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              📈 Booking Conversion
            </button>
            <button onClick={() => generateReport('popular-rooms')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              🏆 Popular Room Types
            </button>
            <button onClick={() => generateReport('seasonal-trends')} className="w-full text-left p-2 md:p-3 hover:bg-gray-50 rounded-lg text-sm md:text-base">
              📅 Seasonal Trends
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Performance Overview</h3>
          <div className="h-48 md:h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">📊</div>
              <p className="text-sm md:text-base">Performance charts will appear here once you have data</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Revenue Trends</h3>
          <div className="h-48 md:h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">💰</div>
              <p className="text-sm md:text-base">Revenue analytics will be generated from your data</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Key Performance Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="text-center p-3 md:p-4 bg-blue-50 rounded-lg">
            <p className="text-lg md:text-2xl font-bold text-blue-600">0.0</p>
            <p className="text-xs md:text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-green-50 rounded-lg">
            <p className="text-lg md:text-2xl font-bold text-green-600">0%</p>
            <p className="text-xs md:text-sm text-gray-600">Booking Conversion</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-purple-50 rounded-lg">
            <p className="text-lg md:text-2xl font-bold text-purple-600">0%</p>
            <p className="text-xs md:text-sm text-gray-600">Visitor Engagement</p>
          </div>
          <div className="text-center p-3 md:p-4 bg-orange-50 rounded-lg">
            <p className="text-lg md:text-2xl font-bold text-orange-600">0%</p>
            <p className="text-xs md:text-sm text-gray-600">Revenue Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;