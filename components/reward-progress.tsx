"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { Coins, Target, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function RewardProgress() {
  const { theme } = useTheme()
  const [animatedPoints, setAnimatedPoints] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredStatsCard, setHoveredStatsCard] = useState<number | null>(null)
  const totalPoints = 15750
  const nextMilestone = 20000
  const progress = (totalPoints / nextMilestone) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const increment = totalPoints / 50
      const interval = setInterval(() => {
        current += increment
        if (current >= totalPoints) {
          setAnimatedPoints(totalPoints)
          clearInterval(interval)
        } else {
          setAnimatedPoints(Math.floor(current))
        }
      }, 30)
      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [totalPoints])

  // Chart data for circular progress
  const chartData = [
    { name: "Earned", value: totalPoints, color: "#a855f7" },
    { name: "Remaining", value: nextMilestone - totalPoints, color: theme === "dark" ? "#374151" : "#e5e7eb" },
  ]

  return (
    <motion.div
      key={`reward-progress-${theme}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* Main Reward Points Card with 3D Chart */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.02,
          rotateX: 3,
          rotateY: 3,
          z: 50,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="lg:col-span-2"
      >
        <Card
          className={`h-full relative overflow-hidden backdrop-blur-sm transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-900/60 border-gray-700 shadow-2xl shadow-purple-500/10"
              : "bg-white/70 border-gray-200 shadow-lg"
          }`}
          style={{
            boxShadow: isHovered
              ? theme === "dark"
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139, 92, 246, 0.3)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
              : "none",
          }}
        >
          {/* Animated background */}
          <motion.div
            animate={{
              background: isHovered
                ? "linear-gradient(45deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, rgba(59, 130, 246, 0.15) 100%)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          />

          {/* Floating coins animation */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: -100,
                      x: Math.sin(i) * 50,
                      rotate: 360,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                    }}
                    className="absolute bottom-10 left-1/2 w-4 h-4 bg-yellow-400 rounded-full"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <CardHeader className="relative z-10">
            <CardTitle
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                <Coins className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <span>Reward Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              {/* Points Display */}
              <div className="text-center flex-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      rotateY: isHovered ? [0, 5, 0, -5, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                    className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  >
                    {animatedPoints.toLocaleString()}
                  </motion.div>
                  {isHovered && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                    />
                  )}
                </motion.div>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Total Points Earned
                </p>
              </div>

              {/* 3D Circular Chart */}
              <div className="relative">
                <motion.div
                  animate={{ rotateY: isHovered ? 360 : 0 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-32 h-32"
                >
                  <CircularChart data={chartData} size={128} strokeWidth={8} isAnimated={isHovered} />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold transition-colors duration-300 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {Math.round(progress)}%
                    </div>
                    <div
                      className={`text-xs transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                    <Target
                      className={`w-4 h-4 transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Next Milestone
                  </span>
                </div>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {totalPoints.toLocaleString()} / {nextMilestone.toLocaleString()}
                </span>
              </div>

              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.7, duration: 1.5 }}>
                <Progress3D value={progress} className="h-4" isAnimated={isHovered} theme={theme} />
              </motion.div>

              <div
                className={`text-xs text-center transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <motion.span
                  animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
                  transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                >
                  {(nextMilestone - totalPoints).toLocaleString()} points to unlock Premium tier
                </motion.span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enhanced Stats Cards */}
      <div className="space-y-6">
        <StatsCard
          icon={TrendingUp}
          value="+2,340"
          label="This Month"
          color="from-green-500 to-emerald-500"
          theme={theme}
          isHovered={hoveredStatsCard === 1}
          onHover={() => setHoveredStatsCard(1)}
          onLeave={() => setHoveredStatsCard(null)}
        />
        <StatsCard
          icon={Award}
          value="12"
          label="Rewards Claimed"
          color="from-blue-500 to-cyan-500"
          theme={theme}
          isHovered={hoveredStatsCard === 2}
          onHover={() => setHoveredStatsCard(2)}
          onLeave={() => setHoveredStatsCard(null)}
        />
      </div>
    </motion.div>
  )
}

// Enhanced Stats Card Component with theme support
const StatsCard = ({
  icon: Icon,
  value,
  label,
  color,
  theme,
  isHovered,
  onHover,
  onLeave,
}: {
  icon: any
  value: string
  label: string
  color: string
  theme: string
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) => {
  const getColorValues = (colorString: string) => {
    const colorMap: { [key: string]: string } = {
      "green-500": "34, 197, 94",
      "emerald-500": "16, 185, 129",
      "blue-500": "59, 130, 246",
      "cyan-500": "6, 182, 212",
      "purple-500": "168, 85, 247",
      "pink-500": "236, 72, 153",
    }

    const parts = colorString.split(" ")
    const fromColor = parts.find((part) => part.startsWith("from-"))?.replace("from-", "") || "purple-500"
    const toColor = parts.find((part) => part.startsWith("to-"))?.replace("to-", "") || "pink-500"

    return {
      from: colorMap[fromColor] || "168, 85, 247",
      to: colorMap[toColor] || "236, 72, 153",
    }
  }

  const colors = getColorValues(color)

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 30,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card
        className={`relative overflow-hidden backdrop-blur-sm transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-900/60 border-gray-700 shadow-xl shadow-purple-500/10"
            : "bg-white/70 border-gray-200 shadow-lg"
        }`}
        style={{
          boxShadow: isHovered
            ? theme === "dark"
              ? "0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(139, 92, 246, 0.3)"
              : "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
            : "none",
        }}
      >
        <motion.div
          animate={{
            background: isHovered
              ? `linear-gradient(45deg, rgba(${colors.from}, 0.15) 0%, rgba(${colors.to}, 0.15) 100%)`
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center space-x-3">
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-br ${color} relative overflow-hidden`}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateZ: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 1 }}>
                <Icon className="w-5 h-5 text-white relative z-10" />
              </motion.div>
              {isHovered && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-white/20 rounded-lg"
                />
              )}
            </motion.div>
            <div>
              <motion.div
                className={`text-2xl font-bold transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? "#a855f7" : undefined,
                }}
              >
                {value}
              </motion.div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {label}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Enhanced Components with theme support
const CircularChart = ({
  data,
  size,
  strokeWidth,
  isAnimated = false,
}: {
  data: any[]
  size: number
  strokeWidth: number
  isAnimated?: boolean
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const total = data.reduce((sum, item) => sum + item.value, 0)

  let cumulativePercentage = 0

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {data.map((item, index) => {
        const percentage = (item.value / total) * 100
        const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
        const strokeDashoffset = -((cumulativePercentage / 100) * circumference)

        cumulativePercentage += percentage

        return (
          <motion.circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={item.color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{
              strokeDasharray: strokeDasharray,
              strokeDashoffset: strokeDashoffset,
            }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            style={{
              filter: isAnimated ? "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))" : "none",
            }}
          />
        )
      })}
    </svg>
  )
}

const Progress3D = ({
  value = 0,
  className,
  isAnimated = false,
  theme = "dark",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  value?: number
  isAnimated?: boolean
  theme?: string
}) => (
  <div
    className={`relative h-4 w-full overflow-hidden rounded-full transition-all duration-300 ${
      theme === "dark" ? "bg-gray-800" : "bg-gray-200"
    } ${className}`}
    {...props}
  >
    <motion.div
      className="h-full w-full flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 ease-out relative rounded-full"
      style={{
        transform: `translateX(-${100 - value}%)`,
        boxShadow: isAnimated ? "0 0 20px rgba(168, 85, 247, 0.5)" : "none",
      }}
      animate={{
        backgroundPosition: isAnimated ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
      }}
      transition={{
        duration: 2,
        repeat: isAnimated ? Number.POSITIVE_INFINITY : 0,
        ease: "linear",
      }}
    >
      {isAnimated && (
        <>
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-sm"
          />
        </>
      )}
    </motion.div>
  </div>
)

// UI Components
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-lg border shadow-sm ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)
