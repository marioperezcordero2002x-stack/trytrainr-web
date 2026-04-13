import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { bundle } = trainrProduct;

export function BundleSection() {
  return (
    <Section
      id="bundle"
      tone="subtle"
      spacing="default"
      aria-labelledby="bundle-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView className="mx-auto max-w-3xl text-center">
        <Eyebrow className="text-center">{bundle.eyebrow}</Eyebrow>
        <h2
          id="bundle-heading"
          className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
        >
          {bundle.title}
        </h2>
        <p className="tr-text-lead mx-auto mt-5 max-w-xl text-pretty text-[var(--tr-text-secondary)]">
          {bundle.lead}
        </p>
      </RevealOnView>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:mt-16">
        {bundle.points.map((point, i) => (
          <RevealOnView key={point.title} delayMs={i * 55}>
            <div className="flex h-full flex-col rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-inset)] sm:p-6">
              <div className="mb-4 h-px w-10 bg-trainr-accent/85" />
              <h3 className="text-base font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-[1.0625rem]">
                {point.title}
              </h3>
              <p className="mt-2.5 text-pretty text-[0.875rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-[0.9375rem]">
                {point.body}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
