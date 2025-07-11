"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { Gift, Car, Plane, Coffee, ShoppingBag, Clock, Zap, ChevronRight } from "lucide-react"
import { useState } from "react"

const benefits = [
  {
    id: 1,
    title: "Fuel Cashback",
    description: "Get 5% cashback on all fuel purchases",
    detailedDescription:
      "Earn instant cashback on every fuel purchase at any petrol pump across India. No minimum spend required.",
    icon: Car,
    discount: "5%",
    status: "active",
    color: "from-blue-500 to-cyan-500",
    savings: "₹2,340",
    validTill: "Dec 2024",
  },
  {
    id: 2,
    title: "Flight Discounts",
    description: "Up to ₹2000 off on domestic flights",
    detailedDescription:
      "Exclusive discounts on domestic flights with major airlines. Book through our partner portal for maximum savings.",
    icon: Plane,
    discount: "₹2000",
    status: "new",
    color: "from-purple-500 to-pink-500",
    savings: "₹8,500",
    validTill: "Jan 2025",
  },
  {
    id: 3,
    title: "Dining Rewards",
    description: "20% off at premium restaurants",
    detailedDescription: "Enjoy fine dining experiences at 500+ premium restaurants with exclusive member discounts.",
    icon: Coffee,
    discount: "20%",
    status: "active",
    color: "from-orange-500 to-red-500",
    savings: "₹4,200",
    validTill: "Ongoing",
  },
  {
    id: 4,
    title: "Shopping Vouchers",
    description: "Exclusive vouchers for top brands",
    detailedDescription: "Access to exclusive vouchers and deals from top fashion, electronics, and lifestyle brands.",
    icon: ShoppingBag,
    discount: "15%",
    status: "limited",
    color: "from-green-500 to-emerald-500",
    savings: "₹6,750",
    validTill: "Limited Time",
  },
  {
    id: 5,
    title: "Premium Lounge",
    description: "Free airport lounge access",
    detailedDescription: "Complimentary access to premium airport lounges worldwide with unlimited food and beverages.",
    icon: Zap,
    discount: "Free",
    status: "premium",
    color: "from-yellow-500 to-orange-500",
    savings: "₹12,000",
    validTill: "Lifetime",
  },
  {
    id: 6,
    title: "Gift Cards",
    description: "Instant gift cards for popular stores",
    detailedDescription: "Instant digital gift cards for Amazon, Flipkart, Myntra, and 50+ other popular brands.",
    icon: Gift,
    discount: "10%",
    status: "active",
    color: "from-indigo-500 to-purple-500",
    savings: "₹3,200",
    validTill: "Dec 2024",
  },
]

export function BenefitsSection() {
  const { theme } = useTheme()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-500"
      case "limited":
        return "bg-red-500"
      case "premium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  const getBackgroundGradient = (colorString: string, isHovered: boolean) => {
    if (!isHovered) return "transparent"

    const colorMap: { [key: string]: string } = {
      "blue-500": "59, 130, 246",
      "cyan-500": "6, 182, 212",
      "purple-500": "168, 85, 247",
      "pink-500": "236, 72, 153",
      "orange-500": "249, 115, 22",
      "red-500": "239, 68, 68",
      "green-500": "34, 197, 94",
      "emerald-500": "16, 185, 129",
      "yellow-500": "234, 179, 8",
      "indigo-500": "99, 102, 241",
    }

    try {
      const parts = colorString.split(" ")
      const fromPart = parts.find((part) => part.startsWith("from-"))
      const toPart = parts.find((part) => part.startsWith("to-"))

      if (!fromPart || !toPart) {
        return "linear-gradient(45deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)"
      }

      const fromColor = fromPart.replace("from-", "")
      const toColor = toPart.replace("to-", "")

      const fromRgb = colorMap[fromColor] || "168, 85, 247"
      const toRgb = colorMap[toColor] || "236, 72, 153"

      return `linear-gradient(45deg, rgba(${fromRgb}, 0.15) 0%, rgba(${toRgb}, 0.15) 100%)`
    } catch (error) {
      return "linear-gradient(45deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)"
    }
  }

  return (
    <motion.div
      key={`benefits-${theme}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
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
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "border-gray-600 text-gray-200 bg-gray-800/50"
              : "border-gray-300 text-gray-700 bg-white/50"
          }`}
        >
          <Clock className="w-3 h-3 mr-1" />6 Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={`${benefit.id}-${theme}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            onHoverStart={() => setHoveredCard(benefit.id)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              z: 50,
            }}
            className="group relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card
              className={`h-full transition-all duration-300 relative overflow-hidden cursor-pointer backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-gray-900/60 border-gray-700 hover:bg-gray-900/80 shadow-xl shadow-purple-500/10"
                  : "bg-white/70 border-gray-200 hover:bg-white/90 shadow-lg"
              }`}
              style={{
                boxShadow:
                  hoveredCard === benefit.id
                    ? theme === "dark"
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139, 92, 246, 0.3)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    : "none",
              }}
              onClick={() => setExpandedCard(expandedCard === benefit.id ? null : benefit.id)}
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  background: getBackgroundGradient(benefit.color, hoveredCard === benefit.id),
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              />

              {/* Floating particles */}
              <AnimatePresence>
                {hoveredCard === benefit.id && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-start justify-between">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg relative overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      rotateZ: 5,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div animate={{ rotate: hoveredCard === benefit.id ? 360 : 0 }} transition={{ duration: 1 }}>
                      <benefit.icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    {hoveredCard === benefit.id && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 bg-white/20 rounded-xl"
                      />
                    )}
                  </motion.div>
                  <div className="flex flex-col items-end space-y-1">
                    <motion.div whileHover={{ scale: 1.05, rotateZ: 5 }} style={{ transformStyle: "preserve-3d" }}>
                      <Badge
                        className={`${getStatusColor(benefit.status)} text-white text-xs px-2 py-1 relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: hoveredCard === benefit.id ? "100%" : "-100%" }}
                          transition={{ duration: 0.8 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                        <span className="relative z-10">{benefit.status.toUpperCase()}</span>
                      </Badge>
                    </motion.div>
                    <motion.div
                      className={`text-lg font-bold transition-colors duration-300 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                      animate={{
                        scale: hoveredCard === benefit.id ? 1.1 : 1,
                        color: hoveredCard === benefit.id ? "#a855f7" : undefined,
                      }}
                    >
                      {benefit.discount}
                    </motion.div>
                  </div>
                </div>
                <CardTitle
                  className={`text-lg transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {benefit.title}
                </CardTitle>
                <CardDescription
                  className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                >
                  {benefit.description}
                </CardDescription>

                {/* Expandable content */}
                <AnimatePresence>
                  {expandedCard === benefit.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      <div
                        className={`text-sm transition-colors duration-300 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {benefit.detailedDescription}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span
                          className={`transition-colors duration-300 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Total Savings: <span className="text-green-400 font-semibold">{benefit.savings}</span>
                        </span>
                        <span
                          className={`transition-colors duration-300 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Valid till: {benefit.validTill}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className={`w-full transition-all duration-300 relative overflow-hidden ${
                      benefit.status === "premium"
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    } text-white border-0 group-hover:scale-105`}
                  >
                    <motion.div
                      animate={{ x: hoveredCard === benefit.id ? "100%" : "-100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {benefit.status === "new" ? "Claim Now" : "View Details"}
                      <motion.div animate={{ x: hoveredCard === benefit.id ? 5 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// UI Components with theme support
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-lg border shadow-sm ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)

const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}

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
