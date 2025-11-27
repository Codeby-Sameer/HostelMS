import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    requestAnimationFrame(() => el?.classList.add("opacity-100", "translate-y-0"));
  }, []);

  return (
    <footer
      ref={rootRef}
      className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white transition-all duration-600 opacity-0 translate-y-5"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1 - About */}
          <div className="md:col-span-5">
            <h5 className="font-bold mb-2 flex items-center flex-wrap gap-2">
              <span className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                🏢
              </span>
              <span>DCM's Hostel Management</span>
            </h5>
            <p className="text-sm mb-4 text-blue-100 leading-relaxed">
              The all-in-one platform to manage hostels & PGs: bookings, rent,
              payments, food menu, complaints, staff, and tenant communications.
            </p>

            {/* App store badges */}
            <div className="flex gap-3 flex-wrap">
              <Link 
                to="https://play.google.com/store" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Google Play"
                className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 bg-white rounded-lg p-1 shadow-md"
                />
              </Link>
              <Link 
                to="https://www.apple.com/app-store/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="App Store"
                className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 bg-white rounded-lg p-1 shadow-md"
                />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="md:col-span-3">
            <h6 className="font-semibold mb-3 text-white">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/rooms" 
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Daywise Bookings
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact & Social */}
          <div className="md:col-span-4">
            <h6 className="font-semibold mb-3 text-white">Contact Us</h6>
            <div className="space-y-2 text-sm text-blue-100">
              <p className="flex items-start gap-2">
                <span className="w-4 h-4 mt-0.5 flex-shrink-0">📍</span>
                <span>
                  Office #407 & 409, 4th Floor, Jain Sadguru Image's Capital Park, 
                  Madhapur, Hyderabad.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4">✉️</span>
                <Link 
                  to="mailto:support@hostelapp.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  support@hostelapp.com
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4">📞</span>
                <Link 
                  to="tel:+919876543210" 
                  className="hover:text-white transition-colors duration-200"
                >
                  +91 98765 43210
                </Link>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-3 mt-4 pt-2">
              {[
                { icon: "📘", label: "Facebook", url: "https://facebook.com/hostelapp" },
                { icon: "📷", label: "Instagram", url: "https://instagram.com/hostelapp" },
                { icon: "🐦", label: "X (Twitter)", url: "https://x.com/hostelapp" },
                { icon: "📺", label: "YouTube", url: "https://youtube.com/@hostelapp" },
                { icon: "💬", label: "WhatsApp", url: "https://wa.me/919876543210?text=Hi%20HostelApp" }
              ].map((social) => (
                <Link
                  key={social.label}
                  to={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-10 h-10 rounded-full bg-white/10 border border-white/20 
                    flex items-center justify-center text-white text-lg
                    transition-all duration-300 hover:scale-110 hover:bg-blue-500 
                    hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50
                  "
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-blue-100 text-center md:text-left">
              © {new Date().getFullYear()} DCM's Hostel Management. All rights reserved.
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link 
                to="/privacy" 
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                to="/support" 
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back-to-top */}
      <button
        className={`
          fixed right-5 bottom-5 w-12 h-12 bg-blue-600 text-white rounded-full
          flex items-center justify-center shadow-lg cursor-pointer z-50
          transition-all duration-300 transform hover:bg-blue-700 hover:shadow-xl
          hover:scale-110 active:scale-95
          ${showTopBtn ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
        `}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span className="text-lg font-bold">↑</span>
      </button>
    </footer>
  );
}

export default Footer;