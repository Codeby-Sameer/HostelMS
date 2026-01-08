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
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-100 bg-white/10 mb-6">
            COMPREHENSIVE SOLUTION
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-100 via-cyan-100 to-white bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your hostel efficiently,
            from booking to billing and beyond.
          </p>
        </motion.div>
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
            <h2 className="text-3xl md:text-3xl font-black text-slate-900 mb-6">
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
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative h-full"
                >
                  {/* Card with border gradient effect */}
                  <div
                    onClick={() => navigate(`/features/${feature.id}`)}
                    className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-white to-indigo-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Top decorative line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Floating icon container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-6`}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>

                    {/* Tag badge */}
                    <div className="relative z-10 inline-block mb-4">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                        {feature.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Key Points with staggered animation */}
                    <div className="relative z-10 space-y-3 mb-8">
                      {feature.points.slice(0, 3).map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={false}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <FaCheck className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-sm text-slate-700">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated CTA */}
                    <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-100/50 group-hover:border-slate-200 transition-colors duration-300">
                      <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors duration-300">
                        Explore feature
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md"
                      >
                        <FaArrowRight className="text-white text-sm" />
                      </motion.div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-400/5 rounded-full blur-xl group-hover:bg-blue-400/10 transition-all duration-500" />
                    <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-indigo-400/5 rounded-full blur-xl group-hover:bg-indigo-400/10 transition-all duration-500" />
                  </div>

                  {/* Subtle shadow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 blur-xl rounded-3xl -z-10 transition-all duration-500" />
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