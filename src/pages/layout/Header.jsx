import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignInAlt,
  FaDownload,
  FaStar,
  FaBroom,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/features", label: "Features", icon: FaStar },
  { to: "/rooms", label: "Rooms", icon: FaBroom },
  { to: "/about", label: "About Us", icon: FaInfoCircle },
  { to: "/contact", label: "Contact", icon: FaPhoneAlt },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const closeBtnRef = useRef(null);
  const location = useLocation();

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/90 backdrop-blur-md border-b border-slate-200
        ${sticky ? "shadow-lg shadow-slate-200/60" : ""}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          
          <Link to="/" className="flex items-center gap-2">
            <img src="/img/Levitica.png" alt="Levitica logo" className="h-9 w-auto sm:h-10" />
          </Link>

          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-semibold text-sm relative transition ${
                  location.pathname === to
                    ? "text-[#0d5c63]"
                    : "text-slate-700 hover:text-[#0d5c63]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#0d5c63] transition-all ${
                    location.pathname === to ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}

            
            <Link
              to="/login"
              className="px-4 py-2 border border-[#cfe8e6] rounded-xl font-semibold text-sm text-[#0d5c63]
              hover:bg-[#e6f4f3] transition"
            >
              Login
            </Link>

            
            <Link
              to="/contact"
              className="px-4 py-2 rounded-xl font-semibold text-sm bg-[#e6f4f3] text-[#0d5c63]
              hover:bg-[#d1eeec] transition"
            >
              Download
            </Link>

            
            <Link
              to="/request-demo"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white
              bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e]
              hover:shadow-lg hover:shadow-[#0d5c63]/30 hover:-translate-y-0.5
              transition-all duration-300"
            >
              Request Demo
            </Link>
          </nav>

          
          <button
            onClick={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 lg:hidden ${
              open
                ? "border-[#0d5c63] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white shadow-[#0d5c63]/20"
                : "border-[#cfe8e6] bg-white text-[#0d5c63] hover:border-[#0d5c63] hover:bg-[#eef8f7]"
            }`}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      
      <div className="h-16" />

      
      {open && (
        <div className="fixed inset-0 bg-black/40 z-[1000]" onClick={close} />
      )}

      
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[1100]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <span className="font-bold text-lg text-[#0d5c63]">Menu</span>
          <button
            ref={closeBtnRef}
            onClick={close}
            className="w-10 h-10 flex items-center justify-center border rounded-lg"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-semibold ${
                location.pathname === to
                  ? "bg-[#e6f4f3] text-[#0d5c63]"
                  : "text-slate-700 hover:bg-slate-100 hover:text-[#0d5c63]"
              }`}
            >
              <Icon /> {label}
            </Link>
          ))}
        </div>

        
        <div className="mt-auto p-4 border-t flex flex-col gap-3">

          <Link
            to="/login"
            onClick={close}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-[#cfe8e6] rounded-xl font-semibold text-[#0d5c63]"
          >
            <FaSignInAlt /> Login
          </Link>

          <Link
            to="/contact"
            onClick={close}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#e6f4f3] text-[#0d5c63] font-semibold"
          >
            <FaDownload /> Download
          </Link>

          <Link
            to="/request-demo"
            onClick={close}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
            bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white font-semibold"
          >
            Request Demo
          </Link>

        </div>
      </aside>
    </>
  );
};

export default Navbar;
