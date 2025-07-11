"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/lib/hooks/use-theme"
import { X, TrendingUp, Award, Gift, Zap, Calendar, Target } from "lucide-react"
import { useState, useEffect } from "react"
import { getTextColor, getCardStyles } from "@/lib/utils/theme-utils"
import { BarChart } from "@/components/ui/chart/bar-chart"
import { LineChart } from "@/components/ui/chart/line-chart"
import { DonutChart } from "@/components/ui/chart/donut-chart"

interface StatsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function StatsModal({ isOpen, onClose }: StatsModalProps) {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for charts
  const monthlyData = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 1800 },
    { name: "Mar", value: 2200 },
    { name: "Apr", value: 1900 },
    { name: "May", value: 2800 },
    { name: "Jun", value: 3200 },
  ]

  const categoryData = [
    { name: "Fuel", value: 5512, color: "#3b82f6" },
    { name: "Dining", value: 3940, color: "#ef4444" },
    { name: "Shopping", value: 3150, color: "#10b981" },
    { name: "Travel", value: 2363, color: "#f59e0b" },
    { name: "Others", value: 788, color: "#8b5cf6" },
  ]

  const trendsData = [
    { name: "Week 1", value: 580 },
    { name: "Week 2", value: 720 },
    { name: "Week 3", value: 650 },
    { name: "Week 4", value: 890 },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div
              className={`w-full max-w-6xl max-h-full overflow-hidden rounded-2xl ${getCardStyles(theme)}`}
              style={{
                boxShadow:
                  theme === "dark" ? "0 25px 50px -12px rgba(0, 0, 0, 0.9)" : "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between p-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <motion.h2
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Analytics Dashboard
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Tabs */}
              <div className={`flex border-b ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
                {["overview", "trends", "categories"].map((tab, index) => (
                  <motion.button
                    key={tab}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium capitalize transition-colors relative ${
                      activeTab === tab
                        ? "text-purple-500"
                        : getTextColor(theme, "muted") + " hover:" + getTextColor(theme, "secondary")
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatsCard
                          icon={TrendingUp}
                          title="Total Points"
                          value="15,750"
                          change="+12%"
                          positive={true}
                          theme={theme}
                        />
                        <StatsCard
                          icon={Award}
                          title="Rewards Claimed"
                          value="12"
                          change="+3"
                          positive={true}
                          theme={theme}
                        />
                        <StatsCard
                          icon={Gift}
                          title="Active Benefits"
                          value="6"
                          change="0"
                          positive={null}
                          theme={theme}
                        />
                        <StatsCard icon={Zap} title="Level" value="12" change="+1" positive={true} theme={theme} />
                      </div>

                      {/* Charts Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Monthly Bar Chart */}
                        <div className={`rounded-xl p-4 ${getCardStyles(theme)}`}>
                          <h3 className={`text-lg font-semibold mb-4 ${getTextColor(theme, "primary")}`}>
                            Monthly Points
                          </h3>
                          <BarChart data={monthlyData} height={200} />
                        </div>

                        {/* Category Donut Chart */}
                        <div className={`rounded-xl p-4 ${getCardStyles(theme)}`}>
                          <h3 className={`text-lg font-semibold mb-4 ${getTextColor(theme, "primary")}`}>
                            Points by Category
                          </h3>
                          <DonutChart data={categoryData} size={200} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "trends" && (
                    <motion.div
                      key="trends"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Weekly Trends Line Chart */}
                      <div className={`rounded-xl p-4 ${getCardStyles(theme)}`}>
                        <h3 className={`text-lg font-semibold mb-4 ${getTextColor(theme, "primary")}`}>
                          Weekly Points Trend
                        </h3>
                        <LineChart data={trendsData} height={250} color="#8b5cf6" />
                      </div>

                      {/* Growth Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className={`text-sm font-medium ${getTextColor(theme, "secondary")}`}>
                              This Month
                            </span>
                          </div>
                          <div className={`text-2xl font-bold ${getTextColor(theme, "primary")}`}>+2,340</div>
                          <div className="text-green-400 text-sm">+15% from last month</div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <Target className="w-4 h-4 text-purple-500" />
                            <span className={`text-sm font-medium ${getTextColor(theme, "secondary")}`}>
                              Average Daily
                            </span>
                          </div>
                          <div className={`text-2xl font-bold ${getTextColor(theme, "primary")}`}>78</div>
                          <div className="text-green-400 text-sm">+8% from last month</div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <span className={`text-sm font-medium ${getTextColor(theme, "secondary")}`}>
                              Best Month
                            </span>
                          </div>
                          <div className={`text-2xl font-bold ${getTextColor(theme, "primary")}`}>3,200</div>
                          <div className="text-blue-500 text-sm">June 2024</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "categories" && (
                    <motion.div
                      key="categories"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Category Breakdown */}
                      <div className={`rounded-xl p-4 ${getCardStyles(theme)}`}>
                        <h3 className={`text-lg font-semibold mb-4 ${getTextColor(theme, "primary")}`}>
                          Points by Category
                        </h3>
                        <BarChart
                          data={categoryData.map((item) => ({
                            name: item.name,
                            value: item.value,
                            color: item.color,
                          }))}
                          height={250}
                          showValues={true}
                        />
                      </div>

                      {/* Top Categories */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
                          <h4 className={`font-semibold mb-3 ${getTextColor(theme, "primary")}`}>
                            Top Earning Category
                          </h4>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            <div>
                              <div className={`font-medium ${getTextColor(theme, "primary")}`}>Fuel</div>
                              <div className={`text-sm ${getTextColor(theme, "muted")}`}>5,512 points this month</div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
                          <h4 className={`font-semibold mb-3 ${getTextColor(theme, "primary")}`}>Fastest Growing</h4>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div>
                              <div className={`font-medium ${getTextColor(theme, "primary")}`}>Dining</div>
                              <div className={`text-sm ${getTextColor(theme, "muted")}`}>+45% growth this month</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Stats Card Component for Modal
const StatsCard = ({
  icon: Icon,
  title,
  value,
  change,
  positive,
  theme,
}: {
  icon: any
  title: string
  value: string
  change: string
  positive: boolean | null
  theme: string
}) => (
  <motion.div whileHover={{ scale: 1.02, y: -2 }} className={`p-4 rounded-xl ${getCardStyles(theme)}`}>
    <div className="flex items-center space-x-2 mb-2">
      <Icon className="w-4 h-4 text-purple-400" />
      <span className={`text-sm font-medium ${getTextColor(theme, "secondary")}`}>{title}</span>
    </div>
    <div className={`text-xl font-bold ${getTextColor(theme, "primary")}`}>{value}</div>
    {change !== "0" && (
      <div className={`text-sm ${positive ? "text-green-400" : positive === false ? "text-red-500" : "text-gray-500"}`}>
        {change}
      </div>
    )}
  </motion.div>
)
