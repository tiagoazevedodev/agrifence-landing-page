"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/contact"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "#produto", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#paineis", label: "Painéis" },
  { href: "#agribox", label: "Agribox" },
  { href: "#faq", label: "FAQ" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgb(var(--nav-bg))] border-b border-[rgb(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image src="/agrifence-logo.png" alt="Agrifence" width={32} height={32} className="rounded" />
          <span className="font-semibold tracking-tight text-[1.05rem]">Agrifence</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-[rgb(var(--text))] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-primary !py-2 !px-4 text-sm"
          >
            Falar com a gente
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 -mr-2 text-muted hover:text-[rgb(var(--text))]"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted hover:text-[rgb(var(--text))]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full justify-center text-sm"
            >
              Falar com a gente
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
