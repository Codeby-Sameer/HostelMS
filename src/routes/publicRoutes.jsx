import { Route } from "react-router-dom"

import LandingLayout from "@/pages/layout/Layout"
import HomePage from "@/pages/public/Homepage"
import LoginPage from "@/pages/auth/LoginPage"
import Signup from "@/pages/auth/Signup"
import RegisterPage from "@/pages/auth/RegisterPage"

import About from "@/pages/public/About"
import Features from "@/pages/public/Features"
import Contact from "@/pages/public/Contact"
import RequestDemo from "@/pages/public/RequestDemo"

import RoomBookingPage from "@/pages/public/Rooms"
import RoomDetailsPage from "@/pages/public/RoomDetails"
import FeatureDetails from "@/pages/public/FeaturesDetails"

export const PublicRoutes = (
  <Route path="/" element={<LandingLayout />}>
    <Route index element={<HomePage />} />

    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<Signup />} />
    <Route path="register" element={<RegisterPage />} />

    <Route path="features" element={<Features />} />
    <Route path="features/:id" element={<FeatureDetails />} />

    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="request-demo" element={<RequestDemo />} />

    <Route path="rooms" element={<RoomBookingPage />} />
    <Route path="rooms/:roomId" element={<RoomDetailsPage />} />
  </Route>
)
