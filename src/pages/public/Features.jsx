import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { featuresData } from "../data/featuresData";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const categoryMap = {
  Booking: "Operations",
  Onboarding: "Residents",
  Finance: "Finance",
  Rooms: "Operations",
  Support: "Residents",
  Food: "Operations",
  Communication: "Residents",
  Insights: "Analytics",
  Mobile: "Residents",
  Security: "Analytics",
};

const filterTabs = ["All", "Operations", "Finance", "Residents", "Analytics"];

const Features = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredFeatures = useMemo(() => {
    if (activeFilter === "All") {
      return featuresData;
    }

    return featuresData.filter(
      (feature) => categoryMap[feature.tag] === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-20 text-slate-900"
        style={{ backgroundImage: "url('/img/Features1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#06282d]/45 backdrop-blur-[2px]"></div>
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#d9f3ef] opacity-25 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f6e8bf] opacity-20 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl rounded-3xl border border-white/50 bg-white/18 px-6 py-10 text-center shadow-[0_30px_80px_rgba(6,40,45,0.18)] backdrop-blur-2xl sm:px-10"
        >
          <span className="mb-6 inline-block rounded-full border border-white/40 bg-white/18 px-4 py-1.5 text-sm font-semibold text-white/90">
            COMPREHENSIVE SOLUTION
          </span>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-white via-[#d9f3ef] to-[#f0d9a7] bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>

          {/* <div className="flex items-center justify-center gap-4 pb-5">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-white/90 to-transparent"></div>
            <span className="bg-gradient-to-r from-[#d9f3ef] to-[#f0d9a7] bg-clip-text text-3xl font-light text-transparent">·</span>
            <div className="h-1 w-12 rounded-full bg-gradient-to-l from-white/90 to-transparent"></div>
          </div> */}

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 md:text-xl">
            Everything you need to manage your hostel efficiently,
            from booking to billing and beyond.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Room Allocation", "Automated Billing", "KYC & Check-in"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/35 bg-white/18 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/request-demo">
              <button className="rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:from-[#09454a] hover:to-[#166774]">
                Request Demo
              </button>
            </Link>
            <button
              onClick={() => {
                const featuresSection = document.getElementById("features-suite");
                featuresSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl border-2 border-white/70 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/20"
            >
              Explore Features
            </button>
          </div>
        </motion.div>
      </section>


      <section id="features-suite" className="min-h-screen bg-gradient-to-b from-[#f8fbfb] to-white px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Complete <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">Hostel Management Suite</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each feature is designed to solve specific challenges in hostel management,
              ensuring smooth operations and happy residents.
            </p>
          </motion.div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === tab
                    ? "border-[#0d5c63] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white shadow-lg"
                    : "border-[#d7e7e4] bg-white text-slate-700 hover:border-[#b9ddda] hover:bg-[#eef8f7] hover:text-[#0d5c63]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => {
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
                  <div
                    onClick={() => navigate(`/features/${feature.id}`)}
                    className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-[#d7e7e4] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#b9ddda] hover:shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#eef8f7]/0 via-white to-[#fbfaf6]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      initial={false}
                    />

                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d5c63] to-[#9dd9d2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      initial={false}
                    />

                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-all duration-300 group-hover:shadow-[0_18px_35px_rgba(13,92,99,0.18)]`}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>

                    <div className="relative z-10 inline-block mb-4">
                      <span className="rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-3 py-1.5 text-xs font-semibold text-[#0d5c63]">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#0d5c63]">
                      {feature.title}
                    </h3>

                    <p className="relative z-10 mb-6 leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {feature.description}
                    </p>

                    <div className="relative z-10 space-y-3 mb-8">
                      {feature.points.slice(0, 3).map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={false}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#edf8f2] transition-transform duration-300 group-hover:scale-110">
                            <FaCheck className="h-3 w-3 text-[#13876f]" />
                          </div>
                          <span className="text-sm text-slate-700">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative z-10 flex items-center justify-between border-t border-[#e6efed] pt-6 transition-colors duration-300 group-hover:border-[#d7e7e4]">
                      <span className="text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]">
                        Explore feature
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.12, x: 2 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] shadow-md transition-transform duration-300 group-hover:shadow-[0_12px_24px_rgba(13,92,99,0.2)]"
                      >
                        <FaArrowRight className="text-white text-sm" />
                      </motion.div>
                    </div>

                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#9dd9d2]/10 blur-xl transition-all duration-500 group-hover:bg-[#9dd9d2]/20" />
                    <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-[#f0d9a7]/10 blur-xl transition-all duration-500 group-hover:bg-[#f0d9a7]/20" />
                  </div>

                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-[#0d5c63]/0 to-[#9dd9d2]/0 blur-xl transition-all duration-500 group-hover:from-[#0d5c63]/10 group-hover:to-[#9dd9d2]/10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Why Choose <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">Our Features?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#edf8f2]">
                    <span className="text-lg text-[#13876f]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Saving</h4>
                    <p className="text-gray-600">Automate routine tasks and focus on what matters most</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#e6f4f3]">
                    <span className="text-lg text-[#0d5c63]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600">Reduce operational costs with digital solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#eef8f7]">
                    <span className="text-lg text-[#1b7f8e]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">User Friendly</h4>
                    <p className="text-gray-600">Intuitive interface for both admins and residents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#faf3df]">
                    <span className="text-lg text-[#c79a3b]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable</h4>
                    <p className="text-gray-600">Grow your hostel business without limitations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#d7e7e4] bg-gradient-to-br from-[#f8fbfb] to-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900">
                Ready to <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">Get Started?</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the power of our features with a free demo. See how our platform can transform your hostel management.
              </p>
              <div className="space-y-4">
                <Link
                  to="/request-demo"
                  className="inline-block w-full rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-6 py-3 text-center font-semibold text-white transition-colors hover:from-[#09454a] hover:to-[#166774]"
                >
                  Request Demo
                </Link>
                <Link
                  to="/pricing"
                  className="inline-block w-full rounded-xl border-2 border-[#b9ddda] px-6 py-3 text-center font-semibold text-[#0d5c63] transition-colors hover:border-[#0d5c63] hover:bg-[#eef8f7]"
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
