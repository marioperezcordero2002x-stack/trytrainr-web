/**
 * Marketing copy: two-coach daily guidance. Primary language EN for the landing.
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
        line: "Today's direction — not guesswork at the rack.",
      },
      {
        title: "Know how to eat",
        line: "Practical guidance aligned with your session.",
      },
      {
        title: "Stop overthinking the day",
        line: "One system. Fewer decisions. More consistency.",
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: "How Trainr works",
    title: "Daily clarity, built in three moves.",
    steps: [
      {
        title: "Training Coach decides today's training direction",
        body: "What to do, how hard to push, and where the session should land — so you execute instead of debating.",
      },
      {
        title: "Nutrition Coach tells you how to eat today",
        body: "Clear, practical eating guidance that complements the work you did — without rigid dieting or macro obsession.",
      },
      {
        title: "Together they create daily clarity and consistency",
        body: "Shared context between coaches means less contradiction, less mental load, and steadier adherence.",
      },
    ] as const,
  },

  coaches: {
    eyebrow: "The core",
    title: "Two coaches. One day.",
    lead: "Not a routine catalog or a classic macro tracker — real guidance to decide and follow through.",
    training: {
      label: "Training Coach",
      title: "Your training, directed",
      bullets: [
        "Decides what to train today.",
        "Adapts session direction as you go.",
        "Reduces decision fatigue before and during the workout.",
        "Feels like a coach — not a rep counter.",
      ] as const,
    },
    nutrition: {
      label: "Nutrition Coach",
      title: "How to eat today, made clear",
      bullets: [
        "Tells you how to eat today.",
        "Complements your training — doesn't fight it.",
        "No rigid dieting feel.",
        "No unnecessary macro obsession.",
        "Clear and practical.",
      ] as const,
    },
  },

  bundle: {
    eyebrow: "Better together",
    title: "One system. Better execution.",
    lead: "Training and nutrition should not live in separate apps.",
    points: [
      {
        title: "Strong alone",
        body: "Each coach removes friction in its lane — training decisions or eating decisions.",
      },
      {
        title: "Stronger together",
        body: "Shared daily context: fewer mixed signals between what you lift and how you fuel.",
      },
      {
        title: "Why it matters",
        body: "Less mental overhead, better adherence, and consistency that actually holds.",
      },
    ] as const,
  },

  whyTrainr: {
    eyebrow: "Why Trainr",
    title: "Premium is the clarity — not the feature list.",
    lead: "A focused product for people who want direction, not another noisy fitness app.",
    points: [
      {
        title: "Guidance-first",
        body: "Built around what to do today — training and nutrition — not around feeds or vanity metrics.",
      },
      {
        title: "Two coaches, one logic",
        body: "A single system where both sides read the same day, so you are not the integration layer.",
      },
      {
        title: "Quiet by design",
        body: "Dark UI, tight copy, and intent in every screen — so the product feels serious and considered.",
      },
    ] as const,
  },

  supporting: {
    eyebrow: "Beyond the core",
    title: "Built for execution first",
    body: "Supporting product layers sit around the coaching experience — useful when you need them, never the headline.",
  },

  showcase: {
    eyebrow: "Inside the app",
    title: "Your day, in two coach-led panels",
    lead: "Training direction and eating guidance — the visual story is the plan for today, not a social timeline.",
    devices: [
      { label: "Train", caption: "Today's session" },
      { label: "Fuel", caption: "Today's eating" },
      { label: "Sync", caption: "Shared context" },
    ] as const,
  },

  finalCta: {
    kicker: "Less noise. Better consistency.",
    title: "Start with clarity.",
    lead: "Be first to try the two-coach system. We'll follow up with early access details.",
    primaryLabel: "Get early access",
    secondaryLabel: "See the preview",
    secondaryHref: "#app" as const,
    mailtoSubject: "Trainr – early access" as const,
  },
} as const;
