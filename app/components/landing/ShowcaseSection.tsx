import type { ReactNode } from "react";
import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const showcase = trainrProduct.showcase;
const [deviceA, deviceB, deviceC] = showcase.devices;

function PhoneChrome({
  children,
  className = "",
  frameClassName = "",
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <div
      className={`relative rounded-[2rem] p-[9px] shadow-[var(--tr-shadow-device)] ${frameClassName}`.trim()}
      style={{
        background:
          "linear-gradient(155deg, #2c2c34 0%, #18181d 42%, #0e0e12 100%)",
      }}
    >
      <div
        className={`relative overflow-hidden rounded-[1.55rem] bg-[#050505] ring-1 ring-black/55 ${className}`.trim()}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex h-10 items-end justify-between px-4 pb-0.5 sm:h-11 sm:px-5">
          <span className="font-mono text-[10px] font-semibold tabular-nums text-[var(--tr-text-tertiary)] sm:text-[11px]">
            9:41
          </span>
          <div className="absolute left-1/2 top-1.5 h-[26px] w-[80px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.1] sm:top-2 sm:h-[27px] sm:w-[84px]" />
          <div
            className="h-2 w-5 rounded-sm border border-zinc-600/65 sm:h-2.5 sm:w-6"
            aria-hidden
          />
        </div>
        <div className="relative z-10">{children}</div>
        <div className="absolute bottom-1.5 left-1/2 z-10 h-[3px] w-[26%] -translate-x-1/2 rounded-full bg-zinc-600/90 sm:bottom-2" />
      </div>
    </div>
  );
}

function ScreenFeedMain() {
  return (
    <div className="space-y-2.5 px-2.5 pb-8 pt-0.5 sm:space-y-3 sm:px-3 sm:pb-9">
      <div className="flex items-center justify-between px-0.5">
        <span className="text-[12px] font-semibold text-white sm:text-[13px]">
          Inicio
        </span>
        <span className="rounded-md bg-[var(--trainr-accent-soft)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-trainr-accent sm:text-[10px]">
          Feed
        </span>
      </div>
      <article className="rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-2.5 ring-1 ring-white/[0.04] sm:p-3">
        <div className="flex gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/[0.1] sm:h-9 sm:w-9" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-zinc-100 sm:text-[12px]">
              Laura M.
            </p>
            <p className="text-[10px] text-zinc-500 sm:text-[11px]">
              @laurafuerza · 1 h
            </p>
          </div>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-zinc-400 sm:mt-2.5 sm:text-[11px]">
          Semana 6: +2,5 kg en press banca vs. el mes pasado. Constancia.
        </p>
        <div className="mt-2 aspect-[16/10] rounded-[8px] bg-gradient-to-br from-zinc-800/85 to-zinc-950 ring-1 ring-white/[0.06] sm:mt-3 sm:rounded-[10px]">
          <div className="flex h-full flex-col justify-end p-2">
            <span className="inline-flex w-fit rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-zinc-200 sm:text-[10px]">
              82,5 kg × 5
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-3 border-t border-[var(--tr-border)] pt-2 text-[10px] text-zinc-500 sm:mt-3 sm:gap-4 sm:pt-2.5 sm:text-[11px]">
          <span className="font-semibold text-zinc-300">112</span>
          <span>14 comentarios</span>
        </div>
      </article>
    </div>
  );
}

function ScreenProfileCompact() {
  return (
    <div className="space-y-2.5 px-2.5 pb-7 pt-0.5">
      <div className="flex flex-col items-center border-b border-[var(--tr-border)] pb-3">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 ring-2 ring-[var(--tr-border-medium)]" />
        <p className="mt-2 text-[12px] font-bold text-white">Marc Vega</p>
        <p className="text-[9px] text-[var(--tr-text-tertiary)]">@marcvega</p>
        <div className="mt-2.5 flex w-full justify-center gap-4">
          <div className="text-center">
            <p className="text-[11px] font-bold text-white">48</p>
            <p className="text-[8px] text-zinc-500">posts</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] font-bold text-white">1,2k</p>
            <p className="text-[8px] text-zinc-500">seg.</p>
          </div>
        </div>
        <div className="mt-2.5 flex w-full gap-1.5">
          <div className="flex-1 rounded-md bg-trainr-accent py-1.5 text-center text-[9px] font-extrabold text-white">
            Seguir
          </div>
          <div className="flex-1 rounded-md border border-[var(--tr-border-medium)] py-1.5 text-center text-[9px] font-semibold text-zinc-200">
            Msj
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-[4px] bg-gradient-to-br from-zinc-800/85 to-zinc-950 ring-1 ring-[var(--tr-border)]"
          />
        ))}
      </div>
    </div>
  );
}

function ScreenChatCompact() {
  return (
    <div className="flex min-h-[260px] flex-col px-2.5 pb-7 pt-0 sm:min-h-[280px]">
      <div className="border-b border-[var(--tr-border)] py-1.5 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-500">
          Chats
        </p>
        <p className="text-[11px] font-bold text-white">Laura M.</p>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-1.5 py-2">
        <div className="max-w-[90%] rounded-xl rounded-bl-sm border border-[var(--tr-border)] bg-[var(--tr-surface-1)] px-2 py-1.5">
          <p className="text-[10px] leading-snug text-zinc-300">
            ¿Subimos peso la próxima serie?
          </p>
        </div>
        <div className="ml-auto max-w-[90%] rounded-xl rounded-br-sm bg-trainr-accent px-2 py-1.5">
          <p className="text-[10px] font-semibold text-white">
            Sí, +2,5 kg si RPE {"<"} 8.
          </p>
        </div>
      </div>
      <div className="flex gap-1.5 rounded-xl border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] p-1.5">
        <div className="h-7 min-w-0 flex-1 rounded-md bg-[#08080a] ring-1 ring-[var(--tr-border)]" />
        <div className="flex h-7 w-8 items-center justify-center rounded-md bg-trainr-accent text-white">
          <span className="text-sm leading-none">↑</span>
        </div>
      </div>
    </div>
  );
}

function DeviceGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-[2.5rem] bg-[var(--trainr-accent-glow)] blur-3xl ${className}`.trim()}
      aria-hidden
    />
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
        className="pointer-events-none absolute inset-0 bg-tr-grid bg-tr-grid-section opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[35%] h-[min(480px,65vh)] w-[min(880px,130vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--trainr-accent-glow)] blur-[120px] opacity-80"
        aria-hidden
      />

      <div className="relative">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">
          <RevealOnView className="lg:col-span-4 xl:col-span-4">
            <Eyebrow>{showcase.eyebrow}</Eyebrow>
            <h2
              id="showcase-heading"
              className="tr-text-h2 mt-4 text-balance text-[var(--tr-text-primary)] sm:mt-5"
            >
              {showcase.title}
            </h2>
            <p className="tr-text-lead mt-4 max-w-md text-pretty sm:mt-5">
              {showcase.lead}
            </p>
            <ol className="mt-8 space-y-4 border-l border-[var(--tr-border)] pl-5 sm:mt-10">
              {[deviceA, deviceB, deviceC].map((d, i) => (
                <li key={d.label} className="relative">
                  <span
                    className="absolute -left-5 top-0.5 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] font-mono text-[9px] font-bold text-trainr-accent"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-[var(--tr-text-primary)]">
                    {d.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--tr-text-secondary)]">
                    {d.caption}
                  </p>
                </li>
              ))}
            </ol>
          </RevealOnView>

          <RevealOnView
            delayMs={60}
            className="relative mt-12 min-h-0 lg:col-span-8 xl:col-span-8 lg:mt-0"
          >
            {/* ——— Mobile: stack principal + dos vistas ——— */}
            <div className="mx-auto max-w-md space-y-8 lg:hidden">
              <div className="relative flex justify-center">
                <DeviceGlow className="-inset-6 opacity-90" />
                <div className="relative w-full max-w-[290px]">
                  <p className="mb-3 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--tr-text-faint)]">
                    {deviceA.label}
                  </p>
                  <PhoneChrome>
                    <ScreenFeedMain />
                  </PhoneChrome>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 px-1">
                <div className="relative flex flex-col items-center">
                  <DeviceGlow className="-inset-4 opacity-70" />
                  <p className="mb-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--tr-text-faint)]">
                    {deviceB.label}
                  </p>
                  <div className="relative w-full max-w-[168px]">
                    <PhoneChrome frameClassName="shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]">
                      <ScreenProfileCompact />
                    </PhoneChrome>
                  </div>
                </div>
                <div className="relative flex flex-col items-center">
                  <DeviceGlow className="-inset-4 opacity-70" />
                  <p className="mb-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--tr-text-faint)]">
                    {deviceC.label}
                  </p>
                  <div className="relative w-full max-w-[168px]">
                    <PhoneChrome frameClassName="shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]">
                      <ScreenChatCompact />
                    </PhoneChrome>
                  </div>
                </div>
              </div>
            </div>

            {/* ——— Desktop: composición showcase ——— */}
            <div className="relative mx-auto hidden min-h-[min(540px,58vh)] max-w-[720px] lg:block xl:max-w-[760px]">
              <div
                className="pointer-events-none absolute inset-x-4 bottom-8 top-16 rounded-[var(--tr-radius-2xl)] border border-[var(--tr-border)] bg-gradient-to-b from-[var(--tr-surface-1)]/40 to-transparent opacity-90"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-[15%] bottom-6 h-24 rounded-[100%] bg-black/35 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 flex justify-center pt-6 pb-28">
                <div className="relative w-[min(100%,308px)]">
                  <DeviceGlow className="-inset-10 opacity-100" />
                  <PhoneChrome frameClassName="shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                    <ScreenFeedMain />
                  </PhoneChrome>
                  <p className="mt-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)]">
                    {deviceA.label} · {deviceA.caption}
                  </p>
                </div>
              </div>

              <div
                className="absolute left-0 top-[8%] z-20 w-[200px] transition-transform duration-300 hover:-translate-y-0.5 xl:left-2 xl:w-[218px]"
                style={{ transform: "rotate(-2.5deg)" }}
              >
                <DeviceGlow className="-inset-5 opacity-75" />
                <PhoneChrome frameClassName="shadow-[0_28px_60px_-24px_rgba(0,0,0,0.88)]">
                  <ScreenProfileCompact />
                </PhoneChrome>
                <p className="mt-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]">
                  {deviceB.label}
                </p>
              </div>

              <div
                className="absolute bottom-[6%] right-0 z-20 w-[200px] transition-transform duration-300 hover:-translate-y-0.5 xl:right-2 xl:w-[218px]"
                style={{ transform: "rotate(2deg)" }}
              >
                <DeviceGlow className="-inset-5 opacity-75" />
                <PhoneChrome frameClassName="shadow-[0_28px_60px_-24px_rgba(0,0,0,0.88)]">
                  <ScreenChatCompact />
                </PhoneChrome>
                <p className="mt-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-faint)]">
                  {deviceC.label}
                </p>
              </div>
            </div>
          </RevealOnView>
        </div>

      </div>
    </Section>
  );
}
