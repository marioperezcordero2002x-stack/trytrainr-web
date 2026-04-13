import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { coaches } = trainrProduct;

export function CoachesSection() {
  return (
    <Section
      id="coaches"
      tone="band"
      spacing="default"
      aria-labelledby="coaches-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView className="max-w-3xl">
        <Eyebrow>{coaches.eyebrow}</Eyebrow>
        <h2
          id="coaches-heading"
          className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
        >
          {coaches.title}
        </h2>
        <p className="tr-text-lead mt-5 max-w-2xl text-pretty text-[var(--tr-text-secondary)]">
          {coaches.lead}
        </p>
      </RevealOnView>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6 lg:mt-14">
        <RevealOnView delayMs={40}>
          <CoachBlock
            label={coaches.training.label}
            title={coaches.training.title}
            bullets={coaches.training.bullets}
          />
        </RevealOnView>
        <RevealOnView delayMs={80}>
          <CoachBlock
            label={coaches.nutrition.label}
            title={coaches.nutrition.title}
            bullets={coaches.nutrition.bullets}
          />
        </RevealOnView>
      </div>

      <RevealOnView delayMs={120} className="mt-8 lg:mt-10">
        <div className="relative overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] px-6 py-8 text-center shadow-[var(--tr-shadow-card)] sm:px-10 sm:py-9">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--trainr-accent-soft)]/35 via-transparent to-[var(--trainr-accent-soft)]/25"
            aria-hidden
          />
          <p className="relative tr-text-h3 font-bold tracking-tight text-[var(--tr-text-primary)]">
            {coaches.bundle.title}
          </p>
          <p className="relative mx-auto mt-3 max-w-lg text-pretty text-[0.9375rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-base">
            {coaches.bundle.body}
          </p>
        </div>
      </RevealOnView>
    </Section>
  );
}

function CoachBlock({
  label,
  title,
  bullets,
}: {
  label: string;
  title: string;
  bullets: readonly string[];
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-6 shadow-[var(--tr-shadow-card)] sm:p-8">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-trainr-accent"
        aria-hidden
      />
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-trainr-accent">
        {label}
      </p>
      <h3 className="tr-text-h3 mt-3 text-[var(--tr-text-primary)]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {bullets.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-pretty text-[0.9375rem] leading-snug text-[var(--tr-text-secondary)]"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-trainr-accent/90"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
