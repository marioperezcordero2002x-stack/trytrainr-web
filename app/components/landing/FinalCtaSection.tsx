import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Section } from "../system/Section";

const { finalCta, whatsApp } = trainrProduct;

export function FinalCtaSection() {
  const whatsAppHref = `https://wa.me/${whatsApp.phoneE164}?text=${encodeURIComponent(
    whatsApp.prefill,
  )}`;

  return (
    <Section
      id="cta"
      tone="subtle"
      spacing="default"
      className="border-b border-[var(--tr-border)] !pb-[calc(var(--tr-section-y)*1.35)] !pt-[calc(var(--tr-section-y)*1.2)]"
    >
      <RevealOnView>
        <div className="mx-auto max-w-2xl rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-6 py-14 text-center shadow-[var(--tr-shadow-card)] sm:px-12 sm:py-[4.25rem]">
          {finalCta.kicker ? (
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)] sm:text-[11px]">
              {finalCta.kicker}
            </p>
          ) : null}
          <h2
            className={`tr-text-h2 text-balance text-center font-extrabold tracking-[-0.035em] text-[var(--tr-text-primary)] ${finalCta.kicker ? "mt-5 sm:mt-6" : ""}`}
          >
            {finalCta.title}
          </h2>
          <p className="relative mx-auto mt-9 max-w-md overflow-hidden rounded-[var(--tr-radius-lg)] border border-[color:var(--trainr-accent-line)] bg-gradient-to-br from-[rgba(255,122,0,0.16)] via-[rgba(255,122,0,0.07)] to-transparent px-4 py-3.5 text-center text-[clamp(1.1rem,3.2vw,1.55rem)] font-extrabold leading-tight tracking-[-0.034em] text-trainr-accent shadow-[0_0_48px_-10px_rgba(255,122,0,0.5),inset_0_1px_0_rgba(255,255,255,0.07)] sm:mt-10 sm:px-5 sm:py-4">
            <span className="relative z-[1]">{finalCta.iconicLine}</span>
          </p>
          {finalCta.subtitle ? (
            <p className="mx-auto mt-4 max-w-md text-pretty text-[clamp(1.125rem,2.8vw,1.375rem)] font-bold leading-snug tracking-tight text-trainr-accent sm:mt-5">
              {finalCta.subtitle}
            </p>
          ) : null}
          {finalCta.note ? (
            <p className="mx-auto mt-5 max-w-sm text-pretty text-[0.9375rem] font-medium leading-snug text-[var(--tr-text-secondary)] sm:mt-6">
              {finalCta.note}
            </p>
          ) : null}
          <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center">
            <a
              href={whatsAppHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-[var(--tr-radius-lg)] bg-trainr-accent px-8 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_32px_-8px_rgba(255,122,0,0.4)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_16px_40px_-8px_rgba(255,122,0,0.48)] active:scale-[0.98]"
            >
              Pedir presupuesto por WhatsApp
            </a>
            <a
              href={finalCta.secondaryHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-transparent px-8 text-[0.875rem] font-semibold text-[var(--tr-text-primary)] transition-[background-color,border-color] duration-200 hover:border-[color:var(--trainr-accent-line)] hover:bg-white/[0.03]"
            >
              {finalCta.secondaryLabel}
            </a>
          </div>
        </div>
      </RevealOnView>
    </Section>
  );
}
