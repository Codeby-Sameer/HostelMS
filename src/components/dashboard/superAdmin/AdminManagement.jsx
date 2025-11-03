import React, { useState, useEffect } from 'react'

const AdminManagement = () => {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setAdmins([
        {
          id: 1,
          name: 'John Smith',
          email: 'john.smith@hostelhub.com',
          phone: '+1-555-0101',
          role: 'Hostel Admin',
          status: 'Active',
          hostelId: 'H001, H002',
          createdAt: '2024-01-15',
          lastLogin: '2024-01-20'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          email: 'sarah.j@hostelhub.com',
          phone: '+1-555-0102',
          role: 'Multi-Hostel Admin',
          status: 'Active',
          hostelId: 'H003, H004, H005',
          createdAt: '2024-01-10',
          lastLogin: '2024-01-19'
        },
        {
          id: 3,
          name: 'Mike Davis',
          email: 'mike.davis@hostelhub.com',
          phone: '+1-555-0103',
          role: 'Regional Manager',
          status: 'Inactive',
          hostelId: 'All Region A',
          createdAt: '2024-01-08',
          lastLogin: '2024-01-15'
        },
        {
          id: 4,
          name: 'Emily Wilson',
          email: 'emily.w@hostelhub.com',
          phone: '+1-555-0104',
          role: 'Hostel Admin',
          status: 'Pending',
          hostelId: 'H006',
          createdAt: '2024-01-05',
          lastLogin: 'Never'
        }
      ])
      setLoading(false)
    }, 1200)
  }, [])

  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Inactive': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  }

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800">Administrator Management</h2>
          <p className="text-gray-600 mt-1 text-sm lg:text-base">Manage platform administrators and their permissions</p>
        </div>
        <button className="px-4 lg:px-6 py-2 lg:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-800 text-sm lg:text-base w-fit">
          + Add Administrator
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search administrators by name, email, or role..."
            className="flex-1 px-3 lg:px-4 py-2 border border-gray-300 rounded-lg text-sm lg:text-base"
          />
          <button className="px-4 lg:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm lg:text-base">
            Search
          </button>
        </div>
      </div>

      {/* Admins List */}
      <div className="space-y-4">
        {loading ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            <div className="loading-spinner mx-auto mb-4"></div>
            Loading administrators...
          </div>
        ) : filteredAdmins.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            No administrators found matching your search.
          </div>
        ) : (
          filteredAdmins.map(admin => (
            <div key={admin.id} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-blue-800 truncate">{admin.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-base">
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📧</span>
                      <span className="truncate">{admin.email}</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">📱</span>
                      {admin.phone}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">👔</span>
                      {admin.role}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">🏨</span>
                      <span className="truncate">Hostels: {admin.hostelId}</span>
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
                <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${statusColors[admin.status] || 'bg-gray-100 text-gray-800'}`}>
                  {admin.status}
                </span>
                <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Last Login: {admin.lastLogin}
                </span>
              </div>
              
              <div className="text-xs lg:text-sm text-gray-500">
                Added: {new Date(admin.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <div className="text-2xl font-bold text-blue-800">{admins.length}</div>
          <div className="text-sm text-gray-600">Total Admins</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {admins.filter(a => a.status === 'Active').length}
          </div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">
            {admins.filter(a => a.status === 'Pending').length}
          </div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <div className="text-2xl font-bold text-red-600">
            {admins.filter(a => a.status === 'Inactive').length}
          </div>
          <div className="text-sm text-gray-600">Inactive</div>
        </div>
      </div>
    </div>
  )
}

export default AdminManagement