import { create } from "zustand"

export const useUiStore = create((set, get) => ({
  // ---------------- EXISTING ----------------
  isSidebarOpen: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true,
  isMobile: typeof window !== 'undefined' ? window.innerWidth < 1024 : false,

  setSidebar: (open) => set({ isSidebarOpen: Boolean(open) }),
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  setIsMobile: (val) => set({ isMobile: Boolean(val) }),

  syncFromWindow: () => {
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
    set({
      isMobile: mobile,
      isSidebarOpen: mobile ? get().isSidebarOpen : true
    });
  },

  // ---------------- NEW (🔥 ADD THIS) ----------------
  view: "grid", // or "table"

  setView: (view) => set({ view }),

  toggleView: () =>
    set((state) => ({
      view: state.view === "grid" ? "table" : "grid",
    })),
}))