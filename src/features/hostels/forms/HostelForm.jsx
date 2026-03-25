import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "../../../context/ModalContext"
import {
  useCreateHostelMutation,
  useUpdateHostelMutation,
} from "../api/hostelApi"
import { useLocations } from "@/features/locations/hooks/useLocations"
import toast from "react-hot-toast"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { formTemplates, validationSchemas } from "@/utils/FormTempletes"

const HostelForm = ({ editingItem }) => {
  const { closeModal } = useModal()
  const { selectedLocation } = useLocations()

  const [serverError, setServerError] = useState(null)

  const [createHostel, { isLoading: isCreating }] =
    useCreateHostelMutation()

  const [updateHostel, { isLoading: isUpdating }] =
    useUpdateHostelMutation()

  const isLoading = isCreating || isUpdating

  // ✅ REMOVE location field from template
  const filteredFields = formTemplates.hostel.filter(
    (f) => f.name !== "location_id"
  )

  const initialValues = editingItem
    ? {
        ...editingItem,
      }
    : {
        hostel_name: "",
        description: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        hostel_type: "",
        contact_email: "",
        contact_phone: "",
        amenities: "",
        rules: "",
        check_in: "",
        check_out: "",
        total_rooms: "",
        total_beds: "",
        available_rooms: "",
        current_occupancy: "",
        price_per_month: "",
        monthly_revenue: "",
        total_revenue: "",
        rating: "",
        total_reviews: "",
        assigned_admin: "",
        is_active: true,
        is_verified: false,
      }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)

      // ❌ Prevent submit without location
      if (!selectedLocation?.id) {
        toast.error("Please select a location first")
        return
      }

      const hostelData = {
        ...values,

        // ✅ Inject location automatically
        location_id: selectedLocation.id,

        total_rooms: parseInt(values.total_rooms) || null,
        total_beds: parseInt(values.total_beds) || 0,
        available_rooms: parseInt(values.available_rooms) || null,
        current_occupancy: parseInt(values.current_occupancy) || 0,
        price_per_month: parseFloat(values.price_per_month) || null,
        monthly_revenue: parseFloat(values.monthly_revenue) || null,
        total_revenue: parseFloat(values.total_revenue) || null,
        rating: parseFloat(values.rating) || null,
        total_reviews: parseInt(values.total_reviews) || null,
      }

      if (editingItem?.id) {
        await updateHostel({
          hostelId: editingItem.id,
          ...hostelData,
        }).unwrap()

        toast.success("Hostel updated successfully")
      } else {
        await createHostel(hostelData).unwrap()

        toast.success("Hostel created successfully")
      }

      closeModal()
    } catch (error) {
      console.error(error)

      const message =
        error?.data?.detail ||
        error?.message ||
        "Something went wrong"

      setServerError(message)
      toast.error(message)
    } finally {
      setSubmitting(false)
    }
  }

  const renderField = (field) => {
    if (
      field.type !== "textarea" &&
      field.type !== "checkbox"
    ) {
      return (
        <Field name={field.name}>
          {({ field: formikField }) => (
            <Input {...formikField} type={field.type} />
          )}
        </Field>
      )
    }

    if (field.type === "textarea") {
      return (
        <Field name={field.name}>
          {({ field: formikField }) => (
            <Textarea {...formikField} rows={3} />
          )}
        </Field>
      )
    }

    if (field.type === "checkbox") {
      return (
        <Field name={field.name}>
          {({ field: formikField, form }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formikField.value}
                onCheckedChange={(val) =>
                  form.setFieldValue(field.name, val)
                }
              />
              <span className="text-sm">{field.label}</span>
            </div>
          )}
        </Field>
      )
    }
  }

  // ❌ BLOCK if no location selected
  if (!selectedLocation) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Please select a location first
      </div>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.hostel}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">

          {/* LOCATION INFO */}
          <div className="text-sm text-muted-foreground">
            📍 Location:{" "}
            <span className="font-medium text-foreground">
              {selectedLocation.city}
            </span>
          </div>

          {/* ERROR */}
          {serverError && (
            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <p className="text-sm text-red-700">
                {serverError}
              </p>
            </div>
          )}

          {/* FORM FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFields.map((field) => (
              <div
                key={field.name}
                className={
                  field.type === "textarea"
                    ? "md:col-span-2 space-y-2"
                    : "space-y-2"
                }
              >
                <label className="text-sm font-medium">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500"> *</span>
                  )}
                </label>

                {renderField(field)}

                <ErrorMessage
                  name={field.name}
                  component="p"
                  className="text-xs text-red-500"
                />
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="flex-1"
            >
              {isLoading
                ? "Saving..."
                : editingItem
                ? "Update Hostel"
                : "Create Hostel"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  )
}

export default HostelForm