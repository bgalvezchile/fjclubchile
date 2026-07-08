import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { albumes } from "@/data/albumes";

export function generateStaticParams() {
  return albumes.map((a) => ({ slug: a.slug }));
}

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = albumes.find((a) => a.slug === slug);

  if (!album) notFound();

  return (
    <section className="min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Link
          href="/galeria"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ripio hover:text-rust"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Volver a galería
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
            {album.titulo}
          </h1>
          {!album.oficial && (
            <span className="rounded-sm bg-ink/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
              Salida no oficial
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ripio">
          {album.lugar} · {album.fecha}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {album.fotos.map((foto, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={foto.src}
                alt={foto.caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
                <p className="font-mono text-[11px] text-bone/80">{foto.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
