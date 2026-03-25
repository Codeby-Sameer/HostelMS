import React, { useState } from "react"
import RoomManagement from "@/features/rooms/components/RoomManagement"
import BedManagement from "@/features/rooms/components/BedManagement"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

import { useAdminHostels } from "@/features/hostels/hooks/useAdminHostels"
import { HostelSelector } from "@/features/hostels/components/HostelSelector"
import { Loader2 } from "lucide-react"

// ================= HOSTEL ADMIN =================

export default function HostelAdminManagement() {
  const [tab, setTab] = useState("rooms")
  const { selectedHostel, isLoading } = useAdminHostels()

  if (isLoading) return <Loader2 className="animate-spin mx-auto mt-10" />

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">{selectedHostel?.name || "Select Hostel"}</h1>
          <p className="text-muted-foreground">{selectedHostel?.address}</p>
        </div>
        <div className="w-full md:w-64">
          <HostelSelector />
        </div>
      </div>

      {!selectedHostel ? (
        <Card>
          <CardContent className="p-6 text-center">Select hostel</CardContent>
        </Card>
      ) : (
        <Tabs
          value={tab}
          onValueChange={setTab}
          className="w-full border rounded-lg bg-background p-4 flex flex-col"
        >
          <TabsList className="inline-flex h-10 w-auto  p-1 rounded-lg">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="beds">Beds</TabsTrigger>
          </TabsList>

          <TabsContent value="rooms" className="mt-4 p-4 bg-background rounded">
            <RoomManagement hostelId={selectedHostel?.id}/>
          </TabsContent>

          <TabsContent value="beds" className="mt-4 p-4 bg-background rounded">
           <BedManagement hostelId={selectedHostel.id}/>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}