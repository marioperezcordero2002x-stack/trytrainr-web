import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trainr — Dos coaches. Claridad diaria.",
    template: "%s · Trainr",
  },
  description:
    "Trainr te dice qué entrenar y cómo comer cada día. Training Coach y Nutrition Coach en un sistema premium. trytrainr.com",
  metadataBase: new URL("https://trytrainr.com"),
  openGraph: {
    title: "Trainr — Dos coaches. Un sistema.",
    description:
      "Menos dudas, más claridad: entreno y nutrición alineados. Acceso anticipado en trytrainr.com.",
    url: "/",
    siteName: "Trainr",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trainr — Training Coach y Nutrition Coach",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainr — Guía diaria",
    description:
      "Qué entrenar y cómo comer hoy, con dos coaches que trabajan como un solo sistema.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--tr-canvas)] text-[var(--tr-text-primary)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-trainr-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0a0a0c] focus:shadow-lg"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
