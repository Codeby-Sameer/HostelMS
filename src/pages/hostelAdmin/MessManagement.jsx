import React, { useState } from "react"
import { useSelector } from "react-redux"

import {
  useGetHostelMenusQuery,
  useDeleteMenuMutation,
} from "@/features/mess/api/messMenuApi"

import { useModal } from "@/context/ModalContext"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import { Loader2, Plus, Search } from "lucide-react"
import { HostelSelector } from "@/features/hostels/components/HostelSelector"
import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"

export default function MessMenuManagement() {

 

  const hostelId = useSelector((s) => s.allocation.hostelId)


  const [filters, setFilters] = useState({
    menuType: "",
    startDate: "",
    endDate: "",
  })

  const [search, setSearch] = useState("")

  const { data, isLoading: menuloading } = useGetHostelMenusQuery(
    {
      hostelId,
      ...filters,
    },
    { skip: !hostelId }
  )

  const [deleteMenu] = useDeleteMenuMutation()
  const { openModal } = useModal()

  const menus = data || []



  if (menuloading) {
    return <Loader2 className="animate-spin mx-auto mt-10" />
  }

  return (
    <div className="space-y-6">

  
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Mess Menu</h2>
          <p className="text-muted-foreground text-sm">
            Manage hostel meals & schedules
          </p>
        </div>

        <HostelSelector />

        <Button onClick={() => openModal("menu")}>
          <Plus className="w-4 h-4 mr-2" />
          Add Menu
        </Button>

      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3">

        <Input
          placeholder="Search meal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Input
          type="date"
          onChange={(e) =>
            setFilters((p) => ({
              ...p,
              startDate: e.target.value,
            }))
          }
        />

        <Input
          type="date"
          onChange={(e) =>
            setFilters((p) => ({
              ...p,
              endDate: e.target.value,
            }))
          }
        />

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {menus
          .filter((m) =>
            m.meal_type?.toLowerCase().includes(search.toLowerCase())
          )
          .map((menu) => {

            const items = menu.items || []

            return (
              <Card
                key={menu.id}
                className="hover:shadow-lg transition hover:-translate-y-1"
              >

                {/* TOP BAR */}
                <div
                  className={`h-1 ${menu.status === "published"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                    }`}
                />

                <CardHeader className="pb-2">

                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base capitalize">
                      {menu.meal_type}
                    </CardTitle>

                    <Badge variant="outline">
                      {menu.status}
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {menu.menu_date}
                  </p>

                </CardHeader>

                <CardContent className="space-y-3 text-sm">

                  {/* ITEMS */}
                  <div className="flex flex-wrap gap-1">
                    {items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {item.name || "Item"}
                      </Badge>
                    ))}
                  </div>

                  {/* TIME */}
                  <div className="text-muted-foreground text-xs">
                    ⏰ {menu.serving_time_start} - {menu.serving_time_end}
                  </div>

                  {/* DIET */}
                  {menu.diet_types?.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {menu.diet_types.map((d, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {d}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div className="flex gap-2 pt-2">

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => openModal("menu", menu)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteMenu(menu.id)}
                    >
                      Delete
                    </Button>

                  </div>

                </CardContent>

              </Card>
            )
          })}

      </div>

      {/* EMPTY */}
      {menus.length === 0 && (
        <div className="text-center text-muted-foreground py-10">
          No menu found
        </div>
      )}

    </div>
  )
}