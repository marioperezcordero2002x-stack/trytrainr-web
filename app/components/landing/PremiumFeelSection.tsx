import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { pricing, whatsApp } = trainrProduct;

export function PremiumFeelSection() {
  const whatsAppHref = `https://wa.me/${whatsApp.phoneE164}?text=${encodeURIComponent(
    whatsApp.prefill,
  )}`;

  return (
    <Section
      id="precio"
      tone="band"
      spacing="default"
      aria-labelledby="pricing-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.12)] sm:!py-[calc(var(--tr-section-y)*1.22)]"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <h2
          id="pricing-heading"
          className="tr-text-h2 mt-6 text-balance text-[var(--tr-text-primary)] sm:mt-7"
        >
          {pricing.title}
        </h2>
        <p className="tr-text-lead mt-6 max-w-2xl text-pretty text-[var(--tr-text-secondary)] sm:mt-7">
          {pricing.lead}
        </p>
      </RevealOnView>

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <RevealOnView className="lg:col-span-7">
          <div className="overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-card)]">
            <div className="border-b border-[var(--tr-border)] p-6 sm:p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]">
                {pricing.priceFrom}
              </p>
              <div className="mt-3 flex items-end gap-3">
                <p className="text-[clamp(2.2rem,6vw,3.25rem)] font-extrabold leading-none tracking-[-0.05em] text-[var(--tr-text-primary)]">
                  {pricing.price}
                </p>
                <p className="pb-1 text-[0.9375rem] font-semibold text-[var(--tr-text-tertiary)]">
                  + según necesidades
                </p>
              </div>
              <p className="mt-5 text-pretty text-[0.9375rem] font-medium leading-relaxed text-[var(--tr-text-secondary)] sm:text-[1rem]">
                Incluye todo lo esencial para captar clientes sin ruido.
              </p>
            </div>

            <div className="p-6 sm:p-7">
              <p className="tr-text-overline">Incluye</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {pricing.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-white/[0.02] px-4 py-3 shadow-[var(--tr-shadow-inset)]"
                  >
                    <span
                      className="mt-[0.375rem] h-2 w-2 shrink-0 rounded-full bg-trainr-accent shadow-[0_0_10px_rgba(255,122,0,0.35)]"
                      aria-hidden
                    />
                    <span className="text-pretty text-[0.875rem] font-medium leading-relaxed text-[var(--tr-text-secondary)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {pricing.frictionReducers.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border)] bg-white/[0.02] px-3 py-1.5 text-[0.75rem] font-semibold tracking-tight text-[var(--tr-text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnView>

        <RevealOnView delayMs={45} className="lg:col-span-5">
          <div className="rounded-[var(--tr-radius-xl)] border border-[color:var(--trainr-accent-line)] bg-gradient-to-br from-[rgba(255,122,0,0.16)] via-[rgba(255,122,0,0.07)] to-transparent p-6 shadow-[0_0_60px_-22px_rgba(255,122,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-7">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)]">
              Cierre sin fricción
            </p>
            <p className="mt-4 text-pretty text-[1.25rem] font-extrabold leading-tight tracking-[-0.04em] text-trainr-accent">
              Precio cerrado antes de empezar. Sin sorpresas.
            </p>
            <p className="mt-3 text-pretty text-[0.9375rem] font-medium leading-relaxed text-[var(--tr-text-secondary)]">
              Si encaja, arrancamos hoy. Si no encaja, te lo digo claro.
            </p>
            <a
              href={whatsAppHref}
              className="mt-7 inline-flex min-h-[54px] w-full items-center justify-center rounded-[var(--tr-radius-lg)] bg-trainr-accent px-8 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_32px_-8px_rgba(255,122,0,0.4)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_16px_40px_-8px_rgba(255,122,0,0.48)] active:scale-[0.98]"
            >
              {pricing.cta}
            </a>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}
