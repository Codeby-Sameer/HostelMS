import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

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


function App() {
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