
// import { fadeUp, cardHover } from "../utils/motion";

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaUsers,
  FaShieldAlt,
  FaCalendarCheck,
  FaHotel,
  FaRocket,
  FaExternalLinkAlt,
  FaBullseye,
  FaHandshake,
  FaClock,
  FaBed,
  FaArrowRight,
  FaSyncAlt,
  FaHeart
} from "react-icons/fa";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/* ---------------- PROJECT DATA (UNCHANGED LOGIC) ---------------- */

// const reviews = [
//   {
//     name: "Hospital Management",
//     role: "DCM Hospital",
//     description:
//       "Complete hospital management solution with patient records, appointments, and billing system",
//     projectUrl: "https://hospital-management-12.vercel.app/",
//   },
//   {
//     name: "HRMS",
//     role: "Human Resources",
//     description: "A complete HR digital solution for modern businesses.",
//     projectUrl: "#",
//   },
//   {
//     name: "AI-Powered HR + CRM",
//     role: "Management System",
//     description:
//       "AI-driven HR tools and productivity boosters for scaling businesses.",
//     projectUrl: "#",
//   },
// ];

const AboutApp = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const openProject = (url) => {
    if (url && url !== "#") window.open(url, "_blank");
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            About <span className="text-blue-200">DCM Hostel App</span>
          </h1>

          <p className="text-base md:text-xl text-blue-100 leading-relaxed">
            We enable hostels & PGs to go digital, making tenant life seamless
            and management effortless.
          </p>
        </motion.div>
      </section>


      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              About Our Hostel <br /> Management System
            </h2>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Our Hostel Management System is a modern digital platform designed to
              simplify and automate daily hostel operations for administrators,
              wardens, and tenants.
            </p>

            <p className="text-gray-700 mb-5 leading-relaxed">
              By replacing manual processes with smart digital workflows, the system
              ensures accuracy, transparency, and smooth coordination across all
              hostel activities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Core functionalities such as admissions, room allocation, attendance
              tracking, fee management, and communication are unified into a single,
              secure platform for efficient hostel administration.
            </p>
          </motion.div>

          {/* RIGHT BENEFITS CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              What We Offer
            </h3>

            <ul className="space-y-4">
              {[
                "Centralized hostel administration with real-time access",
                "Secure digital fee collection and payment tracking",
                "Automated maintenance and complaint management",
                "Digital attendance and leave monitoring",
                "Instant announcements and notifications",
                "Detailed reports for better decision-making"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>


      {/* ================= FEATURE HIGHLIGHTS ================= */}
      <section className="py-18 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT – HIGHLIGHTED / APPROACH */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main Highlight Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <FaRocket className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Our Approach
                </h3>

                <p className="text-white/90 leading-relaxed mb-4">
                  We believe hostel management should be simple, transparent, and stress free.
                  Our platform is designed by understanding real hostel challenges, not just
                  technical requirements.
                </p>

                <p className="text-white/90 leading-relaxed">
                  We work closely with hostel owners, wardens, and tenants to ensure every
                  feature genuinely improves daily operations and living experience.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  What Drives Us
                </h4>

                <div className="space-y-4">
                  {[
                    { icon: <FaBullseye />, text: "Clear focus on real hostel problems" },
                    { icon: <FaHandshake />, text: "Long term partnerships with hostels" },
                    { icon: <FaSyncAlt />, text: "Continuous improvement through feedback" },
                    { icon: <FaHeart />, text: "Tenant comfort and safety first" }
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="text-blue-600">{value.icon}</div>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT – OUR STORY / CLEAN */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  <FaUsers className="w-4 h-4" />
                  <span>ABOUT US</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Built by People Who Understand Hostels
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our journey began with a simple observation that hostel management was
                    overloaded with paperwork, manual tracking, and outdated systems that
                    slowed everyone down.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    Tenants struggled to access information, wardens spent hours on routine
                    tasks, and administrators lacked real time visibility into operations.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    We built this Hostel Management System to bring clarity, automation, and
                    control to hostel operations, helping hostels operate efficiently while creating a better
                    experience for residents.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Our Focus",
                    desc: "Simplifying hostel operations",
                    color: "bg-blue-50 text-blue-700"
                  },
                  {
                    title: "Our Promise",
                    desc: "Reliable & transparent systems",
                    color: "bg-emerald-50 text-emerald-700"
                  },
                  {
                    title: "Our Team",
                    desc: "Domain experts & engineers",
                    color: "bg-purple-50 text-purple-700"
                  },
                  {
                    title: "Our Vision",
                    desc: "Smarter hostels everywhere",
                    color: "bg-amber-50 text-amber-700"
                  }
                ].map((fact, idx) => (
                  <div key={idx} className={`${fact.color} p-4 rounded-xl`}>
                    <div className="font-semibold mb-1">{fact.title}</div>
                    <div className="text-sm opacity-90">{fact.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3 EASY STEPS ================= */}
      <section className="py-10 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Digital Solution
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need for modern hostel management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaMobileAlt,
                title: "Mobile-First Experience",
                description: "Tenants can book rooms, pay fees, and manage everything from their phones. Real time updates and notifications keep everyone connected.",
                color: "from-blue-500 to-cyan-500",
                features: ["Mobile bookings", "Push notifications", "Digital payments"]
              },
              {
                icon: FaUsers,
                title: "Smart User Management",
                description: "Separate portals for tenants, wardens, and admin staff with role based permissions. Each user gets exactly what they need.",
                color: "from-purple-500 to-pink-500",
                features: ["Tenant portal", "Warden dashboard", "Admin controls"]
              },
              {
                icon: FaShieldAlt,
                title: "Secure Platform",
                description: "Bank level security with encrypted data, secure payments, and complete audit trails. Your data is protected with enterprise grade security.",
                color: "from-emerald-500 to-teal-500",
                features: ["Data encryption", "Secure payments", "Audit logs"]
              }
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${card.color} rounded-t-2xl`} />

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 mt-2`}>
                      <Icon className="text-white text-2xl" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className="w-8 h-8 border-t-2 border-r-2 border-slate-300 rounded-tr-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DAY BOOKING BANNER ================= */}
      <section className="relative mx-4 max-w-6xl md:mx-auto mb-20 p-6 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg border-l-4 border-yellow-400 mt-2">
        {/* Decorative corner */}
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <FaCalendarCheck className="text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-1">
                Day Wise Room Booking Available
              </h3>
              <p className="opacity-90 text-sm">
                Perfect for short visits, exams, or guest stays. Book by the day with instant confirmation.
              </p>
              <div className="flex gap-3 mt-3">
                <span className="flex items-center gap-1 text-sm bg-white/10 px-3 py-1 rounded-full">
                  <FaClock /> Flexible check-in
                </span>
                <span className="flex items-center gap-1 text-sm bg-white/10 px-3 py-1 rounded-full">
                  <FaShieldAlt /> Secure payments
                </span>
              </div>
            </div>
          </div>
            <Link to="/rooms"> 
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
            <FaBed className="text-lg" />
            Explore Rooms
          </button></Link>
        </div>
      </section>
      {/* ================= PRODUCTS ================= */}
      {/* <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Our Products</h2>
          <p className="text-gray-600">
            Explore our digital solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer"
              onClick={() => openProject(r.projectUrl)}
            >
              <FaHotel className="text-3xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{r.name}</h3>
              <span className="text-blue-600 text-sm font-semibold">
                {r.role}
              </span>
              <p className="text-gray-600 text-sm mt-4">
                {r.description}
              </p>
              <div className="mt-6 flex justify-center items-center gap-2 text-blue-600 font-semibold">
                View Project <FaExternalLinkAlt />
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ================= FINAL CTA ================= */}
      <section className="py-15 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Icon */}
          <FaRocket className="mx-auto text-5xl text-blue-600 mb-6" />

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Ready to Modernize Your Hostel?
          </h2>

          {/* Supporting Content */}
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Join hostels that have replaced paperwork and manual tracking with a
            smart, centralized management system. Get better control, improved
            communication, and a smoother experience for tenants and staff.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            Get Started
          </Link>

          {/* Trust Note */}
          <p className="text-sm text-slate-500 mt-4">
            Free demo • No commitment • Guided onboarding
          </p>

        </div>
      </section>

    </main>
  );
};

export default AboutApp;
