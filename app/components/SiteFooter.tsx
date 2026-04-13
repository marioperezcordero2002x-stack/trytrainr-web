import Link from "next/link";
import { TrainrLogoMark } from "./TrainrLogoMark";
import { Container } from "./system/Container";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--tr-border)] bg-[var(--tr-band-deep)]"
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[var(--tr-radius-sm)] text-[var(--tr-text-primary)] outline-offset-4 transition-opacity hover:opacity-90"
            >
              <TrainrLogoMark variant="footer" className="translate-y-px" />
              <span className="text-base font-semibold tracking-[-0.04em] sm:text-lg">
                Trainr
              </span>
            </Link>
            <p className="tr-text-body-sm mt-4 max-w-sm text-pretty">
              Guidance diario con Training Coach y Nutrition Coach: claridad de
              entreno y comida en un solo sistema, con contexto social opcional.
            </p>
            <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--tr-text-faint)]">
              trytrainr.com
            </p>
          </div>

          <div>
            <p className="tr-text-overline">Contacto</p>
            <a
              href="mailto:support@trytrainr.com"
              className="mt-4 inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-[var(--tr-text-primary)] transition-colors hover:text-trainr-accent"
            >
              <MailIcon className="text-[var(--tr-text-faint)]" />
              support@trytrainr.com
            </a>
            <p className="tr-text-body-sm mt-3 max-w-xs text-[var(--tr-text-tertiary)]">
              Prensa, partnerships o acceso anticipado: mismo canal.
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="tr-text-overline">Legal</p>
            <ul className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-8 lg:flex-col lg:gap-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[0.9375rem] text-[var(--tr-text-secondary)] transition-colors hover:text-[var(--tr-text-primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[0.9375rem] text-[var(--tr-text-secondary)] transition-colors hover:text-[var(--tr-text-primary)]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="tr-divider-fade my-10 sm:my-12" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[var(--tr-text-faint)]">
            © {new Date().getFullYear()} Trainr. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-[var(--tr-text-faint)]">
            Claridad sobre ruido.
          </p>
        </div>
      </Container>
    </footer>
  );
}
