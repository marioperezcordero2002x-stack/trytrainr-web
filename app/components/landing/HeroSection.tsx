import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Container } from "../system/Container";
import { Eyebrow } from "../system/Eyebrow";

const { hero, supportEmail } = trainrProduct;

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

/** Preview: guidance diario (entreno + nutrición), sin feed social. */
function HeroDevicePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
      <p className="mb-3 text-right font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--tr-text-faint)] sm:text-[10px]">
        Tu día
      </p>
      <div
        className="pointer-events-none absolute -inset-10 rounded-[var(--tr-radius-2xl)] bg-[var(--trainr-accent-glow)] blur-3xl"
        aria-hidden
      />
      <div
        className="relative rounded-[2.125rem] p-[10px] shadow-[var(--tr-shadow-device)]"
        style={{
          background:
            "linear-gradient(145deg, #2a2a30 0%, #1a1a1f 40%, #121214 100%)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[1.65rem] bg-[#0a0a0a] ring-1 ring-black/50"
          style={{ aspectRatio: "9 / 19" }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative z-10 flex h-11 items-end justify-between px-5 pb-1 pt-2">
            <span className="font-mono text-[11px] font-semibold tabular-nums text-[var(--tr-text-tertiary)]">
              9:41
            </span>
            <div className="absolute left-1/2 top-2 h-[28px] w-[88px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.1]" />
            <div className="h-2.5 w-5 rounded-sm border border-[var(--tr-border-medium)]" />
          </div>
          <div className="relative z-10 space-y-2.5 px-3 pb-8 pt-1">
            <p className="px-1 text-[12px] font-semibold text-[var(--tr-text-primary)] sm:text-[13px]">
              Hoy
            </p>
            <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-2.5 shadow-[var(--tr-shadow-inset)] ring-1 ring-white/[0.04]">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-trainr-accent sm:text-[9px]">
                Training Coach
              </p>
              <p className="mt-1 text-[11px] font-bold leading-snug text-[var(--tr-text-primary)] sm:text-[12px]">
                Pierna · sentadilla prioritaria
              </p>
              <p className="mt-1 text-[10px] leading-snug text-[var(--tr-text-tertiary)]">
                4×6–8 · sube si RPE {"<"} 8
              </p>
            </div>
            <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-2.5 shadow-[var(--tr-shadow-inset)] ring-1 ring-white/[0.04]">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-trainr-accent sm:text-[9px]">
                Nutrition Coach
              </p>
              <p className="mt-1 text-[11px] font-bold leading-snug text-[var(--tr-text-primary)] sm:text-[12px]">
                Comer hoy con pierna dura
              </p>
              <p className="mt-1 text-[10px] leading-snug text-[var(--tr-text-tertiary)]">
                Carbohidrato alrededor del entreno · cena con proteína
              </p>
            </div>
            <div className="rounded-[var(--tr-radius-sm)] border border-dashed border-[var(--tr-border-medium)] bg-black/25 py-2.5 text-center">
              <p className="px-2 text-[10px] font-medium text-[var(--tr-text-secondary)]">
                Dos coaches · una decisión por día
              </p>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 z-10 h-1 w-[28%] -translate-x-1/2 rounded-full bg-zinc-600/90" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
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

      <Container className="relative flex flex-1 flex-col justify-center py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6 xl:col-span-6">
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
                    {hero.domainLine}
                  </span>
                </div>
                <span className="inline-flex w-fit rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-secondary)] sm:ml-0">
                  {hero.trustBadge}
                </span>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={35} className="mt-6 sm:mt-8">
              <h1
                id="hero-heading"
                className="max-w-[19rem] text-balance text-[var(--tr-text-primary)] min-[400px]:max-w-[22rem] sm:max-w-lg lg:max-w-xl"
              >
                <span className="tr-text-display block leading-[1.03]">
                  {hero.headline}
                </span>
                <span className="mt-3 block max-w-prose text-[clamp(1.05rem,3.2vw,1.65rem)] font-semibold leading-[1.14] tracking-[-0.03em] text-trainr-accent sm:mt-4">
                  {hero.headlineAccent}
                </span>
              </h1>
            </RevealOnView>

            <RevealOnView delayMs={75} className="mt-5 max-w-md sm:mt-6 lg:max-w-lg">
              <p className="text-[0.9375rem] leading-snug text-pretty text-[var(--tr-text-secondary)] sm:text-[1.0625rem] sm:leading-[1.55]">
                {hero.subhead}
              </p>
            </RevealOnView>

            <RevealOnView delayMs={95} className="mt-6 sm:mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={hero.primaryHref}
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[var(--tr-radius-lg)] bg-trainr-accent px-6 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_40px_-12px_rgba(255,122,0,0.42)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_20px_48px_-12px_rgba(255,122,0,0.48)] active:scale-[0.98] sm:w-auto sm:min-h-[52px] sm:min-w-[200px] sm:px-7"
                >
                  {hero.primaryCta}
                  <ChevronRight className="opacity-90 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={hero.secondaryHref}
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[var(--tr-radius-lg)] border border-[var(--tr-border-medium)] bg-transparent px-6 text-[0.875rem] font-semibold text-[var(--tr-text-primary)] shadow-[var(--tr-shadow-inset)] transition-[background-color,border-color] duration-200 hover:border-[var(--tr-border-strong)] hover:bg-[var(--tr-surface-0)] sm:w-auto sm:min-h-[52px] sm:min-w-[168px]"
                >
                  {hero.secondaryCta}
                </a>
              </div>
              <a
                href={`mailto:${supportEmail}?subject=Prioridad%20de%20acceso%20Trainr`}
                className="mt-4 inline-flex text-[0.8125rem] font-medium text-[var(--tr-text-tertiary)] underline decoration-[var(--tr-border-strong)] underline-offset-[5px] transition-colors hover:text-[var(--tr-text-primary)]"
              >
                {hero.tertiaryCta}
              </a>
            </RevealOnView>

            <RevealOnView delayMs={145} className="mt-9 sm:mt-11">
              <div className="tr-divider-fade mb-6 sm:mb-8" />
              <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {hero.specRows.map((row) => (
                  <li
                    key={row.label}
                    className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] px-4 py-3 shadow-[var(--tr-shadow-inset)]"
                  >
                    <p className="tr-text-overline">{row.label}</p>
                    <p className="mt-1 text-[0.8125rem] font-medium text-[var(--tr-text-primary)]">
                      {row.value}
                    </p>
                  </li>
                ))}
              </ul>
            </RevealOnView>
          </div>

          <div className="flex justify-center lg:col-span-6 xl:col-span-6">
            <RevealOnView delayMs={90} className="w-full">
              <HeroDevicePreview />
            </RevealOnView>
          </div>
        </div>
      </Container>
    </section>
  );
}
