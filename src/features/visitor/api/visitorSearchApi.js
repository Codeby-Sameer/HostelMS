// src/features/visitor/api/visitorSearchApi.js
import { appApi } from '../../../services/api/appApi';

export const visitorSearchApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Search hostels with filters
    searchHostels: builder.mutation({
      query: (searchParams) => ({
        url: '/api/v1/api/v1/visitor/search/hostels',
        method: 'POST',
        body: searchParams,
      }),
    }),

    // Get hostel details by ID
    getHostelDetails: builder.query({
      query: (hostelId) => `/api/v1/api/v1/visitor/search/hostels/${hostelId}`,
    }),

    // Get autocomplete suggestions
    getAutocomplete: builder.query({
      query: (searchTerm) => ({
        url: '/api/v1/api/v1/visitor/search/autocomplete',
        params: { query: searchTerm },
      }),
    }),

    // Get available cities
    getAvailableCities: builder.query({
      query: () => '/api/v1/api/v1/visitor/search/cities',
    }),

    // Get available amenities
    getAvailableAmenities: builder.query({
      query: () => '/api/v1/api/v1/visitor/search/amenities',
    }),

    // Get search facets (filters options)
    getSearchFacets: builder.query({
      query: () => '/api/v1/api/v1/visitor/search/facets',
    }),
  }),
});

export const {
  useSearchHostelsMutation,
  useGetHostelDetailsQuery,
  useGetAutocompleteQuery,
  useGetAvailableCitiesQuery,
  useGetAvailableAmenitiesQuery,
  useGetSearchFacetsQuery,
} = visitorSearchApi;
