import Link from "next/link";

const nav = [
  { href: "/#about", label: "Qué es" },
  { href: "/#features", label: "Características" },
  { href: "/#app", label: "La app" },
  { href: "/#contact", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-auto min-h-16 max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:contents">
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#ff6b2c]"
          >
            Trainr
          </Link>
          <a
            href="mailto:support@trytrainr.com"
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-200 transition-all hover:border-[#ff6b2c]/40 hover:bg-[#ff6b2c]/10 hover:text-white sm:hidden"
          >
            Contactar
          </a>
        </div>
        <nav className="flex items-center gap-4 overflow-x-auto pb-0.5 text-xs font-medium text-zinc-400 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:pb-0 md:gap-8 md:text-sm [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:support@trytrainr.com"
          className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:border-[#ff6b2c]/40 hover:bg-[#ff6b2c]/10 hover:text-white sm:inline-flex sm:shrink-0"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
