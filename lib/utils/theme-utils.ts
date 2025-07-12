import { THEME_COLORS } from "@/lib/constants/theme"

type Theme = "light" | "dark"

export const getTextColor = (theme: Theme, variant: keyof typeof THEME_COLORS.light.text) => {
  return THEME_COLORS[theme].text[variant]
}

export const getCardStyles = (theme: Theme) => {
  return `${THEME_COLORS[theme].card.background} ${THEME_COLORS[theme].card.hover} backdrop-blur-sm border shadow-lg`
}

export const getNavbarStyles = (theme: Theme, isScrolled: boolean) => {
  return `${isScrolled ? THEME_COLORS[theme].navbar.background : "bg-transparent"} ${
    isScrolled ? "backdrop-blur-md border-b" : ""
  } transition-all duration-300`
}
