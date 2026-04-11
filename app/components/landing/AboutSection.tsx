import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { about } = trainrProduct;

export function AboutSection() {
  return (
    <Section
      id="about"
      tone="band"
      spacing="default"
      aria-labelledby="about-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <RevealOnView className="lg:col-span-5">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2
            id="about-heading"
            className="tr-text-h2 mt-5 max-w-[22ch] text-balance text-[var(--tr-text-primary)] sm:max-w-none"
          >
            {about.title}
          </h2>
          <p className="tr-text-body mt-6 max-w-md text-pretty">{about.body}</p>
          <p className="tr-text-body-sm mt-5 max-w-md text-pretty text-[var(--tr-text-tertiary)]">
            {about.footnote}
          </p>
        </RevealOnView>

        <RevealOnView
          delayMs={70}
          className="mt-12 lg:col-span-7 lg:mt-0 lg:pt-1"
        >
          <div className="overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-card)]">
            <div className="divide-y divide-[var(--tr-border)]">
              {about.pillars.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex gap-5 p-5 transition-colors duration-200 hover:bg-[var(--tr-surface-1)] sm:gap-6 sm:p-6"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--tr-radius-sm)] border border-[var(--tr-border-medium)] bg-[var(--tr-surface-1)] font-mono text-[11px] font-semibold text-[var(--tr-text-tertiary)] transition-[border-color,color] duration-200 group-hover:border-[color:var(--trainr-accent-line)] group-hover:text-trainr-accent"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="tr-text-overline">{item.label}</p>
                    <p className="tr-text-h3 mt-1.5 font-semibold text-[var(--tr-text-primary)]">
                      {item.title}
                    </p>
                    <p className="tr-text-body-sm mt-2 max-w-xl text-pretty text-[var(--tr-text-secondary)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnView>
      </div>
    </Section>
  );
}
