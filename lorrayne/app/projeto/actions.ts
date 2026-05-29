"use server";

export async function submitToNetlify(formName: string, formData: FormData) {
  // Adiciona o nome do formulário aos dados que serão enviados
  formData.append("form-name", formName);

  // Converte para o formato que o Netlify Forms exige
  const body = new URLSearchParams(formData as any).toString();

  try {
    // Faz o POST direto para o endpoint do Netlify no servidor
    const response = await fetch("https://lorrayne.netlify.app/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    });

    if (!response.ok) {
      return { success: false, error: "Erro na resposta do servidor" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
