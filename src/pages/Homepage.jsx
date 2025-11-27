import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // return (
  //   <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200/80 sticky top-0 z-50 px-4 lg:px-6">
  //     <div className="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20">
  //       {/* Logo */}
  //       <Link 
  //         to="/" 
  //         className="flex items-center gap-2 text-2xl font-black text-blue-600 no-underline"
  //       >
  //         <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
  //           H
  //         </div>
  //         HostelMS
  //       </Link>

  //       {/* Desktop Menu */}
  //       <div className="hidden lg:flex items-center gap-8">
  //         <Link to="/features" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200">
  //           Features
  //         </Link>
  //         <Link to="/pricing" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200">
  //           Pricing
  //         </Link>
  //         <Link to="/about" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200">
  //           About
  //         </Link>
  //         <Link to="/contact" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200">
  //           Contact
  //         </Link>
  //       </div>

  //       {/* Auth Buttons */}
  //       <div className="hidden lg:flex items-center gap-4">
  //         <button 
  //           onClick={() => navigate("/login")}
  //           className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 px-4 py-2"
  //         >
  //           Login
  //         </button>
  //         <button 
  //           onClick={() => navigate("/signup")}
  //           className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
  //         >
  //           Get Started
  //         </button>
  //       </div>

  //       {/* Mobile Menu Button */}
  //       <button 
  //         className="lg:hidden text-slate-700 p-2"
  //         onClick={toggleMenu}
  //       >
  //         {isOpen ? "✕" : "☰"}
  //       </button>
  //     </div>

  //     {/* Mobile Menu */}
  //     {isOpen && (
  //       <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
  //         <div className="flex flex-col p-4 space-y-4">
  //           <Link to="/features" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>
  //             Features
  //           </Link>
  //           <Link to="/pricing" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>
  //             Pricing
  //           </Link>
  //           <Link to="/about" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>
  //             About
  //           </Link>
  //           <Link to="/contact" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>
  //             Contact
  //           </Link>
  //           <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
  //             <button 
  //               onClick={() => { navigate("/login"); setIsOpen(false); }}
  //               className="text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-200 py-2 text-left"
  //             >
  //               Login
  //             </button>
  //             <button 
  //               onClick={() => { navigate("/signup"); setIsOpen(false); }}
  //               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200"
  //             >
  //               Get Started
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </nav>
  // );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  // return (
  //   <footer className="bg-slate-900 text-white">
  //     {/* Main Footer */}
  //     <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
  //         {/* Company Info */}
  //         <div className="lg:col-span-1">
  //           <Link to="/" className="flex items-center gap-2 text-2xl font-black text-white mb-6 no-underline">
  //             <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
  //               H
  //             </div>
  //             HostelMS
  //           </Link>
  //           <p className="text-slate-300 mb-6 leading-relaxed">
  //             Transform your hostel management with our comprehensive digital solution. Streamline operations, enhance resident experience, and grow your business.
  //           </p>
  //           <div className="flex gap-4">
  //             <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-xl">
  //               f
  //             </a>
  //             <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-xl">
  //               t
  //             </a>
  //             <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-xl">
  //               in
  //             </a>
  //             <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-xl">
  //               ig
  //             </a>
  //           </div>
  //         </div>

  //         {/* Product Links */}
  //         <div>
  //           <h3 className="text-lg font-bold mb-6">Product</h3>
  //           <ul className="space-y-3">
  //             <li><Link to="/features" className="text-slate-300 hover:text-white transition-colors duration-200">Features</Link></li>
  //             <li><Link to="/pricing" className="text-slate-300 hover:text-white transition-colors duration-200">Pricing</Link></li>
  //             <li><Link to="/demo" className="text-slate-300 hover:text-white transition-colors duration-200">Live Demo</Link></li>
  //             <li><Link to="/documentation" className="text-slate-300 hover:text-white transition-colors duration-200">Documentation</Link></li>
  //           </ul>
  //         </div>

  //         {/* Support Links */}
  //         <div>
  //           <h3 className="text-lg font-bold mb-6">Support</h3>
  //           <ul className="space-y-3">
  //             <li><Link to="/help" className="text-slate-300 hover:text-white transition-colors duration-200">Help Center</Link></li>
  //             <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact Us</Link></li>
  //             <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
  //             <li><Link to="/terms" className="text-slate-300 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
  //           </ul>
  //         </div>

  //         {/* Newsletter */}
  //         <div>
  //           <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
  //           <p className="text-slate-300 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
  //           <div className="flex flex-col sm:flex-row gap-2">
  //             <input 
  //               type="email" 
  //               placeholder="Enter your email"
  //               className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
  //             />
  //             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center">
  //               Subscribe →
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Bottom Bar */}
  //     <div className="border-t border-slate-800">
  //       <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
  //         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  //           <p className="text-slate-400 text-sm">© {currentYear} HostelMS. All rights reserved.</p>
  //           <div className="flex gap-6 text-sm text-slate-400">
  //             <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy</Link>
  //             <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms</Link>
  //             <Link to="/cookies" className="hover:text-white transition-colors duration-200">Cookies</Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
}

// Announcement Modal Component
function AnnouncementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full mx-auto shadow-2xl border border-slate-200 animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
            🎉
          </div>
          <h3 className="text-2xl font-black text-white mb-2">Special Announcement!</h3>
          <p className="text-blue-100">Exciting new features are here</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg">
                🚀
              </div>
              <div>
                <h4 className="font-bold text-slate-900">New Mobile App</h4>
                <p className="text-slate-600 text-sm">Available on iOS & Android</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg">
                💰
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Special Discount</h4>
                <p className="text-slate-600 text-sm">20% off for first 100 customers</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg">
                ⚡
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Live Demo</h4>
                <p className="text-slate-600 text-sm">Book your personalized tour</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 border-2 border-slate-300 text-slate-700 px-4 py-3 rounded-xl font-bold hover:border-slate-400 transition-all duration-300"
            >
              Maybe Later
            </button>
            <button 
              onClick={() => {
                onClose();
                // Navigate to signup or any other action
                window.location.href = "/signup";
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// Main Homepage Component
function Homepage() {
  const navigate = useNavigate();

  /* ========================
      STATE + REFS
  ========================= */
  const [hideCta, setHideCta] = useState(false);
  const [revealBubbles, setRevealBubbles] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const footerSentinelRef = useRef(null);
  const phoneSectionRef = useRef(null);
  const tiltRef = useRef(null);
  const benefitsSliderRef = useRef(null);

  // ---- Slides for the HERO slider ----
  const pgSlides = [
    {
      key: "kyc",
      title: "Welcome to DCM Hostel Management",
      desc: "Learn more about our digital hostel management system designed to simplify your operations.",
      bullets: [
        "Digital KYC & police verification handoff",
        "Bed/room auto-allocation rules",
        "Instant PDF agreements & receipts",
      ],
      badge: "KYC",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70",
    },
    {
      key: "payments",
      title: "The easiest way to manage your hostel",
      desc: "UPI/NetBanking payments with auto-reconcile. Tenants view invoices, download PDFs, and track dues in real time.",
      bullets: [
        "UPI, cards & NetBanking",
        "Auto-reminders & late fees",
        "One-click receipt downloads",
      ],
      badge: "Payments",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
    },
    {
      key: "requests",
      title: "The easiest way to manage your PG & Hostel",
      desc: "From maintenance to mess menu, keep tenants informed. Track SLAs, assign staff, and close loops with ratings.",
      bullets: [
        "Ticketing with photos & chat",
        "Mess menu & announcements",
        "SLA dashboard & staff assignment",
      ],
      badge: "Requests",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=70",
    },
  ];

  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  // Benefits slideshow state
  const [benefitsActive, setBenefitsActive] = useState(0);
  const [benefitsDirection, setBenefitsDirection] = useState(1);
  const [benefitsPaused, setBenefitsPaused] = useState(false);

  const goTo = (idx) => {
    setPrev(active);
    const n = pgSlides.length;
    const dir =
      (idx === (active + 1) % n) || (active === n - 1 && idx === 0) ? 1 :
      (idx === (active + n - 1) % n) || (active === 0 && idx === n - 1) ? -1 :
      idx > active ? 1 : -1;
    setDirection(dir);
    setActive(idx);
  };

  const next = () => goTo((active + 1) % pgSlides.length);
  const prevSlide = () => goTo((active + pgSlides.length - 1) % pgSlides.length);

  // HERO auto-slide
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [paused, active]);

  // Show announcement modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  /* ========================
      STATIC DATA
  ========================= */
  const reviews = [
    { name: "Sai Kumar Reddy", role: "Student", review: "This app simplified my hostel stay. Easy bookings and instant payment receipts save a lot of time.", rating: 5, date: "2025-01-12", avatar: "https://i.pravatar.cc/100?img=11" },
    { name: "Lakshmi Prasanna", role: "Warden", review: "Tenant management is much easier now. I can allot rooms and track occupancy in just a few clicks.", rating: 4, date: "2025-02-03", avatar: "https://i.pravatar.cc/100?img=32" },
    { name: "Raghavendra Babu", role: "Admin", review: "The dashboards are very detailed. Reports and reconciliation are accurate and help in audits.", rating: 5, date: "2025-03-22", avatar: "https://i.pravatar.cc/100?img=45" },
    { name: "Keerthana Devi", role: "Student", review: "I love the real-time mess menu updates and reminders. Hostel life is more organized now.", rating: 4, date: "2025-04-08", avatar: "https://i.pravatar.cc/100?img=56" },
    { name: "Venkatesh Reddy", role: "Warden", review: "Complaint tracking is transparent, and I can resolve issues quickly. Tenants are happier.", rating: 5, date: "2025-04-27", avatar: "https://i.pravatar.cc/100?img=65" },
    { name: "Anusha Konidela", role: "Admin", review: "With digital KYC and police verification built-in, the compliance process is smoother.", rating: 4, date: "2025-05-14", avatar: "https://i.pravatar.cc/100?img=70" },
  ];

  const whyChoose = [
    {
      title: "Enterprise Grade Security",
      desc: "We're committed to keeping your customers' data secure with strict standards. End-to-end encryption for all sensitive information.",
      icon: "🛡️",
    },
    {
      title: "24/7 Support",
      desc: "Help for bookings, payments, and emergencies. Quick FAQs for common issues. Priority escalation for safety matters. Friendly human support when you need it.",
      icon: "📞",
    },
    {
      title: "Quick Onboarding",
      desc: "Seamlessly onboard your team with minimal disruption. Effortless transition with personalized assistance. Get started quickly without any delays.",
      icon: "👥",
    },
  ];

  const productBlocks = [
    {
      title: "Tenant Application",
      desc: "Empower residents with complete self-service: book rooms, pay online, raise complaints, and track services — all from their phone. Less dependency on wardens, more transparency and speed.",
      bullets: [
        "Easy booking & room allocation",
        "Pay rent online (UPI / NetBanking)",
        "Instant PDF receipts",
        "Raise complaints & track status",
      ],
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "Try Tenant App", to: "/contact" },
    },
    {
      title: "Admin Application",
      desc: "Get end-to-end visibility into hostel operations from one dashboard. Configure settings, monitor activities, manage staff and communicate with stakeholders in real-time.",
      bullets: [
        "Support for Deans, Directors, Wardens & Caretakers",
        "Real-time operational monitoring",
        "Approvals, alerts & notifications",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "Get a Live Demo", to: "/contact" },
    },
    {
      title: "Reports in Admin",
      desc: "Bring clarity with built-in reports. Track occupancy, payments, complaints and more with visual dashboards and exportable summaries.",
      bullets: [
        "Occupancy & movement insights",
        "Approve workflow requests",
        "Broadcast announcements",
        "Security & audit logs",
      ],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "See How It Works", to: "/contact" },
    },
  ];

  /* ========================
      EFFECTS
  ========================= */
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".aos"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = el.dataset.stagger || `${Math.min(i * 60, 400)}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const node = phoneSectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealBubbles(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = footerSentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setHideCta(e.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ========================
      HELPERS
  ========================= */
  const ReviewStars = ({ rating }) => {
    const full = Math.max(0, Math.min(5, Math.round(rating)));
    return (
      <span className="flex gap-1" aria-label={`Rated ${full} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-400" aria-hidden>
            {i < full ? "★" : "☆"}
          </span>
        ))}
      </span>
    );
  };

  /* ========================
      RENDER
  ========================= */
  return (
    <>
      <Navbar />

      {/* Announcement Modal */}
      <AnnouncementModal 
        isOpen={showAnnouncement} 
        onClose={() => setShowAnnouncement(false)} 
      />

      {/* HERO */}
      <section className="min-h-[84vh] relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>
        
        <div className="max-w-6xl w-[92vw] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="aos text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight mb-4">
              {pgSlides[active].title}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-6 leading-relaxed">
              {pgSlides[active].desc}
            </p>

            <ul className="space-y-3 mb-8">
              {pgSlides[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Free
              </button>
              <button 
                onClick={() => navigate("/demo")}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            className="aos relative w-full max-w-2xl mx-auto h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {pgSlides.map((s, idx) => {
              const isActive = idx === active;
              const wasActive = idx === prev;
              const enteringFrom = direction === 1 ? "animate-slide-in-right" : "animate-slide-in-left";
              const exitingTo = direction === 1 ? "animate-slide-out-left" : "animate-slide-out-right";

              return (
                <div
                  key={s.key}
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive 
                      ? `opacity-100 ${enteringFrom}`
                      : wasActive 
                        ? `opacity-0 ${exitingTo}`
                        : 'opacity-0'
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover scale-105 transition-transform duration-700"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-500/30">
                      {s.badge}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
              <button 
                className="pointer-events-auto bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button 
                className="pointer-events-auto bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={next}
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {pgSlides.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-blue-600' : 'bg-blue-200'
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto w-[92vw] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aos">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-6">
              Comprehensive Hostel Management Solution
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our platform transforms how hostels operate by digitizing every aspect of management. 
              From room allocation to payment processing and maintenance tracking, we provide a seamless experience for both administrators and residents.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Smart dashboard with real-time analytics</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Automated room allotment and tenant onboarding</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Secure online payments with instant receipts</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Maintenance and complaint tracking system</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Broadcast announcements and notices</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Digital KYC and document management</li>
            </ul>
          </div>
          <div className="aos">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70"
              alt="Modern Hostel Interior"
              className="w-full rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto w-[92vw] text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Why choose us?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">We built it for reliability, speed, and ease—right out of the box.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="aos bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25 mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE STAY OPTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto w-[92vw] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aos order-2 lg:order-1">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2023/3/293250320/MO/IK/UG/9676319/hostel-managemen-info-500x500.jpg" 
              alt="Flexible Stay Options" 
              className="w-full rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200"
              loading="lazy" 
            />
          </div>
          <div className="aos order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">Flexible Stay Options</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our day-wise booking system allows students to pay only for the days they actually stay. 
              Perfect for exam periods, interviews, or short-term accommodations.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
                Pay per day stayed
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
                1-30 day flexibility
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
                Instant confirmation
              </span>
            </div>

            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Real-time availability and instant booking confirmation</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>No monthly lock-in — extend or shorten stay anytime</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Digital receipts and 24/7 customer support</li>
            </ul>

            <Link 
              to="/rooms" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              📅 Explore Flexible Stays
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PRODUCT SECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto w-[92vw] text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Complete Management Ecosystem</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Three powerful applications working seamlessly together</p>

          {productBlocks.map((block, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`aos ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={block.img} alt={block.title} className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-slate-900/10" loading="lazy"/>
              </div>
              <div className={`aos ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">{block.title}</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{block.desc}</p>
                <ul className="space-y-3 mb-8">
                  {block.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link to={block.cta.to} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  {block.cta.label} ↓
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <SubscriptionQueue />

      {/* REVIEWS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto w-[92vw]">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 text-center mb-12">Trusted by Hostels Nationwide</h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-6">
              {[...reviews, ...reviews].map((review, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white shadow-lg"/>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-slate-600 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic mb-4 leading-relaxed">"{review.review}"</p>
                  <div className="flex items-center gap-3">
                    <ReviewStars rating={review.rating} />
                    <span className="text-slate-600 font-semibold text-sm">{review.rating.toFixed(1)}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate("/testimonials")} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              Read All Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HostelFAQ />

      <div ref={footerSentinelRef} />
      <Footer />
    </>
  );
}

// Sub-components
function HowItWorks() {
  const steps = [
    { num: 1, title: "Complete Registration", desc: "Create your account and set up your hostel profile in minutes" },
    { num: 2, title: "Manage Bookings", desc: "Accept bookings, manage check-ins, and track occupancy in real-time" },
    { num: 3, title: "Grow Your Business", desc: "Use analytics to optimize operations and enhance resident experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-5 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-amber-500/20 rounded-full blur-3xl top-15 right-8 animate-pulse delay-1000"></div>
      <div className="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl bottom-10 left-40 animate-pulse delay-2000"></div>

      <div className="max-w-6xl mx-auto w-[92vw] text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-4">How It Works</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Get your hostel management system up and running in three simple steps</p>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-700/50 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/25 mx-auto mb-6 border-4 border-slate-800">
                  {step.num}
                </div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionQueue() {
  const navigate = useNavigate();
  const [head, setHead] = useState(1);
  const [billing, setBilling] = useState("monthly");

  const plans = useMemo(() => [
    { id: 1, name: "Starter Plan", monthly: 999, yearly: 999 * 12 * 0.8, features: ["Up to 50 Beds", "Basic Features", "Mobile App Access", "Email Support", "Standard Reports"], cta: "Buy Now" },
    { id: 2, name: "Professional Plan", monthly: 2499, yearly: 2499 * 12 * 0.8, features: ["Up to 200 Beds", "All Basic Features", "Advanced Analytics", "Priority Support", "Custom Branding", "Multiple Locations"], popular: true, cta: "Buy Now" },
    { id: 3, name: "Enterprise Plan", monthly: "Custom", yearly: "Custom", features: ["Unlimited Beds", "All Features Included", "Dedicated Account Manager", "Custom Integrations", "White-label Options", "API Access"], cta: "Contact Sales" },
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mx-4 lg:mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Simple Pricing</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose a plan that fits your hostel today—you can upgrade anytime.</p>

        <div className="inline-flex bg-white border-2 border-slate-300 rounded-full p-1 mt-6 shadow-lg">
          <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "monthly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("monthly")}>
            Monthly
          </button>
          <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "yearly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("yearly")}>
            Yearly (Save 20%)
          </button>
        </div>
      </div>

      <div className="relative h-[34rem] max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const offset = (index - head + plans.length) % plans.length;
          const isActive = offset === 0;
          const isRight = offset === 1;
          const isLeft = offset === 2;

          const transform = isActive ? "translateX(-50%) scale(105%)" : isRight ? "translateX(calc(-50% + 280px)) scale(95%)" : "translateX(calc(-50% - 280px)) scale(95%)";
          const opacity = isActive ? 1 : 0.7;
          const zIndex = isActive ? 30 : isRight ? 20 : 10;

          const price = typeof plan.monthly === "string" ? plan.monthly : billing === "monthly" ? `₹${plan.monthly.toLocaleString()}/mo` : `₹${Math.round(plan.yearly).toLocaleString()}/yr`;

          return (
            <div key={plan.id} className={`absolute top-0 left-1/2 w-80 bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer ${isActive ? 'border-blue-500 shadow-2xl' : 'border-slate-200 shadow-lg'}`} style={{ transform, opacity, zIndex }} onClick={() => setHead(index)}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 text-center mb-2">{plan.name}</h3>
                {plan.popular && <p className="text-slate-600 text-center text-sm mb-4">Best for growing hostels</p>}
                <div className="text-4xl font-black text-blue-600 text-center mb-6">{price}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.cta === "Contact Sales" ? (
                  <Link to="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Contact Sales
                  </Link>
                ) : (
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={(e) => { e.stopPropagation(); navigate("/checkout", { state: { plan: plan.name, billing } }); }}>
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HostelFAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = useMemo(() => [
    { id: "dashboard-overview", q: "What can I see on the Admin Dashboard?", a: "Key metrics at a glance: total tenants, available rooms, pending/paid amounts, today's check-ins/outs, recent complaints, notification status, and quick actions (add staff, post notices)." },
    { id: "payments-total-due", q: "How do I see how much a tenant has paid in total and pending?", a: "Open Tenant → Payments → Ledger. It shows billed, paid, discounts, refunds, and the live due amount. You can filter by month or full academic year." },
    { id: "notifications-send", q: "How do I send notices to tenants?", a: "Go to Notifications → Compose. Select recipients (all tenants, block/room, or specific users), write the message, attach an optional image, and send. It appears in the app and via push if enabled." },
    { id: "complaints-view", q: "Where do I see complaints raised by tenants?", a: "Open Complaints → All. Filter by status (Open, In-Progress, Resolved), category (Plumbing, Power, Cleanliness, etc.), and assign to staff with due dates." },
    { id: "tenant-app-capabilities", q: "What can tenants do in the mobile app?", a: "Payments, dues & receipts, food menu, notices, complaints with photos, documents download, and basic profile updates." },
    { id: "general-data-backup", q: "Is data backed up and secure?", a: "Yes. Data is encrypted in transit and backed up daily. Use Settings → Export if you want your own CSV/PDF backups." },
  ], []);

  return (
    <section className="py-20 bg-slate-50 rounded-3xl mx-4 lg:mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-slate-600">Quick answers to common questions about hostel management</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <button className="w-full text-left p-6 flex justify-between items-center gap-4" onClick={() => setOpenId(openId === faq.id ? null : faq.id)}>
              <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
              <span className={`text-blue-600 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Homepage;