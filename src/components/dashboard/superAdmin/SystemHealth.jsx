import React, { useState, useEffect } from 'react'

const SystemHealth = () => {
  const [systemMetrics, setSystemMetrics] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics({
        cpuUsage: 45 + Math.random() * 10,
        memoryUsage: 62 + Math.random() * 8,
        diskUsage: 78 + Math.random() * 5,
        networkLatency: 28 + Math.random() * 15,
        activeUsers: 124 + Math.floor(Math.random() * 20),
        responseTime: 1.2 + Math.random() * 0.8
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const systemEvents = [
    {
      id: 1,
      type: 'success',
      message: 'System backup completed successfully',
      time: '2 hours ago',
      icon: '💾'
    },
    {
      id: 2,
      type: 'info',
      message: 'Database optimization running',
      time: '4 hours ago',
      icon: '🛠️'
    },
    {
      id: 3,
      type: 'warning',
      message: 'High traffic detected - scaling resources',
      time: '6 hours ago',
      icon: '📈'
    },
    {
      id: 4,
      type: 'success',
      message: 'Security patches applied',
      time: '1 day ago',
      icon: '🔒'
    },
    {
      id: 5,
      type: 'info',
      message: 'Scheduled maintenance completed',
      time: '1 day ago',
      icon: '⚙️'
    }
  ]

  const getUsageColor = (usage) => {
    if (usage < 60) return 'bg-green-500'
    if (usage < 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getStatusColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200'
      case 'warning': return 'bg-yellow-50 border-yellow-200'
      case 'error': return 'bg-red-50 border-red-200'
      default: return 'bg-blue-50 border-blue-200'
    }
  }

  const getStatusTextColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-800'
      case 'warning': return 'text-yellow-800'
      case 'error': return 'text-red-800'
      default: return 'text-blue-800'
    }
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">System Health & Monitoring</h2>
        <p className="text-gray-600 mt-2 text-sm lg:text-base">Real-time system monitoring and performance metrics</p>
      </div>

      {/* System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">System Performance</h3>
          <div className="space-y-4">
            {systemMetrics ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">CPU Usage</span>
                  <div className="flex items-center">
                    <div className="w-24 lg:w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full ${getUsageColor(systemMetrics.cpuUsage)} transition-all duration-500`}
                        style={{ width: `${systemMetrics.cpuUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-12">{systemMetrics.cpuUsage.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Memory Usage</span>
                  <div className="flex items-center">
                    <div className="w-24 lg:w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full ${getUsageColor(systemMetrics.memoryUsage)} transition-all duration-500`}
                        style={{ width: `${systemMetrics.memoryUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-12">{systemMetrics.memoryUsage.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Disk Usage</span>
                  <div className="flex items-center">
                    <div className="w-24 lg:w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full ${getUsageColor(systemMetrics.diskUsage)} transition-all duration-500`}
                        style={{ width: `${systemMetrics.diskUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-12">{systemMetrics.diskUsage.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Network Latency</span>
                  <span className="text-sm font-medium text-green-600">{systemMetrics.networkLatency.toFixed(1)} ms</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Active Users</span>
                  <span className="text-sm font-medium text-blue-600">{systemMetrics.activeUsers}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm lg:text-base">Response Time</span>
                  <span className="text-sm font-medium text-green-600">{systemMetrics.responseTime.toFixed(1)}s</span>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="loading-spinner mx-auto mb-4"></div>
                <p className="text-gray-500">Loading system metrics...</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Recent System Events</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {systemEvents.map(event => (
              <div 
                key={event.id}
                className={`flex items-center p-3 rounded-lg border ${getStatusColor(event.type)}`}
              >
                <span className="text-lg mr-3">{event.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium text-sm lg:text-base ${getStatusTextColor(event.type)}`}>
                    {event.message}
                  </p>
                  <p className="text-xs text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 lg:mb-8 border border-gray-100">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Service Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Web Server', status: 'operational', response: '98.5%' },
            { name: 'Database', status: 'operational', response: '99.2%' },
            { name: 'Payment Gateway', status: 'operational', response: '99.8%' },
            { name: 'Email Service', status: 'degraded', response: '95.1%' },
            { name: 'API Gateway', status: 'operational', response: '99.1%' },
            { name: 'File Storage', status: 'operational', response: '99.5%' },
            { name: 'Cache Service', status: 'maintenance', response: 'N/A' },
            { name: 'CDN', status: 'operational', response: '99.9%' }
          ].map((service, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-sm lg:text-base">{service.name}</span>
                <span className={`status-indicator ${
                  service.status === 'operational' ? 'status-active' : 
                  service.status === 'degraded' ? 'status-pending' : 'status-inactive'
                }`}></span>
              </div>
              <div className="text-xs text-gray-600 capitalize">{service.status}</div>
              <div className="text-xs text-gray-500 mt-1">Uptime: {service.response}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition text-center">
          <div className="text-blue-600 text-lg mb-2">🔄</div>
          <div className="font-medium text-blue-800 text-sm">Clear Cache</div>
        </button>
        <button className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition text-center">
          <div className="text-green-600 text-lg mb-2">💾</div>
          <div className="font-medium text-green-800 text-sm">Backup Now</div>
        </button>
        <button className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition text-center">
          <div className="text-yellow-600 text-lg mb-2">📊</div>
          <div className="font-medium text-yellow-800 text-sm">Run Diagnostics</div>
        </button>
        <button className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition text-center">
          <div className="text-purple-600 text-lg mb-2">📋</div>
          <div className="font-medium text-purple-800 text-sm">View Logs</div>
        </button>
      </div>
    </div>
  )
}

export default SystemHealth