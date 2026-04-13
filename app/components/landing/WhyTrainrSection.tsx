import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { whyTrainr } = trainrProduct;

export function WhyTrainrSection() {
  return (
    <Section
      id="why-trainr"
      tone="band"
      spacing="default"
      aria-labelledby="why-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{whyTrainr.eyebrow}</Eyebrow>
        <h2
          id="why-heading"
          className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
        >
          {whyTrainr.title}
        </h2>
        <p className="tr-text-lead mt-5 max-w-2xl text-pretty text-[var(--tr-text-secondary)]">
          {whyTrainr.lead}
        </p>
      </RevealOnView>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
        {whyTrainr.points.map((point, i) => (
          <RevealOnView key={point.title} delayMs={i * 50}>
            <div className="h-full rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-card)] sm:p-6">
              <h3 className="text-[0.9375rem] font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-base">
                {point.title}
              </h3>
              <p className="mt-2 text-pretty text-[0.8125rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-sm sm:leading-relaxed">
                {point.body}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
