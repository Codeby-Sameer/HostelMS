import React, { useState, useEffect } from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

const SystemHealth = () => {

  const [systemMetrics, setSystemMetrics] = useState(null)

  useEffect(() => {

    const interval = setInterval(() => {

      setSystemMetrics({
        cpuUsage: 45 + Math.random() * 10,
        memoryUsage: 62 + Math.random() * 8,
        diskUsage: 78 + Math.random() * 5,
        networkLatency: 28 + Math.random() * 15,
        activeUsers: 124 + Math.floor(Math.random() * 20),
        responseTime: 1.2 + Math.random() * 0.8
      })

    }, 2000)

    return () => clearInterval(interval)

  }, [])

  const systemEvents = [
    { id: 1, type: "success", message: "System backup completed", time: "2 hours ago", icon: "💾" },
    { id: 2, type: "info", message: "Database optimization running", time: "4 hours ago", icon: "🛠️" },
    { id: 3, type: "warning", message: "High traffic detected", time: "6 hours ago", icon: "📈" },
    { id: 4, type: "success", message: "Security patches applied", time: "1 day ago", icon: "🔒" },
    { id: 5, type: "info", message: "Scheduled maintenance completed", time: "1 day ago", icon: "⚙️" }
  ]

  const services = [
    { name: "Web Server", status: "operational", uptime: "98.5%" },
    { name: "Database", status: "operational", uptime: "99.2%" },
    { name: "Payment Gateway", status: "operational", uptime: "99.8%" },
    { name: "Email Service", status: "degraded", uptime: "95.1%" },
    { name: "API Gateway", status: "operational", uptime: "99.1%" },
    { name: "File Storage", status: "operational", uptime: "99.5%" },
    { name: "Cache Service", status: "maintenance", uptime: "N/A" },
    { name: "CDN", status: "operational", uptime: "99.9%" }
  ]

  const getBadgeVariant = (status) => {
    if (status === "operational") return "default"
    if (status === "degraded") return "secondary"
    if (status === "maintenance") return "destructive"
    return "outline"
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold">System Health</h2>
        <p className="text-muted-foreground text-sm">
          Real-time monitoring and system performance metrics
        </p>
      </div>


      {/* Performance + Events */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Performance */}

        <Card>

          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            {!systemMetrics ? (

              <Skeleton className="h-6 w-full" />

            ) : (

              <>
                <Metric label="CPU Usage" value={systemMetrics.cpuUsage} />
                <Metric label="Memory Usage" value={systemMetrics.memoryUsage} />
                <Metric label="Disk Usage" value={systemMetrics.diskUsage} />

                <StatRow label="Network Latency" value={`${systemMetrics.networkLatency.toFixed(1)} ms`} />
                <StatRow label="Active Users" value={systemMetrics.activeUsers} />
                <StatRow label="Response Time" value={`${systemMetrics.responseTime.toFixed(1)} s`} />

              </>

            )}

          </CardContent>

        </Card>


        {/* System Events */}

        <Card>

          <CardHeader>
            <CardTitle>Recent System Events</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 max-h-80 overflow-y-auto">

            {systemEvents.map(event => (

              <div
                key={event.id}
                className="flex items-center justify-between border rounded-md p-3"
              >

                <div className="flex items-center gap-3">

                  <span>{event.icon}</span>

                  <div>
                    <p className="text-sm font-medium">
                      {event.message}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {event.time}
                    </p>
                  </div>

                </div>

                <Badge variant="outline">
                  {event.type}
                </Badge>

              </div>

            ))}

          </CardContent>

        </Card>

      </div>


      {/* Services */}

      <Card>

        <CardHeader>
          <CardTitle>Service Status</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {services.map((service, index) => (

            <div
              key={index}
              className="border rounded-md p-3 flex flex-col gap-1"
            >

              <div className="flex justify-between items-center">

                <span className="text-sm font-medium">
                  {service.name}
                </span>

                <Badge variant={getBadgeVariant(service.status)}>
                  {service.status}
                </Badge>

              </div>

              <p className="text-xs text-muted-foreground">
                Uptime: {service.uptime}
              </p>

            </div>

          ))}

        </CardContent>

      </Card>


      {/* Quick Actions */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

        <ActionButton label="Clear Cache" icon="🔄" />
        <ActionButton label="Backup Now" icon="💾" />
        <ActionButton label="Run Diagnostics" icon="📊" />
        <ActionButton label="View Logs" icon="📋" />

      </div>

    </div>

  )

}

export default SystemHealth


/***************
 Components
***************/

const Metric = ({ label, value }) => (
  <div className="space-y-1">

    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value.toFixed(1)}%</span>
    </div>

    <Progress value={value} />

  </div>
)

const StatRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
)

const ActionButton = ({ label, icon }) => (
  <Button variant="outline" className="h-20 flex flex-col gap-1">
    <span className="text-lg">{icon}</span>
    <span className="text-xs">{label}</span>
  </Button>
)