import React from "react"
import { FaBars } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./mode-toggle"

const DashboardHeader = ({
  isSidebarOpen,
  toggleSidebar,
  user
}) => {

  return (
    <header className="sticky top-4 z-20 px-4">

      <div className="h-16 flex items-center justify-between gap-4
        bg-white/60 dark:bg-slate-900/60
        backdrop-blur-xl
        border border-white/20 dark:border-slate-700/40
        shadow-lg rounded-xl px-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 shrink-0">

          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-muted transition"
            >
              <FaBars className="text-primary" />
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2">
            <img src="/vite.svg" className="w-6 h-6" />
            <span className="font-semibold text-base">
              HostelHub
            </span>
          </div>

        </div>

        {/* CENTER (Search + Announcement) */}
        <div className="flex items-center gap-4 flex-1 min-w-0">

          {/* Search */}
          <div className="hidden md:block w-64 lg:w-80">
            <Input
              placeholder="Search..."
              className="h-9"
            />
          </div>

          {/* Announcement */}
          <div className="flex-1 overflow-hidden relative h-6">

            <div className="absolute animate-vertical-scroll space-y-2 text-xs text-muted-foreground">

              <p>📢 New mess menu published</p>
              <p>⚠️ Maintenance scheduled</p>
              <p>🎉 20% discount available</p>
              <p>📊 Analytics updated</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 shrink-0">

          <ModeToggle />

          <div className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-semibold">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

        </div>

      </div>

    </header>
  )
}

export default React.memo(DashboardHeader)