import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const BACKGROUND = "#0d0d0d";
const FOREGROUND = "#ffffff";
const SUBDUED = "#8f8f8f";

type OgCard = {
  label: string;
  title: string;
  subtitle: string;
  footer: [string, string];
  badge?: boolean;
};

export async function renderOgCard({ label, title, subtitle, footer, badge = false }: OgCard) {
  const badgeSrc = badge
    ? `data:image/svg+xml;base64,${await readFile(join(process.cwd(), "public/assets/svgs/badges/verified.svg"), "base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: BACKGROUND,
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          color: FOREGROUND,
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: SUBDUED }}>{label.toUpperCase()}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", fontSize: 88, lineHeight: 1.1, letterSpacing: -1 }}>{title}</div>
            {badgeSrc && <img src={badgeSrc} width={64} height={64} alt="" />}
          </div>
          <div style={{ display: "flex", fontSize: 40, lineHeight: 1.3, color: SUBDUED }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: SUBDUED }}>
          <div style={{ display: "flex" }}>{footer[0]}</div>
          <div style={{ display: "flex" }}>{footer[1]}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
