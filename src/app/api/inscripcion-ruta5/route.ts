import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type Acompanante = { nombre: string; rut: string };

type Payload = {
  pilotoNombre: string;
  rut: string;
  telefono: string;
  telefonoEmergencia: string;
  email: string;
  marca: string;
  patente: string;
  tieneAcompanantes: "si" | "no";
  acompanantes: Acompanante[];
  documentos: string[];
  aceptaDeclaracion: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Payload;

    if (
      !data.pilotoNombre ||
      !data.rut ||
      !data.telefono ||
      !data.telefonoEmergencia ||
      !data.email ||
      !data.marca ||
      !data.patente ||
      !data.aceptaDeclaracion
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destino = process.env.INSCRIPCION_EMAIL_TO;

    if (!apiKey || !destino) {
      console.error(
        "Faltan variables de entorno RESEND_API_KEY o INSCRIPCION_EMAIL_TO"
      );
      return NextResponse.json(
        {
          error:
            "El formulario no está configurado todavía. Escríbenos directo por Instagram.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const acompanantesTexto =
      data.tieneAcompanantes === "si" && data.acompanantes.length > 0
        ? data.acompanantes
            .map((a, i) => `  ${i + 1}. ${a.nombre} — ${a.rut}`)
            .join("\n")
        : "Sin acompañantes";

    const documentosTexto =
      data.documentos.length > 0
        ? data.documentos.map((d) => `  ✓ ${d}`).join("\n")
        : "Ninguno marcado";

    const cuerpo = [
      "NUEVA INSCRIPCIÓN — 5ª Ruta FJ Club Chile (Cerro Dóñihue, 25/07/2026)",
      "",
      "== IDENTIFICACIÓN ==",
      `Piloto: ${data.pilotoNombre}`,
      `RUT/DNI: ${data.rut}`,
      `Teléfono: ${data.telefono}`,
      `Teléfono de emergencia: ${data.telefonoEmergencia}`,
      `Email: ${data.email}`,
      "",
      "== VEHÍCULO ==",
      `Marca: ${data.marca}`,
      `Patente: ${data.patente}`,
      "",
      "== ACOMPAÑANTES ==",
      acompanantesTexto,
      "",
      "== DOCUMENTACIÓN DECLARADA ==",
      documentosTexto,
      "",
      "== DECLARACIÓN DE RESPONSABILIDAD ==",
      data.aceptaDeclaracion ? "Aceptada." : "NO ACEPTADA (no debería poder llegar hasta aquí)",
    ].join("\n");

    await resend.emails.send({
      from: "FJ Club Chile <inscripciones@fjclubchile.cl>", // requiere fjclubchile.cl verificado en Resend
      to: destino,
      replyTo: data.email,
      subject: `Inscripción 5ª Ruta — ${data.pilotoNombre} (${data.patente})`,
      text: cuerpo,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando inscripción:", err);
    return NextResponse.json(
      { error: "No pudimos enviar tu inscripción. Intenta de nuevo en unos minutos." },
      { status: 500 }
    );
  }
}
