// src/features/hostels/api/hostelSearchApi.js
import { appApi } from '../../../services/api/appApi';
import { buildQueryParams } from '../../../services/api/apiHelpers';

export const hostelSearchApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Visitor Search
    searchHostels: builder.mutation({
      query: (searchRequest) => ({
        url: '/api/v1/visitor/search/hostels',
        method: 'POST',
        body: searchRequest,
      }),
    }),

    autocompleteSearch: builder.query({
      query: ({ query, field = 'name', limit = 10 }) => ({
        url: '/api/v1/visitor/search/autocomplete',
        params: { query, field, limit },
      }),
    }),

    getHostelDetails: builder.query({
      query: (hostelId) => `/api/v1/visitor/search/hostels/${hostelId}`,
    }),

    getAvailableCities: builder.query({
      query: () => '/api/v1/visitor/search/cities',
    }),

    getAvailableAmenities: builder.query({
      query: () => '/api/v1/visitor/search/amenities',
    }),

    getSearchFacets: builder.query({
      query: () => '/api/v1/visitor/search/facets',
    }),
  }),
});

export const {
  useSearchHostelsMutation,
  useAutocompleteSearchQuery,
  useLazyAutocompleteSearchQuery,
  useGetHostelDetailsQuery,
  useGetAvailableCitiesQuery,
  useGetAvailableAmenitiesQuery,
  useGetSearchFacetsQuery,
} = hostelSearchApi;