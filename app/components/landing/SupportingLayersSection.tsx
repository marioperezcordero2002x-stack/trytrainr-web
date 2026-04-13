import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { supporting } = trainrProduct;

export function SupportingLayersSection() {
  return (
    <Section
      id="layers"
      tone="canvas"
      spacing="tight"
      aria-labelledby="layers-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView>
        <div className="mx-auto max-w-2xl rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)]/55 px-5 py-7 text-center shadow-[var(--tr-shadow-inset)] sm:px-10 sm:py-8">
          <Eyebrow className="text-center">{supporting.eyebrow}</Eyebrow>
          <h2
            id="layers-heading"
            className="tr-text-h3 mt-4 text-balance text-[var(--tr-text-primary)] sm:mt-5"
          >
            {supporting.title}
          </h2>
          <p className="tr-text-body-sm mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-[var(--tr-text-secondary)] sm:mt-5 sm:text-[0.9375rem]">
            {supporting.body}
          </p>
        </div>
      </RevealOnView>
    </Section>
  );
}
