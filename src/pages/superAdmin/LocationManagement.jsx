import React, { useState, useCallback } from "react"
import { useModal } from "../../context/ModalContext"
import { useLocations } from "../../features/locations/hooks/useLocations"
import { useDeleteLocationMutation } from "../../features/locations/api/locationsApi"

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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Edit2, Trash2, Plus } from "lucide-react"

const LocationManagement = () => {

  const { openModal } = useModal()
  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  
  // Use the custom hook for location management
  const {
    locations,
    isLoading,
    error,
    filters,
    updateFilters,
    deleteLocation: deleteLocationAPI,
    isDeleting,
    refetch,
  } = useLocations()

  // Delete location mutation
  const [deleteLocation] = useDeleteLocationMutation()

  const handleDeleteClick = (location) => {
    setDeleteConfirmation(location)
  }

  const handleConfirmDelete = async () => {
    if (!deleteConfirmation) return
    
    try {
      await deleteLocation(deleteConfirmation.id).unwrap()
      setDeleteConfirmation(null)
      refetch()
    } catch (error) {
      console.error('Error deleting location:', {
        status: error?.status,
        data: error?.data,
        message: error?.message,
        fullError: error
      })
      
      // Handle 409 Conflict - Location has dependencies
      if (error?.status === 409 || error?.status === '409') {
        const conflictMessage = error?.data?.detail || error?.data?.message || 'This location cannot be deleted because it has hostels or other resources assigned to it.'
        alert(`Cannot Delete Location\n\n${conflictMessage}`)
      } else {
        const errorMessage = error?.data?.detail || error?.data?.message || error?.message || 'Failed to delete location. Please try again.'
        alert(`Error: ${errorMessage}`)
      }
    }
  }

  const handleEditClick = (location) => {
    openModal("location", location)
  }

  const handleFilterChange = useCallback((key, value) => {
    updateFilters({ [key]: value })
  }, [updateFilters])

  // If there's an error fetching data
  if (error) {
    const isAuthError = error?.status === 401 || error?.status === '401';
    const errorMessage = isAuthError 
      ? 'Authentication failed. Please login again.'
      : error?.data?.detail || error?.message || 'Error loading locations';
    
    console.error('LocationManagement error details:', {
      status: error?.status,
      data: error?.data,
      message: error?.message,
      error: error,
    });
    
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Location Management</h2>
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
            Location Management
          </h2>

          <p className="text-muted-foreground text-sm">
            Manage all locations in the platform ({locations.length} locations)
          </p>

        </div>

        <div className="flex gap-3 flex-wrap">

          <Button
            onClick={() => openModal("location")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Location
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <Input
                placeholder="Search by city, state, country..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <Input
                placeholder="Filter by state"
                value={filters.state}
                onChange={(e) => handleFilterChange('state', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Locations Table */}

      <Card>
        <CardHeader>
          <CardTitle>Locations</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded" />
              ))}
            </div>
          ) : locations.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No locations found. Create your first location to get started.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>City</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>District</TableHead>
                    <TableHead>Postal Code</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead>Timezone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {locations.map((location) => (
                    <TableRow key={location.id}>
                      <TableCell className="font-medium">{location.city}</TableCell>
                      <TableCell>{location.state}</TableCell>
                      <TableCell>{location.country}</TableCell>
                      <TableCell>{location.district || '-'}</TableCell>
                      <TableCell>{location.postal_code || '-'}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{location.currency || 'USD'}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{location.timezone || 'UTC'}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={location.is_active ? 'default' : 'destructive'}>
                          {location.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditClick(location)}
                            disabled={isDeleting}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteClick(location)}
                            disabled={isDeleting}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirmation} onOpenChange={(open) => !open && setDeleteConfirmation(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Location</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <strong>{deleteConfirmation?.city}, {deleteConfirmation?.state}</strong>? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

    </div>

  )

}

export default LocationManagement
