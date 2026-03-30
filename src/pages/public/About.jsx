import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaUsers,
  FaShieldAlt,
  FaCalendarCheck,
  FaRocket,
  FaBullseye,
  FaHandshake,
  FaClock,
  FaBed,
  FaArrowRight,
  FaSyncAlt,
  FaHeart
} from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutApp = () => {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#f3f4f6] via-white to-[#f8fbfb]">

   
      <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 pt-20 pb-16 text-gray-900" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop")',
        backgroundAttachment: 'fixed'
      }}>


  <div className="absolute inset-0 bg-[#06282d]/45 backdrop-blur-[2px]"></div>
  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#9dd9d2] opacity-25 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f0d9a7] opacity-20 blur-3xl"></div>

 
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative mx-auto max-w-5xl space-y-6 rounded-3xl border border-white/50 bg-white/18 p-10 text-center shadow-[0_30px_80px_rgba(6,40,45,0.18)] backdrop-blur-2xl transition-all duration-500 hover:border-white/60 hover:bg-white/24"
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    
    <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
      About{" "}
      <span className="bg-gradient-to-r from-[#d9f3ef] via-[#9dd9d2] to-[#f0d9a7] bg-clip-text text-transparent">
        DCM Hostel App
      </span>
    </h1>

    <p className="relative text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
      Transforming hostel and PG management into a seamless digital experience 
      smarter operations, happier tenants, and effortless control.
    </p>

    <div className="relative flex flex-col sm:flex-row justify-center gap-4 pt-4">
      <Link to="/request-demo">
        <button className="rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:from-[#09454a] hover:to-[#166774] backdrop-blur-sm">
          Get Started
        </button>
      </Link>
      <Link to="/features">
        <button className="rounded-xl border-2 border-white/70 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/20 backdrop-blur-sm">
          Learn More
        </button>
      </Link>
    </div>

  </motion.div>

</section>

      <section className="relative overflow-hidden bg-[#f8fbfb] px-6 py-20">

  <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#d9f3ef] opacity-50 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f6e8bf] opacity-40 blur-3xl" />

  <div className="max-w-7xl mx-auto relative">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight max-w-3xl"
    >
      Smart Hostel <br />
      <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
        Management System
      </span>
    </motion.h2>

    <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-gray-700 text-lg leading-relaxed"
      >
        <p>
          Our platform transforms hostel operations into a seamless digital
          experience reducing manual work and improving efficiency.
        </p>

        <p>
          From admissions to fee tracking, everything is centralized in one
          secure system designed for administrators and tenants.
        </p>

        <Link to="/features" className="inline-flex">
          <button className="mt-4 rounded-xl bg-[#0d5c63] px-6 py-3 text-white shadow-md transition hover:scale-105 hover:bg-[#09454a]">
            Explore Features
          </button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-[#d6e7e4] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Admissions</h4>
          <p className="text-sm text-gray-600">
            Manage student onboarding digitally with ease.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl border border-[#d6e7e4] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Fee Tracking</h4>
          <p className="text-sm text-gray-600">
            Secure and transparent payment management system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border border-[#e7deca] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Reports</h4>
          <p className="text-sm text-gray-600">
            Generate insights and reports instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="rounded-2xl border border-[#e7deca] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Attendance</h4>
          <p className="text-sm text-gray-600">
            Real-time attendance tracking and notifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-2xl border border-[#d6e7e4] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Complaints</h4>
          <p className="text-sm text-gray-600">
            Manage maintenance and complaint resolution efficiently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="rounded-2xl border border-[#d6e7e4] bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl"
        >
          <h4 className="font-bold text-gray-900 mb-2">Announcements</h4>
          <p className="text-sm text-gray-600">
            Send instant notifications to all tenants and staff.
          </p>
        </motion.div>

      </div>
    </div>
  </div>
</section>

      <section className="relative bg-gradient-to-b from-[#f8fbfb] via-white to-[#f3f4f6] px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="group relative overflow-hidden rounded-3xl border border-[#b9ddda] bg-gradient-to-br from-[#0d5c63] via-[#146f78] to-[#1b7f8e] p-10 text-white shadow-2xl lg:p-12">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                
                <div className="relative space-y-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                    <FaRocket className="h-8 w-8 text-[#d9f3ef]" />
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight leading-tight">
                    Our Approach
                  </h3>

                  <div className="space-y-4">
                    <p className="text-[#dff4f1] leading-relaxed text-lg">
                      We believe hostel management should be simple, transparent, and stress-free.
                      Our platform is designed by understanding real hostel challenges, not just
                      technical requirements.
                    </p>

                    <p className="text-[#dff4f1] leading-relaxed text-lg">
                      We work closely with hostel owners, wardens, and tenants to ensure every
                      feature genuinely improves daily operations and living experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f4f3] px-4 py-2 text-sm font-semibold text-[#0d5c63]">
                  <FaUsers className="w-4 h-4" />
                  <span>OUR STORY</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                  Built by  <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent"> People</span> Who Understand 
                  <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent"> Hostels</span>
                  
                </h2>

                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#0d5c63] to-[#9dd9d2]" />

                <div className="space-y-6 text-slate-700">
                  <p className="text-lg leading-relaxed">
                    Our journey began with a simple observation that hostel management was
                    overloaded with paperwork, manual tracking, and outdated systems that
                    slowed everyone down.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Tenants struggled to access information, wardens spent hours on routine
                    tasks, and administrators lacked real-time visibility into operations.
                  </p>

                  <p className="text-lg leading-relaxed">
                    We built this Hostel Management System to bring clarity, automation, and
                    control to hostel operations, helping hostels operate efficiently while creating a better
                    experience for residents.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative space-y-6 overflow-hidden rounded-3xl border border-[#d9ece8] bg-white p-8 shadow-2xl lg:p-10">
              <style>{`@keyframes autoScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .auto-scroll { animation: autoScroll 60s linear infinite; } .auto-scroll:hover { animation-play-state: paused; }`}</style>
              
              <div className="space-y-2 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b9ddda] bg-[#e6f4f3] px-4 py-2 text-sm font-semibold text-[#0d5c63]">
                  ✨ Core Strengths
                </div>
                <h4 className="text-2xl font-bold text-slate-900 lg:text-3xl">
                  Our Values & Vision
                </h4>
              </div>

              <div className="overflow-hidden -mx-8 -mb-8 -mt-2 ">
                <div className="auto-scroll flex gap-4 w-fit px-8 pb-8 ">
                  {[
                    { icon: <FaBullseye />, title: "Clear Focus", text: "Real hostel problems. We understand the day-to-day challenges faced by administrators and tenants.", type: "value", color: "from-[#0d5c63] to-[#1b7f8e]" },
                    { icon: <FaHandshake />, title: "Long-term Partnerships", text: "We build lasting relationships by understanding their needs and continuously supporting them with reliable solutions.", type: "value", color: "from-[#1b7f8e] to-[#9dd9d2]" },
                    { icon: <FaSyncAlt />, title: "Continuous Improvement", text: "We actively listen to users and refine our platform to deliver better performance and usability.", type: "value", color: "from-[#13876f] to-[#1f9d84]" },
                    { icon: <FaHeart />, title: "Tenant Comfort First", text: "We prioritize a secure, convenient living experience by ensuring reliable systems and transparent processes.", type: "value", color: "from-[#c79a3b] to-[#f0d9a7]" },
                    { icon: <FaBullseye />, title: "Our Focus", text: "Simplifying hostel operations. We streamline daily tasks through smart automation and centralized management.", type: "value", color: "from-[#0d5c63] to-[#1b7f8e]" },
                    { icon: <FaShieldAlt />, title: "Our Promise", text: "Reliable & transparent systems. We ensure consistent performance and clear processes.", type: "value", color: "from-[#13876f] to-[#1f9d84]" },
                    { icon: <FaUsers />, title: "Our Team", text: "Domain experts & engineers. Our team combines deep industry knowledge with technical expertise to build reliable solutions.", type: "value", color: "from-[#1b7f8e] to-[#9dd9d2]" },
                    { icon: <FaRocket />, title: "Our Vision", text: "Smarter hostels everywhere. We aim to revolutionize the hostel experience through innovative technology and thoughtful design.", type: "value", color: "from-[#c79a3b] to-[#f0d9a7]" },
                    { icon: <FaBullseye />, title: "Technical Expertise", text: "Our team blends deep industry insight with strong technical expertise to build reliable, scalable solutions.", type: "value", color: "from-[#0d5c63] to-[#1b7f8e]" },
                    { icon: <FaHandshake />, title: "Global Partnerships", text: "Long-term partnerships with hostels, driving smarter and more efficient hostel management everywhere.", type: "value", color: "from-[#1b7f8e] to-[#9dd9d2]" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-shrink-0 w-80 h-64">
                      <div className="flex h-full transform flex-col justify-between rounded-2xl border border-[#dce9e7] bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group/card">
                        <div>
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                            <span className="text-white text-2xl">{item.icon}</span>
                          </div>
                          <h4 className="text-slate-900 font-bold text-base mb-2">{item.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-[#d9f3ef] opacity-25 blur-3xl" />
        <div className="absolute top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-[#f6e8bf] opacity-20 blur-3xl" />
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Complete <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent"> Digital</span> Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for modern hostel management
            </p>
            <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#0d5c63] to-[#9dd9d2]" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: FaMobileAlt,
                title: "Mobile-First Experience",
                description: "Tenants can book rooms, pay fees, and manage everything from their phones. Real-time updates and notifications keep everyone connected.",
                features: ["Mobile bookings", "Push notifications", "Digital payments"],
                color: "from-[#0d5c63] to-[#1b7f8e]",
                bgColor: "from-[#e6f4f3] to-[#d9f3ef]",
                accentColor: "text-[#0d5c63]",
                number: "01"
              },
              {
                icon: FaUsers,
                title: "Smart User Management",
                description: "Separate portals for tenants, wardens, and admin staff with role-based permissions. Each user gets exactly what they need.",
                features: ["Tenant portal", "Warden dashboard", "Admin controls"],
                color: "from-[#1b7f8e] to-[#9dd9d2]",
                bgColor: "from-[#e6f4f3] to-[#eef8f7]",
                accentColor: "text-[#1b7f8e]",
                number: "02"
              },
              {
                icon: FaShieldAlt,
                title: "Secure Platform",
                description: "Bank-level security with encrypted data, secure payments, and complete audit trails. Your data is protected with enterprise-grade security.",
                features: ["Data encryption", "Secure payments", "Audit logs"],
                color: "from-[#13876f] to-[#1f9d84]",
                bgColor: "from-[#e8f6f1] to-[#eefaf6]",
                accentColor: "text-[#13876f]",
                number: "03"
              }
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group relative h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-[#d7e7e4] bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl lg:p-10">
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.color}`} />
                    <div className={`absolute top-6 right-6 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity ${card.accentColor}`}>
                      {card.number}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-8 mt-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <Icon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base">
                      {card.description}
                    </p>
                    <div className="space-y-3 pt-6 border-t border-slate-200">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/feature">
                          <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${card.color} group-hover/feature:scale-150 transition-transform`}></div>
                          <span className="text-sm text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 border-b-2 border-l-2 border-slate-300 rounded-bl-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-1/2 -left-40 -z-10 h-80 w-80 rounded-full bg-[#d9f3ef] opacity-25 blur-3xl" />
        <div className="absolute bottom-0 right-10 -z-10 h-96 w-96 rounded-full bg-[#f6e8bf] opacity-20 blur-3xl" />
      </section>


      <section className="relative mx-4 mt-8 mb-16 rounded-2xl border-l-4 border-[#f0d9a7] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white shadow-xl sm:mx-6 lg:mx-auto lg:max-w-6xl">
        <div className="absolute -top-4 -right-4 z-10 rounded-full border-2 border-white bg-[#f0d9a7] px-4 py-2 text-xs font-black text-[#0d5c63] shadow-lg">
          NEW
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-6 sm:px-8 py-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-1">
              <FaCalendarCheck className="text-2xl text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                Day Wise Room Booking Available
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Perfect for short visits, exams, or guest stays. Book by the day with instant confirmation.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <span className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <FaClock className="text-white" /> Flexible check-in
                </span>
                <span className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <FaShieldAlt className="text-white" /> Secure payments
                </span>
              </div>
            </div>
          </div>

          <Link to="/rooms" className="w-full sm:w-auto flex-shrink-0">
            <button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white bg-white px-6 py-3 font-bold text-[#0d5c63] shadow-lg transition-all hover:bg-[#eef8f7] hover:shadow-xl sm:w-auto">
              <FaBed className="text-base" />
              <span>Explore Rooms</span>
            </button>
          </Link>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f9f8] to-white px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-96 w-full -translate-x-1/2 bg-gradient-to-b from-[#d9f3ef]/60 to-transparent" />
          <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-[#d9f3ef] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#f6e8bf] opacity-20 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0d5c63] to-[#1b7f8e] shadow-lg">
              <FaRocket className="text-5xl text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
          >
            Ready to <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent"> Modernize</span>  <br /> <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent"> Your</span> Hostel?
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#0d5c63] to-[#9dd9d2]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto"
          >
            Join hostels that have replaced paperwork and manual tracking with a
            smart, centralized management system. Get better control, improved
            communication, and a smoother experience for tenants and staff.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/request-demo"
              className="w-full sm:w-auto"
            >
              <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#0d5c63] bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-[#09454a] hover:to-[#166774] hover:shadow-2xl sm:w-auto">
                Get Started
                <FaArrowRight className="text-lg" />
              </button>
            </Link>
            <Link to="/request-demo" className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#b9ddda] bg-white px-10 py-4 text-lg font-bold text-[#0d5c63] shadow-md transition-all hover:scale-105 hover:border-[#0d5c63] hover:shadow-lg sm:w-auto">
                Schedule Demo
                <FaCalendarCheck className="text-lg" />
              </button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-slate-500 font-medium pt-4"
          >
            ✓ Free demo • ✓ No commitment • ✓ Guided onboarding
          </motion.p>

        </div>
      </section>

    </main>
  );
};

export default AboutApp;
