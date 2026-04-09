import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tereraishe Mahupa — Informatics & Analytics",
  description:
    "Portfolio of Tereraishe Mahupa — Informatics & Analytics student at NUST, Co-Founder of Lynia Finance. Specialising in Machine Learning, Data Analysis, and Fintech infrastructure for Zimbabwe's informal economy.",
  openGraph: {
    title: "Tereraishe Mahupa — Informatics & Analytics",
    description:
      "Informatics & Analytics student at NUST. Co-Founder of Lynia Finance — Zimbabwe's WhatsApp-first microfinance platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
