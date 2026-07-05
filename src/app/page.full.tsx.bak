import Link from "next/link";
import { ArrowRight, MapPin, Mountain, Users, Compass } from "lucide-react";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { salidas } from "@/data/salidas";
import { galeria } from "@/data/galeria";

function formatearFecha(iso: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export default function Home() {
  const proxima = salidas[0];

  return (
    <>
      {/* HERO — tratado como bitácora / trip computer, no como banner genérico */}
      <section className="topo-bg border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-10 md:pt-20 md:pb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-steel-dark">
            <span>Club Toyota FJ Cruiser</span>
            <span className="text-ripio">/</span>
            <span>Chile</span>
            <span className="text-ripio">/</span>
            <span>Est. 2019</span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
            La ruta se hace
            <br />
            <span className="text-rust">con más de uno.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Somos la comunidad de propietarios de Toyota FJ Cruiser en Chile.
            Cordillera, desierto y costa — organizamos salidas, compartimos
            rutas y nos cuidamos entre convoy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
            >
              Únete al club <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/salidas"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              Ver próximas salidas
            </Link>
          </div>

          {/* Bloque tipo "trip computer" con la próxima salida */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15 sm:grid-cols-4">
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">
                Próxima salida
              </p>
              <p className="mt-1 font-display text-lg font-medium text-ink">
                {proxima.titulo}
              </p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">
                Fecha
              </p>
              <p className="mt-1 font-mono text-lg text-ink">
                {formatearFecha(proxima.fecha)}
              </p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">
                Coordenadas
              </p>
              <p className="mt-1 font-mono text-lg text-ink">
                {proxima.coordenadas}
              </p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">
                Dificultad
              </p>
              <p className="mt-1 font-display text-lg font-medium text-steel-dark">
                {proxima.dificultad}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE EL CLUB */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-rust">
              Sobre el club
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
              No es solo el auto.
              <br />
              Es la ruta compartida.
            </h2>
            <p className="mt-5 text-ink/70">
              El FJ Cruiser dejó de fabricarse en 2014, pero en Chile su
              comunidad de dueños sigue creciendo. FJ Club Chile nació para
              juntar a esa comunidad: organizamos salidas de distinta
              exigencia, compartimos conocimiento mecánico y de manejo
              off-road, y cuidamos que cada convoy vuelva completo.
            </p>
            <p className="mt-4 text-ink/70">
              No importa si tu FJ está listo para el Atacama o recién estás
              aprendiendo a leer un mapa de curvas de nivel: hay un lugar en
              el convoy para ti.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <div>
                <p className="font-display text-3xl font-semibold text-rust">
                  120+
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ripio">
                  Socios activos
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-rust">
                  6
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ripio">
                  Regiones
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-rust">
                  2019
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ripio">
                  Fundación
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <PlaceholderPhoto caption="Convoy, Cajón del Maipo" ratio="aspect-[16/9]" />
            </div>
            <PlaceholderPhoto caption="Detalle, Farellones" />
            <PlaceholderPhoto caption="Atacama, 2025" />
          </div>
        </div>
      </section>

      <div className="trail-divider mx-5" />

      {/* POR QUÉ UNIRTE */}
      <section className="bg-ink-2 topo-bg-dark">
        <div className="mx-auto max-w-6xl px-5 py-16 text-bone md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-rust">
            Por qué unirte
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
            Tres razones para salir con nosotros
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <Mountain className="h-8 w-8 text-rust" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-medium uppercase">
                Rutas con criterio
              </h3>
              <p className="mt-2 text-sm text-bone/60">
                Cada salida tiene un nivel de dificultad claro y un
                coordinador responsable del convoy en terreno.
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-rust" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-medium uppercase">
                Comunidad real
              </h3>
              <p className="mt-2 text-sm text-bone/60">
                De Santiago a La Serena y Concepción. Socios que se prestan
                herramientas, repuestos y consejo mecánico.
              </p>
            </div>
            <div>
              <MapPin className="h-8 w-8 text-rust" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-medium uppercase">
                Todo el territorio
              </h3>
              <p className="mt-2 text-sm text-bone/60">
                Del altiplano al mar. Salidas documentadas con coordenadas,
                estado del camino y punto de encuentro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW GALERÍA */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-rust">
              Bitácora
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
              Última salidas en imágenes
            </h2>
          </div>
          <Link
            href="/galeria"
            className="inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wider text-steel-dark hover:text-rust"
          >
            Ver galería completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galeria.slice(0, 6).map((item) => (
            <PlaceholderPhoto key={item.caption} caption={item.caption} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-ink/10 bg-sand-2">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <Compass className="h-8 w-8 text-rust" />
            <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
              ¿Tienes un FJ Cruiser?
            </h2>
            <p className="mt-2 max-w-md text-ink/70">
              Cuéntanos de tu auto y súmate a la próxima salida.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
          >
            Postular al club <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
