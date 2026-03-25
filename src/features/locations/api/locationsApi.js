// src/features/locations/api/locationsApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const locationsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all locations
    getLocations: builder.query({
      query: (params = {}) => ({
        url: '/api/v1/locations/',
        params: buildQueryParams({
          skip: params?.skip || 0,
          limit: params?.limit || 100,
          search: params?.search,
        }),
      }),
      providesTags: (result) => providesList(result?.data || result || [], 'Location'),
    }),

    // Get location by ID
    getLocationById: builder.query({
      query: (locationId) => `/api/v1/locations/${locationId}`,
      providesTags: (result, error, locationId) => [{ type: 'Location', id: locationId }],
    }),

    // Create location
    createLocation: builder.mutation({
      query: (locationData) => ({
        url: '/api/v1/locations/',
        method: 'POST',
        body: locationData,
      }),
      invalidatesTags: invalidatesList('Location'),
    }),

    // Update location
    updateLocation: builder.mutation({
      query: ({ locationId, ...data }) => ({
        url: `/api/v1/locations/${locationId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { locationId }) => [
        { type: 'Location', id: locationId },
        { type: 'Location', id: 'LIST' },
      ],
    }),

    // Delete location
    deleteLocation: builder.mutation({
      query: (locationId) => ({
        url: `/api/v1/locations/${locationId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Location'),
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} = locationsApi;
