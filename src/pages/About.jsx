import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Medipudi Durga Prasad',
      role: 'CEO & Co-Founder',
      experience: '12+ years in PropTech and SaaS solutions',
      image: 'DP',
      bio: 'Former director at leading real estate tech company with expertise in scaling SaaS platforms.'
    },
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started with vision to digitize PG industry' },
    { year: '2021', event: 'First 100 Customers', description: 'Onboarded 100+ PG properties across Bangalore' },
    { year: '2022', event: 'Series A Funding', description: 'Raised $2M to expand operations nationwide' },
    { year: '2023', event: 'Marketplace Launch', description: 'Launched booking marketplace with 500+ properties' },
    { year: '2024', event: '10K+ Users', description: 'Reached milestone of 10,000+ active tenants' }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We continuously push boundaries with cutting-edge technology to solve real problems.'
    },
    {
      icon: '💝',
      title: 'Customer Obsessed',
      description: 'Every decision is made with our customers success and satisfaction in mind.'
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'We build trust through consistent, dependable service and 99.9% uptime.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in working together with our customers to achieve extraordinary results.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              About DCM Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Revolutionizing the PG and hostel industry with cutting-edge technology and innovative solutions since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  Founded in 2020, DCM Solutions emerged from a simple observation: the PG and hostel industry was still operating with outdated, manual processes that created inefficiencies for both owners and tenants.
                </p>
                <p>
                  Our founders, having experienced the challenges firsthand as both PG owners and tenants, set out to create a comprehensive digital solution that would transform how PG businesses operate.
                </p>
                <p>
                  What started as a simple booking system has evolved into a complete ecosystem that handles everything from tenant management and automated payments to business analytics and marketplace bookings.
                </p>
                <p>
                  Today, we're proud to serve over <strong className="text-blue-600">500+ PG properties</strong> across India, helping owners increase their revenue by an average of <strong className="text-blue-600">40%</strong> while providing tenants with a seamless living experience.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-blue-50 rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">500+</div>
                  <p className="text-xs sm:text-sm text-gray-600">Properties Managed</p>
                </div>
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">10K+</div>
                  <p className="text-xs sm:text-sm text-gray-600">Happy Tenants</p>
                </div>
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">₹50Cr+</div>
                  <p className="text-xs sm:text-sm text-gray-600">Revenue Processed</p>
                </div>
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 md:mb-2">25+</div>
                  <p className="text-xs sm:text-sm text-gray-600">Cities Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                🎯
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To digitally transform the PG and hostel industry by providing innovative, user-friendly solutions that enhance operational efficiency, improve tenant satisfaction, and drive business growth for property owners.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                👁️
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To become the leading technology partner for the accommodation industry, creating a seamless ecosystem where property owners can focus on providing excellent living experiences while we handle the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experienced professionals from technology and hospitality industries working together to revolutionize PG management
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold mx-auto mb-4 md:mb-6 shadow-md">
                  {member.image}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">{member.experience}</p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do at DCM Solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl sm:text-3xl">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Milestones that mark our growth and success over the years
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.event}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="md:w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your PG Business?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join 500+ successful PG owners who are already growing their business with DCM Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;