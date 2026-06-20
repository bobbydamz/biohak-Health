import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioHAK Wellness — Launching Soon",
  description:
    "Science-backed wellness, simplified. BioHAK is launching soon — join the list to be first to know.",
  openGraph: {
    title: "BioHAK Wellness — Launching Soon",
    description:
      "Science-backed wellness, simplified. Join the list to be first to know.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
