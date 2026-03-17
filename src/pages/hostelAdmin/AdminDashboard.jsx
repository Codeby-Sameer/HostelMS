// src/components/Dashboard.jsx

import React, { useState } from "react"
import { useModal } from "../../context/ModalContext"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Dashboard = () => {

  const { openModal } = useModal()

  const [selectedHostel, setSelectedHostel] = useState(null)

  const hostels = [
    {
      id: 1,
      hostelName: "BlueSky Residency",
      hostelType: "Boys Hostel",
      address: "Hyderabad, Telangana, India",
      occupancy: 80,
      totalBeds: 100,
      revenue: 250000,
      bookingRequests: 3,
      complaints: 1,
      maintenanceRequests: 2,
      status: "Active",
      visibility: "Public",
      isFavorite: true
    }
  ]

  const totalHostels = hostels.length

  const totalOccupancy =
    hostels.length > 0
      ? Math.round(
          (hostels.reduce(
            (sum, h) => sum + h.occupancy / h.totalBeds,
            0
          ) /
            hostels.length) *
            100
        )
      : 0

  const totalRevenue = hostels.reduce((s, h) => s + h.revenue, 0)

  const pendingRequests = hostels.reduce(
    (s, h) =>
      s + h.bookingRequests + h.complaints + h.maintenanceRequests,
    0
  )

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <Button onClick={() => openModal("hostel")}>
          + Add Hostel
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{totalHostels}</p>
            <p className="text-xs text-muted-foreground">Hostels</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{totalOccupancy}%</p>
            <p className="text-xs text-muted-foreground">Occupancy</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">
              ₹{totalRevenue.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{pendingRequests}</p>
            <p className="text-xs text-muted-foreground">Requests</p>
          </CardContent>
        </Card>

      </div>

      {/* Hostel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {hostels.map((hostel) => {

          const occupancyPercent = Math.round(
            (hostel.occupancy / hostel.totalBeds) * 100
          )

          return (
            <Card
              key={hostel.id}
              onClick={() => setSelectedHostel(hostel)}
              className={`cursor-pointer transition hover:shadow-lg ${
                selectedHostel?.id === hostel.id
                  ? "border-primary"
                  : ""
              }`}
            >

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {hostel.hostelName}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {hostel.hostelType}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">

                <p className="text-xs text-muted-foreground">
                  📍 {hostel.address}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">

                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-lg font-bold">
                      {occupancyPercent}%
                    </p>
                    <p className="text-xs">Occupancy</p>
                  </div>

                  <div className="p-3 rounded-lg bg-muted text-center">
                    <p className="text-lg font-bold">
                      ₹{hostel.revenue.toLocaleString()}
                    </p>
                    <p className="text-xs">Revenue</p>
                  </div>

                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-xs">

                  <span>
                    {hostel.occupancy}/{hostel.totalBeds} beds
                  </span>

                  <div className="flex items-center gap-2">

                    <Badge
                      variant={
                        hostel.status === "Active"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {hostel.status}
                    </Badge>

                    <Badge variant="secondary">
                      {hostel.visibility}
                    </Badge>

                  </div>

                </div>

              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">

          <div className="p-3 rounded-lg border flex justify-between items-center">
            <p className="text-sm">
              3 new booking requests
            </p>
            <Badge variant="destructive">High</Badge>
          </div>

          <div className="p-3 rounded-lg border flex justify-between items-center">
            <p className="text-sm">
              1 complaint pending
            </p>
            <Badge variant="secondary">Medium</Badge>
          </div>

        </CardContent>
      </Card>

    </div>
  )
}

export default Dashboard