type TrainrLogoMarkProps = {
  /** Header: 28px móvil → 32px desktop. Footer: 24px → 28px */
  variant?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

/**
 * Marca inline (SVG) para evitar depender de assets binarios.
 */
export function TrainrLogoMark({
  variant = "header",
  className = "",
}: TrainrLogoMarkProps) {
  const sizeClass =
    variant === "header"
      ? "h-7 w-auto max-h-7 sm:h-8 sm:max-h-8"
      : "h-6 w-auto max-h-6 sm:h-7 sm:max-h-7";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className={`shrink-0 ${sizeClass} ${className}`.trim()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="16"
        fill="url(#noxenMarkBg)"
      />
      <path
        d="M21 42V22h6.2l10.9 13.6V22H43v20h-6.2L25.9 28.4V42H21Z"
        fill="white"
        opacity="0.92"
      />
      <defs>
        <linearGradient
          id="noxenMarkBg"
          x1="6"
          y1="6"
          x2="58"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgba(255,255,255,0.14)" />
          <stop offset="0.55" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
