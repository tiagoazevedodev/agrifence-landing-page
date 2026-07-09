import { FileCheck2 } from "lucide-react"

/**
 * Comprovante de atendimento da Patrulha Agrícola, no estilo de um PDF de
 * prestação de contas. Dados fixos de exemplo (São Lourenço do Sul).
 */
const rows: [string, string][] = [
  ["Produtor", "José da Silva"],
  ["Propriedade", "Sítio Boa Esperança — Harmonia"],
  ["Serviço", "Terraplanagem + patrolamento de acesso"],
  ["Máquinas", "Motoniveladora 07 · Retroescavadeira 07"],
  ["Horas trabalhadas", "4h20"],
  ["Distância patrolada", "3,1 km"],
]

export default function ComprovanteCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-[rgb(var(--border))] bg-white text-[rgb(45_51_57)] shadow-xl">
      {/* header */}
      <div className="flex items-center justify-between border-b border-dashed border-[rgb(var(--border))] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1F4D3A]/10 text-[#1F4D3A]">
            <FileCheck2 className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold">Comprovante de Atendimento</div>
            <div className="text-[11px] text-[#5c646c]">Patrulha Agrícola · Prefeitura de São Lourenço do Sul</div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="divide-y divide-[rgb(var(--border))] px-5 py-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-start justify-between gap-4 py-2.5 text-[13px]">
            <span className="text-[#5c646c]">{k}</span>
            <span className="text-right font-medium">{v}</span>
          </div>
        ))}
      </div>

      {/* total */}
      <div className="flex items-center justify-between rounded-b-xl bg-[#1F4D3A] px-5 py-3.5 text-white">
        <span className="text-xs uppercase tracking-wider">Custo do atendimento</span>
        <span className="font-display text-lg font-bold">R$ 1.180,00</span>
      </div>
    </div>
  )
}
