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
    headline: "Trainr te dice qué entrenar y cómo comer cada día.",
    killerLine: "No pienses. Cumple.",
    subhead: "Sin dudas. Sin ruido. Solo ejecuta.",
    tensionPains: [
      "Demasiadas dudas.",
      "Demasiadas decisiones.",
      "Demasiado ruido.",
    ] as const,
    tensionResolve: "Trainr lo simplifica.",
    primaryCta: "Acceso anticipado",
    primaryHref: "#cta" as const,
    secondaryCta: "Cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    tertiaryCta: "Prioridad por email",
  },

  quickValue: {
    items: [
      {
        title: "Qué entrenar",
        line: "Antes del gym.",
      },
      {
        title: "Cómo comer",
        line: "A juego con el entreno.",
      },
      {
        title: "Un sitio",
        line: "Menos decisiones.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Un día.",
    steps: [
      {
        title: "Training Coach: el entreno de hoy",
        body: "Qué hacer y cómo enfocarlo.",
      },
      {
        title: "Nutrition Coach: la comida de hoy",
        body: "Práctico, alineado al esfuerzo.",
      },
      {
        title: "Juntos",
        body: "Una sola lógica: entreno y comida.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "El producto",
    title: "Dos coaches. Esto es Trainr.",
    lead: "Entreno y comida, resueltos cada día.",
    training: {
      label: "Training Coach",
      title: "Tu entreno de hoy, decidido.",
      bullets: [
        "Qué entrenar hoy.",
        "Guía real, no solo registro.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Tu comida de hoy, clara.",
      bullets: [
        "Cómo comer hoy, con el gym.",
        "Sin rigidez ni líos.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Sistema completo",
    title: "Entrenar o comer bien por separado no funciona igual.",
    pairLead: "Puedes hacerlo.",
    pairResolve: "Pero no es lo mismo.",
    togetherLine: "Cuando ambos trabajan juntos: todo encaja.",
    sublead: "Solo una pieza: el día no cierra.",
    points: [
      {
        title: "Por separado",
        body: "Entreno o comida solos: no rinden igual.",
      },
      {
        title: "Juntos",
        body: "Misma lógica. Encaja.",
      },
      {
        title: "Trainr",
        body: "Las dos, cada día.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Serio",
    title: "No es otra app de fitness.",
    lead: "Para actuar, no para mirar.",
    points: [
      {
        title: "Menos ruido",
        body: "Solo lo de hoy.",
      },
      {
        title: "Constancia",
        body: "Algo que repites.",
      },
      {
        title: "Siguiente paso",
        body: "En entreno y comida.",
      },
    ] as const,
  },

  finalCta: {
    kicker: "Deja de improvisar.",
    title: "Empieza hoy.",
    subtitle: "Con Trainr.",
    lead: "Acceso anticipado. Vas primero.",
    note: "Demasiado sentido para no probarlo.",
    primaryLabel: "Acceso anticipado",
    secondaryLabel: "Cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – acceso anticipado" as const,
  },
} as const;
