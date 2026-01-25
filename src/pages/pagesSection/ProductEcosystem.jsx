import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Monitor, BarChart3, ArrowRight, CheckCircle2, Users, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

function ProductEcosystem() {
  const productBlocks = [
    {
      title: "Tenant Mobile App",
      subtitle: "For Residents & Tenants",
      desc: "Self-service portal for tenants to manage their hostel experience from anywhere. Complete independence with 24/7 access to essential services.",
      features: [
        "Room booking & allocation requests",
        "Secure online fee payments (UPI/Cards/NetBanking)",
        "Maintenance requests with photo upload",
        "Digital receipts & payment history",
        "Mess menu & meal preferences",
        "Instant notifications & announcements"
      ],
      // Better image for tenant app - showing mobile interface
      img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=1200&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      icon: Smartphone,
      color: "from-blue-600 to-cyan-600",
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
      cta: { label: "Explore features", to: "/features" },
      stats: "10,000+ Active Users"
    },
    {
      title: "Admin Dashboard",
      subtitle: "For Management & Staff",
      desc: "Centralized control panel providing complete oversight of hostel operations. Real-time monitoring and management tools for administrators.",
      features: [
        "Role-based access for Deans, Wardens, Caretakers",
        "Live occupancy & vacancy tracking",
        "Automated payment reconciliation",
        "Staff task assignment & monitoring",
        "Visitor management system",
        "Document management & KYC verification"
      ],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      icon: Monitor,
      color: "from-emerald-600 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-600 to-green-500",
      cta: { label: "Schedule a Demo", to: "/contact" },
      stats: "150+ Institutions"
    },
    {
      title: "Analytics & Reporting",
      subtitle: "For Decision Makers",
      desc: "Comprehensive insights and visual analytics to drive informed decisions. Customizable reports and dashboards for strategic planning.",
      features: [
        "Real-time financial dashboards",
        "Occupancy trends & forecasting",
        "Tenant feedback analysis",
        "Resource utilization reports",
        "Audit trails & compliance logs",
        "Custom report generation"
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      icon: BarChart3,
      color: "from-purple-600 to-violet-500",
      gradient: "bg-gradient-to-br from-purple-600 to-violet-500",
      cta: { label: "Get Started", to: "/contact" },
      stats: "99% Accuracy Rate"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            INTEGRATED PLATFORM
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Unified Hostel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Management System</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed px-4">
            Three specialized modules working in perfect harmony to streamline every aspect of hostel administration and resident experience.
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20 lg:space-y-24"
        >
          {productBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section with Mobile Mockup for tenant App */}
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200">
                      <img
                        src={block.img}
                        alt={block.title}
                        className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-16 sm:h-16 ${block.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl border-4 border-white z-10`}
                    >
                      <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                    </motion.div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute -bottom-3 left-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${block.gradient.replace('bg-gradient-to-br ', 'bg-').split(' ')[0]}`}></div>
                        <span className="text-sm font-semibold text-slate-700">{block.stats}</span>
                      </div>
                    </motion.div>

                    {/* Mobile Mockup for tenant App (only on first card) */}
                    {index === 0 && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="absolute -bottom-8 -right-4 hidden lg:block"
                      >
                        <div className="relative w-40 h-80">
                          {/* Phone Frame */}
                          <div className="absolute inset-0 bg-slate-900 rounded-[2rem] shadow-2xl border-8 border-slate-900 overflow-hidden">
                            {/* Screen Content */}
                            <img
                              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                              alt="Mobile App Interface"
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                          </div>
                          {/* Phone Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl"></div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  variants={itemVariants}
                  className={`${index % 2 === 1 ? "lg:order-1" : ""} px-2 sm:px-0`}
                >
                  {/* Title Section */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${block.gradient.replace('bg-gradient-to-br ', 'bg-').split(' ')[0]}`}></span>
                      {block.subtitle}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      {block.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                      {block.desc}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                    {block.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg ${block.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle2 className="text-white w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 leading-tight group-hover:text-slate-900 transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={block.cta.to}
                      className="group inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-900 px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 border border-slate-200 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <span className="text-sm sm:text-base">{block.cta.label}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>

                  {/* Additional Info */}
                  <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Cloud Hosted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Mobile Optimized</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-blue-100"
        >
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  Seamless Integration Across All Platforms
                </h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                All modules share a single database ensuring real-time synchronization. Changes made in one module instantly reflect across all others.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Real-time Sync", "Single Sign-On", "Unified Database", "API Access", "Auto Backup", "SSL Security"].map((tag, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white px-3 sm:px-4 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium shadow-sm"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right pt-4 lg:pt-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 w-full lg:w-auto justify-center"
                >
                  <span className="text-sm sm:text-base">View Platform Features</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

       
       
      </div>
    </section>
  );
}

export default ProductEcosystem;