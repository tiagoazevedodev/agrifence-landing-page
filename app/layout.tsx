import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Added import for React
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriFence - Monitoramento Inteligente para o Agronegócio",
  description:
    "AgriFence oferece soluções inovadoras de monitoramento virtual e autônomo para máquinas e produtividade agrícola.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
