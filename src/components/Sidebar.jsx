// src/components/Sidebar.jsx

import React, { useMemo, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

import { useUiStore } from "@/store/uiStore"
import { logout } from "@/features/auth/slice/authSlice"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import {
  FaTachometerAlt,
  FaBuilding,
  FaUsers,
  FaCreditCard,
  FaChartLine,
  FaCog,
  FaFileAlt,
  FaBed,
  FaClipboardList,
  FaCalendarAlt,
  FaUserGraduate,
  FaMoneyCheckAlt,
  FaExclamationTriangle,
  FaUtensils,
  FaBullhorn,
  FaRegCalendarCheck,
  FaChartBar,
  FaSignOutAlt,
  FaSearch,
  FaHeart,
  FaUser,
  FaArrowAltCircleLeft
} from "react-icons/fa"

const Sidebar = ({ role, basePath = "/dashboard" }) => {

  const location = useLocation()
  const dispatch = useDispatch()

  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen)
  const isMobile = useUiStore((s) => s.isMobile)
  const setSidebar = useUiStore((s) => s.setSidebar)

  const handleCloseSidebar = useCallback(() => {
    setSidebar(false)
  }, [setSidebar])

  const handleNavigation = useCallback(() => {
    if (isMobile) setSidebar(false)
  }, [isMobile, setSidebar])

  const navItems = useMemo(() => {

    const navConfig = {

      superadmin: [
        { id: "dashboard", path: `${basePath}`, icon: <FaTachometerAlt />, label: "Dashboard" },
        { id: "hostels", path: `${basePath}/hostels`, icon: <FaBuilding />, label: "All Hostels" },
        { id: "users", path: `${basePath}/users`, icon: <FaUsers />, label: "User Management" },
        { id: "subscriptions", path: `${basePath}/subscriptions`, icon: <FaCreditCard />, label: "Subscriptions" },
        { id: "revenue", path: `${basePath}/revenue`, icon: <FaChartLine />, label: "Revenue Analytics" },
        { id: "reports", path: `${basePath}/reports`, icon: <FaFileAlt />, label: "Reports" }
      ],

      admin: [
        { id: "dashboard", path: `${basePath}`, icon: <FaTachometerAlt />, label: "Dashboard" },
        { id: "rooms", path: `${basePath}/rooms`, icon: <FaBed />, label: "Rooms" },
        { id: "bookings", path: `${basePath}/bookings`, icon: <FaClipboardList />, label: "Bookings" },
        { id: "calendar", path: `${basePath}/calendar`, icon: <FaCalendarAlt />, label: "Calendar" },
        { id: "students", path: `${basePath}/students`, icon: <FaUserGraduate />, label: "Tenants" },
        { id: "payments", path: `${basePath}/payments`, icon: <FaMoneyCheckAlt />, label: "Payments" },
        { id: "complaints", path: `${basePath}/complaints`, icon: <FaExclamationTriangle />, label: "Complaints" },
        { id: "mess", path: `${basePath}/mess`, icon: <FaUtensils />, label: "Mess Menu" },
        { id: "announcements", path: `${basePath}/announcements`, icon: <FaBullhorn />, label: "Announcements" },
        { id: "analytics", path: `${basePath}/analytics`, icon: <FaChartBar />, label: "Analytics" },
        { id: "settings", path: `${basePath}/settings`, icon: <FaCog />, label: "Settings" }
      ],

      student: [
        { id: "dashboard", path: `${basePath}`, icon: <FaTachometerAlt />, label: "Dashboard" },
        { id: "payments", path: `${basePath}/payments`, icon: <FaCreditCard />, label: "Payments" },
        { id: "complaints", path: `${basePath}/complaints`, icon: <FaExclamationTriangle />, label: "Complaints" },
        { id: "attendance", path: `${basePath}/attendance`, icon: <FaRegCalendarCheck />, label: "Attendance" },
        { id: "mess-menu", path: `${basePath}/mess-menu`, icon: <FaUtensils />, label: "Mess Menu" },
        { id: "profile", path: `${basePath}/profile`, icon: <FaUser />, label: "Profile" }
      ],

      visitor: [
        { id: "dashboard", path: `${basePath}`, icon: <FaTachometerAlt />, label: "Dashboard" },
        { id: "search", path: `${basePath}/search`, icon: <FaSearch />, label: "Search Hostels" },
        { id: "bookings", path: `${basePath}/bookings`, icon: <FaCalendarAlt />, label: "Bookings" },
        { id: "favorites", path: `${basePath}/favorites`, icon: <FaHeart />, label: "Favorites" },
        { id: "profile", path: `${basePath}/profile`, icon: <FaUser />, label: "Profile" }
      ]

    }

    return navConfig[role] || []

  }, [role, basePath])


  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={handleCloseSidebar}
        />
      )}

      <aside
        className={`
        fixed top-4 bottom-4 left-4 w-64
        bg-white dark:bg-slate-900/70
        backdrop-blur-xl
        border border-white/20 dark:border-slate-700/40
        shadow-2xl rounded-2xl
        flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-[120%]"
          }
      `}
      >

        {/* Header */}
        <div className="p-4 flex items-center justify-between ">

          <div>
            <h2 className="font-semibold text-lg">HostelHub</h2>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>


          <FaArrowAltCircleLeft
            onClick={handleCloseSidebar}
            size={22}
            className="cursor-pointer text-muted-foreground"
          />


        </div>

        <Separator />

        {/* Navigation */}
        <ScrollArea className="flex-1 px-2 py-4">

          <div className="space-y-1">

            {navItems.map((item) => {

              const active = location.pathname === item.path

              return (

                <Button
                  key={item.id}
                  variant={active ? "" : "ghost"}
                  asChild
                  className="w-full justify-start"
                >

                  <Link to={item.path} onClick={handleNavigation}>
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>

                </Button>

              )

            })}

          </div>

        </ScrollArea>

        <Separator />

        {/* Logout */}
        <div className="p-4">

          <Button
            variant="destructive"
            className="w-full"
            onClick={() => dispatch(logout())}
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </Button>

        </div>

      </aside>
    </>
  )
}

export default React.memo(Sidebar)