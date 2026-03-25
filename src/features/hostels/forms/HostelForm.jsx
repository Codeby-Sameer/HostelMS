// src/components/forms/HostelForm.jsx

import React, { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "../../../context/ModalContext"
import { useCreateHostelMutation, useUpdateHostelMutation, useGetLocationsQuery } from "../api/hostelApi"
import toast from "react-hot-toast"

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
  const { closeModal } = useModal()
  const [serverError, setServerError] = useState(null)
  const [dynamicFormFields, setDynamicFormFields] = useState(formTemplates.hostel)

  // RTK Query mutations
  const [createHostel, { isLoading: isCreating }] = useCreateHostelMutation()
  const [updateHostel, { isLoading: isUpdating }] = useUpdateHostelMutation()
  
  // Fetch locations for the dropdown
  const { data: locationsData, isLoading: isLoadingLocations, error: locationsError } = useGetLocationsQuery()

  // Update form fields with location options
  useEffect(() => {
    if (locationsData) {
      const locations = locationsData?.data || locationsData || []
      const updatedFields = formTemplates.hostel.map(field => {
        if (field.name === 'location_id') {
          return {
            ...field,
            options: locations.length > 0 ? locations.map(loc => ({
              value: loc.id,
              label: loc.city
            })) : []
          }
        }
        return field
      })
      setDynamicFormFields(updatedFields)
    }
    
    // Silently handle locations API error - form still works without location dropdown
    if (locationsError) {
      // Don't log to console to reduce spam
      // setServerError('Failed to load locations. You may need to enter location manually.')
    }
  }, [locationsData, locationsError])

  const initialValues = editingItem ? {
    hostel_name: editingItem.hostel_name || "",
    description: editingItem.description || "",
    address: editingItem.address || "",
    location_id: editingItem.location_id || "",
    city: editingItem.city || "",
    state: editingItem.state || "",
    pincode: editingItem.pincode || "",
    hostel_type: editingItem.hostel_type || "",
    contact_email: editingItem.contact_email || "",
    contact_phone: editingItem.contact_phone || "",
    amenities: editingItem.amenities || "",
    rules: editingItem.rules || "",
    check_in: editingItem.check_in || "",
    check_out: editingItem.check_out || "",
    total_rooms: editingItem.total_rooms || "",
    total_beds: editingItem.total_beds || "",
    available_rooms: editingItem.available_rooms || "",
    current_occupancy: editingItem.current_occupancy || "",
    price_per_month: editingItem.price_per_month || "",
    monthly_revenue: editingItem.monthly_revenue || "",
    total_revenue: editingItem.total_revenue || "",
    rating: editingItem.rating || "",
    total_reviews: editingItem.total_reviews || "",
    assigned_admin: editingItem.assigned_admin || "",
    is_active: editingItem.is_active !== undefined ? editingItem.is_active : true,
    is_verified: editingItem.is_verified !== undefined ? editingItem.is_verified : false,
  } : {
    hostel_name: "",
    description: "",
    address: "",
    location_id: "",
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
      
      // Transform form values to API format
      const hostelData = {
        hostel_name: values.hostel_name,
        description: values.description,
        address: values.address,
        location_id: parseInt(values.location_id) || null,
        city: values.city || null,
        state: values.state || null,
        pincode: values.pincode || null,
        hostel_type: values.hostel_type,
        contact_email: values.contact_email,
        contact_phone: values.contact_phone,
        amenities: values.amenities,
        rules: values.rules,
        check_in: values.check_in,
        check_out: values.check_out,
        total_rooms: parseInt(values.total_rooms) || null,
        total_beds: parseInt(values.total_beds) || 0,
        available_rooms: parseInt(values.available_rooms) || null,
        current_occupancy: parseInt(values.current_occupancy) || 0,
        price_per_month: parseFloat(values.price_per_month) || null,
        monthly_revenue: parseFloat(values.monthly_revenue) || null,
        total_revenue: parseFloat(values.total_revenue) || null,
        rating: parseFloat(values.rating) || null,
        total_reviews: parseInt(values.total_reviews) || null,
        assigned_admin: values.assigned_admin || null,
        is_active: values.is_active,
        is_verified: values.is_verified,
      }

      if (editingItem?.id) {
        // Update existing hostel
        await updateHostel({
          hostelId: editingItem.id,
          ...hostelData,
        }).unwrap()
        
        toast.success(`✅ Hostel "${values.hostel_name}" updated successfully!`)
      } else {
        // Create new hostel
        await createHostel(hostelData).unwrap()
        
        toast.success(`✅ Hostel "${values.hostel_name}" created successfully!`)
      }

      setSubmitting(false)
      closeModal()
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Extract error message from various possible formats
      let errorMessage = 'An error occurred while saving'
      
      if (error?.data?.detail) {
        // Handle string or object detail
        errorMessage = typeof error.data.detail === 'string' 
          ? error.data.detail 
          : JSON.stringify(error.data.detail)
      } else if (error?.message) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      setServerError(errorMessage)
      toast.error(`❌ Error: ${errorMessage}`)
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
              value={String(formikField.value)}
              onValueChange={(value) => {
                // Convert to number if field is location_id
                const finalValue = field.name === 'location_id' ? parseInt(value) : value
                form.setFieldValue(field.name, finalValue)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder={`Select ${field.label}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((option) => {
                  // Handle both string options and object options with value/label
                  const isStringOption = typeof option === 'string'
                  const optionValue = isStringOption ? option : option.value
                  const optionLabel = isStringOption ? option : option.label
                  
                  return (
                    <SelectItem key={optionValue} value={String(optionValue)}>
                      {optionLabel}
                    </SelectItem>
                  )
                })}
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

          {/* Server Error */}
          {serverError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-800">{serverError}</p>
            </div>
          )}

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {dynamicFormFields.map((field) => (
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
              {isSubmitting || isCreating || isUpdating ? "Saving..." : editingItem ? "Update" : "Save"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setServerError(null)
                closeModal()
              }}
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