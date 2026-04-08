import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tereraishe Mwanabantu — Informatics & Analytics",
  description:
    "Portfolio of Tereraishe Mwanabantu — Informatics & Analytics student at NUST, Co-Founder of Lynia Finance. Specialising in Machine Learning, Data Analysis, and Fintech infrastructure for Zimbabwe's informal economy.",
  openGraph: {
    title: "Tereraishe Mwanabantu — Informatics & Analytics",
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
