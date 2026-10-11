import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #070b14 0%, #131c2e 100%)",
          color: "#e6ebf5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 32 32">
            <path d="M16 2 28.1 9v14L16 30 3.9 23V9L16 2Z" fill="#f5a524" />
            <path d="M10 11.5h12v3h-4.5V23h-3v-8.5H10v-3Z" fill="#070b14" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            The<span style={{ color: "#f5a524" }}>Crypto</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Learn cryptocurrency and crypto exchanges
          </div>
          <div style={{ fontSize: 30, color: "#8b97ad", maxWidth: 960 }}>
            Free lessons, live market data, calculators, a glossary and quizzes.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#f5a524" }}>thecrypto.com.br</div>
      </div>
    ),
    size,
  );
}
