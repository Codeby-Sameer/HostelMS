// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SuperAdminDashboard from './routes/SuperAdminRoutes';
import HostelAdminDashboard from './routes/HostelAdminRoutes';
import VisitorDashboard from './routes/VisitorRoutes';
import StudentDashboard from './routes/StudentRoutes';
import RoleBasedRoute from './routes/RoleBasedRoutes';
import ProtectedRoute from './components/ProtectedRoute';
import { ModalProvider } from './context/ModalContext';



function App() {
  return (
    
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Role-based Dashboard Routes */}
          <Route
            path="/super-admin/*"
            element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['super-admin']}>
                  <SuperAdminDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/hostel-admin/*"
            element={
              <ModalProvider>

              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['hostel-admin']}>
                  
                  <HostelAdminDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
              </ModalProvider>
            }
          />
          
          <Route
            path="/student/*"
            element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/visitor/*"
            element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['visitor']}>
                  <VisitorDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            }
          />
          
          {/* Redirect based on user role */}
          <Route 
            path="/dashboard" 
            element={<NavigateToRoleDashboard />} 
          />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to redirect users to their role-specific dashboard
const NavigateToRoleDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  const redirectPaths = {
    'super-admin': '/super-admin',
    'hostel-admin': '/hostel-admin',
    'student': '/student',
    'visitor': '/visitor'
  };
  
  return <Navigate to={redirectPaths[currentUser.type] || '/login'} />;
};

export default App;