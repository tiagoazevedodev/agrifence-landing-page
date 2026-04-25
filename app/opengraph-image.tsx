import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt =
  "Agrifence — Plataforma de inteligência operacional agrícola"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #090b0d 0%, #0e1622 50%, #0a1430 100%)",
          color: "#edf1f4",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px circle at 80% 0%, rgba(76,132,255,0.28), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#4c84ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#090b0d",
            }}
          >
            A
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Agrifence
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(76,132,255,0.4)",
              background: "rgba(76,132,255,0.12)",
              color: "#7aa1ff",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            Inteligência operacional agrícola
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Quanto custou cada hectare da sua safra?
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#9ca5ae",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Telemetria por segundo · Custo por talhão · Trabalho × Logística · Rastros
            por velocidade
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            color: "#6e7780",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <div>Agribox · Agri-Vision</div>
          <div>agrifence.com.br</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
