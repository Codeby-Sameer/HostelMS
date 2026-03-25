import React from "react"
import { Formik, Form } from "formik"
import { useSelector } from "react-redux"

import {
  useCreateStudentMutation,
  useUpdateStudentMutation,
} from "@/features/users/api/tenantApi"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"
import { useSelectedBed } from "@/features/rooms/hooks/useSelectedBed"
import { useSelectedRoom } from "@/features/rooms/hooks/useSelectedRoom"


const StudentForm = ({ editingItem, onClose }) => {

  // ✅ GLOBAL ALLOCATION
  // const { hostelId, roomId, bedId } = useSelector(
  //   (state) => state.allocation
  // )
  const { selectedHostel } = useAdminHostels()
  const { selectedRoom } = useSelectedRoom()
  const { selectedBed } = useSelectedBed()

  const [createStudent, { isLoading: creating }] =
    useCreateStudentMutation()

  const [updateStudent, { isLoading: updating }] =
    useUpdateStudentMutation()

  const isEdit = Boolean(editingItem)

  // ✅ INITIAL VALUES (auto-prefilled)
  const initialValues = editingItem || {
    student_id: "",
    student_name: "",
    student_email: "",
    student_phone: "",
    date_of_birth: "",
    guardian_name: "",
    guardian_phone: "",
    emergency_contact: "",
    check_in_date: "",
    check_out_date: "",
    status: "active",
    password: "",
    confirm_password: "",
  }

  const handleSubmit = async (values) => {
    const hasAllocation =
      selectedHostel?.id &&
      selectedRoom?.id &&
      selectedBed?.id

    const payload = {
      ...values,
      hostel_id: selectedHostel.id,
      room_id: selectedRoom.id,
      bed_id: selectedBed.id,

      room_assignment: hasAllocation ? "assigned" : null,
      bed_assignment: hasAllocation ? "assigned" : null,
    }

    try {
      if (isEdit) {
        await updateStudent({
          studentId: editingItem.student_id,
          ...payload,
        }).unwrap()
      } else {
        await createStudent(payload).unwrap()
      }

      onClose()
    } catch (err) {
      console.error("Student error:", err)
    }
  }

  // ❌ SAFETY GUARD
  if (!selectedBed || !selectedHostel || !selectedRoom) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        Please select Hostel → Room → Bed first
      </div>
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (

        <Form className="space-y-6">

          {/* INFO BANNER */}
          <div className="text-sm text-muted-foreground">
            <p>Hostel: {selectedHostel?.name}</p>
            <p className="text-xs text-green-600">
              Room: {selectedRoom?.room_number} → Assigned ✅
            </p>

            <p className="text-xs text-green-600">
              Bed: {selectedBed?.bed_number} → Assigned ✅
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-4">

            <Input name="student_id" placeholder="Student ID" value={values.student_id} onChange={handleChange} />

            <Input name="student_name" placeholder="Name" value={values.student_name} onChange={handleChange} />

            <Input name="student_email" placeholder="Email" value={values.student_email} onChange={handleChange} />

            <Input name="student_phone" placeholder="Phone" value={values.student_phone} onChange={handleChange} />

            <Input type="date" name="date_of_birth" value={values.date_of_birth} onChange={handleChange} />

            <Input name="guardian_name" placeholder="Guardian Name" value={values.guardian_name} onChange={handleChange} />

            <Input name="guardian_phone" placeholder="Guardian Phone" value={values.guardian_phone} onChange={handleChange} />

            <Input name="emergency_contact" placeholder="Emergency Contact" value={values.emergency_contact} onChange={handleChange} />

            <Input type="date" name="check_in_date" value={values.check_in_date} onChange={handleChange} />

            <Input type="date" name="check_out_date" value={values.check_out_date} onChange={handleChange} />

            {!isEdit && (
              <>
                <Input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />

                <Input type="password" name="confirm_password" placeholder="Confirm Password" value={values.confirm_password} onChange={handleChange} />
              </>
            )}

          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">

            <Button
              type="submit"
              disabled={creating || updating}
              className="flex-1"
            >
              {(creating || updating)
                ? "Saving..."
                : isEdit
                  ? "Update Tenant"
                  : "Create Tenant"}
            </Button>

            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

          </div>

        </Form>

      )}
    </Formik>
  )
}

export default StudentForm