"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  
  useEffect(() => {
    const root = window.document.documentElement
    const stored = localStorage.getItem(storageKey) as Theme | null

    const appliedTheme = stored || defaultTheme
    setTheme(appliedTheme)

    root.classList.remove("light", "dark")
    root.classList.add(appliedTheme)

    // Set localStorage if not already set
    if (!stored) {
      localStorage.setItem(storageKey, defaultTheme)
    }

    setMounted(true)
  }, [defaultTheme, storageKey])


  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)

      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
    },
    toggleTheme: () => {
      const newTheme = theme === "light" ? "dark" : "light"
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)

      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(newTheme)
    },
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
