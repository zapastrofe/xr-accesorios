export default function EliminacionDatosPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900">
      <article className="mx-auto max-w-3xl">
        <a
          href="/"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          ← Volver a SFmoto
        </a>

        <h1 className="mt-8 text-4xl font-black tracking-tight">
          Eliminación de Datos
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Última actualización: 26 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Cómo solicitar la eliminación de tus datos
            </h2>

            <p className="mt-2">
              Si te comunicaste con SFmoto mediante nuestro sitio web,
              WhatsApp Business u otros canales oficiales y querés solicitar
              la eliminación de tus datos personales, podés hacerlo
              contactándonos por nuestros canales oficiales de atención.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Información necesaria
            </h2>

            <p className="mt-2">
              Para identificar correctamente la información asociada a tu
              solicitud, podremos pedirte datos mínimos como nombre, número de
              teléfono utilizado para contactarnos y una breve descripción de
              la solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Qué datos pueden eliminarse
            </h2>

            <p className="mt-2">
              La solicitud puede incluir información vinculada a consultas,
              conversaciones, datos de contacto y otros datos personales
              proporcionados voluntariamente a SFmoto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Plazo de procesamiento
            </h2>

            <p className="mt-2">
              SFmoto procesará las solicitudes de eliminación dentro de un
              plazo razonable, sujeto a la identificación correcta de la
              información y a cualquier obligación de conservación que pudiera
              corresponder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Proveedores externos
            </h2>

            <p className="mt-2">
              Parte de la información puede ser procesada por proveedores
              tecnológicos utilizados para prestar nuestros servicios, como
              plataformas de mensajería, alojamiento o automatización. Cuando
              corresponda, la eliminación se gestionará también respecto de
              dichos sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Contacto
            </h2>

            <p className="mt-2">
              Para solicitar la eliminación de tus datos, comunicate con
              SFmoto por nuestros canales oficiales e indicá que se trata de
              una solicitud de eliminación de datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              Política de Privacidad
            </h2>

            <p className="mt-2">
              Podés consultar más información sobre el tratamiento de datos en
              nuestra Política de Privacidad.
            </p>

            <a
              href="/privacidad"
              className="mt-2 inline-block font-semibold text-orange-600 hover:text-orange-700"
            >
              Ver Política de Privacidad
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}