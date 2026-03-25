import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import { formTemplates, validationSchemas } from "@/utils/FormTempletes"
import {
  useCreateHostelMutation,
  useUpdateHostelMutation
} from "../api/hostelApi"

const HostelForm = ({ editingItem, onClose }) => {
  // ✅ Proper RTK Query hooks
  const [createHostel, { isLoading: isCreating }] = useCreateHostelMutation()
  const [updateHostel, { isLoading: isUpdating }] = useUpdateHostelMutation()

  const isEdit = Boolean(editingItem)

  const initialValues = editingItem || {
    hostelName: "",
    description: "",
    address: "",
    hostelType: "",
    contactEmail: "",
    contactPhone: "",
    amenities: "",
    rules: "",
    checkInTime: "",
    checkOutTime: "", 
    totalBeds: "",
    occupancy: "",
    revenue: ""
  }

  // ✅ Submit handler with API integration
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (isEdit) {
        await updateHostel({
          id: editingItem.id, // ⚠️ ensure your backend expects this
          ...values
        }).unwrap()
      } else {
        await createHostel(values).unwrap()
      }

      onClose()
    } catch (error) {
      console.error("API Error:", error)
    } finally {
      setSubmitting(false)
    }
  }

  const renderField = (field) => {
    if (field.type !== "select" && field.type !== "textarea" && field.type !== "checkbox") {
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

    if (field.type === "select") {
      return (
        <Field name={field.name}>
          {({ field: formikField, form }) => (
            <Select
              value={formikField.value}
              onValueChange={(value) =>
                form.setFieldValue(field.name, value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={`Select ${field.label}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.hostel}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {formTemplates.hostel.map((field) => (
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

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || isCreating || isUpdating}
              className="flex-1"
            >
              {isCreating || isUpdating
                ? "Saving..."
                : isEdit
                ? "Update"
                : "Save"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1 sm:flex-none"
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