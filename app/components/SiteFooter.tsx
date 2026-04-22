import Link from "next/link";
import { trainrProduct } from "../content/trainr-product";
import { TrainrLogoMark } from "./TrainrLogoMark";
import { Container } from "./system/Container";

function WhatsAppIcon({ className }: { className?: string }) {
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
        d="M12 21a9 9 0 1 0-7.87-4.6L3 21l4.77-1.08A8.96 8.96 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.9c.2-.5.5-.5.8-.5.3 0 .6 0 .8.5l.7 1.6c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.8 2.4 2.4l.6-.5c.2-.2.5-.2.8-.1l1.6.7c.5.2.5.5.5.8 0 .3 0 .6-.5.8-.6.3-1.4.5-2.1.3-3-.8-5.4-3.2-6.2-6.2-.2-.7 0-1.5.3-2.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteFooter() {
  const whatsAppHref = `https://wa.me/${trainrProduct.whatsApp.phoneE164}?text=${encodeURIComponent(
    trainrProduct.whatsApp.prefill,
  )}`;

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
                {trainrProduct.brand.name}
              </span>
            </Link>
            <p className="tr-text-body-sm mt-4 max-w-sm text-pretty">
              Landing pages dark premium para negocios locales. Claridad,
              velocidad y CTA a WhatsApp para generar clientes.
            </p>
            <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--tr-text-faint)]">
              {trainrProduct.brand.domain}
            </p>
          </div>

          <div>
            <p className="tr-text-overline">Contacto</p>
            <a
              href={whatsAppHref}
              className="mt-4 inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-[var(--tr-text-primary)] transition-colors hover:text-trainr-accent"
            >
              <WhatsAppIcon className="text-[var(--tr-text-faint)]" />
              WhatsApp
            </a>
            <p className="tr-text-body-sm mt-3 max-w-xs text-[var(--tr-text-tertiary)]">
              Respuesta rápida. Precio claro. Entrega en 72h.
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
            © {new Date().getFullYear()} {trainrProduct.brand.name}. Todos los
            derechos reservados.
          </p>
          <p className="text-[11px] text-[var(--tr-text-faint)]">
            Menos ruido. Más clientes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
