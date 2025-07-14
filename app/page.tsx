// "use client"

// import { useState } from "react"
// import { LandingPage } from "@/components/landing/landing-page"
// import { DashboardContainer } from "@/components/dashboard/dashboard-container"

// export default function HomePage() {
//   const [showDashboard, setShowDashboard] = useState(false)

//   if (showDashboard) {
//     return <DashboardContainer />
//   }

//   return <LandingPage onEnterDashboard={() => setShowDashboard(true)} />
// }


// app/page.tsx
"use client"

import { LandingPage } from "@/components/landing/landing-page"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  return (
    <LandingPage onEnterDashboard={() => router.push("/dashboard")} />
  )
}

