// // components/BookingManagement.js
// import React, { useState } from 'react';

// const BookingManagement = () => {
//   const bookings=[]
//   const [activeTab, setActiveTab] = useState('pending');

//   const filteredBookings = bookings.filter(booking => 
//     booking.status === activeTab && 
//     (!selectedHostel || booking.hostelId === selectedHostel.id)
//   );

//   const tabs = [
//     { id: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
//     { id: 'approved', label: 'Approved', count: bookings.filter(b => b.status === 'approved').length },
//     { id: 'rejected', label: 'Rejected', count: bookings.filter(b => b.status === 'rejected').length }
//   ];

//   return (
//     <div className="bookings-view p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-blue-900">Booking Management System</h2>
//         <div className="flex gap-3">
//           <button 
//             onClick={() => onOpenModal('booking')}
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
//           >
//             + Manual Booking
//           </button>
//           <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
//             Export Data
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg mb-6">
//         <div className="flex border-b border-gray-200">
//           {tabs.map(tab => (
//             <button
//               key={tab.id}
//               className={`px-6 py-4 font-medium ${
//                 activeTab === tab.id 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label} ({tab.count})
//             </button>
//           ))}
//         </div>

//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex gap-3">
//               <select className="px-4 py-2 border border-gray-300 rounded-lg">
//                 <option value="">All Hostels</option>
//               </select>
//               <select className="px-4 py-2 border border-gray-300 rounded-lg">
//                 <option value="">All Room Types</option>
//               </select>
//               <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg" />
//             </div>
//             <div className="flex gap-2">
//               <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                 Bulk Approve
//               </button>
//               <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//                 Bulk Reject
//               </button>
//             </div>
//           </div>

//           {filteredBookings.length === 0 ? (
//             <p className="text-gray-500 text-center py-8">No {activeTab} bookings found</p>
//           ) : (
//             <div className="space-y-4">
//               {filteredBookings.map(booking => (
//                 <div key={booking.id} className="booking-item border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h4 className="font-bold text-lg">{booking.visitorName}</h4>
//                       <p className="text-gray-600">{booking.visitorEmail} • {booking.visitorPhone}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium">Check-in: {booking.checkInDate}</p>
//                       <p className="text-sm text-gray-600">Duration: {booking.duration} months</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
//                     <div>
//                       <p className="text-sm text-gray-600">Room Type</p>
//                       <p className="font-medium">{booking.roomType}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Advance Payment</p>
//                       <p className="font-medium">${booking.advancePayment}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Special Requirements</p>
//                       <p className="font-medium">{booking.specialRequirements || 'None'}</p>
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                       Approve
//                     </button>
//                     <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//                       Reject
//                     </button>
//                     <button 
//                       onClick={() => onOpenModal('booking', booking)}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingManagement;




// src/components/dashboard/views/BookingsView.jsx
import React, { useState } from 'react';


const BookingManagement = ({ openModal, allData }) => {
  allData=[]
  const [activeBookingTab, setActiveBookingTab] = useState('pending');
  const bookings = allData.filter(item => item.type === 'bookings');

  const handleTabClick = (tab) => {
    setActiveBookingTab(tab);
  };

  const approveBooking = (bookingId) => {
    console.log('Approved booking:', bookingId);
  };

  const rejectBooking = (bookingId) => {
    console.log('Rejected booking:', bookingId);
  };

  const exportBookings = () => {
    console.log('Exporting bookings...');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Booking Management System</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('booking')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            + Manual Booking
          </button>
          <button 
            onClick={exportBookings}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Export Data
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {['pending', 'approved', 'rejected', 'cancelled', 'waitlist'].map(tab => (
            <button 
              key={tab}
              className={`px-4 py-3 md:px-6 md:py-4 font-medium whitespace-nowrap text-sm md:text-base ${
                activeBookingTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`} 
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} ({bookings.filter(b => b.status === tab).length})
            </button>
          ))}
        </div>
        <div className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Hostels</option>
              </select>
              <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
                <option value="">All Room Types</option>
              </select>
              <input type="date" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" />
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <button 
                onClick={() => console.log('Bulk approve')}
                className="px-3 py-2 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Bulk Approve
              </button>
              <button 
                onClick={() => console.log('Bulk reject')}
                className="px-3 py-2 md:px-4 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm md:text-base flex-1 lg:flex-none"
              >
                Bulk Reject
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {bookings.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl md:text-6xl mb-2">📋</div>
                <p className="text-sm md:text-base">No booking requests at the moment</p>
              </div>
            ) : (
              bookings
                .filter(booking => booking.status === activeBookingTab)
                .map(booking => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg md:text-xl">{booking.visitorName}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{booking.visitorEmail} • {booking.visitorPhone}</p>
                        <p className="text-sm text-gray-500">Requested: {booking.roomType} • Check-in: {booking.checkInDate}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'approved' ? 'bg-green-100 text-green-800' :
                        booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status || 'pending'}
                      </span>
                    </div>
                    
                    {booking.specialRequirements && (
                      <p className="text-sm mb-3"><strong>Special Requirements:</strong> {booking.specialRequirements}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => approveBooking(booking.id)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded text-sm md:text-base hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => rejectBooking(booking.id)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-red-600 text-white rounded text-sm md:text-base hover:bg-red-700"
                      >
                        Reject
                      </button>
                      <button 
                        onClick={() => openModal('booking', booking)}
                        className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded text-sm md:text-base hover:bg-blue-700"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;