import React, { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const AdminManagement = () => {

  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {

    setTimeout(() => {

      setAdmins([
        {
          id: 1,
          name: "John Smith",
          email: "john.smith@hostelhub.com",
          phone: "+1-555-0101",
          role: "Hostel Admin",
          status: "Active",
          hostelId: "H001, H002",
          createdAt: "2024-01-15",
          lastLogin: "2024-01-20"
        },
        {
          id: 2,
          name: "Sarah Johnson",
          email: "sarah.j@hostelhub.com",
          phone: "+1-555-0102",
          role: "Multi-Hostel Admin",
          status: "Active",
          hostelId: "H003, H004, H005",
          createdAt: "2024-01-10",
          lastLogin: "2024-01-19"
        },
        {
          id: 3,
          name: "Mike Davis",
          email: "mike.davis@hostelhub.com",
          phone: "+1-555-0103",
          role: "Regional Manager",
          status: "Inactive",
          hostelId: "All Region A",
          createdAt: "2024-01-08",
          lastLogin: "2024-01-15"
        }
      ])

      setLoading(false)

    }, 1200)

  }, [])

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusVariant = (status) => {
    if (status === "Active") return "default"
    if (status === "Pending") return "secondary"
    if (status === "Inactive") return "destructive"
    return "outline"
  }

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h2 className="text-3xl font-bold">
            Administrator Management
          </h2>
          <p className="text-muted-foreground text-sm">
            Manage platform administrators and their permissions
          </p>
        </div>

        <Button>
          + Add Administrator
        </Button>

      </div>


      {/* Search */}

      <Card>
        <CardContent className="p-4 flex gap-3">

          <Input
            placeholder="Search administrators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Button variant="secondary">
            Search
          </Button>

        </CardContent>
      </Card>


      {/* Admin List */}

      <div className="space-y-4">

        {loading ? (

          <Card>
            <CardContent className="p-6 space-y-3">

              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />

            </CardContent>
          </Card>

        ) : filteredAdmins.length === 0 ? (

          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No administrators found
            </CardContent>
          </Card>

        ) : (

          filteredAdmins.map(admin => (

            <Card key={admin.id} className="hover:shadow-md transition">

              <CardContent className="p-6">

                <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

                  <div className="flex-1 space-y-2">

                    <h3 className="font-semibold text-lg">
                      {admin.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      📧 {admin.email}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      📱 {admin.phone}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      👔 {admin.role}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      🏨 Hostels: {admin.hostelId}
                    </p>

                  </div>


                  <div className="flex gap-2">

                    <Button size="sm">
                      Edit
                    </Button>

                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>

                  </div>

                </div>


                <div className="flex flex-wrap gap-2 mt-4">

                  <Badge variant={getStatusVariant(admin.status)}>
                    {admin.status}
                  </Badge>

                  <Badge variant="outline">
                    Last Login: {admin.lastLogin}
                  </Badge>

                </div>


                <p className="text-xs text-muted-foreground mt-2">
                  Added: {new Date(admin.createdAt).toLocaleDateString()}
                </p>

              </CardContent>

            </Card>

          ))

        )}

      </div>


      {/* Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">{admins.length}</div>
            <p className="text-sm text-muted-foreground">Total Admins</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {admins.filter(a => a.status === "Active").length}
            </div>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {admins.filter(a => a.status === "Pending").length}
            </div>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {admins.filter(a => a.status === "Inactive").length}
            </div>
            <p className="text-sm text-muted-foreground">Inactive</p>
          </CardContent>
        </Card>

      </div>

    </div>

  )

}

export default AdminManagement
