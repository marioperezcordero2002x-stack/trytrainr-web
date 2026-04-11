import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const features = [
  {
    title: "Comunidad fitness",
    description:
      "Comparte entrenos, rutinas y progreso con personas que entienden tu disciplina. Un feed pensado para el gym, no para el ruido.",
  },
  {
    title: "Chat privado",
    description:
      "Coordina sesiones, resuelve dudas y mantén la conversación donde importa: directo, claro y sin distracciones de otras redes.",
  },
  {
    title: "Seguimiento de progreso",
    description:
      "Visualiza tu evolución con métricas y registros que te ayudan a mantener constancia y a ajustar el plan cuando toca.",
  },
  {
    title: "Planes y contenido premium",
    description:
      "Accede a orientación estructurada: planes de entreno, pautas de nutrición y contenido seleccionado para llevar tu rendimiento un paso más allá.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#050507] text-zinc-100">
      <SiteHeader />

      <section className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-28 lg:px-8">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#ff6b2c]/15 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-20 right-0 h-64 w-64 rounded-full bg-[#ff6b2c]/5 blur-[80px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            trytrainr.com
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Entrena, comparte y evoluciona con{" "}
            <span className="text-[#ff6b2c]">Trainr</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            La app social fitness para quienes van en serio. Comunidad, chat y
            hábitos en un solo lugar — oscuro, directo y sin ruido.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff6b2c] px-8 text-sm font-semibold text-[#050507] shadow-[0_0_40px_-10px_rgba(255,107,44,0.55)] transition-all hover:bg-[#ff8550] hover:shadow-[0_0_48px_-8px_rgba(255,107,44,0.65)]"
            >
              Descubrir más
            </a>
            <span className="inline-flex h-12 cursor-default items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-medium text-zinc-400">
              Próximamente en App Store
            </span>
            <a
              href="mailto:support@trytrainr.com"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-8 text-sm font-medium text-zinc-200 transition-colors hover:border-[#ff6b2c]/50 hover:text-white"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/[0.06] bg-[#08080a] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6b2c]">
            Qué es Trainr
          </h2>
          <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
            Tu espacio para entrenar en comunidad, sin perder el foco.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Trainr es una app social fitness donde publicas tu progreso, sigues
            a otros atletas, chateas en privado y mantienes el ritmo de tus
            hábitos. Está pensada para quienes quieren una red alineada con el
            gym — no otra feed genérica.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Publicaciones y momentos de entreno",
              "Seguir usuarios y descubrir referentes",
              "Mensajes privados con tu gente",
              "Registro y foco en el entrenamiento",
              "Hábitos que se sostienen en el tiempo",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-[#111114] px-4 py-3 text-sm text-zinc-300"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b2c]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="features"
        className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6b2c]">
              Características
            </h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Todo lo esencial, con la estética que ya conoces de la app.
            </p>
            <p className="mt-4 text-zinc-400">
              Bloques claros, sin relleno: lo que Trainr aporta a tu día a día.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <article
                key={f.title}
                className="group rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#141418] to-[#0e0e11] p-8 transition-all duration-300 hover:border-[#ff6b2c]/25 hover:shadow-[0_0_0_1px_rgba(255,107,44,0.08),0_24px_48px_-24px_rgba(0,0,0,0.6)]"
              >
                <div className="mb-5 h-px w-12 bg-gradient-to-r from-[#ff6b2c] to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="app"
        className="border-t border-white/[0.06] bg-[#08080a] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff6b2c]">
                Así se siente Trainr
              </h2>
              <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Preview del producto. Misma línea visual: oscuro, naranja
                medido, tarjetas limpias.
              </p>
            </div>
            <p className="max-w-md text-sm text-zinc-500 lg:text-right">
              Placeholders de interfaz; sustituye por capturas reales cuando
              estén listas — la estructura ya encaja con la marca.
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-6 xl:gap-10">
            {/* Phone 1 — Feed */}
            <div className="relative w-[260px] shrink-0 sm:w-[280px]">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#ff6b2c]/10 blur-2xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-[#16161a] p-2 shadow-2xl shadow-black/50">
                <div className="overflow-hidden rounded-[1.85rem] bg-[#0c0c0e]">
                  <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-5">
                    <span className="text-[10px] font-semibold tracking-wide text-zinc-500">
                      9:41
                    </span>
                    <div className="h-5 w-16 rounded-full bg-black" />
                    <span className="w-8" />
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-zinc-800 ring-2 ring-[#ff6b2c]/30" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-24 rounded bg-zinc-800" />
                        <div className="h-2 w-16 rounded bg-zinc-800/60" />
                      </div>
                    </div>
                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-white/[0.05]">
                      <div className="flex h-full flex-col justify-end p-3">
                        <div className="h-1 w-8 rounded-full bg-[#ff6b2c]/80" />
                      </div>
                    </div>
                    <div className="h-2 w-full rounded bg-zinc-800/50" />
                    <div className="h-2 w-[80%] rounded bg-zinc-800/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 — Chat */}
            <div className="relative w-[260px] shrink-0 sm:w-[280px] lg:translate-y-8">
              <div className="relative rounded-[2.25rem] border border-white/10 bg-[#16161a] p-2 shadow-2xl shadow-black/50">
                <div className="overflow-hidden rounded-[1.85rem] bg-[#0c0c0e]">
                  <div className="flex h-11 items-center justify-center border-b border-white/[0.06]">
                    <span className="text-xs font-semibold text-white">
                      Mensajes
                    </span>
                  </div>
                  <div className="space-y-2 p-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex gap-2 rounded-xl border border-white/[0.05] bg-[#111114] p-3"
                      >
                        <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-800" />
                        <div className="flex-1 space-y-2 pt-0.5">
                          <div className="h-2 w-20 rounded bg-zinc-700" />
                          <div className="h-2 w-full rounded bg-zinc-800/50" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mx-3 mb-3 flex gap-2 rounded-2xl border border-[#ff6b2c]/20 bg-[#ff6b2c]/5 p-2">
                    <div className="h-9 flex-1 rounded-lg bg-zinc-900/80" />
                    <div className="h-9 w-12 rounded-lg bg-[#ff6b2c]/90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 3 — Stats card */}
            <div className="relative w-[260px] shrink-0 sm:w-[280px]">
              <div className="relative rounded-[2.25rem] border border-white/10 bg-[#16161a] p-2 shadow-2xl shadow-black/50">
                <div className="overflow-hidden rounded-[1.85rem] bg-[#0c0c0e]">
                  <div className="border-b border-white/[0.06] p-4">
                    <p className="text-xs font-medium text-zinc-500">
                      Esta semana
                    </p>
                    <p className="mt-1 text-2xl font-semibold tabular-nums text-white">
                      4<span className="text-[#ff6b2c]">/</span>5
                    </p>
                    <p className="text-xs text-zinc-500">sesiones completadas</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex h-24 items-end justify-between gap-1 px-1">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, j) => (
                        <div
                          key={j}
                          className="w-full rounded-t-sm bg-zinc-800"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="rounded-2xl border border-white/[0.06] bg-[#111114] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">Plan activo</span>
                        <span className="rounded-full bg-[#ff6b2c]/15 px-2 py-0.5 text-[10px] font-semibold text-[#ff8550]">
                          Pro
                        </span>
                      </div>
                      <div className="mt-3 h-2 w-full rounded-full bg-zinc-800">
                        <div className="h-full w-[62%] rounded-full bg-[#ff6b2c]/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
