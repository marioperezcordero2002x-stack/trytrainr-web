import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { proof } = trainrProduct;

export function CoachesSection() {
  return (
    <Section
      id="proyectos"
      tone="band"
      spacing="default"
      aria-labelledby="proof-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.62)] sm:!py-[calc(var(--tr-section-y)*1.78)]"
    >
      <RevealOnView className="mx-auto max-w-4xl text-center lg:text-left">
        <Eyebrow className="lg:text-left">{proof.eyebrow}</Eyebrow>
        <h2
          id="proof-heading"
          className="mx-auto mt-7 max-w-4xl text-balance text-[var(--tr-text-primary)] text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] sm:mt-8 lg:mx-0"
        >
          {proof.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-[1.125rem] font-semibold leading-snug text-[var(--tr-text-secondary)] sm:mt-6 sm:text-xl lg:mx-0">
          {proof.lead}
        </p>
      </RevealOnView>

      <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-3">
        {proof.projects.map((p, i) => (
          <RevealOnView key={p.name} delayMs={i * 55}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-card)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-[var(--trainr-accent-soft)] opacity-70" />
              <div className="relative p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[1.0625rem] font-semibold tracking-tight text-[var(--tr-text-primary)]">
                    {p.name}
                  </p>
                  <span className="inline-flex items-center rounded-[var(--tr-radius-pill)] border border-[var(--tr-border-medium)] bg-white/[0.02] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--tr-text-secondary)]">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-4 text-pretty text-[0.9375rem] font-medium leading-relaxed text-[var(--tr-text-secondary)]">
                  {p.what}
                </p>
                <div className="mt-5 rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-white/[0.02] px-4 py-3 shadow-[var(--tr-shadow-inset)]">
                  <p className="text-[0.8125rem] font-semibold text-[var(--tr-text-tertiary)]">
                    Resultado
                  </p>
                  <p className="mt-1 text-[0.875rem] font-semibold text-trainr-accent">
                    {p.outcome}
                  </p>
                </div>
              </div>
            </article>
          </RevealOnView>
        ))}
      </div>

      <div className="mt-14 sm:mt-16">
        <RevealOnView>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-inset)]">
            <div className="grid gap-0 divide-y divide-[var(--tr-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-6 sm:p-7">
                <p className="tr-text-overline">{proof.testimonialsShell.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--tr-text-primary)] sm:text-xl">
                  {proof.testimonialsShell.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--tr-text-secondary)]">
                  {proof.testimonialsShell.note}
                </p>
              </div>
              <TestimonialShell />
              <TestimonialShell />
            </div>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}

function TestimonialShell() {
  return (
    <div className="flex flex-col gap-4 p-6 sm:p-7">
      <div className="h-2 w-12 rounded-full bg-white/[0.06]" aria-hidden />
      <div className="space-y-2.5">
        <div className="h-3 w-[92%] rounded bg-white/[0.05]" aria-hidden />
        <div className="h-3 w-[86%] rounded bg-white/[0.05]" aria-hidden />
        <div className="h-3 w-[72%] rounded bg-white/[0.05]" aria-hidden />
      </div>
      <div className="mt-auto flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-full bg-white/[0.06]"
          aria-hidden
        />
        <div className="space-y-2">
          <div className="h-2.5 w-28 rounded bg-white/[0.05]" aria-hidden />
          <div className="h-2.5 w-20 rounded bg-white/[0.04]" aria-hidden />
        </div>
      </div>
    </div>
  );
}
