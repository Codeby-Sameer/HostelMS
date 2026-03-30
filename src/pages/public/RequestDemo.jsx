import { useState } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaRegClipboard,
  FaUser,
} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  beds: "",
  city: "",
  demoType: "Live product demo",
  message: "",
};

export default function RequestDemo() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.organization) {
      setStatus("Please fill name, email, phone, and organization.");
      return;
    }

    console.log("Demo request submitted:", form);
    setStatus("Demo request submitted successfully. Our team will reach out shortly.");
    setForm(initialForm);
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-[#f3f4f6] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f4f3] px-5 py-2 text-sm font-semibold text-[#0d5c63]">
              <FaCalendarAlt />
              Request Demo
            </div>

            <h1 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              See The Hostel Management Platform In Action
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Book a guided walkthrough for bookings, rooms, KYC, payments, notices,
              maintenance, and tenant operations tailored to your hostel workflow.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl border border-[#dcebea] bg-[linear-gradient(135deg,#f8fffe_0%,#eef8f7_100%)] p-8 shadow-[0_14px_40px_rgba(13,92,99,0.08)]">
              <h2 className="text-2xl font-bold text-slate-900">What You’ll See</h2>
              <div className="mt-8 space-y-5">
                {[
                  "Live walkthrough of admin dashboard and room allocation flow",
                  "Payments, receipts, reminders, and occupancy tracking overview",
                  "Tenant app, complaints, notices, and day-wise stay process",
                  "Recommended setup based on your hostel size and operations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d5c63] text-white">
                      <FaCheckCircle size={14} />
                    </div>
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Best for
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">Hostel Owners</p>
                    <p className="mt-1 text-sm text-slate-600">See how operations can be centralized.</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">Wardens & Teams</p>
                    <p className="mt-1 text-sm text-slate-600">Review everyday workflows and task control.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-bold text-slate-900">Book Your Demo</h2>
              <p className="mt-2 text-slate-600">
                Share a few details and our team will schedule the right walkthrough.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Your Name *</span>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                        placeholder="John Doe"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Email *</span>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                        placeholder="john@example.com"
                      />
                    </div>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Phone *</span>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Organization *</span>
                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                        placeholder="Your hostel / PG / institution"
                      />
                    </div>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Beds</span>
                    <input
                      name="beds"
                      value={form.beds}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                      placeholder="120"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">City</span>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                      placeholder="Hyderabad"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Demo Type</span>
                    <select
                      name="demoType"
                      value={form.demoType}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                    >
                      <option>Live product demo</option>
                      <option>Pricing discussion</option>
                      <option>White-label demo</option>
                      <option>Implementation walkthrough</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">What would you like to see?</span>
                  <div className="relative">
                    <FaRegClipboard className="absolute left-4 top-4 text-slate-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                      placeholder="Tell us about your current setup, challenges, or the modules you'd like to see in the demo."
                    />
                  </div>
                </label>

                {status && (
                  <div className="rounded-xl border border-[#b9ddda] bg-[#eef8f7] px-4 py-3 text-sm font-medium text-[#0d5c63]">
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Submit Demo Request
                  <FaCalendarAlt />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
