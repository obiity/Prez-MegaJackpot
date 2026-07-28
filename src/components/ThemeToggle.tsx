"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { ThemeContext } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [mounted, setMounted] = React.useState(false)
  const [isSystemDark, setIsSystemDark] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsSystemDark(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setIsSystemDark(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9" /> // Placeholder
    )
  }

  const currentTheme = theme === "system" ? (isSystemDark ? "dark" : "light") : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 flex items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Basculer le thème"
    >
      {currentTheme === "dark" ? (
        <Moon className="w-5 h-5 text-blue-200" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  )
}
