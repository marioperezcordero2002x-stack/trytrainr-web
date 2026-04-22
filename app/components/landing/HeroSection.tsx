import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Container } from "../system/Container";
import { Eyebrow } from "../system/Eyebrow";

const { hero, whatsApp, brand } = trainrProduct;

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  const whatsAppHref = `https://wa.me/${whatsApp.phoneE164}?text=${encodeURIComponent(
    whatsApp.prefill,
  )}`;

  return (
    <section
      className="relative flex min-h-0 flex-col overflow-hidden border-b border-[var(--tr-border)] bg-[var(--tr-canvas)] sm:min-h-[min(92svh,52rem)] lg:min-h-[min(100svh,56rem)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-tr-grid bg-tr-grid-hero opacity-[0.85]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[min(560px,90vw)] w-[min(560px,95vw)] -translate-x-1/2 rounded-full bg-[var(--trainr-accent-glow)] blur-[110px]"
        aria-hidden
      />
      <div className="tr-divider-fade absolute bottom-0 left-0 right-0 opacity-60" />

      <Container className="relative flex flex-1 flex-col justify-center py-14 sm:py-[4.25rem] lg:py-20">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7 xl:col-span-7">
            <RevealOnView>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Eyebrow>{hero.eyebrow}</Eyebrow>
                  <span
                    className="hidden text-[var(--tr-text-faint)] sm:inline"
                    aria-hidden
                  >
                    ·
                  </span>
                  <span className="font-mono text-[var(--tr-text-caption)] font-medium uppercase tracking-[0.12em] text-[var(--tr-text-tertiary)]">
                    {brand.descriptor}
                  </span>
                </div>
                <span className="inline-flex w-fit rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-secondary)] sm:ml-0">
                  {hero.trustBadge}
                </span>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={35} className="mt-7 sm:mt-8">
              <h1
                id="hero-heading"
                className="max-w-[22rem] text-balance text-[var(--tr-text-primary)] min-[400px]:max-w-[28rem] sm:max-w-2xl lg:max-w-[38rem]"
              >
                <span className="tr-text-display block leading-[1.02]">
                  {hero.headline}
                </span>
              </h1>
            </RevealOnView>

            <RevealOnView delayMs={50} className="mt-6 max-w-2xl sm:mt-7">
              <p className="text-pretty text-[clamp(1.05rem,3.1vw,1.45rem)] font-semibold leading-snug tracking-[-0.02em] text-[var(--tr-text-secondary)]">
                {hero.subhead}
              </p>
            </RevealOnView>

            <RevealOnView delayMs={70} className="mt-7 sm:mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={whatsAppHref}
                  className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[var(--tr-radius-lg)] bg-trainr-accent px-6 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_40px_-12px_rgba(255,122,0,0.42)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_20px_48px_-12px_rgba(255,122,0,0.48)] active:scale-[0.98] sm:w-auto sm:min-h-[56px] sm:min-w-[240px] sm:px-7"
                >
                  {hero.primaryCta}
                  <ChevronRight className="opacity-90 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={hero.secondaryHref}
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[var(--tr-radius-lg)] border border-[var(--tr-border-medium)] bg-transparent px-6 text-[0.875rem] font-semibold text-[var(--tr-text-primary)] shadow-[var(--tr-shadow-inset)] transition-[background-color,border-color] duration-200 hover:border-[var(--tr-border-strong)] hover:bg-[var(--tr-surface-0)] sm:w-auto sm:min-h-[56px] sm:min-w-[190px]"
                >
                  {hero.secondaryCta}
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {hero.trustLineItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border)] bg-white/[0.02] px-3 py-1.5 text-[0.75rem] font-semibold tracking-tight text-[var(--tr-text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnView>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <RevealOnView delayMs={95} className="w-full">
              <div className="relative overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-card)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[var(--trainr-accent-soft)] opacity-80" />
                <div className="relative p-6 sm:p-7">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]">
                    {hero.miniProof.title}
                  </p>
                  <div className="mt-5 grid gap-3">
                    {hero.miniProof.rows.map((row) => (
                      <div
                        key={row.k}
                        className="flex items-center justify-between gap-4 rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-white/[0.02] px-4 py-3 shadow-[var(--tr-shadow-inset)]"
                      >
                        <span className="text-[0.8125rem] font-semibold text-[var(--tr-text-tertiary)]">
                          {row.k}
                        </span>
                        <span className="text-right text-[0.875rem] font-semibold text-[var(--tr-text-primary)]">
                          {row.v}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[var(--tr-radius-lg)] border border-[color:var(--trainr-accent-line)] bg-gradient-to-br from-[rgba(255,122,0,0.16)] via-[rgba(255,122,0,0.07)] to-transparent px-4 py-4 shadow-[0_0_48px_-18px_rgba(255,122,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)]">
                    <p className="text-[0.9375rem] font-extrabold leading-tight tracking-[-0.03em] text-trainr-accent">
                      Entrega en 72h · Mobile‑first · CTA a WhatsApp
                    </p>
                    <p className="mt-1 text-[0.8125rem] font-medium leading-relaxed text-[var(--tr-text-secondary)]">
                      Sin animaciones pesadas. Sin “plantilla”. Solo lo que convierte.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnView>
          </div>
        </div>
      </Container>
    </section>
  );
}
