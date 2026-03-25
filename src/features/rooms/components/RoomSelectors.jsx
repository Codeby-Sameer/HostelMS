import { useDispatch, useSelector } from "react-redux"
import { setRoom } from "../../global/store/allocationSlice"
import { useRoomsByHostel } from "../hooks/useRoomsByHostel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function RoomSelector() {
  const dispatch = useDispatch()

  const hostelId = useSelector((s) => s.allocation.hostelId)
  const selectedRoom = useSelector((s) => s.allocation.roomId)

  const { rooms } = useRoomsByHostel({
    onlyAvailable: true,
  })

  if (!hostelId) return null

  return (
    <Select
      value={selectedRoom ? String(selectedRoom) : ""}
      onValueChange={(value) =>
        dispatch(setRoom(Number(value)))
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Room" />
      </SelectTrigger>

      <SelectContent>
        {rooms.map((room) => (
          <SelectItem key={room.id} value={String(room.id)}>
            Room {room.room_number}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}