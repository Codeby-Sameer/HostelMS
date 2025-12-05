import React, { useState, useEffect } from 'react'
import { useModal } from '../../../context/ModalContext'

const HostelManagement = () => {
  const { openModal } = useModal()
  const [filters, setFilters] = useState({
    status: '',
    tier: '',
    search: ''
  })
  const [hostels, setHostels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setHostels([
        {
          id: 1,
          hostelName: 'Luxury Suites',
          location: 'New York, NY',
          capacity: 200,
          occupancy: 190,
          subscriptionTier: 'Premium',
          status: 'Active',
          visibility: 'Public',
          assignedAdmin: 'John Smith',
          email: 'contact@luxurysuites.com',
          phone: '+1-555-0101',
          revenue: 8500,
          rating: 4.8,
          createdAt: '2024-01-15'
        },
        {
          id: 2,
          hostelName: 'City Center Hostel',
          location: 'Chicago, IL',
          capacity: 150,
          occupancy: 138,
          subscriptionTier: 'Standard',
          status: 'Active',
          visibility: 'Public',
          assignedAdmin: 'Sarah Johnson',
          email: 'info@citycenter.com',
          phone: '+1-555-0102',
          revenue: 7200,
          rating: 4.5,
          createdAt: '2024-01-10'
        },
        {
          id: 3,
          hostelName: 'Campus Living',
          location: 'Boston, MA',
          capacity: 180,
          occupancy: 158,
          subscriptionTier: 'Premium',
          status: 'Active',
          visibility: 'Private',
          assignedAdmin: 'Mike Davis',
          email: 'admin@campusliving.com',
          phone: '+1-555-0103',
          revenue: 6800,
          rating: 4.6,
          createdAt: '2024-01-08'
        }
      ])
      setLoading(false)
    }, 1500)
  }, [])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Inactive': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  }

  const tierColors = {
    'Free': 'bg-gray-100 text-gray-800',
    'Standard': 'bg-blue-100 text-blue-800',
    'Premium': 'bg-purple-100 text-purple-800'
  }

  const filteredHostels = hostels.filter(hostel => {
    return (
      (filters.status === '' || hostel.status === filters.status) &&
      (filters.tier === '' || hostel.subscriptionTier === filters.tier) &&
      (filters.search === '' || 
        hostel.hostelName.toLowerCase().includes(filters.search.toLowerCase()) ||
        hostel.location.toLowerCase().includes(filters.search.toLowerCase()))
    )
  })

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Hostel Management</h2>
          <p className="text-gray-600 mt-1 text-sm lg:text-base">Manage all hostels in the platform</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-4 lg:px-6 py-2 lg:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-800 text-sm lg:text-base"
          onClick={()=>{openModal('hostel')}}>
            + Add Hostel
          </button>
          <button className="px-4 lg:px-6 py-2 lg:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm lg:text-base">
            📊 Export Data
          </button>
        </div>
      </div>

      {/* Hostel Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 border border-gray-100">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-blue-800">Filters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <select 
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending Approval</option>
          </select>
          
          <select 
            value={filters.tier}
            onChange={(e) => handleFilterChange('tier', e.target.value)}
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          >
            <option value="">All Tiers</option>
            <option value="Free">Free</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
          
          <input 
            type="text"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search hostels..."
            className="px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          />
          
          <button className="px-4 lg:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm lg:text-base">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Hostels List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            <div className="loading-spinner mx-auto mb-4"></div>
            Loading hostels...
          </div>
        ) : filteredHostels.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            No hostels found matching your filters.
          </div>
        ) : (
          filteredHostels.map(hostel => (
            <div key={hostel.id} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-blue-800 truncate">{hostel.hostelName}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-base">
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📍</span>
                      <span className="truncate">{hostel.location}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">👥</span>
                      {hostel.occupancy}/{hostel.capacity} occupied
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">👨‍💼</span>
                      <span className="truncate">Admin: {hostel.assignedAdmin}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📧</span>
                      <span className="truncate">{hostel.email}</span>
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
                <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${statusColors[hostel.status] || 'bg-gray-100 text-gray-800'}`}>
                  {hostel.status}
                </span>
                <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${tierColors[hostel.subscriptionTier] || 'bg-gray-100 text-gray-800'}`}>
                  {hostel.subscriptionTier}
                </span>
                <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {hostel.visibility}
                </span>
                {hostel.revenue && (
                  <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    ${hostel.revenue.toLocaleString()}/mo
                  </span>
                )}
                {hostel.rating && (
                  <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    ⭐ {hostel.rating}/5
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between text-xs lg:text-sm text-gray-500 gap-2">
                <span>Occupancy: {Math.round((hostel.occupancy/hostel.capacity)*100)}%</span>
                <span>Added: {new Date(hostel.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default HostelManagement