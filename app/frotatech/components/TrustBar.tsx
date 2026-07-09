import { BadgeCheck, Cpu, FlaskConical, Sprout } from "lucide-react"

const items = [
  { icon: BadgeCheck, label: "Tecnologia com registro INPI" },
  { icon: Cpu, label: "Hardware próprio embarcado" },
  { icon: FlaskConical, label: "Parceria ITEC / EMBRAPII" },
  { icon: Sprout, label: "Validada em operação agrícola real" },
]

export default function TrustBar() {
  return (
    <section className="relative border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-elev))]/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-2.5 justify-center lg:justify-start">
              <it.icon className="w-4 h-4 text-[rgb(var(--brand))] shrink-0" />
              <span className="text-xs sm:text-sm text-muted font-medium leading-tight">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
