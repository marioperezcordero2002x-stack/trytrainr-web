import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Section } from "../system/Section";

const { finalCta, supportEmail } = trainrProduct;

export function FinalCtaSection() {
  return (
    <Section
      id="cta"
      tone="subtle"
      spacing="default"
      className="border-b border-[var(--tr-border)] !pb-[calc(var(--tr-section-y)*1.2)] !pt-[calc(var(--tr-section-y)*1.05)]"
    >
      <RevealOnView>
        <div className="mx-auto max-w-2xl rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-6 py-12 text-center shadow-[var(--tr-shadow-card)] sm:px-12 sm:py-14">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)] sm:text-[11px]">
            {finalCta.kicker}
          </p>
          <h2 className="tr-text-h2 mt-5 text-balance font-extrabold tracking-[-0.03em] text-[var(--tr-text-primary)] sm:mt-6">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-[clamp(1.125rem,2.8vw,1.375rem)] font-bold leading-snug tracking-tight text-trainr-accent sm:mt-5">
            {finalCta.subtitle}
          </p>
          <p className="tr-text-lead mx-auto mt-5 max-w-lg text-pretty font-medium text-[var(--tr-text-secondary)]">
            {finalCta.lead}
          </p>
          <p className="tr-text-body-sm mx-auto mt-3 max-w-md text-[var(--tr-text-tertiary)]">
            {finalCta.note}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:items-center">
            <a
              href={`mailto:${supportEmail}?subject=${encodeURIComponent(finalCta.mailtoSubject)}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-[var(--tr-radius-lg)] bg-trainr-accent px-8 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_32px_-8px_rgba(255,122,0,0.4)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_16px_40px_-8px_rgba(255,122,0,0.48)] active:scale-[0.98]"
            >
              {finalCta.primaryLabel}
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
