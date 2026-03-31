import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaLock, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useRegisterMutation } from '../../features/auth/api/authApi';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerApi, { isLoading }] = useRegisterMutation();

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
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <img
        src="/img/Logiin.jpg"
        alt="Hostel signup background"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[4px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,40,45,0.64),rgba(13,92,99,0.36),rgba(240,217,167,0.2))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,243,239,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(240,217,167,0.18),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-xl rounded-[2rem] border border-white/60 bg-white/22 p-7 shadow-[0_24px_60px_rgba(13,92,99,0.22)] backdrop-blur-2xl sm:p-8">
          <div className="mb-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d5c63] backdrop-blur-md">
              <FaCheckCircle className="text-[#0d5c63]" />
              Sign Up
            </span>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-white drop-shadow-sm sm:text-4xl">
              Create Your
              <span className="block bg-gradient-to-r from-[#d9f3ef] to-white bg-clip-text text-transparent">
                Account
              </span>
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
              Join the Hostel Management System and start managing residents, bookings, and operations from one place.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {["Quick onboarding", "Secure access", "Built for hostels"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-white/90">
                Full Name
              </label>
              <div className="relative mt-2">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                  placeholder="Enter your full name"
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-white/90">
                Email
              </label>
              <div className="relative mt-2">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                  placeholder="Enter your email"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-sm font-medium text-white/90">
                  Code
                </label>
                <div className="relative mt-2">
                  <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                  <input
                    type="text"
                    name="country_code"
                    value={formik.values.country_code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-8 pr-3 text-sm text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                    placeholder="+91"
                  />
                </div>
                {formik.touched.country_code && formik.errors.country_code && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.country_code}</p>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-sm font-medium text-white/90">
                  Phone Number
                </label>
                <div className="relative mt-2">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                    placeholder="9876543210"
                  />
                </div>
                {formik.touched.phone_number && formik.errors.phone_number && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.phone_number}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-white/90">
                Password
              </label>
              <div className="relative mt-2">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                  placeholder="Min 8 chars, 1 uppercase, 1 number"
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-white/90">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                  placeholder="Re-enter password"
                />
              </div>
              {formik.touched.confirm_password && formik.errors.confirm_password && (
                <p className="mt-1 text-xs text-red-500">{formik.errors.confirm_password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
              {!isLoading && <FaArrowRight className="text-sm" />}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-white/80">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-[#d9f3ef] hover:text-white">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
