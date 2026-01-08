import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const pgSlides = [
  {
    key: "kyc",
    title: "Welcome to Hostel Management",
    desc:
      "A modern digital platform to manage hostels, PGs, and daily room bookings effortlessly.",
    bullets: [
      "Digital KYC & police verification",
      "Smart bed & room auto-allocation",
      "Instant PDF agreements & receipts",
    ],
    badge: "KYC & Onboarding",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "payments",
    title: "Stress-free Rent & Room Payments",
    desc:
      "Collect daily, weekly, or monthly payments with automatic reconciliation and reminders.",
    bullets: [
      "UPI, Cards & NetBanking",
      "Auto invoices & late fee tracking",
      "One-click receipts for tenants",
    ],
    badge: "Payments",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  },
  {
  key: "day-booking",
  title: "Book Rooms by Day ",
  desc:
    "Allow guests to book rooms on a daily basis with instant confirmation, flexible check-in, and transparent pricing.",
  bullets: [
    "Daily room booking with check-in & check-out",
    "Real-time availability & instant confirmation",
    "Transparent pricing with no hidden charges",
  ],
  badge: "Daily Booking",
  img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b8?auto=format&fit=crop&w=1400&q=80",
}
,
{
  key: "mobile-app",
  title: "Powerful Mobile App for Admins & Tenants",
  desc:
    "Manage hostels on the go while tenants track payments, bookings, complaints, and announcements directly from the app.",
  bullets: [
    "Admin app to manage rooms, payments & tenants",
    "Tenant app for bookings, rent & complaints",
    "Push notifications for reminders & updates",
  ],
  badge: "Mobile App",
  img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
}
,
  {
    key: "requests",
    title: "Manage Requests Without Chaos",
    desc:
      "From maintenance to mess menus, keep tenants informed and issues resolved on time.",
    bullets: [
      "Maintenance tickets with photos",
      "Announcements & mess menus",
      "Staff assignment & SLA tracking",
    ],
    badge: "Operations",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = pgSlides[activeIndex];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden md:py-1 py-3">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-3 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
            {activeSlide.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 leading-tight mb-5 transition-all">
            {activeSlide.title}
          </h1>

          <p className="md:text-lg text-base text-slate-600 mb-7 max-w-xl mx-auto lg:mx-0 transition-all">
            {activeSlide.desc}
          </p>

          <ul className="space-y-2 mb-7">
            {activeSlide.bullets.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-slate-700"
              >
                <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition"
            >
              Get Started  <FaArrowRight />
            </button></Link>

            <Link to="/contact">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
              >
                Live Demo
            </button></Link>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full max-w-2xl mx-auto h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {pgSlides.map((slide) => (
              <SwiperSlide key={slide.key}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
