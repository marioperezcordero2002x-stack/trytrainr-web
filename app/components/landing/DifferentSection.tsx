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
          className="tr-text-h2 mt-4 max-w-xl text-balance text-[var(--tr-text-primary)] sm:mt-5 lg:max-w-2xl"
        >
          {differentiators.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base font-medium leading-snug text-[var(--tr-text-secondary)] sm:mt-5 sm:text-lg sm:leading-snug">
          {differentiators.lead}
        </p>
      </RevealOnView>

      <div className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12">
        {differentiators.points.map((point, i) => (
          <RevealOnView key={point.title} delayMs={i * 45}>
            <div className="h-full rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-4 shadow-[var(--tr-shadow-inset)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--tr-border-medium)] sm:p-5">
              <div className="mb-2.5 h-px w-9 bg-trainr-accent/80" />
              <h3 className="text-[0.9375rem] font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-base">
                {point.title}
              </h3>
              <p className="mt-1.5 text-pretty text-[0.8125rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-sm">
                {point.body}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
