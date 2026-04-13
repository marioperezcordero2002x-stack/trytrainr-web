import {
  SCREENSHOT_ALT,
  SCREENSHOT_NUTRITION,
  SCREENSHOT_TRAINING,
} from "../../content/app-screenshots";
import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";
import { IphoneScreenshot } from "./IphoneScreenshot";

const { coaches } = trainrProduct;

export function CoachesSection() {
  return (
    <Section
      id="coaches"
      tone="band"
      spacing="default"
      aria-labelledby="coaches-heading"
      className="border-b border-[var(--tr-border)] !py-[calc(var(--tr-section-y)*1.45)] sm:!py-[calc(var(--tr-section-y)*1.55)]"
    >
      <RevealOnView className="mx-auto max-w-4xl text-center lg:text-left">
        <Eyebrow className="lg:text-left">{coaches.eyebrow}</Eyebrow>
        <h2
          id="coaches-heading"
          className="mx-auto mt-5 max-w-4xl text-balance text-[var(--tr-text-primary)] text-[clamp(1.875rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] sm:mt-6 lg:mx-0"
        >
          {coaches.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-[1.0625rem] font-medium leading-snug text-[var(--tr-text-secondary)] sm:mt-5 sm:text-lg lg:mx-0">
          {coaches.lead}
        </p>
      </RevealOnView>

      <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-32">
        <RevealOnView delayMs={40}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            <div className="lg:col-span-5 xl:col-span-5">
              <CoachCopyBlock
                label={coaches.training.label}
                title={coaches.training.title}
                bullets={coaches.training.bullets}
              />
            </div>
            <div className="flex justify-center lg:col-span-7 xl:col-span-7">
              <IphoneScreenshot
                src={SCREENSHOT_TRAINING}
                alt={SCREENSHOT_ALT.training}
                size="section"
              />
            </div>
          </div>
        </RevealOnView>

        <RevealOnView delayMs={60}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            <div className="flex justify-center lg:order-1 lg:col-span-7 xl:col-span-7">
              <IphoneScreenshot
                src={SCREENSHOT_NUTRITION}
                alt={SCREENSHOT_ALT.nutrition}
                size="section"
              />
            </div>
            <div className="lg:order-2 lg:col-span-5 xl:col-span-5">
              <CoachCopyBlock
                label={coaches.nutrition.label}
                title={coaches.nutrition.title}
                bullets={coaches.nutrition.bullets}
              />
            </div>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}

function CoachCopyBlock({
  label,
  title,
  bullets,
}: {
  label: string;
  title: string;
  bullets: readonly string[];
}) {
  return (
    <article className="relative text-center lg:pl-8 lg:text-left">
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 bg-trainr-accent sm:w-[5px] lg:block"
        aria-hidden
      />
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-trainr-accent sm:text-[11px]">
        {label}
      </p>
      <h3 className="mt-4 text-[1.5rem] font-bold leading-tight tracking-tight text-[var(--tr-text-primary)] sm:mt-5 sm:text-[1.75rem] lg:text-[2rem]">
        {title}
      </h3>
      <ul className="mx-auto mt-7 max-w-md space-y-4 text-left lg:mx-0 lg:max-w-none lg:mt-8 lg:space-y-4">
        {bullets.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-pretty text-[1rem] font-medium leading-relaxed text-[var(--tr-text-secondary)] sm:text-[1.0625rem]"
          >
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-trainr-accent"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
