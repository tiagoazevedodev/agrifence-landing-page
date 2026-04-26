import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from "./components/StructuredData"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const SITE_URL = "https://agrifence.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agrifence — Saiba quanto custou cada hectare da sua safra",
    template: "%s · Agrifence",
  },
  description:
    "Agrifence é a plataforma brasileira de inteligência operacional agrícola: o Agribox coleta dados das máquinas (GPS, RFID, velocidade) e o Agri-Vision transforma em decisão — custo por hectare e por talhão, separação automática Trabalho × Logística, rastros por velocidade, cobertura real do talhão e monitoramento ao vivo.",
  applicationName: "Agrifence",
  authors: [{ name: "Agrifence", url: SITE_URL }],
  creator: "Agrifence",
  publisher: "Agrifence",
  category: "Technology",
  keywords: [
    "telemetria agrícola",
    "custo por hectare",
    "gestão de frota agrícola",
    "monitoramento de máquinas agrícolas",
    "agricultura de precisão",
    "Agribox",
    "Agri-Vision",
    "Agrifence",
    "trabalho × logística agrícola",
    "rastreabilidade de operações agrícolas",
    "RFID agrícola",
    "GPS para tratores e colhedoras",
    "cobertura de talhão",
    "fechamento de safra",
    "ERP agrícola",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Agrifence",
    title: "Agrifence — Inteligência operacional agrícola",
    description:
      "Monitoramento total de sua operação agrícola. Pare de descobrir o custo da safra no fechamento contábil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrifence — Inteligência operacional agrícola",
    description:
      "Transforme o movimento das suas máquinas em decisão econômica: custo por hectare, separação Trabalho × Logística, monitoramento ao vivo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
