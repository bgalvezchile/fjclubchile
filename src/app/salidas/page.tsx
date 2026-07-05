import { MapPin, Users, Gauge } from "lucide-react";
import { salidas } from "@/data/salidas";

function formatearFecha(iso: string) {
  return new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

const dificultadColor: Record<string, string> = {
  Fácil: "text-steel-dark border-steel-dark/30 bg-steel-dark/5",
  Moderada: "text-rust border-rust/30 bg-rust/5",
  Exigente: "text-rust-dark border-rust-dark/40 bg-rust-dark/10",
};

export default function SalidasPage() {
  return (
    <section className="topo-bg min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Calendario
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Próximas salidas
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Salidas ordenadas por fecha. Cada una indica dificultad, punto de
          encuentro y coordenadas de destino — revisa el estado de tu FJ antes
          de inscribirte.
        </p>

        <ol className="mt-12 space-y-6">
          {salidas.map((s) => (
            <li
              key={s.slug}
              className="border border-ink/15 bg-sand p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm capitalize text-steel-dark">
                    {formatearFecha(s.fecha)}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
                    {s.titulo}
                  </h2>
                </div>
                <span
                  className={`rounded-sm border px-3 py-1 font-mono text-xs uppercase tracking-wide ${dificultadColor[s.dificultad]}`}
                >
                  {s.dificultad}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-ink/70">{s.descripcion}</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink/10 pt-4 font-mono text-xs uppercase tracking-wide text-ripio">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {s.lugar}
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5" /> {s.coordenadas}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {s.cupos} cupos
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-ink/50">
          ¿Quieres proponer una ruta o coordinar una salida?{" "}
          <a href="/contacto" className="text-steel-dark underline hover:text-rust">
            Escríbenos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
