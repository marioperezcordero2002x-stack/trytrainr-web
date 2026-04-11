import type { ReactNode } from "react";
import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const showcase = trainrProduct.showcase;
const [deviceA, deviceB, deviceC] = showcase.devices;

function DeviceFrame({
  children,
  label,
  caption,
  className = "",
}: {
  children: ReactNode;
  label: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`.trim()}>
      <div className="relative w-full max-w-[272px]">
        <div
          className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[var(--trainr-accent-glow)] blur-3xl"
          aria-hidden
        />
        <div
          className="relative rounded-[2.125rem] p-[9px] shadow-[var(--tr-shadow-device)]"
          style={{
            background:
              "linear-gradient(150deg, #2a2a32 0%, #15151a 45%, #0c0c10 100%)",
          }}
        >
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#040405] ring-1 ring-black/60">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent"
              aria-hidden
            />
            {/* Status + island */}
            <div className="relative z-10 flex h-11 items-end justify-between px-5 pb-0.5">
              <span className="font-mono text-[11px] font-semibold tabular-nums text-zinc-500">
                9:41
              </span>
              <div className="absolute left-1/2 top-2 h-[27px] w-[84px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.1]" />
              <div
                className="h-2.5 w-6 rounded-sm border border-zinc-600/70"
                aria-hidden
              />
            </div>
            <div className="relative z-10">{children}</div>
            <div className="absolute bottom-2 left-1/2 z-10 h-1 w-[26%] -translate-x-1/2 rounded-full bg-zinc-600/85" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)]">
        {label}
      </p>
      <p className="mt-1 text-center text-[11px] text-[var(--tr-text-tertiary)]">
        {caption}
      </p>
    </div>
  );
}

function ScreenFeed() {
  return (
    <div className="space-y-3 px-3 pb-9 pt-1">
      <div className="flex items-center justify-between px-0.5">
        <span className="text-[13px] font-semibold text-white">Inicio</span>
        <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-zinc-400">
          Para ti
        </span>
      </div>
      <article className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3">
        <div className="flex gap-2.5">
          <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/[0.08]" />
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-medium text-zinc-200">@marc · Push</p>
            <p className="text-[11px] text-zinc-500">Hace 2 h</p>
          </div>
        </div>
        <div className="mt-3 aspect-[16/10] rounded-[10px] bg-gradient-to-br from-zinc-800/80 to-zinc-950 ring-1 ring-white/[0.05]">
          <div className="flex h-full flex-col justify-end p-2.5">
            <span className="inline-flex w-fit rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-zinc-300 backdrop-blur-sm">
              100 kg × 3
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 border-t border-[var(--tr-border)] pt-2.5 text-[11px] text-zinc-500">
          <span className="text-zinc-400">24 apoyo</span>
          <span>6 comentarios</span>
        </div>
      </article>
      <div className="h-10 rounded-[var(--tr-radius-sm)] bg-[var(--tr-surface-1)] ring-1 ring-[var(--tr-border)]" />
    </div>
  );
}

function ScreenChat() {
  return (
    <div className="flex min-h-[320px] flex-col px-3 pb-9 pt-0">
      <div className="border-b border-[var(--tr-border)] py-2 text-center">
        <span className="text-[13px] font-semibold text-zinc-100">
          Laura · Coach
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 py-3">
        <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-[var(--tr-border)] bg-[var(--tr-surface-1)] px-3 py-2">
          <p className="text-[12px] leading-snug text-zinc-300">
            Baja 2,5 kg en la próxima serie si el RPE se dispara.
          </p>
        </div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-trainr-accent px-3 py-2">
          <p className="text-[12px] font-semibold leading-snug text-white">
            Hecho. Última a 80 kg limpio.
          </p>
        </div>
      </div>
      <div className="flex gap-2 rounded-2xl border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] p-2">
        <div className="h-9 min-w-0 flex-1 rounded-lg bg-[#08080a] ring-1 ring-[var(--tr-border)]" />
        <div className="flex h-9 w-11 items-center justify-center rounded-lg bg-trainr-accent text-white shadow-[0_0_20px_-6px_rgba(255,122,0,0.45)]">
          <span className="text-lg font-light leading-none">↑</span>
        </div>
      </div>
    </div>
  );
}

function ScreenStats() {
  return (
    <div className="space-y-4 px-3 pb-10 pt-1">
      <div>
        <p className="text-[13px] font-semibold text-white">Planes</p>
        <p className="text-[11px] text-[var(--tr-text-tertiary)]">
          Principiante · 3 días / semana
        </p>
        <p className="mt-3 text-[11px] font-medium text-[var(--tr-text-secondary)]">
          Día 2 — Full Body B
        </p>
        <ul className="mt-2 space-y-1.5 text-[10px] leading-snug text-[var(--tr-text-tertiary)]">
          <li>· Press hombro mancuernas — 3×10-12</li>
          <li>· Remo máquina — 3×10-12</li>
          <li>· Curl femoral — 3×12</li>
        </ul>
      </div>
      <div className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-3">
        <p className="text-[10px] font-medium text-[var(--tr-text-tertiary)]">
          Ejercicios completados
        </p>
        <p className="mt-1 text-[11px] text-[var(--tr-text-secondary)]">
          Sincronizado con tu usuario en Firestore.
        </p>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <Section
      id="app"
      tone="canvas"
      spacing="default"
      aria-labelledby="showcase-heading"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-tr-grid bg-tr-grid-section opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] h-[min(520px,70vh)] w-[min(900px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--trainr-accent-glow)] blur-[130px]"
        aria-hidden
      />

      <div className="relative">
        <RevealOnView className="max-w-3xl">
          <Eyebrow>{showcase.eyebrow}</Eyebrow>
          <h2
            id="showcase-heading"
            className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
          >
            {showcase.title}
          </h2>
          <p className="tr-text-lead mt-5 max-w-2xl text-pretty">
            {showcase.lead}
          </p>
        </RevealOnView>

        <RevealOnView delayMs={70} className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)]/90 p-6 shadow-[var(--tr-shadow-lg)] backdrop-blur-md sm:p-8 lg:p-10">
            <div className="tr-divider-fade absolute left-8 right-8 top-0 opacity-80" />
            <div className="mb-8 flex flex-col gap-4 border-b border-[var(--tr-border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)]">
                  Vista previa de producto
                </p>
                <p className="mt-2 text-[0.875rem] text-[var(--tr-text-secondary)]">
                  {deviceA.caption} · {deviceB.caption} · {deviceC.caption}
                </p>
              </div>
              <div className="flex items-center gap-2" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-trainr-accent" />
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-8 xl:gap-12">
              <DeviceFrame
                label={deviceA.label}
                caption={deviceA.caption}
                className="lg:pt-0"
              >
                <ScreenFeed />
              </DeviceFrame>
              <DeviceFrame
                label={deviceB.label}
                caption={deviceB.caption}
                className="lg:translate-y-12"
              >
                <ScreenChat />
              </DeviceFrame>
              <DeviceFrame
                label={deviceC.label}
                caption={deviceC.caption}
                className="lg:pt-0"
              >
                <ScreenStats />
              </DeviceFrame>
            </div>

            {/* Base / pedestal */}
            <div
              className="pointer-events-none mx-auto mt-10 h-px max-w-md bg-gradient-to-r from-transparent via-[var(--tr-border-strong)] to-transparent lg:mt-14"
              aria-hidden
            />
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}
