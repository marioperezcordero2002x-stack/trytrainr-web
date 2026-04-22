import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { examplesAndSectors } = trainrProduct;

export function BundleSection() {
  return (
    <Section
      id="sectores"
      tone="subtle"
      spacing="default"
      aria-labelledby="sectors-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.22)]"
    >
      <RevealOnView className="mx-auto max-w-3xl text-center">
        <Eyebrow className="text-center">{examplesAndSectors.eyebrow}</Eyebrow>
        <h2
          id="sectors-heading"
          className="mt-6 text-balance text-[var(--tr-text-primary)] text-[clamp(1.75rem,4.5vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.035em] sm:mt-7"
        >
          {examplesAndSectors.title}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-[1.0625rem] font-semibold leading-snug text-[var(--tr-text-secondary)] sm:mt-8 sm:text-xl">
          {examplesAndSectors.lead}
        </p>
      </RevealOnView>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:mt-16">
        {examplesAndSectors.exampleCards.map((card, i) => (
          <RevealOnView key={card.title} delayMs={i * 55}>
            <div className="flex h-full flex-col rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-card)] sm:p-6">
              <div className="mb-4 h-px w-10 bg-trainr-accent/85" />
              <h3 className="text-base font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-[1.0625rem]">
                {card.title}
              </h3>
              <p className="mt-2.5 text-pretty text-[0.875rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-[0.9375rem]">
                {card.line}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>

      <div className="mt-10 sm:mt-12">
        <RevealOnView>
          <div className="mx-auto max-w-5xl rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-6 shadow-[var(--tr-shadow-inset)] sm:p-7">
            <p className="tr-text-overline">Sectores</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {examplesAndSectors.sectors.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border)] bg-white/[0.02] px-3 py-1.5 text-[0.8125rem] font-semibold tracking-tight text-[var(--tr-text-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}
