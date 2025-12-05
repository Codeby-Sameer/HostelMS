// src/store/uiStore.js
import {create} from 'zustand';

export const useUiStore = create((set, get) => ({
  // initial values based on current window (lazy-check)
  isSidebarOpen: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true,
  isMobile: typeof window !== 'undefined' ? window.innerWidth < 1024 : false,

  // actions
  setSidebar: (open) => set({ isSidebarOpen: Boolean(open) }),
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  setIsMobile: (val) => set({ isMobile: Boolean(val) }),

  // helper: update both in a single call if needed
  syncFromWindow: () => {
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
    set({
      isMobile: mobile,
      isSidebarOpen: mobile ? get().isSidebarOpen : true // keep user's choice on mobile, but ensure open on desktop
    });
  }
}));
