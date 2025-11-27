import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const closeBtnRef = useRef(null);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  // Close on Escape & focus the Back button when menu opens
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    if (isOpen) {
      window.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 py-3 bg-white z-50 transition-shadow duration-300 ${
        isSticky ? 'shadow-lg' : ''
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-15 grid grid-cols-3 items-center gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="DCM Home">
            <img 
              src="img/image.png" 
              alt="DCM Logo" 
              className="h-14 w-auto max-w-full object-contain ml-1.5"
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex gap-5 lg:gap-6 list-none m-0 p-0">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-900 font-semibold text-sm tracking-wide no-underline px-1 py-1 relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/Features" 
                  className="text-gray-900 font-semibold text-sm tracking-wide no-underline px-1 py-1 relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-900 font-semibold text-sm tracking-wide no-underline px-1 py-1 relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-900 font-semibold text-sm tracking-wide no-underline px-1 py-1 relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center justify-end space-x-2">
            <Link 
              to="/login" 
              className="px-3 py-2 rounded-lg font-bold text-sm border-2 border-gray-300 bg-white text-gray-900 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:border-transparent hover:text-white transition-all duration-200 active:translate-y-px"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-3 py-2 rounded-lg font-bold text-sm border-2 border-gray-300 bg-white text-gray-900 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:border-transparent hover:text-white transition-all duration-200 active:translate-y-px"
            >
              Sign Up
            </Link>
            <Link 
              to="/contact" 
              className="px-3 py-2 rounded-lg font-bold text-sm border-2 border-blue-600 bg-blue-600 text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 active:translate-y-px"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden flex flex-col justify-center items-center w-9 h-9 border-0 bg-transparent cursor-pointer gap-1.5 justify-self-end transition-all duration-300 ${
              isOpen ? 'open' : ''
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${
              isOpen ? 'transform translate-y-1.5 rotate-45' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-gray-900 rounded transition-all duration-300 ${
              isOpen ? 'transform -translate-y-1.5 -rotate-45' : ''
            }`} />
          </button>
        </div>
      </nav>

      {/* Spacer to offset fixed navbar height */}
      <div className="h-16" aria-hidden="true" />

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Mobile Header */}
          <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-lg grid grid-cols-3 items-center gap-2 px-3 z-[1300]">
            <button
              ref={closeBtnRef}
              className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 font-bold text-sm cursor-pointer hover:border-gray-900 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ← Back
            </button>
            <div className="text-center font-extrabold tracking-wide text-sm">Menu</div>
            <button
              className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 font-bold text-sm cursor-pointer hover:border-gray-900 transition-colors justify-self-end"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div
            id="mobile-menu"
            className="fixed inset-0 bg-white z-[1200] flex flex-col items-center gap-4 pt-20 px-4 pb-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <Link 
              to="/" 
              className="w-full max-w-md text-center text-2xl font-bold text-gray-900 no-underline py-3 border-b border-dashed border-gray-200 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/Features" 
              className="w-full max-w-md text-center text-2xl font-bold text-gray-900 no-underline py-3 border-b border-dashed border-gray-200 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="w-full max-w-md text-center text-2xl font-bold text-gray-900 no-underline py-3 border-b border-dashed border-gray-200 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="w-full max-w-md text-center text-2xl font-bold text-gray-900 no-underline py-3 border-b border-dashed border-gray-200 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <Link 
              to="/login" 
              className="w-full max-w-md px-4 py-3 rounded-lg font-bold text-base border-2 border-gray-300 bg-white text-gray-900 text-center no-underline hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:border-transparent hover:text-white transition-all duration-200"
              onClick={closeMenu}
            >
              Log in
            </Link>
            <Link 
              to="/register" 
              className="w-full max-w-md px-4 py-3 rounded-lg font-bold text-base border-2 border-gray-300 bg-white text-gray-900 text-center no-underline hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:border-transparent hover:text-white transition-all duration-200"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
            <Link 
              to="/contact" 
              className="w-full max-w-md px-4 py-3 rounded-lg font-bold text-base border-2 border-blue-600 bg-blue-600 text-white text-center no-underline hover:bg-gray-900 hover:border-gray-900 transition-all duration-200"
              onClick={closeMenu}
            >
              Download App
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;