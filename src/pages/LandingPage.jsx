// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();
  
//   const [selectedType, setSelectedType] = useState(null);

//   const userTypes = [
//     {
//       id: 'super-admin',
//       icon: '👑',
//       title: 'Super Administrator',
//       description: 'Platform owner with comprehensive oversight of all hostels, subscription management, revenue analytics, and system-wide configuration capabilities.',
//       features: ['All hostels oversight', 'Subscription management', 'Revenue analytics', 'System configuration']
//     },
//     {
//       id: 'hostel-admin',
//       icon: '🏢',
//       title: 'Hostel Administrator',
//       description: 'Individual hostel managers or owners with capabilities to manage single or multiple hostel properties.',
//       features: ['Room allocation', 'Tenant management', 'Fee collection', 'Booking approvals']
//     },
//     {
//       id: 'student',
//       icon: '🎓',
//       title: 'Students/Tenants',
//       description: 'Registered residents of hostels with access to fee payment, complaint submission, attendance viewing, and communication features.',
//       features: ['Fee payment', 'Complaint submission', 'Attendance viewing', 'Communication features']
//     },
//     {
//       id: 'visitor',
//       icon: '👤',
//       title: 'Visitors',
//       description: 'Prospective tenants with ability to browse public hostel listings, search and filter accommodations.',
//       features: ['Browse hostel listings', 'Search & filter', 'Compare options', 'Complete bookings']
//     }
//   ];

//   const handleUserTypeSelect = (userType) => {
//     setSelectedType(userType);
//     setTimeout(() => {
//       navigate('/login', { state: { userType } });
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
//       {/* Header */}
//       <header className="bg-white/10 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="text-3xl mr-3">🏠</div>
//               <div>
//                 <h1 className="text-2xl font-bold text-white">
//                   {config.platform_title}
//                 </h1>
//                 <p className="text-blue-200 text-sm">{config.company_name}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-white">{config.support_phone}</span>
//               <button 
//                 onClick={() => navigate('/login')}
//                 className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             {config.welcome_message}
//           </h2>
//           <p className="text-xl text-blue-200 mb-8">
//             Complete hostel management solution for all stakeholders
//           </p>
//         </div>

//         {/* User Type Selection */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-white text-center mb-8">
//             Choose Your Role
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {userTypes.map((userType) => (
//               <div
//                 key={userType.id}
//                 className={`user-type-selector ${selectedType === userType.id ? 'selected' : ''}`}
//                 onClick={() => handleUserTypeSelect(userType.id)}
//               >
//                 <div className="text-center">
//                   <div className="text-4xl mb-4">{userType.icon}</div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     {userType.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {userType.description}
//                   </p>
//                   <ul className="text-xs text-gray-500 text-left space-y-1">
//                     {userType.features.map((feature, index) => (
//                       <li key={index}>• {feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Public Hostel Listings */}
//         <PublicHostelListings />
//       </main>
//     </div>
//   );
// };

// // Public Hostel Listings Component
// const PublicHostelListings = () => {
//   const { allData } = useApp();
//   const [filters, setFilters] = useState({
//     location: '',
//     priceRange: '',
//     roomType: ''
//   });

//   const hostels = allData.filter(item => item.type === 'hostels' && item.isActive);

//   const filteredHostels = hostels.filter(hostel => {
//     if (filters.location && !hostel.city.toLowerCase().includes(filters.location.toLowerCase())) {
//       return false;
//     }
//     // Add more filter logic as needed
//     return true;
//   });

//   return (
//     <div className="mb-16">
//       <h3 className="text-2xl font-bold text-white text-center mb-8">
//         Featured Hostels
//       </h3>

//       {/* Search and Filters */}
//       <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <input
//             type="text"
//             placeholder="Search by city..."
//             className="px-4 py-2 rounded-lg border-0 bg-white/20 text-white placeholder-white/70"
//             value={filters.location}
//             onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
//           />
//           <select
//             className="px-4 py-2 rounded-lg border-0 bg-white/20 text-white"
//             value={filters.priceRange}
//             onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
//           >
//             <option value="">Price Range</option>
//             <option value="0-5000">₹0 - ₹5,000</option>
//             <option value="5000-10000">₹5,000 - ₹10,000</option>
//             <option value="10000-15000">₹10,000 - ₹15,000</option>
//             <option value="15000+">₹15,000+</option>
//           </select>
//           <select
//             className="px-4 py-2 rounded-lg border-0 bg-white/20 text-white"
//             value={filters.roomType}
//             onChange={(e) => setFilters(prev => ({ ...prev, roomType: e.target.value }))}
//           >
//             <option value="">Room Type</option>
//             <option value="single">Single</option>
//             <option value="double">Double Sharing</option>
//             <option value="triple">Triple Sharing</option>
//             <option value="dormitory">Dormitory</option>
//           </select>
//           <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Hostel Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredHostels.map(hostel => (
//           <HostelCard key={hostel.id} hostel={hostel} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Hostel Card Component
// const HostelCard = ({ hostel }) => {
//   const navigate = useNavigate();
//   const { currentUser } = useApp();

//   const handleBookNow = () => {
//     if (!currentUser) {
//       navigate('/login');
//       return;
//     }
//     // Handle booking logic
//   };

//   return (
//     <div className="hostel-card">
//       <div className="hostel-image bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
//         🏠
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{hostel.name}</h3>
//         <p className="text-gray-600 mb-2">{hostel.address}, {hostel.city}</p>
//         <p className="text-sm text-gray-500 mb-4">{hostel.description}</p>
        
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-2xl font-bold text-blue-600">₹{hostel.pricePerMonth}</span>
//           <div className="text-right">
//             <div className="rating-stars">★★★★☆</div>
//             <p className="text-xs text-gray-500">{hostel.totalReviews} reviews</p>
//           </div>
//         </div>
        
//         <div className="mb-4">
//           <p className="text-sm text-gray-600 mb-2">Amenities:</p>
//           <div className="flex flex-wrap gap-1">
//             {hostel.amenities.split(',').map((amenity, index) => (
//               <span key={index} className="filter-chip">
//                 {amenity.trim()}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-sm text-gray-600">{hostel.availableRooms} rooms available</span>
//           <span className="text-sm font-medium text-green-600">Available</span>
//         </div>
        
//         <div className="flex gap-2">
//           <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             View Details
//           </button>
//           <button 
//             onClick={handleBookNow}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;




// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">🏠 HostelHub</h1>
        <p className="text-xl mb-8">Your complete hostel management solution</p>
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;