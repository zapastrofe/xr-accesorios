"use client";

import { useEffect, useState } from "react";

const whatsappNumber = "549XXXXXXXXXX";

const whatsappMessage =
  "Hola, vi la parrilla portaequipaje para Honda XR 150, XR 190 y Tornado y quiero consultar.";

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=` +
  encodeURIComponent(whatsappMessage);

const mercadoLibreUrl = "https://www.mercadolibre.com.ar/";

type SectionId = "inicio" | "producto" | "compatibilidad" | "preguntas";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<SectionId>("inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      // Si estamos prácticamente arriba de todo,
      // siempre marcamos Inicio.
      if (window.scrollY < 120) {
        setActiveSection("inicio");
        return;
      }

      const sections: SectionId[] = [
        "producto",
        "compatibilidad",
        "preguntas",
      ];

      // Punto virtual debajo de la navbar sticky.
      const scrollPosition = window.scrollY + 220;

      let currentSection: SectionId = "producto";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const navClass = (section: SectionId) =>
    `border-b-2 pb-1 transition ${
      activeSection === section
        ? "border-orange-500 text-zinc-950"
        : "border-transparent hover:border-orange-200 hover:text-orange-600"
    }`;

  return (
    <main
      id="inicio"
      className="min-h-screen bg-white text-zinc-950"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* LOGO */}
          <a href="#inicio" className="flex items-center">
            <img
              src="/sfmoto-logo.png"
              alt="SFmoto"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* NAVBAR */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#inicio"
              className={navClass("inicio")}
              aria-current={
                activeSection === "inicio" ? "page" : undefined
              }
            >
              Inicio
            </a>

            <a
              href="#producto"
              className={navClass("producto")}
              aria-current={
                activeSection === "producto" ? "page" : undefined
              }
            >
              Producto
            </a>

            <a
              href="#compatibilidad"
              className={navClass("compatibilidad")}
              aria-current={
                activeSection === "compatibilidad"
                  ? "page"
                  : undefined
              }
            >
              Compatibilidad
            </a>

            <a
              href="#preguntas"
              className={navClass("preguntas")}
              aria-current={
                activeSection === "preguntas" ? "page" : undefined
              }
            >
              Preguntas
            </a>
          </nav>

          {/* WHATSAPP HEADER */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="producto"
        className="scroll-mt-28 mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2 lg:items-center lg:py-16"
      >
        {/* IMAGEN */}
        <div className="flex min-h-[480px] items-center justify-center rounded-3xl bg-zinc-50 p-6 sm:p-10 lg:min-h-[540px]">
          <img
            src="/parrilla-xr.png"
            alt="Parrilla portaequipaje Honda XR 150, XR 190 y Tornado"
            className="max-h-[500px] w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* INFORMACIÓN */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.25em] text-zinc-500">
              ACCESORIOS PARA TU MOTO
            </span>

            <span className="h-[2px] w-12 bg-orange-500" />
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            Parrilla Portaequipaje para Honda XR 150, XR 190 y
            Tornado
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Sumá más capacidad de carga a tu Honda XR con una
            parrilla resistente, funcional y pensada para el uso
            diario, trabajo, viajes y aventura.
          </p>

          {/* PRECIO */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <span className="text-5xl font-black tracking-tight">
              $78.900
            </span>

            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm">
              <div className="font-bold text-green-700">
                Envíos a todo el país
              </div>

              <div className="text-green-600">
                Rápido y seguro
              </div>
            </div>
          </div>

          {/* COMPATIBILIDAD */}
          <div className="mt-6 flex items-start gap-3 font-semibold">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm text-white">
              ✓
            </span>

            <span>
              Compatible con Honda XR 150, XR 190 y Tornado
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center rounded-xl bg-green-600 px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
            >
              Consultar por WhatsApp
            </a>

            <a
              href={mercadoLibreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-yellow-500"
            >
              Comprar por Mercado Libre
            </a>
          </div>

          {/* CONFIANZA */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6 text-center text-xs font-medium text-zinc-500">
            <div>
              <div className="mb-1 text-lg text-zinc-900">
                ✓
              </div>
              Compra segura
            </div>

            <div>
              <div className="mb-1 text-lg text-zinc-900">
                ↗
              </div>
              Envíos a todo el país
            </div>

            <div>
              <div className="mb-1 text-lg text-zinc-900">
                $
              </div>
              Múltiples medios de pago
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <Benefit
            icon="▣"
            title="Más capacidad de carga"
            description="Llevá herramientas, equipaje, mochila y todo lo que necesitás."
          />

          <Benefit
            icon="◆"
            title="Diseño resistente"
            description="Construida para acompañarte en el uso diario, trabajo y ruta."
          />

          <Benefit
            icon="◼"
            title="Terminación en negro"
            description="Acabado sobrio y robusto que combina con la estética de tu moto."
          />

          <Benefit
            icon="▲"
            title="Ideal para uso diario y viajes"
            description="Una solución práctica para ciudad, trabajo, ruta y aventura."
          />
        </div>
      </section>

      {/* COMPATIBILIDAD */}
      <section
        id="compatibilidad"
        className="scroll-mt-28 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-orange-600">
              COMPATIBILIDAD
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Una sola parrilla para tres modelos Honda XR
            </h2>

            <p className="mt-4 max-w-lg text-lg leading-8 text-zinc-600">
              El mismo producto es compatible con Honda XR 150, XR
              190 y XR Tornado, simplificando la compra y la
              instalación.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <CompatibilityCard model="Honda XR 150" />
            <CompatibilityCard model="Honda XR 190" />
            <CompatibilityCard model="Honda XR Tornado" />
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-orange-400">
              SIMPLE Y RÁPIDO
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Cómo comprar
            </h2>

            <p className="mt-4 text-zinc-400">
              Elegí la opción que te resulte más cómoda y resolvé la
              compra en pocos pasos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Step
              number="1"
              title="Confirmá tu modelo"
              description="Verificá que tu moto sea XR 150, XR 190 o XR Tornado."
            />

            <Step
              number="2"
              title="Consultá por WhatsApp"
              description="Escribinos y resolvemos compatibilidad, envío y dudas."
            />

            <Step
              number="3"
              title="Elegí cómo comprar"
              description="Podés cerrar la compra directamente o hacerlo por Mercado Libre."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="preguntas"
        className="scroll-mt-28 mx-auto max-w-5xl px-6 py-16"
      >
        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-orange-600">
            PREGUNTAS FRECUENTES
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Resolvé tus dudas antes de comprar
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          <Faq
            question="¿Sirve para XR 150, XR 190 y Tornado?"
            answer="Sí. Esta parrilla es compatible con Honda XR 150, XR 190 y XR Tornado."
          />

          <Faq
            question="¿Se puede comprar por Mercado Libre?"
            answer="Sí. Podés elegir entre compra directa o comprar mediante Mercado Libre."
          />

          <Faq
            question="¿Hacen envíos?"
            answer="Sí. Se realizan envíos a todo el país."
          />

          <Faq
            question="¿Puedo consultar por WhatsApp antes de comprar?"
            answer="Sí. Podés escribirnos para confirmar compatibilidad, envío o cualquier otra duda."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-zinc-200 bg-zinc-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Equipá tu Honda XR con más capacidad de carga
            </h2>

            <p className="mt-3 text-zinc-600">
              Compatible con XR 150, XR 190 y XR Tornado.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-7 py-4 text-center font-bold text-white transition hover:bg-green-700"
            >
              Consultar por WhatsApp
            </a>

            <a
              href={mercadoLibreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-zinc-950 transition hover:bg-yellow-500"
            >
              Comprar por Mercado Libre
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg font-black shadow-sm">
        {icon}
      </div>

      <h2 className="font-bold">{title}</h2>

      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}

function CompatibilityCard({
  model,
}: {
  model: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-black text-green-700">
        ✓
      </div>

      <div className="text-sm font-medium text-zinc-500">
        Compatible con
      </div>

      <div className="mt-1 text-xl font-black">
        {model}
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-black text-white">
        {number}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
        {question}

        <span className="text-xl transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
        {answer}
      </p>
    </details>
  );
}