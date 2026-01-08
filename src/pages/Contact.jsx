// src/pages/Contact.jsx
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaWhatsapp, FaClock } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.name || !form.message) {
      setStatus("Please fill name, email and message.");
      return;
    }
    console.log("Form submitted:", form);
    setStatus("Message sent successfully! We'll get back to you within 24 hours.");
    setForm({ email: "", phone: "", name: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about hostel management solutions? We're here to help you transform your hostel operations.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Contact Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team for immediate assistance with bookings or technical issues.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+918008682560"
                  className="flex items-center justify-between group/btn bg-blue-50 text-blue-700 px-5 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors"
                >
                  <span>+91 8008682560</span>
                  <FaPhone className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/918008682560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-xl font-semibold hover:bg-green-100 transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us detailed queries and we'll respond with comprehensive solutions within 24 hours.
              </p>
              <a
                href="mailto:hr@designcareermetrics.com"
                className="flex items-center justify-between group/btn bg-indigo-50 text-indigo-700 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition-colors"
              >
                <span className="truncate">hr@designcareermetrics.com</span>
                <FaEnvelope className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Response time: Within 24 hours
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-6">
                Our office is located in Hyderabad. Schedule a visit for a detailed demo of our hostel solutions.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-gray-700 font-medium">
                  Design Career Metrics Pvt Ltd<br />
                  Hyderabad, Telangana, India
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Design+Career+Metrics+Pvt+Ltd/@17.4579659,78.4237526,12z/data=!4m6!3m5!1s0x3bcb910838be5b35:0xfa8c53166a450046!8m2!3d17.4579659!4d78.5053877!16s%2Fg%2F11rw2sypv9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-50 text-purple-700 px-5 py-3 rounded-xl font-semibold hover:bg-purple-100 transition-colors"
              >
                <FaMapMarkerAlt />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Form */}
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          type="email"
                          required
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        type="tel"
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your hostel management needs..."
                      rows="5"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none"
                    />
                  </div>

                  {status && (
                    <div className={`p-4 rounded-xl ${status.includes("success") ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"}`}>
                      {status}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Right Side - Info */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">
                    Why Contact Us?
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Quick Response</h4>
                        <p className="text-blue-100 text-sm">
                          Get answers to your queries within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaUser className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Expert Support</h4>
                        <p className="text-blue-100 text-sm">
                          Talk to hostel management specialists
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Free Consultation</h4>
                        <p className="text-blue-100 text-sm">
                          Get personalized advice for your hostel
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-white/20">
                    <p className="text-blue-200 text-sm flex items-center gap-2">
                      <FaClock />
                      <span><span className="font-bold">Working Hours:</span> Mon-Sat, 9AM-7PM</span>
                    </p>
                    <p className="text-blue-200 text-sm mt-3 flex items-center gap-2">
                      <FaPhone />
                      <span><span className="font-bold">Emergency Support:</span> Available 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us for a detailed discussion about your hostel management needs
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-64 md:h-80">
              <iframe
                title="Design Career Metrics Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.063551171535!2d78.5028127!3d17.4580405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910838be5b35%3A0xfa8c53166a450046!2sDesign%20Career%20Metrics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900">Design Career Metrics Pvt Ltd</h4>
                  <p className="text-gray-600 text-sm mt-1">Hyderabad, Telangana, India</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Design+Career+Metrics+Pvt+Ltd/@17.4579659,78.4237526,12z/data=!4m6!3m5!1s0x3bcb910838be5b35:0xfa8c53166a450046!8m2!3d17.4579659!4d78.5053877!16s%2Fg%2F11rw2sypv9?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <FaMapMarkerAlt />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}