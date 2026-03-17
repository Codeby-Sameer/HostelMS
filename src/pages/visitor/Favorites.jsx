// src/components/dashboard/visitor/Favorites.jsx
import React, { useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Green Valley Hostel',
      location: 'Downtown, City Center',
      price: 2500,
      rating: 4.8,
      reviews: 124,
      image: '🏠',
      amenities: ['WiFi', 'AC', 'Food', 'Laundry'],
      description: 'Comfortable stay with all modern amenities in the heart of the city.',
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Ocean View Hostel',
      location: 'Beach Road, Coastal Area',
      price: 3200,
      rating: 4.9,
      reviews: 156,
      image: '🌊',
      amenities: ['WiFi', 'AC', 'Food', 'Pool', 'Parking'],
      description: 'Beautiful sea view rooms with premium amenities and beach access.',
      addedDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      location: 'Hill Station Area',
      price: 2800,
      rating: 4.7,
      reviews: 67,
      image: '⛰️',
      amenities: ['WiFi', 'Food', 'Parking', 'Garden'],
      description: 'Peaceful stay surrounded by nature with hiking trails nearby.',
      addedDate: '2024-01-08'
    },
  ]);

  const removeFromFavorites = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const moveAllToFavorites = () => {
    // This would typically add all to a booking cart or similar
    alert('All hostels moved to booking cart!');
  };

  if (favorites.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Favorites</h2>
        </div>
        <div className="text-center py-12">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-6">
            Start exploring hostels and add them to your favorites for quick access later.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Search Hostels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Favorites</h2>
        <div className="flex gap-3">
          <button 
            onClick={moveAllToFavorites}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm"
          >
            Book All
          </button>
          <button 
            onClick={() => setFavorites([])}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-semibold text-sm"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {favorites.map(hostel => (
          <div key={hostel.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                {hostel.image}
              </div>
              <button
                onClick={() => removeFromFavorites(hostel.id)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition"
                title="Remove from favorites"
              >
                ❤️
              </button>
              <div className="absolute top-4 left-4 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                ⭐ {hostel.rating} ({hostel.reviews})
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{hostel.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{hostel.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">₹{hostel.price}</div>
                  <div className="text-xs text-gray-500">per night</div>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{hostel.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {hostel.amenities.map(amenity => (
                  <span key={amenity} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                    {amenity}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <span>Added on {new Date(hostel.addedDate).toLocaleDateString()}</span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                  Book Now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Favorites Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{favorites.length}</div>
            <div className="text-gray-600">Total Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              ₹{favorites.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
            </div>
            <div className="text-gray-600">Average Price/Night</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {Math.max(...favorites.map(item => item.rating)).toFixed(1)}
            </div>
            <div className="text-gray-600">Highest Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;