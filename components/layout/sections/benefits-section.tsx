"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { Clock, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"
import { getTextColor, getCardStyles } from "@/lib/utils/theme-utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { benefitsData } from "@/lib/data/benefits-data"
import { getBackgroundGradient, getStatusColor } from "@/lib/utils/color-utils"
import { useTheme } from "../../../lib/hooks/theme-provider"

export function BenefitsSection() {
  const { theme } = useTheme()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between px-1">
        <motion.h3
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 100%" }}
        >
          Your Benefits
        </motion.h3>
        <Badge
          variant="outline"
          className={`text-xs font-medium ${
            theme === "dark"
              ? "border-gray-600 text-gray-200 bg-gray-800/50"
              : "border-gray-500 text-gray-900 bg-gray-100"
          }`}
        >
          <Clock className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
          6 Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {benefitsData.map((benefit, index) => {
          const cardRef = useRef(null)
          const isCardInView = useInView(cardRef, {
            once: true,
            margin: "-50px",
          })

          return (
            <motion.div
              key={benefit.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(benefit.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -5,
                rotateX: 2,
                rotateY: 2,
                scale: 1.01,
                z: 25,
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                className={`h-full transition-all duration-500 relative overflow-hidden cursor-pointer ${getCardStyles(
                  theme
                )}`}
                style={{
                  boxShadow:
                    hoveredCard === benefit.id
                      ? theme === "dark"
                        ? "0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                        : "0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                      : "none",
                }}
                onClick={() =>
                  setExpandedCard(
                    expandedCard === benefit.id ? null : benefit.id
                  )
                }
              >
                {/* Animated background */}
                <motion.div
                  animate={{
                    background: getBackgroundGradient(
                      benefit.color,
                      hoveredCard === benefit.id
                    ),
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                />

                {/* Floating particles */}
                <AnimatePresence>
                  {hoveredCard === benefit.id && (
                    <>
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 60 - 30,
                            y: Math.random() * 60 - 30,
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                          }}
                          className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full hidden sm:block"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                <CardHeader className="pb-2 sm:pb-3 relative z-10 p-3 sm:p-6">
                  <div className="flex items-start justify-between">
                    <motion.div
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg relative overflow-hidden flex-shrink-0`}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 10,
                        rotateZ: 3,
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredCard === benefit.id ? 360 : 0,
                        }}
                        transition={{ duration: 1 }}
                      >
                        <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white relative z-10" />
                      </motion.div>
                      {hoveredCard === benefit.id && (
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl"
                        />
                      )}
                    </motion.div>
                    <div className="flex flex-col items-end space-y-1 ml-2">
                      <motion.div
                        whileHover={{ scale: 1.03, rotateZ: 3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Badge
                          className={`${getStatusColor(
                            benefit.status
                          )} text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{
                              x: hoveredCard === benefit.id ? "100%" : "-100%",
                            }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                          <span className="relative z-10 text-xs font-medium">
                            {benefit.status.toUpperCase()}
                          </span>
                        </Badge>
                      </motion.div>
                      <motion.div
                        className={`text-sm sm:text-lg font-bold ${getTextColor(
                          theme,
                          "primary"
                        )}`}
                        animate={{
                          scale: hoveredCard === benefit.id ? 1.05 : 1,
                          color:
                            hoveredCard === benefit.id ? "#a855f7" : undefined,
                        }}
                      >
                        {benefit.discount}
                      </motion.div>
                    </div>
                  </div>
                  <CardTitle
                    className={`text-sm sm:text-lg mt-2 font-bold ${getTextColor(
                      theme,
                      "primary"
                    )}`}
                  >
                    {benefit.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-xs sm:text-sm ${getTextColor(
                      theme,
                      "muted"
                    )} line-clamp-2`}
                  >
                    {benefit.description}
                  </CardDescription>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedCard === benefit.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 space-y-2"
                      >
                        <div
                          className={`text-xs sm:text-sm ${getTextColor(
                            theme,
                            "secondary"
                          )}`}
                        >
                          {benefit.detailedDescription}
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className={`${getTextColor(theme, "muted")}`}>
                            Total Savings:{" "}
                            <span className="text-green-500 font-semibold">
                              {benefit.savings}
                            </span>
                          </span>
                          <span className={`${getTextColor(theme, "muted")}`}>
                            Valid till: {benefit.validTill}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardHeader>
                <CardContent className="pt-0 relative z-10 p-3 sm:p-6">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full transition-all duration-300 relative overflow-hidden text-xs sm:text-sm ${
                        benefit.status === "premium"
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      } text-white border-0 group-hover:scale-105 h-8 sm:h-10 font-medium`}
                    >
                      <motion.div
                        animate={{
                          x: hoveredCard === benefit.id ? "100%" : "-100%",
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        {benefit.status === "new" ? "Claim Now" : "View Details"}
                        <motion.div animate={{ x: hoveredCard === benefit.id ? 3 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
