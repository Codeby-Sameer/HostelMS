import { useSelector } from "react-redux"
import { useRoomsByHostel } from "./useRoomsByHostel"

export const useSelectedRoom = () => {
  const selectedRoomId = useSelector(
    (state) => state.allocation.roomId
  )

  const { rooms, isLoading } = useRoomsByHostel()

  const selectedRoom =
    rooms.find((room) => room.id === selectedRoomId) || null

  return {
    rooms,
    selectedRoom,
    selectedRoomId,
    isLoading,
  }
}