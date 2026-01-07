import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ashford Hills HOA — Granger, Indiana";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #0f766e 45%, #047857 100%)",
          padding: 72,
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
            Ashford Hills HOA
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, opacity: 0.95 }}>
            Homeowners Association • Granger, Indiana
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.35, opacity: 0.9 }}>
            Community information, HOA contact details, dues info, and neighborhood resources.
          </div>
        </div>
      </div>
    ),
    size
  );
}
