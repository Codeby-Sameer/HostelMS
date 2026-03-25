import React from "react"
import { useLocations } from "../hooks/useLocations"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

const LocationSelector = () => {
  const {
    locations,
    selectedLocation,
    selectLocation,
    isLoading,
  } = useLocations()

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading locations...</p>
  }

  return (
    <div className="w-[200px]">
      <Select
        value={selectedLocation?.id?.toString()}
        onValueChange={(value) => {
          const location = locations.find(
            (loc) => loc.id.toString() === value
          )
          selectLocation(location)
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Location" />
        </SelectTrigger>

        <SelectContent>
          {locations.map((location) => (
            <SelectItem
              key={location.id}
              value={location.id.toString()}
            >
              📍 {location.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default LocationSelector