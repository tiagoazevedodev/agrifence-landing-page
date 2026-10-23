import Image from "next/image"

/**
 * Lockup da marca: wordmark Fleetfence ao lado da logo Agrifence,
 * já que a Fleetfence é um braço da Agrifence.
 */
export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="font-display font-bold tracking-tight text-[1.15rem] leading-none"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Fleet<span className="text-[rgb(var(--brand-bright))]">fence</span>
      </span>
      {!compact && (
        <>
          <span aria-hidden className="h-4 w-px bg-[rgb(var(--border-strong))]" />
          <span className="flex items-center gap-1.5 opacity-80">
            <Image
              src="/agrifence-logo.png"
              alt="Agrifence"
              width={20}
              height={20}
              className="rounded"
            />
            <span className="text-xs text-dim font-mono uppercase tracking-wider">
              por Agrifence
            </span>
          </span>
        </>
      )}
    </span>
  )
}
