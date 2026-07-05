import Image from "next/image";
import FormularioInscripcionRuta5 from "@/components/FormularioInscripcionRuta5";

export const metadata = {
  title: "Inscripción 5ª Ruta FJ Club Chile — Cerro Dóñihue",
};

export default function Ruta5Page() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-0 pt-0">
        <Image
          src="/ruta5-poster.jpg"
          alt="Poster 5ª Ruta FJ Club Chile — 25 julio 2026 — Cerro Dóñihue"
          width={1600}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="bg-rust text-bone text-center py-2.5 font-display text-sm font-semibold uppercase tracking-wider">
        Salida oficial FJ Club Chile · Un día · Territorio nacional
      </div>

      <section className="topo-bg border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="font-mono text-xs uppercase tracking-widest text-rust">
            Sobre esta salida
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
            5ª Ruta FJ Club Chile
          </h1>
          <p className="mt-4 text-ink/70">
            Esta salida busca reunir a los socios en una jornada off-road de un
            día en Cerro Dóñihue, registrando a cada piloto, sus acompañantes y
            su vehículo, y verificando que todos cuenten con la documentación
            mínima para circular en convoy con seguridad.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-ink/15 bg-ink/15">
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">Fecha</p>
              <p className="mt-1 font-display text-lg font-medium text-ink">Sábado 25 de julio de 2026</p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">Lugar</p>
              <p className="mt-1 font-display text-lg font-medium text-ink">Cerro Dóñihue</p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">Punto de encuentro</p>
              <p className="mt-1 font-display text-lg italic font-normal text-rust">Por confirmar</p>
            </div>
            <div className="bg-sand p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ripio">Frecuencia de radio</p>
              <p className="mt-1 font-display text-lg font-medium text-ink">VHF 153.710 MHz</p>
            </div>
          </div>

          <div className="mt-6 border-l-2 border-rust bg-rust/5 p-4 text-sm text-ink/80">
            Salida de <strong>un solo día</strong>, ida y vuelta — no se pernocta.
            Cada participante debe llevar su <strong>propio morral con comida y
            agua</strong> para toda la jornada: no hay parada programada para
            comprar alimentos.
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="font-mono text-xs uppercase tracking-widest text-rust">
            Inscripción
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
            Completa tus datos
          </h2>
          <p className="mt-2 mb-8 text-sm text-ink/60">
            Un formulario por vehículo. Todos los pilotos deben inscribirse
            antes del día de la salida.
          </p>
          <FormularioInscripcionRuta5 />
        </div>
      </section>
    </>
  );
}
