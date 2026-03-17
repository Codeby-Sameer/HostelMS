import React from "react";
import { ShieldCheck, Zap, Headphones, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function WhyChooseUs() {
  const whyChoose = [
    {
      title: "Enterprise-Grade Security",
      desc: "Protect sensitive hostel data with military-grade encryption, role-based access controls, and automated backups.",
      icon: ShieldCheck,
      features: ["Bank-level data encryption", "Role-based access for staff", "Automatic daily backups", "GDPR & FERPA compliant"],
      color: "from-blue-600 to-indigo-600",
      shadow: "shadow-blue-500/20",
      accentColor: "bg-blue-500",
      learnMoreLink: "/security-features"
    },
    {
      title: "Automated Operations",
      desc: "Streamline hostel management with intelligent automation for admissions, payments, maintenance, and communications.",
      icon: Zap,
      features: ["Automated rent collection", "Smart room allocation", "Maintenance workflow automation", "Bulk notice broadcasting"],
      color: "from-emerald-500 to-green-600",
      shadow: "shadow-emerald-500/20",
      accentColor: "bg-emerald-500",
      learnMoreLink: "/automation-features"
    },
    {
      title: "Dedicated Support",
      desc: "Get round-the-clock assistance with dedicated account managers and comprehensive training for your staff.",
      icon: Headphones,
      features: ["24/7 priority helpline", "Onboarding training sessions", "Quarterly system reviews", "Emergency response team"],
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
      accentColor: "bg-amber-500",
      learnMoreLink: "/support-features"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements - subtle */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 opacity-30"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-50 rounded-full translate-x-1/3 opacity-20"></div>
      
      <div className="max-w-6xl mx-auto w-[92vw] relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-md shadow-blue-500/20">
            WHY CHOOSE OUR PLATFORM
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-6">
            Built Specifically for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hostel Management</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Designed with insights from 100+ educational institutions. Our platform eliminates manual work, reduces errors, and provides complete transparency for both administrators and tenants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon Container - Neat and Clean */}
                  <div className="relative mb-8">
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
                    
                    {/* Icon Main Container */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center ${item.shadow} mx-auto transition-all duration-500 group-hover:scale-105`}>
                      <Icon className="text-white" size={30} strokeWidth={1.8} />
                    </div>
                    
                    {/* Subtle Corner Badge */}
                    {/* <div className={`absolute -top-2 -right-2 w-8 h-8 ${item.accentColor} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm`}>
                      {index + 1}
                    </div> */}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 ${item.accentColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className="text-white" size={12} strokeWidth={2.5} />
                          </div>
                          <span className="text-slate-700 text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    to={item.learnMoreLink}
                    className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700">
                      <span>Explore features</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </Link>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 ${item.accentColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statement */}
        {/* <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 mb-4">
              <span className="font-bold text-blue-600">Trusted by 150+ hostels nationwide</span> - from university dormitories to private student accommodations.
            </p>
            <p className="text-slate-600">
              Our system reduces administrative workload by 60% while improving student satisfaction through transparency and self-service features.
            </p>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Zap size={20} />
            <span>Request a Personalized Demo</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </Link>
          <p className="text-slate-500 mt-3 text-sm">See how our platform can transform your hostel operations</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;