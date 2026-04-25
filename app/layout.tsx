import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Agrifence — Saiba quanto custou cada hectare da sua safra",
  description:
    "Plataforma de inteligência operacional agrícola. O Agribox coleta telemetria das máquinas, e o Agri-Vision transforma em decisão: custo por talhão e por hectare, separação Trabalho × Logística, rastros coloridos por velocidade e telemetria ao vivo.",
  keywords: [
    "telemetria agrícola",
    "custo por hectare",
    "gestão de frota agrícola",
    "monitoramento de máquinas",
    "agricultura de precisão",
    "Agribox",
    "Agri-Vision",
  ],
  openGraph: {
    title: "Agrifence — Inteligência operacional agrícola",
    description:
      "Telemetria por segundo, separação Trabalho × Logística, rastros por velocidade. Pare de descobrir o custo da safra no fechamento.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrifence — Inteligência operacional agrícola",
    description:
      "Transforme o movimento das suas máquinas em decisão econômica.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})()`,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
