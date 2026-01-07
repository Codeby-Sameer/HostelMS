
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

const reviews = [
  {
    name: "Hospital Management",
    role: "DCM Hospital",
    description:
      "Complete hospital management solution with patient records, appointments, and billing system",
    projectUrl: "https://hospital-project-12.vercel.app/",
  },
  {
    name: "HRMS",
    role: "Human Resources",
    description: "A complete HR digital solution for modern businesses.",
    projectUrl: "#",
  },
  {
    name: "AI-Powered HR + CRM",
    role: "Management System",
    description:
      "AI-driven HR tools and productivity boosters for scaling businesses.",
    projectUrl: "#",
  },
];

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
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            About <span className="text-cyan-300">DCM Hostel App</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            We enable hostels & PGs to go digital — making student life seamless
            and management effortless.
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Our Hostel App</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our Hostel Management App is a smart solution for managing hostel
            operations seamlessly. Designed for students, wardens, and
            administrators, it brings everything under one digital roof.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From room booking to complaints, attendance tracking to
            announcements — the app simplifies daily hostel tasks, saving time
            and improving transparency.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            The app provides real-time updates, notifications, and secure access
            for all users. Students can check mess menus, lodge maintenance
            issues, and receive notices — all on their phones.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Admins can manage admissions, fee records, and generate reports with
            just a few clicks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to enhance hostel life with technology — making it
            smarter, safer, and simpler for everyone involved.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURE HIGHLIGHTS ================= */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              icon: FaMobileAlt,
              title: "Mobile Convenience",
              desc:
                "Access bookings, notices, payments & complaints directly from your phone.",
            },
            {
              icon: FaUsers,
              title: "Multi-User System",
              desc:
                "Separate dashboards for students, wardens & administrators.",
            },
            {
              icon: FaShieldAlt,
              title: "Secure & Transparent",
              desc:
                "Encrypted data, role-based access and audit logs for safety.",
            },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= 3 EASY STEPS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get started in 3 easy steps
          </h2>

          {[
            ["01", "Schedule a call", "Talk with our team to map your needs"],
            ["02", "Live demo", "See bookings, payments & notices in action"],
            ["03", "Onboard easily", "We migrate data & train your staff"],
          ].map((s, i) => (
            <div key={i} className="flex gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                {s[0]}
              </div>
              <div>
                <h4 className="font-semibold">{s[1]}</h4>
                <p className="text-gray-600 text-sm">{s[2]}</p>
              </div>
            </div>
          ))}

          <Link
            to="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Book a Demo
          </Link>
        </motion.div>

        <motion.img
          variants={fade}
          initial="hidden"
          whileInView="visible"
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          alt="Hostel"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* ================= DAY BOOKING BANNER ================= */}
      <section className="mx-4 max-w-6xl md:mx-auto mb-20 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center shadow-xl">
        <FaCalendarCheck className="mx-auto text-4xl mb-3" />
        <h3 className="text-xl font-bold mb-2">
          Day-Wise Room Booking Available
        </h3>
        <p className="opacity-90">
          Short-term stays for students & guests — book rooms just like OYO.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 px-4 bg-slate-50">
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
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center px-4">
        <FaRocket className="mx-auto text-5xl text-blue-600 mb-4" />
        <h2 className="text-3xl font-black mb-4">
          Ready to modernize your hostel?
        </h2>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default AboutApp;
