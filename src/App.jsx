import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { PublicRoutes } from "./routes/publicRoutes"
import { SuperAdminRoutes } from "./routes/SuperAdminRoutes"
import { HostelAdminRoutes } from "./routes/HostelAdminRoutes"
import { StudentRoutes } from "./routes/StudentRoutes"
import { VisitorRoutes } from "./routes/VisitorRoutes"

import NavigateToRoleDashboard from "./routes/NavigateToRoleDashboard"

import ChatBot from "./components/chatbot/ChatBot"
import ScrollToTop from "./utils/ScrollToTop"

import { ModalProvider } from "./context/ModalContext"
import Modal from "./components/modals/Modal"
import { login } from "./features/auth/slice/authSlice"


function App() {
  const dispatch = useDispatch()

  // Restore auth state from localStorage on app load
  useEffect(() => {
    try {
      const savedAuthState = localStorage.getItem('authState')
      if (savedAuthState) {
        const authState = JSON.parse(savedAuthState)
        if (authState.user && authState.token) {
          dispatch(login({
            user: authState.user,
            token: authState.token,
            stats: authState.stats,
          }))
          console.log('✓ Auth state restored from localStorage')
        }
      }
    } catch (error) {
      console.error('Failed to restore auth state:', error)
    }
  }, [dispatch])

  return (
    <Router>
      <ScrollToTop />

      <ChatBot />

      <ModalProvider>
        <Routes>

          {PublicRoutes}

          {SuperAdminRoutes}

          {HostelAdminRoutes}

          {StudentRoutes}

          {VisitorRoutes}

          <Route path="/dashboard" element={<NavigateToRoleDashboard />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

        <Modal />
      </ModalProvider>
    </Router>
  )
}

export default App