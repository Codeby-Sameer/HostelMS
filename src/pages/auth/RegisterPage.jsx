// src/pages/auth/RegisterPage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useRegisterMutation } from '../../features/auth/api/authApi';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerApi, { isLoading }] = useRegisterMutation();

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Full name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone_number: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    country_code: Yup.string()
      .required('Country code is required')
      .matches(/^\+[0-9]{1,3}$/, 'Invalid country code (e.g., +91)'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain an uppercase letter')
      .matches(/[0-9]/, 'Password must contain a number'),
    confirm_password: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      country_code: '+91',
      password: '',
      confirm_password: '',
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  // Register Handler
  async function handleRegister(values) {
    console.log('Registering with:', values);

    try {
      const registerPayload = {
        name: values.name,
        email: values.email,
        phone_number: values.phone_number,
        country_code: values.country_code,
        password: values.password,
        confirm_password: values.confirm_password,
      };

      const res = await registerApi(registerPayload).unwrap();
      console.log('Registration successful:', res);

      toast.success('Registration successful! Redirecting to login...');
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);

      const errorMessage = 
        err?.data?.detail ??
        err?.data?.message ??
        err?.error ??
        'Registration failed. Please try again.';

      toast.error(errorMessage);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4 py-8">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Join us today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your full name"
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email
            </label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Country Code & Phone */}
          <div className="grid grid-cols-3 gap-2">
            {/* Country Code */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Code
              </label>
              <div className="relative mt-1">
                <FaGlobe className="absolute left-2 top-3 text-gray-400 text-xs" />
                <input
                  type="text"
                  name="country_code"
                  value={formik.values.country_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full pl-7 pr-2 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  placeholder="+91"
                />
              </div>
              {formik.touched.country_code && formik.errors.country_code && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.country_code}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="col-span-2">
              <label className="text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <div className="relative mt-1">
                <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="9876543210"
                />
              </div>
              {formik.touched.phone_number && formik.errors.phone_number && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.phone_number}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Min 8 chars, 1 uppercase, 1 number"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Re-enter password"
              />
            </div>
            {formik.touched.confirm_password && formik.errors.confirm_password && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.confirm_password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 mt-6"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                Sign In
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
