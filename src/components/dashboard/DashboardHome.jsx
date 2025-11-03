// src/components/dashboard/DashboardHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './superAdmin/SuperAdminDashboard';

const DashboardHome = () => {

  const navigate = useNavigate();
 const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
 console.log(currentUser)


  const renderSuperAdminDashboard = () => (
   <Dashboard/>
  );

  const renderHostelAdminDashboard = () => {
    const adminRooms = rooms;
    const adminTenants = users.filter(user => user.userType === 'student');
    const adminPayments = payments;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat-card">
            <div className="stat-number text-blue-600">{hostels.length}</div>
            <div className="stat-label">My Hostels</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-green-600">
              {adminRooms.filter(r => r.isOccupied).length}/{adminRooms.length}
            </div>
            <div className="stat-label">Occupied Rooms</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-purple-600">{adminTenants.length}</div>
            <div className="stat-label">Active Tenants</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-orange-600">
              ₹{adminPayments.reduce((sum, p) => sum + (p.feeAmount || 0), 0).toLocaleString()}
            </div>
            <div className="stat-label">Monthly Revenue</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Recent Bookings</h3>
            <div className="space-y-3">
              {bookings.slice(-3).map(booking => (
                <div key={booking.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Booking #{booking.id.slice(-6)}</p>
                    <p className="text-sm text-gray-600">
                      Move-in: {new Date(booking.moveInDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`status-badge status-${booking.bookingStatus}`}>
                    {booking.bookingStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Pending Complaints</h3>
            <div className="space-y-3">
              {complaints.filter(c => c.complaintStatus !== 'resolved').slice(-3).map(complaint => (
                <div key={complaint.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{complaint.complaintTitle}</p>
                    <p className="text-sm text-gray-600">{complaint.complaintCategory}</p>
                  </div>
                  <span className={`status-badge status-${complaint.complaintStatus}`}>
                    {complaint.complaintStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStudentDashboard = () => {
    const studentPayments = payments.filter(p => p.userId === 'student-1');
    const studentComplaints = complaints.filter(c => c.userId === 'student-1');

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat-card">
            <div className="stat-number text-green-600">85%</div>
            <div className="stat-label">Attendance</div>
            <div className="progress-bar mt-3">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-blue-600">✓</div>
            <div className="stat-label">Payment Status</div>
            <div className="text-sm text-green-600 mt-2">Up to Date</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-orange-600">
              {studentComplaints.filter(c => c.complaintStatus !== 'resolved').length}
            </div>
            <div className="stat-label">Active Complaints</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-purple-600">₹500</div>
            <div className="stat-label">Referral Rewards</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Recent Payments</h3>
            <div className="space-y-3">
              {studentPayments.slice(-3).map(payment => (
                <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Monthly Fee</p>
                    <p className="text-sm text-gray-600">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{payment.feeAmount}</p>
                    <span className={`status-badge status-${payment.paymentStatus}`}>
                      {payment.paymentStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/dashboard/payments')}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Payments
            </button>
          </div>

          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Recent Notices</h3>
            <div className="space-y-3">
              {notices.slice(-3).map(notice => (
                <div key={notice.id} className={`p-3 ${
                  notice.isUrgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-blue-50 border-l-4 border-blue-500'
                } rounded`}>
                  <p className={`font-medium ${notice.isUrgent ? 'text-red-800' : 'text-blue-800'}`}>
                    {notice.isUrgent ? 'Urgent: ' : ''}{notice.noticeTitle}
                  </p>
                  <p className={`text-sm ${notice.isUrgent ? 'text-red-600' : 'text-blue-600'}`}>
                    {notice.noticeContent}
                  </p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/dashboard/notices')}
              className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              View All Notices
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="dashboard-card p-4 text-center hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">💳</div>
              <p className="font-medium">Pay Fees</p>
            </button>
            <button className="dashboard-card p-4 text-center hover:bg-red-50 transition-colors">
              <div className="text-2xl mb-2">📝</div>
              <p className="font-medium">Submit Complaint</p>
            </button>
            <button className="dashboard-card p-4 text-center hover:bg-yellow-50 transition-colors">
              <div className="text-2xl mb-2">🏖️</div>
              <p className="font-medium">Apply Leave</p>
            </button>
            <button className="dashboard-card p-4 text-center hover:bg-purple-50 transition-colors">
              <div className="text-2xl mb-2">⭐</div>
              <p className="font-medium">Rate Hostel</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderVisitorDashboard = () => {
    const visitorBookings = bookings.filter(b => b.userId === 'visitor-1');

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat-card">
            <div className="stat-number text-blue-600">{hostels.length}</div>
            <div className="stat-label">Available Hostels</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-green-600">{visitorBookings.length}</div>
            <div className="stat-label">My Bookings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-purple-600">0</div>
            <div className="stat-label">Favorites</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-orange-600">4.2</div>
            <div className="stat-label">Avg Rating</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">My Bookings</h3>
            <div className="space-y-3">
              {visitorBookings.slice(-3).map(booking => (
                <div key={booking.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Booking #{booking.id.slice(-6)}</p>
                    <p className="text-sm text-gray-600">
                      Move-in: {new Date(booking.moveInDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`status-badge status-${booking.bookingStatus}`}>
                    {booking.bookingStatus}
                  </span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/dashboard/bookings')}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Bookings
            </button>
          </div>

          <div className="dashboard-card p-6">
            <h3 className="text-lg font-bold mb-4">Recommended Hostels</h3>
            <div className="space-y-3">
              {hostels.slice(0, 3).map(hostel => (
                <div key={hostel.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{hostel.name}</p>
                    <p className="text-sm text-gray-600">₹{hostel.pricePerMonth}/month</p>
                  </div>
                  <div className="text-right">
                    <div className="rating-stars text-sm">★★★★☆</div>
                    <p className="text-xs text-gray-500">{hostel.totalReviews} reviews</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Search More Hostels
            </button>
          </div>
        </div>
      </div>
    );
  };

  switch(currentUser.type) {
    case 'super-admin':
      return renderSuperAdminDashboard();
    case 'hostel-admin':
      return renderHostelAdminDashboard();
    case 'student':
      return renderStudentDashboard();
    case 'visitor':
      return renderVisitorDashboard();
    default:
      return <div>Loading...</div>;
  }
};

export default DashboardHome;