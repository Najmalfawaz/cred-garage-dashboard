"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Coins, Target, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CircularChart } from "@/components/ui/circular-chart"
import { Progress3D } from "@/components/ui/progress-3d"
import { StatsCard } from "@/components/ui/stats-card"
import { useTheme } from "@/lib/hooks/theme-provider"

export function RewardProgressSection() {
  const { theme } = useTheme()
  const [animatedPoints, setAnimatedPoints] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [screenWidth, setScreenWidth] = useState<number | null>(null)

  const totalPoints = 15750
  const nextMilestone = 20000
  const progress = (totalPoints / nextMilestone) * 100

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    handleResize() // set initial width
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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

  const chartData = [
    { name: "Earned", value: totalPoints, color: "#a855f7" },
    { name: "Remaining", value: nextMilestone - totalPoints, color: theme === "dark" ? "#374151" : "#e5e7eb" },
  ]

  const getChartSize = () => {
    if (screenWidth === null) return 100 // fallback default
    if (screenWidth < 640) return 80
    if (screenWidth < 1024) return 112
    return 128
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {/* Main Reward Points Card */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.01,
          rotateX: 1,
          rotateY: 1,
          z: 25,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="lg:col-span-2"
      >
        <Card
          className={`h-full relative overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700"
              : "bg-gradient-to-br from-white/70 to-gray-50/70 border-gray-200"
          } backdrop-blur-sm`}
          style={{
            boxShadow: isHovered
              ? theme === "dark"
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
              : "none",
          }}
        >
          <motion.div
            animate={{
              background: isHovered
                ? "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          />

          {/* Floating coins animation */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: -60,
                      x: Math.sin(i) * 30,
                      rotate: 360,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                    }}
                    className="absolute bottom-10 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full hidden sm:block"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <CardHeader className="relative z-10 pb-2 sm:pb-4">
            <CardTitle
              className={`flex items-center space-x-2 text-lg sm:text-xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              </motion.div>
              <span>Reward Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 relative z-10 pt-0">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Points Display */}
              <div className="text-center flex-1 order-2 sm:order-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.02 : 1,
                      rotateY: isHovered ? [0, 3, 0, -3, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2"
                  >
                    {animatedPoints.toLocaleString()}
                  </motion.div>
                  {isHovered && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                    />
                  )}
                </motion.div>
                <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Total Points Earned
                </p>
              </div>

              {/* 3D Circular Chart */}
              <div className="relative order-1 sm:order-2 flex-shrink-0">
                <motion.div
                  animate={{ rotateY: isHovered ? 180 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                >
                  <CircularChart
                    data={chartData}
                    size={getChartSize()}
                    strokeWidth={6}
                    isAnimated={isHovered}
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-sm sm:text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {Math.round(progress)}%
                    </div>
                    <div className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Complete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                    <Target
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                    />
                  </motion.div>
                  <span
                    className={`text-xs sm:text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"} truncate`}
                  >
                    Next Milestone
                  </span>
                </div>
                <span
                  className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} flex-shrink-0`}
                >
                  {totalPoints.toLocaleString()} / {nextMilestone.toLocaleString()}
                </span>
              </div>

              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.7, duration: 1.5 }}>
                <Progress3D value={progress} className="h-3 sm:h-4" isAnimated={isHovered} />
              </motion.div>

              <div className={`text-xs text-center ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
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

      {/* Stats Cards */}
      <div className="space-y-4 sm:space-y-6">
        <StatsCard icon={TrendingUp} value="+2,340" label="This Month" color="from-green-500 to-emerald-500" />
        <StatsCard icon={Award} value="12" label="Rewards Claimed" color="from-blue-500 to-cyan-500" />
      </div>
    </motion.div>
  )
}
