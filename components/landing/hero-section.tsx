"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

interface HeroSectionProps {
  onEnterDashboard: () => void
}

export function HeroSection({ onEnterDashboard }: HeroSectionProps) {
  const { theme } = useTheme()

  const floatingIcons = [
    { icon: Star, delay: 0, x: 100, y: -50 },
    { icon: Zap, delay: 0.5, x: -80, y: -30 },
    { icon: Shield, delay: 1, x: 120, y: 40 },
    { icon: Award, delay: 1.5, x: -100, y: 60 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, item.x, 0],
              y: [0, item.y, 0],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <item.icon
              className={`w-12 h-12 sm:w-16 sm:h-16 ${theme === "dark" ? "text-purple-500/20" : "text-purple-400/30"}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className={`text-sm font-medium ${theme === "dark" ? "text-purple-300" : "text-purple-700"}`}>
              Premium Rewards Platform
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Rewards Experience
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Discover a premium dashboard that transforms how you track, earn, and redeem rewards. Experience the future
            of financial benefits with stunning visuals and seamless interactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onEnterDashboard}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                <span>Enter Dashboard</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className={`px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 ${
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10"
                    : "border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "50K+", label: "Active Users" },
              { value: "₹10M+", label: "Rewards Earned" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-4 rounded-xl backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-gray-800/30 border border-gray-700/50"
                    : "bg-white/30 border border-gray-200/50"
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === "dark" ? "border-gray-600" : "border-gray-400"
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className={`w-1 h-3 rounded-full mt-2 ${theme === "dark" ? "bg-gray-400" : "bg-gray-600"}`}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
