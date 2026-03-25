import { configureStore } from "@reduxjs/toolkit";
import rtkLogger from "./rtkLogger.js";
import allocationReducer from '@/features/global/store/allocationSlice.js'

import authSliceReducer from '@/features/auth/slice/authSlice.js'
import { appApi } from "@/services/api/appApi.js";

// localStorage persistence middleware
const authLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Save auth state to localStorage on changes
  if (action.type.startsWith('auth/')) {
    const authState = store.getState().auth;
    try {
      localStorage.setItem('authState', JSON.stringify({
        user: authState.user,
        token: authState.token,
        stats: authState.stats,
      }));
      console.log('✓ Auth state saved to localStorage');
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  }
  
  return result;
};

const Store = configureStore({
    reducer: {
        auth: authSliceReducer,
        allocation:allocationReducer,
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(appApi.middleware)
      .concat(rtkLogger)
      .concat(authLocalStorageMiddleware),
    devTools: import.meta.env.REACT_APP_ENV !== 'production', // ✅ enables Redux DevTools
})
export default Store