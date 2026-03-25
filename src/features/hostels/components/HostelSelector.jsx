import { useDispatch, useSelector } from "react-redux"
import { setHostel } from "../../global/store/allocationSlice"
import { useAdminHostels } from "../hooks/useAdminHostels"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function HostelSelector() {
  const dispatch = useDispatch()
  const { hostels } = useAdminHostels()

  const selectedHostel = useSelector(
    (state) => state.allocation.hostelId
  )

  return (
    <Select
      value={selectedHostel ? String(selectedHostel) : ""}
      onValueChange={(value) =>
        dispatch(setHostel(Number(value)))
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Hostel" />
      </SelectTrigger>

      <SelectContent>
        {hostels.map((hostel) => (
          <SelectItem key={hostel.id} value={String(hostel.id)}>
            {hostel.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}