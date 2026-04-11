import Image from "next/image";

type TrainrLogoMarkProps = {
  /** Header: 28px móvil → 32px desktop. Footer: 24px → 28px */
  variant?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

/**
 * Marca Trainr desde `/public/trainr_logo.png`.
 * `width`/`height` son intrínsecos para Next/Image; el tamaño visual lo controla `className`.
 */
export function TrainrLogoMark({
  variant = "header",
  className = "",
  priority,
}: TrainrLogoMarkProps) {
  const sizeClass =
    variant === "header"
      ? "h-7 w-auto max-h-7 sm:h-8 sm:max-h-8"
      : "h-6 w-auto max-h-6 sm:h-7 sm:max-h-7";

  return (
    <Image
      src="/trainr_logo.png"
      alt="Trainr"
      width={256}
      height={256}
      sizes={variant === "header" ? "32px" : "28px"}
      className={`shrink-0 object-contain object-center ${sizeClass} ${className}`.trim()}
      priority={priority ?? variant === "header"}
    />
  );
}
