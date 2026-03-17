import React, { useState, useEffect } from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"

const Reports = () => {

  const [reportType, setReportType] = useState("revenue")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    const today = new Date()
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)

    setStartDate(firstDay.toISOString().split("T")[0])
    setEndDate(today.toISOString().split("T")[0])
  }, [])

  const generateReport = () => {
    setGenerating(true)

    setTimeout(() => {
      setGenerating(false)
      alert(`Report generated!\nType: ${reportType}`)
    }, 2000)
  }

  const financialData = {
    totalIncome: 125000,
    subscriptionRevenue: 100000,
    commissionEarned: 18750,
    pendingPayments: 6250
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold">
          Reports & Financial Analysis
        </h2>

        <p className="text-muted-foreground text-sm">
          Generate and analyze platform reports
        </p>
      </div>


      {/* Generate Reports */}

      <Card>

        <CardHeader>
          <CardTitle>Generate Reports</CardTitle>
        </CardHeader>

        <CardContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

            <Select
              value={reportType}
              onValueChange={setReportType}
            >

              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>

                <SelectItem value="revenue">
                  Revenue Report
                </SelectItem>

                <SelectItem value="occupancy">
                  Occupancy Report
                </SelectItem>

                <SelectItem value="complaints">
                  Complaints Report
                </SelectItem>

                <SelectItem value="financial">
                  Financial Summary
                </SelectItem>

                <SelectItem value="user">
                  User Activity
                </SelectItem>

                <SelectItem value="system">
                  System Performance
                </SelectItem>

              </SelectContent>

            </Select>

            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <Button
              onClick={generateReport}
              disabled={generating}
              className="w-full"
            >

              {generating ? "Generating..." : "Generate Report"}

            </Button>

          </div>

        </CardContent>

      </Card>


      {/* Financial Summary */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          title="Total Income"
          value={`₹${financialData.totalIncome.toLocaleString()}`}
        />

        <StatCard
          title="Subscription Revenue"
          value={`₹${financialData.subscriptionRevenue.toLocaleString()}`}
        />

        <StatCard
          title="Commission Earned"
          value={`₹${financialData.commissionEarned.toLocaleString()}`}
        />

        <StatCard
          title="Pending Payments"
          value={`₹${financialData.pendingPayments.toLocaleString()}`}
        />

      </div>


      {/* Reports Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


        {/* Recent Reports */}

        <Card>

          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">

            {[
              { name: "Monthly Revenue", date: "Jan 2024", type: "PDF" },
              { name: "User Activity", date: "Dec 2023", type: "CSV" },
              { name: "System Performance", date: "Dec 2023", type: "PDF" }
            ].map((report, index) => (

              <div
                key={index}
                className="flex justify-between items-center border rounded-md p-2"
              >

                <div>

                  <p className="text-sm font-medium">
                    {report.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {report.date}
                  </p>

                </div>

                <Badge className="rounded-full">
                  {report.type}
                </Badge>

              </div>

            ))}

          </CardContent>

        </Card>


        {/* Export Options */}

        <Card>

          <CardHeader>
            <CardTitle>Export Options</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">

            <Button
              variant="outline"
              className="w-full justify-start"
            >
              Export as PDF
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
            >
              Export as CSV
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start"
            >
              Export as Excel
            </Button>

          </CardContent>

        </Card>


        {/* Report Statistics */}

        <Card>

          <CardHeader>
            <CardTitle>Report Statistics</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <StatProgress
              label="Generated This Month"
              value={60}
              count="12"
            />

            <StatProgress
              label="Automated Reports"
              value={40}
              count="8"
            />

            <StatProgress
              label="Scheduled Reports"
              value={20}
              count="4"
            />

          </CardContent>

        </Card>

      </div>

    </div>

  )

}

export default Reports



/********************
 Helper Components
********************/

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


const StatProgress = ({ label, value, count }) => (

  <div>

    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span className="font-semibold">
        {count}
      </span>
    </div>

    <Progress value={value} />

  </div>

)