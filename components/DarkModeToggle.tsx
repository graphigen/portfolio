"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDarkMode } from "@/hooks/useDarkMode"

export function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleDarkMode}
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? "Aydınlık moda geç" : "Karanlık moda geç"}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`h-5 w-5 absolute transition-all duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          } text-yellow-500`}
        />
        <Moon
          className={`h-5 w-5 absolute transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          } text-blue-400`}
        />
      </div>
    </Button>
  )
}
