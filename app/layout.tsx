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
    default: "Noxen Web — Landings que generan clientes",
    template: "%s · Noxen Web",
  },
  description:
    "Landing pages dark premium para negocios locales. Listas en 72h, mobile-first, carga rápida y CTA a WhatsApp.",
  metadataBase: new URL("https://noxenweb.com"),
  openGraph: {
    title: "Noxen Web — Páginas web que generan clientes",
    description:
      "Landing pages para negocios locales listas en 72h. Diseño premium oscuro, velocidad real y CTA a WhatsApp.",
    url: "/",
    siteName: "Noxen Web",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noxen Web — Landings en 72h",
    description:
      "Landing pages para negocios locales: mobile-first, rápidas y pensadas para WhatsApp.",
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
