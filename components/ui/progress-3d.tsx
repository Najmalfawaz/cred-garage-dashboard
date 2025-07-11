"use client"

import type React from "react"
import { motion } from "framer-motion"

export const Progress3D = ({
  value = 0,
  className,
  isAnimated = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  value?: number
  isAnimated?: boolean
}) => (
  <div className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`} {...props}>
    <motion.div
      className="h-full w-full flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 ease-out relative rounded-full"
      style={{
        transform: `translateX(-${100 - value}%)`,
        boxShadow: isAnimated ? "0 0 20px rgba(168, 85, 247, 0.5)" : "none",
      }}
      animate={{
        backgroundPosition: isAnimated ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
      }}
      transition={{
        duration: 2,
        repeat: isAnimated ? Number.POSITIVE_INFINITY : 0,
        ease: "linear",
      }}
    >
      {isAnimated && (
        <>
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-sm"
          />
        </>
      )}
    </motion.div>
  </div>
)
