"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

const MARCAS = [
  "Toyota FJ Cruiser",
  "Toyota otros modelos",
  "Jeep",
  "Suzuki",
  "Ford",
  "Mitsubishi",
  "Nissan",
  "Chevrolet",
  "Isuzu",
  "Land Rover",
  "Mahindra",
  "RAM",
  "Otras marcas",
];

const DOCUMENTOS = [
  { id: "cedula", label: "Documento de identidad vigente", tag: "Obligatorio" },
  { id: "licencia", label: "Licencia de conducir vigente", tag: "Obligatorio" },
  { id: "padron", label: "Padrón / certificado de inscripción del vehículo", tag: "Obligatorio" },
  { id: "permiso", label: "Permiso de circulación vigente (2026)", tag: "Obligatorio" },
  { id: "revision", label: "Revisión técnica al día", tag: "Obligatorio" },
  { id: "notarial_vehiculo", label: "Autorización notarial del dueño (si el vehículo no está a tu nombre)", tag: "Si aplica" },
  { id: "notarial_menor", label: "Autorización notarial de un padre/tutor (si el menor viaja con uno solo)", tag: "Si aplica" },
];

type Acompanante = { nombre: string; rut: string };
type Estado = "idle" | "enviando" | "ok" | "error";

export default function FormularioInscripcionRuta5() {
  const [pilotoNombre, setPilotoNombre] = useState("");
  const [rut, setRut] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefonoEmergencia, setTelefonoEmergencia] = useState("");
  const [email, setEmail] = useState("");
  const [marca, setMarca] = useState("");
  const [patente, setPatente] = useState("");

  const [tieneAcompanantes, setTieneAcompanantes] = useState<"si" | "no" | "">("");
  const [cantidadAcompanantes, setCantidadAcompanantes] = useState(0);
  const [acompanantes, setAcompanantes] = useState<Acompanante[]>([]);

  const [documentos, setDocumentos] = useState<string[]>([]);
  const [aceptaDeclaracion, setAceptaDeclaracion] = useState(false);

  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function actualizarCantidad(n: number) {
    setCantidadAcompanantes(n);
    setAcompanantes((prev) => {
      const next = [...prev];
      next.length = n;
      for (let i = 0; i < n; i++) {
        if (!next[i]) next[i] = { nombre: "", rut: "" };
      }
      return next;
    });
  }

  function actualizarAcompanante(i: number, field: keyof Acompanante, value: string) {
    setAcompanantes((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  }

  function toggleDocumento(id: string) {
    setDocumentos((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!aceptaDeclaracion) {
      setErrorMsg("Debes aceptar la declaración de responsabilidad para continuar.");
      return;
    }

    setEstado("enviando");

    const payload = {
      pilotoNombre,
      rut,
      telefono,
      telefonoEmergencia,
      email,
      marca,
      patente,
      tieneAcompanantes: tieneAcompanantes || "no",
      acompanantes: tieneAcompanantes === "si" ? acompanantes : [],
      documentos: documentos.map(
        (id) => DOCUMENTOS.find((d) => d.id === id)?.label || id
      ),
      aceptaDeclaracion,
    };

    try {
      const res = await fetch("/api/inscripcion-ruta5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Error al enviar");
      setEstado("ok");
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
            Inscripción enviada
          </p>
          <p className="mt-1 text-sm text-ink/70">
            Gracias, {pilotoNombre.split(" ")[0] || "piloto"}. Quedaste registrado
            para la 5ª Ruta. Nos vemos el 25 de julio.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full border border-ink/20 bg-sand px-3 py-2.5 text-ink outline-none focus:border-rust";
  const labelClass = "font-mono text-xs uppercase tracking-wide text-ripio";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* SECCIÓN 1 */}
      <fieldset className="space-y-5">
        <legend className="mb-2 font-display text-lg font-semibold uppercase text-ink">
          1. Identificación
        </legend>

        <div>
          <label className={labelClass}>Nombre completo del piloto *</label>
          <input required value={pilotoNombre} onChange={(e) => setPilotoNombre(e.target.value)} className={inputClass} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>RUT / DNI *</label>
            <input required value={rut} onChange={(e) => setRut(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email del piloto *</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Teléfono de contacto *</label>
            <input required value={telefono} onChange={(e) => setTelefono(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Teléfono de emergencia (que no participa) *</label>
            <input required value={telefonoEmergencia} onChange={(e) => setTelefonoEmergencia(e.target.value)} className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* SECCIÓN 2 */}
      <fieldset className="space-y-5">
        <legend className="mb-2 font-display text-lg font-semibold uppercase text-ink">
          2. Vehículo
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Marca *</label>
            <select required value={marca} onChange={(e) => setMarca(e.target.value)} className={inputClass}>
              <option value="" disabled>Selecciona una opción</option>
              {MARCAS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Patente del vehículo *</label>
            <input required value={patente} onChange={(e) => setPatente(e.target.value)} className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* SECCIÓN 3 */}
      <fieldset className="space-y-5">
        <legend className="mb-2 font-display text-lg font-semibold uppercase text-ink">
          3. Acompañantes
        </legend>

        <div>
          <label className={labelClass}>¿Viajas con acompañantes? *</label>
          <div className="mt-2 flex gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="tieneAcompanantes"
                required
                checked={tieneAcompanantes === "si"}
                onChange={() => setTieneAcompanantes("si")}
              />
              Sí
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="tieneAcompanantes"
                required
                checked={tieneAcompanantes === "no"}
                onChange={() => {
                  setTieneAcompanantes("no");
                  actualizarCantidad(0);
                }}
              />
              No
            </label>
          </div>
        </div>

        {tieneAcompanantes === "si" && (
          <>
            <div>
              <label className={labelClass}>Cantidad de acompañantes *</label>
              <select
                required
                value={cantidadAcompanantes || ""}
                onChange={(e) => actualizarCantidad(Number(e.target.value))}
                className={inputClass}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value={1}>Un acompañante</option>
                <option value={2}>Dos acompañantes</option>
                <option value={3}>Tres acompañantes</option>
                <option value={4}>Cuatro acompañantes</option>
              </select>
            </div>

            {acompanantes.map((a, i) => (
              <div key={i} className="grid gap-4 border border-ink/10 bg-sand-2/50 p-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Nombre acompañante {i + 1} *</label>
                  <input
                    required
                    value={a.nombre}
                    onChange={(e) => actualizarAcompanante(i, "nombre", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>RUT acompañante {i + 1} *</label>
                  <input
                    required
                    value={a.rut}
                    onChange={(e) => actualizarAcompanante(i, "rut", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </fieldset>

      {/* SECCIÓN 4 */}
      <fieldset className="space-y-4">
        <legend className="mb-2 font-display text-lg font-semibold uppercase text-ink">
          4. Documentación
        </legend>
        <p className="text-sm text-ink/60">
          Marca los documentos con los que cuentas. Los marcados como
          &ldquo;Si aplica&rdquo; solo son obligatorios en tu caso particular
          (menores de edad o vehículo no propio).
        </p>
        <div className="space-y-2">
          {DOCUMENTOS.map((doc) => (
            <label
              key={doc.id}
              className="flex items-center gap-3 border border-ink/10 bg-sand-2/40 px-4 py-3 text-sm"
            >
              <input
                type="checkbox"
                checked={documentos.includes(doc.id)}
                onChange={() => toggleDocumento(doc.id)}
              />
              <span className="flex-1">{doc.label}</span>
              <span
                className={`font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-sm text-bone ${
                  doc.tag === "Obligatorio" ? "bg-rust-dark" : "bg-steel-dark"
                }`}
              >
                {doc.tag}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* SECCIÓN 5 — DECLARACIÓN */}
      <fieldset className="space-y-4">
        <legend className="mb-2 font-display text-lg font-semibold uppercase text-ink">
          5. Declaración de responsabilidad
        </legend>
        <div className="border border-ink/15 bg-sand-2/50 p-5 text-sm text-ink/75">
          <p>
            Al marcar la casilla de abajo, declaras que tu participación en la 5ª
            Ruta FJ Club Chile es voluntaria y bajo tu propia responsabilidad, y
            que entiendes que la conducción off-road implica riesgos inherentes
            (daños materiales, fallas mecánicas, condiciones climáticas adversas
            y posibles accidentes).
          </p>
          <p className="mt-3">
            Declaras además que tu vehículo está en condiciones mecánicas
            adecuadas y que cuentas con la documentación exigida, que asumes la
            responsabilidad por tus acompañantes durante toda la actividad, y que
            liberas de responsabilidad a FJ Club Chile, sus organizadores y demás
            participantes ante cualquier daño, accidente o pérdida ocurrida antes,
            durante o después de la salida.
          </p>
          <p className="mt-3">
            Te comprometes a respetar las instrucciones del líder de ruta y las
            normas de conducción segura.
          </p>
        </div>
        <label className="flex items-start gap-3 text-sm font-medium text-ink">
          <input
            type="checkbox"
            required
            checked={aceptaDeclaracion}
            onChange={(e) => setAceptaDeclaracion(e.target.checked)}
            className="mt-1"
          />
          Acepto y declaro conformidad. *
        </label>
      </fieldset>

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
        {estado === "enviando" ? "Enviando..." : "Enviar inscripción"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
