import { useSelector } from "react-redux"
import { useGetAvailableBedsQuery } from "@/features/rooms/api/bedApi"

export const useSelectedBed = () => {
  const { roomId, bedId } = useSelector(
    (state) => state.allocation
  )

  const { data, isLoading } = useGetAvailableBedsQuery(
    { roomId },
    { skip: !roomId }
  )

  const beds = data || []

  const selectedBed =
    beds.find((bed) => bed.id === bedId) || null

  return {
    beds,
    selectedBed,
    bedId,
    isLoading,
  }
}