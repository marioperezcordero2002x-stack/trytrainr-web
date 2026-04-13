"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TrainrLogoMark } from "./TrainrLogoMark";

const nav = [
  { href: "/#how-trainr-works", label: "How it works" },
  { href: "/#coaches", label: "Coaches" },
  { href: "/#bundle", label: "Together" },
  { href: "/#premium-feel", label: "Premium" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        elevated
          ? "border-[var(--tr-border)] bg-[var(--tr-surface-glass)] shadow-[0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-[var(--tr-canvas)]/80 backdrop-blur-sm"
      }`}
    >
      <div
        className="mx-auto flex h-14 max-w-[var(--tr-max-w)] items-center gap-3 px-[var(--tr-gutter-x)] sm:h-[var(--header-height)] sm:gap-4"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 rounded-[var(--tr-radius-sm)] text-[var(--tr-text-primary)] outline-offset-4 transition-opacity hover:opacity-[0.92] sm:gap-2.5"
        >
          <TrainrLogoMark variant="header" className="translate-y-[0.5px]" />
          <span className="text-[1rem] font-semibold tracking-[-0.04em] sm:text-[1.0625rem]">
            Trainr
          </span>
        </Link>

        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 [&::-webkit-scrollbar]:hidden"
          aria-label="Sections"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-[var(--tr-radius-sm)] px-2.5 py-2 text-[0.8125rem] font-medium text-[var(--tr-text-tertiary)] transition-[background-color,color] duration-200 hover:bg-white/[0.04] hover:text-[var(--tr-text-primary)] sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:support@trytrainr.com"
          className="inline-flex shrink-0 items-center justify-center rounded-[var(--tr-radius-pill)] bg-[var(--tr-surface-1)] px-3.5 py-2 text-[0.8125rem] font-semibold text-[var(--tr-text-primary)] ring-1 ring-[var(--tr-border-medium)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[var(--tr-surface-2)] hover:ring-[color:var(--trainr-accent-line)] active:scale-[0.98] sm:px-5 sm:text-sm"
        >
          Email
        </a>
      </div>
    </header>
  );
}
