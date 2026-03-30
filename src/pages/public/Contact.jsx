import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaChevronDown } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [status, setStatus] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqItems = [
    { id: 1, question: "What is HostelMS?", answer: "HostelMS is a comprehensive hostel management system designed to streamline operations, manage bookings, automate billing, track maintenance, and improve communication between staff and residents." },
    { id: 2, question: "How can HostelMS help my hostel?", answer: "Our platform helps reduce administrative overhead, minimize errors, improve resident satisfaction, and provide real-time insights into your hostel operations with an intuitive dashboard." },
    { id: 3, question: "Is there a free trial available?", answer: "Yes! We offer a 14-day free trial for all new customers. No credit card required. Experience all features with your complete hostel data." },
    { id: 4, question: "What support do you provide?", answer: "We provide 24/7 customer support via email, phone, and live chat. Our team is always ready to help with any questions or issues you might encounter." },
    { id: 5, question: "Can I integrate HostelMS with my existing systems?", answer: "Absolutely! HostelMS integrates seamlessly with popular accounting software, payment gateways, and communication platforms to enhance your workflow." },
    { id: 6, question: "What about data security and privacy?", answer: "We prioritize your data security with enterprise-grade encryption, regular backups, GDPR compliance, and strict access controls to protect your sensitive information." }
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setStatus("Please fill in your name, email and message.");
      return;
    }
    console.log("Form submitted:", form);
    setStatus("Message sent successfully! We'll get back to you within 24 hours.");
    setForm({ firstName: "", lastName: "", email: "", company: "", phone: "", message: "", budget: "" });
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f4f6] via-white to-[#f8fbfb]">
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-16 md:py-20"
        style={{ backgroundImage: "url('/img/Touch1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#06282d]/52 backdrop-blur-[2px]"></div>
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#9dd9d2] opacity-25 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f0d9a7] opacity-20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl">
          <div className="space-y-6 rounded-3xl border border-white/50 bg-white/18 p-8 text-center shadow-[0_30px_80px_rgba(6,40,45,0.18)] backdrop-blur-2xl transition-all duration-500 hover:border-white/60 hover:bg-white/24 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/16 px-5 py-2.5 shadow-sm">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 rounded-full bg-white animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-white animate-ping"></div>
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/95">
                24/7 Support Available
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#d9f3ef] via-white to-[#f0d9a7] bg-clip-text text-transparent">
                HostelMS
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl">
              Reach out for bookings, onboarding help, product support, or a personalized walkthrough of how HostelMS can simplify your property management.
            </p>

            <div className="mx-auto grid max-w-3xl gap-4 py-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/30 bg-white/14 p-4 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold">Fast replies</p>
                <p className="mt-1 text-sm text-white/75">Response within 24 hours</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/14 p-4 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold">Expert team</p>
                <p className="mt-1 text-sm text-white/75">Product and onboarding support</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/14 p-4 text-white backdrop-blur-sm">
                <p className="text-sm font-semibold">Free consult</p>
                <p className="mt-1 text-sm text-white/75">Tailored demo for your hostel</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
              <a
                href="#contact-form"
                className="rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-8 py-3.5 font-semibold text-white shadow-lg transition hover:scale-105 hover:from-[#09454a] hover:to-[#166774]"
              >
                Contact Us
              </a>
              <Link to="/request-demo">
                <button className="rounded-xl border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/20 backdrop-blur-sm">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Quick Contact Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl border border-[#d7e7e4] bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#e6f4f3] transition-transform duration-300 group-hover:scale-110">
                <FaPhone className="text-2xl text-[#0d5c63]" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team for immediate assistance with bookings or technical issues.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+918008682560"
                  className="group/btn flex items-center justify-between rounded-xl bg-[#eef8f7] px-5 py-3 font-semibold text-[#0d5c63] transition-colors hover:bg-[#e6f4f3]"
                >
                  <span>+91 8008682560</span>
                  <FaPhone className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/918008682560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#edf8f2] px-5 py-3 font-semibold text-[#13876f] transition-colors hover:bg-[#e1f3ea]"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="group rounded-2xl border border-[#d7e7e4] bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#eef8f7] transition-transform duration-300 group-hover:scale-110">
                <FaEnvelope className="text-2xl text-[#1b7f8e]" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us detailed queries and we'll respond with comprehensive solutions within 24 hours.
              </p>
              <a
                href="mailto:hr@learning.designcareermetrics.com"
                className="group/btn flex items-center justify-between rounded-xl bg-[#eef8f7] px-5 py-3 font-semibold text-[#1b7f8e] transition-colors hover:bg-[#e6f4f3]"
              >
                <span className="truncate">hr@leviticatechnologies.com</span>
                <FaEnvelope className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Response time: Within 24 hours
              </p>
            </div>

            <div className="group rounded-2xl border border-[#e7deca] bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#faf3df] transition-transform duration-300 group-hover:scale-110">
                <FaMapMarkerAlt className="text-2xl text-[#c79a3b]" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">Visit Us</h3>
              <p className="text-gray-600 mb-6">
                Our office is located in Hyderabad. Schedule a visit for a detailed demo of our hostel solutions.
              </p>
              <div className="mb-4 rounded-xl bg-[#fbfaf6] p-4">
                <p className="text-gray-700 font-medium">
                 Levitica Technologies Pvt Ltd<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Design+Career+Metrics+Pvt+Ltd/@17.4579659,78.4237526,12z/data=!4m6!3m5!1s0x3bcb910838be5b35:0xfa8c53166a450046!8m2!3d17.4579659!4d78.5053877!16s%2Fg%2F11rw2sypv9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#faf3df] px-5 py-3 font-semibold text-[#a77a22] transition-colors hover:bg-[#f6ecd0]"
              >
                <FaMapMarkerAlt />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[1fr_0.9fr] lg:items-stretch">

          <div className="bg-white p-10 text-slate-900 lg:p-14">

            <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Let's <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">work together</span>
            </h2>
            <p className="mb-10 text-slate-600">
              Transform your hostel operations with our comprehensive management solution. Contact us for a personalized demo and consultation.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Hostel/Organization Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  How can we help you?
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-[#d7e7e4] bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:ring-2 focus:ring-[#0d5c63]/15"
                ></textarea>
              </div>
              {status && (
                <div className={`rounded-xl border p-4 ${status.includes("successfully") ? "border-[#b7e4cf] bg-[#edf8f2] text-[#13876f]" : "border-[#b9ddda] bg-[#eef8f7] text-[#0d5c63]"}`}>
                  {status}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-xl"
                >
                  Send message
                </button>
              </div>

            </form>
          </div>

          <div className="hidden h-full flex-col bg-gradient-to-br from-[#eef8f7] to-[#f8fbfb] p-8 lg:flex lg:p-10">
            <div className="mb-6 rounded-2xl border border-[#d7e7e4] bg-white/80 px-6 py-6 text-center shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1b7f8e]">
                Our Location
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 xl:text-3xl">
                Levitica Technologies Pvt Ltd
              </h3>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#0d5c63] to-[#9dd9d2]" />
              <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-600">
                Hyderabad, Telangana, India
              </p>
            </div>

            <div className="mt-4 flex-1 flex items-center">
              <div className="w-full overflow-hidden rounded-2xl border border-[#d7e7e4] bg-white shadow-lg">
              <iframe
                title="Levitica Technologies Location"
                className="h-[380px] w-full border-0 xl:h-[430px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.331292031365!2d78.38304587540443!3d17.443850583452964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1774860090227!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.331292031365!2d78.38304587540443!3d17.443850583452964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1774860090227!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
            </div>
            
            <div className="pt-6 space-y-3">
              <a
                href="https://www.google.com/maps/place/Design+Career+Metrics+Pvt+Ltd/@17.4579659,78.4237526,12z/data=!4m6!3m5!1s0x3bcb910838be5b35:0xfa8c53166a450046!8m2!3d17.4579659!4d78.5053877!16s%2Fg%2F11rw2sypv9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0d5c63] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#09454a]"
              >
                <FaMapMarkerAlt />
                <span>Get Directions</span>
              </a>
              <p className="text-center text-xs text-slate-500">
                ✓ Response within 24 hours
              </p>
            </div>
          </div>

        </div>


        
      </section>

      <section className="bg-gradient-to-b from-white to-[#f3f9f8] px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-6 py-3">
              <span className="text-2xl">❓</span>
              <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-sm font-semibold text-transparent">Frequently Asked Questions</span>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
                Got Questions?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about HostelMS and how it can transform your hostel operations.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-[#d7e7e4] bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                  className="flex w-full items-center justify-between bg-gradient-to-r from-white to-[#f3f9f8] px-7 py-5 transition-all duration-300 hover:from-[#eef8f7] hover:to-[#fbfaf6]"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {item.question}
                  </span>
                  <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#e6f4f3] transition-transform group-hover:scale-110 ${expandedFAQ === item.id ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="h-4 w-4 text-[#0d5c63]" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFAQ === item.id ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-[#d7e7e4] bg-gradient-to-br from-[#eef8f7] to-[#fbfaf6] px-7 py-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] p-8 text-center text-white md:p-12">
            <h3 className="mb-3 text-2xl font-black tracking-tight md:text-3xl">Still have questions?</h3>
            <p className="mb-6 text-[#dff4f1]">Get in touch with our team and we'll help you find the perfect solution for your hostel.</p>
            <a href="#contact-form" className="inline-flex rounded-xl bg-white px-8 py-3.5 font-semibold text-[#0d5c63] transition-colors duration-300 hover:bg-[#eef8f7]">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
