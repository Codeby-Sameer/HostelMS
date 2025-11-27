// src/pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Basic Navbar component
const Navbar = () => {
  // return (
  //   <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex justify-between items-center h-16">
  //         <div className="flex items-center">
  //           <Link to="/" className="text-xl font-bold text-blue-600">
  //             DCM Solutions
  //           </Link>
  //         </div>
  //         <div className="hidden md:block">
  //           <div className="ml-10 flex items-baseline space-x-4">
  //             <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
  //             <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
  //             <Link to="/contact" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
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

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Platform stats data
  const platformStats = [
    // { number: "99.9%", label: "Uptime" },
    // { number: "24/7", label: "Support" },
    // { number: "1M+", label: "Traders" },
    // { number: "0.01s", label: "Execution" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.name || !form.message) {
      setStatus("Please fill name, email and message.");
      return;
    }
    // Replace this with real API or EmailJS integration if required.
    console.log("Form submitted:", form);
    setStatus("Message sent — thank you!");
    setForm({ email: "", phone: "", name: "", message: "" });
    setTimeout(() => setStatus(""), 3500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
       
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-br from-gray-200 to-gray-300 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
           
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to help you with any questions or concerns. 
            </p>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
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
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Call Us Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 text-center shadow-lg border-2 border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[280px] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transition-transform duration-300 group-hover:scale-x-100 scale-x-90 origin-left"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.77 3.03a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.39 1.98.65 3.03.77A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-blue-900 mb-3">Call Us</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                Speak directly with our support team for immediate assistance
              </p>
              
              <a 
                href="tel:+918008682560" 
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:gap-3 mt-auto"
              >
                +91 8008682560
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>

            {/* Email Us Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 text-center shadow-lg border-2 border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[280px] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transition-transform duration-300 group-hover:scale-x-100 scale-x-90 origin-left"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l9 6 9-6"/><path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/>
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-blue-900 mb-3">Email Us</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                Send us an email anytime and we'll respond within 24 hours
              </p>
              
              <a 
                href="mailto:hr@designcareermetrics.com" 
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:gap-3 mt-auto"
              >
                hr@designcareermetrics.com
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>

            {/* Visit Us Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 text-center shadow-lg border-2 border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[280px] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transition-transform duration-300 group-hover:scale-x-100 scale-x-90 origin-left"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="2"/>
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-blue-900 mb-3">Visit Us</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                Design Career Metrics Pvt Ltd<br/>
                Hyderabad, Telangana, India
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:gap-3 mt-auto"
              >
                Get Directions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100 text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Send us a Message
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-label="Name"
                type="text"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 hover:border-slate-300"
              />
              
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                aria-label="Email"
                type="email"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 hover:border-slate-300"
              />
              
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-label="Phone"
                type="tel"
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 hover:border-slate-300"
              />
              
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                aria-label="Message"
                required
                rows="6"
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 hover:border-slate-300 resize-vertical min-h-[160px]"
              />

              <div className="flex flex-col items-center gap-4 pt-4">
                <button 
                  type="submit" 
                  className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <div 
                  className="min-h-[1.2em] text-green-600 font-semibold text-base transition-all duration-300" 
                  role="status" 
                  aria-live="polite"
                >
                  {status}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border-2 border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <iframe
              title="Design Career Metrics Location"
              className="w-full h-96 md:h-[500px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.996074202635!2d78.38618!3d17.4469705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f4c67dbb6b%3A0x873dde7736fdeff1!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}