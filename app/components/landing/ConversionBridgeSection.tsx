import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Section } from "../system/Section";

const { afterShowcase, supportEmail } = trainrProduct;

export function ConversionBridgeSection() {
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(afterShowcase.mailtoSubject)}`;

  return (
    <Section
      id="empieza"
      tone="canvas"
      spacing="default"
      aria-labelledby="conversion-bridge-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView>
        <div className="mx-auto max-w-xl px-1 text-center sm:max-w-2xl">
          <h2
            id="conversion-bridge-heading"
            className="tr-text-h2 text-balance text-[var(--tr-text-primary)] sm:tracking-tight"
          >
            {afterShowcase.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-[var(--tr-text-secondary)] sm:mt-5 sm:text-lg sm:leading-snug">
            {afterShowcase.subtitle}
          </p>
          <a
            href={mailto}
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[var(--tr-radius-lg)] bg-trainr-accent px-8 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_14px_36px_-10px_rgba(255,122,0,0.45)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_18px_44px_-10px_rgba(255,122,0,0.5)] active:scale-[0.98] sm:mt-10 sm:w-auto sm:min-w-[220px]"
          >
            {afterShowcase.primaryLabel}
          </a>
        </div>
      </RevealOnView>
    </Section>
  );
}
