import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { 
      id: "dashboard-overview", 
      q: "What can I see on the Admin Dashboard?", 
      a: "Key metrics at a glance: total tenants, available rooms, pending/paid amounts, today's check-ins/outs, recent complaints, notification status, and quick actions (add staff, post notices).",
      category: "Dashboard"
    },
    { 
      id: "payments-total-due", 
      q: "How do I see how much a tenant has paid in total and pending?", 
      a: "Open Tenant → Payments → Ledger. It shows billed, paid, discounts, refunds, and the live due amount. You can filter by month or full academic year.",
      category: "Payments"
    },
    { 
      id: "notifications-send", 
      q: "How do I send notices to tenants?", 
      a: "Go to Notifications → Compose. Select recipients (all tenants, block/room, or specific users), write the message, attach an optional image, and send. It appears in the app and via push if enabled.",
      category: "Communication"
    },
    { 
      id: "complaints-view", 
      q: "Where do I see complaints raised by tenants?", 
      a: "Open Complaints → All. Filter by status (Open, In-Progress, Resolved), category (Plumbing, Power, Cleanliness, etc.), and assign to staff with due dates.",
      category: "Maintenance"
    },
    { 
      id: "tenant-app-capabilities", 
      q: "What can tenants do in the mobile app?", 
      a: "Payments, dues & receipts, food menu, notices, complaints with photos, documents download, and basic profile updates.",
      category: "Mobile App"
    },
    { 
      id: "general-data-backup", 
      q: "Is data backed up and secure?", 
      a: "Yes. Data is encrypted in transit and backed up daily. Use Settings → Export if you want your own CSV/PDF backups.",
      category: "Security"
    },
  ];

  const faqCategories = ["All", "Dashboard", "Payments", "Communication", "Maintenance", "Mobile App", "Security"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            SUPPORT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Quick answers to common questions about hostel management
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center gap-4"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex w-10 h-10 bg-blue-50 rounded-lg items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold">?</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-lg">{faq.q}</h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    <div className="pl-0 sm:pl-14">
                      <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-4">
                <MessageCircle className="w-4 h-4" />
                NEED MORE HELP?
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-xl mx-auto">
                Our dedicated support team is available to help you with any questions about our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Support Team
                </Link>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-6">
                Average response time: 2 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;