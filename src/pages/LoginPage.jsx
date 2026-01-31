// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useLoginMutation } from '../services/authServices';
import { login } from '../features/authSlice';

const LoginPage = () => {
 const navigate = useNavigate();
const dispatch = useDispatch();

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

// -----------------------------
// Login Handler (FIXED)
// -----------------------------
async function handleLogin(values) {
  console.log(values, 'iam values');

  try {
    const res = await loginApi(values).unwrap();
    console.log(res, 'iam res after login');

    // store user in redux
    dispatch(login(res.user));

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* Email / Phone */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email / Phone
            </label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                name="email_or_phone"
                value={formik.values.email_or_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter email or phone"
              />
            </div>
            {formik.touched.email_or_phone && formik.errors.email_or_phone && (
              <p className="text-xs text-red-500 mt-1">
                {formik.errors.email_or_phone}
              </p>
            )}
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
                placeholder="Enter password"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember_me"
              checked={formik.values.remember_me}
              onChange={formik.handleChange}
              className="h-4 w-4 text-blue-600"
            />
            <label className="text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} HostelHub. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
