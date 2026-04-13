import { trainrProduct } from "../../content/trainr-product";
import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const { executionSocial } = trainrProduct;

export function ExecutionSocialSection() {
  return (
    <Section
      id="context"
      tone="subtle"
      spacing="tight"
      aria-labelledby="execution-social-heading"
      className="border-b border-[var(--tr-border)]"
    >
      <RevealOnView>
        <div className="mx-auto max-w-2xl rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)]/60 px-5 py-6 text-center shadow-[var(--tr-shadow-inset)] sm:px-8 sm:py-7">
          <Eyebrow>{executionSocial.eyebrow}</Eyebrow>
          <h2
            id="execution-social-heading"
            className="tr-text-h2 mt-4 text-balance text-[var(--tr-text-primary)] sm:mt-5"
          >
            {executionSocial.title}
          </h2>
          <p className="tr-text-body-sm mx-auto mt-4 max-w-xl text-pretty text-[var(--tr-text-secondary)] sm:mt-5 sm:text-[0.9375rem] sm:leading-relaxed">
            {executionSocial.body}
          </p>
        </div>
      </RevealOnView>
    </Section>
  );
}
