// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../services/authServices';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice'
import { resumeToPipeableStream } from 'react-dom/server';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const [useServer, setUseServer] = useState(false);
  const [triggerLogin, { isLoading: isLoginLoading, error: loginError }] = useLoginMutation();
  const [formData, setFormData] = useState({
    userType: 'super-admin',
    credential: '',
    password: '',
    remember_me: false
  });

  // Demo credentials for testing
  const demoCredentials = {
    'super-admin': {
      credential: 'superadmin@gmail.com',
      password: 'Admin@123',
      email_or_phone: 'superadmin@gmail.com'
    },
    'hostel-admin': {
      credential: 'hosteladmin@demo.com',
      password: 'admin123',
      email_or_phone: 'hosteladmin@demo.com'
    },
    'student': {
      credential: 'student@demo.com',
      password: 'student123',
      email_or_phone: 'student@demo.com'
    },
    'visitor': {
      credential: 'visitor@demo.com',
      password: 'visitor123',
      email_or_phone: 'visitor@demo.com'
    }
  };

  // Formik validation schema
  const validationSchema = Yup.object({
    userType: Yup.string()
      .oneOf(['super-admin', 'hostel-admin', 'student', 'visitor'], 'Invalid user type')
      .required('User type is required'),
    credential: Yup.string()
      .min(3, 'Credential must be at least 3 characters')
      .required('Email/Phone/Hostel Code is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    remember_me: Yup.boolean()
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      userType: 'super-admin',
      credential: demoCredentials['super-admin'].credential,
      password: demoCredentials['super-admin'].password,
      remember_me: false
    },
    validationSchema,
    onSubmit: async (values) => {
      if (useServer) {
        // Use RTK Query mutation to login to server
        await handleServerLogin(values);
      } else {
        // Use dummy credentials for demo
        handleDemoLogin(values);
      }
    }
  });

  // Update formik values when userType changes
  useEffect(() => {
    const demo = demoCredentials[formik.values.userType];
    if (demo && !useServer) {
      formik.setFieldValue('credential', demo.credential);
      formik.setFieldValue('password', demo.password);
    }
  }, [formik.values.userType, useServer]);

  const handleServerLogin = async (values) => {
    try {
      // Prepare data for server API
      const loginData = {
        email_or_phone: values.credential,
        password: values.password,
        remember_me: values.remember_me
      };

      // Call RTK Query mutation
      const response = await triggerLogin(loginData).unwrap();
      console.log(response.user, "sam")

      if (response.user) {
        dispatch(login(response))
        toast.success("Login success full Redirecting to Dashboard")
        navigate('/dashboard')
      }
      
      
    } catch (error) {
      console.error('Login failed:', error);
      toast.error(error.data.detail)
      // Handle error (already handled by RTK Query error state)
    }
  };

  const handleDemoLogin = (values) => {
    // For demo purposes, always allow login with demo credentials
    const expected = demoCredentials[values.userType];

    if (values.credential === expected.credential && values.password === expected.password) {
      // Store user info in localStorage for context
      localStorage.setItem('currentUser', JSON.stringify({
        type: values.userType,
        name: values.userType === 'super-admin' ? 'Super Admin' :
          values.userType === 'hostel-admin' ? 'Hostel Manager' :
            values.userType === 'student' ? 'Student User' : 'Visitor User',
        email: values.credential
      }));
 dispatch(login())
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Using demo credentials should work.');
    }
  };

  const handleUserTypeChange = (e) => {
    const newUserType = e.target.value;
    formik.setFieldValue('userType', newUserType);

    // Auto-fill demo credentials if not using server
    if (!useServer) {
      const demo = demoCredentials[newUserType];
      if (demo) {
        formik.setFieldValue('credential', demo.credential);
        formik.setFieldValue('password', demo.password);
      }
    }
  };

  const handleToggleServer = () => {
    setUseServer(!useServer);
    if (!useServer) {
      // Switching to server mode - clear demo credentials
      formik.setFieldValue('credential', '');
      formik.setFieldValue('password', '');
    } else {
      // Switching back to demo mode - refill with demo credentials
      const demo = demoCredentials[formik.values.userType];
      if (demo) {
        formik.setFieldValue('credential', demo.credential);
        formik.setFieldValue('password', demo.password);
      }
    }
  };

  // Determine loading state
  const isLoading = useServer ? isLoginLoading : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🏠</div>
          <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
          <p className="text-gray-600 mt-2">Access your dashboard</p>

          {/* Server/Demo Toggle */}
          <div className="flex items-center justify-center mt-4 space-x-3">
            <span className={`text-sm ${!useServer ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              Demo Mode
            </span>
            <button
              type="button"
              onClick={handleToggleServer}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useServer ? 'bg-blue-600' : 'bg-gray-300'
                }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useServer ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm ${useServer ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              Server Mode
            </span>
          </div>

          <div className="mt-2 text-xs text-gray-500">
            {useServer ? 'Connecting to live server' : 'Using demo credentials'}
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Type
            </label>
            <select
              name="userType"
              value={formik.values.userType}
              onChange={handleUserTypeChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="super-admin">Super Administrator</option>
              <option value="hostel-admin">Hostel Administrator</option>
              <option value="student">Student/Tenant</option>
              <option value="visitor">Visitor</option>
            </select>
            {formik.touched.userType && formik.errors.userType && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.userType}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email / Phone / Hostel Code
            </label>
            <input
              type="text"
              name="credential"
              value={formik.values.credential}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={useServer ? "Enter your credential" : "Demo credential"}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.credential && formik.errors.credential
                  ? 'border-red-500'
                  : 'border-gray-300'
                }`}
            />
            {formik.touched.credential && formik.errors.credential && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.credential}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={useServer ? "Enter your password" : "Demo password"}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
                }`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember_me"
              name="remember_me"
              checked={formik.values.remember_me}
              onChange={formik.handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Server Error Display */}
          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">
                {loginError.data?.detail || 'Login failed. Please check your credentials.'}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{useServer ? 'Connecting...' : 'Loading...'}</span>
              </div>
            ) : (
              `Sign In ${useServer ? 'to Server' : 'with Demo'}`
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            ← Back to Home
          </button>
        </div>

        {/* Demo credentials info box - only show in demo mode */}
        {!useServer && (
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800 text-center">
              <strong>Demo Mode Active:</strong> Using pre-filled credentials for testing
            </p>
          </div>
        )}

        {/* Server info box - only show in server mode */}
        {useServer && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              <strong>Server Mode Active:</strong> Connecting to live API endpoint
            </p>
            <p className="text-xs text-blue-600 mt-1 text-center">
              Using credentials from your database
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;