"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../lib/hooks/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className={`relative overflow-hidden ${
          theme === "dark"
            ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/70 text-gray-300 hover:text-white"
            : "bg-white/50 border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-900"
        } backdrop-blur-sm`}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-4 w-4" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : -180,
            scale: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-4 w-4" />
        </motion.div>
      </Button>
    </motion.div>
  )
}
