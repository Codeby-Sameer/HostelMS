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
  ArrowRight,
  Clock,
  CreditCard,
  MessageSquare,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

function AboutSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards for occupancy, payments, and operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level encryption and daily backups",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Room allocation and fee collection automation",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Student Experience",
      description: "Mobile app for student management",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const stats = [
    { value: "60%", label: "Reduced Admin Time", icon: Clock },
    { value: "95%", label: "Payment Collection", icon: CreditCard },
    { value: "50+", label: "Automated Processes", icon: Zap },
    { value: "24/7", label: "Support Available", icon: MessageSquare }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <Building className="w-3 h-3" />
            PLATFORM OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Hostel Management</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Transform how you manage student accommodations with our comprehensive digital platform.
          </p>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 lg:mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon className="text-white w-4 h-4" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                </div>
                <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                More Than Just Management Software
              </h3>
              <p className="text-base text-slate-600 mb-4">
                Our platform bridges the gap between hostel administrators and students, creating a seamless digital ecosystem.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-6">
              <h4 className="text-lg font-semibold text-slate-900">Key Benefits:</h4>
              {[
                "End-to-end digital transformation",
                "Real-time monitoring tools",
                "Enhanced student experience",
                "Scalable for all institution sizes"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/platform-overview"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Explore Platform Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Content - Image with Cards */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Modern Hostel Management Platform"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Floating Card 1 - Bottom Left for Mobile, Adjusted for Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-3 left-3 right-3 sm:left-4 sm:right-auto sm:w-48 bg-white rounded-lg p-3 shadow-md border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center">
                  <Smartphone className="text-white w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Mobile First</div>
                  <div className="text-xs text-slate-600">Any device access</div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Manage everything from smartphones
              </p>
            </motion.div>

            {/* Floating Card 2 - Top Right for Desktop, Adjusted for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden sm:block absolute -top-3 -right-3 w-40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-3 shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-white/20 rounded flex items-center justify-center">
                  <FileText className="text-white w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Quick Setup</div>
                  <div className="text-xs text-blue-200">30 minutes</div>
                </div>
              </div>
              <p className="text-xs text-blue-100">
                Get started in under an hour
              </p>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default AboutSection;