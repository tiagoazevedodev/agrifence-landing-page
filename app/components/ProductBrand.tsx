import Image from "next/image"
import type { ProductId } from "@/lib/products"
import FleetfenceBrand from "../fleetfence/components/Brand"

// Logo de cada produto no menu e no rodapé.
export default function ProductBrand({ product }: { product: ProductId }) {
  if (product === "fleetfence") return <FleetfenceBrand />

  return (
    <span className="flex items-center gap-2.5">
      <Image src="/agrifence-logo.png" alt="Agrifence" width={32} height={32} className="rounded" />
      <span className="font-semibold tracking-tight text-[1.05rem]">Agrifence</span>
    </span>
  )
}
