/**
 * Marketing copy alineado con la dirección del producto: guidance diario con
 * Training Coach y Nutrition Coach como núcleo.
 */

export const trainrProduct = {
  domain: "trytrainr.com",
  supportEmail: "support@trytrainr.com",

  hero: {
    eyebrow: "Dos coaches. Un sistema.",
    domainLine: "trytrainr.com",
    trustBadge: "Acceso anticipado",
    headline: "Trainr te dice qué entrenar y cómo comer cada día.",
    headlineAccent: "Sin ruido. Solo progreso.",
    subhead:
      "Training Coach y Nutrition Coach trabajan juntos para darte claridad, dirección y progreso sin ruido.",
    primaryCta: "Join early access",
    primaryHref: "#cta" as const,
    secondaryCta: "See how it works",
    secondaryHref: "#how-it-works" as const,
    tertiaryCta: "O escríbenos para prioridad",
    specRows: [
      { label: "Hoy", value: "Dirección clara de entreno y comida" },
      { label: "Coaches", value: "Training + Nutrition, alineados" },
      { label: "Enfoque", value: "Ejecución, no improvisación" },
    ] as const,
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Cero teatro.",
    steps: [
      {
        title: "Training Coach fija el entreno de hoy",
        body: "Qué toca, cómo cargar y hacia dónde va la sesión — sin adivinar en el gym.",
      },
      {
        title: "Nutrition Coach te dice cómo comer hoy",
        body: "Orientación del día que encaja con el entreno, sin sensación de dieta rígida ni hoja de macros eterna.",
      },
      {
        title: "Juntos quitan ruido y te mantienen en marcha",
        body: "Un solo sistema: menos decisiones, más constancia y progreso que se siente.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "El núcleo",
    title: "Dos coaches. Un solo día.",
    lead: "No es un tracker ni un catálogo de rutinas: es guidance real para decidir y ejecutar.",
    training: {
      label: "Training Coach",
      title: "Dirección de entreno, cada día",
      bullets: [
        "Decide qué entrenar hoy y hacia dónde empuja la sesión.",
        "Ajusta carga, series o enfoque según cómo vayas.",
        "Menos sobre-pensar en el rack; más ejecutar con criterio.",
        "Se siente coach, no solo registro de reps.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Cómo comer hoy, sin complicarlo",
      bullets: [
        "Te orienta en la comida del día con claridad, no con ansiedad.",
        "Sin sensación de dieta rígida ni obsesión macro.",
        "Sin el peso de una app solo de números.",
        "Complementa el entreno; no compite con él.",
      ] as const,
    },
    bundle: {
      title: "One system. Better results.",
      body: "Cuando entreno y nutrición hablan el mismo idioma, el día se simplifica.",
    },
  },

  featuresIntro: {
    eyebrow: "Todo lo demás, al servicio del día",
    title: "Ejecución primero. El resto, opcional.",
    lead: "Lo esencial es el guidance de los dos coaches; el resto acompaña sin robar el foco.",
  },

  differentiators: {
    eyebrow: "Por qué Trainr",
    title: "Claridad diaria, tono premium.",
    lead: "Directo, sobrio y seguro: para quien quiere dirección, no otro feed más.",
    points: [
      {
        title: "Guidance, no ruido",
        body: "Cada pantalla empuja a la decisión del día: entrenar bien y comer con sentido.",
      },
      {
        title: "Dos coaches, una lógica",
        body: "Training y nutrición comparten contexto para que no choques tú solo las piezas.",
      },
      {
        title: "Premium por claridad",
        body: "Menos fricción mental, más constancia — sin promesas vacías ni postureo.",
      },
      {
        title: "Dirección y progreso",
        body: "Menos catálogo y más sentido: saber qué hacer ahora y por qué.",
      },
    ] as const,
  },

  afterShowcase: {
    title: "Start with clarity",
    subtitle:
      "Pide acceso anticipado y sé de los primeros en probar el sistema de dos coaches.",
    primaryLabel: "Join early access",
    mailtoSubject: "Trainr – early access" as const,
  },

  finalCta: {
    title: "Get daily guidance with Trainr",
    lead: "Sé de los primeros en probar el sistema de dos coaches. Te escribimos con novedades de acceso anticipado.",
    primaryLabel: "Join early access",
    secondaryLabel: "Ver la interfaz",
    secondaryHref: "#app" as const,
  },

  executionSocial: {
    eyebrow: "Contexto social",
    title: "Pensado para ejecutar, con social opcional",
    body: "Feed, perfiles o chat pueden acompañar, pero no definen el producto: el centro es tu día de entreno y comida, con dos coaches que te guían.",
  },

  about: {
    eyebrow: "Qué es Trainr",
    title: "Un sistema de guidance diario en la app.",
    body: "Trainr concentra la decisión del día: qué entrenar y cómo comer, con Training Coach y Nutrition Coach trabajando en conjunto. La experiencia es oscura, directa y pensada para reducir fricción — premium por claridad, no por ruido.",
    footnote:
      "Colores y radios de esta web coinciden con los tokens de la app (#0F0F0F, #161616, #FF7A00, tarjetas a 24px).",
    pillars: [
      {
        label: "Training",
        title: "Coach de entreno",
        body: "Dirección de sesión, carga y progreso sin perderte en listas infinitas de rutinas.",
      },
      {
        label: "Nutrición",
        title: "Coach de alimentación",
        body: "Orientación del día alineada con el entreno, sin convertir la comida en un spreadsheet.",
      },
      {
        label: "Sistema",
        title: "Un solo flujo",
        body: "Los dos coaches comparten contexto para que entrenar y comer no peleen entre sí.",
      },
      {
        label: "Opcional",
        title: "Social cuando toca",
        body: "Explorar, publicar o chatear queda disponible sin convertirse en el argumento principal.",
      },
    ] as const,
  },

  features: [
    {
      id: "training",
      title: "Training Coach",
      description:
        "Te dice qué entrenar hoy y cómo ajustar la sesión: estructura, criterio y menos improvisación en el gym.",
      icon: "training" as const,
    },
    {
      id: "nutrition",
      title: "Nutrition Coach",
      description:
        "Te orienta en cómo comer hoy, en sintonía con el entreno — claro, sin sensación de dieta forzada ni macros agobiantes.",
      icon: "nutrition" as const,
    },
    {
      id: "premium",
      title: "Experiencia premium",
      description:
        "Interfaz oscura y flujo limpio: menos distracciones, más foco en ejecutar el plan del día.",
      icon: "premium" as const,
    },
    {
      id: "feed",
      title: "Tu línea de trabajo",
      description:
        "Si quieres, comparte avances con contexto — útil cuando aporta, secundario cuando no.",
      icon: "feed" as const,
    },
    {
      id: "chat",
      title: "Contacto directo",
      description:
        "Habla con quien entrena como tú cuando lo necesitas; no es el núcleo del producto.",
      icon: "chat" as const,
    },
    {
      id: "profile",
      title: "Perfil con contexto",
      description:
        "Quién eres y tu historial visible cuando quieres dar seguimiento o conectar.",
      icon: "profile" as const,
    },
    {
      id: "social",
      title: "Descubrir con propósito",
      description:
        "Explorar perfiles y comentar con intención — alrededor del entreno, no como promesa principal.",
      icon: "social" as const,
    },
  ] as const,

  flagshipAside: {
    overline: "Sistema",
    title: "Dos coaches, un mismo día",
    body: "Training Coach y Nutrition Coach comparten el contexto para que no tú seas quien arbitra cada detalle.",
    bullets: [
      "Entreno y comida alineados",
      "Menos decisiones sueltas",
      "Más ejecución con criterio",
    ] as const,
  },

  showcase: {
    eyebrow: "Producto",
    title: "Así se ve tu día en Trainr",
    lead: "Sesión clara, comida con sentido — el foco es el guidance de los dos coaches.",
    devices: [
      { label: "Entreno", caption: "Dirección de hoy" },
      { label: "Nutrición", caption: "Cómo comer hoy" },
      { label: "Sistema", caption: "Dos coaches alineados" },
    ] as const,
  },
} as const;
