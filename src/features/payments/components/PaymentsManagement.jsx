// src/components/dashboard/PaymentsManagement.jsx
import React, { useState } from 'react';


const PaymentsManagement = () => {
  const { currentUserType, allData, addData } = useApp();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    feeType: 'monthly',
    amount: 8500,
    paymentMethod: 'upi'
  });

  let payments = [];
  
  if (currentUserType === 'student') {
    payments = allData.filter(item => item.type === 'payments' && item.userId === 'student-1');
  } else if (currentUserType === 'hostel-admin') {
    payments = allData.filter(item => item.type === 'payments');
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    const paymentData = {
      id: `payment-${Date.now()}`,
      type: 'payments',
      userId: 'student-1',
      hostelId: 'hostel-1',
      feeAmount: parseInt(paymentForm.amount),
      paymentStatus: 'paid',
      paymentMethod: paymentForm.paymentMethod,
      transactionId: `TXN${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addData(paymentData);
    setShowPaymentModal(false);
    setPaymentForm({ feeType: 'monthly', amount: 8500, paymentMethod: 'upi' });
  };

  const downloadReceipt = (paymentId) => {
    alert(`Receipt for payment ${paymentId} downloaded!`);
  };

  const processPayment = (paymentId) => {
    alert(`Processing payment ${paymentId}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment Management</h2>
        {currentUserType === 'student' ? (
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Pay Fees
          </button>
        ) : (
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Collect Payment
          </button>
        )}
      </div>
      
      <div className="dashboard-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Monthly Fee</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{payment.feeAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {payment.paymentMethod || 'UPI'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`status-badge status-${payment.paymentStatus}`}>
                      {payment.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.paymentStatus === 'paid' ? (
                      <button 
                        onClick={() => downloadReceipt(payment.id)}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Download Receipt
                      </button>
                    ) : (
                      <button 
                        onClick={() => processPayment(payment.id)}
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Process
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 bg-blue-600 text-white rounded-t-xl">
              <h3 className="text-2xl font-bold">Pay Fees</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fee Type
                    </label>
                    <select 
                      value={paymentForm.feeType}
                      onChange={(e) => setPaymentForm(prev => ({ ...prev, feeType: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="monthly">Monthly Fee</option>
                      <option value="security">Security Deposit</option>
                      <option value="maintenance">Maintenance Fee</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <input 
                      type="number" 
                      value={paymentForm.amount}
                      onChange={(e) => setPaymentForm(prev => ({ ...prev, amount: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select 
                    value={paymentForm.paymentMethod}
                    onChange={(e) => setPaymentForm(prev => ({ ...prev, paymentMethod: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="upi">UPI</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="netbanking">Net Banking</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Pay Now
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
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

export default PaymentsManagement;