import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Política de privacidad de Trainr (trytrainr.com). Información sobre datos personales y sus derechos.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#050507] text-zinc-100">
      <SiteHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-[#ff6b2c]">
            Última actualización: 11 de abril de 2026
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            En Trainr (&quot;nosotros&quot;, &quot;la aplicación&quot;) respetamos
            su privacidad. Esta política describe de forma general qué tipo de
            información puede asociarse al uso de trytrainr.com y de la app Trainr,
            y cómo la tratamos. El texto siguiente es un marco placeholder
            profesional: sustituya o complete los apartados con el asesoramiento
            legal definitivo antes de publicar en producción.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            El responsable del tratamiento de los datos personales es la entidad
            que opera Trainr bajo el dominio trytrainr.com. Para cualquier
            consulta relacionada con esta política puede contactarnos en{" "}
            <a
              href="mailto:support@trytrainr.com"
              className="text-[#ff6b2c] hover:text-[#ff8550]"
            >
              support@trytrainr.com
            </a>
            .
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            2. Datos que podemos recabar
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Según las funcionalidades que active, podemos tratar identificadores
            de cuenta (por ejemplo, correo electrónico o ID de usuario),
            información de perfil que usted decida publicar, datos de uso de la
            aplicación (como interacciones con publicaciones o mensajes, de
            forma agregada o pseudonimizada cuando sea posible), datos técnicos
            del dispositivo o navegador, y registros de seguridad necesarios
            para mantener el servicio estable y seguro.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            3. Finalidades y bases legales
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Utilizamos los datos para prestar el servicio social y de fitness
            (cuenta, feed, chat, funciones de progreso), mejorar la experiencia
            y la fiabilidad del producto, comunicar incidencias o cambios
            relevantes, cumplir obligaciones legales, y —solo cuando corresponda
            y con las salvaguardas adecuadas— elaborar estadísticas o
            personalización no invasiva. Las bases legales concretas (ejecución
            de contrato, interés legítimo, consentimiento) se detallarán en la
            versión legal final según su jurisdicción.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            4. Conservación
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Conservamos la información el tiempo necesario para las finalidades
            descritas y para atender reclamaciones o requisitos legales. Los
            plazos exactos dependerán del tipo de dato y de la normativa
            aplicable.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            5. Cesiones y encargados
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            No vendemos sus datos personales. Podemos recurrir a proveedores de
            infraestructura, analítica o comunicaciones que actúen como
            encargados del tratamiento bajo contrato y medidas de seguridad
            apropiadas. Una lista actualizada de categorías de encargados puede
            incorporarse aquí cuando esté disponible.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            6. Derechos del interesado
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Según la ley aplicable, usted puede tener derecho a acceder,
            rectificar o suprimir sus datos, limitar u oponerse a determinados
            tratamientos, portar sus datos o retirar el consentimiento en
            cualquier momento. Para ejercer estos derechos, escriba a{" "}
            <a
              href="mailto:support@trytrainr.com"
              className="text-[#ff6b2c] hover:text-[#ff8550]"
            >
              support@trytrainr.com
            </a>
            . También puede presentar una reclamación ante la autoridad de
            protección de datos de su país.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            7. Seguridad
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Aplicamos medidas técnicas y organizativas razonables para proteger
            la información frente a accesos no autorizados, pérdida o alteración.
            Ningún sistema es completamente invulnerable; le animamos a usar
            contraseñas robustas y a no compartir credenciales.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            8. Menores
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Trainr no está dirigido a menores de edad según la definición legal
            aplicable. Si tiene conocimiento de que un menor ha facilitado datos
            sin el consentimiento parental requerido, contacte con nosotros
            para adoptar las medidas oportunas.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-white">
            9. Cambios en esta política
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Podemos actualizar esta Privacy Policy para reflejar cambios legales,
            técnicos o de producto. Publicaremos la versión revisada en
            trytrainr.com con una nueva fecha de entrada en vigor. El uso
            continuado del servicio tras la notificación constituirá su
            aceptación de los cambios, salvo que la ley exija un procedimiento
            distinto.
          </p>

          <p className="mt-12 text-sm text-zinc-500">
            <Link href="/" className="text-[#ff6b2c] hover:text-[#ff8550]">
              ← Volver al inicio
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
