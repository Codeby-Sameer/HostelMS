import { useParams, Link } from "react-router-dom";
import { featuresData } from "../data/featuresData";
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
            className="inline-flex items-center gap-2 font-semibold text-[#0d5c63] hover:text-[#09454a]"
          >
            <FaArrowLeft /> Back to Features
          </Link>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f4f6] via-white to-[#f8fbfb]">
      <div className="sticky top-0 z-10 mt-5 border-b border-[#d7e7e4] bg-white/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-[#0d5c63]"
          >
            <FaArrowLeft /> All Features
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="rounded-[2rem] border border-[#d7e7e4] bg-gradient-to-br from-white to-[#f8fbfb] p-8 shadow-[0_24px_60px_rgba(13,92,99,0.08)] md:p-10">
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-xl`}
            >
              <Icon size={36} className="text-white" />
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-4 py-1.5 text-sm font-semibold text-[#0d5c63]">
                {feature.tag}
              </span>
              <h1 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                {feature.title}
              </h1>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#0d5c63] to-transparent"></div>
                <span className="bg-gradient-to-r from-[#0d5c63] to-[#c79a3b] bg-clip-text text-2xl font-light text-transparent">·</span>
                <div className="h-1 w-12 rounded-full bg-gradient-to-l from-[#9dd9d2] to-transparent"></div>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                {feature.longDescription}
              </p>
            </div>
          </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
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
                    className="rounded-2xl border border-[#d7e7e4] bg-white p-6 shadow-lg"
                  >
                    <div className="mb-2 text-3xl font-black tracking-tight text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-[#d7e7e4] bg-white p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-[#edf8f2] p-2">
                  <FaCheckCircle className="text-xl text-[#13876f]" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Key Benefits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {feature.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-[#cfe9de] bg-[#f4fbf7] p-4 transition-colors hover:bg-[#edf8f2]"
                  >
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#13876f]" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-[#d7e7e4] bg-white p-8 shadow-lg"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-lg bg-[#e6f4f3] p-2">
                  <FaClock className="text-xl text-[#0d5c63]" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">How It Works</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    A clear step-by-step flow for deploying this feature in real hostel operations.
                  </p>
                </div>
              </div>

              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="absolute bottom-0 left-5 top-3 hidden w-px bg-gradient-to-b from-[#b9ddda] via-[#d7e7e4] to-transparent md:block" />
                {feature.workflow.map((step, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      index % 2 === 0
                        ? "border-[#d7e7e4] bg-[#f8fbfb] hover:bg-[#eef8f7]"
                        : "border-[#e7deca] bg-[#fbfaf6] hover:bg-[#f8f2e4]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0d5c63] to-[#1b7f8e] font-bold text-white shadow-md">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1b7f8e]">
                          Step {index + 1}
                        </p>
                        <p className="text-base leading-7 text-slate-700">
                          {step}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-[#b9ddda] bg-gradient-to-br from-[#0d5c63] via-[#146f78] to-[#1b7f8e] p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaChartBar className="text-xl" />
                <h3 className="text-xl font-black tracking-tight">Quick Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#dff4f1]">Implementation Time</span>
                  <span className="font-bold">1-2 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#dff4f1]">Training Required</span>
                  <span className="font-bold">2 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#dff4f1]">Support Level</span>
                  <span className="font-bold">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#dff4f1]">Mobile Ready</span>
                  <span className="font-bold">✓ Yes</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-[#d7e7e4] bg-white p-6 shadow-lg"
            >
              <h3 className="mb-4 text-xl font-black tracking-tight text-slate-900">Key Features</h3>
              <div className="space-y-3">
                {feature.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0d5c63]" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-[#d7e7e4] bg-gradient-to-br from-[#f8fbfb] to-white p-6 text-slate-900 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#e6f4f3] p-2">
                  <FaUserCheck className="text-xl text-[#0d5c63]" />
                </div>
                <h3 className="text-xl font-black tracking-tight">Ready to Transform?</h3>
              </div>
              <p className="mb-6 text-slate-600">
                Start using this feature today and revolutionize your hostel management.
              </p>
              <Link
                to="/request-demo"
                className="block w-full rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] py-3 text-center font-bold text-white transition-colors hover:from-[#09454a] hover:to-[#166774]"
              >
                Schedule a Demo
              </Link>
              <button className="mt-3 w-full rounded-xl border-2 border-[#b9ddda] py-3 font-bold text-[#0d5c63] transition-colors hover:border-[#0d5c63] hover:bg-[#eef8f7]">
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
