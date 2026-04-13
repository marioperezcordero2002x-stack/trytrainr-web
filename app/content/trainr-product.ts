/**
 * Landing copy: two-coach daily guidance. English. No social-first narrative.
 */

export const trainrProduct = {
  domain: "trytrainr.com",
  supportEmail: "support@trytrainr.com",

  hero: {
    eyebrow: "Two coaches. One system.",
    domainLine: "trytrainr.com",
    trustBadge: "Early access",
    headline: "Trainr tells you what to train and how to eat each day.",
    headlineAccent: "Less noise. More progress.",
    subhead:
      "Training Coach and Nutrition Coach work together to give you daily clarity, less friction, and better execution.",
    primaryCta: "Get early access",
    primaryHref: "#cta" as const,
    secondaryCta: "See how it works",
    secondaryHref: "#how-trainr-works" as const,
    tertiaryCta: "Email us for priority access",
  },

  quickValue: {
    items: [
      {
        title: "Know what to train",
        line: "Direction for today — not guesswork.",
      },
      {
        title: "Know how to eat",
        line: "Guidance that fits your training.",
      },
      {
        title: "Stop overthinking the day",
        line: "One system. Execute.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps. One day.",
    steps: [
      {
        title: "Training Coach decides today's training direction",
        body: "What to do and how the session should feel — so you lift, not debate.",
      },
      {
        title: "Nutrition Coach tells you how to eat today",
        body: "Practical eating that matches the work — without rigid dieting or macro noise.",
      },
      {
        title: "Together they create daily clarity and consistency",
        body: "Shared context: less contradiction between training and food, steadier habits.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "The product",
    title: "Two coaches. Your day.",
    lead: "This is the core: guidance you can act on — not a feature dump.",
    training: {
      label: "Training Coach",
      title: "Training, directed",
      bullets: [
        "Decides what to train today.",
        "Sets the direction for your day.",
        "Adapts the session as you go.",
        "Reduces mental friction.",
        "Feels like a coach — not a tracker.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "Nutrition, made practical",
      bullets: [
        "Tells you how to eat today.",
        "Complements your training with daily clarity.",
        "No rigid diet feeling.",
        "No unnecessary macro obsession.",
        "Practical and clear.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Better together",
    title: "One system. Better execution.",
    lead: "Training and nutrition work better when they work together.",
    sublead:
      "Split across apps and spreadsheets, you carry the mental load. Trainr carries it in one place.",
    points: [
      {
        title: "Each coach earns its keep",
        body: "Alone, each one still cuts decisions in its lane.",
      },
      {
        title: "Together, they compound",
        body: "One daily context — fuel and work stop working against each other.",
      },
      {
        title: "The natural default",
        body: "The bundle is the product: less friction, better adherence, consistency that lasts.",
      },
    ] as const,
  },

  premiumFeel: {
    eyebrow: "Premium by intent",
    title: "Not another fitness app.",
    lead: "A quieter, more serious system — built so you can actually follow through.",
    points: [
      {
        title: "Less noise",
        body: "No clutter competing for attention. The job is to guide the day.",
      },
      {
        title: "More consistency",
        body: "Structure you can repeat — not spikes of motivation that fade.",
      },
      {
        title: "Clearer daily action",
        body: "You always know the next useful step for training and eating.",
      },
      {
        title: "Designed for execution",
        body: "Every choice in the product pushes toward doing the work — not scrolling it.",
      },
    ] as const,
  },

  finalCta: {
    kicker: "Don't guess. Execute.",
    title: "Start with clarity.",
    subtitle: "Get daily guidance with Trainr.",
    lead: "Be first to try the two-coach system.",
    note: "We'll follow up with early access details.",
    primaryLabel: "Get early access",
    secondaryLabel: "See how it works",
    secondaryHref: "#how-trainr-works" as const,
    mailtoSubject: "Trainr – early access" as const,
  },
} as const;
