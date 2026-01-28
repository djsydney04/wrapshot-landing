import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wrapshoot — Modern Film Production Scheduling",
  description: "The modern way to schedule film productions. Stripboard, call sheets, and crew coordination in one intuitive platform.",
  keywords: ["film scheduling", "production scheduling", "call sheets", "stripboard", "movie production software", "wrapshoot"],
  openGraph: {
    title: "Wrapshoot — Modern Film Production Scheduling",
    description: "The modern way to schedule film productions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapshoot",
    description: "The modern way to schedule film productions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
