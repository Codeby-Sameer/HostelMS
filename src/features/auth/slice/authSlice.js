// features/auth/authSlice.js
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  stats: null,
  loading: false,
  error: null,
  lastRefreshed: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('Login action payload:', action.payload);
      
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.lastRefreshed = Date.now();
      state.initialized = true;          
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.stats = null;
      state.loading = false;
      state.error = null;
      state.lastRefreshed = null;
      state.initialized = true;         
    },

    tokenRefreshed: (state) => {
      state.lastRefreshed = Date.now();
      state.error = null;
    },

    updateToken: (state, action) => {
      state.token = action.payload;
      state.lastRefreshed = Date.now();
    },

    clearError: (state) => {
      state.error = null;
    },

    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

   
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },

   
    setInitialized: (state, action) => {
      state.initialized = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase('auth/login/pending', (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase('auth/login/fulfilled', (state, action) => {
        const { user, token, stats } = action.payload;
        state.user = user;
        state.token = token;
        state.stats = user?.role === 'admin' ? stats || null : null;
        state.loading = false;
        state.error = null;
        state.lastRefreshed = Date.now();
        state.initialized = true;     
      })
      .addCase('auth/login/rejected', (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.stats = null;
        state.lastRefreshed = null;
        state.initialized = true;      
        state.error = action.error?.message || 'Login failed';
      });
  },
});
export const { 
  login, 
  logout, 
  tokenRefreshed,
  updateToken,
  clearError,
  updateUser,
  setUser,           
  setInitialized,    
} = authSlice.actions;


// ================= SELECTORS =================

// 1. Basic selectors
export const selectAuth = (state) => state.auth;
export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
export const selectStats = (state) => state.auth.stats;
export const selectLastRefreshed = (state) => state.auth.lastRefreshed;

// 2. Derived selectors (memoized for performance)
export const selectIsAuthenticated = createSelector(
  [selectCurrentUser],
  (user) => !!user
);

// Note: Your user object uses 'role' field, not 'type'
export const selectUserRole = createSelector(
  [selectCurrentUser],
  (user) => user?.role 
);

export const selectUserId = createSelector(
  [selectCurrentUser],
  (user) => user?.id
);

export const selectUserEmail = createSelector(
  [selectCurrentUser],
  (user) => user?.email
);

export const selectUserName = createSelector(
  [selectCurrentUser],
  (user) => user?.name
);

// 3. Role-based selectors
export const selectIsSuperAdmin = createSelector(
  [selectUserRole],
  (role) => role === 'superadmin'
);

export const selectIsHostelAdmin = createSelector(
  [selectUserRole],
  (role) => role === 'hosteladmin'
);

export const selectIsStudent = createSelector(
  [selectUserRole],
  (role) => role === 'student'
);

export const selectIsVisitor = createSelector(
  [selectUserRole],
  (role) => role === 'visitor'
);

// 4. Composite selectors (combining multiple fields)
export const selectUserProfile = createSelector(
  [selectCurrentUser, selectStats],
  (user, stats) => ({
    ...user,
    stats: user?.role === 'admin' ? stats : null,
    isAdmin: user?.role === 'admin',
    isSuperAdmin: user?.role === 'super-admin',
  })
);

// 5. Token validation selector (check if token is expired)
export const selectIsTokenValid = createSelector(
  [selectLastRefreshed],
  (lastRefreshed) => {
    if (!lastRefreshed) return false;
    const TOKEN_LIFETIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return Date.now() - lastRefreshed < TOKEN_LIFETIME;
  }
);

// 6. Complete auth state selector
export const selectAuthState = createSelector(
  [
    selectCurrentUser,
    selectIsAuthenticated,
    selectUserRole,
    selectAuthLoading,
    selectAuthError,
    selectIsTokenValid,
  ],
  (user, isAuthenticated, role, loading, error, isTokenValid) => ({
    user,
    isAuthenticated,
    role,
    loading,
    error,
    isTokenValid,
    hasToken: !!user && isTokenValid,
  })
);

export default authSlice.reducer;

// ================= HELPER FUNCTIONS =================

// Helper function to get dashboard path based on role
export const getDashboardPathByRole = (role) => {
  const rolePaths = {
    'superadmin': '/super-admin',
    'admin': '/hostel-admin',
    'student': '/student',
    'visitor': '/visitor',
    // 'admin': '/admin', // Fallback for generic admin
  };
  
  return rolePaths[role] || '/dashboard';
};

// Helper function to check if user has required role
export const hasRequiredRole = (userRole, requiredRoles) => {
  if (!requiredRoles || requiredRoles.length === 0) return true;
  if (!userRole) return false;
  return requiredRoles.includes(userRole);
};