import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Header";

const PropertyListingsPage = () => {
  const navigate = useNavigate();
  const [selectedRoomType, setSelectedRoomType] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedResidentType, setSelectedResidentType] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [budget, setBudget] = useState(50000);
  const [searchCity, setSearchCity] = useState("Hyderabad");
  const [sortOption, setSortOption] = useState("relevance");
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Sample hostel and PG images from Unsplash
  const properties = [
    {
      id: 1,
      name: "RR BOYS HOSTEL",
      location: "Ramanagar X Roads",
      city: "Hyderabad",
      area: "Ramanagar",
      verified: true,
      roomTypes: ["Single", "Five", "Six"],
      gender: "Male",
      residentType: "Students / Working Professionals",
      price: 5000,
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "A comfortable and secure boys hostel located in Ramanagar with all basic amenities included.",
      amenities: ["WiFi", "Laundry", "Food", "Security", "Parking"],
      contact: "+91 9876543210",
      owner: "Mr. Rajesh Kumar",
      rules: ["No smoking", "Visitors allowed till 10 PM", "Identity proof required"],
      rating: 4.2,
      reviews: 127
    },
    {
      id: 2,
      name: "BVR BOYS HOSTEL 4.0",
      location: "7-1-636/53/4 lane opposite paika bazar, bandimet",
      city: "Hyderabad",
      area: "Bandimet",
      verified: true,
      roomTypes: ["Single", "Double", "Four", "Six", "More"],
      gender: "Male",
      residentType: "Students / Working Professionals",
      price: 4000,
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Modern hostel with premium facilities for students and working professionals.",
      amenities: ["WiFi", "Laundry", "AC", "Gym", "Food", "Security"],
      contact: "+91 9876543211",
      owner: "Mr. Suresh Reddy",
      rules: ["No alcohol", "Visitors allowed", "Monthly rent in advance"],
      rating: 4.5,
      reviews: 89
    },
    {
      id: 3,
      name: "GIRLS HOSTEL DELUXE",
      location: "Hitech City",
      city: "Hyderabad",
      area: "Hitech City",
      verified: true,
      roomTypes: ["Single", "Double", "Triple"],
      gender: "Female",
      residentType: "Students",
      price: 6000,
      images: [
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Exclusive girls hostel with 24/7 security and premium amenities.",
      amenities: ["WiFi", "Laundry", "Food", "Security", "Parking", "Common Room"],
      contact: "+91 9876543212",
      owner: "Ms. Priya Sharma",
      rules: ["Strictly for girls", "No male visitors", "Curfew 10 PM"],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 4,
      name: "COMFORT PG RESIDENCE",
      location: "Gachibowli",
      city: "Hyderabad",
      area: "Gachibowli",
      verified: false,
      roomTypes: ["Single", "Double"],
      gender: "Any",
      residentType: "Working Professionals",
      price: 7000,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Modern PG for working professionals near IT companies with homely environment.",
      amenities: ["WiFi", "Laundry", "AC", "Food", "Security", "Housekeeping"],
      contact: "+91 9876543213",
      owner: "Mr. Anand Patel",
      rules: ["Separate floors for boys and girls", "Professional environment", "No restrictions"],
      rating: 4.1,
      reviews: 67
    },
    {
      id: 5,
      name: "BANGALORE STUDENTS PG",
      location: "Koramangala",
      city: "Bangalore",
      area: "Koramangala",
      verified: true,
      roomTypes: ["Single", "Double", "Triple"],
      gender: "Male",
      residentType: "Students / Working Professionals",
      price: 5500,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Well-maintained PG in prime location of Koramangala with excellent connectivity.",
      amenities: ["WiFi", "Laundry", "Food", "Security", "Power Backup"],
      contact: "+91 9876543214",
      owner: "Mr. Ravi Kumar",
      rules: ["Flexible timings", "Food optional", "Security deposit required"],
      rating: 4.3,
      reviews: 94
    },
    {
      id: 6,
      name: "PREMIUM WOMEN'S PG",
      location: "Madhapur",
      city: "Hyderabad",
      area: "Madhapur",
      verified: true,
      roomTypes: ["Single", "Double"],
      gender: "Female",
      residentType: "Working Professionals",
      price: 8000,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Luxury PG with premium facilities for working women professionals.",
      amenities: ["WiFi", "Laundry", "AC", "Gym", "Food", "Security", "Parking"],
      contact: "+91 9876543215",
      owner: "Ms. Anjali Mehta",
      rules: ["Working women only", "No restrictions", "Weekly cleaning"],
      rating: 4.7,
      reviews: 112
    },
    {
      id: 7,
      name: "ECONOMY STUDENTS HOSTEL",
      location: "Kondapur",
      city: "Hyderabad",
      area: "Kondapur",
      verified: true,
      roomTypes: ["Four", "Six", "Eight"],
      gender: "Male",
      residentType: "Students",
      price: 3500,
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Budget-friendly hostel perfect for college students with all essential amenities.",
      amenities: ["WiFi", "Laundry", "Food", "Security", "Study Room"],
      contact: "+91 9876543216",
      owner: "Mr. Vikas Singh",
      rules: ["Student ID required", "Library access", "Study hours maintained"],
      rating: 4.0,
      reviews: 203
    },
    {
      id: 8,
      name: "EXECUTIVE PG SUITES",
      location: "HSR Layout",
      city: "Bangalore",
      area: "HSR Layout",
      verified: true,
      roomTypes: ["Single", "Double"],
      gender: "Any",
      residentType: "Working Professionals",
      price: 9000,
      images: [
        "https://images.unsplash.com/photo-1521783988139-aa4a1178a614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      description: "Premium executive PG with luxury amenities for corporate professionals.",
      amenities: ["WiFi", "Laundry", "AC", "Gym", "Food", "Security", "Parking", "Housekeeping"],
      contact: "+91 9876543217",
      owner: "Mr. Arjun Mehta",
      rules: ["Professional environment", "Flexible check-in", "Premium services"],
      rating: 4.6,
      reviews: 78
    }
  ];

  const cities = ["Hyderabad", "Bangalore", "Mumbai", "Delhi", "Chennai", "Pune"];
  const areas = {
    Hyderabad: ["Ramanagar", "Bandimet", "Hitech City", "Gachibowli", "Madhapur", "Kondapur"],
    Bangalore: ["Koramangala", "HSR Layout", "Whitefield", "Electronic City"],
    Mumbai: ["Andheri", "Bandra", "Powai", "Dadar"],
    Delhi: ["Connaught Place", "Dwarka", "Saket", "Rohini"],
    Chennai: ["T Nagar", "Anna Nagar", "Adyar", "Velachery"],
    Pune: ["Hinjewadi", "Kothrud", "Viman Nagar", "Aundh"]
  };

  const handleCheckboxChange = (setter, value, checked) => {
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((i) => i !== value)
    );
  };

  const handleInterestedClick = (propertyId) => {
    navigate(`/property`);
  };

  const findMatchingCity = (searchTerm) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
   
    const exactMatch = cities.find(city =>
      city.toLowerCase() === normalizedSearch
    );
   
    if (exactMatch) return exactMatch;
   
    const partialMatch = cities.find(city =>
      city.toLowerCase().includes(normalizedSearch)
    );
   
    return partialMatch || searchTerm;
  };

  const getDisplayCity = () => {
    const matchedCity = findMatchingCity(searchCity);
    return cities.includes(matchedCity) ? matchedCity : searchCity;
  };

  const sortProperties = (propertiesToSort) => {
    const sorted = [...propertiesToSort];
   
    switch (sortOption) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
     
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
     
      case "relevance":
      default:
        return sorted.sort((a, b) => a.id - b.id);
    }
  };

  const applyFilters = () => {
    const matchedCity = findMatchingCity(searchCity);
   
    let filtered = properties.filter(property =>
      property.city.toLowerCase().includes(matchedCity.toLowerCase())
    );

    if (selectedRoomType.length > 0) {
      filtered = filtered.filter(property =>
        property.roomTypes.some(roomType => selectedRoomType.includes(roomType))
      );
    }

    if (selectedGender.length > 0) {
      filtered = filtered.filter(property =>
        selectedGender.includes(property.gender) || selectedGender.includes("Any")
      );
    }

    if (selectedResidentType.length > 0) {
      filtered = filtered.filter(property =>
        selectedResidentType.some(type => property.residentType.includes(type))
      );
    }

    if (selectedAreas.length > 0) {
      filtered = filtered.filter(property =>
        selectedAreas.includes(property.area)
      );
    }

    filtered = filtered.filter(property => property.price <= budget);

    const sortedAndFiltered = sortProperties(filtered);
    setFilteredProperties(sortedAndFiltered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchCity, selectedRoomType, selectedGender, selectedResidentType, selectedAreas, budget, sortOption]);

  const clearAllFilters = () => {
    setSelectedRoomType([]);
    setSelectedGender([]);
    setSelectedResidentType([]);
    setSelectedAreas([]);
    setBudget(50000);
    setSearchCity("Hyderabad");
    setSortOption("relevance");
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Enhanced Page Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-24 pb-16 px-5 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Find Your Perfect Hostel & PG
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
            Discover verified accommodations with best prices and amenities
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-blue-200 text-sm">Properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200 text-sm">Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-blue-200 text-sm">Happy Students</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                </h3>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-1"
                  onClick={clearAllFilters}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Clear All
                </button>
              </div>

              {/* City Search */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Search City
                </h4>
                <input
                  type="text"
                  placeholder="Enter city name..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50"
                />
                <div className="text-xs text-gray-500 mt-2 italic">
                  Try: "hyderabad", "BANGALORE", "mumbai", etc.
                </div>
              </div>

              {/* Area Selection */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Select Area</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {areas[getDisplayCity()] ? (
                    areas[getDisplayCity()].map((area) => (
                      <label key={area} className="flex items-center space-x-3 cursor-pointer group p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedAreas.includes(area)}
                          onChange={(e) =>
                            handleCheckboxChange(setSelectedAreas, area, e.target.checked)
                          }
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{area}</span>
                      </label>
                    ))
                  ) : (
                    <p className="text-gray-500 italic text-sm p-2">No areas found for {getDisplayCity()}</p>
                  )}
                </div>
              </div>

              {/* Room Sharing */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Room Type</h4>
                <div className="space-y-2">
                  {["Single", "Double", "Triple", "Four", "Six", "More"].map((t) => (
                    <label key={t} className="flex items-center space-x-3 cursor-pointer group p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedRoomType.includes(t)}
                        onChange={(e) =>
                          handleCheckboxChange(setSelectedRoomType, t, e.target.checked)
                        }
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Gender</h4>
                <div className="space-y-2">
                  {["Male", "Female", "Any"].map((g) => (
                    <label key={g} className="flex items-center space-x-3 cursor-pointer group p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedGender.includes(g)}
                        onChange={(e) =>
                          handleCheckboxChange(setSelectedGender, g, e.target.checked)
                        }
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Budget</h4>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm font-semibold text-gray-700 mt-3">
                  <span>₹0</span>
                  <span className="text-blue-600">₹{budget.toLocaleString()}</span>
                  <span>₹50,000</span>
                </div>
              </div>

              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                onClick={applyFilters}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Enhanced Listings Main */}
          <main className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 pb-6 border-b border-gray-200">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-3xl font-bold text-gray-900">Available Properties in {getDisplayCity()}</h2>
                <p className="text-gray-600 mt-2 text-lg">
                  {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
                </p>
              </div>
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-xl border border-gray-200">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select 
                  value={sortOption} 
                  onChange={handleSortChange}
                  className="border-0 focus:ring-0 text-gray-700 font-medium bg-transparent"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onInterestedClick={handleInterestedClick}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {filteredProperties.length > 0 && (
              <div className="text-center">
                <button className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200 transform hover:-translate-y-0.5">
                  Load More Properties
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

// Enhanced Property Card Component
const PropertyCard = ({ property, onInterestedClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    let interval;
    const start = () => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % property.images.length);
      }, 4000);
    };
    const stop = () => clearInterval(interval);

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseenter", stop);
      card.addEventListener("mouseleave", start);
      start();
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", stop);
        card.removeEventListener("mouseleave", start);
      }
      clearInterval(interval);
    };
  }, [property.images.length]);

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % property.images.length);
  };

  const handleInterestedClick = () => {
    onInterestedClick(property.id);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({property.reviews})</span>
      </div>
    );
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 group"
    >
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {/* Image Slider */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {property.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`${property.name} - ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Hostel+${i+1}`;
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg hover:scale-110"
          onClick={goToPrev}
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg hover:scale-110"
          onClick={goToNext}
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {property.images.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? 'bg-white scale-125' : 'bg-white/60'
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        {/* Verified Badge */}
        {property.verified && (
          <div className="absolute top-3 right-3 bg-green-500/95 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 backdrop-blur-sm shadow-lg">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Verified</span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">
          <StarRating rating={property.rating} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{property.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{property.location}</span>
            </div>
            <p className="text-blue-600 text-sm font-semibold">{property.area}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">₹{property.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">per month</div>
          </div>
        </div>

        {/* Room Types */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.roomTypes.map((t, i) => (
              <span 
                key={i}
                className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            {property.gender}
          </span>
          <span className="text-gray-400">•</span>
          <span>{property.residentType}</span>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 4).map((amenity, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                {amenity}
              </span>
            ))}
            {property.amenities.length > 4 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                +{property.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button 
            onClick={handleInterestedClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            I'm Interested
          </button>
          <button className="text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsPage;