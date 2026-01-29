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
  title: "Wrapshoot — Modern Film Production Scheduling",
  description: "Production management for modern filmmakers. Stripboard, call sheets, and crew coordination in one intuitive platform.",
  keywords: ["film scheduling", "production scheduling", "call sheets", "stripboard", "movie production software", "wrapshoot", "film production", "filmmakers"],
  icons: {
    icon: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
    shortcut: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
    apple: "https://hhmdkkkpaukfcwfmdxyl.supabase.co/storage/v1/object/public/logo/logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Wrapshoot — Modern Film Production Scheduling",
    description: "Production management for modern filmmakers.",
    type: "website",
    siteName: "Wrapshoot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapshoot",
    description: "Production management for modern filmmakers.",
  },
  applicationName: "Wrapshoot",
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
