import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Agrifence: uma solução de produtor para produtor"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  // Logo oficial (símbolo + nome), com fundo transparente
  const logo = await fetch(new URL("../public/agrifence-logo.png", import.meta.url)).then((r) =>
    r.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderBottom: "14px solid #4c84ff",
          color: "#111820",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo as unknown as string} width={460} height={460} alt="" />
        <div
          style={{
            // o PNG do logo tem margem interna; puxa o slogan para perto do nome
            marginTop: -70,
            fontSize: 46,
            fontWeight: 600,
            letterSpacing: -1,
            color: "#111820",
          }}
        >
          Uma solução de produtor para produtor.
        </div>
      </div>
    ),
    { ...size }
  )
}
