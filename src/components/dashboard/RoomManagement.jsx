// src/components/dashboard/RoomManagement.jsx
import React, { useState } from 'react';


const RoomManagement = () => {
  const { allData } = useApp();
  const [selectedFloor, setSelectedFloor] = useState('all');
  
  const rooms = allData.filter(item => item.type === 'rooms');
  const hostels = allData.filter(item => item.type === 'hostels');

  // Sample room data since we don't have enough in sample data
  const sampleRooms = [
    { id: 'room-101', hostelId: 'hostel-1', roomNumber: '101', roomType: 'double', capacity: 2, isOccupied: true, floor: '1' },
    { id: 'room-102', hostelId: 'hostel-1', roomNumber: '102', roomType: 'double', capacity: 2, isOccupied: false, floor: '1' },
    { id: 'room-201', hostelId: 'hostel-1', roomNumber: '201', roomType: 'single', capacity: 1, isOccupied: true, floor: '2' },
    { id: 'room-202', hostelId: 'hostel-1', roomNumber: '202', roomType: 'triple', capacity: 3, isOccupied: false, floor: '2' },
    { id: 'room-301', hostelId: 'hostel-1', roomNumber: '301', roomType: 'double', capacity: 2, isOccupied: true, floor: '3' },
  ];

  const allRooms = [...rooms, ...sampleRooms];
  const filteredRooms = selectedFloor === 'all' 
    ? allRooms 
    : allRooms.filter(room => room.floor === selectedFloor);

  const floors = ['all', '1', '2', '3'];
  const roomTypes = {
    'single': 'Single',
    'double': 'Double Sharing',
    'triple': 'Triple Sharing',
    'dormitory': 'Dormitory'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Room Management</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add New Room
        </button>
      </div>

      {/* Floor Filter */}
      <div className="flex gap-2 mb-6">
        {floors.map(floor => (
          <button
            key={floor}
            onClick={() => setSelectedFloor(floor)}
            className={`filter-chip ${selectedFloor === floor ? 'active' : ''}`}
          >
            {floor === 'all' ? 'All Floors' : `Floor ${floor}`}
          </button>
        ))}
      </div>

      {/* Room Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="stat-card">
          <div className="stat-number text-blue-600">{allRooms.length}</div>
          <div className="stat-label">Total Rooms</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-green-600">
            {allRooms.filter(r => !r.isOccupied).length}
          </div>
          <div className="stat-label">Available Rooms</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-orange-600">
            {allRooms.filter(r => r.isOccupied).length}
          </div>
          <div className="stat-label">Occupied Rooms</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-purple-600">85%</div>
          <div className="stat-label">Occupancy Rate</div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredRooms.map(room => (
          <div key={room.id} className="dashboard-card p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">Room {room.roomNumber}</h3>
                <p className="text-sm text-gray-600">Floor {room.floor}</p>
              </div>
              <span className={`status-badge status-${room.isOccupied ? 'active' : 'inactive'}`}>
                {room.isOccupied ? 'Occupied' : 'Available'}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{roomTypes[room.roomType] || room.roomType}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Capacity:</span>
                <span className="font-medium">{room.capacity} persons</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">₹{room.pricePerMonth || '8,500'}/month</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                {room.isOccupied ? 'View Tenant' : 'Assign Tenant'}
              </button>
              <button className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomManagement;