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
    headline: "La red social donde",
    headlineAccent: "el progreso importa.",
    subhead:
      "Entrena, comparte y habla con gente que va en serio. Feed con tu evolución visible, chat directo, planes de entreno, nutrición con macros y una comunidad que entiende el gym — todo en una app oscura, rápida y sin ruido de otras redes.",
    primaryCta: "Ver qué incluye la app",
    primaryHref: "#features" as const,
    secondaryCta: "Próximamente en App Store",
    tertiaryCta: "Prioridad acceso · escríbenos",
    specRows: [
      { label: "Tu evolución", value: "Visible en el feed" },
      { label: "Conexión real", value: "Chat 1:1 con atletas" },
      { label: "Plan completo", value: "Entreno + nutrición" },
    ] as const,
  },

  featuresIntro: {
    eyebrow: "Todo en una app",
    title: "Diseñada para quien entrena, no para quien presume",
    lead: "Cada función empuja a constancia y contacto útil — no a viralidad vacía.",
  },

  differentiators: {
    eyebrow: "Diferencia",
    title: "Por qué Trainr es diferente",
    lead:
      "No es otra red genérica con fotos de comida. Está pensada para disciplina compartida.",
    points: [
      {
        title: "Comunidad de progreso real",
        body: "El centro es lo que entrenas y cómo evolucionas — no el postureo del día.",
      },
      {
        title: "Menos ruido, más hábito",
        body: "Interfaz oscura y directa para centrarte en sesiones, mensajes útiles y tu plan.",
      },
      {
        title: "Conexión entre gente seria",
        body: "Habla con perfiles que entienden cargas, RPE y constancia — no con desconocidos al azar.",
      },
      {
        title: "Tu evolución en foco",
        body: "Perfil, feed y herramientas alineados para que veas el hilo de semanas y meses.",
      },
    ] as const,
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
    eyebrow: "Dentro de la app",
    title: "Tres pantallas que usas cada día",
    lead:
      "Así se conecta el día a día: ver el feed, revisar un perfil y cerrar el círculo en el chat. Sustituye por capturas reales del simulador cuando publiques.",
    devices: [
      { label: "Feed", caption: "Progreso y conversación" },
      { label: "Perfil", caption: "Identidad y grid" },
      { label: "Chat", caption: "Mensajes directos" },
    ] as const,
  },
} as const;
