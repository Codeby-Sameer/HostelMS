// components/RoleBasedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RoleBasedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, role, loading, canAccess } = useAuth();
  console.log(isAuthenticated,loading,'iam rolebases')

  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!canAccess(allowedRoles)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
};

export default RoleBasedRoute;