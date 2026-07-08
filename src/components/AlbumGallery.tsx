"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Foto } from "@/data/albumes";

export default function AlbumGallery({ fotos }: { fotos: Foto[] }) {
  const [abierta, setAbierta] = useState<number | null>(null);

  const cerrar = useCallback(() => setAbierta(null), []);
  const anterior = useCallback(
    () => setAbierta((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length)),
    [fotos.length]
  );
  const siguiente = useCallback(
    () => setAbierta((i) => (i === null ? null : (i + 1) % fotos.length)),
    [fotos.length]
  );

  useEffect(() => {
    if (abierta === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta, cerrar, anterior, siguiente]);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {fotos.map((foto, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setAbierta(i)}
            className="group relative aspect-[4/3] overflow-hidden text-left"
          >
            <Image
              src={foto.src}
              alt={foto.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
              <p className="font-mono text-[11px] text-bone/80">{foto.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {abierta !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
          onClick={cerrar}
        >
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 text-bone/70 transition-colors hover:text-bone"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 z-10 text-bone/60 transition-colors hover:text-bone md:left-6"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div
            className="relative flex max-h-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full">
              <Image
                src={fotos[abierta].src}
                alt={fotos[abierta].caption}
                width={1600}
                height={1200}
                className="max-h-[80vh] w-auto rounded-sm object-contain"
                priority
              />
            </div>
            <p className="mt-4 font-mono text-sm text-bone/70">
              {fotos[abierta].caption}
            </p>
            <p className="mt-1 font-mono text-xs text-bone/40">
              {abierta + 1} / {fotos.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 z-10 text-bone/60 transition-colors hover:text-bone md:right-6"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
