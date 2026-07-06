import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-end overflow-hidden px-5 pb-16 text-center md:justify-center md:pb-0">
      <Image
        src="/hero-dunas.jpg"
        alt="Convoy FJ Club Chile en las dunas, con la bandera de Chile"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay oscuro en degradado para que el texto se lea bien sobre la foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-ink/10" />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/logos/logo-circle.jpg"
          alt="FJ Club Chile"
          width={96}
          height={96}
          className="rounded-full ring-2 ring-bone/40"
          priority
        />

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-rust">
          Club de propietarios Toyota FJ Cruiser · Chile
        </p>

        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-bone md:text-6xl">
          La ruta se hace
          <br />
          con más de uno
        </h1>

        <p className="mt-5 max-w-md text-bone/80">
          Cordillera, desierto y costa. Únete a la comunidad de FJ Cruiser más
          activa de Chile.
        </p>

        <Link
          href="/ruta5"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-rust px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-bone shadow-lg shadow-black/30 transition-colors hover:bg-rust-dark"
        >
          Inscripción 5ª Ruta <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="mt-8 font-mono text-xs text-bone/50">
          contacto@fjclubchile.cl
        </p>
      </div>

      <div className="flag-stripe absolute bottom-0 left-0 z-10 w-full" />
    </section>
  );
}
