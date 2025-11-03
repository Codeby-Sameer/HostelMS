// src/components/dashboard/views/PaymentsView.jsx
import React from 'react';

const PaymentsManagement = ({ openModal, allData }) => {
  allData=[]
  const payments = allData.filter(item => item.type === 'payments');
  const totalRevenue = payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + (p.amount || 0), 0);
  const pendingPayments = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + (p.amount || 0), 0);
  const overduePayments = payments.filter(p => p.status === 'overdue').reduce((sum, p) => sum + (p.amount || 0), 0);
  const monthlyRevenue = payments
    .filter(p => p.status === 'paid' && new Date(p.paymentDate).getMonth() === new Date().getMonth())
    .reduce((sum, p) => sum + (p.amount || 0), 0);

  const sendReminders = () => {
    console.log('Send payment reminders');
  };

  const generateInvoices = () => {
    console.log('Generate invoices');
  };

  return (
    <div className="view-content p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Fee Collection & Payment Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={() => openModal('payment')}
            className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-medium hover:opacity-90 transition bg-blue-500 text-sm md:text-base"
          >
            Record Payment
          </button>
          <button 
            onClick={sendReminders}
            className="px-4 py-2 md:px-6 md:py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition text-sm md:text-base"
          >
            Send Reminders
          </button>
          <button 
            onClick={generateInvoices}
            className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition text-sm md:text-base"
          >
            Generate Invoices
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-xl md:text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="text-2xl md:text-3xl">💰</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Payments</p>
              <p className="text-xl md:text-2xl font-bold text-orange-600">${pendingPayments.toLocaleString()}</p>
            </div>
            <div className="text-2xl md:text-3xl">⏳</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Overdue Payments</p>
              <p className="text-xl md:text-2xl font-bold text-red-600">${overduePayments.toLocaleString()}</p>
            </div>
            <div className="text-2xl md:text-3xl">⚠️</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-xl md:text-2xl font-bold text-blue-600">${monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="text-2xl md:text-3xl">📊</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Payment Records</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Hostels</option>
            </select>
            <select className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base">
              <option value="">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
            <input type="month" className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg text-sm md:text-base" />
          </div>
        </div>
        <div className="space-y-4">
          {payments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl md:text-6xl mb-2">💳</div>
              <p className="text-sm md:text-base">No payment records yet</p>
            </div>
          ) : (
            payments.map(payment => (
              <div key={payment.id} className="border border-gray-200 rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg md:text-xl">{payment.studentName}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{payment.paymentType} • ${payment.amount}</p>
                    <p className="text-sm text-gray-500">Due: {payment.dueDate} • Status: {payment.status}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    payment.status === 'paid' ? 'bg-green-100 text-green-800' :
                    payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    payment.status === 'overdue' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {payment.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentsManagement;