import React, { useState, useEffect } from 'react'

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setTimeout(() => {
      setSubscriptions([
        {
          id: 1,
          hostelName: 'Luxury Suites',
          subscriptionTier: 'Premium',
          subscriptionStatus: 'Active',
          amount: 299,
          paymentDate: '2024-02-15',
          email: 'billing@luxurysuites.com',
          startDate: '2024-01-15',
          cycle: 'Monthly'
        },
        {
          id: 2,
          hostelName: 'City Center Hostel',
          subscriptionTier: 'Standard',
          subscriptionStatus: 'Active',
          amount: 199,
          paymentDate: '2024-02-10',
          email: 'admin@citycenter.com',
          startDate: '2024-01-10',
          cycle: 'Monthly'
        },
        {
          id: 3,
          hostelName: 'Campus Living',
          subscriptionTier: 'Premium',
          subscriptionStatus: 'Active',
          amount: 299,
          paymentDate: '2024-02-08',
          email: 'billing@campusliving.com',
          startDate: '2024-01-08',
          cycle: 'Monthly'
        },
        {
          id: 4,
          hostelName: 'Budget Stay',
          subscriptionTier: 'Free',
          subscriptionStatus: 'Active',
          amount: 0,
          paymentDate: 'N/A',
          email: 'info@budgetstay.com',
          startDate: '2024-01-05',
          cycle: 'Free'
        },
        {
          id: 5,
          hostelName: 'Urban Hostel',
          subscriptionTier: 'Standard',
          subscriptionStatus: 'Expired',
          amount: 199,
          paymentDate: '2024-01-28',
          email: 'contact@urbanhostel.com',
          startDate: '2023-12-28',
          cycle: 'Monthly'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Expired': 'bg-red-100 text-red-800',
    'Cancelled': 'bg-gray-100 text-gray-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  }

  const tierColors = {
    'Free': 'bg-gray-100 text-gray-800',
    'Standard': 'bg-blue-100 text-blue-800',
    'Premium': 'bg-purple-100 text-purple-800'
  }

  const filteredSubscriptions = subscriptions.filter(sub => 
    filter === 'all' || sub.subscriptionStatus.toLowerCase() === filter.toLowerCase()
  )

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter(s => s.subscriptionStatus === 'Active').length,
    expired: subscriptions.filter(s => s.subscriptionStatus === 'Expired').length,
    revenue: subscriptions.filter(s => s.subscriptionStatus === 'Active').reduce((sum, sub) => sum + sub.amount, 0)
  }

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Subscription & Billing Management</h2>
          <p className="text-gray-600 mt-1 text-sm lg:text-base">Manage hostel subscriptions and billing information</p>
        </div>
        <button className="px-4 lg:px-6 py-2 lg:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-800 text-sm lg:text-base w-fit">
          + Add Subscription
        </button>
      </div>

      {/* Subscription Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg font-bold mb-2 text-blue-800">Free Tier</h3>
          <p className="text-2xl lg:text-3xl font-bold text-gray-600">
            {subscriptions.filter(s => s.subscriptionTier === 'Free').length}
          </p>
          <p className="text-sm text-gray-500">Active subscriptions</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg font-bold mb-2 text-blue-800">Standard Tier</h3>
          <p className="text-2xl lg:text-3xl font-bold text-blue-600">
            {subscriptions.filter(s => s.subscriptionTier === 'Standard').length}
          </p>
          <p className="text-sm text-gray-500">Active subscriptions</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg font-bold mb-2 text-blue-800">Premium Tier</h3>
          <p className="text-2xl lg:text-3xl font-bold text-purple-600">
            {subscriptions.filter(s => s.subscriptionTier === 'Premium').length}
          </p>
          <p className="text-sm text-gray-500">Active subscriptions</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-100">
          <h3 className="text-lg font-bold mb-2 text-blue-800">Monthly Revenue</h3>
          <p className="text-2xl lg:text-3xl font-bold text-green-600">${stats.revenue}</p>
          <p className="text-sm text-gray-500">From active subscriptions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 border border-gray-100">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Subscriptions
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition ${
              filter === 'active' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('expired')}
            className={`px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition ${
              filter === 'expired' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Expired
          </button>
        </div>
      </div>

      {/* Subscriptions List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            <div className="loading-spinner mx-auto mb-4"></div>
            Loading subscriptions...
          </div>
        ) : filteredSubscriptions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            No subscriptions found.
          </div>
        ) : (
          filteredSubscriptions.map(subscription => (
            <div key={subscription.id} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-blue-800 truncate">{subscription.hostelName}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-base">
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📧</span>
                      <span className="truncate">{subscription.email}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">💰</span>
                      ${subscription.amount}/month
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📅</span>
                      Next Payment: {new Date(subscription.paymentDate).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">🔄</span>
                      Cycle: {subscription.cycle}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="px-3 lg:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                    Edit
                  </button>
                  <button className="px-3 lg:px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm">
                    Delete
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${statusColors[subscription.subscriptionStatus] || 'bg-gray-100 text-gray-800'}`}>
                  {subscription.subscriptionStatus}
                </span>
                <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${tierColors[subscription.subscriptionTier] || 'bg-gray-100 text-gray-800'}`}>
                  {subscription.subscriptionTier}
                </span>
                <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Started: {new Date(subscription.startDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Subscriptions