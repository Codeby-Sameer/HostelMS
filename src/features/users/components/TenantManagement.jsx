import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  useGetStudentsQuery,
  useDeleteStudentMutation,
  useGetStudentHistoryQuery,
  useGetStudentDocumentsQuery,
} from "../api/tenantApi"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import { Loader2, Search } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import AllocationBar from "./AddTenantBtn"
import { useUiStore } from "@/store/uiStore"

export default function TenantManagement() {
  const { hostelId, roomId } = useSelector((state) => state.allocation)

  const { view, setView } = useUiStore()

  const [search, setSearch] = useState("")
  const [selectedStudent, setSelectedStudent] = useState(null)

  const { data, isLoading } = useGetStudentsQuery(
    { hostel_id: hostelId, name: search, room: roomId },
    {
      skip: !hostelId,
      refetchOnMountOrArgChange: true,
    }
  )

  const [deleteStudent] = useDeleteStudentMutation()

  const { data: history } = useGetStudentHistoryQuery(
    selectedStudent?.student_id,
    { skip: !selectedStudent }
  )

  const { data: documents } = useGetStudentDocumentsQuery(
    selectedStudent?.student_id,
    { skip: !selectedStudent }
  )

  const { openModal } = useModal()

  const students = data || []

  const total = students.length
  const active = students.filter((s) => s.status === "active").length
  const due = students.reduce(
    (sum, s) => sum + (s.payment_summary?.due || 0),
    0
  )

  // 🔥 STATUS COLOR
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground"
      case "inactive":
        return "bg-muted text-muted-foreground"
      case "pending":
        return "bg-warning text-warning-foreground"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  // 🔥 DUE COLOR
  const getDueBadge = (due) => {
    if (due > 0) return "bg-destructive text-white"
    return "bg-success text-success-foreground"
  }

  if (isLoading) {
    return <Loader2 className="animate-spin mx-auto mt-10" />
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Tenant Management</h2>
          <p className="text-muted-foreground text-sm">
            Manage all tenants, rooms & payments
          </p>
        </div>

        <AllocationBar />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent className="p-4"><p>Total</p><p>{total}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p>Active</p><p>{active}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p>Due ₹{due}</p></CardContent></Card>
      </div>

      {/* SEARCH */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 w-4 h-4" />
        <Input
          placeholder="Search tenant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* VIEW TOGGLE */}
      <div className="flex justify-end gap-2">
        <Button
          variant={view === "grid" ? "default" : "outline"}
          size="sm"
          onClick={() => setView("grid")}
        >
          Grid
        </Button>

        <Button
          variant={view === "table" ? "default" : "outline"}
          size="sm"
          onClick={() => setView("table")}
        >
          Table
        </Button>
      </div>

      {/* GRID VIEW */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {students.map((student) => (
            <Card key={student.student_id} className="shadow-sm hover:shadow-md transition">

              <CardHeader className="flex flex-row justify-between items-center">

                <div>
                  <CardTitle className="text-base">
                    {student.student_name}
                  </CardTitle>

                  <p className="text-xs text-muted-foreground">
                    ID: {student.student_id}
                  </p>
                </div>

                <Badge className={`rounded-full px-3 py-1 text-xs ${getStatusBadge(student.status)}`}>
                  {student.status}
                </Badge>

              </CardHeader>

              <CardContent className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Room</span>
                  <span>{student.room_id ?? "NA"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bed</span>
                  <span>{student.bed_id ?? "NA"}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Due</span>

                  <Badge className={`rounded-full px-3 py-1 text-xs ${getDueBadge(student.payment_summary?.due || 0)}`}>
                    ₹{student.payment_summary?.due || 0}
                  </Badge>
                </div>

                {/* ACTIONS */}
                <div className="grid grid-cols-2 gap-2 pt-2">

                  <Button size="sm" variant="outline"
                    onClick={() => openModal("student", student)}>
                    Edit
                  </Button>

                  <Button size="sm" variant="destructive"
                    onClick={() => deleteStudent(student.student_id)}>
                    Delete
                  </Button>

                  <Button size="sm" variant="secondary"
                    onClick={() => openModal("transfer", student)}>
                    Transfer
                  </Button>

                  <Button size="sm" variant="secondary"
                    onClick={() => {
                      setSelectedStudent(student)
                      openModal("history", { student, history })
                    }}>
                    History
                  </Button>

                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      ) : (

        /* TABLE VIEW */
        <Table className="bg-card border rounded-lg overflow-hidden">

          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Room</TableHead>
              <TableHead className="text-center">Bed</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Due</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.student_id}>

                <TableCell>{student.student_name}</TableCell>

                <TableCell className="text-center">
                  {student.room_id ?? "NA"}
                </TableCell>

                <TableCell className="text-center">
                  {student.bed_id ?? "NA"}
                </TableCell>

                <TableCell className="text-center">
                  <Badge className={`rounded-full px-3 py-1 text-xs ${getStatusBadge(student.status)}`}>
                    {student.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-center">
                  <Badge className={`rounded-full px-3 py-1 text-xs ${getDueBadge(student.payment_summary?.due || 0)}`}>
                    ₹{student.payment_summary?.due || 0}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex gap-2 justify-center">

                    <Button size="sm" variant="outline"
                      onClick={() => openModal("student", student)}>
                      Edit
                    </Button>

                    <Button size="sm" variant="destructive"
                      onClick={() => deleteStudent(student.student_id)}>
                      Delete
                    </Button>

                    <Button size="sm" variant="secondary"
                      onClick={() => openModal("transfer", student)}>
                      Transfer
                    </Button>

                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      )}

      {students.length === 0 && (
        <div className="text-center py-10">No tenants found</div>
      )}

    </div>
  )
}