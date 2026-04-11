/**
 * Contenido de marketing alineado con el producto real (Flutter `Trainr/lib`).
 * Referencias: MainHubScreen, TrainrHubBottomNavBar, FeedPostCard, PostDto,
 * ChatListScreen, PerfilScreen, PlanesEntrenamientoScreen, DietasScreen,
 * PremiumScreen, feed_post_visibility, premium_screen (beneficios).
 *
 * No inventar funcionalidades fuera de lo implementado en código.
 */

export const trainrProduct = {
  domain: "trytrainr.com",
  supportEmail: "support@trytrainr.com",

  hubTabs: [
    "Inicio",
    "Explorar",
    "Chats",
    "Entreno",
    "Nutrición",
    "Premium",
  ] as const,

  hero: {
    eyebrow: "Trainr",
    domainLine: "trytrainr.com",
    trustBadge: "Lista de acceso abierta",
    hubOverline: "Seis pestañas, un solo hub",
    headline: "Menos postureo. Más progreso que se ve.",
    headlineAccent: "La app social fitness para quien entrena de verdad.",
    subhead:
      "Publica tu evolución en el feed, conecta con una comunidad seria y mantén el ritmo con planes de entreno, macros y chat directo — todo en un hub oscuro pensado para constancia, no para viralidad vacía.",
    primaryCta: "Únete ahora",
    primaryHref: "#cta" as const,
    secondaryCta: "Ver la app",
    secondaryHref: "#app" as const,
    tertiaryCta: "O escríbenos para prioridad",
    specRows: [
      { label: "Progreso", value: "Visible en el feed" },
      { label: "Comunidad", value: "Perfiles y chat serios" },
      { label: "Entreno", value: "Planes + nutrición en el hub" },
    ] as const,
  },

  featuresIntro: {
    eyebrow: "Todo en una app",
    title: "Diseñada para quien entrena, no para quien presume",
    lead: "Cada función empuja a constancia y contacto útil — no a viralidad vacía.",
  },

  differentiators: {
    eyebrow: "Diferencia",
    title: "Aquí no vienes a aparentar.",
    lead: "Vienes a progresar. Y se nota en cada publicación.",
    points: [
      {
        title: "Progreso, no escenario",
        body: "El feed es para sesiones y avances — no para postureo del día.",
      },
      {
        title: "Hub oscuro, cabeza clara",
        body: "Entreno, macros y chat sin el ruido de otras redes.",
      },
      {
        title: "Gente que habla tu idioma",
        body: "Cargas, RPE, constancia. Conexión con quien entiende el gym.",
      },
      {
        title: "Tu línea en el tiempo",
        body: "Perfil y feed para ver semanas y meses, no solo un día suelto.",
      },
    ] as const,
  },

  /** Cierre inmediato tras el preview (#app): empuja a acción sin duplicar ruido. */
  afterShowcase: {
    title: "Empieza hoy con Trainr",
    subtitle: "Haz visible tu progreso con gente que va en serio.",
    primaryLabel: "Consigue acceso",
    mailtoSubject: "Trainr – quiero acceso" as const,
  },

  finalCta: {
    title: "Sé de los primeros en usar Trainr",
    lead:
      "La app está en marcha: déjanos tu interés y te respondemos con novedades de lanzamiento.",
    primaryLabel: "Quiero prioridad",
    secondaryLabel: "Ver la interfaz",
    secondaryHref: "#app" as const,
  },

  about: {
    eyebrow: "Qué es Trainr",
    title: "Un hub de seis pestañas que ya existe en la app móvil.",
    body:
      "La pantalla principal es un shell fijo: arriba, acceso a tu perfil, notificaciones, búsqueda de usuarios y crear publicación; en el centro, el contenido de la pestaña activa con scroll independiente; abajo, la misma barra de seis iconos (Inicio, Explorar, Chats, Entreno, Nutrición, Premium). El feed aplica reglas de visibilidad: las cuentas privadas no aparecen en Explorar, y en el resto del feed solo las ves si ya sigues al autor o eres tú.",
    footnote:
      "Colores y radios de esta web coinciden con los tokens de la app Flutter (#0F0F0F, #161616, #FF7A00, tarjetas a 24px).",
    pillars: [
      {
        label: "Feed",
        title: "Inicio y Explorar",
        body: "Publicaciones con texto e imagen, tipo, enlace opcional a rutina de entreno, likes y comentarios. Cada post abre detalle, el autor enlaza a su perfil y hay flujo para reportar contenido. Explorar es descubrimiento solo con perfiles públicos.",
      },
      {
        label: "Mensajes",
        title: "Chats 1:1",
        body: "Lista de conversaciones uno a uno, vista previa del último mensaje y hora. Al abrir, chat en tiempo real. La pestaña inferior muestra badge cuando hay conversaciones sin leer.",
      },
      {
        label: "Perfil",
        title: "Identidad y grid",
        body: "`PerfilScreen`: cabecera con identidad, seguir / mensaje, seguidores y seguidos, grid de publicaciones y accesos a comentarios y premium según contexto.",
      },
      {
        label: "Social",
        title: "Búsqueda y comentarios",
        body: "`SearchUsersScreen` desde la barra superior del hub. Comentarios en hilo dedicado. Relación follow expuesta en pantallas de seguidores/seguidos.",
      },
      {
        label: "Datos",
        title: "Firestore en uso",
        body: "Publicaciones, perfiles, chats y progreso de entreno persisten en backend (Firestore): posts por autor, documentos de usuario, subcolección de ejercicios completados, etc. Es la arquitectura que sostiene la build actual.",
      },
    ] as const,
  },

  features: [
    {
      id: "feed",
      title: "Tu progreso, visible",
      description:
        "Comparte entrenos y avances en un feed pensado para el gym: texto, foto, reacciones y comentarios de gente que entiende el contexto — más que likes vacíos.",
      icon: "feed" as const,
    },
    {
      id: "chat",
      title: "Habla con quien entrena como tú",
      description:
        "Chats uno a uno para coordinar series, dudas de técnica o simplemente apoyo. Lista clara, último mensaje a la vista y aviso si hay algo sin leer.",
      icon: "chat" as const,
    },
    {
      id: "profile",
      title: "Tu identidad fitness",
      description:
        "Perfil con lo que importa: quién eres, tu grid de publicaciones, seguidores y un atajo para escribir a quien quieras conocer mejor.",
      icon: "profile" as const,
    },
    {
      id: "social",
      title: "Encuentra y comenta con propósito",
      description:
        "Busca usuarios, mira seguidores y seguidos, y mete en los posts el comentario que aporta — no el emoji suelto.",
      icon: "social" as const,
    },
    {
      id: "training",
      title: "Planes que te quitan excusas",
      description:
        "Rutinas por nivel y días de la semana con ejercicios y series concretas. Menos improvisación, más estructura para seguir el plan.",
      icon: "training" as const,
    },
    {
      id: "nutrition",
      title: "Nutrición con números claros",
      description:
        "Planes tipo volumen o definición con kcal y macros, y comidas del día desglosadas para que no adivines qué comer.",
      icon: "nutrition" as const,
    },
    {
      id: "premium",
      title: "Premium sin fricción",
      description:
        "Suscripción mensual: sin anuncios que te saquen del foco, insignia en perfil, extras para la comunidad y prioridad en lo que venga nuevo.",
      icon: "premium" as const,
    },
  ] as const,

  showcase: {
    eyebrow: "Producto",
    title: "Así se ve tu progreso en Trainr",
    lead: "Feed serio, perfil con peso y chat directo — tres capas, una sola app.",
    devices: [
      { label: "Feed", caption: "Tu avance, con contexto" },
      { label: "Perfil", caption: "Identidad que se nota" },
      { label: "Chat", caption: "Acuerdos entre series" },
    ] as const,
  },
} as const;
