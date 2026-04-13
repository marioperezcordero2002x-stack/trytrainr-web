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
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.22)]"
    >
      <RevealOnView className="mx-auto max-w-3xl text-center">
        <Eyebrow className="text-center">{bundle.eyebrow}</Eyebrow>
        <h2
          id="bundle-heading"
          className="mt-5 text-balance text-[var(--tr-text-primary)] text-[clamp(1.75rem,4.5vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.035em] sm:mt-6"
        >
          {bundle.title}
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-[1.125rem] font-semibold leading-snug text-[var(--tr-text-secondary)] sm:mt-9 sm:text-xl">
          {bundle.pairLead}
        </p>
        <p className="mx-auto mt-2 max-w-lg text-[1.125rem] font-semibold leading-snug text-[var(--tr-text-primary)] sm:text-xl">
          {bundle.pairResolve}
        </p>
        <div className="mx-auto mt-9 max-w-xl text-pretty sm:mt-11">
          <p className="text-[clamp(1.125rem,3vw,1.45rem)] font-semibold leading-snug text-trainr-accent">
            {bundle.togetherIntro}
          </p>
          <p className="mt-1 text-[clamp(1.35rem,4vw,1.85rem)] font-extrabold leading-tight tracking-[-0.03em] text-trainr-accent">
            {bundle.togetherOutro}
          </p>
        </div>
        <p className="tr-text-body-sm mx-auto mt-4 max-w-md text-pretty font-medium text-[var(--tr-text-secondary)] sm:mt-5 sm:text-[0.9375rem]">
          {bundle.sublead}
        </p>
      </RevealOnView>

      <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:mt-20">
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
