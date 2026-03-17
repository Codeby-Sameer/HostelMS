import React from 'react';


const WhiteLabel = () => {


  return (
    <div className="page-content">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">White Label Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your own branded PG management platform with our comprehensive white-label solution
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Your Own PG Management Brand</h2>
              <p className="text-gray-600 mb-6">
                Transform your business with a fully customizable, white-label PG management platform. 
                Get all the powerful features of DCM under your own brand, with complete control over 
                pricing, features, and customer relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Complete branding customization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Your own domain and mobile apps</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full control over pricing and features</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated technical support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded mr-3"></div>
                  <span className="font-bold text-gray-900">YourBrand PG Manager</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <div className="w-16 h-10 bg-purple-600 rounded"></div>
                  <div className="w-16 h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">White Label Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Branding</h3>
                <p className="text-gray-600">
                  Customize logos, colors, themes, and branding elements to match your company identity perfectly.
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Applications</h3>
                <p className="text-gray-600">
                  Get branded iOS and Android apps published under your developer account with your branding.
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Domain</h3>
                <p className="text-gray-600">
                  Host the platform on your own domain with SSL certificates and custom subdomain structure.
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Control</h3>
                <p className="text-gray-600">
                  Set your own pricing, collect payments directly, and keep 100% of the revenue from your customers.
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Feature Customization</h3>
                <p className="text-gray-600">
                  Enable or disable features based on your business model and target market requirements.
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Support</h3>
                <p className="text-gray-600">
                  Dedicated technical team for setup, maintenance, updates, and ongoing support for your platform.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Models */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">White Label Pricing Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pricing-card">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">License Model</h3>
                  <p className="text-gray-600 mb-6">One-time setup with monthly licensing fee</p>
                  <div className="mb-6">
                    <div className="text-lg text-gray-600">
                      Setup: <span className="text-2xl font-bold text-gray-900">₹5,00,000</span>
                    </div>
                    <div className="text-lg text-gray-600">
                      Monthly: <span className="text-2xl font-bold text-gray-900">₹50,000</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Complete platform setup</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Unlimited customers</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Keep 100% revenue</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Dedicated support</span>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Share</h3>
                  <p className="text-gray-600 mb-6">No upfront cost, share revenue with us</p>
                  <div className="mb-6">
                    <div className="text-lg text-gray-600">
                      Setup: <span className="text-2xl font-bold text-gray-900">₹0</span>
                    </div>
                    <div className="text-lg text-gray-600">
                      Revenue Share: <span className="text-2xl font-bold text-gray-900">20%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Zero upfront investment</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Quick market entry</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Shared business risk</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Marketing support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery Call</h3>
                <p className="text-gray-600 text-sm">
                  Understand your requirements, business model, and customization needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Platform Setup</h3>
                <p className="text-gray-600 text-sm">
                  Custom branding, domain configuration, and feature customization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Testing & Training</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive testing, team training, and documentation handover
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Go Live</h3>
                <p className="text-gray-600 text-sm">
                  Platform launch with ongoing support and maintenance
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Own PG Management Platform?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join the growing network of successful PG management businesses powered by our white-label solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                 
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
                >
                  Schedule Demo Call
                </button>
                <button 
        
                  className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-400 transition border-2 border-white"
                >
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabel;