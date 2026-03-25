// src/features/rooms/api/roomApi.js
import { appApi } from '../../../services/api/appApi';
import { providesList, invalidatesList, buildQueryParams } from '../../../services/api/apiHelpers';

export const roomApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // Room Management
    getRooms: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/rooms/',
        params: buildQueryParams({
          skip: params?.skip,
          limit: params?.limit,
          hostel_id:params?.hostelId,
          room_type: params?.roomType,
          maintenance_status: params?.maintenanceStatus,
          min_price: params?.minPrice,
          max_price: params?.maxPrice,
          min_capacity: params?.minCapacity,
          only_available: params?.onlyAvailable,
          amenities_like: params?.amenitiesLike,
        }),
      }),
      providesTags: (result) => providesList(result, 'Room'),
    }),

    getRoomById: builder.query({
      query: (roomId) => `/api/v1/admin/rooms/${roomId}`,
      providesTags: (result, error, roomId) => [{ type: 'Room', id: roomId }],
    }),

    createRoom: builder.mutation({
      query: (roomData) => ({
        url: '/api/v1/admin/rooms/',
        method: 'POST',
        body: roomData,
      }),
      invalidatesTags: invalidatesList('Room'),
    }),

    updateRoom: builder.mutation({
      query: ({ roomId, ...data }) => ({
        url: `/api/v1/admin/rooms/${roomId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { roomId }) => [
        { type: 'Room', id: roomId },
        { type: 'Room', id: 'LIST' },
      ],
    }),

    deleteRoom: builder.mutation({
      query: (roomId) => ({
        url: `/api/v1/admin/rooms/${roomId}`,
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesList('Room'),
    }),

    bulkImportRooms: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: '/api/v1/admin/rooms/bulk',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: invalidatesList('Room'),
    }),

    exportRooms: builder.query({
      query: (params) => ({
        url: '/api/v1/admin/rooms/export',
        params: buildQueryParams({
          room_type: params?.roomType,
          maintenance_status: params?.maintenanceStatus,
          min_price: params?.minPrice,
          max_price: params?.maxPrice,
          min_capacity: params?.minCapacity,
          only_available: params?.onlyAvailable,
          amenities_like: params?.amenitiesLike,
        }),
      }),
    }),

    setRoomMaintenance: builder.mutation({
      query: ({ roomId, maintenanceStatus }) => ({
        url: `/api/v1/admin/rooms/${roomId}/maintenance`,
        method: 'POST',
        params: { maintenance_status: maintenanceStatus },
      }),
      invalidatesTags: (result, error, { roomId }) => [
        { type: 'Room', id: roomId },
      ],
    }),

    setRoomAvailability: builder.mutation({
      query: ({ roomId, availability }) => ({
        url: `/api/v1/admin/rooms/${roomId}/availability`,
        method: 'POST',
        params: { availability },
      }),
      invalidatesTags: (result, error, { roomId }) => [
        { type: 'Room', id: roomId },
      ],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomByIdQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useBulkImportRoomsMutation,
  useLazyExportRoomsQuery,
  useSetRoomMaintenanceMutation,
  useSetRoomAvailabilityMutation,
} = roomApi;