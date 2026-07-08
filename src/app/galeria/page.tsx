import Link from "next/link";
import Image from "next/image";
import { albumes } from "@/data/albumes";

export default function GaleriaPage() {
  return (
    <section className="min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Bitácora visual
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Galería
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Fotos organizadas por salida. Se van a ir agregando álbumes nuevos a
          medida que tengamos el material.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {albumes.map((album) => (
            <Link
              key={album.slug}
              href={`/galeria/${album.slug}`}
              className="group block overflow-hidden border border-ink/15 bg-sand-2/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={album.portada}
                  alt={album.titulo}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {!album.oficial && (
                  <span className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-bone">
                    No oficial
                  </span>
                )}
                <span className="absolute bottom-3 right-3 rounded-sm bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-bone">
                  {album.fotos.length} foto{album.fotos.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="p-4">
                <p className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {album.titulo}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ripio">
                  {album.lugar} · {album.fecha}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
