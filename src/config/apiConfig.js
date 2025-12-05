// config/apiConfig.js
import { createBaseQueryWithReauth } from './baseQueryWithReAuth'

export const createApiService = ({
  reducerPath,
  baseUrl = '',
  tagTypes = [],
  // Performance options
  keepUnusedDataFor = 60,
  refetchOnMountOrArgChange = false,
  refetchOnFocus = true,
  refetchOnReconnect = true,
}) => ({
  reducerPath,
  baseQuery: createBaseQueryWithReauth(baseUrl),
  tagTypes,
  keepUnusedDataFor,
  refetchOnMountOrArgChange,
  refetchOnFocus,
  refetchOnReconnect,
  // Enable for code splitting
  endpoints: () => ({}),
});