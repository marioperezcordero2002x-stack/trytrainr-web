import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionTone = "canvas" | "band" | "subtle";

const toneClass: Record<SectionTone, string> = {
  canvas: "bg-[var(--tr-canvas)]",
  band: "bg-[var(--tr-band)]",
  subtle: "bg-[var(--tr-canvas-subtle)]",
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: SectionTone;
  /** Padding vertical del sistema */
  spacing?: "default" | "tight";
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  tone = "canvas",
  spacing = "default",
  className = "",
  containerClassName = "",
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  const y =
    spacing === "tight"
      ? "py-[var(--tr-section-y-tight)]"
      : "py-[var(--tr-section-y)]";

  return (
    <section
      id={id}
      className={`relative ${toneClass[tone]} ${y} ${className}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
