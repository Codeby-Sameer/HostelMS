// src/components/forms/HostelForm.jsx

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

const HostelForm = ({ editingItem, onClose }) => {

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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values)

    setTimeout(() => {
      setSubmitting(false)
      onClose()
    }, 1000)
  }

  const renderField = (field) => {

    // INPUT
    if (field.type !== "select" && field.type !== "textarea" && field.type !== "checkbox") {
      return (
        <Field name={field.name}>
          {({ field: formikField }) => (
            <Input {...formikField} type={field.type} />
          )}
        </Field>
      )
    }

    // TEXTAREA
    if (field.type === "textarea") {
      return (
        <Field name={field.name}>
          {({ field: formikField }) => (
            <Textarea {...formikField} rows={3} />
          )}
        </Field>
      )
    }

    // SELECT
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

    // CHECKBOX
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
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {formTemplates.hostel.map((field) => (
              <div
                key={field.name}
                className={field.type === "textarea" ? "md:col-span-2 space-y-2" : "space-y-2"}
              >

                {/* Label */}
                <label className="text-sm font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>

                {/* Input */}
                {renderField(field)}

                {/* Error */}
                <ErrorMessage
                  name={field.name}
                  component="p"
                  className="text-xs text-red-500"
                />

              </div>
            ))}

          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">

            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Saving..." : editingItem ? "Update" : "Save"}
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