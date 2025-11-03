// src/components/dashboard/BookingsManagement.jsx
import React, { useState } from 'react';


const BookingsManagement = () => {
  const { currentUserType, allData, addData } = useApp();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    moveInDate: '',
    duration: '6',
    roomType: 'double',
    specialRequests: ''
  });

  const hostels = allData.filter(item => item.type === 'hostels' && item.isActive);
  let bookings = [];
  
  if (currentUserType === 'visitor') {
    bookings = allData.filter(item => item.type === 'bookings' && item.userId === 'visitor-1');
  } else if (currentUserType === 'hostel-admin') {
    bookings = allData.filter(item => item.type === 'bookings');
  }

  const handleBookNow = (hostel) => {
    setSelectedHostel(hostel);
    setShowBookingModal(true);
    // Set default move-in date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setBookingForm(prev => ({
      ...prev,
      moveInDate: tomorrow.toISOString().split('T')[0]
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const bookingData = {
      id: `booking-${Date.now()}`,
      type: 'bookings',
      userId: 'visitor-1',
      hostelId: selectedHostel.id,
      bookingStatus: 'pending',
      bookingDate: new Date().toISOString(),
      moveInDate: bookingForm.moveInDate,
      duration: parseInt(bookingForm.duration),
      roomType: bookingForm.roomType,
      totalAmount: selectedHostel.pricePerMonth * parseInt(bookingForm.duration),
      advanceAmount: selectedHostel.pricePerMonth,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addData(bookingData);
    setShowBookingModal(false);
    setSelectedHostel(null);
    setBookingForm({ moveInDate: '', duration: '6', roomType: 'double', specialRequests: '' });
  };

  const updateBookingStatus = (bookingId, status) => {
    alert(`Updating booking ${bookingId} to ${status}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {currentUserType === 'visitor' ? 'My Bookings' : 'Bookings Management'}
        </h2>
        {currentUserType === 'visitor' && (
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Search Hostels
          </button>
        )}
      </div>

      {currentUserType === 'visitor' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hostels.slice(0, 3).map(hostel => (
            <div key={hostel.id} className="hostel-card">
              <div className="hostel-image bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
                🏠
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{hostel.name}</h3>
                <p className="text-gray-600 mb-2">{hostel.address}, {hostel.city}</p>
                <p className="text-sm text-gray-500 mb-4">{hostel.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">₹{hostel.pricePerMonth}</span>
                  <div className="text-right">
                    <div className="rating-stars">★★★★☆</div>
                    <p className="text-xs text-gray-500">{hostel.totalReviews} reviews</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                  <button 
                    onClick={() => handleBookNow(hostel)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="dashboard-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hostel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Move-in Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map(booking => {
                const hostel = hostels.find(h => h.id === booking.hostelId);
                return (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap">#{booking.id.slice(-6)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {hostel?.name || 'Unknown Hostel'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(booking.moveInDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.duration} months</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹{booking.totalAmount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`status-badge status-${booking.bookingStatus}`}>
                        {booking.bookingStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View
                        </button>
                        {currentUserType === 'hostel-admin' && (
                          <>
                            <button 
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedHostel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 bg-green-600 text-white rounded-t-xl">
              <h3 className="text-2xl font-bold">Book {selectedHostel.name}</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="hidden" name="hostelId" value={selectedHostel.id} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Move-in Date
                    </label>
                    <input 
                      type="date" 
                      value={bookingForm.moveInDate}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, moveInDate: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (months)
                    </label>
                    <select 
                      value={bookingForm.duration}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">1 Month</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room Type
                    </label>
                    <select 
                      value={bookingForm.roomType}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, roomType: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="single">Single Occupancy</option>
                      <option value="double">Double Sharing</option>
                      <option value="triple">Triple Sharing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <input 
                      type="text" 
                      value={bookingForm.specialRequests}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, specialRequests: e.target.value }))}
                      placeholder="Any special requirements"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Booking Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span>₹{selectedHostel.pricePerMonth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{bookingForm.duration} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security Deposit:</span>
                      <span>₹{selectedHostel.pricePerMonth * 2}</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2 mt-2">
                      <span>Total Amount:</span>
                      <span>₹{selectedHostel.pricePerMonth * (parseInt(bookingForm.duration) + 2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Confirm Booking
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsManagement;