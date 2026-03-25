import { useDispatch, useSelector } from "react-redux"
import { setBed } from "../../global/store/allocationSlice"
import { useGetAvailableBedsQuery } from "../api/bedApi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function BedSelector() {
  const dispatch = useDispatch()

  const roomId = useSelector((s) => s.allocation.roomId)
  const selectedBed = useSelector((s) => s.allocation.bedId)

  const { data: beds } = useGetAvailableBedsQuery(
    { roomId },
    { skip: !roomId }
  )

  if (!roomId) return null

  return (
    <Select
      value={selectedBed ? String(selectedBed) : ""}
      onValueChange={(value) =>
        dispatch(setBed(Number(value)))
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Bed" />
      </SelectTrigger>

      <SelectContent>
        {(beds || []).map((bed) => (
          <SelectItem key={bed.id} value={String(bed.id)}>
            Bed {bed.bed_number}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}