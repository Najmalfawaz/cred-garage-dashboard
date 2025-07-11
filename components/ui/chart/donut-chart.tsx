"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/hooks/use-theme"
import { getTextColor } from "@/lib/utils/theme-utils"

interface DonutChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
  size?: number
  strokeWidth?: number
  showLegend?: boolean
}

export function DonutChart({ data, size = 200, strokeWidth = 20, showLegend = true }: DonutChartProps) {
  const { theme } = useTheme()
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const total = data.reduce((sum, item) => sum + item.value, 0)

  let cumulativePercentage = 0

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
            strokeWidth={strokeWidth}
          />

          {/* Data segments */}
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
            const strokeDashoffset = -((cumulativePercentage / 100) * circumference)

            cumulativePercentage += percentage

            return (
              <motion.circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{
                  strokeDasharray: strokeDasharray,
                  strokeDashoffset: strokeDashoffset,
                }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                whileHover={{ strokeWidth: strokeWidth + 2 }}
                className="cursor-pointer"
              >
                <title>{`${item.name}: ${item.value} (${percentage.toFixed(1)}%)`}</title>
              </motion.circle>
            )
          })}
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-2xl font-bold ${getTextColor(theme, "primary")}`}>{total.toLocaleString()}</div>
            <div className={`text-sm ${getTextColor(theme, "muted")}`}>Total</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${getTextColor(theme, "secondary")} truncate`}>{item.name}</div>
                <div className={`text-xs ${getTextColor(theme, "muted")}`}>
                  {((item.value / total) * 100).toFixed(1)}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
