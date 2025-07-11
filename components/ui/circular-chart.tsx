"use client"

import { motion } from "framer-motion"

interface CircularChartProps {
  data: Array<{ name: string; value: number; color: string }>
  size: number
  strokeWidth: number
  isAnimated?: boolean
}

export function CircularChart({ data, size, strokeWidth, isAnimated = false }: CircularChartProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const total = data.reduce((sum, item) => sum + item.value, 0)

  let cumulativePercentage = 0

  return (
    <svg width={size} height={size} className="transform -rotate-90">
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
            style={{
              filter: isAnimated ? "drop-shadow(0 0 6px rgba(168, 85, 247, 0.4))" : "none",
            }}
          />
        )
      })}
    </svg>
  )
}
