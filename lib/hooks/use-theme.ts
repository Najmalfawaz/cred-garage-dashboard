"use client"

import { useState, useEffect, useCallback } from "react"
import { THEME_CONSTANTS } from "@/lib/constants/theme"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(THEME_CONSTANTS.DEFAULT_THEME)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem(THEME_CONSTANTS.STORAGE_KEY) as Theme | null
        const initialTheme = savedTheme || THEME_CONSTANTS.DEFAULT_THEME

        setTheme(initialTheme)
        applyThemeToDOM(initialTheme)

        if (!savedTheme) {
          localStorage.setItem(THEME_CONSTANTS.STORAGE_KEY, THEME_CONSTANTS.DEFAULT_THEME)
        }
      } catch (error) {
        console.warn("Theme initialization failed, using default:", error)
        setTheme(THEME_CONSTANTS.DEFAULT_THEME)
        applyThemeToDOM(THEME_CONSTANTS.DEFAULT_THEME)
      }

      setIsLoaded(true)
    }

    initializeTheme()
  }, [])

  const applyThemeToDOM = (newTheme: Theme) => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)
    document.body.style.colorScheme = newTheme
  }

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === "light" ? "dark" : "light"

    setTheme(newTheme)
    applyThemeToDOM(newTheme)

    try {
      localStorage.setItem(THEME_CONSTANTS.STORAGE_KEY, newTheme)
    } catch (error) {
      console.warn("Could not save theme to localStorage:", error)
    }
  }, [theme])

  return { theme, toggleTheme, isLoaded }
}
