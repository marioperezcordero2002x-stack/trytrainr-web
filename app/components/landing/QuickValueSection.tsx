import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { benefits } = trainrProduct;

export function QuickValueSection() {
  return (
    <Section
      id="beneficios"
      tone="subtle"
      spacing="default"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*0.68)] sm:!py-[calc(var(--tr-section-y)*0.8)]"
      aria-labelledby="benefits-heading"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{benefits.eyebrow}</Eyebrow>
        <h2
          id="benefits-heading"
          className="tr-text-h2 mt-6 text-balance text-[var(--tr-text-primary)] sm:mt-7"
        >
          {benefits.title}
        </h2>
      </RevealOnView>
      <RevealOnView>
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {benefits.items.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-5 shadow-[var(--tr-shadow-card)] transition-[border-color,box-shadow] duration-200 sm:p-6 hover:border-[var(--tr-border-medium)]"
            >
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-trainr-accent opacity-90"
                aria-hidden
              />
              <p
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-[var(--tr-text-primary)] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-[0.875rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-[0.9375rem]">
                {item.line}
              </p>
              <p className="mt-4 text-[0.8125rem] font-semibold leading-snug text-[var(--tr-text-tertiary)]">
                {item.business}
              </p>
            </div>
          ))}
        </div>
      </RevealOnView>
    </Section>
  );
}
