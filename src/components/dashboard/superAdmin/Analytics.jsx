import React, { useState, useEffect } from 'react'

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setAnalyticsData({
        revenueTrends: [15000, 18000, 22000, 25000, 28000, 32000],
        occupancyTrends: [65, 70, 75, 80, 85, 88],
        visitorStats: {
          total: 12450,
          conversion: 8.5,
          avgSession: 4.2
        },
        bookingStats: {
          total: 1058,
          avgValue: 285,
          cancellation: 3.2
        },
        retentionStats: {
          rate: 92,
          avgStay: 8.5,
          repeatBookings: 34
        }
      })
    }, 1500)
  }, [])

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Analytics & Insights</h2>
        <p className="text-gray-600 mt-2 text-sm lg:text-base">Comprehensive analytics and performance metrics</p>
      </div>

      {!analyticsData ? (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
          <div className="loading-spinner mx-auto mb-4"></div>
          Loading analytics data...
        </div>
      ) : (
        <>
          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Revenue Trends</h3>
              <div className="h-48 lg:h-64 flex items-end justify-around space-x-1 lg:space-x-2">
                {analyticsData.revenueTrends.map((revenue, index) => {
                  const height = (revenue / Math.max(...analyticsData.revenueTrends)) * 140
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="chart-bar bg-blue-500 rounded-t w-full lg:w-10 lg:max-w-12 transition-all duration-300 hover:opacity-80"
                        style={{ height: `${height}px` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2">{months[index]}</span>
                      <span className="text-xs font-bold text-blue-600">${(revenue/1000).toFixed(0)}k</span>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Occupancy Trends</h3>
              <div className="h-48 lg:h-64 flex items-end justify-around space-x-1 lg:space-x-2">
                {analyticsData.occupancyTrends.map((occupancy, index) => {
                  const height = (occupancy / 100) * 140
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="chart-bar bg-green-500 rounded-t w-full lg:w-10 lg:max-w-12 transition-all duration-300 hover:opacity-80"
                        style={{ height: `${height}px` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2">{months[index]}</span>
                      <span className="text-xs font-bold text-green-600">{occupancy}%</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Visitor Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Visitor Traffic</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Total Visitors</span>
                  <span className="font-bold text-sm lg:text-base">{analyticsData.visitorStats.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Conversion Rate</span>
                  <span className="font-bold text-green-600 text-sm lg:text-base">{analyticsData.visitorStats.conversion}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Avg. Session Time</span>
                  <span className="font-bold text-sm lg:text-base">{analyticsData.visitorStats.avgSession}m</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Booking Performance</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Total Bookings</span>
                  <span className="font-bold text-sm lg:text-base">{analyticsData.bookingStats.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Avg. Booking Value</span>
                  <span className="font-bold text-blue-600 text-sm lg:text-base">${analyticsData.bookingStats.avgValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Cancellation Rate</span>
                  <span className="font-bold text-red-600 text-sm lg:text-base">{analyticsData.bookingStats.cancellation}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Student Retention</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Retention Rate</span>
                  <span className="font-bold text-green-600 text-sm lg:text-base">{analyticsData.retentionStats.rate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Avg. Stay Duration</span>
                  <span className="font-bold text-sm lg:text-base">{analyticsData.retentionStats.avgStay} months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Repeat Bookings</span>
                  <span className="font-bold text-purple-600 text-sm lg:text-base">{analyticsData.retentionStats.repeatBookings}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-blue-800">98.5%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-green-600">2.3s</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">Active Hostels</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">12.5K</div>
              <div className="text-sm text-gray-600">Monthly Visits</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Analytics