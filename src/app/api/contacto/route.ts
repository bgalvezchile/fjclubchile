import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, modelo, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destino = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !destino) {
      console.error("Faltan variables de entorno RESEND_API_KEY o CONTACT_EMAIL_TO");
      return NextResponse.json(
        { error: "El formulario no está configurado todavía. Escríbenos directo por Instagram." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "FJ Club Chile <onboarding@resend.dev>", // cambia esto si más adelante verificas fjclubchile.cl en Resend
      to: destino,
      replyTo: email,
      subject: `Nuevo contacto FJ Club Chile — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Modelo/año FJ: ${modelo || "No indicado"}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando email de contacto:", err);
    return NextResponse.json(
      { error: "No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos." },
      { status: 500 }
    );
  }
}
