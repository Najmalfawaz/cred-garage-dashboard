"use client"

import { useState, useEffect, useCallback } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize theme
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const initialTheme = savedTheme || "light"

        setTheme(initialTheme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(initialTheme)

        if (!savedTheme) {
          localStorage.setItem("theme", "dark")
        }
      } catch (error) {
        // Fallback if localStorage is not available
        setTheme("dark")
        document.documentElement.classList.add("dark")
      }

      setIsLoaded(true)
    }

    initializeTheme()
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light"

    // Update state immediately
    setTheme(newTheme)

    // Update DOM immediately
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)

    // Save to localStorage
    try {
      localStorage.setItem("theme", newTheme)
    } catch (error) {
      // Handle localStorage errors gracefully
      console.warn("Could not save theme to localStorage:", error)
    }

    // Force a small delay to ensure all components re-render
    setTimeout(() => {
      document.body.style.colorScheme = newTheme
    }, 0)
  }, [theme])

  return { theme, toggleTheme, isLoaded }
}
