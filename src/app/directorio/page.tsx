import { miembros } from "@/data/miembros";

export default function DirectorioPage() {
  return (
    <section className="min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Comunidad
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Directorio de socios
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Socios activos de FJ Club Chile. Con su autorización, mostramos su
          nombre, región y el modelo de su FJ.
        </p>

        <div className="mt-10 overflow-x-auto border border-ink/15">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/15 bg-sand-2 font-mono text-xs uppercase tracking-wide text-ripio">
                <th className="px-4 py-3 font-medium">Socio</th>
                <th className="px-4 py-3 font-medium">Modelo</th>
                <th className="px-4 py-3 font-medium">Año</th>
                <th className="px-4 py-3 font-medium">Región</th>
                <th className="px-4 py-3 font-medium">Socio desde</th>
              </tr>
            </thead>
            <tbody>
              {miembros.map((m, i) => (
                <tr
                  key={m.nombre}
                  className={`border-b border-ink/10 ${i % 2 === 1 ? "bg-sand-2/40" : ""}`}
                >
                  <td className="px-4 py-3 font-display font-medium text-ink">
                    {m.nombre}
                  </td>
                  <td className="px-4 py-3 text-ink/70">{m.modelo}</td>
                  <td className="px-4 py-3 font-mono text-ink/70">{m.anio}</td>
                  <td className="px-4 py-3 text-ink/70">{m.region}</td>
                  <td className="px-4 py-3 font-mono text-ink/70">{m.desde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-ink/50">
          ¿Eres socio y quieres aparecer aquí (o prefieres no aparecer)?{" "}
          <a href="/contacto" className="text-steel-dark underline hover:text-rust">
            Escríbenos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
