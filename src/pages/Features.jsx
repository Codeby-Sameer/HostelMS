import React from 'react';

const Features = () => {
  return (
    <div className="page-content">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive PG Management Features</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to run a successful PG business, from tenant onboarding to revenue optimization</p>
          </div>

          {/* Feature Categories */}
          <div className="space-y-20">
            
            {/* For PG Owners */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">👑 For PG & Hostel Owners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Property Management</h3>
                  <p className="text-gray-600 mb-4">Manage multiple PG properties from a single dashboard with centralized control and insights.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Unified property dashboard</li>
                    <li>• Cross-property analytics</li>
                    <li>• Centralized tenant database</li>
                    <li>• Bulk operations support</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Rent Collection</h3>
                  <p className="text-gray-600 mb-4">Streamline payment processes with automated reminders and multiple payment gateways.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Automated payment reminders</li>
                    <li>• Multiple payment methods</li>
                    <li>• Late fee calculations</li>
                    <li>• Digital receipts</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-4">Get deep insights into your business performance with comprehensive reporting.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Revenue & expense tracking</li>
                    <li>• Occupancy rate analysis</li>
                    <li>• Tenant behavior insights</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zm6 10V7a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Notifications</h3>
                  <p className="text-gray-600 mb-4">Stay informed with intelligent alerts for all critical business events.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Payment due alerts</li>
                    <li>• Maintenance requests</li>
                    <li>• Vacancy notifications</li>
                    <li>• Emergency alerts</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Staff Management</h3>
                  <p className="text-gray-600 mb-4">Manage your team with role-based access and performance tracking.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Role-based permissions</li>
                    <li>• Staff attendance tracking</li>
                    <li>• Performance metrics</li>
                    <li>• Task assignment</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
                  <p className="text-gray-600 mb-4">Enterprise-grade security with compliance management features.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Data encryption</li>
                    <li>• Backup & recovery</li>
                    <li>• Audit trails</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* For Tenants */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">🎓 For Students & Tenants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7a2 2 0 012-2h4a2 2 0 012 2v0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Easy Booking</h3>
                  <p className="text-gray-600 text-sm">Book rooms instantly with flexible duration options and instant confirmations</p>
                </div>

                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Easy Payments</h3>
                  <p className="text-gray-600 text-sm">Pay rent online with multiple payment options and get instant receipts</p>
                </div>

                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Direct Communication</h3>
                  <p className="text-gray-600 text-sm">Chat directly with management for queries and support</p>
                </div>

                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Complaint Management</h3>
                  <p className="text-gray-600 text-sm">Submit and track maintenance requests and complaints easily</p>
                </div>

                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Expense Tracking</h3>
                  <p className="text-gray-600 text-sm">Track all expenses and view detailed payment history and statements</p>
                </div>

                <div className="feature-card text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zm6 10V7a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Smart Notifications</h3>
                  <p className="text-gray-600 text-sm">Get timely updates about payments, notices, and important announcements</p>
                </div>
              </div>
            </div>

            {/* Booking System Features */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">📅 Advanced Booking System Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7a2 2 0 012-2h4a2 2 0 012 2v0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Availability Calendar</h3>
                  <p className="text-gray-600 mb-4">Live room availability with instant updates and dynamic pricing based on demand and season.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Live availability updates</li>
                    <li>• Dynamic pricing engine</li>
                    <li>• Seasonal rate adjustments</li>
                    <li>• Bulk booking discounts</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Duration Options</h3>
                  <p className="text-gray-600 mb-4">Book for daily, weekly, monthly stays with automatic pricing calculations and discount applications.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Daily bookings (₹800-1500/day)</li>
                    <li>• Weekly packages (15% discount)</li>
                    <li>• Monthly stays (25% discount)</li>
                    <li>• Long-term contracts (35% discount)</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Booking Confirmation</h3>
                  <p className="text-gray-600 mb-4">Get immediate booking confirmations with QR codes, digital keys, and detailed check-in instructions.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Instant confirmation SMS/Email</li>
                    <li>• QR code for easy check-in</li>
                    <li>• Digital room keys</li>
                    <li>• Check-in instructions</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Search & Filters</h3>
                  <p className="text-gray-600 mb-4">Advanced search functionality with location, price, amenities, and availability filters.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Location-based search</li>
                    <li>• Price range filters</li>
                    <li>• Amenity preferences</li>
                    <li>• Room type selection</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payment Gateway</h3>
                  <p className="text-gray-600 mb-4">Multiple payment options with secure processing and instant payment confirmations.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• UPI, Cards, Net Banking</li>
                    <li>• EMI options available</li>
                    <li>• Secure payment processing</li>
                    <li>• Instant payment receipts</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Guest Experience Management</h3>
                  <p className="text-gray-600 mb-4">Complete guest lifecycle management from booking to checkout with personalized services.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Pre-arrival communication</li>
                    <li>• Welcome packages</li>
                    <li>• 24/7 guest support</li>
                    <li>• Feedback collection</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Features;