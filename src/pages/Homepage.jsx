import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Building, 
  CreditCard, 
  BarChart3, 
  MessageCircle, 
  Users, 
  CheckCircle, 
  XCircle,
  Star,
  MapPin,
  Wifi,
  Utensils,
  Car,
  Dumbbell,
  Sparkles,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Calendar
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);

  const handleShowDemo = () => {
    navigate('/demo');
  };

  const handleExploreFeatures = () => {
    navigate('/features');
  };

  const handleViewPricing = () => {
    navigate('/pricing');
  };

  const handleBookRoom = (propertyId) => {
    // Handle booking logic
    console.log('Booking property:', propertyId);
  };

  const handleViewAllProperties = () => {
    navigate('/marketplace');
  };

  // Features data
  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Smart Room Management",
      description: "Automated room allocation, occupancy tracking, and maintenance scheduling",
      metric: "95% Occupancy",
      color: "blue"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Automated Payments",
      description: "Seamless rent collection with multiple payment options and instant receipts",
      metric: "99% Collection Rate",
      color: "green"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Analytics",
      description: "Deep insights into revenue trends and operational efficiency metrics",
      metric: "40% Revenue Boost",
      color: "purple"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Instant Communication",
      description: "Real-time chat, notifications, and complaint management system",
      metric: "24/7 Support",
      color: "orange"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      initials: "RK",
      name: "Rajesh Kumar",
      role: "PG Owner, Bangalore",
      rating: 5,
      content: "DCM has revolutionized how I manage my 3 PG properties. Revenue increased by 40% in just 6 months!",
      revenue: "₹2.4L",
      metric: "Additional monthly revenue"
    },
    {
      initials: "PS",
      name: "Priya Sharma",
      role: "Hostel Administrator, Delhi",
      rating: 5,
      content: "The automated payment system and tenant communication features have saved us countless hours every month.",
      revenue: "40%",
      metric: "Faster rent collection"
    },
    {
      initials: "AG",
      name: "Amit Gupta",
      role: "Student, Mumbai",
      rating: 5,
      content: "As a tenant, I love how easy it is to pay rent, submit complaints, and communicate with management.",
      revenue: "300%",
      metric: "Business growth in 1 year"
    }
  ];

  // Marketplace properties
  const properties = [
    {
      id: 1,
      name: "Premium PG Koramangala",
      location: "Koramangala, Bangalore",
      rating: 4.8,
      reviews: 124,
      price: 1200,
      originalPrice: 1500,
      available: 3,
      amenities: ["Meals", "WiFi", "Laundry"],
      badge: "INSTANT BOOKING",
      badgeColor: "green",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      name: "Student Haven HSR",
      location: "HSR Layout, Bangalore",
      rating: 4.6,
      reviews: 89,
      price: 900,
      originalPrice: null,
      available: 5,
      amenities: ["Meals", "Gym", "Gaming"],
      badge: "TRENDING",
      badgeColor: "orange",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 3,
      name: "Luxury Stays Whitefield",
      location: "Whitefield, Bangalore",
      rating: 4.9,
      reviews: 156,
      price: 1800,
      originalPrice: null,
      available: 2,
      amenities: ["Pool", "AC", "Parking"],
      badge: "FILLING FAST",
      badgeColor: "red",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 500+ PG Owners</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                PG Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete SaaS solution for PG owners with automated operations, real-time analytics, and seamless booking experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleShowDemo}
                className="group px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleExploreFeatures}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "PG Properties" },
                { number: "10K+", label: "Happy Tenants" },
                { number: "₹50Cr+", label: "Revenue Managed" },
                { number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your PG Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tenant management to revenue analytics, our platform handles every aspect of your PG operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`text-${feature.color}-600 font-bold text-lg`}>
                  {feature.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Problems */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">
                Are You Still Managing Your PG Business Manually? 📝
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Lost Revenue Due to Manual Errors",
                    description: "Missing rent payments, incorrect calculations, and poor record keeping cost you thousands every month"
                  },
                  {
                    title: "Frustrated Tenants Leave Faster",
                    description: "Poor communication, delayed complaint resolution, and payment hassles drive away good tenants"
                  },
                  {
                    title: "No Business Insights",
                    description: "Without proper data, you can't optimize pricing, reduce costs, or plan expansion effectively"
                  }
                ].map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                      <p className="text-gray-300">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">
                DCM Solves All These Problems! ✅
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Increase Revenue by 40%",
                    description: "Automated rent collection, dynamic pricing, and zero payment delays boost your income"
                  },
                  {
                    title: "Happy Tenants Stay Longer",
                    description: "Instant communication, quick complaint resolution, and seamless payments create satisfaction"
                  },
                  {
                    title: "Data-Driven Growth",
                    description: "Real-time analytics help you make smart decisions and scale your business faster"
                  }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by PG Owners Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about transforming their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{testimonial.revenue}</div>
                  <p className="text-sm text-gray-600">{testimonial.metric}</p>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">New Feature</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🏨 DCM Marketplace - Book PG Rooms Like OYO!
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              All DCM subscribers automatically get their properties listed on our marketplace. 
              Tenants can book rooms instantly with zero commission!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "50K+", label: "Monthly Searches" },
                { number: "85%", label: "Booking Success Rate" },
                { number: "0%", label: "Commission (Unlike OYO)" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-purple-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Booking Demo */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">LIVE: Book Your Room Now!</h3>
              </div>
              <p className="text-center text-blue-100 mt-2">
                Real properties from DCM subscribers available for booking
              </p>
            </div>

            {/* Search Bar */}
            <div className="p-6 bg-gray-50 border-b">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Search by city, area, or PG name..." 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white">
                    <option>📅 Duration</option>
                    <option>Daily (₹800-1500)</option>
                    <option>Weekly (15% off)</option>
                    <option>Monthly (25% off)</option>
                  </select>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center">
                    Search Rooms
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Available Properties */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className={`h-48 bg-gradient-to-br ${property.gradient} flex items-center justify-center relative`}>
                      <div className="text-center text-white">
                        <Building className="w-12 h-12 mx-auto mb-2" />
                        <div className="font-bold text-lg">{property.name}</div>
                      </div>
                      
                      {/* Badges */}
                      <div className={`absolute top-3 right-3 bg-${property.badgeColor}-500 text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {property.badge}
                      </div>
                      <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 fill-current mr-1" />
                        {property.rating} ({property.reviews})
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">{property.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm">
                          <span className={`font-bold ${property.available <= 2 ? 'text-orange-600' : 'text-green-600'}`}>
                            {property.available <= 2 ? '⚠️ Only' : '✅'} {property.available} rooms available
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">₹{property.price}/day</div>
                          {property.originalPrice && (
                            <div className="text-xs text-gray-500 line-through">₹{property.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {property.amenities.map((amenity, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handleBookRoom(property.id)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center justify-center"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now - Pay ₹{property.price * 0.3} Advance
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div className="text-center mt-8">
                <button 
                  onClick={handleViewAllProperties}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                >
                  <Building className="w-5 h-5 mr-2" />
                  View All 500+ Properties Across India
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to 10X Your PG Business? 🚀
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ successful PG owners who transformed their business with DCM
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleShowDemo}
              className="group px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free 30-Day Trial
            </button>
            <button 
              onClick={handleViewPricing}
              className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              View Pricing Plans
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              No Setup Fee
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Cancel Anytime
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              24/7 Support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;