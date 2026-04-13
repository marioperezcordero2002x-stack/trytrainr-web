import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Section } from "../system/Section";

const { finalCta, hero, supportEmail } = trainrProduct;

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
          {finalCta.kicker ? (
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)] sm:text-[11px]">
              {finalCta.kicker}
            </p>
          ) : null}
          <h2
            className={`tr-text-h2 text-balance font-extrabold tracking-[-0.03em] text-[var(--tr-text-primary)] ${finalCta.kicker ? "mt-5 sm:mt-6" : ""}`}
          >
            {finalCta.title}
          </h2>
          {finalCta.subtitle ? (
            <p className="mx-auto mt-4 max-w-md text-pretty text-[clamp(1.125rem,2.8vw,1.375rem)] font-bold leading-snug tracking-tight text-trainr-accent sm:mt-5">
              {finalCta.subtitle}
            </p>
          ) : null}
          {finalCta.lead ? (
            <p className="tr-text-lead mx-auto mt-5 max-w-lg text-pretty font-medium text-[var(--tr-text-secondary)]">
              {finalCta.lead}
            </p>
          ) : null}
          <p className="relative mx-auto mt-6 max-w-lg overflow-hidden rounded-[var(--tr-radius-lg)] border border-[color:var(--trainr-accent-line)] bg-gradient-to-br from-[rgba(255,122,0,0.12)] via-[rgba(255,122,0,0.05)] to-transparent px-4 py-3 text-pretty text-center text-[clamp(0.98rem,2.8vw,1.25rem)] font-extrabold leading-[1.2] tracking-[-0.03em] text-trainr-accent shadow-[0_0_32px_-12px_rgba(255,122,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] sm:mt-7 sm:px-5 sm:py-3.5">
            <span className="relative z-[1]">{hero.killerLine}</span>
          </p>
          <p className="tr-text-body-sm mx-auto mt-4 max-w-md text-[var(--tr-text-tertiary)] sm:mt-5">
            {finalCta.note}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
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
