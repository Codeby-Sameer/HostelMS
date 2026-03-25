import React, { useState, useCallback } from "react"
import { useModal } from "../../context/ModalContext"
import { useHostels } from "../../features/hostels/hooks/useHostels"
import { useDeleteHostelMutation } from "../../features/hostels/api/hostelApi"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const HostelManagement = () => {

  const { openModal } = useModal()
  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  
  // Use the custom hook for hostel management
  const {
    hostels,
    isLoading,
    error,
    filters,
    updateFilters,
    deleteHostel: deleteHostelAPI,
    isDeleting,
    refetch,
  } = useHostels()

  // Delete hostel mutation
  const [deleteHostel] = useDeleteHostelMutation()

  const handleDeleteClick = (hostel) => {
    setDeleteConfirmation(hostel)
  }

  const handleConfirmDelete = async () => {
    if (!deleteConfirmation) return
    
    try {
      await deleteHostel(deleteConfirmation.id).unwrap()
      setDeleteConfirmation(null)
      refetch()
    } catch (error) {
      console.error('Error deleting hostel:', error)
      alert('Failed to delete hostel. Please try again.')
    }
  }

  const handleEditClick = (hostel) => {
    openModal("hostel", hostel)
  }

  const handleFilterChange = useCallback((key, value) => {
    updateFilters({ [key]: value })
  }, [updateFilters])

  // If there's an error fetching data
  if (error) {
    const isAuthError = error?.status === 401 || error?.status === '401';
    const errorMessage = isAuthError 
      ? 'Authentication failed. Please login again.'
      : error?.data?.detail || error?.message || 'Error loading hostels';
    
    console.error('HostelManagement error details:', {
      status: error?.status,
      data: error?.data,
      message: error?.message,
      error: error,
    });
    
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Hostel Management</h2>
        <Card className={`border-red-200 ${isAuthError ? 'bg-red-50' : 'bg-yellow-50'}`}>
          <CardContent className={`p-6 text-center ${isAuthError ? 'text-red-800' : 'text-yellow-800'}`}>
            <p>{errorMessage}</p>
            {isAuthError && (
              <p className="text-sm mt-2">Status: 401 Unauthorized - Token may have expired</p>
            )}
            {error?.status === 404 && (
              <p className="text-sm mt-2">Status: 404 - Endpoint not found. Please check API configuration.</p>
            )}
            <Button 
              variant="outline" 
              onClick={() => refetch()} 
              className="mt-4"
            >
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h2 className="text-3xl font-bold">
            Hostel Management
          </h2>

          <p className="text-muted-foreground text-sm">
            Manage all hostels in the platform ({hostels.length} hostels)
          </p>

        </div>

        <div className="flex gap-3 flex-wrap">

          <Button
            onClick={() => openModal("hostel")}
          >
            + Add Hostel
          </Button>

          <Button variant="secondary">
            Export Data
          </Button>

        </div>

      </div>


      {/* Filters */}

      <Card>

        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>

        <CardContent>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

            <Select
              value={filters.status || "all"}
              onValueChange={(value) =>
                handleFilterChange("status", value === "all" ? "" : value)
              }
            >

              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">
                  Active
                </SelectItem>

                <SelectItem value="Inactive">
                  Inactive
                </SelectItem>

                <SelectItem value="Pending">
                  Pending
                </SelectItem>

              </SelectContent>

            </Select>


            <Select
              value={filters.tier || "all"}
              onValueChange={(value) =>
                handleFilterChange("tier", value === "all" ? "" : value)
              }
            >

              <SelectTrigger>
                <SelectValue placeholder="Subscription Tier" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="Free">
                  Free
                </SelectItem>

                <SelectItem value="Standard">
                  Standard
                </SelectItem>

                <SelectItem value="Premium">
                  Premium
                </SelectItem>

              </SelectContent>

            </Select>


            <Input
              placeholder="Search hostels..."
              value={filters.search}
              onChange={(e) =>
                handleFilterChange("search", e.target.value)
              }
            />

            <Button onClick={() => refetch()}>
              Refresh
            </Button>

          </div>

        </CardContent>

      </Card>


      {/* Hostels List */}

      <div className="space-y-4">

        {isLoading ? (

          <>
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
          </>

        ) : hostels.length === 0 ? (

          <Card>

            <CardContent className="p-6 text-center text-muted-foreground">

              No hostels found matching your filters.

            </CardContent>

          </Card>

        ) : (

          hostels.map(hostel => (

            <Card key={hostel.id}>

              <CardContent className="p-5 space-y-4">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>

                    <h3 className="font-semibold text-lg">
                      {hostel.hostel_name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {hostel.address || hostel.location || 'No address'}
                    </p>

                  </div>

                  <div className="flex gap-2">

                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => handleEditClick(hostel)}
                    >
                      Edit
                    </Button>

                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleDeleteClick(hostel)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </Button>

                  </div>

                </div>


                {/* Info */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                  <p>👥 {hostel.current_occupancy || 0}/{hostel.total_beds || 0} occupied</p>

                  <p>👨‍💼 Admin: {hostel.assigned_admin || 'Unassigned'}</p>

                  <p>📧 {hostel.contact_email || 'No email'}</p>

                  <p>
                    Occupancy:
                    {" "}
                    {hostel.total_beds ? Math.round(
                      ((hostel.current_occupancy || 0) / hostel.total_beds) * 100
                    ) : 0}%
                  </p>

                </div>


                {/* Badges */}

                <div className="flex flex-wrap gap-2">

                  <Badge className="rounded-full">
                    {hostel.status || 'Draft'}
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="rounded-full"
                  >
                    {hostel.subscription_tier || 'Standard'}
                  </Badge>

                  <Badge
                    variant="outline"
                    className="rounded-full"
                  >
                    {hostel.visibility || 'Private'}
                  </Badge>

                  {hostel.monthly_revenue && (

                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      ${hostel.monthly_revenue}/mo
                    </Badge>

                  )}

                  {hostel.rating && (

                    <Badge
                      variant="outline"
                      className="rounded-full"
                    >
                      ⭐ {hostel.rating}
                    </Badge>

                  )}

                  {hostel.is_verified && (
                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      ✓ Verified
                    </Badge>
                  )}

                </div>


                <p className="text-xs text-muted-foreground">

                  Added:
                  {" "}
                  {hostel.created_at ? new Date(hostel.created_at).toLocaleDateString() : 'N/A'}

                </p>

              </CardContent>

            </Card>

          ))

        )}

      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Hostel</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <strong>{deleteConfirmation?.hostel_name}</strong>? 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel onClick={() => setDeleteConfirmation(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

    </div>

  )

}

export default HostelManagement