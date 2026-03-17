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

const SuperAdminDashboard = () => {

  const [stats, setStats] = useState({
    totalHostels: 0,
    activeAdmins: 0,
    totalRevenue: 0,
    avgOccupancy: 0
  })

  const [recentActivity, setRecentActivity] = useState([])
  const [topHostels, setTopHostels] = useState([])

  useEffect(() => {

    setTimeout(() => {

      setStats({
        totalHostels: 45,
        activeAdmins: 12,
        totalRevenue: 12500,
        avgOccupancy: 78
      })

      setRecentActivity([
        { id: 1, name: "Sunrise Hostel", type: "HOSTEL", action: "created", time: "2 hours ago" },
        { id: 2, name: "John Doe", type: "ADMIN", action: "registered", time: "4 hours ago" },
        { id: 3, name: "Ocean View Hostel", type: "SUBSCRIPTION", action: "upgraded", time: "6 hours ago" },
        { id: 4, name: "Mountain Lodge", type: "HOSTEL", action: "updated", time: "1 day ago" },
        { id: 5, name: "Sarah Wilson", type: "ADMIN", action: "logged in", time: "1 day ago" }
      ])

      setTopHostels([
        { id: 1, name: "Luxury Suites", location: "New York", revenue: 8500, occupancy: 95 },
        { id: 2, name: "City Center Hostel", location: "Chicago", revenue: 7200, occupancy: 92 },
        { id: 3, name: "Campus Living", location: "Boston", revenue: 6800, occupancy: 88 },
        { id: 4, name: "Urban Stay", location: "San Francisco", revenue: 6200, occupancy: 85 },
        { id: 5, name: "Metro Hostel", location: "Seattle", revenue: 5800, occupancy: 82 }
      ])

    }, 1000)

  }, [])

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold">Platform Overview</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>


      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <CardContent className="p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Total Hostels</p>
              <p className="text-2xl font-bold">{stats.totalHostels}</p>
              <p className="text-xs text-green-600">↗ +12% this month</p>
            </div>
            <span className="text-3xl">🏨</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Active Admins</p>
              <p className="text-2xl font-bold">{stats.activeAdmins}</p>
              <p className="text-xs text-blue-600">↗ +5%</p>
            </div>
            <span className="text-3xl">👥</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              <p className="text-2xl font-bold">
                ${stats.totalRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-green-600">↗ +18%</p>
            </div>
            <span className="text-3xl">💰</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Avg Occupancy</p>
              <p className="text-2xl font-bold">{stats.avgOccupancy}%</p>
              <p className="text-xs text-green-600">↗ +8%</p>
            </div>
            <span className="text-3xl">📊</span>
          </CardContent>
        </Card>

      </div>


      {/* Activity + System Health */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Recent Activity */}

        <Card>

          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 max-h-80 overflow-y-auto">

            {recentActivity.length === 0 ? (
              <Skeleton className="h-6 w-full" />
            ) : (

              recentActivity.map(activity => (

                <div
                  key={activity.id}
                  className="flex justify-between items-center p-3 rounded-md border"
                >

                  <div>
                    <p className="font-medium text-sm">
                      {activity.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.type.toLowerCase()} • {activity.action}
                    </p>
                  </div>

                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>

                </div>

              ))

            )}

          </CardContent>

        </Card>


        {/* System Health */}

        <Card>

          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">

            <div className="flex justify-between">
              <span>Server Status</span>
              <Badge>Online</Badge>
            </div>

            <div className="flex justify-between">
              <span>Database</span>
              <Badge>Healthy</Badge>
            </div>

            <div className="flex justify-between">
              <span>Payment Gateway</span>
              <Badge>Connected</Badge>
            </div>

            <div className="flex justify-between">
              <span>Backup Status</span>
              <Badge variant="secondary">Running</Badge>
            </div>

            <div className="flex justify-between">
              <span>API Response</span>
              <Badge>98.5% Uptime</Badge>
            </div>

          </CardContent>

        </Card>

      </div>


      {/* Top Hostels */}

      <Card>

        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top Performing Hostels</CardTitle>
          <Button variant="ghost" size="sm">
            View All →
          </Button>
        </CardHeader>

        <CardContent className="space-y-3">

          {topHostels.map((hostel, index) => (

            <div
              key={hostel.id}
              className="flex items-center justify-between p-3 border rounded-md"
            >

              <div className="flex items-center gap-3">

                <span className="text-xl">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏨"}
                </span>

                <div>
                  <p className="font-medium text-sm">
                    {hostel.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {hostel.location}
                  </p>
                </div>

              </div>

              <div className="text-right">
                <p className="font-semibold text-green-600 text-sm">
                  ${hostel.revenue.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {hostel.occupancy}% occupied
                </p>
              </div>

            </div>

          ))}

        </CardContent>

      </Card>

    </div>

  )

}

export default SuperAdminDashboard
