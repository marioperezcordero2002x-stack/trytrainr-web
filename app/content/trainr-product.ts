/**
 * Noxen Web — landing (ES) orientada a conversión por WhatsApp.
 * Nota: ajusta `whatsApp.phoneE164` y el texto pre-rellenado a tu número real.
 */

export const trainrProduct = {
  brand: {
    name: "Noxen Web",
    descriptor: "Web Solutions · Negocios locales",
    domain: "noxenweb.com",
  },

  whatsApp: {
    /** Formato E.164 sin +, ej: 34600111222 */
    phoneE164: "34600000000",
    prefill:
      "Hola, quiero una landing para mi negocio. ¿Me dices precio y disponibilidad?",
  },

  hero: {
    eyebrow: "Landing pages para negocios locales",
    trustBadge: "Entrega en 72h",
    headline: "Si tu web no transmite confianza, estás perdiendo clientes.",
    subhead:
      "Una landing clara, rápida y pensada para que te escriban por WhatsApp.",
    primaryCta: "Pedir presupuesto por WhatsApp",
    secondaryCta: "Ver ejemplos reales",
    secondaryHref: "#proyectos" as const,
    trustLineItems: ["Respuesta rápida", "Precio claro", "Entrega 72h"] as const,
    miniProof: {
      title: "Resumen del servicio",
      rows: [
        { k: "Tiempo", v: "Lista en 3 días" },
        { k: "Objetivo", v: "Más mensajes / leads" },
        { k: "Stack", v: "Mobile‑first + carga rápida" },
      ] as const,
    },
  },

  proof: {
    eyebrow: "Proyectos reales",
    title: "Casos que ya están vendiendo.",
    lead: "Diseño oscuro premium + copy directo + CTA visible. Sin humo.",
    projects: [
      {
        name: "Trainr",
        tag: "Proyecto real",
        what: "Landing de lanzamiento con estética premium",
        outcome: "Jerarquía clara + CTAs fuertes",
      },
      {
        name: "Restaurante local",
        tag: "Ejemplo",
        what: "Reservas por WhatsApp desde móvil",
        outcome: "Botón siempre visible + carga rápida",
      },
      {
        name: "Clínica / servicios",
        tag: "Ejemplo",
        what: "Confianza inmediata + prueba visual",
        outcome: "Secciones cortas y escaneables",
      },
    ] as const,
    testimonialsShell: {
      eyebrow: "Testimonios",
      title: "Opiniones (listo para añadir).",
      note: "Cuando tengas 2–3 frases reales, se integran aquí sin romper el diseño.",
    },
  },

  benefits: {
    eyebrow: "Beneficios",
    title: "Diseñada para convertir (en móvil).",
    items: [
      {
        title: "Confianza inmediata",
        line: "Diseño premium y estructura clara para que no duden.",
        business: "Más contacto en la primera visita.",
      },
      {
        title: "CTA siempre visible",
        line: "WhatsApp y acciones clave sin buscar el botón.",
        business: "Menos fricción = más mensajes.",
      },
      {
        title: "Móvil impecable",
        line: "Tipografía, spacing y cards pensadas para iPhone.",
        business: "Mejor lectura en 3 segundos.",
      },
      {
        title: "Velocidad real",
        line: "Carga rápida, sin librerías pesadas ni efectos molestos.",
        business: "Menos rebote, más leads.",
      },
    ] as const,
  },

  examplesAndSectors: {
    eyebrow: "Ejemplos y sectores",
    title: "Funciona en servicios locales.",
    lead: "Cards compactas, directas y con foco en el siguiente paso: escribir.",
    sectors: [
      "Restaurantes",
      "Clínicas",
      "Estética / peluquería",
      "Reformas",
      "Inmobiliarias",
      "Entrenadores",
    ] as const,
    exampleCards: [
      {
        title: "Landing de reservas",
        line: "Menú corto + prueba + WhatsApp fijo.",
      },
      {
        title: "Landing de servicios",
        line: "Beneficios escaneables + antes/después + CTA.",
      },
      {
        title: "Landing de captación",
        line: "Oferta clara + fricción cero + contacto rápido.",
      },
    ] as const,
  },

  process: {
    eyebrow: "Proceso",
    title: "En 72h, lista para vender.",
    steps: [
      { title: "Brief por WhatsApp", body: "Te pregunto lo justo para clavar el foco." },
      { title: "Diseño + copy", body: "Estructura para conversión, look premium." },
      { title: "Entrega y ajustes", body: "Publicada y lista. Ajustes rápidos incluidos." },
    ] as const,
  },

  pricing: {
    eyebrow: "Precio",
    title: "Desde 250€ · claro y premium.",
    price: "250€",
    priceFrom: "desde",
    lead: "Ideal para validar rápido sin renunciar a calidad.",
    includes: [
      "Diseño dark premium (mobile‑first)",
      "Copy orientado a WhatsApp",
      "Secciones clave (hero, prueba, beneficios, precio, CTA)",
      "Optimización de carga y accesibilidad básica",
      "Entrega en 72h",
    ] as const,
    frictionReducers: ["Precio cerrado antes de empezar", "Sin sorpresas", "Rápido para validar"] as const,
    cta: "Quiero mi landing",
  },

  finalCta: {
    kicker: "Disponibilidad limitada",
    title: "Si quieres vender esta semana, hablemos hoy.",
    iconicLine: "Trabajo con pocos proyectos al mes para entregar rápido y bien.",
    subtitle: "Te respondo rápido y te digo precio cerrado antes de empezar.",
    note: "Si ya tienes web, también puedo rehacer solo la landing de captación.",
    secondaryLabel: "Ver ejemplos",
    secondaryHref: "#proyectos" as const,
  },
} as const;
