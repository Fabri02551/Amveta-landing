export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type SendEmailResponse = {
  success: boolean;
  message?: string;
  simulated?: boolean;
  id?: string;
  error?: string;
};

/**
 * Servicio para envío de correos utilizando Resend a través del endpoint /api/send-email.
 * En desarrollo, si no hay RESEND_API_KEY configurada, la API simula el envío con éxito.
 */
export async function sendContactEmail(data: ContactFormData): Promise<SendEmailResponse> {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => ({
    success: false,
    error: "Respuesta inválida del servidor",
  }));

  if (!response.ok || result.success === false) {
    throw new Error(result.error || "No se pudo enviar el correo");
  }

  return result;
}
