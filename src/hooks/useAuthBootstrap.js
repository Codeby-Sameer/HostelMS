import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setInitialized, logout, updateToken } from '../features/auth/slice/authSlice';
import { useGetCurrentUserQuery } from '../features/auth/api/authApi';

export function useAuthBootstrap() {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.auth.initialized);
  const token = useSelector((state) => state.auth.token);
  
  // Only verify auth if we have a token
  const { data, isLoading, isError, error } = useGetCurrentUserQuery(undefined, {
    skip: !token, // Skip if no token
  });

  useEffect(() => {
    console.log('Auth Bootstrap - Token present:', !!token);
    console.log('Auth Bootstrap - Data:', data);
    console.log('Auth Bootstrap - Error:', error);

    // When server returns user data, store it
    if (data) {
      console.log('Auth Bootstrap - Setting user from API');
      dispatch(setUser(data));
    }

    // When the request finishes (success or fail), mark auth as initialized
    if (!isLoading) {
      if (isError) {
        console.warn('Auth Bootstrap - Auth verification failed:', error);
        // Optional: only logout on 401
        if (error?.status === 401) {
          dispatch(logout());
        } else {
          dispatch(setInitialized(true));
        }
      } else if (token) {
        console.log('Auth Bootstrap - Auth verified and initialized');
        dispatch(setInitialized(true));
      } else {
        console.log('Auth Bootstrap - No token, initializing without auth');
        dispatch(setInitialized(true));
      }
    }
  }, [data, isLoading, isError, error, token, dispatch]);

  return {
    initialized,
    isLoading: isLoading && !!token, // Only show loading if we're actually verifying
    isError,
    error,
  };
}
