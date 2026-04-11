import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Términos y condiciones de uso de Trainr (trytrainr.com). Condiciones generales del servicio.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-full flex-col bg-[var(--tr-canvas)] text-[var(--tr-text-primary)]">
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <article className="mx-auto max-w-3xl">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-trainr-accent">
            Última actualización: 11 de abril de 2026
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Bienvenido a Trainr. Al acceder o utilizar el sitio web trytrainr.com,
            la aplicación móvil Trainr o cualquier servicio relacionado, usted
            acepta quedar vinculado por estos términos. El texto que sigue es un
            borrador placeholder claro y estructurado; debe revisarse con
            asesoría legal antes de su uso definitivo en producción.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            1. Objeto del servicio
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Trainr ofrece una experiencia social y de fitness que puede incluir,
            entre otras, publicación de contenido, perfiles de usuario,
            mensajería, seguimiento de hábitos o entreno, y funciones premium o
            de suscripción según se implementen en cada versión. Nos reservamos
            el derecho de modificar, suspender o discontinuar funcionalidades
            con el fin de mejorar el producto o cumplir requisitos legales,
            procurando informar con la antelación razonable cuando sea posible.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            2. Elegibilidad y registro
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Para crear una cuenta debe tener capacidad legal para contratar en
            su jurisdicción y cumplir la edad mínima exigida por la ley aplicable.
            La información que proporcione debe ser veraz y mantenerse
            actualizada. Usted es responsable de la confidencialidad de sus
            credenciales y de toda actividad realizada desde su cuenta.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            3. Uso aceptable
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Se compromete a no utilizar Trainr de forma que vulnere la ley, los
            derechos de terceros o la integridad del servicio. Queda prohibido,
            a título enunciativo: acosar, amenazar o discriminar; distribuir
            malware o realizar ingeniería inversa no autorizada; suplantar
            identidades; publicar contenido ilegal, violento o sexualmente
            explícito cuando el producto no lo permita expresamente; o
            automatizar el acceso de modo que degrade la plataforma. Podemos
            investigar infracciones y aplicar medidas proporcionales, incluida la
            suspensión o el cierre de la cuenta.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            4. Contenido del usuario
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Conserva la propiedad intelectual del contenido que publique. Al
            cargarlo en Trainr, nos otorga una licencia no exclusiva, mundial y
            libre de royalties para alojar, reproducir, mostrar y distribuir
            dicho contenido en la medida necesaria para operar y promocionar el
            servicio, salvo que la ley o acuerdos específicos establezcan lo
            contrario. Puede retirar contenido en cualquier momento; las copias
            residuales en sistemas de respaldo pueden persistir durante un
            período técnico razonable.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            5. Salud y descargo de responsabilidad médica
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Trainr no sustituye el consejo médico, nutricional o de entrenamiento
            personalizado de un profesional cualificado. Las actividades físicas
            conllevan riesgos inherentes. Consulte a su médico antes de iniciar o
            intensificar un programa de ejercicio. El uso de la aplicación es bajo
            su propio riesgo y renuncia, en la medida permitida por la ley, a
            reclamar daños derivados de decisiones tomadas únicamente con base
            en contenido de la comunidad o de la app.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            6. Pagos y suscripciones
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Si Trainr ofrece planes de pago, las condiciones económicas, la
            facturación recurrente, los períodos de prueba y la política de
            reembolso se detallarán en el momento de la contratación y en
            documentación complementaria. Los precios pueden actualizarse con
            preaviso según lo exija la plataforma de pago o la normativa
            aplicable.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            7. Propiedad intelectual de Trainr
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            La marca Trainr, el diseño de la interfaz, el código, la documentación
            y demás elementos distintivos son propiedad de sus titulares
            respectivos. No se concede ninguna licencia sobre ellos salvo la
            estrictamente necesaria para usar el servicio conforme a estos
            términos.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            8. Limitación de responsabilidad
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            En la máxima medida permitida por la ley, Trainr y sus colaboradores
            no serán responsables por daños indirectos, lucro cesante, pérdida de
            datos o interrupciones del servicio. La responsabilidad total
            acumulada, salvo en casos de dolo o responsabilidad no excluible por
            ley, quedará limitada al importe abonado por usted a Trainr en los
            doce meses anteriores al hecho causante, o a cero si el servicio es
            gratuito.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            9. Indemnización
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Usted acepta mantener indemne a Trainr frente a reclamaciones de
            terceros derivadas de su uso indebido del servicio, de su contenido o
            del incumplimiento de estos términos.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            10. Ley aplicable y resolución de conflictos
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            La ley aplicable y el fuero competente se determinarán en la versión
            definitiva de este documento según el domicilio social del operador
            del servicio y las normas de consumo que correspondan. Hasta entonces,
            este apartado permanece como marcador de posición para completar con
            su asesor legal.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            11. Contacto
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Para consultas sobre estos Terms of Service:{" "}
            <a
              href="mailto:support@trytrainr.com"
              className="text-trainr-accent underline-offset-2 hover:underline"
            >
              support@trytrainr.com
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-zinc-500">
            <Link
              href="/"
              className="text-trainr-accent underline-offset-2 hover:underline"
            >
              ← Volver al inicio
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
