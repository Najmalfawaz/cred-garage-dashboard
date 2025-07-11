"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing/landing-page"
import { DashboardContainer } from "@/components/dashboard/dashboard-container"

export default function HomePage() {
  const [showDashboard, setShowDashboard] = useState(false)

  if (showDashboard) {
    return <DashboardContainer />
  }

  return <LandingPage onEnterDashboard={() => setShowDashboard(true)} />
}
