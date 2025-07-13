"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { getTextColor } from "@/lib/utils/theme-utils"
import { useTheme } from "../../lib/hooks/theme-provider"

interface DashboardHeaderProps {
  onOpenStats: () => void
}

export function DashboardHeader({ onOpenStats }: DashboardHeaderProps) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8 relative px-1"
    >
      <div className="relative flex-1 min-w-0">
        <motion.div
          animate={{
            rotateY: [0, 5, 0, -5, 0],
            rotateX: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent truncate">
            CRED Garage
          </h1>
        </motion.div>
        <p className={`text-xs sm:text-sm ${getTextColor(theme, "muted")} truncate font-medium`}>
          Your premium rewards dashboard
        </p>

        {/* Floating particles - hidden on very small screens */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-2 -right-4 sm:-right-8 w-2 h-2 bg-purple-500 rounded-full blur-sm hidden sm:block"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1 -left-2 sm:-left-4 w-1 h-1 bg-pink-500 rounded-full blur-sm hidden sm:block"
        />
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
        <motion.button
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            rotateX: 5,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenStats}
          className={`p-2 sm:p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/70 text-gray-200 hover:text-white"
              : "bg-white/80 border-gray-300 hover:bg-white text-gray-700 hover:text-gray-900"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
        <ThemeToggle />
      </div>
    </motion.div>
  )
}
