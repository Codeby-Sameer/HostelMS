import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

function AboutSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards showing occupancy, payments, and operational metrics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level encryption, role-based access, and daily backups",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate room allocation, fee collection, and maintenance requests",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Student Experience",
      description: "Mobile app for students to manage everything from their phone",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const stats = [
    { value: "60%", label: "Reduced Admin Time", icon: "⏱️" },
    { value: "95%", label: "Payment Collection Rate", icon: "💰" },
    { value: "50+", label: "Automated Processes", icon: "⚡" },
    { value: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Building className="w-4 h-4" />
            PLATFORM OVERVIEW
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Hostel Management</span> Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're not just software—we're a comprehensive ecosystem designed to transform how educational institutions manage their student accommodations.
          </p>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div> */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                More Than Just Management Software
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our platform bridges the gap between hostel administrators and students, creating a seamless digital ecosystem that enhances efficiency, transparency, and student satisfaction.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-slate-900">Key Benefits:</h4>
              {[
                "End-to-end digital transformation for hostels",
                "Real-time monitoring and decision-making tools",
                "Enhanced student experience with mobile access",
                "Scalable solution for institutions of all sizes",
                "Continuous updates and feature enhancements"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/platform-overview"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Platform Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Image with Overlay */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Hostel Management Platform"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-200 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Mobile First</div>
                  <div className="text-xs text-slate-600">Access from any device</div>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Students and staff can manage everything from their smartphones
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-5 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <div className="text-sm font-semibold">Quick Deployment</div>
                  <div className="text-xs text-blue-200">Ready in 30 minutes</div>
                </div>
              </div>
              <p className="text-sm text-blue-100">
                Get your hostel management system up and running in under an hour
              </p>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Trust Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">150+</div>
              <div className="text-sm text-slate-600">Hostels Trust Us</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">50K+</div>
              <div className="text-sm text-slate-600">Students Served</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default AboutSection;