"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import { FooterSection } from "@/components/landing/footer-section"
import { useTheme } from "@/lib/hooks/theme-provider"

interface LandingPageProps {
  onEnterDashboard: () => void
}

export function LandingPage({ onEnterDashboard }: LandingPageProps) {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="space-y-10 animate-pulse text-gray-600">
          {/* Navbar Skeleton */}
          <div className="h-10 w-1/3 bg-gray-700 rounded-md" />

          {/* Hero Section Skeleton */}
          <div className="h-40 w-full bg-gray-800 rounded-xl" />

          {/* Features Section Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-gray-700 rounded-lg" />
            <div className="h-32 bg-gray-700 rounded-lg" />
            <div className="h-32 bg-gray-700 rounded-lg" />
          </div>

          {/* Stats Section Skeleton */}
          <div className="h-20 w-full bg-gray-800 rounded-lg" />

          {/* CTA Section Skeleton */}
          <div className="h-32 bg-gray-700 rounded-xl" />

          {/* Footer Skeleton */}
          <div className="h-16 bg-gray-800 rounded-md mt-10" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
      }}
    >
      <Navbar onEnterDashboard={onEnterDashboard} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <HeroSection onEnterDashboard={onEnterDashboard} />
        <FeaturesSection />
        <StatsSection />
        <CTASection onEnterDashboard={onEnterDashboard} />
        <FooterSection />
      </motion.main>
    </div>
  )
}
