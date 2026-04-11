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
    "Trainr es la app social fitness para entrenar, compartir progreso, chatear y mejorar hábitos. trytrainr.com",
  metadataBase: new URL("https://trytrainr.com"),
  openGraph: {
    title: "Trainr — App social fitness",
    description:
      "Entrena, comparte y evoluciona. La app social fitness para quienes van en serio.",
    url: "https://trytrainr.com",
    siteName: "Trainr",
    locale: "es_ES",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-[#050507] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
