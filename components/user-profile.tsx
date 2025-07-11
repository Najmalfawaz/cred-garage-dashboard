"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Crown, Star } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/components/theme-provider"

export function UserProfile() {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const currentXP = 2450
  const nextLevelXP = 3000
  const progress = (currentXP / nextLevelXP) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        z: 50,
      }}
      className={`rounded-2xl p-6 backdrop-blur-sm border transition-all duration-200 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900/60 border-gray-700 shadow-2xl shadow-purple-500/10"
          : "bg-white/70 border-gray-200 shadow-lg"
      }`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? theme === "dark"
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139, 92, 246, 0.3)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
          : "none",
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: isHovered
            ? "linear-gradient(45deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, rgba(59, 130, 246, 0.15) 100%)"
            : "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl"
      />

      {/* Floating sparkles */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
                className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full"
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Avatar className="h-16 w-16 ring-4 ring-purple-500/30 relative">
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"
                />
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl font-bold relative z-10">
                  AK
                </AvatarFallback>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/40"
                />
              </Avatar>
            </motion.div>

            <div>
              <motion.h2
                animate={{
                  backgroundPosition: isHovered ? "200% center" : "0% center",
                }}
                transition={{ duration: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Arjun Kumar
              </motion.h2>
              <div className="flex items-center space-x-2 mt-1">
                <motion.div whileHover={{ scale: 1.05, rotateZ: 5 }} style={{ transformStyle: "preserve-3d" }}>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: isHovered ? "100%" : "-100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <Crown className="w-3 h-3 mr-1 relative z-10" />
                    <span className="relative z-10">Elite Member</span>
                  </Badge>
                </motion.div>
                <Badge
                  variant="outline"
                  className={`transition-all duration-200 ${
                    theme === "dark"
                      ? "border-gray-600 text-gray-200 bg-gray-800/50"
                      : "border-gray-300 text-gray-700 bg-white/50"
                  }`}
                >
                  Level 12
                </Badge>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: -10,
              rotateX: 5,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className={`text-right p-4 rounded-xl backdrop-blur-sm relative overflow-hidden transition-all duration-200 ${
              theme === "dark" ? "bg-gray-800/60 border border-gray-700" : "bg-gray-100/50 border border-gray-200"
            }`}
          >
            <motion.div
              animate={{
                background: isHovered
                  ? "linear-gradient(45deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)"
                  : "transparent",
              }}
              className="absolute inset-0"
            />
            <div className="relative z-10">
              <div className="flex items-center justify-end space-x-1 mb-1">
                <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 1 }}>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  Credit Score
                </span>
              </div>
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? "#10b981" : "#10b981",
                }}
                className="text-2xl font-bold text-green-400"
              >
                850
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* XP Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 2 }}>
                <TrendingUp
                  className={`w-4 h-4 transition-colors duration-200 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </motion.div>
              <span
                className={`text-sm font-medium transition-colors duration-200 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Progress to Level 13
              </span>
            </div>
            <span
              className={`text-sm transition-colors duration-200 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentXP} / {nextLevelXP} XP
            </span>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <Progress value={progress} className="h-3" isAnimated={isHovered} theme={theme} />
          </motion.div>

          <div
            className={`text-xs text-center transition-colors duration-200 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <motion.span
              animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
              transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            >
              {nextLevelXP - currentXP} XP to next level
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced UI Components with theme support
const Avatar = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props} />
)

const AvatarImage = ({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img className={`aspect-square h-full w-full object-cover ${className}`} {...props} />
)

const AvatarFallback = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`} {...props} />
)

const Progress = ({
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
    className={`relative h-4 w-full overflow-hidden rounded-full transition-all duration-200 ${
      theme === "dark" ? "bg-gray-800" : "bg-gray-200"
    } ${className}`}
    {...props}
  >
    <motion.div
      className="h-full w-full flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 ease-out relative"
      style={{ transform: `translateX(-${100 - value}%)` }}
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
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      )}
    </motion.div>
  </div>
)

const Badge = ({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline"
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
