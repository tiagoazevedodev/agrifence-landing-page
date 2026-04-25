"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
    setMounted(true)
  }, [])

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-[rgb(var(--border-strong))] text-muted hover:text-[rgb(var(--text))] hover:border-[rgb(var(--brand))]/40 transition-colors ${className}`}
    >
      {mounted && dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}
