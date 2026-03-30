import { useDispatch, useSelector } from "react-redux"
import { setBed } from "../../global/store/allocationSlice"
import { useGetAvailableBedsQuery } from "../api/bedApi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function BedSelector() {
  const dispatch = useDispatch()

 const { hostelId, roomId, bedId } = useSelector(
    (state) => state.allocation
  )
  

  const { data: beds } = useGetAvailableBedsQuery(
    { roomId,hostelId },
    { skip: !roomId }
  )

  if (!roomId) return null

  return (
    <Select
      value={bedId ? String(bedId) : ""}
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