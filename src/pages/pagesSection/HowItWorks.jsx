import React from "react";
import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, TrendingUp, ArrowRight } from "lucide-react";

function HowItWorks() {
  const steps = [
    { 
      num: 1, 
      title: "Complete Registration", 
      desc: "Create your account and set up your hostel profile in minutes",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      num: 2, 
      title: "Manage Bookings", 
      desc: "Accept bookings, manage check-ins, and track occupancy in real-time",
      icon: CalendarCheck,
      color: "from-indigo-500 to-purple-500"
    },
    { 
      num: 3, 
      title: "Grow Your Business", 
      desc: "Use analytics to optimize operations and enhance resident experience",
      icon: TrendingUp,
      color: "from-violet-500 to-fuchsia-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
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
        </div>

        {/* Steps with Connection Line */}
        <div className="relative">
          {/* Horizontal Connection Line - Desktop */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 transform origin-left"
          />
          
          {/* Steps Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.num}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Circle */}
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg mb-8`}>
                      <Icon className="text-white w-10 h-10" strokeWidth={1.8} />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-4 border-white rounded-full shadow-md flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-sm">{step.num}</span>
                      </div>
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
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-white border-2 border-blue-300 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Connection Arrows */}
          <div className="lg:hidden flex justify-center items-center space-x-4 mt-8">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                <ArrowRight className="w-6 h-6 text-blue-400" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Visualization */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-gray-600">Implementation Progress</span>
              <span className="text-sm font-semibold text-blue-600">100% Complete</span>
            </div>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`w-3 h-3 rounded-full ${step.color.replace('from-', 'bg-gradient-to-br ')}`}></div>
                    <span className="text-sm text-gray-700">{step.title}</span>
                  </div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                      style={{ width: index === 0 ? "100%" : index === 1 ? "100%" : "100%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            Get Started Today
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 mt-3">
            No credit card required • 14-day free trial
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

export default HowItWorks;