import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Ancho máximo y gutters alineados al sistema (--tr-gutter-x / --tr-max-w). */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--tr-max-w)] px-[var(--tr-gutter-x)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
