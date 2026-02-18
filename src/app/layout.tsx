import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wrapshot.com"),
  title: "Wrapshot — The All-in-One Film Production Platform",
  description: "From script to screen, beautifully organized. Wrapshot combines traditional film production tools with modern workflow automation to help indie filmmakers and production teams plan, schedule, and execute their projects efficiently.",
  keywords: ["film scheduling", "production scheduling", "call sheets", "stripboard", "movie production software", "wrapshot", "film production", "filmmakers", "script analysis", "scene breakdown"],
  icons: {
    icon: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
    shortcut: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
    apple: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Wrapshot — The All-in-One Film Production Platform",
    description: "From script to screen, beautifully organized.",
    url: "https://wrapshot.com",
    type: "website",
    siteName: "Wrapshot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapshot",
    description: "From script to screen, beautifully organized.",
  },
  applicationName: "Wrapshot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
