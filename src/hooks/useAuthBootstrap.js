import { useLazyVerifyAuthQuery, useVerifyAuthQuery } from '../services/authServices';
// src/hooks/useAuthBootstrap.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser,  setInitialized,logout } from '../features/authSlice';

export function useAuthBootstrap() {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.auth.initialized);
  

  const { data, isLoading, isError, error } = useVerifyAuthQuery();

  useEffect(() => {
    // When server returns user data, store it
    if (data) {
      dispatch(setUser(data));
    }

    // When the request finishes (success or fail), mark auth as initialized
    if (!isLoading) {
      if (isError) {
        // Optional: only logout on 401
        // if (error?.status === 401) {
        //   dispatch(logout());
        // }
        dispatch(logout());
      }

      dispatch(setInitialized(true));
    }
  }, [data, isLoading, isError, dispatch]);

  return {
    initialized,
    isLoading,
    isError,
    error,
  };
}
