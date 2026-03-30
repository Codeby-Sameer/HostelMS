import { useDispatch, useSelector } from "react-redux"
import { resetAllocation } from "@/features/global/store/allocationSlice"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { RoomSelector } from "@/features/rooms/components/RoomSelectors"
import { BedSelector } from "@/features/rooms/components/BedSelectors"

import { useTransferStudentMutation } from "../api/tenantApi"
import { useState, useEffect } from "react"

export default function TransferStudentForm({ editingItem, onClose }) {
  const dispatch = useDispatch()

  const student = editingItem // ✅ FIX

  const { roomId, bedId } = useSelector((state) => state.allocation)

  const [notes, setNotes] = useState("")
  const [transferStudent, { isLoading }] = useTransferStudentMutation()

  useEffect(() => {
    if (student) {
      dispatch({ type: "allocation/setRoom", payload: student.room_id })
      dispatch({ type: "allocation/setBed", payload: student.bed_id })
    }

    return () => {
      dispatch(resetAllocation())
    }
  }, [student, dispatch])

  const handleSubmit = async () => {
    if (!roomId) return alert("Select room")

    if (roomId === student.room_id && bedId === student.bed_id) {
      return alert("No changes detected")
    }

    try {
      await transferStudent({
        studentId: student.student_id,
        newRoom: roomId,
        newBed: bedId || null,
        notes,
      }).unwrap()

      dispatch(resetAllocation())
      onClose()
    } catch (err) {
      console.error(err)
      alert("Transfer failed")
    }
  }

  if (!student) return null // ✅ safety

  return (
    <div className="space-y-4">

      <div>
        <h2 className="text-lg font-semibold">
          Transfer {student.student_name}
        </h2>
      </div>

      <div className="text-sm text-muted-foreground">
        Current: Room {student.room_id || "NA"} / Bed {student.bed_id || "NA"}
      </div>

      <RoomSelector />
      <BedSelector />

      <Textarea
        placeholder="Optional notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="flex justify-end gap-2 pt-2">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>

        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Transferring..." : "Transfer"}
        </Button>
      </div>

    </div>
  )
}