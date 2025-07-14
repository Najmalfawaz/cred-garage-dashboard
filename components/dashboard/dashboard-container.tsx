'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserProfileSection } from "@/components/sections/user-profile-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { RewardProgressSection } from "@/components/sections/reward-progress-section"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { THEME_COLORS } from "@/lib/constants/theme"
import { useTheme } from "../../lib/hooks/theme-provider"
import { userProfileData } from "@/lib/data/user-data"
import { StatsSection } from "../sections/stats-section"

export function DashboardContainer() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen transition-all duration-500 bg-gradient-to-br ${THEME_COLORS[theme].background}`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-6xl">
        <DashboardHeader />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 sm:space-y-8 animate-pulse"
            >
              <div className="h-28 bg-gray-700 rounded-xl" />
              <div className="h-24 bg-gray-700 rounded-xl" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="h-32 bg-gray-700 rounded-xl" />
                <div className="h-32 bg-gray-700 rounded-xl" />
                <div className="h-32 bg-gray-700 rounded-xl" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 pb-4 sm:pb-8"
            >
              <UserProfileSection {...userProfileData} />
              <RewardProgressSection />
              <StatsSection />
              <BenefitsSection />
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
