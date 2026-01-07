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

  /* Sticky shadow */
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* ESC close */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    if (open) {
      window.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 md:py-2 py-1 right-0 z-50
          bg-white backdrop-blur
          transition-all duration-300
          ${sticky ? "shadow-xl" : "shadow-sm"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img/image.png"
              alt="DCM Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-semibold text-sm relative transition ${
                  location.pathname === to
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                    location.pathname === to ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}

            <Link
              to="/login"
              className="px-4 py-2 border-2 rounded-lg font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition"
            >
              Login
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Download App
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={toggle}
            aria-label="Open menu"
            aria-expanded={open}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border bg-white text-gray-900 z-[60]"
          >
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16" />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[1000]"
          onClick={close}
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[1100]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b">
          <span className="font-bold text-lg">Menu</span>
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
                  ? "bg-blue-50 text-blue-700"
                  : "hover:bg-gray-100"
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
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-xl font-bold"
          >
            <FaSignInAlt /> Login
          </Link>

          <Link
            to="/contact"
            onClick={close}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold"
          >
            <FaDownload /> Download App
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
