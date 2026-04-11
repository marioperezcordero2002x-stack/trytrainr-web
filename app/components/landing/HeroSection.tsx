import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Container } from "../system/Container";
import { Eyebrow } from "../system/Eyebrow";

const { hero, hubTabs, supportEmail } = trainrProduct;

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

/** Preview alineado a FeedPostCard + TrainrAppCard: post con likes/comentarios. */
function HeroDevicePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[320px]">
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
          <div className="relative z-10 space-y-3 px-3 pb-8 pt-1">
            <p className="px-1 text-[13px] font-semibold text-[var(--tr-text-primary)]">
              Inicio
            </p>
            <div className="overflow-hidden rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-inset)]">
              <div className="flex gap-2.5 border-b border-[var(--tr-border)] px-3 py-2.5">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/[0.08]" />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold text-[var(--tr-text-primary)]">
                    Ana Ruiz
                  </p>
                  <p className="text-[11px] text-[var(--tr-text-tertiary)]">
                    @ana · 2 h
                  </p>
                </div>
              </div>
              <p className="px-3 py-2 text-[12px] leading-snug text-[var(--tr-text-secondary)]">
                Semana 3 · 4×8 sentadilla a 100 kg. RPE 7,5. Mañana tirón.
              </p>
              <div className="mx-3 mb-2 aspect-[16/10] rounded-[var(--tr-radius-sm)] bg-gradient-to-br from-zinc-800/60 to-zinc-950 ring-1 ring-[var(--tr-border)]" />
              <div className="flex gap-4 border-t border-[var(--tr-border)] px-3 py-2 text-[11px] text-[var(--tr-text-tertiary)]">
                <span>18 me gusta</span>
                <span>5 comentarios</span>
              </div>
            </div>
            <div className="rounded-[var(--tr-radius-md)] border border-dashed border-[var(--tr-border-medium)] bg-white/[0.02] py-4 text-center">
              <p className="text-[11px] font-medium text-[var(--tr-text-tertiary)]">
                Explorar · gente nueva que entrena en serio
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
      className="relative flex min-h-[min(100svh,56rem)] flex-col overflow-hidden border-b border-[var(--tr-border)] bg-[var(--tr-canvas)]"
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

      <Container className="relative flex flex-1 flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6 xl:col-span-6">
            <RevealOnView>
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
            </RevealOnView>

            <RevealOnView delayMs={35} className="mt-5 sm:mt-7">
              <h1
                id="hero-heading"
                className="tr-text-display text-balance text-[var(--tr-text-primary)]"
              >
                {hero.headline}
                <span className="mt-1 block text-trainr-accent sm:mt-2">
                  {hero.headlineAccent}
                </span>
              </h1>
            </RevealOnView>

            <RevealOnView delayMs={75} className="mt-5 max-w-xl sm:mt-6">
              <p className="tr-text-lead text-pretty leading-relaxed">
                {hero.subhead}
              </p>
            </RevealOnView>

            <RevealOnView delayMs={95} className="mt-6 sm:mt-7">
              <p className="tr-text-overline mb-2.5 text-[var(--tr-text-faint)]">
                Todo en el hub
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Pestañas del hub">
                {hubTabs.map((tab) => (
                  <li key={tab}>
                    <span className="inline-block rounded-[var(--tr-radius-pill)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-[var(--tr-text-secondary)]">
                      {tab}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealOnView>

            <RevealOnView delayMs={110} className="mt-8 sm:mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <a
                  href={hero.primaryHref}
                  className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-[var(--tr-radius-lg)] bg-trainr-accent px-7 text-[0.9375rem] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_40px_-12px_rgba(255,122,0,0.42)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_20px_48px_-12px_rgba(255,122,0,0.48)] active:scale-[0.98] sm:flex-none sm:min-w-[220px]"
                >
                  {hero.primaryCta}
                  <ChevronRight className="opacity-90 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <span className="inline-flex min-h-[52px] flex-1 cursor-default items-center justify-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-5 text-center text-[0.875rem] font-medium text-[var(--tr-text-tertiary)] sm:flex-none sm:px-6">
                  {hero.secondaryCta}
                </span>
                <a
                  href={`mailto:${supportEmail}`}
                  className="inline-flex min-h-[52px] items-center justify-center px-2 text-[0.875rem] font-medium text-[var(--tr-text-secondary)] underline decoration-[var(--tr-border-strong)] underline-offset-[6px] transition-colors hover:text-[var(--tr-text-primary)] sm:px-4"
                >
                  {hero.tertiaryCta}
                </a>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={145} className="mt-10 sm:mt-12">
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
