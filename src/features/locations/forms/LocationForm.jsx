import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import {
  useCreateLocationMutation,
  useUpdateLocationMutation,
} from "../api/locationsApi"
import toast from "react-hot-toast"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import * as Yup from "yup"

const LocationForm = ({ editingItem, onClose }) => {

  const [serverError, setServerError] = useState(null)

  const [createLocation, { isLoading: isCreating }] =
    useCreateLocationMutation()

  const [updateLocation, { isLoading: isUpdating }] =
    useUpdateLocationMutation()

  const isLoading = isCreating || isUpdating

  // ✅ SIMPLE VALIDATION
  const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
  })

  // ✅ ONLY CITY
  const initialValues = {
    city: editingItem?.city || "",
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)

      if (editingItem?.id) {
        await updateLocation({
          locationId: editingItem.id,
          ...values,
        }).unwrap()

        toast.success("Location updated successfully!")
      } else {
        await createLocation(values).unwrap()

        toast.success("Location created successfully!")

      }
      onClose()

    } catch (error) {
      const errorMessage =
        error?.data?.detail ||
        error?.message ||
        "Something went wrong"

      setServerError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">

          {/* ERROR */}
          {serverError && (
            <div className="p-2 bg-red-100 text-red-600 text-sm rounded">
              {serverError}
            </div>
          )}

          {/* CITY FIELD */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              City *
            </label>

            <Field
              as={Input}
              name="city"
              placeholder="Enter city (e.g., Hyderabad)"
              disabled={isLoading}
            />

            <ErrorMessage
              name="city"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isLoading || isSubmitting}
            >
              {isLoading
                ? "Saving..."
                : editingItem
                  ? "Update"
                  : "Create"}
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  )
}

export default LocationForm