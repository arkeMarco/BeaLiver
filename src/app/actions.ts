"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const data = await resend.emails.send({
      // Importante: Usa un indirizzo del tuo dominio verificato, o 'onboarding@resend.dev' se stai ancora testando senza dominio configurato su Resend
      from: "BEA Polimi Website <noreply@beapolimi.it>",
      to: ["communication@beapolimi.it"], // La mail di destinazione che mi hai dato
      subject: `Nuovo messaggio da ${name}: ${subject}`,
      text: message,
      html: `
        <h3>Nuovo messaggio dal sito web</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Oggetto:</strong> ${subject}</p>
        <hr />
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Errore invio email:", error);
    return { error: "Failed to send email" };
  }
}
