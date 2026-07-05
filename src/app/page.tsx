import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="topo-bg flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <Compass className="h-12 w-12 text-rust" strokeWidth={1.5} />

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-rust">
        Jornada Estratégica MAF 2026 · FJ Club Chile
      </p>

      <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
        Sitio en construcción
      </h1>

      <p className="mt-5 max-w-md text-ink/70">
        Estamos armando el nuevo sitio de FJ Club Chile. Mientras tanto, si
        vienes por la 5ª Ruta del 25 de julio, inscríbete directo aquí:
      </p>

      <Link
        href="/ruta5"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
      >
        Inscripción 5ª Ruta <ArrowRight className="h-4 w-4" />
      </Link>

      <p className="mt-10 font-mono text-xs text-ripio">
        contacto@fjclubchile.cl
      </p>
    </section>
  );
}
