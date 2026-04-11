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
    default: "Trainr — App social fitness",
    template: "%s · Trainr",
  },
  description:
    "Trainr: hub de 6 pestañas (Inicio, Explorar, Chats, Entreno, Nutrición, Premium), feed social, chat 1:1, planes de entreno y dietas. App iOS. trytrainr.com",
  metadataBase: new URL("https://trytrainr.com"),
  icons: {
    icon: [{ url: "/trainr_logo.png", type: "image/png" }],
    apple: "/trainr_logo.png",
  },
  openGraph: {
    title: "Trainr — App social fitness",
    description:
      "Progreso visible, comunidad seria y hub completo: feed, chat 1:1, entreno, nutrición y más. Social fitness sin postureo vacío.",
    url: "/",
    siteName: "Trainr",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trainr — App social fitness",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainr — App social fitness",
    description:
      "Progreso visible, comunidad seria: feed, chat, entreno y nutrición en una app oscura pensada para constancia.",
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
