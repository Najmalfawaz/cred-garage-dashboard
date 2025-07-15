"use client"

import { LandingPage } from "@/components/landing/landing-page"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  return (
    <LandingPage onEnterDashboard={() => router.push("/dashboard")} />
  )
}

