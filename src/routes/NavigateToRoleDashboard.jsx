// routes/NavigateToRoleDashboard.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavigateToRoleDashboard = () => {
  const { 
    isAuthenticated, 
    role, 
    loading, 
    getDashboardPath 
  } = useAuth();
  console.log(isAuthenticated,'iam auth from navigate to role dashboard')
  console.log(role,'iam role from navigate to role dashboard')

  // Show loading state if auth is still being checked
  if (loading) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated but no role (shouldn't happen), redirect to login
  if (!role) {
    console.error('User is authenticated but has no role');
    return <Navigate to="/login" replace />;
  }

  console.log('Redirecting user with role:', role);

  // Get the dashboard path based on role
  const dashboardPath = getDashboardPath();
  console.log(dashboardPath,'iam path')
  
  return <Navigate to={dashboardPath} replace />;
};

export default NavigateToRoleDashboard;