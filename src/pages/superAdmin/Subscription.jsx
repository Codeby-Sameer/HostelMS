import React, { useState } from "react"
import { useModal } from "@/context/ModalContext"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

import { useSubscriptions } from "@/features/subscriptions/hooks/useSubscriptions"
import { useDeleteSubscriptionMutation } from "@/features/subscriptions/api/subscriptionsApi"
import toast from "react-hot-toast"

const Subscriptions = () => {
  const { openModal } = useModal()

  const [filter, setFilter] = useState("all")
  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const { subscriptions, isLoading, error, refetch } = useSubscriptions()
  const [deleteSubscription] = useDeleteSubscriptionMutation()


  const filteredSubscriptions = subscriptions.filter(sub => {
    // Filter by status if filter is applied
    if (filter === "all") return true;
    
    const status = (sub.status || "active").toLowerCase();
    return status === filter.toLowerCase();
  });

  const stats = {
    revenue: subscriptions
      .filter(s => (s.status || "active").toLowerCase() === "active")
      .reduce((sum, sub) => sum + (sub.amount || 0), 0),
    total: subscriptions.length,
  };

  // Get plan names/tiers - supporting different field names
  const getPlanName = (sub) => sub.plan_name || sub.tier || sub.name || "Standard";

  const handleAddClick = () => {
    openModal("subscription", { isNew: true })
  };

  const handleEditClick = (subscription) => {
    openModal("subscription", subscription)
  };

  const handleDeleteClick = (subscription) => {
    setDeleteConfirmation(subscription)
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmation?.id) return

    try {
      setIsDeleting(true)
      await deleteSubscription(deleteConfirmation.id).unwrap()
      toast.success("Subscription deleted successfully!")
      setDeleteConfirmation(null)
      refetch()
    } catch (error) {
      console.error("Delete error:", error)
      toast.error(error?.data?.detail || "Failed to delete subscription")
    } finally {
      setIsDeleting(false)
    }
  };


  const getStatusVariant = (status) => {
    const lowerStatus = (status || "").toLowerCase();
    if (lowerStatus === "active") return "default"
    if (lowerStatus === "expired") return "destructive"
    if (lowerStatus === "pending") return "secondary"
    return "outline"
  }

  const getTierVariant = (tier) => {
    const lowerTier = (tier || "").toLowerCase();
    if (lowerTier.includes("premium")) return "default"
    if (lowerTier.includes("standard")) return "secondary"
    return "outline"
  }


  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h2 className="text-3xl font-bold">
            Subscription & Billing
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage hostel subscriptions and billing information
          </p>
        </div>

        <Button onClick={handleAddClick}>
          + Add Subscription
        </Button>

      </div>


      {/* Overview */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          title="Active Subscriptions"
          value={subscriptions.filter(s => (s.status || "active").toLowerCase() === "active").length}
        />

        <StatCard
          title="Expired Subscriptions"
          value={subscriptions.filter(s => (s.status || "active").toLowerCase() === "expired").length}
        />

        <StatCard
          title="Total Subscriptions"
          value={subscriptions.length}
        />

        <StatCard
          title="Monthly Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
        />

      </div>


      {/* Filters */}

      <div className="flex flex-wrap gap-2">

        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>

        <Button
          variant={filter === "active" ? "default" : "outline"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>

        <Button
          variant={filter === "expired" ? "default" : "outline"}
          onClick={() => setFilter("expired")}
        >
          Expired
        </Button>

      </div>


      {/* Subscription Cards */}

      <div className="space-y-4">

        {deleteConfirmation && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <p className="font-semibold mb-3">
                Are you sure you want to delete this subscription?
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={handleConfirmDelete}
                  variant="destructive"
                  size="sm"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Confirm Delete"}
                </Button>
                <Button
                  onClick={() => setDeleteConfirmation(null)}
                  variant="outline"
                  size="sm"
                  disabled={isDeleting}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {isLoading ? (
          <>
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </>
        ) : error ? (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-red-800">
              <p className="font-semibold">Error loading subscriptions</p>
              <p className="text-sm mt-2">{error?.data?.message || error?.message || "Please try again"}</p>
              <Button onClick={() => refetch()} variant="outline" size="sm" className="mt-3">
                Retry
              </Button>
            </CardContent>
          </Card>
        ) : filteredSubscriptions.length === 0 ? (

          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No subscriptions found
            </CardContent>
          </Card>

        ) : (

          filteredSubscriptions.map(sub => (

            <Card key={sub.id}>

              <CardContent className="p-5 space-y-4">

                {/* Top */}

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div className="flex-1">

                    <h3 className="font-semibold text-lg">
                      {sub.hostel_name || sub.organisation_name || "Hostel"}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {sub.email || "No email"}
                    </p>

                  </div>

                  <div className="flex gap-2">

                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEditClick(sub)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteClick(sub)}
                    >
                      Delete
                    </Button>

                  </div>

                </div>


                {/* Details */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                  <p>💰 ${sub.amount || 0}/month</p>

                  {sub.next_billing_date && (
                    <p>
                      📅 Next Payment:
                      {new Date(sub.next_billing_date).toLocaleDateString()}
                    </p>
                  )}

                  {sub.billing_cycle && (
                    <p>🔄 Cycle: {sub.billing_cycle}</p>
                  )}

                  {sub.start_date && (
                    <p>
                      Started:
                      {new Date(sub.start_date).toLocaleDateString()}
                    </p>
                  )}

                </div>


                {/* Badges */}

                <div className="flex flex-wrap gap-2">

                  <Badge
                    variant={getStatusVariant((sub.status || "active"))}
                    className="rounded-full"
                  >
                    {sub.status || "Active"}
                  </Badge>

                  <Badge
                    variant={getTierVariant(getPlanName(sub))}
                    className="rounded-full"
                  >
                    {getPlanName(sub)}
                  </Badge>

                </div>

              </CardContent>

            </Card>

          ))

        )}


      </div>

    </div>

  )

}

export default Subscriptions


/*****************
 Helper Components
*****************/

const StatCard = ({ title, value }) => (

  <Card>

    <CardContent className="p-4 text-center">

      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="text-2xl font-bold">
        {value}
      </p>

    </CardContent>

  </Card>

)