export const THEME_CONSTANTS = {
  STORAGE_KEY: "cred-garage-theme",
  DEFAULT_THEME: "dark" as const,
  COOKIE_MAX_AGE: 60 * 60 * 24 * 7, // 7 days
} as const

export const THEME_COLORS = {
  light: {
    background: "from-gray-50 via-white to-gray-100",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-800", // Much darker
      muted: "text-gray-700", // Much darker
      subtle: "text-gray-600", // Much darker
    },
    card: {
      background: "bg-white/90 border-gray-300",
      hover: "hover:bg-white",
    },
    navbar: {
      background: "bg-white/95 border-gray-300",
      text: "text-gray-900",
      textHover: "hover:text-gray-700",
    },
  },
  dark: {
    background: "from-gray-900 via-gray-800 to-black",
    text: {
      primary: "text-white",
      secondary: "text-gray-200",
      muted: "text-gray-300",
      subtle: "text-gray-400",
    },
    card: {
      background: "bg-gray-800/60 border-gray-700",
      hover: "hover:bg-gray-800/80",
    },
    navbar: {
      background: "bg-gray-900/95 border-gray-800",
      text: "text-white",
      textHover: "hover:text-gray-200",
    },
  },
} as const
