import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FaUser, FaLock, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useLoginMutation } from '../../features/auth/api/authApi';
import { login } from '../../features/auth/slice/authSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const demoUsers = {
    superadmin: {
      id: "u_98432",
      name: "Super Admin",
      email: "superadmin@demo.com",
      role: "superadmin"
    },
    hostelAdmin: {
      id: "u_53211",
      name: "Hostel Admin",
      email: "admin@demo.com",
      role: "admin"
    },
    tenant: {
      id: "u_83219",
      name: "Demo Tenant",
      email: "tenant@demo.com",
      role: "student"
    },
    visitor: {
      id: "u_12938",
      name: "Guest Visitor",
      email: "visitor@demo.com",
      role: "visitor"
    }
  };





  // IMPORTANT: destructure ONLY what you actually need
  const [loginApi, { isLoading }] = useLoginMutation();

  // -----------------------------
  // Validation Schema
  // -----------------------------
  const validationSchema = Yup.object({
    email_or_phone: Yup.string().required('Email or phone is required'),
    password: Yup.string().required('Password is required'),
    remember_me: Yup.boolean(),
  });

  // -----------------------------
  // Formik
  // -----------------------------
  const formik = useFormik({
    initialValues: {
      email_or_phone: '',
      password: '',
      remember_me: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  function handleDemoLogin(role) {
    const user = demoUsers[role];
    
    // For demo login, create a fake token
    const demoToken = `demo_token_${role}_${Date.now()}`;

    dispatch(login({
      user,
      token: demoToken,
      stats: null,
    }));

    toast.success(`Logged in as ${user.name}`);

    navigate("/dashboard");
  }

  // -----------------------------
  // Login Handler (FIXED)
  // -----------------------------
  async function handleLogin(values) {
    console.log(values, 'iam values');

    try {
      const res = await loginApi(values).unwrap();
      console.log(res, 'iam res after login');

      // Extract token - try multiple field names since backends vary
      const token = res.token || res.access_token || res.accessToken || res.auth_token;
      
      if (!token) {
        console.error('No token found in login response:', res);
        toast.error('Login response missing authentication token. Contact support.');
        return;
      }

      // Store user AND token in redux
      dispatch(login({
        user: res.user,
        token: token,
        stats: res.stats,
      }));

      toast.success('Login successful');
      navigate('/dashboard');

    } catch (err) {
      console.error('Login error:', err);

      // ❗ ONLY fires if unwrap() throws
      toast.error(
        err?.data?.detail ??
        err?.error ??
        'Invalid email or password'
      );
    }
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <img
        src="/img/Logiin.jpg"
        alt="Hostel login background"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[4px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,40,45,0.64),rgba(13,92,99,0.36),rgba(240,217,167,0.2))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,243,239,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(240,217,167,0.18),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="hidden max-w-xl text-white lg:block">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <FaCheckCircle className="text-[#d9f3ef]" />
              Hostel Operations, Unified
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight">
              Welcome Back to the
              <span className="block bg-gradient-to-r from-[#d9f3ef] via-white to-[#f0d9a7] bg-clip-text text-transparent">
                Hostel Management System
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/85">
              Manage bookings, residents, payments, complaints, and daily operations from one clean dashboard built for modern hostels and PGs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Day-wise booking", "Digital KYC", "Smart room allocation"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/60 bg-white/22 p-7 shadow-[0_24px_60px_rgba(13,92,99,0.22)] backdrop-blur-2xl sm:p-8">
            <div className="mb-7 text-center">
              <span className="inline-flex items-center rounded-full border border-white/45 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d5c63] backdrop-blur-md">
                Sign In
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white drop-shadow-sm">
                Welcome <span className="bg-gradient-to-r from-[#d9f3ef] to-white bg-clip-text text-transparent">Back</span>
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Sign in to continue managing your hostel operations with speed and clarity.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-white/90">
                  Email / Phone
                </label>
                <div className="relative mt-2">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="email_or_phone"
                    value={formik.values.email_or_phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full rounded-xl border border-white/60 bg-white/75 py-3 pl-11 pr-4 text-slate-900 outline-none backdrop-blur-sm transition placeholder:text-slate-400 focus:border-[#0d5c63] focus:bg-white focus:ring-2 focus:ring-[#0d5c63]/15"
                    placeholder="Enter email or phone"
                  />
                </div>
                {formik.touched.email_or_phone && formik.errors.email_or_phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {formik.errors.email_or_phone}
                  </p>
                )}
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
                    placeholder="Enter password"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember_me"
                  checked={formik.values.remember_me}
                  onChange={formik.handleChange}
                  className="h-4 w-4 rounded border-[#b9ddda] text-[#0d5c63] focus:ring-[#0d5c63]"
                />
                <label className="text-sm text-white/80">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
                {!isLoading && <FaArrowRight className="text-sm" />}
              </button>

              <div className="mt-5 space-y-3">
                <p className="text-center text-xs uppercase tracking-[0.18em] text-white/55">
                  Demo Login
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("superadmin")}
                    className="rounded-xl border border-slate-800 bg-slate-900 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                  >
                    Super Admin
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin("hostelAdmin")}
                    className="rounded-xl border border-[#b9ddda] bg-[#e6f4f3] py-2.5 text-xs font-semibold text-[#0d5c63] transition hover:bg-[#d8efec]"
                  >
                    Hostel Admin
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin("tenant")}
                    className="rounded-xl border border-[#cfe9de] bg-[#edf8f2] py-2.5 text-xs font-semibold text-[#13876f] transition hover:bg-[#e1f3ea]"
                  >
                    Tenant
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin("visitor")}
                    className="rounded-xl border border-[#e7deca] bg-[#fbf5e6] py-2.5 text-xs font-semibold text-[#8a6720] transition hover:bg-[#f7efd9]"
                  >
                    Visitor
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-6 text-center text-xs text-white/55">
              © {new Date().getFullYear()} HostelHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
