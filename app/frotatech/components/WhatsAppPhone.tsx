import Image from "next/image"

/**
 * Relatório diário da FrotaTech no WhatsApp — prints reais do sistema,
 * apresentados como capturas autênticas (resumo operacional + investimento
 * por localidade).
 */
const prints = [
  {
    src: "/frotatech/whatsapp_print_1.png",
    w: 534,
    h: 1002,
    alt: "Print de mensagem no WhatsApp: resumo operacional diário da FrotaTech para a prefeitura — frota ativa, tempo produtivo × deslocamento × ocioso, localidades atendidas, Patrulha Agrícola, coleta urbana e custo do dia",
  },
  {
    src: "/frotatech/whatsapp_print_2.png",
    w: 510,
    h: 754,
    alt: "Print de mensagem no WhatsApp: investimento por localidade da semana com horas de serviço produtivo e custo por bairro, total e custo médio por hora",
  },
]

export default function WhatsAppPhone() {
  return (
    <div className="flex flex-row gap-3 sm:gap-4 items-start justify-center">
      {prints.map((p) => (
        <Image
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={p.h}
          loading="lazy"
          className="w-full max-w-[280px] h-auto rounded-xl border border-[rgb(var(--border))] shadow-xl shadow-black/10"
        />
      ))}
    </div>
  )
}
