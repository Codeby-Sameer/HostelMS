import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"

// Import API hooks
import { useListRecentReportsQuery, useGetReportStatisticsQuery } from "../../features/reports/api/reportsApi"

const SuperAdminDashboard = () => {
  const navigate = useNavigate()

  const [stats, setStats] = useState({
    totalHostels: 45,
    activeAdmins: 12,
    totalRevenue: 125000,
    avgOccupancy: 78,
    totalStudents: 852,
    totalBookings: 342,
    totalPayments: 45600,
    pendingApprovals: 8,
    systemUptime: 99.8,
    activeReservations: 127
  })

  const [recentActivity, setRecentActivity] = useState([])
  const [topHostels, setTopHostels] = useState([])
  const [monthlyMetrics, setMonthlyMetrics] = useState([])

  // Fetch reports data
  const { data: reportsData, isLoading: reportsLoading } = useListRecentReportsQuery(5)
  const { data: statsData, isLoading: statsLoading } = useGetReportStatisticsQuery()

  const recentReports = reportsData?.data || []
  const reportStats = statsData?.data || {}

  useEffect(() => {
    setTimeout(() => {
      setRecentActivity([
        { id: 1, name: "Sunrise Hostel", type: "HOSTEL", action: "created", time: "2 hours ago", icon: "🏨" },
        { id: 2, name: "John Doe", type: "ADMIN", action: "registered", time: "4 hours ago", icon: "👤" },
        { id: 3, name: "Ocean View Hostel", type: "SUBSCRIPTION", action: "upgraded", time: "6 hours ago", icon: "⭐" },
        { id: 4, name: "Mountain Lodge", type: "HOSTEL", action: "updated", time: "1 day ago", icon: "🏨" },
        { id: 5, name: "Sarah Wilson", type: "ADMIN", action: "logged in", time: "1 day ago", icon: "👤" },
        { id: 6, name: "Payment Received", type: "PAYMENT", action: "confirmed", time: "1 day ago", icon: "💰" },
        { id: 7, name: "Room Booking", type: "BOOKING", action: "completed", time: "2 days ago", icon: "🔑" }
      ])

      setTopHostels([
        { id: 1, name: "Luxury Suites", location: "New York", revenue: 85000, occupancy: 95, rooms: 45, students: 185 },
        { id: 2, name: "City Center Hostel", location: "Chicago", revenue: 72000, occupancy: 92, rooms: 38, students: 156 },
        { id: 3, name: "Campus Living", location: "Boston", revenue: 68000, occupancy: 88, rooms: 35, students: 142 },
        { id: 4, name: "Urban Stay", location: "San Francisco", revenue: 62000, occupancy: 85, rooms: 32, students: 128 },
        { id: 5, name: "Metro Hostel", location: "Seattle", revenue: 58000, occupancy: 82, rooms: 28, students: 115 }
      ])

      setMonthlyMetrics([
        { month: "Jan", revenue: 95000, bookings: 256, students: 680 },
        { month: "Feb", revenue: 105000, bookings: 278, students: 720 },
        { month: "Mar", revenue: 115000, bookings: 304, students: 785 },
        { month: "Apr", revenue: 125000, bookings: 325, students: 852 }
      ])
    }, 800)
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

      {/* Reports & Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Recent Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Reports</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/super-admin/reports')}
            >
              View All →
            </Button>
          </CardHeader>

          <CardContent className="space-y-3">
            {reportsLoading ? (
              [1, 2, 3].map(i => <Skeleton key={i} className="h-10 w-full" />)
            ) : recentReports.length === 0 ? (
              <p className="text-sm text-muted-foreground">No reports generated yet</p>
            ) : (
              recentReports.slice(0, 5).map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-3 border rounded-md"
                >
                  <div>
                    <p className="font-medium text-sm">
                      {report.report_type || 'Report'} Report
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(report.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {report.export_format?.toUpperCase() || 'PDF'}
                  </Badge>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Analytics Summary */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Analytics Summary</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/super-admin/analytics')}
            >
              View All →
            </Button>
          </CardHeader>

          <CardContent className="space-y-3">
            {statsLoading ? (
              [1, 2, 3, 4].map(i => <Skeleton key={i} className="h-8 w-full" />)
            ) : (
              <>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-sm text-muted-foreground">Total Reports</span>
                  <span className="font-bold">{reportStats.total_reports || 0}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm text-muted-foreground">Total Income</span>
                  <span className="font-bold text-green-600">${(reportStats.total_income || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="text-sm text-muted-foreground">Commission Earned</span>
                  <span className="font-bold text-purple-600">${(reportStats.commission_earned || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="text-sm text-muted-foreground">Pending Payments</span>
                  <span className="font-bold text-orange-600">${(reportStats.pending_payments || 0).toLocaleString()}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>

      </div>

    </div>

  )

}

export default SuperAdminDashboard
