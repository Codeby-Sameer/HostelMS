// MenuForm.jsx

import React from "react"
import { Formik, Form, FieldArray } from "formik"
import { useSelector } from "react-redux"

import {
  useCreateMenuMutation,
  useUpdateMenuMutation,
} from "@/features/mess/api/messMenuApi"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

const dietOptions = [
  "regular",
  "vegetarian",
  "vegan",
  "gluten_free",
  "diabetic",
]

const MenuForm = ({ editingItem, onClose }) => {
  const hostel_id = useSelector((state) => state.allocation.hostelId)

  const [createMenu, { isLoading: creating }] = useCreateMenuMutation()
  const [updateMenu, { isLoading: updating }] = useUpdateMenuMutation()

  const isEdit = Boolean(editingItem)

  const initialValues = editingItem || {
    menu_type: "daily",
    menu_date: "",
    meal_type: "",
    items: [
      { name: "", description: "", diet_types: [] }
    ],
    serving_time_start: "",
    serving_time_end: "",
    diet_types: [],
    nutritional_info: {
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    },
    notes: "",
    is_special_occasion: false,
    occasion_name: "",
    status: "draft",
  }

  const handleSubmit = async (values) => {
    try {
      const payload = {
        hostel_id,
        ...values,
        created_by: 1,
        created_by_role: "admin",
      }

      if (isEdit) {
        await updateMenu({
          menuId: editingItem.id,
          ...payload,
        }).unwrap()
      } else {
        await createMenu(payload).unwrap()
      }

      onClose()
    } catch (err) {
      console.error("Menu Error:", err)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
      {({ values, handleChange, setFieldValue }) => (

        <Form className="space-y-6">

          <div className="text-sm text-muted-foreground">
            Hostel ID: {hostel_id}
          </div>

          {/* BASIC */}
          <div className="grid md:grid-cols-2 gap-4">

            <Select
              value={values.menu_type}
              onValueChange={(v) => setFieldValue("menu_type", v)}
            >
              <SelectTrigger><SelectValue placeholder="Menu Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={values.meal_type}
              onValueChange={(v) => setFieldValue("meal_type", v)}
            >
              <SelectTrigger><SelectValue placeholder="Meal Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
              </SelectContent>
            </Select>

            <Input type="date" name="menu_date" value={values.menu_date} onChange={handleChange} />

            <Input type="time" name="serving_time_start" value={values.serving_time_start} onChange={handleChange} />
            <Input type="time" name="serving_time_end" value={values.serving_time_end} onChange={handleChange} />

          </div>

          {/* ITEMS (🔥 FIXED) */}
          <FieldArray name="items">
            {({ push, remove }) => (
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Menu Items</h3>
                  <Button type="button" onClick={() => push({ name: "", description: "", diet_types: [] })}>
                    + Add Item
                  </Button>
                </div>

                {values.items.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-3 border p-3 rounded-xl">

                    <Input
                      placeholder="Item name"
                      value={item.name}
                      onChange={(e) =>
                        setFieldValue(`items.${index}.name`, e.target.value)
                      }
                    />

                    <Input
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) =>
                        setFieldValue(`items.${index}.description`, e.target.value)
                      }
                    />

                    <Input
                      placeholder="Diet types (comma)"
                      value={item.diet_types.join(",")}
                      onChange={(e) =>
                        setFieldValue(
                          `items.${index}.diet_types`,
                          e.target.value.split(",").map(s => s.trim())
                        )
                      }
                    />

                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>

                  </div>
                ))}
              </div>
            )}
          </FieldArray>

          {/* MENU LEVEL DIET */}
          <Input
            placeholder="Menu diet types (comma separated)"
            value={(values.diet_types || []).join(",")}
            onChange={(e) =>
              setFieldValue(
                "diet_types",
                e.target.value.split(",").map((s) => s.trim())
              )
            }
          />

          {/* NUTRITION */}
          <div className="grid md:grid-cols-4 gap-3">
            <Input name="nutritional_info.calories" placeholder="Calories" value={values.nutritional_info.calories} onChange={handleChange} />
            <Input name="nutritional_info.protein" placeholder="Protein" value={values.nutritional_info.protein} onChange={handleChange} />
            <Input name="nutritional_info.carbs" placeholder="Carbs" value={values.nutritional_info.carbs} onChange={handleChange} />
            <Input name="nutritional_info.fat" placeholder="Fat" value={values.nutritional_info.fat} onChange={handleChange} />
          </div>

          {/* STATUS */}
          <Select
            value={values.status}
            onValueChange={(v) => setFieldValue("status", v)}
          >
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="pending_approval">Pending Approval</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>

          {/* SPECIAL */}
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={values.is_special_occasion}
              onChange={(e) =>
                setFieldValue("is_special_occasion", e.target.checked)
              }
            />
            Special Occasion
          </label>

          {values.is_special_occasion && (
            <Input
              name="occasion_name"
              placeholder="Occasion Name"
              value={values.occasion_name}
              onChange={handleChange}
            />
          )}

          <Textarea
            name="notes"
            placeholder="Notes"
            value={values.notes}
            onChange={handleChange}
          />

          {/* ACTIONS */}
          <div className="flex gap-3">
            <Button type="submit" disabled={creating || updating} className="flex-1">
              {(creating || updating)
                ? "Saving..."
                : isEdit
                  ? "Update Menu"
                  : "Create Menu"}
            </Button>

            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  )
}

export default MenuForm