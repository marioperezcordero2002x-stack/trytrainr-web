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
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.12)]"
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

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8 lg:mt-16">
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
    <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] p-7 shadow-[var(--tr-shadow-card)] sm:p-9 lg:p-10">
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
