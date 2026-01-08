import React from "react";
import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, TrendingUp, ArrowRight } from "lucide-react";

function HowItWorks() {
  const steps = [
    { 
      title: "Complete Registration", 
      desc: "Create your account and set up your hostel profile in minutes",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Manage Bookings", 
      desc: "Accept bookings, manage check-ins, and track occupancy in real-time",
      icon: CalendarCheck,
      color: "from-indigo-500 to-purple-500"
    },
    { 
      title: "Grow Your Business", 
      desc: "Use analytics to optimize operations and enhance resident experience",
      icon: TrendingUp,
      color: "from-violet-500 to-fuchsia-500"
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple Implementation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your hostel management system operational in three straightforward steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal Line - Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Icon */}
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg mb-8`}>
                      <Icon className="text-white w-10 h-10" strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Connection Dot */}
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-white border-2 border-blue-300 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:hidden flex justify-center items-center space-x-4 mt-8"
          >
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                <ArrowRight className="w-6 h-6 text-blue-400" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400"></div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
