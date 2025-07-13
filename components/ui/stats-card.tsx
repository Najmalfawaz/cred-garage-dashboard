"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { getColorValues } from "@/lib/utils/color-utils"
import { useTheme } from "../../lib/hooks/theme-provider"

interface StatsCardProps {
  icon: any
  value: string
  label: string
  color: string
}

export function StatsCard({ icon: Icon, value, label, color }: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()
  const colors = getColorValues(color)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        z: 15,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card
        className={`relative overflow-hidden ${
          theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white/70 border-gray-200"
        } backdrop-blur-sm`}
        style={{
          boxShadow: isHovered
            ? theme === "dark"
              ? "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
              : "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
            : "none",
        }}
      >
        <motion.div
          animate={{
            background: isHovered
              ? `linear-gradient(45deg, rgba(${colors.from}, 0.1) 0%, rgba(${colors.to}, 0.1) 100%)`
              : "transparent",
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        />
        <CardContent className="p-3 sm:p-4 lg:p-6 relative z-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${color} relative overflow-hidden flex-shrink-0`}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateZ: 3,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 1 }}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white relative z-10" />
              </motion.div>
              {isHovered && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-white/20 rounded-lg"
                />
              )}
            </motion.div>
            <div className="min-w-0 flex-1">
              <motion.div
                className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  color: isHovered ? "#a855f7" : undefined,
                }}
              >
                {value}
              </motion.div>
              <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} truncate`}>
                {label}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
