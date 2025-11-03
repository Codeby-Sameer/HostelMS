// src/components/RoleBasedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  if (!allowedRoles.includes(currentUser.type)) {
    // Redirect to role-specific dashboard or show access denied
    const redirectPaths = {
      'super-admin': '/super-admin',
      'hostel-admin': '/hostel-admin',
      'student': '/student',
      'visitor': '/visitor'
    };
    
    return <Navigate to={redirectPaths[currentUser.type] || '/login'} />;
  }
  
  return children;
};

export default RoleBasedRoute;