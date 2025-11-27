// src/pages/Features.jsx
import React from "react";
import { Link } from "react-router-dom";

// Basic Navbar component
const Navbar = () => {
  // return (
  //   <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center h-16">
  //         <div className="flex items-center">
  //           <Link to="/" className="text-xl font-bold text-blue-600">
  //             DCM Solutions
  //           </Link>
  //         </div>
  //         <div className="hidden md:block">
  //           <div className="ml-10 flex items-baseline space-x-4">
  //             <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
  //             <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
  //             <Link to="/features" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</Link>
  //             <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

// Basic Footer component
const Footer = () => {
  // return (
  //   <footer className="bg-gray-800 text-white py-8">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center">
  //         <p className="text-gray-400">© 2024 DCM Solutions. All rights reserved.</p>
  //       </div>
  //     </div>
  //   </footer>
  // );
};

const featuresData = [
  {
    title: "Day-wise Stay Booking",
    description: "Pay only for the days you stay — flexible, zero lock-in, with instant confirmations and digital receipts.",
    icon: "📅",
    color: "#FF6B6B"
  },
  {
    title: "Tenant Onboarding",
    description: "Paperless onboarding with digital verification & quick room allotment.",
    icon: "👤",
    color: "#4ECDC4"
  },
  {
    title: "Billing & Fee Management",
    description: "Automatic invoices, due reminders & secure online payments.",
    icon: "⚡",
    color: "#FFD166"
  },
  {
    title: "Reservation & Booking",
    description: "Manage bookings and cancellations centrally with live availability.",
    icon: "📊",
    color: "#06D6A0"
  },
  {
    title: "Tenant Check-In / Check-Out",
    description: "Track arrivals & departures seamlessly with automated logs.",
    icon: "🏃",
    color: "#118AB2"
  },
  {
    title: "Maintenance Requests",
    description: "Residents can raise complaints & track problem resolution.",
    icon: "🔧",
    color: "#073B4C"
  },
  {
    title: "Mess & Dining Management",
    description: "View daily menus, meal counts & reduce food wastage.",
    icon: "🍽️",
    color: "#EF476F"
  },
  {
    title: "Notices & Communication",
    description: "Send announcements to all residents instantly via app.",
    icon: "📢",
    color: "#7209B7"
  },
  {
    title: "Reports & Analytics",
    description: "Monitor hostel performance with real-time dashboards.",
    icon: "📈",
    color: "#F8961E"
  },
  {
    title: "Leave Manager",
    description: "Students request leave and admins approve digitally.",
    icon: "✅",
    color: "#277DA1"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock help with priority escalation handling.",
    icon: "♾️",
    color: "#43AA8B"
  },
  {
    title: "Room Allocation",
    description: "Smart room assignment based on preferences and availability.",
    icon: "🏠",
    color: "#9C27B0"
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
       
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-br from-gray-200 to-gray-300 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
           
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Comprehensive features designed to streamline your hostel management
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">12+</div>
                <div className="text-sm text-gray-300 mt-1">Features</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">24/7</div>
                <div className="text-sm text-gray-300 mt-1">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">100%</div>
                <div className="text-sm text-gray-300 mt-1">Digital</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-sm text-gray-300 mt-1">Hostels</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Powerful Features for Modern Hostel Management
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our comprehensive suite of features is designed to simplify every aspect of hostel management. 
            From booking to billing, maintenance to messaging - we've got you covered with smart, automated solutions 
            that save time and enhance the experience for both administrators and residents.
          </p>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">All Features</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-100 relative overflow-hidden group"
              >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  index % 12 === 0 ? 'bg-gradient-to-br from-pink-100 to-pink-50' :
                  index % 12 === 1 ? 'bg-gradient-to-br from-cyan-100 to-cyan-50' :
                  index % 12 === 2 ? 'bg-gradient-to-br from-yellow-100 to-yellow-50' :
                  index % 12 === 3 ? 'bg-gradient-to-br from-green-100 to-green-50' :
                  index % 12 === 4 ? 'bg-gradient-to-br from-blue-100 to-blue-50' :
                  index % 12 === 5 ? 'bg-gradient-to-br from-gray-100 to-gray-50' :
                  index % 12 === 6 ? 'bg-gradient-to-br from-pink-100 to-pink-50' :
                  index % 12 === 7 ? 'bg-gradient-to-br from-purple-100 to-purple-50' :
                  index % 12 === 8 ? 'bg-gradient-to-br from-orange-100 to-orange-50' :
                  index % 12 === 9 ? 'bg-gradient-to-br from-blue-100 to-blue-50' :
                  index % 12 === 10 ? 'bg-gradient-to-br from-cyan-100 to-cyan-50' :
                  'bg-gradient-to-br from-purple-100 to-purple-50'
                }`}></div>

                {/* Feature Icon */}
                <div 
                  className="relative z-10 w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-gray-100 text-3xl"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>

                {/* Feature Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:-translate-y-1 transition-transform duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Why Choose Our Features?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Saving</h4>
                    <p className="text-gray-600">Automate routine tasks and focus on what matters most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600">Reduce operational costs with digital solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">User Friendly</h4>
                    <p className="text-gray-600">Intuitive interface for both admins and residents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable</h4>
                    <p className="text-gray-600">Grow your hostel business without limitations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Experience the power of our features with a free demo. See how our platform can transform your hostel management.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact" 
                  className="inline-block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Demo
                </Link>
                <Link 
                  to="/pricing" 
                  className="inline-block w-full border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>© 2024 DCM Solutions. All rights reserved. */}

      <Footer />
    </div>
  );
};

export default Features;