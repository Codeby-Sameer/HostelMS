// src/components/dashboard/StudentPayments.jsx
import React from 'react';

const StudentPayments = () => {
  const paymentStats = [
    { amount: '₹8,500', label: 'Last Payment', date: 'January 2024' },
    { amount: '₹8,500', label: 'Next Due', date: 'February 28, 2024' },
    { amount: '₹85,000', label: 'Total Paid', date: 'This Year' },
  ];

  const paymentHistory = [
    { date: '2024-01-25', description: 'Monthly Fee - January', amount: '₹8,500', status: 'Paid', receipt: true },
    { date: '2023-12-25', description: 'Monthly Fee - December', amount: '₹8,500', status: 'Paid', receipt: true },
    { date: '2023-11-25', description: 'Monthly Fee - November', amount: '₹8,500', status: 'Paid', receipt: true },
    { date: '2024-02-28', description: 'Monthly Fee - February', amount: '₹8,500', status: 'Pending', receipt: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment History</h2>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Pay Fees
        </button>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{stat.amount}</div>
            <p className="text-gray-600">{stat.label}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.date}</p>
          </div>
        ))}
      </div>

      {/* Payment History Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold">Payment History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                  <td className="px-6 py-4">{payment.description}</td>
                  <td className="px-6 py-4 font-medium">{payment.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      payment.status === 'Paid' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {payment.receipt ? (
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Download
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPayments;