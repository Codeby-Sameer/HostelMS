// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { FaUser, FaLock } from "react-icons/fa";
import toast from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Demo credentials (hidden from UI)
  const credentials = {
    'super-admin': { credential: 'superadmin@gmail.com', password: 'Admin@123' },
    'hostel-admin': { credential: 'hosteladmin@demo.com', password: 'admin123' },
    student: { credential: 'student@demo.com', password: 'student123' },
    visitor: { credential: 'visitor@demo.com', password: 'visitor123' },
  };

  // Validation
  const validationSchema = Yup.object({
    userType: Yup.string().required(),
    credential: Yup.string().required("Email or username required"),
    password: Yup.string().required("Password required"),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      userType: 'super-admin',
      credential: credentials['super-admin'].credential,
      password: credentials['super-admin'].password,
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  // Auto fill based on role
  useEffect(() => {
    const data = credentials[formik.values.userType];
    if (data) {
      formik.setFieldValue("credential", data.credential);
      formik.setFieldValue("password", data.password);
    }
  }, [formik.values.userType]);

  // LOGIN FUNCTION
  function handleLogin(values) {
    const expected = credentials[values.userType];

    if (values.credential !== expected.credential || values.password !== expected.password) {
      toast.error("Invalid credentials");
      return;
    }

    const user = {
      id: Date.now(),
      username:
        values.userType === "super-admin" ? "Super Admin" :
        values.userType === "hostel-admin" ? "Hostel Admin" :
        values.userType === "student" ? "Student User" :
        "Visitor User",
      email: values.credential,
      role:
        values.userType === "super-admin" ? "superadmin" :
        values.userType === "hostel-admin" ? "hosteladmin" :
        values.userType === "student" ? "student" :
        "visitor",
    };

    localStorage.setItem("auth", JSON.stringify({ user, token: "local-token" }));
    dispatch(login({ user }));

    toast.success("Login successful");
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 backdrop-blur-md">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2">Sign in to continue to HostelHub</p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* Role Select */}
          <div>
            <label className="text-sm font-medium text-gray-600">Account Type</label>
            <select
              name="userType"
              value={formik.values.userType}
              onChange={formik.handleChange}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            >
              <option value="super-admin">Super Admin</option>
              <option value="hostel-admin">Hostel Admin</option>
              <option value="student">Student</option>
              <option value="visitor">Visitor</option>
            </select>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-600">Email / Username</label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                name="credential"
                value={formik.values.credential}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter email or username"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Sign In
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
