import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Wrapshot — The All-in-One Film Production Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoUrl =
    "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCFCFC",
          padding: "60px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="Wrapshot Logo"
          width={180}
          height={180}
          style={{ marginBottom: "32px" }}
        />
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1A1A1A",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Wrapshot
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#666666",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          From script to screen, beautifully organized.
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#999999",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          The All-in-One Film Production Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
