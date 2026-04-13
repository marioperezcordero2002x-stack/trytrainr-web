import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Section } from "../system/Section";

const { quickValue } = trainrProduct;

export function QuickValueSection() {
  return (
    <Section
      id="value"
      tone="canvas"
      spacing="default"
      className="border-b border-[var(--tr-border)] !pt-[calc(var(--tr-section-y)*0.75)] !pb-[calc(var(--tr-section-y)*1.05)] sm:!pt-[calc(var(--tr-section-y)*0.85)] sm:!pb-[calc(var(--tr-section-y)*1.15)]"
      aria-labelledby="value-heading"
    >
      <h2 id="value-heading" className="sr-only">
        What you get every day
      </h2>
      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {quickValue.items.map((item, i) => (
          <RevealOnView key={item.title} delayMs={i * 45}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] px-5 py-7 shadow-[var(--tr-shadow-card)] sm:px-6 sm:py-9">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-trainr-accent/90 via-trainr-accent/40 to-transparent"
                aria-hidden
              />
              <span
                className="font-mono text-[10px] font-bold text-[var(--tr-text-faint)]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="tr-text-h3 mt-5 text-balance text-[var(--tr-text-primary)] sm:mt-6 sm:text-[length:var(--tr-text-h2)] sm:leading-tight sm:tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] font-medium leading-snug text-[var(--tr-text-secondary)] sm:mt-4 sm:text-base sm:leading-relaxed">
                {item.line}
              </p>
            </div>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
