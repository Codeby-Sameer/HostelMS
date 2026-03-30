import { Link } from "react-router-dom";
import {
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
  return (
    <footer
  className="relative mt-0 overflow-hidden bg-gradient-to-b from-[#0d5c63] to-[#083c40] text-white"
>
  <div className="container mx-auto px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

      
      <div className="md:col-span-5">
        <div className="mb-4">
          <img
            src="/img/Levitica1.png"
            alt="Levitica logo"
            className="h-12 w-auto"
          />
        </div>

        <p className="text-sm text-white/70 mb-5 leading-relaxed max-w-md">
          The all-in-one platform to manage hostels & PGs bookings, rent,
          payments, food menu, complaints, staff, and tenant communication.
        </p>

        
        <div className="flex gap-3 flex-wrap">
          <Link to="https://play.google.com/store" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-12 bg-white rounded-lg p-1 shadow-md hover:scale-105 transition"
              alt=""
            />
          </Link>

          <Link to="https://www.apple.com/app-store/" target="_blank">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-12 bg-white rounded-lg p-1 shadow-md hover:scale-105 transition"
              alt=""
            />
          </Link>
        </div>
      </div>

      
      <div className="md:col-span-3">
        <h6 className="font-semibold mb-4 text-white">Quick Links</h6>
        <ul className="space-y-2 text-sm text-white/70">
          {["/", "/about", "/services", "/rooms", "/contact"].map((path, i) => (
            <li key={path}>
              <Link to={path} className="hover:text-white transition-colors">
                {["Home", "About", "Services", "Daywise Bookings", "Contact"][i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="md:col-span-4">
        <h6 className="font-semibold mb-4 text-white">Contact Us</h6>

        <div className="space-y-3 text-sm text-white/70">
          <p className="flex gap-2 items-start">
            <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#7fcac3]" />
            <span>
              Office #407 & 409, Jain Sadguru Image's Capital Park,
              Madhapur, Hyderabad.
            </span>
          </p>

          <p className="flex gap-2 items-center">
            <FaEnvelope className="text-[#7fcac3]" />
            <Link to="mailto:support@hostelapp.com" className="hover:text-white">
              support@hostelapp.com
            </Link>
          </p>

          <p className="flex gap-2 items-center">
            <FaPhoneAlt className="text-[#7fcac3]" />
            <Link to="tel:+919876543210" className="hover:text-white">
              +91 98765 43210
            </Link>
          </p>
        </div>

        
        <div className="flex gap-3 mt-5">
          {socialLinks.map(({ Icon, label, url }) => (
            <Link
              key={label}
              to={url}
              target="_blank"
              className="
                group w-10 h-10 rounded-full
                bg-white/10 border border-white/20
                flex items-center justify-center
                transition-all duration-300
                hover:bg-[#0d5c63] hover:border-[#0d5c63]
                hover:scale-110 hover:shadow-lg hover:shadow-[#0d5c63]/40
              "
            >
              <Icon
                size={18}
                className="text-white/80 group-hover:text-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>

    
    <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
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
