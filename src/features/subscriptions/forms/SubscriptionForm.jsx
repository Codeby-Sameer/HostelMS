// src/features/subscriptions/forms/SubscriptionForm.jsx
import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "@/context/ModalContext"
import { useGetPlansQuery, useCreateSubscriptionMutation } from "../api/subscriptionsApi"
import toast from "react-hot-toast"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"

import * as Yup from "yup"

const SubscriptionForm = ({ editingItem, onClose }) => {
  const { closeModal } = useModal()
  const [serverError, setServerError] = useState(null)

  // Fetch subscription plans
  const { data: plansData } = useGetPlansQuery()
  const plans = plansData?.data || plansData || []

  // RTK Query mutations
  const [createSubscription, { isLoading: isCreating }] = useCreateSubscriptionMutation()

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Calculate end date (30 days from today)
  const getEndDate = () => {
    const end = new Date()
    end.setDate(end.getDate() + 30)
    return end.toISOString().split('T')[0]
  }

  // Validation schema
  const validationSchema = Yup.object().shape({
    organization_id: Yup.string().required("Organization ID is required"),
    organization_name: Yup.string().required("Organization name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    plan_id: Yup.string().required("Plan is required"),
    status: Yup.string().oneOf(
      ["active", "inactive", "canceled", "past_due", "trialing"],
      "Status must be active, inactive, canceled, past_due or trialing"
    ).required("Status is required"),
    current_period_start: Yup.date().required("Period start date is required"),
    current_period_end: Yup.date().required("Period end date is required"),
  })

  const initialValues = editingItem ? {
    organization_id: editingItem.organization_id || editingItem.hostel_id || "",
    organization_name: editingItem.organization_name || editingItem.hostel_name || "",
    email: editingItem.email || "",
    plan_id: editingItem.plan_id || "",
    status: editingItem.status || "active",
    current_period_start: editingItem.current_period_start || getTodayDate(),
    current_period_end: editingItem.current_period_end || getEndDate(),
  } : {
    organization_id: "",
    organization_name: "",
    email: "",
    plan_id: "",
    status: "active",
    current_period_start: getTodayDate(),
    current_period_end: getEndDate(),
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)

      await createSubscription({
        organization_id: values.organization_id,
        organization_name: values.organization_name,
        email: values.email,
        plan_id: values.plan_id,
        status: values.status,
        current_period_start: values.current_period_start,
        current_period_end: values.current_period_end,
      }).unwrap()

      toast.success("Subscription created successfully!")
      closeModal()
    } catch (error) {
      console.error("Full error object:", JSON.stringify(error, null, 2))
      console.error("Error data:", JSON.stringify(error?.data, null, 2))
      console.error("Error status:", error?.status)
      
      // Handle different error formats
      let message = "Failed to create subscription"
      
      if (error?.data) {
        // Handle validation errors from Pydantic (array format)
        if (Array.isArray(error.data)) {
          message = error.data.map(err => {
            if (typeof err === 'string') return err
            if (err.msg) return `${err.loc?.join('.')}: ${err.msg}`
            return JSON.stringify(err)
          }).join(", ")
        }
        // Handle detail field (string or object)
        else if (error.data.detail) {
          if (typeof error.data.detail === 'string') {
            message = error.data.detail
          } else if (Array.isArray(error.data.detail)) {
            message = error.data.detail.map(err => {
              if (typeof err === 'string') return err
              if (err.msg) return `${err.loc?.join('.')}: ${err.msg}`
              return JSON.stringify(err)
            }).join(", ")
          }
        }
        // Handle message field
        else if (error.data.message) {
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
          {/* Info Banner */}
          {!editingItem && (
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-md text-sm">
              <p className="font-semibold">ℹ️ Note:</p>
              <p>Each organization can only have ONE active subscription. If this organization already has a subscription, please edit that one or use a different Organization ID.</p>
            </div>
          )}

          {serverError && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-md text-sm">
              <p className="font-semibold mb-2">Error</p>
              <p>{serverError}</p>
              {serverError.toLowerCase().includes("active subscription") && (
                <div className="mt-3 text-xs bg-red-100 p-2 rounded">
                  <p className="font-semibold mb-1">💡 Tip:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Each organization can only have ONE active subscription</li>
                    <li>Try using a different Organization ID</li>
                    <li>Or edit the existing subscription instead</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Organization ID */}
          <div>
            <label className="text-sm font-medium">Organization ID *</label>
            <Field
              as={Input}
              name="organization_id"
              placeholder="Enter organization ID"
              className="mt-1"
            />
            <ErrorMessage name="organization_id" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Organization Name */}
          <div>
            <label className="text-sm font-medium">Organization Name *</label>
            <Field
              as={Input}
              name="organization_name"
              placeholder="Enter organization name"
              className="mt-1"
            />
            <ErrorMessage name="organization_name" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email *</label>
            <Field
              as={Input}
              name="email"
              type="email"
              placeholder="billing@organization.com"
              className="mt-1"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Plan */}
          <div>
            <label className="text-sm font-medium">Plan *</label>
            <Select value={values.plan_id} onValueChange={(val) => setFieldValue("plan_id", val)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                {plans.map(plan => (
                  <SelectItem key={plan.id} value={String(plan.id)}>
                    {plan.name || `Plan ${plan.id}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ErrorMessage name="plan_id" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium">Status *</label>
            <Select value={values.status} onValueChange={(val) => setFieldValue("status", val)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
                <SelectItem value="past_due">Past Due</SelectItem>
                <SelectItem value="trialing">Trialing</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage name="status" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Period Start Date */}
          <div>
            <label className="text-sm font-medium">Period Start *</label>
            <Field
              as={Input}
              name="current_period_start"
              type="date"
              className="mt-1"
            />
            <ErrorMessage name="current_period_start" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Period End Date */}
          <div>
            <label className="text-sm font-medium">Period End *</label>
            <Field
              as={Input}
              name="current_period_end"
              type="date"
              className="mt-1"
            />
            <ErrorMessage name="current_period_end" component="p" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || isCreating}
              className="flex-1"
            >
              {isSubmitting || isCreating ? "Saving..." : "Save Subscription"}
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

export default SubscriptionForm
