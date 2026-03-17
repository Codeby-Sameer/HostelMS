// src/components/dashboard/TenantManagement.jsx
import React, { useState } from 'react';

const TenantManagement = () => {
  const { allData } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const tenants = allData.filter(item => item.type === 'users' && item.userType === 'student');
  const rooms = allData.filter(item => item.type === 'rooms');
  const hostels = allData.filter(item => item.type === 'hostels');

  // Enhanced sample tenant data
  const sampleTenants = [
    {
      id: 'tenant-1',
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      phone: '+91 9876543210',
      hostelId: 'hostel-1',
      roomNumber: '101',
      bedNumber: 'A',
      checkInDate: '2024-01-15',
      rentAmount: 8500,
      paymentStatus: 'paid',
      isActive: true
    },
    {
      id: 'tenant-2',
      name: 'Priya Patel',
      email: 'priya@example.com',
      phone: '+91 9876543211',
      hostelId: 'hostel-1',
      roomNumber: '102',
      bedNumber: 'A',
      checkInDate: '2024-02-01',
      rentAmount: 8500,
      paymentStatus: 'pending',
      isActive: true
    },
    {
      id: 'tenant-3',
      name: 'Amit Kumar',
      email: 'amit@example.com',
      phone: '+91 9876543212',
      hostelId: 'hostel-1',
      roomNumber: '201',
      bedNumber: 'A',
      checkInDate: '2023-12-10',
      rentAmount: 12000,
      paymentStatus: 'paid',
      isActive: true
    }
  ];

  const allTenants = [...tenants, ...sampleTenants];

  const filteredTenants = allTenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.roomNumber.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && tenant.isActive) ||
                         (statusFilter === 'inactive' && !tenant.isActive);

    return matchesSearch && matchesStatus;
  });

  const getHostelName = (hostelId) => {
    const hostel = hostels.find(h => h.id === hostelId);
    return hostel?.name || 'Unknown Hostel';
  };

  const getRoomDetails = (roomNumber) => {
    const room = rooms.find(r => r.roomNumber === roomNumber);
    return room ? `${room.roomType} (${room.capacity} bed)` : 'Unknown Room';
  };

  const handleAddTenant = () => {
    alert('Add new tenant functionality would open here');
  };

  const handleEditTenant = (tenantId) => {
    alert(`Edit tenant: ${tenantId}`);
  };

  const handleRemoveTenant = (tenantId) => {
    if (window.confirm('Are you sure you want to remove this tenant?')) {
      alert(`Tenant ${tenantId} removed`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tenant Management</h2>
        <button 
          onClick={handleAddTenant}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add New Tenant
        </button>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <input
            type="text"
            placeholder="Search tenants by name, email, or room..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600">
            Showing {filteredTenants.length} of {allTenants.length} tenants
          </span>
        </div>
      </div>

      {/* Tenant Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="stat-card">
          <div className="stat-number text-blue-600">{allTenants.length}</div>
          <div className="stat-label">Total Tenants</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-green-600">
            {allTenants.filter(t => t.paymentStatus === 'paid').length}
          </div>
          <div className="stat-label">Paid Rent</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-orange-600">
            {allTenants.filter(t => t.paymentStatus === 'pending').length}
          </div>
          <div className="stat-label">Pending Payments</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-purple-600">
            {allTenants.filter(t => t.isActive).length}
          </div>
          <div className="stat-label">Active Tenants</div>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="dashboard-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tenant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check-in Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTenants.map(tenant => (
                <tr key={tenant.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {tenant.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tenant.name}</p>
                        <p className="text-sm text-gray-500">{getHostelName(tenant.hostelId)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900">{tenant.email}</p>
                    <p className="text-sm text-gray-500">{tenant.phone}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium">Room {tenant.roomNumber}</p>
                    <p className="text-sm text-gray-500">
                      Bed {tenant.bedNumber} • {getRoomDetails(tenant.roomNumber)}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(tenant.checkInDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium">₹{tenant.rentAmount}</p>
                    <span className={`status-badge status-${tenant.paymentStatus}`}>
                      {tenant.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`status-badge status-${tenant.isActive ? 'active' : 'inactive'}`}>
                      {tenant.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditTenant(tenant.id)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleRemoveTenant(tenant.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredTenants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No tenants found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first tenant'}
          </p>
          <button 
            onClick={handleAddTenant}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add New Tenant
          </button>
        </div>
      )}
    </div>
  );
};

export default TenantManagement;