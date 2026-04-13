import {
  SCREENSHOT_ALT,
  SCREENSHOT_TRAINING,
} from "../../content/app-screenshots";
import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Container } from "../system/Container";
import { Eyebrow } from "../system/Eyebrow";
import { IphoneScreenshot } from "./IphoneScreenshot";

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

      <Container className="relative flex flex-1 flex-col justify-center py-14 sm:py-[4.25rem] lg:py-20">
        <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
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

            <RevealOnView delayMs={35} className="mt-7 sm:mt-8">
              <h1
                id="hero-heading"
                className="max-w-[19rem] text-balance text-[var(--tr-text-primary)] min-[400px]:max-w-[26rem] sm:max-w-2xl lg:max-w-[34rem]"
              >
                <span className="tr-text-display block leading-[1.02]">
                  {hero.headline}
                </span>
              </h1>
            </RevealOnView>

            <RevealOnView delayMs={42} className="mt-6 max-w-xl sm:mt-7 lg:max-w-[26rem]">
              <p className="relative overflow-hidden rounded-[var(--tr-radius-lg)] border border-[color:var(--trainr-accent-line)] bg-gradient-to-br from-[rgba(255,122,0,0.14)] via-[rgba(255,122,0,0.06)] to-transparent px-4 py-3.5 text-pretty text-[clamp(1.05rem,3.4vw,1.5rem)] font-extrabold leading-[1.18] tracking-[-0.032em] text-trainr-accent shadow-[0_0_40px_-10px_rgba(255,122,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-5 sm:py-4">
                <span className="relative z-[1]">{hero.killerLine}</span>
              </p>
            </RevealOnView>

            <RevealOnView delayMs={50} className="mt-5 max-w-xl sm:mt-6 lg:max-w-2xl">
              <p className="text-pretty text-[clamp(1.08rem,3.2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-trainr-accent">
                {hero.subhead}
              </p>
            </RevealOnView>

            <RevealOnView delayMs={65} className="mt-7 max-w-md sm:mt-8">
              <div className="border-l-2 border-trainr-accent/50 pl-4">
                <ul className="space-y-1 text-[0.875rem] font-medium leading-snug text-[var(--tr-text-tertiary)] sm:text-[0.9375rem]">
                  {hero.tensionPains.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-3 text-[0.9375rem] font-semibold leading-snug text-trainr-accent sm:text-[1rem]">
                  {hero.tensionResolve}
                </p>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={85} className="mt-8 sm:mt-10">
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
                href={`mailto:${supportEmail}?subject=${encodeURIComponent("Trainr – acceso anticipado")}`}
                className="mt-4 inline-flex text-[0.8125rem] font-medium text-[var(--tr-text-tertiary)] underline decoration-[var(--tr-border-strong)] underline-offset-[5px] transition-colors hover:text-[var(--tr-text-primary)]"
              >
                {hero.tertiaryCta}
              </a>
            </RevealOnView>
          </div>

          <div className="flex justify-center lg:col-span-6 xl:col-span-6">
            <RevealOnView delayMs={90} className="w-full">
              <IphoneScreenshot
                src={SCREENSHOT_TRAINING}
                alt={SCREENSHOT_ALT.training}
                size="hero"
                priority
              />
            </RevealOnView>
          </div>
        </div>
      </Container>
    </section>
  );
}
