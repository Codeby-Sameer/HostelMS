// // components/HostelProfile.js
// import React from 'react';

// const HostelProfile = ({ selectedHostel, onOpenModal }) => {
//   if (!selectedHostel) {
//     return (
//       <div className="profile-view p-8">
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <p className="text-gray-500 text-center py-8">Select a hostel from the dropdown to manage its profile</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-view p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-blue-900">Hostel Profile Management</h2>
//         <div className="flex gap-3">
//           <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
//             🌐 {selectedHostel.visibility === 'Public' ? 'Make Private' : 'Make Public'}
//           </button>
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
//             ⭐ {selectedHostel.featured ? 'Remove Feature' : 'Feature Listing'}
//           </button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-bold mb-4 text-blue-900">Basic Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Name</label>
//               <input 
//                 type="text" 
//                 defaultValue={selectedHostel.hostelName}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Type</label>
//               <select className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={selectedHostel.hostelType}>
//                 <option>Boys Only</option>
//                 <option>Girls Only</option>
//                 <option>Co-Educational</option>
//               </select>
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//               <textarea 
//                 rows="3" 
//                 defaultValue={selectedHostel.description || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//               <textarea 
//                 rows="2" 
//                 defaultValue={selectedHostel.address || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//               <input 
//                 type="email" 
//                 defaultValue={selectedHostel.contactEmail || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//               <input 
//                 type="tel" 
//                 defaultValue={selectedHostel.contactPhone || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-bold mb-4 text-blue-900">Amenities & Facilities</h3>
//           <textarea 
//             rows="4" 
//             defaultValue={selectedHostel.amenities || ''}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             placeholder="List amenities separated by commas"
//           />
//         </div>
        
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-bold mb-4 text-blue-900">Rules & Policies</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Time</label>
//               <input 
//                 type="time" 
//                 defaultValue={selectedHostel.checkInTime || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Time</label>
//               <input 
//                 type="time" 
//                 defaultValue={selectedHostel.checkOutTime || ''}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//           </div>
//           <textarea 
//             rows="4" 
//             defaultValue={selectedHostel.rules || ''}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             placeholder="Enter rules and regulations"
//           />
//         </div>
        
//         <div className="flex gap-3">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
//             Save Changes
//           </button>
//           <button 
//             onClick={() => onOpenModal('hostel', selectedHostel)}
//             className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition"
//           >
//             Advanced Edit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostelProfile;




// src/components/dashboard/views/ProfileView.jsx


const ProfileView = ({ selectedHostel }) => {

  if (!selectedHostel) {
    return (
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Hostel Profile Management</h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-500 text-center py-8">Select a hostel from the dropdown to manage its profile</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Hostel Profile Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => console.log('Toggle visibility')}
            className={`px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition text-sm md:text-base ${
              selectedHostel?.visibility === 'Public' 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {selectedHostel?.visibility === 'Public' ? '🔒 Make Private' : '🌐 Make Public'}
          </button>
          <button 
            onClick={() => console.log('Toggle featured')}
            className={`px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition text-sm md:text-base ${
              selectedHostel?.featured 
                ? 'bg-gray-600 hover:bg-gray-700' 
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {selectedHostel?.featured ? '⭐ Remove Feature' : '⭐ Feature Listing'}
          </button>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-900">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Name</label>
              <input 
                type="text" 
                defaultValue={selectedHostel?.hostelName}
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Type</label>
              <select className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option selected={selectedHostel.hostelType === 'Boys Only'}>Boys Only</option>
                <option selected={selectedHostel.hostelType === 'Girls Only'}>Girls Only</option>
                <option selected={selectedHostel.hostelType === 'Co-Educational'}>Co-Educational</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea 
                rows="3" 
                defaultValue={selectedHostel.description || ''}
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea 
                rows="2" 
                defaultValue={selectedHostel.address || ''}
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base"
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 md:gap-3">
          <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm md:text-base">
            Save Changes
          </button>
          <button 
            onClick={() => console.log('Advanced edit')}
            className="px-4 py-2 md:px-6 md:py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition text-sm md:text-base"
          >
            Advanced Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;