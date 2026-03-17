// src/features/mess/components/MessView.jsx

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

import MessMenuManagement from "@/features/mess/components/MessMenuManagement" // ✅ import your UI

const MessManagement = () => {

  const [activeMenuTab, setActiveMenuTab] = useState("daily")

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <h2 className="text-2xl font-bold">
          Mess Menu Management
        </h2>

        <div className="flex flex-wrap gap-2">

          <Button onClick={() => openModal("menu")}>
            + Add Menu
          </Button>

          <Button variant="secondary">
            Duplicate
          </Button>

          <Button variant="outline">
            Publish
          </Button>

        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeMenuTab} onValueChange={setActiveMenuTab}>

        <TabsList className="w-full overflow-x-auto justify-start">
          {["daily", "weekly", "monthly", "special"].map((tab) => (
            <TabsTrigger key={tab} value={tab} className="capitalize">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

      </Tabs>

      {/* Filters */}
      <Card>

        <CardHeader>
          <CardTitle className="text-base">
            Filters
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col lg:flex-row gap-3">

          <Select>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="All Hostels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Hostels</SelectItem>
            </SelectContent>
          </Select>

          <Input type="date" className="lg:w-48" />

          <Select>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="All Meals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Meals</SelectItem>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 ml-auto">

            <Button variant="outline">
              Notify Students
            </Button>

            <Button variant="secondary">
              Export
            </Button>

          </div>

        </CardContent>

      </Card>

      {/* Menu UI (IMPORTANT PART) */}
      <MessMenuManagement />

      {/* Empty fallback */}
      <Card className="text-center py-10">
        <CardContent className="space-y-2">
          <div className="text-4xl">🍽️</div>
          <p className="text-sm text-muted-foreground">
            No menu items scheduled yet
          </p>
        </CardContent>
      </Card>

    </div>
  )
}

export default MessManagement