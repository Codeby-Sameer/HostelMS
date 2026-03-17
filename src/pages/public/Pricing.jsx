import React, { useState } from 'react';


const Pricing = () => {
  const [pricingMode, setPricingMode] = useState('monthly');
  

  const togglePricing = (mode) => {
    setPricingMode(mode);
  };

  const selectPlan = (plan) => {
   
  };

  const contactSales = () => {
    showToast('Our sales team will contact you within 24 hours!', 'success');
  };

  const pricingData = {
    monthly: {
      starter: '₹2,999',
      professional: '₹4,999',
      enterprise: '₹9,999'
    },
    yearly: {
      starter: '₹28,790',
      professional: '₹47,990',
      enterprise: '₹95,990'
    }
  };

  return (
    <div className="page-content">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your PG business. All plans include core features with no hidden fees.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => togglePricing('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  pricingMode === 'monthly' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => togglePricing('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  pricingMode === 'yearly' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small PG owners getting started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {pricingData[pricingMode].starter}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button 
                  onClick={() => selectPlan('starter')}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Start Free Trial
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Up to 50 rooms</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Basic tenant management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Online payment collection</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Basic reporting</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Email support</span>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card popular">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <p className="text-gray-600 mb-6">Ideal for growing PG businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {pricingData[pricingMode].professional}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button 
                  onClick={() => selectPlan('professional')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Start Free Trial
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Up to 200 rooms</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Advanced tenant management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automated payment reminders</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Multi-property management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Priority support</span>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large PG chains and enterprises</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {pricingData[pricingMode].enterprise}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button 
                  onClick={contactSales}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Contact Sales
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Unlimited rooms</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">White-label solution</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">24/7 phone support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SLA guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a free trial available?</h3>
                <p className="text-gray-600">
                  Yes! We offer a 30-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, UPI, net banking, and bank transfers for annual plans.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-600">
                  Yes! We use enterprise-grade security with SSL encryption, regular backups, and comply with data protection regulations.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer discounts for multiple properties?</h3>
                <p className="text-gray-600">
                  Yes! We offer volume discounts for customers managing multiple PG properties. Contact our sales team for custom pricing.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What happens after my free trial ends?</h3>
                <p className="text-gray-600">
                  After your 30-day free trial, you can choose any plan that fits your needs. Your data is preserved when you upgrade.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you provide training and onboarding?</h3>
                <p className="text-gray-600">
                  Yes! We provide comprehensive onboarding sessions and documentation to help you get started quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;