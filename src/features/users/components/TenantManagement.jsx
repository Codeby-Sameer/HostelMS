import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  useGetStudentsQuery,
  useDeleteStudentMutation,
} from "@/features/users/api/tenantApi"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import { Loader2, Search } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import AllocationBar from "./AddTenantBtn"

export default function TenantManagement() {
  const selectedHostelId = useSelector(
    (state) => state.allocation.hostelId
  )

  const [search, setSearch] = useState("")

  const { data, isLoading } = useGetStudentsQuery(
    { hostelId: selectedHostelId, name: search },
    { skip: !selectedHostelId }
  )

  const [deleteStudent] = useDeleteStudentMutation()
  const { openModal } = useModal()

  const students = data || []

  // 🔥 STATS
  const total = students.length
  const active = students.filter((s) => s.status === "active").length
  const due = students.reduce(
    (sum, s) => sum + (s.payment_summary?.due || 0),
    0
  )

  if (isLoading) {
    return <Loader2 className="animate-spin mx-auto mt-10" />
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Tenant Management
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage all tenants, rooms & payments
          </p>
        </div>

        <AllocationBar />

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Tenants</p>
            <p className="text-xl font-semibold">{total}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-xl font-semibold text-green-600">{active}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Due</p>
            <p className="text-xl font-semibold text-red-500">₹{due}</p>
          </CardContent>
        </Card>

      </div>

      {/* SEARCH */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search tenant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {students.map((student) => {
          const isDue = student.payment_summary?.due > 0

          return (
            <Card
              key={student.student_id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* TOP BAR */}
              <div
                className={`h-1 w-full ${isDue ? "bg-red-500" : "bg-green-500"
                  }`}
              />

              <CardHeader className="flex justify-between items-start">

                <div>
                  <CardTitle className="text-base font-semibold">
                    {student.student_name}
                  </CardTitle>

                  <p className="text-xs text-muted-foreground">
                    {student.student_email}
                  </p>
                </div>

                <Badge variant="outline">
                  {student.status}
                </Badge>

              </CardHeader>

              <CardContent className="space-y-3 text-sm">

                {/* INFO */}
                <p>
                  🏠 Room {student.room_id ?? "Not Assigned"}
                </p>

                <p>
                  🛏 Bed {student.bed_id ?? "Not Assigned"}
                </p>

                {/* PAYMENT */}
                <div className="flex justify-between bg-muted/50 p-2 rounded-md">
                  <span>Due</span>
                  <span
                    className={
                      isDue
                        ? "text-red-500 font-medium"
                        : "text-green-600"
                    }
                  >
                    ₹{student.payment_summary?.due || 0}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 pt-2">

                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => openModal("student", student)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteStudent(student.student_id)}
                  >
                    Delete
                  </Button>

                </div>

              </CardContent>

            </Card>
          )
        })}

      </div>

      {/* EMPTY STATE */}
      {students.length === 0 && (
        <div className="text-center text-muted-foreground py-10">
          No tenants found
        </div>
      )}

    </div>
  )
}