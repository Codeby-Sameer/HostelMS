import React, { useState, useEffect } from "react"
import { useModal } from "../../context/ModalContext"

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

const HostelManagement = () => {

  const { openModal } = useModal()

  const [filters, setFilters] = useState({
    status: "",
    tier: "",
    search: ""
  })

  const [hostels, setHostels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setHostels([
        {
          id: 1,
          hostelName: "Luxury Suites",
          location: "New York, NY",
          capacity: 200,
          occupancy: 190,
          subscriptionTier: "Premium",
          status: "Active",
          visibility: "Public",
          assignedAdmin: "John Smith",
          email: "contact@luxurysuites.com",
          revenue: 8500,
          rating: 4.8,
          createdAt: "2024-01-15"
        },
        {
          id: 2,
          hostelName: "City Center Hostel",
          location: "Chicago, IL",
          capacity: 150,
          occupancy: 138,
          subscriptionTier: "Standard",
          status: "Active",
          visibility: "Public",
          assignedAdmin: "Sarah Johnson",
          email: "info@citycenter.com",
          revenue: 7200,
          rating: 4.5,
          createdAt: "2024-01-10"
        }
      ])

      setLoading(false)

    }, 1500)

  }, [])


  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }


  const filteredHostels = hostels.filter(hostel => (

    (filters.status === "" || hostel.status === filters.status) &&
    (filters.tier === "" || hostel.subscriptionTier === filters.tier) &&
    (
      filters.search === "" ||
      hostel.hostelName.toLowerCase().includes(filters.search.toLowerCase()) ||
      hostel.location.toLowerCase().includes(filters.search.toLowerCase())
    )

  ))


  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h2 className="text-3xl font-bold">
            Hostel Management
          </h2>

          <p className="text-muted-foreground text-sm">
            Manage all hostels in the platform
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
              onValueChange={(value) =>
                handleFilterChange("status", value)
              }
            >

              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>

              <SelectContent>

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
              onValueChange={(value) =>
                handleFilterChange("tier", value)
              }
            >

              <SelectTrigger>
                <SelectValue placeholder="Subscription Tier" />
              </SelectTrigger>

              <SelectContent>

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

            <Button>
              Apply Filters
            </Button>

          </div>

        </CardContent>

      </Card>


      {/* Hostels List */}

      <div className="space-y-4">

        {loading ? (

          <Skeleton className="h-28 w-full" />

        ) : filteredHostels.length === 0 ? (

          <Card>

            <CardContent className="p-6 text-center text-muted-foreground">

              No hostels found matching your filters.

            </CardContent>

          </Card>

        ) : (

          filteredHostels.map(hostel => (

            <Card key={hostel.id}>

              <CardContent className="p-5 space-y-4">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>

                    <h3 className="font-semibold text-lg">
                      {hostel.hostelName}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {hostel.location}
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


                {/* Info */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                  <p>👥 {hostel.occupancy}/{hostel.capacity} occupied</p>

                  <p>👨‍💼 Admin: {hostel.assignedAdmin}</p>

                  <p>📧 {hostel.email}</p>

                  <p>
                    Occupancy:
                    {" "}
                    {Math.round(
                      (hostel.occupancy / hostel.capacity) * 100
                    )}%
                  </p>

                </div>


                {/* Badges */}

                <div className="flex flex-wrap gap-2">

                  <Badge className="rounded-full">
                    {hostel.status}
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="rounded-full"
                  >
                    {hostel.subscriptionTier}
                  </Badge>

                  <Badge
                    variant="outline"
                    className="rounded-full"
                  >
                    {hostel.visibility}
                  </Badge>

                  {hostel.revenue && (

                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      ${hostel.revenue}/mo
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

                </div>


                <p className="text-xs text-muted-foreground">

                  Added:
                  {" "}
                  {new Date(hostel.createdAt).toLocaleDateString()}

                </p>

              </CardContent>

            </Card>

          ))

        )}

      </div>

    </div>

  )

}

export default HostelManagement