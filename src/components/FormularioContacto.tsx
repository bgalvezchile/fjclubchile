"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Estado = "idle" | "enviando" | "ok" | "error";

export default function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      modelo: (form.elements.namedItem("modelo") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Error al enviar");
      setEstado("ok");
      form.reset();
    } catch (err) {
      setEstado("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar");
    }
  }

  if (estado === "ok") {
    return (
      <div className="flex items-start gap-3 border border-steel-dark/30 bg-steel-dark/5 p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-steel-dark" />
        <div>
          <p className="font-display text-lg font-medium uppercase text-ink">
            Mensaje enviado
          </p>
          <p className="mt-1 text-sm text-ink/70">
            Gracias por escribir. Te responderemos a la brevedad.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="font-mono text-xs uppercase tracking-wide text-ripio">
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="mt-1.5 w-full border border-ink/20 bg-sand px-3 py-2.5 text-ink outline-none focus:border-rust"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ripio">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full border border-ink/20 bg-sand px-3 py-2.5 text-ink outline-none focus:border-rust"
          />
        </div>
      </div>

      <div>
        <label htmlFor="modelo" className="font-mono text-xs uppercase tracking-wide text-ripio">
          Modelo y año de tu FJ (si tienes)
        </label>
        <input
          id="modelo"
          name="modelo"
          type="text"
          placeholder="Ej: FJ Cruiser 2012"
          className="mt-1.5 w-full border border-ink/20 bg-sand px-3 py-2.5 text-ink outline-none focus:border-rust"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="font-mono text-xs uppercase tracking-wide text-ripio">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="mt-1.5 w-full border border-ink/20 bg-sand px-3 py-2.5 text-ink outline-none focus:border-rust"
        />
      </div>

      {estado === "error" && (
        <div className="flex items-start gap-2 border border-rust-dark/30 bg-rust-dark/5 p-4 text-sm text-rust-dark">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-bone transition-colors hover:bg-rust-dark disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
