import { useState, useCallback, useEffect } from 'react';
import {
  useGetHostelsQuery,
  useGetHostelByIdQuery,
  useCreateHostelMutation,
  useUpdateHostelMutation,
  useDeleteHostelMutation,
} from '../api/hostelApi';

/**
 * Hook for managing hostels in super admin dashboard
 * Provides methods for crud operations, filtering, and state management
 */
export const useHostels = (options = {}) => {
  const { skip = 0, limit = 100, search = '' } = options;
  
  const [filters, setFilters] = useState({
    search: search || '',
    status: '',
    tier: '',
  });

  // RTK Query hooks
  const { data: hostelsData, isLoading, error, refetch, isFetching } = useGetHostelsQuery({
    skip,
    limit,
    search: filters.search,
  });

  // Log errors for debugging (suppress console spam)
  useEffect(() => {
    if (error) {
      // Silently handle error - page will show error message to user
      // Only log non-404 errors to console
      if (error?.status !== 404 && error?.status !== '404') {
        console.error('Hostels API Error:', error);
      }
    }
  }, [error]);

  const [createHostel, { isLoading: isCreating }] = useCreateHostelMutation();
  const [updateHostel, { isLoading: isUpdating }] = useUpdateHostelMutation();
  const [deleteHostel, { isLoading: isDeleting }] = useDeleteHostelMutation();

  // Extract hostels from response
  const hostels = hostelsData?.data || hostelsData || [];

  // Handle create
  const handleCreate = useCallback(async (hostelData) => {
    try {
      const result = await createHostel(hostelData).unwrap();
      return result;
    } catch (err) {
      console.error('Error creating hostel:', err);
      throw err;
    }
  }, [createHostel]);

  // Handle update
  const handleUpdate = useCallback(async (hostelId, hostelData) => {
    try {
      const result = await updateHostel({
        hostelId,
        ...hostelData,
      }).unwrap();
      return result;
    } catch (err) {
      console.error('Error updating hostel:', err);
      throw err;
    }
  }, [updateHostel]);

  // Handle delete
  const handleDelete = useCallback(async (hostelId) => {
    try {
      await deleteHostel(hostelId).unwrap();
    } catch (err) {
      console.error('Error deleting hostel:', err);
      throw err;
    }
  }, [deleteHostel]);

  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }));
  }, []);

  // Filter hostels based on current filters
  const filteredHostels = hostels.filter(hostel => {
    if (filters.status && hostel.status !== filters.status) return false;
    if (filters.tier && hostel.subscription_tier !== filters.tier) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        (hostel.hostel_name || '').toLowerCase().includes(searchLower) ||
        (hostel.location || '').toLowerCase().includes(searchLower) ||
        (hostel.address || '').toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  return {
    // Data
    hostels: filteredHostels,
    allHostels: hostels,
    isLoading,
    isFetching,
    error,
    
    // Filters
    filters,
    updateFilters,
    
    // Operations
    createHostel: handleCreate,
    updateHostel: handleUpdate,
    deleteHostel: handleDelete,
    refetch,
    
    // Loading states
    isCreating,
    isUpdating,
    isDeleting,
  };
};

/**
 * Hook for getting single hostel details
 */
export const useHostelDetails = (hostelId) => {
  const { data: hostel, isLoading, error, refetch } = useGetHostelByIdQuery(
    hostelId,
    { skip: !hostelId }
  );

  useEffect(() => {
    if (error) {
      console.error('Hostel Details API Error:', error);
    }
  }, [error]);

  return {
    hostel: hostel?.data || hostel,
    isLoading,
    error,
    refetch,
  };
};
