import React, { useState } from 'react'

const Reports = () => {
  const [reportType, setReportType] = useState('revenue')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [generating, setGenerating] = useState(false)

  // Set default dates
  React.useEffect(() => {
    const today = new Date()
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    setStartDate(firstDay.toISOString().split('T')[0])
    setEndDate(today.toISOString().split('T')[0])
  }, [])

  const generateReport = () => {
    setGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setGenerating(false)
      alert(`Report generated successfully!\nType: ${reportType}\nFrom: ${startDate} to ${endDate}`)
    }, 2000)
  }

  const financialData = {
    totalIncome: 125000,
    subscriptionRevenue: 100000,
    commissionEarned: 18750,
    pendingPayments: 6250
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Reports & Financial Analysis</h2>
        <p className="text-gray-600 mt-2 text-sm lg:text-base">Generate and analyze platform reports</p>
      </div>

      {/* Report Generation */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 border border-gray-100">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Generate Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <select 
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          >
            <option value="revenue">Revenue Report</option>
            <option value="occupancy">Occupancy Report</option>
            <option value="complaints">Complaints Report</option>
            <option value="financial">Financial Summary</option>
            <option value="user">User Activity Report</option>
            <option value="system">System Performance</option>
          </select>
          
          <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          />
          
          <input 
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          />
          
          <button 
            onClick={generateReport}
            disabled={generating}
            className="px-4 lg:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {generating ? (
              <>
                <div className="loading-spinner mr-2"></div>
                Generating...
              </>
            ) : (
              'Generate Report'
            )}
          </button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 border border-gray-100">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Financial Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-2xl lg:text-3xl font-bold text-green-600">${financialData.totalIncome.toLocaleString()}</p>
            <p className="text-gray-600 text-sm lg:text-base">Total Income</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-2xl lg:text-3xl font-bold text-blue-600">${financialData.subscriptionRevenue.toLocaleString()}</p>
            <p className="text-gray-600 text-sm lg:text-base">Subscription Revenue</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-2xl lg:text-3xl font-bold text-purple-600">${financialData.commissionEarned.toLocaleString()}</p>
            <p className="text-gray-600 text-sm lg:text-base">Commission Earned</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-2xl lg:text-3xl font-bold text-orange-600">${financialData.pendingPayments.toLocaleString()}</p>
            <p className="text-gray-600 text-sm lg:text-base">Pending Payments</p>
          </div>
        </div>
      </div>

      {/* Quick Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">Recent Reports</h4>
          <div className="space-y-3">
            {[
              { name: 'Monthly Revenue Report', date: 'Jan 2024', type: 'PDF' },
              { name: 'User Activity Analysis', date: 'Dec 2023', type: 'CSV' },
              { name: 'System Performance', date: 'Dec 2023', type: 'PDF' }
            ].map((report, index) => (
              <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-sm">{report.name}</p>
                  <p className="text-xs text-gray-500">{report.date}</p>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{report.type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">Export Options</h4>
          <div className="space-y-3">
            <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="font-medium text-sm">Export as PDF</div>
              <div className="text-xs text-gray-500">High quality document format</div>
            </button>
            <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="font-medium text-sm">Export as CSV</div>
              <div className="text-xs text-gray-500">Spreadsheet compatible format</div>
            </button>
            <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="font-medium text-sm">Export as Excel</div>
              <div className="text-xs text-gray-500">Microsoft Excel format</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">Report Statistics</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Generated This Month</span>
                <span className="font-bold">12</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Automated Reports</span>
                <span className="font-bold">8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Scheduled Reports</span>
                <span className="font-bold">4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports