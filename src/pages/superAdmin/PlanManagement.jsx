import React, { useState } from "react"
import { useGetPlansQuery, useDeletePlanMutation } from "@/features/subscriptions/api/subscriptionsApi"
import { useModal } from "@/context/ModalContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import toast from "react-hot-toast"
import { Search, Plus, Trash2, Edit, Loader } from "lucide-react"
import { Input } from "@/components/ui/input"

const PlanManagement = () => {
  const { openModal } = useModal()
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  // Queries
  const { data: plansData, isLoading: isFetching, error: fetchError, refetch } = useGetPlansQuery()
  const [deletePlan, { isLoading: isDeleting }] = useDeletePlanMutation()

  const plans = Array.isArray(plansData) ? plansData : plansData?.data || []

  // Filter plans by search term
  const filteredPlans = plans.filter(plan =>
    plan.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.tier?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Handle delete
  const handleDelete = async (planId) => {
    try {
      await deletePlan(planId).unwrap()
      toast.success("Plan deleted successfully!")
      setDeleteConfirm(null)
      refetch()
    } catch (error) {
      console.error("Delete error:", error)
      toast.error(error?.data?.detail || "Failed to delete plan")
    }
  }

  // Handle add plan
  const handleAddPlan = () => {
    openModal("plan", null)
  }

  // Handle edit plan
  const handleEditPlan = (plan) => {
    openModal("plan", plan)
  }

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin mx-auto mb-2" />
          <p>Loading plans...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Plan Management</h1>
          <p className="text-gray-500 mt-1">Create and manage subscription plans</p>
        </div>
        <Button onClick={handleAddPlan} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Plan
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search plans by name or tier..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Error State */}
      {fetchError && (
        <Card className="p-4 bg-red-50 border-red-200">
          <p className="text-red-800">{fetchError?.data?.detail || "Failed to load plans"}</p>
          <Button
            onClick={() => refetch()}
            variant="outline"
            size="sm"
            className="mt-2"
          >
            Retry
          </Button>
        </Card>
      )}

      {/* Plans Grid */}
      {filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map(plan => (
            <Card key={plan.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                {/* Plan Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">Tier: {plan.tier}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    plan.is_active
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {plan.is_active ? "Active" : "Inactive"}
                  </span>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold">
                      {plan.currency} {plan.price}
                      <span className="text-sm text-gray-500">/{plan.billing_cycle}</span>
                    </span>
                  </div>
                </div>

                {/* Limits */}
                <div className="border-t pt-4">
                  <p className="text-xs font-medium text-gray-600 mb-2">Plan Limits</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex justify-between">
                      <span>Hostels:</span>
                      <span className="font-medium">{plan.max_hostels}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Admins:</span>
                      <span className="font-medium">{plan.max_admins}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-medium">{plan.max_students}</span>
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500">
                    Created: {new Date(plan.created_at).toLocaleDateString()}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={() => handleEditPlan(plan)}
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => setDeleteConfirm(plan)}
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-gray-500">No plans found</p>
          <Button onClick={handleAddPlan} variant="outline" className="mt-4 gap-2">
            <Plus className="h-4 w-4" />
            Create Your First Plan
          </Button>
        </Card>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Plan?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the plan "{deleteConfirm?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDelete(deleteConfirm.id)}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Stats Card */}
      {plans.length > 0 && (
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600">Total Plans</p>
              <p className="text-2xl font-bold">{plans.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Plans</p>
              <p className="text-2xl font-bold">{plans.filter(p => p.is_active).length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Price</p>
              <p className="text-2xl font-bold">
                {plans.length > 0
                  ? (plans.reduce((sum, p) => sum + p.price, 0) / plans.length).toFixed(2)
                  : "0"
                }
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default PlanManagement
