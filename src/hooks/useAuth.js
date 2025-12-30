// hooks/useAuth.js
import { useSelector } from 'react-redux';
import { 
  selectCurrentUser,
  selectIsAuthenticated,
  selectUserRole,
  selectAuthState,
  getDashboardPathByRole,
  hasRequiredRole,
} from '../features/authSlice';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const role = useSelector(selectUserRole);
  
 
  
  return {
    // Individual values
    user,
    isAuthenticated,
    role,
    
    // Helper methods
    getDashboardPath: () => getDashboardPathByRole(role),
    hasRole: (requiredRole) => role === requiredRole,
    hasAnyRole: (roles) => hasRequiredRole(role, roles),
    canAccess: (requiredRoles) => hasRequiredRole(role, requiredRoles),
  };
};