"use client"

import * as React from "react"

type Theme = "dark"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  enableSystem?: boolean
  attribute?: string
  disableTransitionOnChange?: boolean
}

export const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "dark",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  React.useEffect(() => {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: "dark", setTheme: () => null }}>
      {children}
    </ThemeContext.Provider>
  )
}
