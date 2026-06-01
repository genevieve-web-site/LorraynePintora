"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_DESTINO = process.env.EMAIL_DESTINO!;

export async function submitForm(formName: string, formData: FormData) {
  console.log("\n========== [FORM SUBMIT] INÍCIO ==========");
  console.log("[1] Formulário:", formName);

  const fields: Record<string, string> = {};
  formData.forEach((value, key) => {
    fields[key] = String(value);
  });
  console.log("[2] Campos recebidos:", fields);

  try {
    let subject: string;
    let html: string;

    if (formName === "receber-ajuda") {
      subject = `[Site Lorrayne - PJ Colorindo Vidas] Nova solicitação de ajuda — ${fields.nome}`;
      html = `
        <h2>Nova solicitação: Receber Ajuda</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nome</td><td style="padding:8px">${fields.nome}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Endereço / Bairro</td><td style="padding:8px">${fields.endereco}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">WhatsApp</td><td style="padding:8px">${fields.whatsapp}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">História</td><td style="padding:8px">${fields.historia}</td></tr>
        </table>
      `;
    } else {
      subject = `[Site Lorrayne - PJ Colorindo Vidas] Novo parceiro interessado — ${fields["nome-empresa"]}`;
      html = `
        <h2>Nova solicitação: Ser Parceiro</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nome / Empresa</td><td style="padding:8px">${fields["nome-empresa"]}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Como deseja ajudar</td><td style="padding:8px">${fields["tipo-ajuda"]}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">WhatsApp</td><td style="padding:8px">${fields.whatsapp}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Contribuição</td><td style="padding:8px">${fields.contribuicao}</td></tr>
        </table>
      `;
    }

    console.log("[3] Enviando email para:", EMAIL_DESTINO);
    console.log("[4] Assunto:", subject);

    const { data, error } = await resend.emails.send({
      from: "Colorindo Vidas <onboarding@resend.dev>",
      to: EMAIL_DESTINO,
      subject,
      html,
    });

    if (error) {
      console.error("[ERRO] Resend retornou erro:", error);
      return { success: false, error: error.message };
    }

    console.log("[5] Email enviado! ID:", data?.id);
    console.log("========== [FORM SUBMIT] FIM ==========\n");
    return { success: true };
  } catch (err) {
    console.error("[EXCEÇÃO]", err);
    return { success: false, error: String(err) };
  }
}
