
import { useAuthBootstrap } from '../hooks/useAuthBootstrap';
import FullScreenLoader from '../loader/FullScreenLoader'; 

const AuthGate = ({ children }) => {
  const { initialized, isLoading } = useAuthBootstrap();

  // While we don't know yet if user is logged in, block everything
  if (!initialized || isLoading) {
    return <FullScreenLoader />;
  }

  // Once initialized, let ProtectedRoute + RoleBasedRoute + DashboardLayout handle the rest
  return <>{children}</>;
};

export default AuthGate;
