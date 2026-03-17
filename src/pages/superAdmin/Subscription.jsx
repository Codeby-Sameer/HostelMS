import React, { useState, useEffect } from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

const Subscriptions = () => {

  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {

    setTimeout(() => {

      setSubscriptions([
        {
          id: 1,
          hostelName: "Luxury Suites",
          subscriptionTier: "Premium",
          subscriptionStatus: "Active",
          amount: 299,
          paymentDate: "2024-02-15",
          email: "billing@luxurysuites.com",
          startDate: "2024-01-15",
          cycle: "Monthly"
        },
        {
          id: 2,
          hostelName: "City Center Hostel",
          subscriptionTier: "Standard",
          subscriptionStatus: "Active",
          amount: 199,
          paymentDate: "2024-02-10",
          email: "admin@citycenter.com",
          startDate: "2024-01-10",
          cycle: "Monthly"
        },
        {
          id: 3,
          hostelName: "Campus Living",
          subscriptionTier: "Premium",
          subscriptionStatus: "Active",
          amount: 299,
          paymentDate: "2024-02-08",
          email: "billing@campusliving.com",
          startDate: "2024-01-08",
          cycle: "Monthly"
        },
        {
          id: 4,
          hostelName: "Budget Stay",
          subscriptionTier: "Free",
          subscriptionStatus: "Active",
          amount: 0,
          paymentDate: "N/A",
          email: "info@budgetstay.com",
          startDate: "2024-01-05",
          cycle: "Free"
        },
        {
          id: 5,
          hostelName: "Urban Hostel",
          subscriptionTier: "Standard",
          subscriptionStatus: "Expired",
          amount: 199,
          paymentDate: "2024-01-28",
          email: "contact@urbanhostel.com",
          startDate: "2023-12-28",
          cycle: "Monthly"
        }
      ])

      setLoading(false)

    }, 1000)

  }, [])


  const filteredSubscriptions = subscriptions.filter(sub =>
    filter === "all" ||
    sub.subscriptionStatus.toLowerCase() === filter.toLowerCase()
  )


  const stats = {
    revenue: subscriptions
      .filter(s => s.subscriptionStatus === "Active")
      .reduce((sum, sub) => sum + sub.amount, 0)
  }


  const getStatusVariant = (status) => {
    if (status === "Active") return "default"
    if (status === "Expired") return "destructive"
    return "secondary"
  }


  const getTierVariant = (tier) => {
    if (tier === "Premium") return "default"
    if (tier === "Standard") return "secondary"
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

        <Button>
          + Add Subscription
        </Button>

      </div>


      {/* Overview */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          title="Free Tier"
          value={subscriptions.filter(s => s.subscriptionTier === "Free").length}
        />

        <StatCard
          title="Standard Tier"
          value={subscriptions.filter(s => s.subscriptionTier === "Standard").length}
        />

        <StatCard
          title="Premium Tier"
          value={subscriptions.filter(s => s.subscriptionTier === "Premium").length}
        />

        <StatCard
          title="Monthly Revenue"
          value={`$${stats.revenue}`}
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

        {loading ? (

          <Skeleton className="h-24 w-full" />

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

                  <div>

                    <h3 className="font-semibold text-lg">
                      {sub.hostelName}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {sub.email}
                    </p>

                  </div>

                  <div className="flex gap-2">

                    <Button size="sm" variant="secondary">
                      Edit
                    </Button>

                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>

                  </div>

                </div>


                {/* Details */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                  <p>💰 ${sub.amount}/month</p>

                  <p>
                    📅 Next Payment:
                    {sub.paymentDate !== "N/A"
                      ? new Date(sub.paymentDate).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p>🔄 Cycle: {sub.cycle}</p>

                  <p>
                    Started:
                    {new Date(sub.startDate).toLocaleDateString()}
                  </p>

                </div>


                {/* Badges */}

                <div className="flex flex-wrap gap-2">

                  <Badge
                    variant={getStatusVariant(sub.subscriptionStatus)}
                    className="rounded-full"
                  >
                    {sub.subscriptionStatus}
                  </Badge>

                  <Badge
                    variant={getTierVariant(sub.subscriptionTier)}
                    className="rounded-full"
                  >
                    {sub.subscriptionTier}
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