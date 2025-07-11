"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserProfileSection } from "@/components/sections/user-profile-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { RewardProgressSection } from "@/components/sections/reward-progress-section"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { StatsModal } from "@/components/stats-modal"
import { useTheme } from "@/lib/hooks/use-theme"
import { THEME_COLORS } from "@/lib/constants/theme"

export function DashboardContainer() {
  const [isLoading, setIsLoading] = useState(true)
  const [showStatsModal, setShowStatsModal] = useState(false)
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
        <DashboardHeader onOpenStats={() => setShowStatsModal(true)} />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[60vh]"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Loading Dashboard...
                </motion.h2>
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
              <UserProfileSection />
              <RewardProgressSection />
              <BenefitsSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <StatsModal isOpen={showStatsModal} onClose={() => setShowStatsModal(false)} />
    </div>
  )
}
