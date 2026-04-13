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
    subhead: "Sin dudas. Sin ruido. Solo ejecuta.",
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
        line: "Claro antes de entrar al gym.",
      },
      {
        title: "Cómo comer",
        line: "Alineado con lo que haces.",
      },
      {
        title: "Menos ruido",
        line: "Un sitio. Menos decisiones.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Un día.",
    steps: [
      {
        title: "Training Coach marca el entreno de hoy",
        body: "Qué tocar y cómo enfocarlo — para entrenar, no para dudar.",
      },
      {
        title: "Nutrition Coach orienta la comida de hoy",
        body: "Sentido práctico, alineado con el esfuerzo — sin rigidez.",
      },
      {
        title: "Juntos, claridad y constancia",
        body: "Misma lógica en un solo día: entreno y comida acompañan.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "El sistema",
    title: "Dos coaches. El producto.",
    lead: "No son funciones sueltas: es cómo Trainr te guía cada día.",
    training: {
      label: "Training Coach",
      title: "Tu entrenamiento de hoy, decidido.",
      bullets: [
        "Qué entrenar y cómo enfocar el día.",
        "Menos decisiones en el gym.",
        "Guía real, no solo registro.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Tu forma de comer hoy, clara.",
      bullets: [
        "Cómo comer hoy, en sintonía con el entreno.",
        "Sin dieta rígida ni líos innecesarios.",
        "Práctico, sin obsesionarte con números.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Mejor juntos",
    title: "Por separado ayudan. Juntos marcan la diferencia.",
    tension: [
      "Entrenar sin comer bien se queda corto.",
      "Comer bien sin entrenar no es suficiente.",
      "Juntos funcionan de verdad.",
    ] as const,
    lead: "Un sistema. Mejor resultado.",
    sublead:
      "Si cada cosa va por su lado, la carga mental la llevas tú. Trainr lo une.",
    points: [
      {
        title: "Una pieza sola",
        body: "Te deja a medias: el otro lado sigue pesando.",
      },
      {
        title: "Las dos, alineadas",
        body: "Lo que levantas y lo que comes dejan de pelearse.",
      },
      {
        title: "Así está pensado",
        body: "Menos fricción, más adherencia, constancia que aguanta.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Producto serio",
    title: "No es una app de fitness más.",
    lead: "Hecho para ejecutar el plan, no para llenarte de pantallas.",
    points: [
      {
        title: "Menos ruido",
        body: "El foco es qué hacer hoy.",
      },
      {
        title: "Más constancia",
        body: "Rutina que puedes mantener, no subidones vacíos.",
      },
      {
        title: "Acción clara",
        body: "Siempre sabes el siguiente paso en entreno y comida.",
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
