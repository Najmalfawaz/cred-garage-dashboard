"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart3, Gift, Smartphone, Palette } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function FeaturesSection() {
  const { theme } = useTheme()

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with optimized animations and smooth transitions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security ensures your rewards and personal data are always protected.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and analytics to track your rewards performance and trends.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      title: "Premium Rewards",
      description: "Access exclusive rewards, cashbacks, and benefits tailored to your lifestyle.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfectly responsive design that works seamlessly across all your devices.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning 3D animations and modern UI that makes managing rewards a delight.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className={`text-sm font-medium ${theme === "dark" ? "text-purple-300" : "text-purple-700"}`}>
              Powerful Features
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>In One Dashboard</span>
          </h2>

          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}
          >
            Discover powerful features designed to enhance your rewards experience with cutting-edge technology and
            intuitive design.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                    : "bg-white/70 border-gray-200 hover:bg-white/90"
                } hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                {/* Animated Background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    rotateZ: 5,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                  />
                </motion.div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
