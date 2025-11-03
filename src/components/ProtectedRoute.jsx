// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (!currentUser) {
    // Redirect to login if no user is found
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;