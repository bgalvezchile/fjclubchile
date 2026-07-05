import FormularioContacto from "@/components/FormularioContacto";

export default function ContactoPage() {
  return (
    <section className="topo-bg min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-2xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Súmate
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Contacto
        </h1>
        <p className="mt-4 text-ink/70">
          ¿Tienes un FJ Cruiser y quieres unirte, o solo tienes una pregunta?
          Escríbenos y te contactamos apenas podamos.
        </p>

        <div className="mt-10">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
