// src/components/DashboardLayout.jsx

import React, { useCallback, useEffect, useMemo, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { Input } from "@/components/ui/input"


import { useAuth } from "@/hooks/useAuth"
import { useUiStore } from "@/store/uiStore"
import Sidebar from "./Sidebar"
import { ModeToggle } from "./mode-toggle"
import DashboardHeader from "./DashboardHeader"

const DashboardLayout = () => {


  const { user, role, getDashboardPath } = useAuth()

  const isSidebarOpen = useUiStore((s) => s.isSidebarOpen)
  const isMobile = useUiStore((s) => s.isMobile)
  const setSidebar = useUiStore((s) => s.setSidebar)
  const setIsMobile = useUiStore((s) => s.setIsMobile)

  const userToggledRef = useRef(false)

  const toggleSidebar = useCallback(() => {
    userToggledRef.current = true
    setSidebar(!isSidebarOpen)
  }, [isSidebarOpen, setSidebar])

  // Responsive handling
  useEffect(() => {

    let resizeTimeout

    const handleResize = () => {

      clearTimeout(resizeTimeout)

      resizeTimeout = setTimeout(() => {

        const mobile = window.innerWidth < 1024

        setIsMobile(mobile)

        if (!userToggledRef.current) {
          setSidebar(!mobile)
        }

      }, 150)

    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }

  }, [setIsMobile, setSidebar])



  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        role={role}
        basePath={getDashboardPath()}
      />

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300
        ${!isMobile && isSidebarOpen ? "lg:ml-72" : "lg:ml-0"}`}
      >


        {/* Header */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          user={user}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 my-3">

          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>

        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pb-6">
          © {new Date().getFullYear()} HostelHub
        </footer>

      </div>

    </div>

  )

}

export default DashboardLayout