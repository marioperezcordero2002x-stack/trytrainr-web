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
    default: "Trainr — Two coaches. Daily clarity.",
    template: "%s · Trainr",
  },
  description:
    "Trainr tells you what to train and how to eat each day. Training Coach and Nutrition Coach in one premium system. trytrainr.com",
  metadataBase: new URL("https://trytrainr.com"),
  openGraph: {
    title: "Trainr — Two coaches. One system.",
    description:
      "Daily clarity for training and nutrition — less noise, better execution. Early access at trytrainr.com.",
    url: "/",
    siteName: "Trainr",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trainr — Training Coach and Nutrition Coach",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainr — Daily guidance",
    description:
      "What to train and how to eat today, with two coaches that work as one system.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--tr-canvas)] text-[var(--tr-text-primary)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-trainr-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0a0a0c] focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
