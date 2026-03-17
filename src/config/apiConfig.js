// src/config/apiConfig.js

// Environment configurations
const environments = {
  development: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000',
    timeout: 30000,
    logRequests: true,
    logResponses: true,
  },
  staging: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://staging-api.yourhostelms.com',
    timeout: 30000,
    logRequests: false,
    logResponses: false,
  },
  production: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://api.yourhostelms.com',
    timeout: 30000,
    logRequests: false,
    logResponses: false,
  },
};

// Get current environment
const getEnvironment = () => {
  if (import.meta.env.PROD) {
    // Check if it's staging or production based on URL or env var
    if (import.meta.env.VITE_APP_ENV === 'staging') {
      return 'staging';
    }
    return 'production';
  }
  return 'development';
};

const currentEnv = getEnvironment();
const envConfig = environments[currentEnv];

export const apiConfig = {
  // Base configuration
  ...envConfig,
  
  // API version
  apiVersion: 'v1',
  
  // Default headers
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // Public endpoints (no auth required)
  publicEndpoints: [
    '/api/v1/auth/login',
    '/api/v1/auth/register',
    '/api/v1/auth/verify-otp',
    '/api/v1/auth/resend-otp',
    '/api/v1/auth/forgot-password',
    '/api/v1/auth/verify-reset-code',
    '/api/v1/auth/reset-password',
    '/api/v1/auth/password-strength',
    '/health',
    '/',
  ],
  
  // Role-based route prefixes
  rolePrefixes: {
    SUPERADMIN: '/api/v1/admin',
    ADMIN: '/api/v1/hostel_admin',
    SUPERVISOR: '/api/v1/supervisor',
    STUDENT: '/api/v1/student',
    VISITOR: '/api/v1/visitor',
  },
  
  // Pagination defaults
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
    pageSizes: [10, 25, 50, 100],
  },
  
  // File upload limits
  upload: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
    allowedDocumentTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    maxFilesPerUpload: 10,
  },
  
  // Retry configuration
  retry: {
    maxRetries: 3,
    retryDelay: 1000, // ms
    retryCondition: (error) => {
      // Retry on network errors or 5xx server errors
      return error?.status >= 500 || error?.status === 0;
    },
  },
  
  // Cache durations (in seconds)
  cacheDuration: {
    short: 30,      // 30 seconds
    medium: 300,    // 5 minutes
    long: 3600,     // 1 hour
    veryLong: 86400, // 24 hours
  },
};

// Helper: Get full API URL
export const getApiUrl = (path) => {
  const baseUrl = apiConfig.baseUrl.endsWith('/') 
    ? apiConfig.baseUrl.slice(0, -1) 
    : apiConfig.baseUrl;
  
  const apiPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${apiPath}`;
};

// Helper: Check if endpoint is public
export const isPublicEndpoint = (url) => {
  return apiConfig.publicEndpoints.some(endpoint => url.includes(endpoint));
};

// Helper: Get role-specific base path
export const getRoleBasePath = (role) => {
  return apiConfig.rolePrefixes[role] || '';
};

// Helper: Build URL with query parameters
export const buildUrl = (basePath, params = {}) => {
  const url = new URL(getApiUrl(basePath));
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(v => url.searchParams.append(key, v));
      } else {
        url.searchParams.append(key, value);
      }
    }
  });
  
  return url.toString();
};

// Helper: Get cache time based on importance
export const getCacheTime = (importance = 'medium') => {
  return apiConfig.cacheDuration[importance] || apiConfig.cacheDuration.medium;
};

export default apiConfig;