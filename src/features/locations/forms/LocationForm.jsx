// src/features/locations/forms/LocationForm.jsx

import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "../../../context/ModalContext"
import { useCreateLocationMutation, useUpdateLocationMutation } from "../api/locationsApi"
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

import * as Yup from "yup"

const LocationForm = ({ editingItem, onClose }) => {
  const { closeModal } = useModal()
  const [serverError, setServerError] = useState(null)

  // RTK Query mutations
  const [createLocation, { isLoading: isCreating }] = useCreateLocationMutation()
  const [updateLocation, { isLoading: isUpdating }] = useUpdateLocationMutation()

  // Validation schema
  const validationSchema = Yup.object().shape({
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    region: Yup.string(),
    district: Yup.string(),
    latitude: Yup.number(),
    longitude: Yup.number(),
    postal_code: Yup.string(),
    area_code: Yup.string(),
    currency: Yup.string(),
    timezone: Yup.string(),
    elevation: Yup.number(),
    population: Yup.number(),
    description: Yup.string(),
    is_active: Yup.boolean(),
  })

  const initialValues = editingItem ? {
    city: editingItem.city || "",
    state: editingItem.state || "",
    country: editingItem.country || "",
    region: editingItem.region || "",
    district: editingItem.district || "",
    latitude: editingItem.latitude || "",
    longitude: editingItem.longitude || "",
    postal_code: editingItem.postal_code || "",
    area_code: editingItem.area_code || "",
    currency: editingItem.currency || "USD",
    timezone: editingItem.timezone || "UTC",
    elevation: editingItem.elevation || "",
    population: editingItem.population || "",
    description: editingItem.description || "",
    is_active: editingItem.is_active !== undefined ? editingItem.is_active : true,
  } : {
    city: "",
    state: "",
    country: "",
    region: "",
    district: "",
    latitude: "",
    longitude: "",
    postal_code: "",
    area_code: "",
    currency: "USD",
    timezone: "UTC",
    elevation: "",
    population: "",
    description: "",
    is_active: true,
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)

      if (editingItem?.id) {
        // Update existing location
        await updateLocation({
          locationId: editingItem.id,
          ...values,
        }).unwrap()
        toast.success("Location updated successfully!")
      } else {
        // Create new location
        await createLocation(values).unwrap()
        toast.success("Location created successfully!")
      }

      closeModal()
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = error?.data?.detail || error?.message || "An error occurred"
      setServerError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  const isLoading = isCreating || isUpdating

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="space-y-4">
          {serverError && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {serverError}
            </div>
          )}

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-2">City *</label>
            <Field
              as={Input}
              name="city"
              placeholder="Enter city name"
              disabled={isLoading}
            />
            <ErrorMessage name="city">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-2">State *</label>
            <Field
              as={Input}
              name="state"
              placeholder="Enter state name"
              disabled={isLoading}
            />
            <ErrorMessage name="state">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-2">Country *</label>
            <Field
              as={Input}
              name="country"
              placeholder="Enter country name"
              disabled={isLoading}
            />
            <ErrorMessage name="country">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Region */}
          <div>
            <label className="block text-sm font-medium mb-2">Region</label>
            <Field
              as={Input}
              name="region"
              placeholder="Enter region (optional)"
              disabled={isLoading}
            />
            <ErrorMessage name="region">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium mb-2">District</label>
            <Field
              as={Input}
              name="district"
              placeholder="Enter district"
              disabled={isLoading}
            />
            <ErrorMessage name="district">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium mb-2">Postal Code</label>
            <Field
              as={Input}
              name="postal_code"
              placeholder="Enter postal code"
              disabled={isLoading}
            />
            <ErrorMessage name="postal_code">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Area Code */}
          <div>
            <label className="block text-sm font-medium mb-2">Area Code</label>
            <Field
              as={Input}
              name="area_code"
              placeholder="Enter area code (e.g., +1, +91)"
              disabled={isLoading}
            />
            <ErrorMessage name="area_code">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium mb-2">Currency</label>
            <Field
              as={Input}
              name="currency"
              placeholder="e.g., USD, INR, EUR"
              disabled={isLoading}
            />
            <ErrorMessage name="currency">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Latitude */}
          <div>
            <label className="block text-sm font-medium mb-2">Latitude</label>
            <Field
              as={Input}
              name="latitude"
              type="number"
              step="0.000001"
              placeholder="Enter latitude"
              disabled={isLoading}
            />
            <ErrorMessage name="latitude">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Longitude */}
          <div>
            <label className="block text-sm font-medium mb-2">Longitude</label>
            <Field
              as={Input}
              name="longitude"
              type="number"
              step="0.000001"
              placeholder="Enter longitude"
              disabled={isLoading}
            />
            <ErrorMessage name="longitude">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Elevation */}
          <div>
            <label className="block text-sm font-medium mb-2">Elevation (meters)</label>
            <Field
              as={Input}
              name="elevation"
              type="number"
              placeholder="Enter elevation above sea level"
              disabled={isLoading}
            />
            <ErrorMessage name="elevation">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Population */}
          <div>
            <label className="block text-sm font-medium mb-2">Population</label>
            <Field
              as={Input}
              name="population"
              type="number"
              placeholder="Enter approximate population"
              disabled={isLoading}
            />
            <ErrorMessage name="population">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium mb-2">Timezone</label>
            <Field
              as={Input}
              name="timezone"
              placeholder="e.g., UTC, IST, EST"
              disabled={isLoading}
            />
            <ErrorMessage name="timezone">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Field
              as={Textarea}
              name="description"
              placeholder="Enter location description"
              disabled={isLoading}
              rows={3}
            />
            <ErrorMessage name="description">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Active Status */}
          <div className="flex items-center gap-2">
            <Field
              type="checkbox"
              name="is_active"
              id="is_active"
              disabled={isLoading}
              className="h-4 w-4"
            />
            <label htmlFor="is_active" className="text-sm font-medium cursor-pointer">
              Active Location
            </label>
            <ErrorMessage name="is_active">
              {msg => <span className="text-red-500 text-sm">{msg}</span>}
            </ErrorMessage>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => closeModal()}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || isSubmitting}
            >
              {isLoading ? "Saving..." : editingItem ? "Update Location" : "Create Location"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LocationForm
