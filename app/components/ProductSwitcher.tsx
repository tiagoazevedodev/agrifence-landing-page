import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRODUCTS, PRODUCT_ORDER, type ProductId } from "@/lib/products"

// Seletor em pílula do topo do hero: o produto da página fica ativo, o outro é link.
export default function ProductSwitcher({ current }: { current: ProductId }) {
  return (
    <div className="mb-6 mx-auto w-fit flex items-center gap-1 p-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-card))]/80 backdrop-blur">
      {PRODUCT_ORDER.map((id) => {
        const p = PRODUCTS[id]
        const active = id === current
        const content = (
          <>
            <p.icon className="w-3.5 h-3.5 text-[rgb(var(--brand-bright))]" />
            {p.name}
            <span className="hidden sm:inline text-dim font-normal">· {p.audience}</span>
            {!active && <ArrowRight className="w-3.5 h-3.5" />}
          </>
        )
        const base = `${p.themeClass} inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors`

        return active ? (
          <span
            key={id}
            aria-current="page"
            className={`${base} bg-[rgb(var(--brand))]/10 text-[rgb(var(--text))]`}
          >
            {content}
          </span>
        ) : (
          <Link
            key={id}
            href={p.href}
            className={`${base} text-muted hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--brand))]/10`}
          >
            {content}
          </Link>
        )
      })}
    </div>
  )
}
