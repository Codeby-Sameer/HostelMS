import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

const featureCards = [
  {
    icon: WalletCards,
    title: "Pay Per Day",
    description:
      "Stay for only the days you need and pay with precise day-wise billing instead of rigid monthly commitments.",
    step: "Step 01",
    accent: "bg-[#e6f4f3] text-[#0d5c63]",
  },
  {
    icon: CalendarDays,
    title: "Real-time Booking",
    description:
      "Check availability instantly, confirm rooms faster, and keep booking decisions simple for both staff and residents.",
    step: "Step 02",
    accent: "bg-[#eef8ff] text-[#1b7f8e]",
  },
  {
    icon: Clock3,
    title: "Zero Lock-in",
    description:
      "Extend or shorten stays anytime with flexible duration controls and no unnecessary lock-in pressure.",
    step: "Step 03",
    accent: "bg-[#fff6df] text-[#8a6720]",
  },
];

function FlexibleStay() {
  return (
    <section className="bg-gradient-to-br from-[#edf2ec] via-[#e1eeec] to-[#e6f1ef] px-5 py-16 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f4f3] px-5 py-2 text-sm font-semibold text-[#0d5c63]">
            <BadgeCheck className="h-4 w-4" />
            The Flexible Revolution
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
            Pay Only For The{" "}
            <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
              Days You Stay
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Designed for modern hostel living where flexibility matters most. Let
            residents book by the day, pay only for actual stay duration, and move
            without unnecessary commitment.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <img
                src="/img/Booking.jpeg"
                alt="Flexible day-wise booking"
                className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 2xl:h-[430px]"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Day-wise stays", "Instant confirmation", "Flexible duration"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#d9ece9] bg-white px-4 py-2 text-sm font-semibold text-[#0d5c63] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d5c63] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#09454a]"
              >
                Explore Flexible Stays
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#0d5c63] px-8 py-4 text-base font-semibold text-[#0d5c63] transition-all duration-300 hover:bg-[#0d5c63] hover:text-white"
              >
                Talk To Our Team
              </Link>
            </div>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-[#7fcac3]/20 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-40 w-40 rounded-full bg-[#f4d58d]/20 blur-3xl" />

            <div className="relative z-10 grid gap-5">
              {featureCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ x: -6, y: -2 }}
                    className={`rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,92,99,0.16)] ${
                      index === 1 ? "lg:ml-8" : index === 2 ? "lg:ml-16" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {card.step}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FlexibleStay;
