// src/components/forms/AnnouncementForm.jsx

import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"

import { formTemplates, validationSchemas } from "../../../utils/FormTempletes"

const AnnouncementForm = ({ editingItem, onClose }) => {

  const initialValues = editingItem || {
    announcementTitle: "",
    announcementContent: "",
    announcementCategory: "",
    targetAudience: "",
    scheduledDate: "",
    isEmergency: false
  }

  const handleSubmit = (values, { setSubmitting }) => {

    console.log("Announcement submitted:", values)

    setTimeout(() => {
      setSubmitting(false)
      onClose()
    }, 1000)

  }


  const renderField = (field, setFieldValue, values) => {

    const commonClass = "w-full"

    if (field.type === "select") {

      return (

        <Select
          value={values[field.name]}
          onValueChange={(value) =>
            setFieldValue(field.name, value)
          }
        >

          <SelectTrigger className={commonClass}>
            <SelectValue placeholder={`Select ${field.label}`} />
          </SelectTrigger>

          <SelectContent>

            {field.options.map(option => (

              <SelectItem
                key={option}
                value={option}
              >
                {option}
              </SelectItem>

            ))}

          </SelectContent>

        </Select>

      )

    }


    if (field.type === "textarea") {

      return (

        <Field name={field.name}>

          {({ field: formikField }) => (

            <Textarea
              {...formikField}
              rows={3}
              className={commonClass}
            />

          )}

        </Field>

      )

    }


    if (field.type === "checkbox") {

      return (

        <div className="flex items-center gap-2">

          <Checkbox
            checked={values[field.name]}
            onCheckedChange={(value) =>
              setFieldValue(field.name, value)
            }
          />

          <span className="text-sm">
            {field.label}
          </span>

        </div>

      )

    }


    return (

      <Field name={field.name}>

        {({ field: formikField }) => (

          <Input
            type={field.type}
            {...formikField}
            className={commonClass}
          />

        )}

      </Field>

    )

  }


  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.announcement}
      onSubmit={handleSubmit}
    >

      {({ isSubmitting, setFieldValue, values }) => (

        <Form className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {formTemplates.announcement.map(field => (

              <div
                key={field.name}
                className={
                  field.type === "textarea"
                    ? "md:col-span-2 space-y-2"
                    : "space-y-2"
                }
              >

                {field.type !== "checkbox" && (

                  <label className="text-sm font-medium">

                    {field.label}
                    {field.required && " *"}

                  </label>

                )}

                {renderField(field, setFieldValue, values)}

                <ErrorMessage
                  name={field.name}
                  component="p"
                  className="text-xs text-red-500"
                />

              </div>

            ))}

          </div>


          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">

            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >

              {isSubmitting
                ? "Saving..."
                : editingItem
                  ? "Update Announcement"
                  : "Create Announcement"
              }

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

  )

}

export default AnnouncementForm