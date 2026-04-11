import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.06] bg-[#08080a]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              Trainr
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
              trytrainr.com · App social fitness para quienes entrenan con
              intención.
            </p>
            <a
              href="mailto:support@trytrainr.com"
              className="mt-4 inline-block text-sm text-[#ff6b2c] transition-colors hover:text-[#ff8550]"
            >
              support@trytrainr.com
            </a>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Legal
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Trainr. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
