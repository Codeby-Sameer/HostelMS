// src/components/dashboard/visitor/VisitorHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VisitorHome = ({openModal}) => {
  const stats = [
    { number: '12', label: 'Hostels Viewed', color: 'text-blue-600' },
    { number: '3', label: 'Bookings Made', color: 'text-green-600' },
    { number: '8', label: 'Favorites', color: 'text-purple-600' },
    { number: '4.8', label: 'Avg Rating', color: 'text-yellow-600' },
  ];

  const recentBookings = [
    { 
      id: 1, 
      hostelName: 'Green Valley Hostel', 
      location: 'Downtown', 
      checkIn: '2024-02-15', 
      checkOut: '2024-02-20', 
      status: 'Confirmed',
      amount: '₹12,000'
    },
    { 
      id: 2, 
      hostelName: 'City Center Hostel', 
      location: 'City Center', 
      checkIn: '2024-01-10', 
      checkOut: '2024-01-15', 
      status: 'Completed',
      amount: '₹9,500'
    },
  ];

  const recommendedHostels = [
    {
      id: 1,
      name: 'Sunrise Hostel',
      location: 'Near University',
      price: '₹2,500/night',
      rating: 4.8,
      image: '🏠',
      amenities: ['WiFi', 'AC', 'Food']
    },
    {
      id: 2,
      name: 'Ocean View Hostel',
      location: 'Beach Road',
      price: '₹3,200/night',
      rating: 4.6,
      image: '🌊',
      amenities: ['WiFi', 'Pool', 'Breakfast']
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      location: 'Hill Station',
      price: '₹2,800/night',
      rating: 4.9,
      image: '⛰️',
      amenities: ['WiFi', 'Garden', 'Parking']
    },
  ];

  const quickActions = [
    { icon: '🔍', label: 'Search Hostels', link: '/visitor/search', color: 'bg-blue-500' },
    { icon: '📅', label: 'My Bookings', link: '/visitor/bookings', color: 'bg-green-500' },
    { icon: '❤️', label: 'Favorites', link: '/visitor/favorites', color: 'bg-red-500' },
    { icon: '👤', label: 'Profile', link: '/visitor/profile', color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Visitor! 👋</h1>
        <p className="text-blue-100 text-lg">Find your perfect hostel stay with amazing amenities</p>
        <div className="mt-4 flex gap-4">
          <Link 
            to="/visitor/search" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Search Hostels
          </Link>
          <Link 
            to="/visitor/bookings" 
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition"
          >
            View Bookings
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Bookings</h3>
            <Link to="/visitor/bookings" className="text-blue-600 hover:text-blue-700 text-sm">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold">{booking.hostelName}</h4>
                  <p className="text-sm text-gray-600">{booking.location}</p>
                  <p className="text-xs text-gray-500">{booking.checkIn} to {booking.checkOut}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-sm font-semibold mt-1">{booking.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className={`${action.color} text-white rounded-xl p-4 text-center hover:opacity-90 transition transform hover:scale-105`}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <p className="font-medium text-sm">{action.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Hostels */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Recommended Hostels</h3>
          <Link to="/visitor/search" className="text-blue-600 hover:text-blue-700 text-sm">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedHostels.map((hostel) => (
            <div key={hostel.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="bg-blue-50 p-6 text-4xl text-center">
                {hostel.image}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">{hostel.name}</h4>
                  <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    ⭐ {hostel.rating}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{hostel.location}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {hostel.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-600">{hostel.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm" onClick={()=>{openModal('booking')}}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitorHome;