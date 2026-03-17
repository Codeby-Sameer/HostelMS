// src/components/forms/BedForm.jsx

import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"

import {
  formTemplates,
  validationSchemas
} from "../../../utils/FormTempletes"

const BedForm = ({ editingItem, onClose }) => {

  const initialValues = editingItem || {
    bedNumber: "",
    roomNumber: "",
    bedStatus: "",
    monthlyPrice: "",
    quarterlyPrice: "",
    annualPrice: ""
  }

  const handleSubmit = (values, { setSubmitting }) => {

    console.log("Bed submitted:", values)

    setTimeout(() => {
      setSubmitting(false)
      onClose()
    }, 1000)

  }

  const renderField = (field, setFieldValue, values) => {

    if (field.type === "select") {

      return (

        <Select
          value={values[field.name]}
          onValueChange={(value) =>
            setFieldValue(field.name, value)
          }
        >

          <SelectTrigger>
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

    return (

      <Field name={field.name}>
        {({ field: formikField }) => (
          <Input
            type={field.type}
            {...formikField}
          />
        )}
      </Field>

    )

  }


  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas.bed}
      onSubmit={handleSubmit}
    >

      {({ isSubmitting, setFieldValue, values }) => (

        <Form className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {formTemplates.bed.map(field => (

              <div key={field.name} className="space-y-2">

                <label className="text-sm font-medium">

                  {field.label}
                  {field.required && " *"}

                </label>

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
                  ? "Update Bed"
                  : "Add Bed"
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

export default BedForm