import Image from "next/image"

export default function BrowserFrame({
  src,
  alt,
  label,
  width = 1600,
  height = 928,
}: {
  src: string
  alt: string
  label: string
  width?: number
  height?: number
}) {
  return (
    <div className="surface-elev rounded-2xl overflow-hidden shadow-xl shadow-black/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]">
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgb(var(--border-strong))]" />
        <span className="ml-3 text-xs text-dim font-mono truncate">{label}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="w-full h-auto"
      />
    </div>
  )
}
