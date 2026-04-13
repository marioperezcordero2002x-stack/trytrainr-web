import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";
import {
  IconChat,
  IconFeed,
  IconNutrition,
  IconPremium,
  IconProfile,
  IconSocial,
  IconTraining,
} from "./feature-icons";

const iconById = {
  feed: IconFeed,
  chat: IconChat,
  profile: IconProfile,
  social: IconSocial,
  training: IconTraining,
  nutrition: IconNutrition,
  premium: IconPremium,
} as const;

export function FeaturesSection() {
  const [flagship, ...rest] = trainrProduct.features;
  const intro = trainrProduct.featuresIntro;
  const aside = trainrProduct.flagshipAside;

  return (
    <Section
      id="features"
      tone="subtle"
      spacing="default"
      aria-labelledby="features-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <div className="max-w-3xl">
        <RevealOnView>
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2
            id="features-heading"
            className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
          >
            {intro.title}
          </h2>
          <p className="tr-text-lead mt-5 max-w-2xl text-pretty">
            {intro.lead}
          </p>
        </RevealOnView>
      </div>

      <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5 lg:mt-16">
        <RevealOnView>
          <FlagshipFeatureCard
            feature={flagship}
            index={0}
            aside={aside}
          />
        </RevealOnView>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {rest.map((feature, i) => (
            <RevealOnView key={feature.id} delayMs={(i + 1) * 40}>
              <FeatureCard feature={feature} index={i + 1} />
            </RevealOnView>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FlagshipFeatureCard({
  feature,
  index,
  aside,
}: {
  feature: (typeof trainrProduct.features)[number];
  index: number;
  aside: (typeof trainrProduct)["flagshipAside"];
}) {
  const Icon = iconById[feature.icon];

  return (
    <article className="group relative flex min-h-0 flex-col overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-6 shadow-[var(--tr-shadow-card)] transition-[border-color,box-shadow] duration-200 sm:p-8 lg:flex-row lg:items-stretch lg:gap-10 lg:p-10 hover:border-[var(--tr-border-medium)]">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-trainr-accent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--trainr-accent-soft)] via-transparent to-transparent opacity-50"
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col lg:max-w-lg">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--tr-radius-md)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] text-[var(--tr-text-tertiary)] transition-[border-color,color] duration-200 group-hover:border-[color:var(--trainr-accent-line)] group-hover:text-trainr-accent">
            <Icon className="shrink-0" />
          </span>
          <span
            className="font-mono text-[10px] font-semibold text-[var(--tr-text-faint)]"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="tr-text-h3 mt-6 text-[var(--tr-text-primary)]">
          {feature.title}
        </h3>
        <p className="tr-text-body-sm mt-3 text-pretty text-[var(--tr-text-secondary)]">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-8 flex flex-col justify-center rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-5 lg:mt-0 lg:min-w-[240px] lg:flex-1">
        <p className="tr-text-overline text-[var(--tr-text-tertiary)]">
          {aside.overline}
        </p>
        <p className="mt-3 text-[0.9375rem] font-semibold leading-snug text-[var(--tr-text-primary)]">
          {aside.title}
        </p>
        <p className="tr-text-body-sm mt-2 text-pretty text-[var(--tr-text-secondary)]">
          {aside.body}
        </p>
        <ul className="mt-5 space-y-2">
          {aside.bullets.map((line) => (
            <li
              key={line}
              className="flex gap-2 text-[0.8125rem] leading-snug text-[var(--tr-text-tertiary)]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-trainr-accent/80" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof trainrProduct.features)[number];
  index: number;
}) {
  const Icon = iconById[feature.icon];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-6 shadow-[var(--tr-shadow-card)] transition-[border-color,box-shadow,transform] duration-200 sm:p-7 hover:-translate-y-0.5 hover:border-[var(--tr-border-medium)] hover:shadow-[var(--tr-shadow-card-hover)]">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--tr-radius-md)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] text-[var(--tr-text-tertiary)] transition-[border-color,color] duration-200 group-hover:border-[color:var(--trainr-accent-line)] group-hover:text-trainr-accent">
          <Icon className="shrink-0" />
        </span>
        <span
          className="font-mono text-[10px] font-semibold text-[var(--tr-text-faint)]"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="tr-text-h3 mt-5 text-[var(--tr-text-primary)]">
        {feature.title}
      </h3>
      <p className="tr-text-body-sm mt-3 flex-1 text-pretty text-[var(--tr-text-secondary)]">
        {feature.description}
      </p>
    </article>
  );
}
