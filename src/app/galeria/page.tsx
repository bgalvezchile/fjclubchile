import { PlayCircle } from "lucide-react";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { galeria } from "@/data/galeria";

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
          Fotos y videos de nuestras salidas, aportados por los socios. Si
          estuviste en una ruta y quieres compartir tu registro, envíanoslo
          desde la página de contacto.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galeria.map((item) => (
            <div key={item.caption} className="relative">
              <PlaceholderPhoto caption={item.caption} />
              {item.tipo === "video" && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <PlayCircle
                    className="h-10 w-10 text-bone/90 drop-shadow"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
