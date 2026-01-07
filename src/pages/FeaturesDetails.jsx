// src/pages/FeatureDetails.jsx
import { useParams, Link } from "react-router-dom";
import { featuresData } from "./featuresData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle, FaChartBar, FaClock, FaUserCheck } from "react-icons/fa";

const FeatureDetails = () => {
  const { id } = useParams();
  const feature = featuresData.find((f) => f.id === id);

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Feature Not Found</h1>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <FaArrowLeft /> Back to Features
          </Link>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen ">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b mt-5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-colors"
          >
            <FaArrowLeft /> All Features
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-8">
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}
            >
              <Icon size={36} className="text-white" />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100 mb-3">
                {feature.tag}
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
                {feature.title}
              </h1>
              <p className="text-md text-slate-600 max-w-3xl">
                {feature.longDescription}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            {feature.stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {feature.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
                  >
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FaCheckCircle className="text-emerald-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Key Benefits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {feature.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
              </div>
              <div className="space-y-4">
                {feature.workflow.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        Step {index + 1}
                      </h3>
                      <p className="text-slate-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Screenshots */}
            {/* {feature.screenshots && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Screenshots
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {feature.screenshots.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-xl border border-slate-200"
                    >
                      <img
                        src={img}
                        alt={`${feature.title} screenshot ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )} */}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaChartBar className="text-xl" />
                <h3 className="text-xl font-bold">Quick Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Implementation Time</span>
                  <span className="font-bold">1-2 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Training Required</span>
                  <span className="font-bold">2 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Support Level</span>
                  <span className="font-bold">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Mobile Ready</span>
                  <span className="font-bold">✓ Yes</span>
                </div>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <div className="space-y-3">
                {feature.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUserCheck className="text-xl" />
                <h3 className="text-xl font-bold">Ready to Transform?</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Start using this feature today and revolutionize your hostel management.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="w-full mt-3 border-2 border-white text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors">
                View Documentation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;