/**
 * Copy de la landing en español: guía diaria, conversión, sin relleno.
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
    secondaryCta: "Ver cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    tertiaryCta: "Prioridad por email",
  },

  quickValue: {
    items: [
      {
        title: "Qué entrenar",
        line: "Antes de pisar el gym.",
      },
      {
        title: "Cómo comer",
        line: "Acorde a tu entreno.",
      },
      {
        title: "Un solo sitio",
        line: "Menos decisiones.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Un día.",
    steps: [
      {
        title: "Training Coach fija el entreno de hoy",
        body: "Qué hacer y cómo enfocarlo.",
      },
      {
        title: "Nutrition Coach fija la comida de hoy",
        body: "Práctico, alineado al esfuerzo.",
      },
      {
        title: "Juntos, un solo criterio",
        body: "Entreno y comida en la misma lógica.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "El producto",
    title: "Dos coaches. Esto es Trainr.",
    lead: "Entreno y comida resueltos cada día.",
    training: {
      label: "Training Coach",
      title: "Tu entreno de hoy, decidido.",
      bullets: [
        "Qué entrenar hoy, sin improvisar.",
        "Guía real — no solo anotar series.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Tu comida de hoy, clara.",
      bullets: [
        "Cómo comer hoy, a juego con el gym.",
        "Sin rigidez ni líos de números.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Sistema completo",
    title: "Entrenar o comer bien no es suficiente.",
    pairLead: "Por separado ayudan.",
    pairResolve: "Juntos funcionan.",
    insufficientLine: "Solo uno: incompleto.",
    lead: "Un sistema. Mejor resultado.",
    sublead: "Sin las dos, el día no cierra. La carga sigue siendo tuya.",
    points: [
      {
        title: "Incompleto",
        body: "Solo entreno o solo comida: el otro lado te frena.",
      },
      {
        title: "Alineados",
        body: "Entreno y comida en la misma lógica.",
      },
      {
        title: "Trainr",
        body: "Las dos, unidas. Menos fricción, más constancia.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Serio",
    title: "No es otra app de fitness.",
    lead: "Para hacer, no para mirar pantallas.",
    points: [
      {
        title: "Menos ruido",
        body: "Solo lo que importa hoy.",
      },
      {
        title: "Más constancia",
        body: "Algo que puedes repetir.",
      },
      {
        title: "Siguiente paso claro",
        body: "En entreno y en comida.",
      },
    ] as const,
  },

  finalCta: {
    kicker: "Deja de improvisar.",
    title: "Empieza hoy con Trainr.",
    subtitle: "Simple. Directo. Cada día.",
    lead: "Acceso anticipado: vas primero. Respuesta clara.",
    note: "Tiene demasiado sentido como para no probarlo.",
    primaryLabel: "Acceso anticipado",
    secondaryLabel: "Ver cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – acceso anticipado" as const,
  },
} as const;
