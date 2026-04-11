import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";
import {
  IconChat,
  IconCommunity,
  IconPlans,
  IconProgress,
} from "./feature-icons";

const features = [
  {
    title: "Comunidad con filtro",
    description:
      "El feed prioriza entreno y progreso. Menos ruido algorítmico, más contexto útil para tu bloque de la semana.",
    Icon: IconCommunity,
    highlight: true,
  },
  {
    title: "Mensajes en el mismo contexto",
    description:
      "Chats privados alineados con el plan: acuerdas series, compartes vídeos de técnica o coordinas sin salir de Trainr.",
    Icon: IconChat,
    highlight: false,
  },
  {
    title: "Progreso legible",
    description:
      "Resúmenes y tendencias pensados para decidir el siguiente paso: volumen, adherencia, picos y bajones.",
    Icon: IconProgress,
    highlight: false,
  },
  {
    title: "Planes y capa premium",
    description:
      "Cuando escales, contenido estructurado y orientación clara — sin convertir la home en un marketplace.",
    Icon: IconPlans,
    highlight: false,
  },
] as const;

export function FeaturesSection() {
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
          <Eyebrow>Producto</Eyebrow>
          <h2
            id="features-heading"
            className="tr-text-h2 mt-5 text-balance text-[var(--tr-text-primary)]"
          >
            Cuatro piezas que cierran el ciclo del atleta
          </h2>
          <p className="tr-text-lead mt-5 max-w-2xl text-pretty">
            De la inspiración al registro: cada módulo tiene una función
            medible. Así la app se siente cohesionada, no como un collage de
            funciones sueltas.
          </p>
        </RevealOnView>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16">
        {features.map(({ title, description, Icon, highlight }, index) => (
          <RevealOnView
            key={title}
            delayMs={index * 45}
            className={highlight ? "sm:col-span-2" : ""}
          >
            <article
              className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[var(--tr-radius-lg)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] p-6 shadow-[var(--tr-shadow-card)] transition-[border-color,box-shadow,transform] duration-200 sm:p-8 ${
                highlight
                  ? "lg:flex-row lg:items-stretch lg:gap-10 lg:p-10 hover:border-[var(--tr-border-medium)]"
                  : "hover:-translate-y-0.5 hover:border-[var(--tr-border-medium)] hover:shadow-[var(--tr-shadow-card-hover)]"
              }`}
            >
              {highlight ? (
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-trainr-accent opacity-90"
                  aria-hidden
                />
              ) : null}
              {highlight ? (
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--trainr-accent-soft)] via-transparent to-transparent opacity-60"
                  aria-hidden
                />
              ) : null}
              <div
                className={`relative flex flex-1 flex-col ${highlight ? "lg:max-w-md" : ""}`}
              >
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
                  {title}
                </h3>
                <p className="tr-text-body-sm mt-3 flex-1 text-pretty text-[var(--tr-text-secondary)]">
                  {description}
                </p>
              </div>
              {highlight ? (
                <div className="relative mt-8 hidden flex-1 flex-col justify-center rounded-[var(--tr-radius-md)] border border-[var(--tr-border)] bg-[var(--tr-surface-1)] p-5 lg:mt-0 lg:flex">
                  <p className="tr-text-overline text-[var(--tr-text-tertiary)]">
                    Resumen
                  </p>
                  <p className="mt-3 text-[0.9375rem] font-medium leading-snug text-[var(--tr-text-primary)]">
                    Feed + perfiles + chat + métricas comparten el mismo
                    lenguaje visual. El usuario no reinterpreta la UI en cada
                    pantalla.
                  </p>
                  <div className="mt-5 h-px w-full bg-[var(--tr-border)]" />
                  <p className="tr-text-body-sm mt-4 text-[var(--tr-text-tertiary)]">
                    Coherencia de producto = menos fricción cognitiva = más
                    retención.
                  </p>
                </div>
              ) : null}
            </article>
          </RevealOnView>
        ))}
      </div>
    </Section>
  );
}
