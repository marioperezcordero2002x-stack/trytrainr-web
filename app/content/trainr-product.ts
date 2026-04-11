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
    headline: "Tu gym social,",
    headlineAccent: "en un solo hub.",
    subhead:
      "Seis pestañas fijas (Inicio, Explorar, Chats, Entreno, Nutrición, Premium), barra superior con perfil, notificaciones, búsqueda y nuevo post. Feed con publicaciones, likes y comentarios; chat uno a uno; planes de entreno por días y ejercicios; nutrición con macros y comidas; Premium con suscripción mensual. Oscuro #0F0F0F y acento #FF7A00 como en la app.",
    primaryCta: "Cómo está construido",
    secondaryCta: "App Store · en curso",
    tertiaryCta: "Contacto producto",
    specRows: [
      { label: "Navegación", value: "6 pestañas en hub" },
      { label: "Chat", value: "Conversaciones 1:1" },
      { label: "Monetización", value: "Premium vía tienda" },
    ] as const,
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
      title: "Feed social (Inicio + Explorar)",
      description:
        "Dos superficies en el hub: el feed principal y Explorar para descubrir contenido público. Cada publicación lleva autor, texto, imagen opcional, contadores de likes y comentarios, y puede enlazar a una rutina (routineId).",
      icon: "feed" as const,
    },
    {
      id: "chat",
      title: "Chats privados",
      description:
        "Lista de conversaciones uno a uno, último mensaje y hora. Entrada a chat individual y flujo para iniciar conversación. Contador de no leídos en la pestaña inferior.",
      icon: "chat" as const,
    },
    {
      id: "profile",
      title: "Perfil fitness",
      description:
        "Perfil con foto, identidad, estadísticas, publicaciones en grid y acciones de seguimiento y mensaje. Pensado como tarjeta de visita dentro de la comunidad.",
      icon: "profile" as const,
    },
    {
      id: "social",
      title: "Comunidad y comentarios",
      description:
        "Búsqueda de usuarios desde el hub. Seguidores y seguidos. Comentarios en publicaciones con pantalla dedicada — el lazo social alrededor del feed.",
      icon: "social" as const,
    },
    {
      id: "training",
      title: "Planes de entreno",
      description:
        "Pestaña Entreno con planes por nivel y frecuencia semanal: días nombrados y listas de ejercicios con series/reps. Progreso ligado a documentos de usuario y ejercicios completados en Firestore.",
      icon: "training" as const,
    },
    {
      id: "nutrition",
      title: "Nutrición estructurada",
      description:
        "Pestaña Nutrición con planes como volumen o definición: rangos de kcal, proteína, carbohidratos y grasas, y comidas del día desglosadas en alimentos concretos.",
      icon: "nutrition" as const,
    },
    {
      id: "premium",
      title: "Trainr Premium",
      description:
        "Suscripción mensual vía RevenueCat: sin anuncios en feed y navegación, insignia en perfil, contenido exclusivo, estadísticas avanzadas en expansión y acceso anticipado a novedades. Restaurar compras soportado.",
      icon: "premium" as const,
    },
  ] as const,

  showcase: {
    eyebrow: "Interfaz",
    title: "Misma jerarquía que en el binario",
    lead:
      "Referencia visual alineada a `TrainrAppCard`, `TrainrPrimaryButton` y tokens `TrainrColors`: fondo #0F0F0F, superficies #161616 / #1B1B1B, acento #FF7A00. Sustituye por capturas del simulador cuando quieras material de prensa.",
    devices: [
      { label: "Inicio", caption: "Feed · post · acciones" },
      { label: "Chats", caption: "Lista 1:1" },
      { label: "Entreno", caption: "Plan · día" },
    ] as const,
  },
} as const;
