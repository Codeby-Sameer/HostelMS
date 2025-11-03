// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    userType: 'super-admin',
    credential: '',
    password: ''
  });

  // Demo credentials for testing
  const demoCredentials = {
    'super-admin': { credential: 'superadmin@demo.com', password: 'admin123' },
    'hostel-admin': { credential: 'hosteladmin@demo.com', password: 'admin123' },
    'student': { credential: 'student@demo.com', password: 'student123' },
    'visitor': { credential: 'visitor@demo.com', password: 'visitor123' }
  };

  useEffect(() => {
    // Auto-fill demo credentials based on selected user type
    const demo = demoCredentials[formData.userType];
    if (demo) {
      setFormData(prev => ({
        ...prev,
        credential: demo.credential,
        password: demo.password
      }));
    }
  }, [formData.userType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, always allow login with demo credentials
    const expected = demoCredentials[formData.userType];
    if (formData.credential === expected.credential && formData.password === expected.password) {
      // Store user info in localStorage for context
      localStorage.setItem('currentUser', JSON.stringify({
        type: formData.userType,
        name: formData.userType === 'super-admin' ? 'Super Admin' : 
              formData.userType === 'hostel-admin' ? 'Hostel Manager' :
              formData.userType === 'student' ? 'Student User' : 'Visitor User',
        email: formData.credential
      }));
      
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Using demo credentials should work.');
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🏠</div>
          <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
          <p className="text-gray-600 mt-2">Access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Type
            </label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="super-admin">Super Administrator</option>
              <option value="hostel-admin">Hostel Administrator</option>
              <option value="student">Student/Tenant</option>
              <option value="visitor">Visitor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email / Phone / Hostel Code
            </label>
            <input
              type="text"
              name="credential"
              value={formData.credential}
              onChange={handleChange}
              placeholder="Enter your credential"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </button>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800 text-center">
            <strong>Demo Credentials:</strong> Use the pre-filled credentials for testing
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 