// src/pages/Features.jsx
import { motion } from "framer-motion";
import { featuresData } from "./featuresData";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Features = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-14 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-cyan-300 bg-cyan-900/30 mb-6">
              COMPREHENSIVE SOLUTION
            </span>
            
            <h1 className="text-2xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-br from-gray-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to manage your hostel efficiently, from booking to billing and beyond
            </p>

            {/* Stats */}
            
          </motion.div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Features Grid */}
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Complete Hostel Management Suite
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each feature is designed to solve specific challenges in hostel management, 
              ensuring smooth operations and happy residents.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  {/* Clickable Card */}
                  <div
                    onClick={() => navigate(`/features/${feature.id}`)}
                    className="h-full bg-white rounded-2xl border border-slate-200 shadow-sm  transition-all duration-300 overflow-hidden cursor-pointer group"
                  >
                    

                    <div className="p-6">
                      {/* Icon & Tag */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon size={22} className="text-white" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                          {feature.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 mb-5 line-clamp-3">
                        {feature.description}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-2 mb-6">
                        {feature.points.slice(0, 3).map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 line-clamp-2">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-sm text-slate-500">
                          Click for details
                        </span>
                        <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                          <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none rounded-3xl" />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 blur-xl -z-10 rounded-3xl transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>



     
        </div>
      </section>
       {/* Benefits Section */}
      <section className=" pb-5  px-4 md:px-8 bg-white">
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
      </section>
    </>
  );
};

export default Features;