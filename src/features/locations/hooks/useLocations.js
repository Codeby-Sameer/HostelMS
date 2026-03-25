import { useState, useCallback, useEffect } from 'react';
import {
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} from '../api/locationsApi';

/**
 * Hook for managing locations in super admin dashboard
 * Provides methods for crud operations, filtering, and state management
 */
export const useLocations = (options = {}) => {
  const { skip = 0, limit = 100, search = '' } = options;
  
  const [filters, setFilters] = useState({
    search: search || '',
    state: '',
  });

  // RTK Query hooks
  const { data: locationsData, isLoading, error, refetch, isFetching } = useGetLocationsQuery({
    skip,
    limit,
    search: filters.search,
  });

  // Log errors for debugging
  useEffect(() => {
    if (error) {
      if (error?.status !== 404 && error?.status !== '404') {
        console.error('Locations API Error:', error);
      }
    }
  }, [error]);

  const [createLocation, { isLoading: isCreating }] = useCreateLocationMutation();
  const [updateLocation, { isLoading: isUpdating }] = useUpdateLocationMutation();
  const [deleteLocation, { isLoading: isDeleting }] = useDeleteLocationMutation();

  // Extract locations from response
  const locations = locationsData?.data || locationsData || [];

  // Handle create
  const handleCreate = useCallback(async (locationData) => {
    try {
      const result = await createLocation(locationData).unwrap();
      return result;
    } catch (err) {
      console.error('Error creating location:', err);
      throw err;
    }
  }, [createLocation]);

  // Handle update
  const handleUpdate = useCallback(async (locationId, locationData) => {
    try {
      const result = await updateLocation({
        locationId,
        ...locationData,
      }).unwrap();
      return result;
    } catch (err) {
      console.error('Error updating location:', err);
      throw err;
    }
  }, [updateLocation]);

  // Handle delete
  const handleDelete = useCallback(async (locationId) => {
    try {
      await deleteLocation(locationId).unwrap();
    } catch (err) {
      console.error('Error deleting location:', err);
      throw err;
    }
  }, [deleteLocation]);

  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }));
  }, []);

  // Filter locations based on current filters
  const filteredLocations = locations.filter(location => {
    if (filters.state && location.state !== filters.state) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        (location.city || '').toLowerCase().includes(searchLower) ||
        (location.state || '').toLowerCase().includes(searchLower) ||
        (location.country || '').toLowerCase().includes(searchLower) ||
        (location.region || '').toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  return {
    locations: filteredLocations,
    allLocations: locations,
    isLoading,
    error,
    isFetching,
    filters,
    updateFilters,
    createLocation: handleCreate,
    updateLocation: handleUpdate,
    deleteLocation: handleDelete,
    isCreating,
    isUpdating,
    isDeleting,
    refetch,
  };
};
