import type { ReactNode } from "react";
import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";
import {
  ShowcaseLiveChat,
  ShowcaseLiveFeed,
  ShowcaseLiveProfile,
} from "./ShowcaseLivePreviews";

const showcase = trainrProduct.showcase;
const [deviceA, deviceB, deviceC] = showcase.devices;

type ChromeVariant = "spotlight" | "satellite" | "mobileSatellite";

function PhoneChrome({
  children,
  className = "",
  frameClassName = "",
  variant = "spotlight" as ChromeVariant,
}: {
  children: ReactNode;
  className?: string;
  frameClassName?: string;
  variant?: ChromeVariant;
}) {
  const outer =
    variant === "spotlight"
      ? "rounded-[2.25rem] p-[11px] sm:rounded-[2.4rem] sm:p-[12px]"
      : variant === "satellite"
        ? "rounded-[2rem] p-[9px] sm:rounded-[2.1rem] sm:p-[10px]"
        : "rounded-[1.85rem] p-[8px]";

  const inner =
    variant === "spotlight"
      ? "rounded-[1.65rem] sm:rounded-[1.8rem]"
      : variant === "satellite"
        ? "rounded-[1.55rem] sm:rounded-[1.62rem]"
        : "rounded-[1.45rem]";

  const statusH = variant === "spotlight" ? "h-11 sm:h-12" : "h-10 sm:h-11";
  const island =
    variant === "spotlight"
      ? "top-2 h-[28px] w-[86px] sm:top-2.5 sm:h-[30px] sm:w-[92px]"
      : "top-1.5 h-[26px] w-[80px] sm:top-2 sm:h-[27px] sm:w-[84px]";

  return (
    <div
      className={`relative ${outer} shadow-[var(--tr-shadow-device)] ${frameClassName}`.trim()}
      style={{
        background:
          "linear-gradient(155deg, #2c2c34 0%, #18181d 42%, #0e0e12 100%)",
      }}
    >
      <div
        className={`relative overflow-hidden bg-[#050505] ring-1 ring-black/55 ${inner} ${className}`.trim()}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-transparent"
          aria-hidden
        />
        <div
          className={`relative z-10 flex ${statusH} items-end justify-between px-4 pb-0.5 sm:px-5`}
        >
          <span
            className={`font-mono font-semibold tabular-nums text-[var(--tr-text-tertiary)] ${variant === "spotlight" ? "text-[11px] sm:text-[12px]" : "text-[10px] sm:text-[11px]"}`}
          >
            9:41
          </span>
          <div
            className={`absolute left-1/2 ${island} -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.1]`}
          />
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

function DeviceGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-[2.5rem] bg-[var(--trainr-accent-glow)] blur-3xl ${className}`.trim()}
      aria-hidden
    />
  );
}

const spotlightShadow =
  "shadow-[0_48px_100px_-36px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.04)]";
const satelliteShadow =
  "shadow-[0_32px_64px_-28px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)]";

export function ShowcaseSection() {
  return (
    <Section
      id="app"
      tone="canvas"
      spacing="default"
      aria-labelledby="showcase-heading"
      className="relative overflow-hidden !py-[calc(var(--tr-section-y)*1.2)] sm:!py-[calc(var(--tr-section-y)*1.4)] lg:!py-[calc(var(--tr-section-y)*1.7)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-tr-grid bg-tr-grid-section opacity-[0.2]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_42%,rgba(255,122,0,0.07),transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] h-[min(560px,72vh)] w-[min(960px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--trainr-accent-glow)] blur-[130px] opacity-[0.85]"
        aria-hidden
      />

      <div className="relative flex flex-col gap-14 sm:gap-16 lg:gap-20 xl:gap-24">
        <RevealOnView className="mx-auto max-w-xl text-center lg:max-w-2xl">
          <Eyebrow>{showcase.eyebrow}</Eyebrow>
          <h2
            id="showcase-heading"
            className="tr-text-h2 mt-4 text-balance text-[var(--tr-text-primary)] sm:mt-5 lg:text-[length:var(--tr-text-h1)] lg:leading-[1.08] lg:tracking-[-0.04em]"
          >
            {showcase.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-snug text-[var(--tr-text-secondary)] sm:mt-5 sm:text-lg sm:leading-relaxed">
            {showcase.lead}
          </p>
          <ul
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3"
            aria-label="Capas principales de la app"
          >
            {[deviceA, deviceB, deviceC].map((d) => (
              <li key={d.label}>
                <span
                  className="inline-flex items-center gap-2 rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-3 py-1.5 text-left shadow-[var(--tr-shadow-inset)] sm:px-4 sm:py-2"
                  title={d.caption}
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-trainr-accent sm:text-[11px]">
                    {d.label}
                  </span>
                  <span className="hidden text-[11px] text-[var(--tr-text-tertiary)] sm:inline">
                    {d.caption}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </RevealOnView>

        <RevealOnView delayMs={50} className="relative w-full">
          {/* ——— Mobile: escenario con solapamiento ——— */}
          <div className="relative mx-auto w-full lg:hidden">
            <div
              className="pointer-events-none absolute inset-x-0 top-[18%] h-[48%] rounded-[var(--tr-radius-2xl)] border border-[var(--tr-border)] bg-gradient-to-b from-[var(--tr-surface-1)]/35 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-[12%] bottom-[6%] h-28 rounded-[100%] bg-black/40 blur-2xl"
              aria-hidden
            />

            <div className="relative flex min-h-[min(68vh,620px)] flex-col items-center justify-end pb-8 pt-4 sm:min-h-[min(64vh,580px)] sm:pb-10">
              <div className="absolute bottom-[10%] left-[0%] z-20 w-[38%] max-w-[168px] sm:left-[2%] sm:max-w-[178px]">
                <DeviceGlow className="-inset-5 opacity-[0.72]" />
                <PhoneChrome
                  variant="mobileSatellite"
                  frameClassName={satelliteShadow}
                >
                  <ShowcaseLiveProfile dense />
                </PhoneChrome>
                <p className="mt-2 text-center font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)] sm:text-[9px]">
                  {deviceB.label}
                </p>
              </div>

              <div className="absolute bottom-[10%] right-[0%] z-20 w-[38%] max-w-[168px] sm:right-[2%] sm:max-w-[178px]">
                <DeviceGlow className="-inset-5 opacity-[0.72]" />
                <PhoneChrome
                  variant="mobileSatellite"
                  frameClassName={satelliteShadow}
                >
                  <ShowcaseLiveChat dense />
                </PhoneChrome>
                <p className="mt-2 text-center font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--tr-text-faint)] sm:text-[9px]">
                  {deviceC.label}
                </p>
              </div>

              <div className="relative z-30 w-[min(86vw,360px)] sm:w-[min(82vw,380px)]">
                <DeviceGlow className="-inset-12 opacity-100" />
                <p className="mb-3 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--tr-text-faint)] sm:text-[10px]">
                  {deviceA.label}
                </p>
                <PhoneChrome variant="spotlight" frameClassName={spotlightShadow}>
                  <ShowcaseLiveFeed spotlight />
                </PhoneChrome>
              </div>
            </div>
          </div>

          {/* ——— Desktop: showcase amplio ——— */}
          <div className="relative mx-auto hidden min-h-[min(76vh,820px)] w-full max-w-[1100px] lg:block">
            <div
              className="pointer-events-none absolute inset-x-[2%] top-[10%] bottom-[12%] rounded-[var(--tr-radius-2xl)] border border-[var(--tr-border)] bg-gradient-to-b from-[var(--tr-surface-1)]/45 via-[var(--tr-surface-0)]/20 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-[18%] bottom-[7%] h-32 rounded-[100%] bg-black/45 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[94%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[calc(var(--tr-radius-2xl)+12px)] ring-1 ring-white/[0.03]"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-[min(76vh,820px)] items-center justify-center py-10 xl:py-14">
              <div className="relative w-[min(100%,400px)] xl:w-[min(100%,424px)]">
                <DeviceGlow className="-inset-14 opacity-100" />
                <p className="mb-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--tr-text-faint)] xl:text-[11px]">
                  {deviceA.label}
                </p>
                <PhoneChrome variant="spotlight" frameClassName={spotlightShadow}>
                  <ShowcaseLiveFeed spotlight />
                </PhoneChrome>
              </div>
            </div>

            <div
              className="absolute left-0 top-[6%] z-20 w-[min(248px,24vw)] transition-transform duration-300 xl:left-2 xl:w-[268px] xl:top-[8%] hover:-translate-y-1"
              style={{ transform: "rotate(-3deg)" }}
            >
              <DeviceGlow className="-inset-6 opacity-80" />
              <PhoneChrome variant="satellite" frameClassName={satelliteShadow}>
                <ShowcaseLiveProfile />
              </PhoneChrome>
              <p className="mt-3 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--tr-text-faint)] xl:text-[10px]">
                {deviceB.label} · {deviceB.caption}
              </p>
            </div>

            <div
              className="absolute right-0 bottom-[10%] z-20 w-[min(248px,24vw)] transition-transform duration-300 xl:bottom-[12%] xl:right-2 xl:w-[268px] hover:-translate-y-1"
              style={{ transform: "rotate(2.5deg)" }}
            >
              <DeviceGlow className="-inset-6 opacity-80" />
              <PhoneChrome variant="satellite" frameClassName={satelliteShadow}>
                <ShowcaseLiveChat />
              </PhoneChrome>
              <p className="mt-3 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--tr-text-faint)] xl:text-[10px]">
                {deviceC.label} · {deviceC.caption}
              </p>
            </div>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}
