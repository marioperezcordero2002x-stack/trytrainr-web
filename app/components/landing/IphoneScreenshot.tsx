import Image from "next/image";

type IphoneScreenshotProps = {
  src: string;
  alt: string;
  /** Hero: un poco más grande para leer titular y CTA */
  size?: "hero" | "section";
  priority?: boolean;
  className?: string;
};

const sizeOuter = {
  hero: "max-w-[min(90vw,300px)] sm:max-w-[320px] lg:max-w-[min(42vw,380px)]",
  section:
    "max-w-[min(90vw,280px)] sm:max-w-[300px] lg:max-w-[min(40vw,360px)]",
} as const;

/**
 * Marco tipo iPhone limpio: sombra suave, fondo oscuro, imagen con object-contain (sin deformar).
 */
export function IphoneScreenshot({
  src,
  alt,
  size = "section",
  priority = false,
  className = "",
}: IphoneScreenshotProps) {
  return (
    <div
      className={`relative mx-auto w-full ${sizeOuter[size]} ${className}`.trim()}
    >
      <div
        className="rounded-[2.25rem] p-[11px] shadow-[0_28px_70px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.07)] sm:rounded-[2.4rem] sm:p-3"
        style={{
          background:
            "linear-gradient(165deg, #2e2e36 0%, #1c1c22 45%, #121218 100%)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[1.7rem] bg-[#0a0a0c] ring-1 ring-black/60 sm:rounded-[1.85rem]"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 380px"
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
}
