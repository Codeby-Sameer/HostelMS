import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Headphones,
  CalendarMinus2Icon,
} from "lucide-react";
import HeroSection from "./pagesSection/HeroSection";
function Homepage() {
  

  const whyChoose = [
    {
      title: "Reliable & Secure",
      desc: "Enterprise-grade security with encrypted data, secure access, and dependable uptime you can trust.",
      icon: ShieldCheck,
    },
    {
      title: "Fast & Automated",
      desc: "From onboarding to payments, everything is automated to save time and eliminate manual errors.",
      icon: Zap,
    },
    {
      title: "Support That Cares",
      desc: "Responsive support and onboarding assistance whenever you or your tenants need help.",
      icon: Headphones,
    },
  ];
  const productBlocks = [
    {
      title: "Tenant Application",
      desc: "Empower residents with complete self-service: book rooms, pay online, raise complaints, and track services — all from their phone. Less dependency on wardens, more transparency and speed.",
      bullets: [
        "Easy booking & room allocation",
        "Pay rent online (UPI / NetBanking)",
        "Instant PDF receipts",
        "Raise complaints & track status",
      ],
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "Try Tenant App", to: "/contact" },
    },
    {
      title: "Admin Application",
      desc: "Get end-to-end visibility into hostel operations from one dashboard. Configure settings, monitor activities, manage staff and communicate with stakeholders in real-time.",
      bullets: [
        "Support for Deans, Directors, Wardens & Caretakers",
        "Real-time operational monitoring",
        "Approvals, alerts & notifications",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "Get a Live Demo", to: "/contact" },
    },
    {
      title: "Reports in Admin",
      desc: "Bring clarity with built-in reports. Track occupancy, payments, complaints and more with visual dashboards and exportable summaries.",
      bullets: [
        "Occupancy & movement insights",
        "Approve workflow requests",
        "Broadcast announcements",
        "Security & audit logs",
      ],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
      cta: { label: "See How It Works", to: "/contact" },
    },
  ];

  

  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* ABOUT SECTION */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto w-[92vw] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aos">
            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 mb-6">
              Comprehensive Hostel Management Solution
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our platform transforms how hostels operate by digitizing every aspect of management.
              From room allocation to payment processing and maintenance tracking, we provide a seamless experience for both administrators and residents.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Smart dashboard with real-time analytics</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Automated room allotment and tenant onboarding</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Secure online payments with instant receipts</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Maintenance and complaint tracking system</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Broadcast announcements and notices</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>Digital KYC and document management</li>
            </ul>
          </div>
          <div className="aos">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70"
              alt="Modern Hostel Interior"
              className="w-full rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto w-[92vw] text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
            Why choose us?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            We built it for reliability, speed, and ease—right out of the box.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="aos bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 mx-auto mb-6">
                    <Icon className="text-white" size={28} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}


      {/* FLEXIBLE STAY OPTIONS */}
      {/* <section className="py-20 bg-white">
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
      </section> */}

      {/* HOW IT WORKS */}
      {/* <HowItWorks /> */}

      {/* PRODUCT SECTIONS */}
      {/* <section className="py-10 mt-4 bg-white">
        <div className="max-w-6xl mx-auto w-[92vw] text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Complete Management Ecosystem</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Three powerful applications working seamlessly together</p>

          {productBlocks.map((block, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`aos ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={block.img} alt={block.title} className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-slate-900/10" loading="lazy" />
              </div>
              <div className={`aos ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">{block.title}</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{block.desc}</p>
                <ul className="space-y-3 mb-8">
                  {block.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link to={block.cta.to} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  {block.cta.label} ↓
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* PRICING */}
      {/* <SubscriptionQueue /> */}

 

      {/* FAQ */}
      <HostelFAQ />


    </>
  );
}


function HowItWorks() {
  const steps = [
    { num: 1, title: "Complete Registration", desc: "Create your account and set up your hostel profile in minutes" },
    { num: 2, title: "Manage Bookings", desc: "Accept bookings, manage check-ins, and track occupancy in real-time" },
    { num: 3, title: "Grow Your Business", desc: "Use analytics to optimize operations and enhance resident experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-600 to-slate-500 text-white relative overflow-hidden">
     
      <div className="max-w-6xl mx-auto w-[92vw] text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-4">How It Works</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Get your hostel management system up and running in three simple steps</p>

        <div className="relative">


          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/25 mx-auto mb-6 ">
                  {step.num}
                </div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionQueue() {
  const navigate = useNavigate();
  const [head, setHead] = useState(1);
  const [billing, setBilling] = useState("monthly");

  const plans = useMemo(() => [
    { id: 1, name: "Starter Plan", monthly: 999, yearly: 999 * 12 * 0.8, features: ["Up to 50 Beds", "Basic Features", "Mobile App Access", "Email Support", "Standard Reports"], cta: "Buy Now" },
    { id: 2, name: "Professional Plan", monthly: 2499, yearly: 2499 * 12 * 0.8, features: ["Up to 200 Beds", "All Basic Features", "Advanced Analytics", "Priority Support", "Custom Branding", "Multiple Locations"], popular: true, cta: "Buy Now" },
    { id: 3, name: "Enterprise Plan", monthly: "Custom", yearly: "Custom", features: ["Unlimited Beds", "All Features Included", "Dedicated Account Manager", "Custom Integrations", "White-label Options", "API Access"], cta: "Contact Sales" },
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl mx-4 lg:mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Simple Pricing</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose a plan that fits your hostel today—you can upgrade anytime.</p>

        <div className="inline-flex bg-white border-2 border-slate-300 rounded-full p-1 mt-6 shadow-lg">
          <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "monthly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("monthly")}>
            Monthly
          </button>
          <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "yearly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("yearly")}>
            Yearly (Save 20%)
          </button>
        </div>
      </div>

      <div className="relative h-[34rem] max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const offset = (index - head + plans.length) % plans.length;
          const isActive = offset === 0;
          const isRight = offset === 1;
          const isLeft = offset === 2;

          const transform = isActive ? "translateX(-50%) scale(105%)" : isRight ? "translateX(calc(-50% + 280px)) scale(95%)" : "translateX(calc(-50% - 280px)) scale(95%)";
          const opacity = isActive ? 1 : 0.7;
          const zIndex = isActive ? 30 : isRight ? 20 : 10;

          const price = typeof plan.monthly === "string" ? plan.monthly : billing === "monthly" ? `₹${plan.monthly.toLocaleString()}/mo` : `₹${Math.round(plan.yearly).toLocaleString()}/yr`;

          return (
            <div key={plan.id} className={`absolute top-0 left-1/2 w-80 bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer ${isActive ? 'border-blue-500 shadow-2xl' : 'border-slate-200 shadow-lg'}`} style={{ transform, opacity, zIndex }} onClick={() => setHead(index)}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 text-center mb-2">{plan.name}</h3>
                {plan.popular && <p className="text-slate-600 text-center text-sm mb-4">Best for growing hostels</p>}
                <div className="text-4xl font-black text-blue-600 text-center mb-6">{price}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.cta === "Contact Sales" ? (
                  <Link to="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Contact Sales
                  </Link>
                ) : (
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={(e) => { e.stopPropagation(); navigate("/checkout", { state: { plan: plan.name, billing } }); }}>
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HostelFAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = useMemo(() => [
    { id: "dashboard-overview", q: "What can I see on the Admin Dashboard?", a: "Key metrics at a glance: total tenants, available rooms, pending/paid amounts, today's check-ins/outs, recent complaints, notification status, and quick actions (add staff, post notices)." },
    { id: "payments-total-due", q: "How do I see how much a tenant has paid in total and pending?", a: "Open Tenant → Payments → Ledger. It shows billed, paid, discounts, refunds, and the live due amount. You can filter by month or full academic year." },
    { id: "notifications-send", q: "How do I send notices to tenants?", a: "Go to Notifications → Compose. Select recipients (all tenants, block/room, or specific users), write the message, attach an optional image, and send. It appears in the app and via push if enabled." },
    { id: "complaints-view", q: "Where do I see complaints raised by tenants?", a: "Open Complaints → All. Filter by status (Open, In-Progress, Resolved), category (Plumbing, Power, Cleanliness, etc.), and assign to staff with due dates." },
    { id: "tenant-app-capabilities", q: "What can tenants do in the mobile app?", a: "Payments, dues & receipts, food menu, notices, complaints with photos, documents download, and basic profile updates." },
    { id: "general-data-backup", q: "Is data backed up and secure?", a: "Yes. Data is encrypted in transit and backed up daily. Use Settings → Export if you want your own CSV/PDF backups." },
  ], []);

  return (
    <section className="py-20 bg-slate-50 rounded-3xl mx-4 lg:mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-slate-600">Quick answers to common questions about hostel management</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <button className="w-full text-left p-6 flex justify-between items-center gap-4" onClick={() => setOpenId(openId === faq.id ? null : faq.id)}>
              <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
              <span className={`text-blue-600 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Homepage;