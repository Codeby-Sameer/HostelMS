import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook", url: "https://facebook.com/hostelapp" },
  { Icon: FaInstagram, label: "Instagram", url: "https://instagram.com/hostelapp" },
  { Icon: FaXTwitter, label: "X (Twitter)", url: "https://x.com/hostelapp" },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    url: "https://wa.me/919876543210?text=Hi%20HostelApp",
  },
];

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() =>
      rootRef.current?.classList.add("opacity-100", "translate-y-0")
    );
  }, []);

  return (
    <footer
      ref={rootRef}
      className="bg-gradient-to-b from-blue-900 to-blue-900 text-white transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* About */}
          <div className="md:col-span-5">
            <h5 className="font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <FaBuilding size={16} />
              </span>
              <span>DCM's Hostel Management</span>
            </h5>

            <p className="text-sm text-blue-100 mb-5 leading-relaxed max-w-md">
              The all-in-one platform to manage hostels & PGs — bookings, rent,
              payments, food menu, complaints, staff, and tenant communication.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link to="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  className="h-12 bg-white rounded-lg p-1 shadow-md hover:scale-105 transition"
                  alt="Google Play"
                />
              </Link>

              <Link to="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  className="h-12 bg-white rounded-lg p-1 shadow-md hover:scale-105 transition"
                  alt="App Store"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h6 className="font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-sm text-blue-100">
              {["/", "/about", "/services", "/rooms", "/contact"].map((path, i) => (
                <li key={path}>
                  <Link to={path} className="hover:text-white transition-colors">
                    {["Home", "About", "Services", "Daywise Bookings", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h6 className="font-semibold mb-4">Contact Us</h6>

            <div className="space-y-3 text-sm text-blue-100">
              <p className="flex gap-2 items-start">
                <FaMapMarkerAlt className="mt-0.5 shrink-0" />
                <span>
                  Office #407 & 409, Jain Sadguru Image's Capital Park,
                  Madhapur, Hyderabad.
                </span>
              </p>

              <p className="flex gap-2 items-center">
                <FaEnvelope />
                <Link to="mailto:support@hostelapp.com" className="hover:text-white">
                  support@hostelapp.com
                </Link>
              </p>

              <p className="flex gap-2 items-center">
                <FaPhoneAlt />
                <Link to="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </Link>
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ Icon, label, url }) => (
                <Link
                  key={label}
                  to={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="
                    group w-10 h-10 rounded-full
                    bg-white border border-white
                    flex items-center justify-center
                    transition-all duration-300
                    hover:bg-blue-600 hover:border-blue-600
                    hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40
                  "
                >
                  <Icon
                    size={18}
                    className="text-slate-700 transition-colors duration-300 group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">
          <span>© {new Date().getFullYear()} DCM's Hostel Management</span>

          <div className="flex gap-6">
            {["/privacy", "/terms", "/support"].map((p) => (
              <Link key={p} to={p} className="hover:text-white transition">
                {p.replace("/", "").toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

    
    </footer>
  );
}

export default Footer;
