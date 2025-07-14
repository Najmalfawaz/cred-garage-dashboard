"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, BarChart3, Gift, LayoutDashboard } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { getNavbarStyles, getTextColor } from "@/lib/utils/theme-utils"
import { useTheme } from "../../lib/hooks/theme-provider"

export function Navbar() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Analytics", href: "#stats", icon: BarChart3 },
    { name: "Rewards", href: "#rewards", icon: Gift },
  ]

  const isActive = (href: string) => {
    // Active if full match (for routes like /dashboard), or page pathname matches anchor (like #section)
    return href === pathname || (href.startsWith("/") && pathname.startsWith(href))
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${getNavbarStyles(theme, isScrolled)}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 cursor-pointer">
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  CRED Garage
                </h1>
                <p className={`text-xs hidden sm:block font-medium ${getTextColor(theme, "muted")}`}>Premium Rewards</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium
                      ${
                        isActive(item.href)
                          ? "text-purple-600 dark:text-purple-400 underline underline-offset-4"
                          : `${getTextColor(theme, "secondary")} hover:${getTextColor(theme, "primary")} ${
                              theme === "dark" ? "hover:bg-gray-800/50" : "hover:bg-gray-100/80"
                            }`
                      }
                    `}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.a>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors font-medium ${getTextColor(theme, "secondary")} hover:${getTextColor(
                  theme,
                  "primary"
                )} ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden border-t backdrop-blur-md ${
                theme === "dark" ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-300"
              }`}
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href} legacyBehavior>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium
                        ${
                          isActive(item.href)
                            ? "text-purple-600 dark:text-purple-400 underline underline-offset-4"
                            : `${getTextColor(theme, "secondary")} hover:${getTextColor(theme, "primary")} ${
                                theme === "dark" ? "hover:bg-gray-800/50" : "hover:bg-gray-100/80"
                              }`
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
