import React, { useState } from 'react';

const HostelRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    hostelId: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.hostelId.trim()) {
      newErrors.hostelId = 'Hostel ID is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.role) {
      newErrors.role = 'Please select a role';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted successfully:', formData);
      alert('Registration successful! Welcome to Hostel Management System.');
      
      // Reset form
      setFormData({
        name: '',
        hostelId: '',
        email: '',
        phone: '',
        role: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      });
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    "Easy room allocation",
    "Automated billing system", 
    "Maintenance tracking",
    "Real-time occupancy reports",
    "Student management",
    "Inventory tracking"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Left Section - Welcome & Features */}
          <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 lg:p-12">
            <div className="h-full flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                  Create your account and manage your hostel smartly.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-indigo-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="md:w-3/5 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-600 mt-2">Fill in your details to get started</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Hostel ID Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hostel ID *
                    </label>
                    <input
                      type="text"
                      name="hostelId"
                      value={formData.hostelId}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        errors.hostelId ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="HSTL001"
                    />
                    {errors.hostelId && (
                      <p className="text-red-500 text-sm mt-1">{errors.hostelId}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone & Role Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <div className="px-4 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 font-medium">
                        +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="9876543210"
                        maxLength="10"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        errors.role ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Role</option>
                      <option value="admin">Hostel Administrator</option>
                      <option value="manager">Hostel Manager</option>
                      <option value="warden">Warden</option>
                      <option value="staff">Staff Member</option>
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                  </div>
                </div>

                {/* Password & Confirm Password Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`w-5 h-5 mt-1 text-indigo-600 focus:ring-indigo-500 rounded ${
                      errors.agreeToTerms ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <label className="text-sm text-gray-600 flex-1">
                    I agree to the{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 shadow-lg hover:shadow-xl ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>

                {/* Login Link */}
                <div className="text-center text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">
                    Sign In
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelRegistrationForm;