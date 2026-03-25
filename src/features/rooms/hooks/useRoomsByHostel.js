import { useSelector } from "react-redux"
import { useGetRoomsQuery } from "../api/roomApi"

export const useRoomsByHostel = ({ onlyAvailable = false } = {}) => {
  const selectedHostelId = useSelector(
    (state) => state.allocation.hostelId
  )

  const { data, isLoading, isFetching, error } = useGetRoomsQuery(
    {
      hostelId: selectedHostelId,
      onlyAvailable,
    },
    {
      skip: !selectedHostelId, // ✅ prevent API call if no hostel
    }
  )

  const rooms = data || []

  return {
    rooms,
    isLoading,
    isFetching,
    error,
    selectedHostelId,
  }
}