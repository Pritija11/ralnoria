import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ralnoria — Cloud Infrastructure Orchestration";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "#000311",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 80% 10%, rgba(33,86,246,0.35), transparent 50%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={100}
          height={100}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#ffffff",
          }}
        >
          ralnoria
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Cloud infrastructure orchestration
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#2156f6",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
