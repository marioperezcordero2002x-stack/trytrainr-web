import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { premiumFeel } = trainrProduct;

export function PremiumFeelSection() {
  return (
    <Section
      id="premium-feel"
      tone="band"
      spacing="default"
      aria-labelledby="premium-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.05)] sm:!py-[calc(var(--tr-section-y)*1.12)]"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{premiumFeel.eyebrow}</Eyebrow>
        <h2
          id="premium-heading"
          className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
        >
          {premiumFeel.title}
        </h2>
        <p className="tr-text-lead mt-5 max-w-2xl text-pretty text-[var(--tr-text-secondary)]">
          {premiumFeel.lead}
        </p>
      </RevealOnView>

      <div className="mt-11 grid gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14">
        {premiumFeel.points.map((point, i) => (
          <RevealOnView key={point.title} delayMs={i * 40}>
            <div className="flex h-full gap-4 rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-inset)] sm:p-6">
              <span
                className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-trainr-accent shadow-[0_0_10px_rgba(255,122,0,0.35)]"
                aria-hidden
              />
              <div>
                <h3 className="text-[0.9375rem] font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-base">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-pretty text-[0.8125rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-sm">
                  {point.body}
                </p>
              </div>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
