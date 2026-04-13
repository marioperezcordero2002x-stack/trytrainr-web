import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { howItWorks } = trainrProduct;

export function HowItWorksSection() {
  return (
    <Section
      id="how-trainr-works"
      tone="subtle"
      spacing="default"
      aria-labelledby="how-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.02)]"
    >
      <div className="max-w-3xl">
        <RevealOnView>
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2
            id="how-heading"
            className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
          >
            {howItWorks.title}
          </h2>
        </RevealOnView>
      </div>

      <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">
        {howItWorks.steps.map((step, i) => (
          <RevealOnView key={step.title} delayMs={i * 50}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-card)] transition-[border-color,box-shadow] duration-200 sm:p-6 sm:pb-7 hover:border-[var(--tr-border-medium)]">
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-trainr-accent opacity-90"
                aria-hidden
              />
              <span
                className="font-mono text-[10px] font-semibold text-[var(--tr-text-faint)]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-[var(--tr-text-primary)] sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty text-[0.875rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-[0.9375rem]">
                {step.body}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
