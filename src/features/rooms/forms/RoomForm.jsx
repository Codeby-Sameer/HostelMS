import React from "react"
import { Formik, Form } from "formik"
import {
  useCreateRoomMutation,
  useUpdateRoomMutation
} from "@/features/rooms/api/roomApi"
import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

const RoomForm = ({ editingItem, onClose }) => {
  const { selectedHostel } = useAdminHostels()

  const [createRoom, { isLoading: isCreating }] = useCreateRoomMutation()
  const [updateRoom, { isLoading: isUpdating }] = useUpdateRoomMutation()

  const isEdit = Boolean(editingItem)

  const initialValues = editingItem || {
    room_number: "",
    room_type: "",
    room_capacity: "",
    monthly_price: "",
    quarterly_price: "",
    annual_price: "",
    availability: "",
    amenities: "",
    maintenance_status: "ok",
  }

  const handleSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        hostel_id: selectedHostel.id,
        room_capacity: Number(values.room_capacity),
        monthly_price: Number(values.monthly_price),
        quarterly_price: Number(values.quarterly_price),
        annual_price: Number(values.annual_price),
        availability: Number(values.availability),
      }

      if (isEdit) {
        await updateRoom({
          roomId: editingItem.id,
          ...payload,
        }).unwrap()
      } else {
        await createRoom(payload).unwrap()
      }

      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="space-y-6">

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  name="room_number"
                  placeholder="Room Number"
                  value={values.room_number}
                  onChange={handleChange}
                />

                <Select
                  value={values.room_type}
                  onValueChange={(v) => setFieldValue("room_type", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                    <SelectItem value="triple">Triple</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  name="room_capacity"
                  type="number"
                  placeholder="Capacity"
                  value={values.room_capacity}
                  onChange={handleChange}
                />

                <Input
                  name="availability"
                  type="number"
                  placeholder="Available Beds"
                  value={values.availability}
                  onChange={handleChange}
                />

                <Input
                  name="monthly_price"
                  type="number"
                  placeholder="Monthly Price"
                  value={values.monthly_price}
                  onChange={handleChange}
                />

                <Input
                  name="quarterly_price"
                  type="number"
                  placeholder="Quarterly Price"
                  value={values.quarterly_price}
                  onChange={handleChange}
                />

                <Input
                  name="annual_price"
                  type="number"
                  placeholder="Annual Price"
                  value={values.annual_price}
                  onChange={handleChange}
                />

                <Select
                  value={values.maintenance_status}
                  onValueChange={(v) =>
                    setFieldValue("maintenance_status", v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Maintenance Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ok">OK</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  name="amenities"
                  placeholder="Amenities"
                  value={values.amenities}
                  onChange={handleChange}
                  className="md:col-span-2"
                />
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isCreating || isUpdating}
                  className="flex-1"
                >
                  {(isCreating || isUpdating)
                    ? "Saving..."
                    : isEdit
                      ? "Update Room"
                      : "Create Room"}
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>

            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default RoomForm