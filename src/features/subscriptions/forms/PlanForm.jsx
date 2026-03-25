import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "@/context/ModalContext"
import { useCreatePlanMutation } from "../api/subscriptionsApi"
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

const PlanForm = ({ editingItem, onClose }) => {
  const { closeModal } = useModal()
  const [serverError, setServerError] = useState(null)

  // RTK Query mutations
  const [createPlan, { isLoading: isCreating }] = useCreatePlanMutation()

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Plan name is required"),
    tier: Yup.string()
      .oneOf(["free", "standard", "premium"], "Select a valid tier")
      .required("Tier is required"),
    billing_cycle: Yup.string()
      .oneOf(["monthly", "yearly"], "Select a valid billing cycle")
      .required("Billing cycle is required"),
    price: Yup.number().required("Price is required").min(0),
    currency: Yup.string().required("Currency is required"),
    max_hostels: Yup.number().required("Max hostels is required").min(1),
    max_admins: Yup.number().required("Max admins is required").min(1),
    max_students: Yup.number().required("Max students is required").min(1),
  })

  const initialValues = editingItem ? {
    name: editingItem.name || "",
    tier: editingItem.tier || "standard",
    billing_cycle: editingItem.billing_cycle || "monthly",
    price: editingItem.price || 0,
    currency: editingItem.currency || "USD",
    max_hostels: editingItem.max_hostels || 1,
    max_admins: editingItem.max_admins || 1,
    max_students: editingItem.max_students || 100,
    features: editingItem.features ? JSON.stringify(editingItem.features, null, 2) : "{}",
  } : {
    name: "",
    tier: "standard",
    billing_cycle: "monthly",
    price: 0,
    currency: "USD",
    max_hostels: 1,
    max_admins: 1,
    max_students: 100,
    features: "{}",
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)

      // Parse features JSON
      let features = null
      try {
        features = values.features ? JSON.parse(values.features) : null
      } catch (e) {
        setServerError("Invalid JSON format for features")
        setSubmitting(false)
        return
      }

      await createPlan({
        name: values.name,
        tier: values.tier,
        billing_cycle: values.billing_cycle,
        price: parseFloat(values.price),
        currency: values.currency,
        max_hostels: parseInt(values.max_hostels),
        max_admins: parseInt(values.max_admins),
        max_students: parseInt(values.max_students),
        features: features,
      }).unwrap()

      toast.success("Plan created successfully!")
      closeModal()
    } catch (error) {
      console.error("Full error object:", JSON.stringify(error, null, 2))

      let message = "Failed to create plan"

      if (error?.data) {
        if (Array.isArray(error.data)) {
          message = error.data.map(err => {
            if (typeof err === 'string') return err
            if (err.msg) return `${err.loc?.join('.')}: ${err.msg}`
            return JSON.stringify(err)
          }).join(", ")
        } else if (error.data.detail) {
          if (typeof error.data.detail === 'string') {
            message = error.data.detail
          } else if (Array.isArray(error.data.detail)) {
            message = error.data.detail.map(err => {
              if (typeof err === 'string') return err
              if (err.msg) return `${err.loc?.join('.')}: ${err.msg}`
              return JSON.stringify(err)
            }).join(", ")
          }
        } else if (error.data.message) {
          message = error.data.message
        }
      } else if (error?.message) {
        message = error.message
      }

      setServerError(message)
      toast.error(message)
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
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="space-y-4">
          {serverError && (
            <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm">
              {serverError}
            </div>
          )}

          {/* Plan Name */}
          <div>
            <label className="text-sm font-medium">Plan Name *</label>
            <Field
              as={Input}
              name="name"
              placeholder="e.g., Basic, Professional, Enterprise"
              className="mt-1"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Tier */}
          <div>
            <label className="text-sm font-medium">Tier *</label>
            <Select value={values.tier} onValueChange={(val) => setFieldValue("tier", val)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage name="tier" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Billing Cycle */}
          <div>
            <label className="text-sm font-medium">Billing Cycle *</label>
            <Select value={values.billing_cycle} onValueChange={(val) => setFieldValue("billing_cycle", val)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select billing cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage name="billing_cycle" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Price */}
            <div>
              <label className="text-sm font-medium">Price *</label>
              <Field
                as={Input}
                name="price"
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                className="mt-1"
              />
              <ErrorMessage name="price" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Currency */}
            <div>
              <label className="text-sm font-medium">Currency *</label>
              <Field
                as={Input}
                name="currency"
                placeholder="USD"
                className="mt-1"
              />
              <ErrorMessage name="currency" component="p" className="text-red-500 text-xs mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* Max Hostels */}
            <div>
              <label className="text-sm font-medium">Max Hostels *</label>
              <Field
                as={Input}
                name="max_hostels"
                type="number"
                min="1"
                className="mt-1"
              />
              <ErrorMessage name="max_hostels" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Max Admins */}
            <div>
              <label className="text-sm font-medium">Max Admins *</label>
              <Field
                as={Input}
                name="max_admins"
                type="number"
                min="1"
                className="mt-1"
              />
              <ErrorMessage name="max_admins" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Max Students */}
            <div>
              <label className="text-sm font-medium">Max Students *</label>
              <Field
                as={Input}
                name="max_students"
                type="number"
                min="1"
                className="mt-1"
              />
              <ErrorMessage name="max_students" component="p" className="text-red-500 text-xs mt-1" />
            </div>
          </div>

          {/* Features (JSON) */}
          <div>
            <label className="text-sm font-medium">Features (JSON)</label>
            <Field
              as={Textarea}
              name="features"
              placeholder='{"feature1": true, "feature2": false}'
              className="mt-1 font-mono text-xs"
              rows="4"
            />
            <p className="text-gray-500 text-xs mt-1">Enter JSON format features (optional)</p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || isCreating}
              className="flex-1"
            >
              {isSubmitting || isCreating ? "Saving..." : "Save Plan"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={closeModal}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PlanForm
