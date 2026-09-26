export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Última actualización: 26 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              1. Responsable
            </h2>

            <p className="mt-2">
              SFmoto es responsable del tratamiento de la información
              recibida a través de su sitio web, canales de atención y
              WhatsApp Business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              2. Información que podemos recopilar
            </h2>

            <p className="mt-2">
              Podemos recibir información que el usuario proporciona
              voluntariamente al comunicarse con SFmoto, incluyendo nombre,
              número de teléfono, mensajes enviados, modelo de motocicleta,
              localidad, código postal y datos necesarios para responder
              consultas o gestionar una compra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              3. Uso de la información
            </h2>

            <p className="mt-2">
              La información se utiliza para responder consultas, confirmar
              compatibilidad de productos, gestionar pedidos, coordinar
              envíos, brindar atención al cliente y mejorar nuestros procesos
              comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              4. WhatsApp
            </h2>

            <p className="mt-2">
              SFmoto puede utilizar WhatsApp Business y la plataforma de
              WhatsApp Business de Meta para recibir y responder mensajes.
              Los mensajes pueden ser procesados mediante herramientas de
              automatización utilizadas por SFmoto para brindar atención.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              5. Compartición de información
            </h2>

            <p className="mt-2">
              SFmoto no comercializa los datos personales de sus clientes.
              Podemos utilizar proveedores tecnológicos necesarios para
              operar nuestros servicios, tales como servicios de alojamiento,
              mensajería, automatización y plataformas de venta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              6. Conservación
            </h2>

            <p className="mt-2">
              La información se conserva únicamente durante el tiempo
              necesario para atender consultas, gestionar operaciones y
              cumplir con las finalidades descriptas en esta política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              7. Eliminación de datos
            </h2>

            <p className="mt-2">
              Los usuarios pueden solicitar la eliminación de sus datos
              personales. SFmoto dispone de una página específica con
              instrucciones para realizar esta solicitud.
            </p>

            <a
              href="/eliminacion-datos"
              className="mt-2 inline-block font-semibold text-orange-600 hover:text-orange-700"
            >
              Ver instrucciones para eliminación de datos
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              8. Contacto
            </h2>

            <p className="mt-2">
              Para consultas relacionadas con privacidad o tratamiento de
              datos, podés comunicarte con SFmoto a través de nuestros canales
              oficiales de contacto.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}