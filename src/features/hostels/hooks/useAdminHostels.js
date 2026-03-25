// src/hooks/useAdminHostels.js
import { useGetUserHostelsQuery } from "../api/hostelApi"
import { useSelector } from "react-redux"

export const useAdminHostels = () => {  1 
  const { data, isLoading } = useGetUserHostelsQuery()
  const selectedHostelId = useSelector((state) => state.allocation.hostelId)

  const hostels = data || []

  const selectedHostel =
    hostels.find((h) => h.id === selectedHostelId) || null

  return {
    hostels,
    selectedHostel,
    selectedHostelId,
    isLoading,
  }
}