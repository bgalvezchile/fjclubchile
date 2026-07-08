import Link from "next/link";
import { MessageCircle, Users, Compass, ArrowRight } from "lucide-react";

const pasos = [
  {
    Icon: MessageCircle,
    numero: "01",
    titulo: "Escríbenos",
    texto:
      "Cuéntanos: nombre y apellido, ciudad de residencia, patente de tu FJ y mándanos una foto de tu máquina, a través del formulario de contacto.",
  },
  {
    Icon: Compass,
    numero: "02",
    titulo: "Te contactamos",
    texto:
      "Alguno de los tres organizadores del club te escribe directo por WhatsApp para conocerte y responder tus dudas.",
  },
  {
    Icon: Users,
    numero: "03",
    titulo: "Te sumas al grupo",
    texto:
      "Te agregamos al grupo de WhatsApp del club, donde se coordinan las salidas. No hay cuota de incorporación ni cuota mensual — solo se cobra una cuota puntual por cada salida a la que decidas ir.",
  },
];

export default function ComoUnirtePage() {
  return (
    <section className="topo-bg min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Súmate al club
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Cómo unirte
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Somos una comunidad de propietarios de Toyota FJ Cruiser en Chile.
          Unirse es simple, y lo primero es conocernos en terreno.
        </p>

        <div className="mt-12 space-y-6">
          {pasos.map((paso) => (
            <div
              key={paso.numero}
              className="flex flex-col gap-4 border border-ink/15 bg-sand-2/40 p-6 sm:flex-row sm:items-start"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:pt-1">
                <span className="font-display text-3xl font-semibold text-rust/70">
                  {paso.numero}
                </span>
                <paso.Icon className="h-6 w-6 text-rust sm:hidden" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                  {paso.titulo}
                </h2>
                <p className="mt-1 text-sm text-ink/65">{paso.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-steel bg-steel/5 p-4 text-sm text-ink/80">
          <strong>Sin letra chica:</strong> no hay cuota de incorporación ni
          mensualidad. Lo único que se paga es una cuota puntual cuando
          participas de una salida específica, para cubrir gastos de esa
          actividad.
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-rust">
            Convivencia
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
            Normas del grupo
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink/70">
            <li className="flex gap-3">
              <span className="font-mono text-rust">01</span>
              Respeto ante todo: sin descalificaciones ni spam publicitario
              ajeno al club.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-rust">02</span>
              El grupo es para coordinar salidas y temas del club. Para la
              conversación del día a día está el grupo de amigos aparte.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-rust">03</span>
              Confirma tu asistencia a una salida con tiempo, para no dejar
              cupos reservados sin usar.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-rust">04</span>
              Si cancelas, avisa apenas lo sepas — otro socio puede estar
              esperando ese cupo.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-rust">05</span>
              Fotos y videos de las salidas son bienvenidos — compártelos,
              pueden terminar en la galería del sitio.
            </li>
          </ul>
          <p className="mt-6 text-xs text-ink/40">
            Estas normas son un punto de partida — se ajustan cuando el grupo
            lo defina.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/60">
            ¿Tienes un FJ Cruiser y quieres partir?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark"
          >
            Escríbenos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
