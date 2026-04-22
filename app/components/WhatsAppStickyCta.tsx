"use client";

import { useEffect, useState } from "react";
import { trainrProduct } from "../content/trainr-product";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21a9 9 0 1 0-7.87-4.6L3 21l4.77-1.08A8.96 8.96 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.9c.2-.5.5-.5.8-.5.3 0 .6 0 .8.5l.7 1.6c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.8 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l1.6.7c.5.2.5.5.5.8 0 .3 0 .6-.5.8-.6.3-1.4.5-2.1.3-3-.8-5.4-3.2-6.2-6.2-.2-.7 0-1.5.3-2.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppStickyCta() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY < 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${trainrProduct.whatsApp.phoneE164}?text=${encodeURIComponent(
    trainrProduct.whatsApp.prefill,
  )}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[60] px-[var(--tr-gutter-x)] pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-[opacity,transform] duration-200 sm:hidden ${
        hidden ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="mx-auto w-full max-w-[var(--tr-max-w)]">
        <div className="rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-glass)] p-2 shadow-[var(--tr-shadow-lg)] backdrop-blur-xl">
          <a
            href={href}
            className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[var(--tr-radius-lg)] bg-trainr-accent px-5 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_14px_34px_-10px_rgba(255,122,0,0.44)] transition-[background-color,transform,box-shadow] duration-200 active:scale-[0.99]"
          >
            <WhatsAppIcon className="opacity-95" />
            WhatsApp · Pedir presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}

