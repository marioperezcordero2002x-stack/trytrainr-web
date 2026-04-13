/**
 * Copy de la landing en español: conversión, sin relleno.
 */

export const trainrProduct = {
  domain: "trytrainr.com",
  supportEmail: "support@trytrainr.com",

  hero: {
    eyebrow: "Dos coaches. Un sistema.",
    domainLine: "trytrainr.com",
    trustBadge: "Acceso anticipado",
    headline: "Trainr: qué entrenar y cómo comer, cada día.",
    killerLine: "No pienses. Cumple.",
    subhead: "Sin ruido. Solo ejecuta.",
    tensionPains: [
      "Muchas dudas.",
      "Muchas decisiones.",
      "Mucho ruido.",
    ] as const,
    tensionResolve: "Trainr lo ordena.",
    primaryCta: "Acceso anticipado",
    primaryHref: "#cta" as const,
    secondaryCta: "Cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    tertiaryCta: "Prioridad por email",
  },

  quickValue: {
    items: [
      { title: "Qué entrenar", line: "Antes del gym." },
      { title: "Cómo comer", line: "Con el entreno." },
      { title: "Un sitio", line: "Menos decidir." },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Un día.",
    steps: [
      { title: "Training: hoy", body: "Qué hacer y cómo." },
      { title: "Nutrition: hoy", body: "Comida alineada al esfuerzo." },
      { title: "Juntos", body: "Misma lógica en todo." },
    ] as const,
  },

  coaches: {
    eyebrow: "El producto",
    title: "Dos coaches. Trainr.",
    lead: "Las dos piezas, cada día.",
    training: {
      label: "Training Coach",
      title: "Entreno de hoy, listo.",
      bullets: ["Qué tocar hoy.", "Guía, no solo registro."] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Comida de hoy, clara.",
      bullets: ["Cómo comer con el gym.", "Sin rigidez."] as const,
    },
  },

  bundle: {
    eyebrow: "Sistema completo",
    title: "Entreno o comida solos no bastan.",
    pairLead: "Puedes hacerlo.",
    pairResolve: "No es lo mismo.",
    togetherIntro: "Los dos a la vez:",
    togetherOutro: "todo encaja.",
    sublead: "Solo uno: falta la otra mitad.",
    points: [
      { title: "Solo uno", body: "Incompleto. Te frena." },
      { title: "Juntos", body: "Encaja." },
      { title: "Trainr", body: "Las dos, diario." },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Serio",
    title: "No es otra app de fitness.",
    lead: "Para hacer, no mirar.",
    points: [
      { title: "Menos ruido", body: "Solo hoy." },
      { title: "Constancia", body: "Que repites." },
      { title: "Siguiente paso", body: "Siempre claro." },
    ] as const,
  },

  finalCta: {
    kicker: "",
    title: "Empieza hoy.",
    iconicLine: "No pienses. Cumple.",
    subtitle: "",
    lead: "",
    note: "",
    primaryLabel: "Acceso anticipado",
    secondaryLabel: "Cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – acceso anticipado" as const,
  },
} as const;
