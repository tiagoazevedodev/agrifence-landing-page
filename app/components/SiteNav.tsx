"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight, LogIn, ChevronDown } from "lucide-react"
import { PRODUCTS, PRODUCT_ORDER, type Product, type ProductId } from "@/lib/products"
import ProductBrand from "./ProductBrand"
import ThemeToggle from "./ThemeToggle"

function external(l: { external?: boolean }) {
  return l.external ? { target: "_blank", rel: "noopener" } : {}
}

function ProductItem({
  p,
  current,
  onClick,
  className = "",
}: {
  p: Product
  current: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      href={p.href}
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      className={`flex items-start gap-3 rounded-lg p-3 hover:bg-[rgb(var(--bg-elev))] transition-colors ${className}`}
    >
      {/* O ícone fica no tema do produto para manter a cor de cada marca */}
      <span className={`shrink-0 ${p.themeClass}`}>
        <span className="w-9 h-9 rounded-lg bg-[rgb(var(--brand))]/10 border border-[rgb(var(--brand))]/30 flex items-center justify-center text-[rgb(var(--brand))]">
          <p.icon className="w-4 h-4" />
        </span>
      </span>
      <span>
        <span className="block text-sm font-semibold text-[rgb(var(--text))]">
          {p.name} <span className="font-normal text-dim">· Para {p.audience.toLowerCase()}</span>
        </span>
        <span className="block mt-0.5 text-xs text-muted leading-snug">{p.summary}</span>
      </span>
    </Link>
  )
}

// Menu único das páginas de produto. Links, botões e marca vêm de lib/products.ts.
export default function SiteNav({ product }: { product: ProductId }) {
  const current = PRODUCTS[product]
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
      {/* Três colunas: a do meio fica no centro exato da barra, independente da largura das laterais */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-6">
        <Link href="#top" aria-label={`${current.name}, início`} className="justify-self-start">
          <ProductBrand product={product} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <div className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-[rgb(var(--text))] group-focus-within:text-[rgb(var(--text))] transition-colors"
            >
              Produtos
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150">
              <div className="w-80 p-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-card))] shadow-xl shadow-black/10">
                {PRODUCT_ORDER.map((id) => (
                  <ProductItem key={id} p={PRODUCTS[id]} current={id === product} />
                ))}
              </div>
            </div>
          </div>
          {current.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-[rgb(var(--text))] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 justify-self-end">
          <ThemeToggle />
          {current.login && (
            <Link
              href={current.login.href}
              {...external(current.login)}
              className="btn btn-ghost !py-2 !px-4 text-sm"
            >
              <LogIn className="w-4 h-4" />
              {current.login.label}
            </Link>
          )}
          <Link
            href={current.cta.href}
            {...external(current.cta)}
            className="btn btn-primary !py-2 !px-4 text-sm"
          >
            {current.cta.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
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
        <div className="lg:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
          <div className="px-5 py-4 flex flex-col gap-1">
            <div className="text-[11px] text-dim font-mono uppercase tracking-wider pt-1 pb-1">
              Produtos
            </div>
            {PRODUCT_ORDER.map((id) => (
              <ProductItem
                key={id}
                p={PRODUCTS[id]}
                current={id === product}
                onClick={() => setOpen(false)}
                className="-mx-3"
              />
            ))}
            <div className="my-2 border-t border-[rgb(var(--border))]" />
            {current.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted hover:text-[rgb(var(--text))]"
              >
                {l.label}
              </Link>
            ))}
            {current.login && (
              <Link
                href={current.login.href}
                {...external(current.login)}
                onClick={() => setOpen(false)}
                className="btn btn-ghost mt-3 w-full justify-center text-sm"
              >
                <LogIn className="w-4 h-4" />
                {current.login.label}
              </Link>
            )}
            <Link
              href={current.cta.href}
              {...external(current.cta)}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full justify-center text-sm"
            >
              {current.cta.label}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
