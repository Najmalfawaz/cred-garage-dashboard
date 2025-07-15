"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { getTextColor } from "@/lib/utils/theme-utils"
import { useTheme } from "../../lib/hooks/theme-provider"

export function DashboardHeader() {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8 relative px-1"
    >
      <div className="relative flex-1 min-w-0">
        <Link href="/" passHref>
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
            className="transform-gpu cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent truncate hover:opacity-90 transition-opacity">
              DASHBOARD
            </h1>
          </motion.div>
        </Link>

        <p className={`text-xs sm:text-sm ${getTextColor(theme, "muted")} truncate font-medium`}>
          Your premium rewards dashboard
        </p>

        {/* Floating particles */}
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
        <ThemeToggle />
      </div>
    </motion.div>
  )
}
