// // components/RoomManagement.js
// import React from 'react';

// const RoomManagement = ({ selectedHostel, rooms, onOpenModal }) => {
//   if (!selectedHostel) {
//     return (
//       <div className="rooms-view p-8">
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <p className="text-gray-500 text-center py-8">Select a hostel to manage its room types and availability</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="rooms-view p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-blue-900">Room & Bed Management</h2>
//         <div className="flex gap-3">
//           <button 
//             onClick={() => onOpenModal('room')}
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
//           >
//             + Add Room Type
//           </button>
//           <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
//             + Add Individual Bed
//           </button>
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
//             Bulk Operations
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <h3 className="text-xl font-bold mb-4 text-blue-900">Room Types for {selectedHostel.hostelName}</h3>
//         {rooms.length === 0 ? (
//           <p className="text-gray-500 text-center py-8">No room types defined yet. Click "Add Room Type" to get started.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {rooms.map(room => (
//               <div key={room.id} className="room-type-card border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//                 <h4 className="font-bold text-lg mb-2">{room.roomType}</h4>
//                 <p className="text-gray-600 mb-2">Capacity: {room.roomCapacity} beds</p>
//                 <p className="text-gray-600 mb-2">Available: {room.availability} beds</p>
//                 <div className="space-y-1 mb-3">
//                   <p className="text-sm"><strong>Monthly:</strong> ${room.monthlyPrice}</p>
//                   <p className="text-sm"><strong>Quarterly:</strong> ${room.quarterlyPrice}</p>
//                   <p className="text-sm"><strong>Annual:</strong> ${room.annualPrice}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button 
//                     onClick={() => onOpenModal('room', room)}
//                     className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default RoomManagement;





// src/components/dashboard/views/.jsx
import React from 'react';

const RoomManagement = ({ selectedHostel, openModal, allData }) => {
  allData=[]
  const rooms = allData.filter(item => item.type === 'rooms' && selectedHostel && item.hostelId === selectedHostel.id);

  const deleteItem = (item) => {
    console.log('Delete item:', item);
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Room & Bed Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('room')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Add Room Type
          </button>
          <button 
            onClick={() => openModal('bed')}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            + Add Individual Bed
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {!selectedHostel ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-500 text-center py-8">Select a hostel to manage its room types and bed availability</p>
          </div>
        ) : rooms.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Room Types for {selectedHostel.hostelName}</h3>
            <p className="text-gray-500 text-center py-8">No room types defined yet. Click "Add Room Type" to get started.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Room Types for {selectedHostel.hostelName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {rooms.map(room => (
                <div key={room.id} className="room-type-card border border-gray-200 rounded-lg p-4 md:p-6">
                  <h4 className="font-bold text-lg md:text-xl">{room.roomType}</h4>
                  <p className="text-gray-600 mb-2">Capacity: {room.roomCapacity} beds</p>
                  <p className="text-gray-600 mb-2">Available: {room.availability} beds</p>
                  <div className="space-y-1 mb-3">
                    <p className="text-sm"><strong>Monthly:</strong> ${room.monthlyPrice}</p>
                    <p className="text-sm"><strong>Quarterly:</strong> ${room.quarterlyPrice}</p>
                    <p className="text-sm"><strong>Annual:</strong> ${room.annualPrice}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => openModal('room', room)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteItem(room)}
                      className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomManagement;