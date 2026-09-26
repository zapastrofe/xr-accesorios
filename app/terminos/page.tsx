export default function TerminosPage() {
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
          Términos y Condiciones
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Última actualización: 26 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              1. Alcance
            </h2>

            <p className="mt-2">
              Estos términos regulan el uso del sitio web y de los canales
              comerciales de SFmoto, incluyendo consultas realizadas mediante
              WhatsApp y otros medios de contacto oficiales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              2. Información de productos
            </h2>

            <p className="mt-2">
              SFmoto procura mantener actualizada la información sobre sus
              productos, incluyendo compatibilidad, características, precio y
              disponibilidad. Estos datos pueden modificarse sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              3. Compatibilidad
            </h2>

            <p className="mt-2">
              Antes de realizar una compra, el cliente debe verificar que el
              producto sea compatible con su motocicleta. SFmoto puede solicitar
              información adicional sobre modelo y versión para orientar la
              compra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              4. Precios y formas de compra
            </h2>

            <p className="mt-2">
              Los precios publicados pueden variar según el canal de venta,
              promociones, costos de envío, comisiones de terceros o medios de
              pago utilizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              5. Envíos
            </h2>

            <p className="mt-2">
              Los plazos, costos y condiciones de envío pueden variar según la
              ubicación del cliente, el operador logístico y el canal de compra
              elegido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              6. Plataformas de terceros
            </h2>

            <p className="mt-2">
              Algunas operaciones pueden realizarse mediante servicios de
              terceros, como plataformas de mensajería, alojamiento,
              automatización, medios de pago o marketplaces. En esos casos,
              también pueden aplicar los términos y condiciones de dichos
              proveedores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              7. Uso del sitio
            </h2>

            <p className="mt-2">
              El usuario se compromete a utilizar el sitio y los canales de
              contacto de manera legítima y a proporcionar información correcta
              cuando sea necesaria para gestionar consultas o compras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              8. Privacidad
            </h2>

            <p className="mt-2">
              El tratamiento de datos personales se encuentra detallado en
              nuestra Política de Privacidad.
            </p>

            <a
              href="/privacidad"
              className="mt-2 inline-block font-semibold text-orange-600 hover:text-orange-700"
            >
              Ver Política de Privacidad
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950">
              9. Contacto
            </h2>

            <p className="mt-2">
              Para consultas relacionadas con estos términos, podés comunicarte
              con SFmoto mediante sus canales oficiales de atención.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}