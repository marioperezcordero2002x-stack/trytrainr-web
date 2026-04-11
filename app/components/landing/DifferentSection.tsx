import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { differentiators } = trainrProduct;

export function DifferentSection() {
  return (
    <Section
      id="different"
      tone="band"
      spacing="default"
      aria-labelledby="different-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{differentiators.eyebrow}</Eyebrow>
        <h2
          id="different-heading"
          className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
        >
          {differentiators.title}
        </h2>
        <p className="tr-text-lead mt-5 max-w-2xl text-pretty">
          {differentiators.lead}
        </p>
      </RevealOnView>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14">
        {differentiators.points.map((point, i) => (
          <RevealOnView key={point.title} delayMs={i * 45}>
            <div className="h-full rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-inset)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--tr-border-medium)] sm:p-6">
              <div className="mb-3 h-px w-10 bg-trainr-accent/80" />
              <h3 className="text-base font-semibold tracking-tight text-[var(--tr-text-primary)]">
                {point.title}
              </h3>
              <p className="tr-text-body-sm mt-2 text-pretty text-[var(--tr-text-secondary)]">
                {point.body}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
