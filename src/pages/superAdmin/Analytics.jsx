import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { useGetHostelSummaryQuery, useGetReportStatisticsQuery } from '../../features/reports/api/reportsApi'
import { useHostels } from '../../features/hostels/hooks/useHostels'

const Analytics = () => {
  const [selectedHostelId, setSelectedHostelId] = useState(null)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  // Get list of hostels
  const { hostels, isLoading: hostelsLoading } = useHostels()

  // Set first hostel as selected by default
  useEffect(() => {
    if (hostels && hostels.length > 0 && !selectedHostelId) {
      setSelectedHostelId(hostels[0].id)
    }
  }, [hostels, selectedHostelId])

  // Get analytics for selected hostel
  const { data: analyticsData, isLoading: analyticsLoading, error: analyticsError } = useGetHostelSummaryQuery(
    selectedHostelId,
    { skip: !selectedHostelId }
  )

  // Get overall statistics
  const { data: statsData, isLoading: statsLoading } = useGetReportStatisticsQuery()

  const summary = analyticsData?.summary || {}

  // Mock trend data
  const revenueTrends = [15000, 18000, 22000, 25000, 28000, 32000]
  const occupancyTrends = [65, 70, 75, 80, 85, 88]

  const isLoading = hostelsLoading || analyticsLoading || statsLoading

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Analytics & Insights</h2>
        <p className="text-muted-foreground">Comprehensive analytics and performance metrics</p>
      </div>

      {/* Hostel Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Hostel</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedHostelId?.toString() || ''} onValueChange={(val) => setSelectedHostelId(parseInt(val))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a hostel" />
            </SelectTrigger>
            <SelectContent>
              {hostels?.map((hostel) => (
                <SelectItem key={hostel.id} value={hostel.id.toString()}>
                  {hostel.hostel_name || `Hostel ${hostel.id}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      ) : analyticsError ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <p className="text-red-600">Failed to load analytics data</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-around gap-2">
                  {revenueTrends.map((revenue, index) => {
                    const height = (revenue / Math.max(...revenueTrends)) * 200
                    return (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div
                          className="bg-blue-500 rounded-t w-full transition-all hover:opacity-80"
                          style={{ height: `${height}px` }}
                        ></div>
                        <p className="text-xs text-muted-foreground mt-2">{months[index]}</p>
                        <p className="text-xs font-bold">${(revenue / 1000).toFixed(0)}k</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Occupancy Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Occupancy Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-around gap-2">
                  {occupancyTrends.map((occupancy, index) => {
                    const height = (occupancy / 100) * 200
                    return (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div
                          className="bg-green-500 rounded-t w-full transition-all hover:opacity-80"
                          style={{ height: `${height}px` }}
                        ></div>
                        <p className="text-xs text-muted-foreground mt-2">{months[index]}</p>
                        <p className="text-xs font-bold">{occupancy}%</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                <p className="text-2xl font-bold">{summary.occupancy_rate?.toFixed(1) || '0'}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">${summary.revenue?.toLocaleString() || '0'}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Uptime</p>
                <p className="text-2xl font-bold">98.5%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold">2.3s</p>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default Analytics