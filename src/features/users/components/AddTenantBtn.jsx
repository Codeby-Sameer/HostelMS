import { useSelector } from "react-redux"
import { HostelSelector } from "../../hostels/components/HostelSelector"
import { RoomSelector } from "../../rooms/components/RoomSelectors"
import { BedSelector } from "../../rooms/components/BedSelectors"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/ModalContext"

export default function AllocationBar() {
  const { openModal } = useModal()

  const { hostelId, roomId, bedId } = useSelector(
    (s) => s.allocation
  )

  const isReady = hostelId && roomId && bedId

  return (
    <div className="flex flex-col md:flex-row gap-3">

      <HostelSelector />
      <RoomSelector />
      <BedSelector />

      <Button
        disabled={!isReady}
        onClick={() =>
          openModal("student")
        }
      >
        Add Tenant
      </Button>

    </div>
  )
}