"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Zap } from "lucide-react"
import { useTheme } from "@/lib/hooks/theme-provider"

export function StatsSection() {
  const { theme } = useTheme()

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Users",
      description: "Growing community of reward enthusiasts",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      value: "₹10M+",
      label: "Rewards Distributed",
      description: "Total value of rewards earned by users",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Growth Rate",
      description: "Year-over-year platform growth",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="stats" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              theme === "dark" ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0.05)"
            } 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${
              theme === "dark" ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.05)"
            } 0%, transparent 50%)`,
            backgroundSize: "400px 400px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Thousands of Users
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
          >
            Join our growing community and see why users love our platform for managing their rewards and benefits.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`relative p-8 rounded-2xl backdrop-blur-sm border text-center transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                    : "bg-white/70 border-gray-200 hover:bg-white/90"
                } hover:shadow-2xl`}
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Animated Background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotateY: 180,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                >
                  <stat.icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                  />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent bg-[length:200%_100%]`}
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>

                {/* Label */}
                <h3 className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {stat.label}
                </h3>

                {/* Description */}
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{stat.description}</p>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-2xl blur-xl -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
