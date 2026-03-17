
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const MessMenuManagement = () => {

  const [selectedDay, setSelectedDay] = useState("monday")

  const messMenu = {
    monday: {
      breakfast: "Poha, Tea, Bread Butter",
      lunch: "Dal, Rice, Roti, Mixed Vegetable, Salad",
      dinner: "Paneer Butter Masala, Rice, Roti, Dal, Salad"
    },
    tuesday: {
      breakfast: "Idli Sambhar, Coffee",
      lunch: "Rajma, Rice, Roti, Aloo Gobhi, Salad",
      dinner: "Chicken Curry, Rice, Roti, Dal Fry, Salad"
    },
    wednesday: {
      breakfast: "Sandwich, Juice, Fruits",
      lunch: "Chole, Rice, Roti, Bhindi, Salad",
      dinner: "Egg Curry, Rice, Roti, Dal, Salad"
    },
    thursday: {
      breakfast: "Paratha, Curd, Tea",
      lunch: "Sambar, Rice, Roti, Baingan Bharta, Salad",
      dinner: "Fish Curry, Rice, Roti, Dal, Salad"
    },
    friday: {
      breakfast: "Cornflakes, Milk, Toast",
      lunch: "Kadhi Pakoda, Rice, Roti, Aloo Matar, Salad",
      dinner: "Mutton Curry, Rice, Roti, Dal, Salad"
    },
    saturday: {
      breakfast: "Dosa, Chutney, Coffee",
      lunch: "Dal Makhani, Rice, Roti, Mix Veg, Salad",
      dinner: "Special Thali"
    },
    sunday: {
      breakfast: "Pancakes, Syrup, Juice",
      lunch: "Biriyani, Raita, Salad",
      dinner: "Pizza, Pasta, Garlic Bread"
    }
  }

  const days = Object.keys(messMenu)

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold">Mess Menu</h2>

        <Button variant="default">
          Download Menu
        </Button>
      </div>

      {/* Day Tabs */}
      <Tabs value={selectedDay} onValueChange={setSelectedDay}>
        <TabsList className="w-full overflow-x-auto flex justify-start">
          {days.map((day) => (
            <TabsTrigger
              key={day}
              value={day}
              className="capitalize"
            >
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Meals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Breakfast */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              🍳 Breakfast
              <Badge variant="secondary">7–9 AM</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {messMenu[selectedDay].breakfast}
          </CardContent>
        </Card>

        {/* Lunch */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              🍽️ Lunch
              <Badge variant="secondary">12:30–2:30 PM</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {messMenu[selectedDay].lunch}
          </CardContent>
        </Card>

        {/* Dinner */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              🌙 Dinner
              <Badge variant="secondary">7:30–9:30 PM</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {messMenu[selectedDay].dinner}
          </CardContent>
        </Card>

      </div>

      {/* Notes */}
      <Card className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">

        <CardHeader>
          <CardTitle className="text-yellow-700 dark:text-yellow-400">
            📢 Important Notes
          </CardTitle>
        </CardHeader>

        <CardContent className="text-sm space-y-2 text-yellow-700 dark:text-yellow-300">
          <p>• Sunday dinner is special non-veg night</p>
          <p>• Inform special dietary needs in advance</p>
          <p>• Mess timings are strictly followed</p>
          <p>• Avoid food wastage</p>
        </CardContent>

      </Card>

    </div>
  )
}

export default MessMenuManagement