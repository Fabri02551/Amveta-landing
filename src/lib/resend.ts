import { Resend } from "resend";

/**
 * Cliente Resend configurado.
 * Para operaciones del lado del servidor (Node.js / Edge Functions) o cliente.
 */
export const getResendClient = (apiKey?: string): Resend | null => {
  const globalProc = (
    globalThis as unknown as {
      process?: { env?: Record<string, string | undefined> };
    }
  ).process;

  const envKey =
    globalProc?.env?.RESEND_API_KEY ||
    (typeof import.meta !== "undefined" && import.meta.env
      ? (import.meta.env.VITE_RESEND_API_KEY as string | undefined)
      : undefined);

  const key = apiKey || envKey;
  if (!key) return null;
  return new Resend(key);
};
