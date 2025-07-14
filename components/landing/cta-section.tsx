"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/hooks/theme-provider"

interface CTASectionProps {
  onEnterDashboard: () => void
}

export function CTASection({ onEnterDashboard }: CTASectionProps) {
  const { theme } = useTheme()

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        />

        {/* Floating Stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Star className={`w-4 h-4 ${theme === "dark" ? "text-yellow-400/30" : "text-yellow-500/40"}`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-12 sm:p-16 lg:p-20 text-center backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700"
              : "bg-gradient-to-br from-white/70 to-gray-50/70 border-gray-200"
          }`}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* ✅ Updated Animated Background with Crossfade Layers */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Ready to Transform</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Rewards Experience?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Join thousands of users who have already discovered the future of rewards management. Start your premium
              experience today.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onEnterDashboard}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-12 py-6 rounded-2xl font-semibold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </motion.div>
                  ))}
                </div>
                <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  50,000+ Happy Users
                </span>
              </div>

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className={`text-sm font-medium ml-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  4.9/5 Rating
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
