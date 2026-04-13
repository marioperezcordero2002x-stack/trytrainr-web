/**
 * Copy de la landing en español: dos coaches, guía diaria, sin narrativa social.
 */

export const trainrProduct = {
  domain: "trytrainr.com",
  supportEmail: "support@trytrainr.com",

  hero: {
    eyebrow: "Dos coaches. Un sistema.",
    domainLine: "trytrainr.com",
    trustBadge: "Acceso anticipado",
    headline: "Trainr te dice qué entrenar y cómo comer cada día.",
    subhead: "Menos dudas. Más claridad. Solo ejecuta.",
    reliefPhrases: [
      "Deja de improvisar.",
      "Sin dudas. Sin ruido.",
      "Cada día, claro.",
    ] as const,
    primaryCta: "Acceso anticipado",
    primaryHref: "#cta" as const,
    secondaryCta: "Ver cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    tertiaryCta: "Escríbenos para prioridad",
  },

  quickValue: {
    items: [
      {
        title: "Qué entrenar",
        line: "Hoy lo tienes claro. Nada de improvisar en el gimnasio.",
      },
      {
        title: "Cómo comer",
        line: "Orientación que encaja con lo que entrenas.",
      },
      {
        title: "Menos ruido mental",
        line: "Un solo sitio. Menos decisiones. Más constancia.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Un día.",
    steps: [
      {
        title: "El Training Coach marca el entreno de hoy",
        body: "Qué tocar y cómo enfocar la sesión — para entrenar, no para dudar.",
      },
      {
        title: "El Nutrition Coach te orienta en la comida de hoy",
        body: "Comer con sentido, alineado con el esfuerzo — sin rigidez ni complicarte la vida.",
      },
      {
        title: "Juntos te dan claridad y constancia",
        body: "Mismo día, misma lógica: entreno y comida dejan de pelearse.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "El centro",
    title: "Dos coaches. Tu día, resuelto.",
    lead: "Guía concreta para hacer — no una lista interminable de funciones.",
    training: {
      label: "Training Coach",
      title: "Tu entrenamiento de hoy, decidido.",
      bullets: [
        "Te dice qué entrenar hoy.",
        "Marca el enfoque del día y adapta la sesión.",
        "Menos decisiones antes y durante el entreno.",
        "Se nota guía de verdad, no solo registro.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Tu forma de comer hoy, clara.",
      bullets: [
        "Te orienta en cómo comer hoy.",
        "Va a juego con el entreno, sin complicarte.",
        "Sin sensación de dieta rígida.",
        "Sin obsesionarte con números. Práctico y claro.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Mejor juntos",
    title: "Por separado ayudan. Juntos marcan la diferencia.",
    tension: [
      "Entrenar sin comer bien se queda corto.",
      "Comer bien sin entrenar con intención no basta.",
      "Juntos funcionan de verdad.",
    ] as const,
    lead: "Un sistema. Mejor resultado.",
    sublead:
      "Si entreno y comida viven en mundos distintos, la carga mental la llevas tú. Trainr la une.",
    points: [
      {
        title: "Solo una pieza",
        body: "Cuidar solo un lado te deja a medias: el otro sigue tirando de ti.",
      },
      {
        title: "Las dos, alineadas",
        body: "Mismo contexto cada día: lo que levantas y lo que comes dejan de contradecirse.",
      },
      {
        title: "Lo natural",
        body: "Así está pensado Trainr: menos fricción, más adherencia, constancia que aguanta.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Producto serio",
    title: "No es una app de fitness más.",
    lead: "Menos ruido, más ejecución. Hecho para seguir el plan, no para perderte en pantallas.",
    points: [
      {
        title: "Menos ruido",
        body: "Lo importante es qué hacer hoy — no competir por tu atención.",
      },
      {
        title: "Más constancia",
        body: "Estructura que puedes repetir, no subidones que se esfuman.",
      },
      {
        title: "Acción clara cada día",
        body: "Siempre sabes el siguiente paso útil en entreno y comida.",
      },
      {
        title: "Pensado para ejecutar",
        body: "Cada detalle empuja a cumplir — no a mirar.",
      },
    ] as const,
  },

  finalCta: {
    kicker: "No adivines. Cumple.",
    title: "Empieza con claridad.",
    subtitle: "Guía diaria con Trainr.",
    lead: "Sé de los primeros en probar el sistema de dos coaches.",
    note: "Te respondemos con detalles de acceso anticipado.",
    primaryLabel: "Acceso anticipado",
    secondaryLabel: "Ver cómo funciona",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – acceso anticipado" as const,
  },
} as const;
