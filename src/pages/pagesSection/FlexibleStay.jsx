import React from "react";
import { Link } from "react-router-dom";
import { CalendarMinus2Icon } from "lucide-react";

function FlexibleStay() {
  return (
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
            <CalendarMinus2Icon/> Explore Flexible Stays
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FlexibleStay;