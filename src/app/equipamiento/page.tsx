import { Cable, Link as LinkIcon, Gauge, Radio, Settings2, HeartPulse } from "lucide-react";

const implementos = [
  {
    Icon: Cable,
    nombre: "Eslinga o cinta de tiro",
    uso: "Se engancha entre dos vehículos para sacar a uno atascado, tirando desde el otro. Se conecta a los puntos de arrastre del chasis — nunca al parachoques, que no está diseñado para soportar esa fuerza.",
  },
  {
    Icon: LinkIcon,
    nombre: "Grillete",
    uso: "Une la eslinga al punto de anclaje del vehículo de forma segura. Se atornilla a mano y se ajusta firme antes de tirar, revisando que quede bien cerrado.",
  },
  {
    Icon: Gauge,
    nombre: "Desinflador y compresor",
    uso: "El desinflador baja la presión de los neumáticos para ganar tracción en arena o barro. El compresor los vuelve a inflar a la presión normal antes de volver al asfalto.",
  },
  {
    Icon: Radio,
    nombre: "Radio VHF",
    uso: "Mantiene la comunicación de todo el convoy en la frecuencia acordada (153.710 MHz), incluso en zonas sin señal de celular — clave para coordinar en terreno.",
  },
  {
    Icon: Settings2,
    nombre: "Vehículo 4x4 con reductora",
    uso: "La reductora multiplica la fuerza del motor a baja velocidad, dando más control y tracción para subir pendientes pronunciadas o salir de terreno blando.",
  },
  {
    Icon: HeartPulse,
    nombre: "Botiquín de primeros auxilios",
    uso: "Se lleva siempre a mano en el vehículo, con insumos básicos para heridas, golpes y quemaduras menores mientras se llega a atención médica.",
  },
];

export default function EquipamientoPage() {
  return (
    <section className="min-h-[60vh] border-b border-ink/10">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-rust">
          Antes de salir
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
          Equipamiento off-road
        </h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Este es el equipamiento mínimo que pedimos para cualquier salida del
          club. No es solo una lista — cada implemento cumple un rol concreto
          en terreno.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {implementos.map((item) => (
            <div
              key={item.nombre}
              className="border border-ink/15 bg-sand-2/40 p-6"
            >
              <item.Icon className="h-8 w-8 text-rust" strokeWidth={1.5} />
              <h2 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                {item.nombre}
              </h2>
              <p className="mt-2 text-sm text-ink/65">{item.uso}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/50">
          ¿Tienes fotos reales de tu equipo usando estos implementos en
          terreno? Súbelas y las cambiamos por las ilustraciones genéricas de
          arriba.
        </p>
      </div>
    </section>
  );
}
