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
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*0.55)] sm:!py-[calc(var(--tr-section-y)*0.65)]"
      aria-labelledby="value-heading"
    >
      <h2 id="value-heading" className="sr-only">
        Qué te aporta Trainr cada día
      </h2>
      <RevealOnView>
        <div className="overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-inset)]">
          <div className="grid divide-y divide-[var(--tr-border)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {quickValue.items.map((item, i) => (
              <div
                key={item.title}
                className="px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9"
              >
                <p
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[var(--tr-text-primary)] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.875rem] font-medium leading-relaxed text-[var(--tr-text-secondary)] sm:text-[0.9375rem]">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnView>
    </Section>
  );
}
