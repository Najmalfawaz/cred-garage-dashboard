"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/hooks/use-theme"
import { getTextColor } from "@/lib/utils/theme-utils"

interface LineChartProps {
  data: Array<{
    name: string
    value: number
  }>
  height?: number
  color?: string
  showDots?: boolean
}

export function LineChart({ data, height = 200, color = "#8b5cf6", showDots = true }: LineChartProps) {
  const { theme } = useTheme()
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue

  const getY = (value: number) => {
    return height - ((value - minValue) / range) * height
  }

  const getX = (index: number) => {
    return (index / (data.length - 1)) * 100
  }

  // Create SVG path
  const pathData = data
    .map((point, index) => {
      const x = getX(index)
      const y = getY(point.value)
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  return (
    <div className="w-full relative" style={{ height }}>
      <svg width="100%" height="100%" className="overflow-visible">
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * (height / 4)}
            x2="100%"
            y2={i * (height / 4)}
            stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* Area under curve */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2 }}
          d={`${pathData} L 100 ${height} L 0 ${height} Z`}
          fill={color}
        />

        {/* Line */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {showDots &&
          data.map((point, index) => (
            <motion.circle
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
              whileHover={{ scale: 1.5 }}
              cx={`${getX(index)}%`}
              cy={getY(point.value)}
              r="4"
              fill={color}
              stroke={theme === "dark" ? "#1f2937" : "#ffffff"}
              strokeWidth="2"
              className="cursor-pointer"
            >
              <title>{`${point.name}: ${point.value}`}</title>
            </motion.circle>
          ))}
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2">
        {data.map((point, index) => (
          <div key={index} className={`text-xs ${getTextColor(theme, "muted")}`}>
            {point.name}
          </div>
        ))}
      </div>
    </div>
  )
}
