"use client"

import { motion } from "framer-motion"
import { getTextColor } from "@/lib/utils/theme-utils"
import { useTheme } from "@/lib/hooks/theme-provider"

interface BarChartProps {
  data: Array<{
    name: string
    value: number
    color?: string
  }>
  maxValue?: number
  height?: number
  showValues?: boolean
}

export function BarChart({ data, maxValue, height = 200, showValues = true }: BarChartProps) {
  const { theme } = useTheme()
  const max = maxValue || Math.max(...data.map((d) => d.value))

  return (
    <div className="w-full" style={{ height }}>
      <div className="h-full flex items-end justify-between space-x-2">
        {data.map((item, index) => {
          const percentage = (item.value / max) * 100
          const color = item.color || "#8b5cf6"

          return (
            <div key={item.name} className="flex-1 flex flex-col items-center group">
              {/* Value on hover */}
              {showValues && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -10 }}
                  className={`mb-2 px-2 py-1 rounded text-xs font-medium ${
                    theme === "dark"
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-gray-900 border border-gray-300 shadow-sm"
                  }`}
                >
                  {item.value.toLocaleString()}
                </motion.div>
              )}

              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${percentage}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-t-lg relative group cursor-pointer"
                style={{ backgroundColor: color }}
              >
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-lg"
                />
              </motion.div>

              {/* Label */}
              <div className={`mt-2 text-xs font-medium text-center ${getTextColor(theme, "muted")}`}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
