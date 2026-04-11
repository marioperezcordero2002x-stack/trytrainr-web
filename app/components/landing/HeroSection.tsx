import { RevealOnView } from "../RevealOnView";
import { Container } from "../system/Container";
import { Eyebrow } from "../system/Eyebrow";

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

/** Preview de producto en hero: marco tipo dispositivo + Dynamic Island. */
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
            "linear-gradient(145deg, #25252c 0%, #121218 40%, #0a0a0f 100%)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[1.65rem] bg-[#050506] ring-1 ring-black/50"
          style={{ aspectRatio: "9 / 19" }}
        >
          {/* Brillo superficial */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
            aria-hidden
          />
          {/* Barra de estado */}
          <div className="relative z-10 flex h-11 items-end justify-between px-6 pb-1 pt-2">
            <span
              className="font-mono text-[11px] font-semibold tabular-nums text-zinc-500"
              aria-hidden
            >
              9:41
            </span>
            <div className="absolute left-1/2 top-2 h-[28px] w-[88px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.12]" />
            <div className="flex items-center gap-1 pr-0.5" aria-hidden>
              <div className="h-2.5 w-3 rounded-sm border border-zinc-600/80" />
            </div>
          </div>
          {/* Contenido app */}
          <div className="relative z-10 space-y-3 px-3 pb-8 pt-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-[13px] font-semibold tracking-tight text-white">
                Hoy
              </span>
              <span className="rounded-md bg-[var(--trainr-accent-soft)] px-2 py-0.5 font-mono text-[10px] font-semibold text-trainr-accent">
                Fuerza
              </span>
            </div>
            <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3 shadow-[var(--tr-shadow-inset)]">
              <div className="flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/[0.08]" />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-medium text-zinc-200">
                    Press banca · 5×5
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">
                    Serie top a 82,5 kg
                  </p>
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-[var(--tr-border)]" />
              <p className="mt-2.5 text-[11px] leading-snug text-zinc-500">
                RPE 8. Próxima sesión: miércoles.
              </p>
            </div>
            <div className="rounded-[var(--tr-radius-md)] border border-dashed border-[var(--tr-border-medium)] bg-white/[0.02] px-3 py-6 text-center">
              <p className="text-[11px] font-medium text-zinc-600">
                + Registrar entreno
              </p>
            </div>
            <div className="flex items-center gap-2 px-1">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full w-[72%] rounded-full bg-trainr-accent/85"
                  style={{
                    boxShadow: "0 0 12px rgba(232, 87, 32, 0.25)",
                  }}
                />
              </div>
              <span className="font-mono text-[10px] text-zinc-600">72%</span>
            </div>
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-[28%] -translate-x-1/2 rounded-full bg-zinc-700/90" />
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
                <Eyebrow>Trainr</Eyebrow>
                <span className="hidden text-[var(--tr-text-faint)] sm:inline" aria-hidden>
                  ·
                </span>
                <span className="font-mono text-[var(--tr-text-caption)] font-medium uppercase tracking-[0.12em] text-[var(--tr-text-tertiary)]">
                  trytrainr.com
                </span>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={35} className="mt-6 sm:mt-8">
              <h1
                id="hero-heading"
                className="tr-text-display text-balance text-[var(--tr-text-primary)]"
              >
                El estándar social
                <span className="block text-[var(--tr-text-secondary)]">
                  del entreno serio.
                </span>
              </h1>
            </RevealOnView>

            <RevealOnView delayMs={75} className="mt-6 max-w-xl sm:mt-7">
              <p className="tr-text-lead text-pretty">
                Feed, mensajes y registro de sesiones en un solo producto.
                Interfaz oscura, navegación directa y acento naranja solo donde
                aporta claridad — no donde distrae.
              </p>
            </RevealOnView>

            <RevealOnView delayMs={110} className="mt-8 sm:mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <a
                  href="#about"
                  className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-[var(--tr-radius-pill)] bg-trainr-accent px-7 text-[0.9375rem] font-semibold text-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_-12px_rgba(232,87,32,0.45)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--trainr-accent-hover)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_48px_-12px_rgba(232,87,32,0.5)] active:scale-[0.98] sm:flex-none sm:min-w-[200px]"
                >
                  Ver el producto
                  <ChevronRight className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <span className="inline-flex min-h-[52px] flex-1 cursor-default items-center justify-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-5 text-center text-[0.875rem] font-medium text-[var(--tr-text-tertiary)] sm:flex-none sm:px-6">
                  App Store · en curso
                </span>
                <a
                  href="mailto:support@trytrainr.com"
                  className="inline-flex min-h-[52px] items-center justify-center px-2 text-[0.875rem] font-medium text-[var(--tr-text-secondary)] underline decoration-[var(--tr-border-strong)] underline-offset-[6px] transition-colors hover:text-[var(--tr-text-primary)] sm:px-4"
                >
                  Escríbenos
                </a>
              </div>
            </RevealOnView>

            <RevealOnView delayMs={145} className="mt-10 sm:mt-12">
              <div className="tr-divider-fade mb-6 sm:mb-8" />
              <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {[
                  { k: "Cobertura", v: "iOS primero" },
                  { k: "Enfoque", v: "Entreno, no viralidad" },
                  { k: "Contacto", v: "support@trytrainr.com" },
                ].map((row) => (
                  <li
                    key={row.k}
                    className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] px-4 py-3 shadow-[var(--tr-shadow-inset)]"
                  >
                    <p className="tr-text-overline">{row.k}</p>
                    <p className="mt-1 text-[0.8125rem] font-medium text-zinc-300">
                      {row.v}
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
