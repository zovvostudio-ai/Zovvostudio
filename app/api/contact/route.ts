import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const DESTINATION_EMAIL = "zovvostudio@gmail.com"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, message, legalAccepted } = data

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Campos requeridos faltantes" }, { status: 400 })
    }

    if (!legalAccepted) {
      return NextResponse.json({ ok: false, error: "Debe aceptar la política de privacidad y el aviso legal" }, { status: 400 })
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : "No proporcionado",
      message: sanitizeInput(message),
    }

    const result = await resend.emails.send({
      from: "Zovvo Studio <onboarding@resend.dev>",
      to: [DESTINATION_EMAIL],
      replyTo: sanitizedData.email,
      subject: `Nuevo contacto web: ${sanitizedData.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Teléfono:</strong> ${sanitizedData.phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Si Resend devuelve un warning, NO rompemos el frontend
    if (result.error) {
      console.error("Resend warning:", result.error)
    }

    return NextResponse.json({ ok: true }, { status: 200 })

  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ ok: false }, { status: 200 }) // <-- nunca devolvemos error al frontend
  }
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}
