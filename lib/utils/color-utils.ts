// Color mapping for Tailwind colors to RGB values
const colorMap: { [key: string]: string } = {
  "blue-500": "59, 130, 246",
  "cyan-500": "6, 182, 212",
  "purple-500": "168, 85, 247",
  "pink-500": "236, 72, 153",
  "orange-500": "249, 115, 22",
  "red-500": "239, 68, 68",
  "green-500": "34, 197, 94",
  "emerald-500": "16, 185, 129",
  "yellow-500": "234, 179, 8",
  "indigo-500": "99, 102, 241",
}

export function getBackgroundGradient(colorString: string, isHovered: boolean): string {
  if (!isHovered) return "transparent"

  try {
    // Parse "from-blue-500 to-cyan-500" format
    const parts = colorString.split(" ")
    const fromPart = parts.find((part) => part.startsWith("from-"))
    const toPart = parts.find((part) => part.startsWith("to-"))

    if (!fromPart || !toPart) {
      return "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
    }

    const fromColor = fromPart.replace("from-", "")
    const toColor = toPart.replace("to-", "")

    const fromRgb = colorMap[fromColor] || "168, 85, 247"
    const toRgb = colorMap[toColor] || "236, 72, 153"

    return `linear-gradient(45deg, rgba(${fromRgb}, 0.1) 0%, rgba(${toRgb}, 0.1) 100%)`
  } catch (error) {
    // Fallback gradient
    return "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "new":
      return "bg-green-500"
    case "limited":
      return "bg-red-500"
    case "premium":
      return "bg-yellow-500"
    default:
      return "bg-blue-500"
  }
}

export function getColorValues(colorString: string) {
  // Handle "from-green-500 to-emerald-500" format
  const parts = colorString.split(" ")
  const fromColor = parts.find((part) => part.startsWith("from-"))?.replace("from-", "") || "purple-500"
  const toColor = parts.find((part) => part.startsWith("to-"))?.replace("to-", "") || "pink-500"

  return {
    from: colorMap[fromColor] || "168, 85, 247",
    to: colorMap[toColor] || "236, 72, 153",
  }
}
