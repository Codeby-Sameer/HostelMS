// src/components/dashboard/visitor/SearchHostels.jsx
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  useSearchHostelsMutation,
  useGetAvailableCitiesQuery,
  useGetAvailableAmenitiesQuery,
  useGetSearchFacetsQuery
} from '@/features/visitor/api/visitorSearchApi';

const SearchHostels = ({openModal}) => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    priceRange: [500, 5000],
    amenities: []
  });

  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API Hooks
  const { data: citiesData, isLoading: citiesLoading } = useGetAvailableCitiesQuery();
  const { data: amenitiesData, isLoading: amenitiesLoading } = useGetAvailableAmenitiesQuery();
  const { data: facetsData } = useGetSearchFacetsQuery();
  const [triggerSearch] = useSearchHostelsMutation();

  // Extract data
  const cities = Array.isArray(citiesData) ? citiesData : (citiesData?.results || []);
  const amenitiesList = Array.isArray(amenitiesData) ? amenitiesData : (amenitiesData?.results || ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Pool', 'Gym', 'Security']);

  // Perform search - debounced
  useEffect(() => {
    if (!searchFilters.location?.trim()) {
      setHostels([]);
      return;
    }

    const performSearch = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Build search payload - use query parameter only to catch all variations
        const searchPayload = {
          filters: {
            query: searchFilters.location,
            amenities: searchFilters.amenities.length > 0 ? searchFilters.amenities : null,
            min_price: searchFilters.priceRange[0],
            max_price: searchFilters.priceRange[1],
          },
          sort: { sort_by: 'rating' },
          page: 1,
          page_size: 100,
        };

        console.log('🔍 Searching with payload:', searchPayload);
        const result = await triggerSearch(searchPayload).unwrap();
        console.log('✅ API returned:', result.results?.length || 0, 'hostels');
        setHostels(result.results || []);
      } catch (err) {
        console.error('❌ Search error:', err);
        setError(err?.data?.message || 'Failed to search hostels');
        setHostels([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search by 500ms to avoid too many requests
    const timeoutId = setTimeout(performSearch, 500);
    return () => clearTimeout(timeoutId);
  }, [searchFilters.location, searchFilters.priceRange, searchFilters.amenities, triggerSearch]);

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Search Hostels</h2>
        <div className="text-sm text-gray-600">
          {loading ? '🔄 Searching...' : `Showing ${hostels.length} hostels`}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Search Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Search Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            {citiesLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">Select a location</option>
                {cities.map((city, idx) => {
                  const cityName = typeof city === 'string' ? city : (city.city || city.name || city);
                  return (
                    <option key={idx} value={cityName}>
                      {cityName}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.checkIn}
              onChange={(e) => handleFilterChange('checkIn', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchFilters.checkOut}
              onChange={(e) => handleFilterChange('checkOut', e.target.value)}
              min={searchFilters.checkIn || new Date().toISOString().split('T')[0]}
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
          {amenitiesLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="w-full h-6" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.isArray(amenitiesList) && amenitiesList.map((amenity, idx) => (
                <label key={idx} className="flex items-center space-x-2">
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
          )}
        </div>
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-6">
                <Skeleton className="w-32 h-32 flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-8 w-1/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hostels List */}
      {!loading && (
        <div className="grid grid-cols-1 gap-6">
          {hostels.length > 0 ? (
            hostels.map(hostel => (
              <div key={hostel.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center text-4xl overflow-hidden">
                        {hostel.photos && hostel.photos[0] ? (
                          <img src={hostel.photos[0]} alt={hostel.name} className="w-full h-full object-cover" />
                        ) : (
                          '🏠'
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{hostel.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{hostel.address || hostel.location}</p>
                          {hostel.distance_km && (
                            <p className="text-gray-500 text-xs mt-1">{hostel.distance_km} km away</p>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            ₹{hostel.price_range_min}<span className="text-sm font-normal text-gray-600">/night</span>
                          </div>
                          {hostel.rating && (
                            <div className="flex items-center justify-end mt-1">
                              <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                                ⭐ {hostel.rating}
                                {hostel.review_count && (
                                  <span className="text-gray-600 text-xs ml-1">({hostel.review_count})</span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {hostel.description && (
                        <p className="text-gray-700 text-sm mb-4">{hostel.description}</p>
                      )}
                      
                      {hostel.amenities && hostel.amenities.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hostel.amenities.map(amenity => (
                            <span key={amenity} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex gap-3 flex-wrap">
                        <button 
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                          onClick={() => openModal && typeof openModal === 'function' && openModal('booking')}
                        >
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
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No hostels found</h3>
              <p className="text-gray-600">Try adjusting your search filters to find more options.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchHostels;