import { useDispatch, useSelector } from "react-redux"
import { useGetLocationsQuery } from "../api/locationsApi"
import { setSelectedLocation } from "../store/locationSlice"

export const useLocations = () => {
  const dispatch = useDispatch()

  const { data, isLoading, error } = useGetLocationsQuery()

  const locations = data?.data || data || []

  const selectedLocation = useSelector(
    (state) => state.location.selectedLocation
  )

  const selectLocation = (location) => {
    dispatch(setSelectedLocation(location))
  }

  return {
    locations,
    selectedLocation,
    selectLocation,
    isLoading,
    error,
  }
}