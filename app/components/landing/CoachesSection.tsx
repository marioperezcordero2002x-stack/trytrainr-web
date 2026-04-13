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
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.28)] sm:!py-[calc(var(--tr-section-y)*1.38)]"
    >
      <RevealOnView className="max-w-4xl">
        <Eyebrow>{coaches.eyebrow}</Eyebrow>
        <h2
          id="coaches-heading"
          className="mt-5 text-balance text-[var(--tr-text-primary)] text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] sm:mt-6 lg:text-[clamp(2rem,4vw,3rem)]"
        >
          {coaches.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-[1.0625rem] font-medium leading-snug text-[var(--tr-text-secondary)] sm:mt-5 sm:text-lg">
          {coaches.lead}
        </p>
      </RevealOnView>

      <div className="mt-14 grid gap-7 lg:grid-cols-2 lg:gap-10 lg:mt-[4.5rem]">
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
    <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-0)] p-8 shadow-[var(--tr-shadow-card)] ring-1 ring-white/[0.04] sm:p-10 lg:p-11">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-trainr-accent sm:w-[5px]"
        aria-hidden
      />
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-trainr-accent sm:text-[11px]">
        {label}
      </p>
      <h3 className="mt-4 text-[1.375rem] font-bold leading-tight tracking-tight text-[var(--tr-text-primary)] sm:mt-5 sm:text-2xl lg:text-[1.75rem]">
        {title}
      </h3>
      <ul className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
        {bullets.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-pretty text-[0.9375rem] leading-relaxed text-[var(--tr-text-secondary)] sm:text-[1rem]"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-trainr-accent"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
