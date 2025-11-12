import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Contact = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
      .min(10, 'Phone number must be at least 10 digits'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
    inquiryType: Yup.string().required('Please select inquiry type')
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate API call
        console.log('Form submitted:', values);
        
        // Here you would typically send the data to your backend
        // await sendContactForm(values);
        
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Thank you for your message! We will get back to you soon.');
        resetForm();
      } catch (error) {
        alert('There was an error sending your message. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'designcareermetric@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon to Fri, 9AM to 6PM'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Capital Park, Madhapur',
      description: 'Hyderabad, India - 560001'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick responses'
    }
  ];

  const inquiryTypes = [
    { value: '', label: 'Select Inquiry Type' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Careers' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'billing', label: 'Billing Issue' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours. 
                  Or contact us through any of the channels below.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                        <p className="text-blue-600 font-medium">{item.details}</p>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                      <button
                        key={social}
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                      >
                        <span className="font-semibold text-sm">{social[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our services? We're here to help.
                </p>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                          formik.touched.name && formik.errors.name
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                          formik.touched.email && formik.errors.email
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Inquiry Type Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                          formik.touched.phone && formik.errors.phone
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formik.values.inquiryType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                          formik.touched.inquiryType && formik.errors.inquiryType
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {inquiryTypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {formik.touched.inquiryType && formik.errors.inquiryType && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.inquiryType}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                        formik.touched.subject && formik.errors.subject
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="What is this regarding?"
                    />
                    {formik.touched.subject && formik.errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none ${
                        formik.touched.message && formik.errors.message
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Tell us how we can help you..."
                    />
                    {formik.touched.message && formik.errors.message && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                      className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                        formik.isSubmitting || !formik.isValid
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      }`}
                    >
                      {formik.isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond within 2-4 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Yes, we specialize in custom PG management solutions tailored to your specific business needs."
              },
              {
                question: "What are your support hours?",
                answer: "Our support team is available Monday to Friday, 9AM to 6PM IST, with emergency support on weekends."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! Contact us to schedule a personalized demo of our platform at your convenience."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of PG owners who are already transforming their business with DCM Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Schedule a Call
            </button>
            <Link to={'/pricing'} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;