// src/components/dashboard/visitor/SearchHostels.jsx
import React, { useState } from 'react';

const SearchHostels = ({openModal}) => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    priceRange: [500, 5000],
    amenities: []
  });

  const amenitiesList = ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Pool', 'Gym', 'Security'];

  const hostels = [
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
      distance: '1.2 km from center'
    },
    {
      id: 2,
      name: 'Sunrise Students Hostel',
      location: 'Near University Campus',
      price: 1800,
      rating: 4.5,
      reviews: 89,
      image: '🌅',
      amenities: ['WiFi', 'Food', 'Laundry', 'Security'],
      description: 'Perfect for students with budget-friendly rooms and study areas.',
      distance: '0.5 km from university'
    },
    {
      id: 3,
      name: 'Ocean View Hostel',
      location: 'Beach Road, Coastal Area',
      price: 3200,
      rating: 4.9,
      reviews: 156,
      image: '🌊',
      amenities: ['WiFi', 'AC', 'Food', 'Pool', 'Parking'],
      description: 'Beautiful sea view rooms with premium amenities and beach access.',
      distance: 'Direct beach access'
    },
    {
      id: 4,
      name: 'Mountain Retreat',
      location: 'Hill Station Area',
      price: 2800,
      rating: 4.7,
      reviews: 67,
      image: '⛰️',
      amenities: ['WiFi', 'Food', 'Parking', 'Garden'],
      description: 'Peaceful stay surrounded by nature with hiking trails nearby.',
      distance: '5 km from city center'
    },
    {
      id: 5,
      name: 'City Center Hostel',
      location: 'Main City Area',
      price: 2200,
      rating: 4.4,
      reviews: 203,
      image: '🏙️',
      amenities: ['WiFi', 'AC', 'Laundry', 'Security'],
      description: 'Convenient location with easy access to public transport and shopping.',
      distance: '0.8 km from metro'
    },
    {
      id: 6,
      name: 'Garden Hostel',
      location: 'Suburban Area',
      price: 1900,
      rating: 4.6,
      reviews: 92,
      image: '🌳',
      amenities: ['WiFi', 'Food', 'Garden', 'Parking'],
      description: 'Quiet suburban stay with beautiful garden and community spaces.',
      distance: '3 km from downtown'
    },
  ];

  const handleFilterChange = (key, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleAmenity = (amenity) => {
    setSearchFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const filteredHostels = hostels.filter(hostel => {
    if (searchFilters.location && !hostel.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
      return false;
    }
    if (hostel.price < searchFilters.priceRange[0] || hostel.price > searchFilters.priceRange[1]) {
      return false;
    }
    if (searchFilters.amenities.length > 0 && !searchFilters.amenities.every(amenity => hostel.amenities.includes(amenity))) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Search Hostels</h2>
        <div className="text-sm text-gray-600">
          Showing {filteredHostels.length} hostels
        </div>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Search Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter location..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.checkIn}
              onChange={(e) => handleFilterChange('checkIn', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.checkOut}
              onChange={(e) => handleFilterChange('checkOut', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.guests}
              onChange={(e) => handleFilterChange('guests', parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ₹{searchFilters.priceRange[0]} - ₹{searchFilters.priceRange[1]}
          </label>
          <input
            type="range"
            min="500"
            max="10000"
            step="500"
            className="w-full"
            value={searchFilters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [searchFilters.priceRange[0], parseInt(e.target.value)])}
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {amenitiesList.map(amenity => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={searchFilters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Hostels List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredHostels.map(hostel => (
          <div key={hostel.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center text-4xl">
                    {hostel.image}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{hostel.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{hostel.location}</p>
                      <p className="text-gray-500 text-xs mt-1">{hostel.distance}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">₹{hostel.price}<span className="text-sm font-normal text-gray-600">/night</span></div>
                      <div className="flex items-center justify-end mt-1">
                        <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                          ⭐ {hostel.rating} <span className="text-gray-600 text-xs ml-1">({hostel.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{hostel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hostel.amenities.map(amenity => (
                      <span key={amenity} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold" onClick={()=>{openModal('booking')}}>
                      Book Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-semibold">
                      ❤️ Save
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredHostels.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No hostels found</h3>
          <p className="text-gray-600">Try adjusting your search filters to find more options.</p>
        </div>
      )}
    </div>
  );
};

export default SearchHostels;