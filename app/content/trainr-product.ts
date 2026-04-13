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
    lead: "Qué entrenar y cómo comer — resuelto cada día.",
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
    lead: "Un sistema. Mejor resultado.",
    sublead:
      "Solo una pieza te deja a medias. Trainr une entreno y comida — o sigues cargando tú con el resto.",
    points: [
      {
        title: "A medias",
        body: "Un lado fuerte y el otro flojo: el día no cierra.",
      },
      {
        title: "Alineados",
        body: "Lo que entrenas y lo que comes dejan de contradecirse.",
      },
      {
        title: "Así nace Trainr",
        body: "Menos fricción, más constancia real.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Serio",
    title: "No es otra app de fitness.",
    lead: "Para ejecutar, no para coleccionar pantallas.",
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
    kicker: "Saber qué hacer hoy lo cambia todo.",
    title: "Empieza con claridad.",
    subtitle: "Exactamente qué hacer cada día.",
    lead: "Acceso anticipado: vas primero. Respuesta directa.",
    note: "Cada día sin plan es tiempo que no vuelve.",
    primaryLabel: "Acceso anticipado",
    secondaryLabel: "Ver cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – acceso anticipado" as const,
  },
} as const;
