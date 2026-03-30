import React from "react"
import { Formik, Form } from "formik"


import {
  useCreateBedMutation,
  useUpdateBedMutation,
} from "@/features/rooms/api/bedApi"

import { useRoomsByHostel } from "../hooks/useRoomsByHostel"

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


import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"
import { HostelSelector } from "@/features/hostels/components/HostelSelector"

const BedForm = ({ editingItem, onClose }) => {
  const{selectedHostel, selectedHostelId}=useAdminHostels()

  const { rooms, isLoading: roomsLoading } = useRoomsByHostel({
    onlyAvailable: true,
  })

  const [createBed, { isLoading: isCreating }] =
    useCreateBedMutation()

  const [updateBed, { isLoading: isUpdating }] =
    useUpdateBedMutation()

  const isEdit = Boolean(editingItem)

  const initialValues = editingItem || {
    bed_number: "",
    room_number: "",
    bed_status: "available",
    monthly_price: "",
    quarterly_price: "",
    annual_price: "",
  }

  const handleSubmit = async (values) => {
    if (!selectedHostelId) return

    try {
      const payload = {
        hostel_id: Number(selectedHostelId),
        bed_number: values.bed_number,
        room_number: values.room_number,
        bed_status: values.bed_status,
        monthly_price: Number(values.monthly_price),
        quarterly_price: Number(values.quarterly_price),
        annual_price: Number(values.annual_price),
      }

      if (isEdit) {
        await updateBed({
          bedId: editingItem.id,
          ...payload,
        }).unwrap()
      } else {
        await createBed(payload).unwrap()
      }

      onClose()
    } catch (err) {
      console.error("Bed Error:", err)
    }
  }


  return (
    <Card>
      <CardContent className="p-4 md:p-6 space-y-6">

        {/* 🔥 SELECTORS */}
        <div className="space-y-3">

          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Hostel
            </p>
            <HostelSelector/>
          </div>

          {/* Selected info */}
          <div className="text-xs text-muted-foreground">
            Selected Hostel:{" "}
            <span className="font-medium text-foreground">
              {selectedHostel.name}
            </span>
          </div>

        </div>

        {/* FORM */}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, handleChange, setFieldValue }) => (

            <Form className="space-y-6">

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* BED NUMBER */}
                <Input
                  name="bed_number"
                  placeholder="Bed Number"
                  value={values.bed_number}
                  onChange={handleChange}
                />

                {/* ROOM */}
                <Select
                  value={values.room_number}
                  onValueChange={(value) => {
                    setFieldValue("room_number", value)

                    const selectedRoom = rooms.find(
                      (r) => r.room_number === value
                    )

                    if (selectedRoom) {
                      setFieldValue(
                        "monthly_price",
                        selectedRoom.monthly_price
                      )
                      setFieldValue(
                        "quarterly_price",
                        selectedRoom.quarterly_price
                      )
                      setFieldValue(
                        "annual_price",
                        selectedRoom.annual_price
                      )
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Room" />
                  </SelectTrigger>

                  <SelectContent>
                    {roomsLoading ? (
                      <SelectItem value="loading" disabled>
                        Loading...
                      </SelectItem>
                    ) : rooms.length === 0 ? (
                      <SelectItem value="empty" disabled>
                        No available rooms
                      </SelectItem>
                    ) : (
                      rooms.map((room) => (
                        <SelectItem
                          key={room.id}
                          value={room.room_number}
                        >
                          Room {room.room_number} ({room.availability})
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>

                {/* STATUS */}
                <Select
                  value={values.bed_status}
                  onValueChange={(v) =>
                    setFieldValue("bed_status", v)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="occupied">Occupied</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>

                {/* PRICES */}
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
                      ? "Update Bed"
                      : "Create Bed"}
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

export default BedForm