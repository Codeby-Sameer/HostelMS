// src/pages/AboutApp.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Basic Navbar component
const Navbar = () => {
  // return (
  //   <nav className="bg-white shadow-lg border-b border-gray-200">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center h-16">
  //         <div className="flex items-center">
  //           <Link to="/" className="text-xl font-bold text-blue-600">
  //             DCM Solutions
  //           </Link>
  //         </div>
  //         <div className="hidden md:block">
  //           <div className="ml-10 flex items-baseline space-x-4">
  //             <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
  //             <Link to="/about" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
  //             <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

// Basic Footer component
const Footer = () => {
  // return (
  //   <footer className="bg-gray-800 text-white py-8">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center">
  //         <p className="text-gray-400">© 2024 DCM Solutions. All rights reserved.</p>
  //       </div>
  //     </div>
  //   </footer>
  // );
};

// Platform stats data
const platformStats = [
//   { number: "99.9%", label: "Uptime" },
//   { number: "24/7", label: "Support" },
//   { number: "1M+", label: "Traders" },
//   { number: "0.01s", label: "Execution" },
];

// Reviews data with project URLs
const reviews = [
  { 
    name: "Hospital Management", 
    role: "DCM Hospital", 
    description: "Complete hospital management solution with patient records, appointments, and billing system",
    projectUrl: "https://hospital-project-12.vercel.app/",
    color: "#2563eb",
    logo: (
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 shadow-lg shadow-blue-500/30 flex items-center justify-center">
          <span className="text-white text-2xl">🏥</span>
        </div>
      </div>
    )
  },
  { 
    name: "HRMS", 
    role: "Human Resources", 
    description: "A complete HR digital solution for modern businesses.",
    projectUrl: "#",
    color: "#2563eb",
    logo: (
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 shadow-lg shadow-blue-500/30 flex items-center justify-center">
          <span className="text-white text-2xl">👥</span>
        </div>
      </div>
    )
  },
  { 
    name: "AI-Powered HR + CRM", 
    role: "Management System", 
    description: "AI-driven HR tools and productivity boosters for scaling businesses.",
    projectUrl: "#",
    color: "#2563eb",
    logo: (
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 shadow-lg shadow-blue-500/30 flex items-center justify-center">
          <span className="text-white text-2xl">🤖</span>
        </div>
      </div>
    )
  },
];

const AboutApp = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = 380 + 24;
    const scrollToIndex = (i) =>
      el.scrollTo({ left: i * cardWidth, behavior: "smooth" });

    scrollToIndex(currentIndex);
    const t = setInterval(() => {
      setCurrentIndex((p) => {
        const n = (p + 1) % reviews.length;
        scrollToIndex(n);
        return n;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [currentIndex]);

  const handleCardClick = (projectUrl) => {
    if (projectUrl && projectUrl !== "#") {
      window.open(projectUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Load Poppins font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden font-['Poppins']">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-blob-1"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-blob-2"></div>
        </div>
       
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white opacity-0 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl md:text-6xl font-black mb-6 opacity-0 scale-90 animate-scale-in animation-delay-400">
              <span className="bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About us
              </span>
            </h1>
           
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 translate-y-8 animate-fade-in-up animation-delay-600">
              We enable hostels and PGs to go digital, making student life seamless and management effortless.
            </p>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12 opacity-0 translate-y-8 animate-fade-in-up animation-delay-800">
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-300 block">{stat.number}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-blob-1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          @keyframes float-blob-2 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-180deg); }
          }

          @keyframes fade-in-up {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scale-in {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-float-blob-1 {
            animation: float-blob-1 8s ease-in-out infinite;
          }

          .animate-float-blob-2 {
            animation: float-blob-2 10s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
          }

          .animate-scale-in {
            animation: scale-in 0.8s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-800 {
            animation-delay: 0.8s;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl text-slate-900 mb-4 text-center md:text-left font-bold">
              About Our Hostel App
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-center md:text-left text-gray-700">
              Our Hostel Management App is a smart solution for managing hostel operations seamlessly.
              Designed for students, wardens, and administrators, it brings everything under one digital roof.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-center md:text-left text-gray-700">
              From room booking to complaints, attendance tracking to announcements — the app simplifies daily hostel
              tasks, saving time and improving transparency.
            </p>
          </div>

          <div className="flex-1">
            <p className="text-sm md:text-base leading-relaxed mb-4 text-center md:text-left text-gray-700">
              The app provides real-time updates, notifications, and secure access for all users. Students can check mess menus,
              lodge maintenance issues, and receive notices — all on their phones.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-center md:text-left text-gray-700">
              Admins can manage admissions, fee records, and generate reports with just a few clicks. It's built to scale and support hostels of all sizes.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center md:text-left text-gray-700">
              Our goal is to enhance hostel life with technology — making it smarter, safer, and simpler for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-8">
          {/* Left: Features */}
          <div className="flex-1 md:mr-8 order-2 md:order-1">
            <div className="flex items-start mb-6 md:mb-8">
              <span className="text-3xl mr-4 text-blue-600">📱</span>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-semibold">Mobile Convenience</h3>
                <p className="text-sm md:text-base text-gray-700">Access everything — room bookings, notices, complaints — right from your phone.</p>
              </div>
            </div>

            <div className="flex items-start mb-6 md:mb-8">
              <span className="text-3xl mr-4 text-blue-600">👥</span>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-semibold">Multi-User Support</h3>
                <p className="text-sm md:text-base text-gray-700">Students, wardens, and admins each get personalized dashboards and controls.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 text-blue-600">🛡️</span>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-semibold">Secure & Transparent</h3>
                <p className="text-sm md:text-base text-gray-700">Encrypted data, role-based access, and audit logs keep everything safe and trackable.</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 md:ml-8 order-1 md:order-2 w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70"
              alt="Modern Hostel"
              className="w-full h-64 md:h-96 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three easy steps Section */}
      <section className="bg-white py-8 md:py-16 px-4 md:px-6 font-['Poppins']">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Steps Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5 text-center md:text-left">
              {isMobile ? "Get started in three easy steps" : "Get started in three easy steps"}
            </h2>

            <div className="space-y-4 md:space-y-5">
              {[
                { n: "01", t: "Schedule a quick call", d: "Talk with our team to map your hostel needs." },
                { n: "02", t: "See a live demo", d: "Explore how bookings, fees, and notices work seamlessly." },
                { n: "03", t: "Onboard easily", d: "We'll help you migrate data and train your staff." },
              ].map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[50px,1fr] md:grid-cols-[64px,1fr] gap-3 md:gap-4 items-start"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200 flex items-center justify-center text-blue-900 font-bold text-base md:text-lg bg-blue-50">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-semibold text-base md:text-lg text-slate-900">
                      {s.t}
                    </div>
                    <div className="mt-1 text-gray-600 text-sm md:text-base">
                      {s.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center md:text-left">
              <Link
                to="/contact"
                className="inline-block mt-6 bg-blue-600 text-white px-6 md:px-7 py-3 md:py-3 rounded-full font-semibold no-underline text-sm md:text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70"
              alt="Students in hostel"
              className="w-full rounded-xl shadow-lg object-cover max-h-80 md:max-h-none"
            />
          </div>
        </div>
      </section>

      {/* Special Facility Banner */}
      <div className="mt-5 md:mt-10 p-4 md:p-5 text-center bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-xl shadow-lg mx-4 md:mx-auto max-w-6xl">
        <h2 className="mb-3 text-lg md:text-xl font-semibold">
          ✨ Special Facility ✨
        </h2>
        <p className="text-sm md:text-lg font-bold leading-relaxed">
          We also provide <span className="text-yellow-300">Day-Wise Room Booking</span> for students and guests who need short-term stays!
        </p>
      </div>

      {/* Modern Features Section */}
      <section className="bg-white py-8 md:py-16 px-4 md:px-8 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-8">
          {/* Left: Image */}
          <div className="flex-1 w-full md:w-auto order-1 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=70"
              alt="Hostel App"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Features */}
          <div className="flex-1 w-full md:w-auto order-2 md:order-2">
            <div className="flex items-start mb-6 md:mb-10">
              <div className="bg-gray-100 p-3 md:p-4 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">🏠</span>
              </div>
              <div>
                <h3 className="mb-2 text-slate-900 text-xl md:text-2xl font-semibold">
                  Smart Hostel Features
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Room bookings, payments, and notices all in one place.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6 md:mb-10">
              <div className="bg-gray-100 p-3 md:p-4 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <h3 className="mb-2 text-slate-900 text-xl md:text-2xl font-semibold">
                  Role-Based Dashboards
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Personalized experience for students, wardens, and admins.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-3 md:p-4 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="mb-2 text-slate-900 text-xl md:text-2xl font-semibold">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Data encryption, audit logs, and secure authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section - Mobile Responsive Cards */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-gray-100 min-h-[50vh] md:min-h-[70vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-['Poppins']">
            Our Products
          </h2>
          <p className="text-sm md:text-xl text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Click on any project to explore it in a new tab
          </p>
          
          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center px-0 md:px-4 max-w-md md:max-w-none mx-auto md:mx-0">
            {reviews.map(({ name, role, description, projectUrl, logo, color }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 md:p-8 font-['Poppins'] shadow-lg hover:shadow-2xl transition-all duration-400 cursor-pointer border-3 border-transparent hover:-translate-y-3 hover:scale-105 relative overflow-hidden text-center flex flex-col justify-between min-h-[420px] md:min-h-[480px] w-full group"
                style={{
                  '--project-color': color,
                }}
                onClick={() => handleCardClick(projectUrl)}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 opacity-80"
                  style={{
                    background: `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`,
                    borderBottomLeftRadius: '80%'
                  }}
                ></div>

                {/* Logo Section */}
                <div className="mb-4 md:mb-6 flex justify-center items-center flex-shrink-0">
                  {logo}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                      {name}
                    </h3>

                    {/* Role */}
                    <div 
                      className="text-blue-600 px-4 py-2 rounded-2xl text-xs md:text-sm font-semibold mb-4 md:mb-6 inline-block"
                      style={{
                        background: `${color}15`,
                        color: color
                      }}
                    >
                      {role}
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-center min-h-16 md:min-h-20 flex items-center justify-center">
                      {description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div 
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 border-2 mb-2 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                    style={{
                      background: `${color}15`,
                      color: color,
                      borderColor: `${color}30`
                    }}
                  >
                    <span>View Project</span>
                    <span className="text-xs">↗</span>
                  </div>
                </div>

                {/* Hover Arrow - Only show on desktop */}
                {!isMobile && (
                  <div 
                    className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: color }}
                  >
                    <span className="text-lg">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}; 

export default AboutApp;