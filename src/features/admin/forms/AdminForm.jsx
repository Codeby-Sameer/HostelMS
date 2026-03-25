import React, { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useModal } from "../../../context/ModalContext"
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

const AdminForm = ({ editingItem, onClose }) => {
  const { closeModal } = useModal()
  const [serverError, setServerError] = useState(null)
  const [dynamicFormFields, setDynamicFormFields] = useState(formTemplates.admin)

  // Set initial form state
  useEffect(() => {
    setDynamicFormFields(formTemplates.admin)
  }, [])

  const initialValues = {
    adminName: editingItem?.adminName || '',
    adminEmail: editingItem?.adminEmail || '',
    adminPhone: editingItem?.adminPhone || '',
    employeeId: editingItem?.employeeId || '',
    role: editingItem?.role || '',
    department: editingItem?.department || '',
    accessLevel: editingItem?.accessLevel || '',
    status: editingItem?.status || 'active',
    permissions: editingItem?.permissions || '',
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setServerError(null)
      
      // Validate form
      if (!values.adminName || !values.adminEmail || !values.role) {
        setServerError('Please fill in all required fields')
        setSubmitting(false)
        return
      }

      // Simulate form submission (replace with actual API call)
      console.log('Admin Form Data:', values)
      toast.success(editingItem ? 'Admin updated successfully' : 'Admin created successfully')
      closeModal()
    } catch (error) {
      setServerError(error?.message || 'An error occurred')
      toast.error(error?.message || 'Failed to submit form')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-6 space-y-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas.admin}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            {serverError && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {serverError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Admin Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Admin Name *</label>
                <Field
                  as={Input}
                  name="adminName"
                  placeholder="Full name"
                  className={errors.adminName && touched.adminName ? 'border-red-500' : ''}
                />
                <ErrorMessage name="adminName" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <Field
                  as={Input}
                  name="adminEmail"
                  type="email"
                  placeholder="Email address"
                  className={errors.adminEmail && touched.adminEmail ? 'border-red-500' : ''}
                />
                <ErrorMessage name="adminEmail" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <Field
                  as={Input}
                  name="adminPhone"
                  type="tel"
                  placeholder="Phone number"
                  className={errors.adminPhone && touched.adminPhone ? 'border-red-500' : ''}
                />
                <ErrorMessage name="adminPhone" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Employee ID */}
              <div>
                <label className="block text-sm font-medium mb-1">Employee ID *</label>
                <Field
                  as={Input}
                  name="employeeId"
                  placeholder="Employee ID"
                  className={errors.employeeId && touched.employeeId ? 'border-red-500' : ''}
                />
                <ErrorMessage name="employeeId" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium mb-1">Role *</label>
                <Select value={values.role} onValueChange={(value) => setFieldValue('role', value)}>
                  <SelectTrigger className={errors.role && touched.role ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Super Admin">Super Admin</SelectItem>
                    <SelectItem value="Hostel Admin">Hostel Admin</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage name="role" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium mb-1">Department *</label>
                <Select value={values.department} onValueChange={(value) => setFieldValue('department', value)}>
                  <SelectTrigger className={errors.department && touched.department ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Administration">Administration</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                    <SelectItem value="Accounts">Accounts</SelectItem>
                    <SelectItem value="Security">Security</SelectItem>
                    <SelectItem value="Housekeeping">Housekeeping</SelectItem>
                    <SelectItem value="Mess">Mess</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage name="department" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Access Level */}
              <div>
                <label className="block text-sm font-medium mb-1">Access Level *</label>
                <Select value={values.accessLevel} onValueChange={(value) => setFieldValue('accessLevel', value)}>
                  <SelectTrigger className={errors.accessLevel && touched.accessLevel ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full Access">Full Access</SelectItem>
                    <SelectItem value="Limited Access">Limited Access</SelectItem>
                    <SelectItem value="Read Only">Read Only</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage name="accessLevel" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Select value={values.status} onValueChange={(value) => setFieldValue('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Permissions */}
            <div>
              <label className="block text-sm font-medium mb-1">Specific Permissions</label>
              <Field
                as={Textarea}
                name="permissions"
                placeholder="Enter specific permissions (comma-separated)"
                rows={3}
              />
              <ErrorMessage name="permissions" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : editingItem ? 'Update Admin' : 'Create Admin'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AdminForm
