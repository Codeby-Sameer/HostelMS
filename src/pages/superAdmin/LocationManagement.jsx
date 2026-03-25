import React, { useEffect, useState } from "react"
import { useLocations } from "@/features/locations/hooks/useLocations"
import {
  useDeleteLocationMutation,
} from "@/features/locations/api/locationsApi"

import LocationSelector from "@/features/locations/components/LocationSelectors"
import { useModal } from "@/context/ModalContext"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { Edit2, Trash2 } from "lucide-react"
import toast from "react-hot-toast"

const LocationManagement = () => {
  const { openModal } = useModal()

  const {
    locations,
    selectedLocation,
    selectLocation,
    isLoading,
    error,
  } = useLocations()

  const [deleteLocation] =
    useDeleteLocationMutation()



  const [deletingId, setDeletingId] = useState(null)

  // ✅ Auto select first
  useEffect(() => {
    if (locations.length && !selectedLocation) {
      selectLocation(locations[0])
    }
  }, [locations, selectedLocation])


  const handleDelete = async (id) => {
    try {
      setDeletingId(id)

      await deleteLocation(id).unwrap()

      toast.success("Location deleted successfully")

    } catch (err) {
      console.error(err)

      // ✅ Extract backend message safely
      const message =
        err?.data?.detail?.message ||
        err?.data?.message ||
        err?.message ||
        "Failed to delete location"

      // ✅ Show error toast
      toast.error(message)

    } finally {
      setDeletingId(null)
    }
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Failed to load locations
      </div>
    )
  }

  return (
    <div className="space-y-6">

      {/* HEADER + SELECTOR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Location Management</h2>
          <p className="text-muted-foreground text-sm">
            Select and manage locations
          </p>
        </div>

        <LocationSelector />
        <Button onClick={()=>{openModal('location')}}>
          Add Location
        </Button>
      </div>

      {/* LOCATION GRID */}
      <Card>
        <CardHeader>
          <CardTitle>All Locations</CardTitle>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {locations.map((location) => {
                const isSelected =
                  selectedLocation?.id === location.id

                return (
                  <div
                    key={location.id}
                    className={`border rounded-lg p-4 flex justify-between items-center transition ${isSelected
                        ? "border-primary bg-primary/5"
                        : "hover:border-muted-foreground/30"
                      }`}
                  >
                    {/* LEFT */}
                    <div
                      className="cursor-pointer"
                      onClick={() => selectLocation(location)}
                    >
                      <p className="font-medium">
                        📍 {location.city}
                      </p>

                      {isSelected && (
                        <p className="text-xs text-primary">
                          Selected
                        </p>
                      )}
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="flex gap-2">

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => { openModal('location', location) }}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-500"
                        disabled={deletingId === location.id}
                        onClick={() => handleDelete(location.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>

                    </div>
                  </div>
                )
              })}

            </div>
          )}
        </CardContent>
      </Card>

    </div>
  )
}

export default LocationManagement