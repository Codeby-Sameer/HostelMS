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
      console.log(token)
      
      // Set default headers
      Object.entries(apiConfig.headers).forEach(([key, value]) => {
        headers.set(key, value);
      });
      
      // Add auth token if available and endpoint is not public
      if (token && !isPublicEndpoint(endpoint)) {
        headers.set('Authorization', `Bearer ${token}`);
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
    if (response.status === 401) {
      // Handle unauthorized - could dispatch logout action
      console.error('Unauthorized access');
    }
    return response.data?.detail || response.error || 'An error occurred';
  },
});