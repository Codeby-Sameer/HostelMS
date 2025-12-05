// src/components/dashboard/StudentHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StudentHome = () => {
  const stats = [
    { number: '85%', label: 'Attendance %', color: 'text-blue-600', progress: 85 },
    { number: '✓', label: 'Payment Status', color: 'text-green-600', status: 'Up to Date' },
    { number: '2', label: 'Active Complaints', color: 'text-yellow-600', status: 'In Progress' },
    { number: '₹500', label: 'Referral Rewards', color: 'text-purple-600', status: 'Total Earned' },
  ];

  const recentPayments = [
    { description: 'Monthly Fee - January', due: 'Jan 31, 2024', amount: '₹8,500', status: 'Paid' },
    { description: 'Security Deposit', due: 'Jan 15, 2024', amount: '₹15,000', status: 'Paid' },
  ];

  const recentNotices = [
    { title: 'Urgent: Water Supply Maintenance', content: 'Water will be unavailable from 2-4 PM today', time: '2 hours ago', urgent: true },
    { title: 'Hostel Meeting', content: 'Monthly hostel meeting this Friday at 6 PM', time: '1 day ago', urgent: false },
  ];

  const quickActions = [
    { icon: '💳', label: 'Pay Fees', link: '/student/payments' },
    { icon: '📝', label: 'Submit Complaint', link: '/student/complaints' },
    { icon: '🏖️', label: 'Apply Leave', link: '/student/leave' },
    { icon: '⭐', label: 'Rate Hostel', link: '/student/reviews' },
  ];

  return (
  <div className=' '>
      <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
            {stat.progress && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            )}
            {stat.status && (
              <div className={`text-sm ${stat.color}`}>{stat.status}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Recent Payments</h3>
          <div className="space-y-3">
            {recentPayments.map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{payment.description}</p>
                  <p className="text-sm text-gray-600">Due: {payment.due}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{payment.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    payment.status === 'Paid' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/student/payments"
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block text-center"
          >
            View All Payments
          </Link>
        </div>

        {/* Recent Notices */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Recent Notices</h3>
          <div className="space-y-3">
            {recentNotices.map((notice, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                notice.urgent 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-blue-50 border-blue-500'
              }`}>
                <p className={`font-medium ${notice.urgent ? 'text-red-800' : 'text-blue-800'}`}>
                  {notice.urgent ? '🚨 ' : ''}{notice.title}
                </p>
                <p className={`text-sm ${notice.urgent ? 'text-red-600' : 'text-blue-600'} mt-1`}>
                  {notice.content}
                </p>
                <p className={`text-xs ${notice.urgent ? 'text-red-500' : 'text-blue-500'} mt-2`}>
                  {notice.time}
                </p>
              </div>
            ))}
          </div>
          <Link 
            to="/student/notices"
            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition block text-center"
          >
            View All Notices
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer"
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <p className="font-medium text-gray-900">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default StudentHome;