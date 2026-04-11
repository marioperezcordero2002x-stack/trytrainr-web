import { RevealOnView } from "../RevealOnView";
import { Eyebrow } from "../system/Eyebrow";
import { Section } from "../system/Section";

const pillars = [
  {
    label: "Feed",
    title: "Contexto de gym",
    body: "Publicaciones ligadas al entreno: cargas, bloques, constancia. Nada de contenido ajeno al plan.",
  },
  {
    label: "Red",
    title: "Seguimiento con intención",
    body: "Sigues perfiles por disciplina y estilo, no por algoritmo o moda pasajera.",
  },
  {
    label: "Chat",
    title: "Mensajes acotados",
    body: "Privado, al lado del calendario de sesiones. Sin mezclar con el resto de tu vida digital.",
  },
  {
    label: "Registro",
    title: "Sesión documentada",
    body: "Cada entreno deja rastro útil: qué hiciste, cuándo y cómo se sintió.",
  },
  {
    label: "Hábito",
    title: "Ritmo semanal",
    body: "La interfaz refuerza la cadencia: ver el hilo de la semana importa más que un pico aislado.",
  },
] as const;

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
          <Eyebrow>Qué es Trainr</Eyebrow>
          <h2
            id="about-heading"
            className="tr-text-h2 mt-5 max-w-[20ch] text-balance text-[var(--tr-text-primary)] sm:max-w-none"
          >
            Una capa social construida alrededor del entreno.
          </h2>
          <p className="tr-text-body mt-6 max-w-md text-pretty">
            Otras redes premian el ruido. Trainr asume que ya tienes disciplina
            y te da herramientas para sostenerla: visibilidad del progreso,
            conversación útil y registro sin fricción.
          </p>
          <p className="tr-text-body-sm mt-5 max-w-md text-pretty text-[var(--tr-text-tertiary)]">
            Misma línea visual que la app móvil: negro profundo, grises
            calibrados, naranja solo para jerarquía y estados clave.
          </p>
        </RevealOnView>

        <RevealOnView
          delayMs={70}
          className="mt-12 lg:col-span-7 lg:mt-0 lg:pt-1"
        >
          <div className="overflow-hidden rounded-[var(--tr-radius-xl)] border border-[var(--tr-border)] bg-[var(--tr-surface-0)] shadow-[var(--tr-shadow-card)]">
            <div className="divide-y divide-[var(--tr-border)]">
              {pillars.map((item, i) => (
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
