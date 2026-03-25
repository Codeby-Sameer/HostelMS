// src/services/api/appApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConfig, getApiUrl, isPublicEndpoint, getCacheTime } from '@/config/apiConfig';
import { getTagTypes } from './apiHelpers';

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
    timeout: apiConfig.timeout,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = getState().auth?.token;
      
      // Set default headers
      Object.entries(apiConfig.headers).forEach(([key, value]) => {
        headers.set(key, value);
      });
      
      // Add token to ALL requests (it will be ignored for public endpoints on the backend)
      // Better approach: send token for all non-public endpoints
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        console.log(`✓ Auth token added for [${endpoint}]`);
      } else {
        console.warn(`✗ No auth token available for endpoint [${endpoint}]`);
      }
      
      return headers;
    },
    credentials: 'include',
  }),
  
  tagTypes: getTagTypes(),
  
  endpoints: () => ({}),
  
  // Global refetch settings
  refetchOnMountOrArgChange: getCacheTime('short'),
  refetchOnFocus: false,
  refetchOnReconnect: true,
  
  // Global error handling
  transformErrorResponse: (response) => {
    // Auto logout on 401 (unauthorized)
    if (response.status === 401) {
      console.error('401 Unauthorized - Session expired or invalid token');
      // Dispatch logout action would go here
      try {
        localStorage.removeItem('authState');
      } catch (error) {
        console.error('Failed to clear auth on 401:', error);
      }
    }
    return response.data?.detail || response.error || 'An error occurred';
  },
});