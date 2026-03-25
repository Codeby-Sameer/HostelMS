import React, { useState } from "react"
import {
  useGetRoomsQuery,
  useDeleteRoomMutation,
  useBulkImportRoomsMutation,
  useLazyExportRoomsQuery,
  useSetRoomAvailabilityMutation,
} from "@/features/rooms/api/roomApi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Loader2, Upload, Download } from "lucide-react"
import { useModal } from "@/context/ModalContext"
import { Badge } from "@/components/ui/badge"
import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"


export default function RoomManagement() {

  const { selectedHostelId, selectedHostel } = useAdminHostels()
  const [localFilters, setFilters] = useState({})
  const filters = {
    hostelId: selectedHostelId,
    ...localFilters,
  }
  console.log(filters)


  const [file, setFile] = useState(null)
  const { data, isLoading } = useGetRoomsQuery(filters)
  const [deleteRoom] = useDeleteRoomMutation()
  const [bulkImportRooms, bulkState] = useBulkImportRoomsMutation()
  const [exportRooms] = useLazyExportRoomsQuery()
  const [setAvailability] = useSetRoomAvailabilityMutation()

  const rooms = data || []
  console.log(rooms)
  const handleResetFilters = () => {
    setFilters({})
  }

  const handleImport = async () => {
    if (!file) return
    await bulkImportRooms(file)
  }
  const { openModal } = useModal()

  const handleExport = async () => {
    const res = await exportRooms(filters).unwrap()
    const blob = new Blob([res])
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "rooms.csv"
    a.click()
  }

  if (isLoading) {
    return <Loader2 className="animate-spin mx-auto mt-10" />
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold">Rooms Management</h2>
        <div className="flex xs:flex-row gap-2 w-full sm:w-auto">
          <Button onClick={() => openModal("room")} className="w-full sm:w-auto">
            Add Room
          </Button>
          <Button onClick={handleExport} variant="outline" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

            {/* FILTERS */}
            <Input
              placeholder="Min Capacity"
              onChange={(e) =>
                setFilters((p) => ({ ...p, minCapacity: e.target.value }))
              }
            />

            <Select
              onValueChange={(v) =>
                setFilters((p) => ({ ...p, roomType: v }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>

                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="double">Double</SelectItem>
              </SelectContent>
            </Select>


            {/* BULK IMPORT */}
            <div className="flex gap-2">
              <Input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <Button
                onClick={handleImport}
                disabled={bulkState.isLoading}
              >
                {bulkState.isLoading && (
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                )}
                <Upload className="w-4 h-4" />
                Upload
              </Button>
              <Button
                variant="outline"
                onClick={handleResetFilters}
              >
                Reset
              </Button>
            </div>

          </div>

        </CardContent>
      </Card>
      <h1 className="text-2xl font-semibold tracking-tight">
        Rooms for <span className="text-primary">{selectedHostel?.name}</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {rooms.map((room) => {
          const isAvailable = room.availability > 0
          const occupancyPercentage = (room.availability / room.room_capacity) * 100

          return (
            <Card
              key={room.id}
              className="group relative overflow-hidden border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* TOP GRADIENT ACCENT BAR */}
              <div
                className={`h-1.5 w-full transition-all duration-300 group-hover:h-2 ${isAvailable
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-red-400 to-rose-500"
                  }`}
              />

              {/* HEADER SECTION */}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-bold tracking-tight flex items-center gap-2">
                      <span>Room {room.room_number}</span>
                      {room.maintenance_status === "under_maintenance" && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                          Maintenance
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize">{room.room_type}</span>
                      <span>•</span>
                      <span>{room.room_capacity} beds</span>
                    </div>
                  </div>

                  <Badge
                    className="text-xs font-medium px-2.5 py-1"
                    variant={isAvailable ? "default" : "destructive"}
                  >
                    <span className="flex items-center gap-1">
                      <span className={`h-1.5 w-1.5 rounded-full ${isAvailable ? "bg-green-300" : "bg-red-300"}`} />
                      {isAvailable ? "Available" : "Full"}
                    </span>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* PRICE SECTION */}
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Monthly Rent</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">₹{room.monthly_price}</span>
                      <span className="text-xs text-muted-foreground ml-1">/month</span>
                    </div>
                  </div>
                </div>

                {/* OCCUPANCY PROGRESS */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Occupancy</span>
                    <span className="font-medium">
                      {room.room_capacity - room.availability} / {room.room_capacity} beds
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isAvailable
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-red-500 to-rose-500"
                        }`}
                      style={{ width: `${100 - occupancyPercentage}%` }}
                    />
                  </div>
                </div>

                {/* QUICK STATS */}
                <div className="grid grid-cols-2 gap-3 rounded-lg bg-muted/30 p-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{room.availability}</p>
                    <p className="text-xs text-muted-foreground">Available Beds</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{room.room_capacity}</p>
                    <p className="text-xs text-muted-foreground">Total Capacity</p>
                  </div>
                </div>

                {/* AMENITIES */}
                {room.amenities && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Amenities</p>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.split(",").map((item, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-[11px] px-2 py-0.5 rounded-full font-normal"
                        >
                          {item.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* STATUS INDICATOR */}
                <div className="flex items-center justify-between pt-1">
                  <Badge
                    variant="outline"
                    className={`text-xs px-2 py-0.5 ${room.maintenance_status === "good"
                        ? "border-green-500 text-green-600 dark:text-green-400"
                        : room.maintenance_status === "needs_attention"
                          ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                          : "border-red-500 text-red-600 dark:text-red-400"
                      }`}
                  >
                    <span className="flex items-center gap-1">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${room.maintenance_status === "good"
                            ? "bg-green-500"
                            : room.maintenance_status === "needs_attention"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                      />
                      {room.maintenance_status?.replace("_", " ").toUpperCase() || "Good"}
                    </span>
                  </Badge>

                  <span
                    className={`text-xs font-medium flex items-center gap-1 ${isAvailable ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
                      }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"}`} />
                    {isAvailable ? "Ready for booking" : "Currently occupied"}
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant={isAvailable ? "outline" : "default"}
                    className="flex-1 text-xs font-medium"
                    onClick={() =>
                      setAvailability({
                        roomId: room.id,
                        availability: room.availability > 0 ? 0 : room.room_capacity,
                      })
                    }
                  >
                    {room.availability > 0 ? (
                      <>
                        <span className="mr-1">🔒</span> Mark Full
                      </>
                    ) : (
                      <>
                        <span className="mr-1">🔓</span> Mark Available
                      </>
                    )}
                  </Button>

                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => openModal("room", room)}
                    className="px-3"
                  >
                    ✏️
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteRoom(room.id)}
                    className="px-3"
                  >
                    🗑️
                  </Button>
                </div>
              </CardContent>

              {/* HOVER OVERLAY EFFECT */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          )
        })}
      </div>
    </div>
  )
}