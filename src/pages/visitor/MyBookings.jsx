// src/components/dashboard/visitor/MyBookings.jsx
import React, { useState } from 'react';

const MyBookings = ({opemModal}) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        hostelName: 'Green Valley Hostel',
        location: 'Downtown, City Center',
        checkIn: '2024-02-15',
        checkOut: '2024-02-20',
        guests: 2,
        totalAmount: '₹12,000',
        status: 'Confirmed',
        bookingDate: '2024-01-20',
        bookingId: 'BK001234',
        roomType: 'Deluxe Room'
      },
      {
        id: 2,
        hostelName: 'Ocean View Hostel',
        location: 'Beach Road',
        checkIn: '2024-03-10',
        checkOut: '2024-03-15',
        guests: 1,
        totalAmount: '₹16,000',
        status: 'Confirmed',
        bookingDate: '2024-01-25',
        bookingId: 'BK001235',
        roomType: 'Sea View Room'
      }
    ],
    completed: [
      {
        id: 3,
        hostelName: 'City Center Hostel',
        location: 'Main City Area',
        checkIn: '2024-01-10',
        checkOut: '2024-01-15',
        guests: 2,
        totalAmount: '₹9,500',
        status: 'Completed',
        bookingDate: '2023-12-20',
        bookingId: 'BK001230',
        roomType: 'Standard Room'
      }
    ],
    cancelled: [
      {
        id: 4,
        hostelName: 'Mountain Retreat',
        location: 'Hill Station',
        checkIn: '2024-01-05',
        checkOut: '2024-01-08',
        guests: 1,
        totalAmount: '₹8,400',
        status: 'Cancelled',
        bookingDate: '2023-12-15',
        bookingId: 'BK001228',
        roomType: 'Garden View Room'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentBookings = bookings[activeTab] || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        <div className="text-sm text-gray-600">
          {currentBookings.length} {activeTab} bookings
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-1">
        <div className="flex space-x-1">
          {['upcoming', 'completed', 'cancelled'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {bookings[tab]?.length || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {currentBookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{booking.hostelName}</h3>
                    <p className="text-gray-600 text-sm mt-1">{booking.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Check-in:</span>
                    <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Check-out:</span>
                    <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Guests:</span>
                    <p className="font-medium">{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Room Type:</span>
                    <p className="font-medium">{booking.roomType}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>Booking ID: <strong>{booking.bookingId}</strong></span>
                  <span>•</span>
                  <span>Booked on: {new Date(booking.bookingDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="lg:text-right">
                <div className="text-2xl font-bold text-green-600 mb-2">{booking.totalAmount}</div>
                <div className="space-y-2">
                  {activeTab === 'upcoming' && (
                    <>
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                        Modify Booking
                      </button>
                      <button className="w-full border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition text-sm font-medium">
                        Cancel Booking
                      </button>
                    </>
                  )}
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                    View Details
                  </button>
                  {activeTab === 'completed' && (
                    <button className="w-full border border-green-300 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition text-sm font-medium">
                      Book Again
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentBookings.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">
            {activeTab === 'upcoming' ? '📅' : activeTab === 'completed' ? '✅' : '❌'}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No {activeTab} bookings
          </h3>
          <p className="text-gray-600 mb-6">
            {activeTab === 'upcoming' 
              ? "You don't have any upcoming bookings. Start exploring hostels!"
              : activeTab === 'completed'
              ? "You haven't completed any bookings yet."
              : "No cancelled bookings. That's great!"}
          </p>
          {activeTab === 'upcoming' && (
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Search Hostels
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBookings;