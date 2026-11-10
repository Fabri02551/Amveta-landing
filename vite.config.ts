import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Resend } from "resend";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const resendApiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "resend-dev-server",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url !== "/api/send-email") {
              return next();
            }

            if (req.method !== "POST") {
              res.statusCode = 405;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Método no permitido" }));
              return;
            }

            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });

            req.on("end", async () => {
              try {
                const { name, email, message } = JSON.parse(body || "{}");
                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: "Todos los campos (nombre, correo y mensaje) son requeridos.",
                    })
                  );
                  return;
                }

                if (!resend) {
                  console.log(
                    `\n[Resend Dev Server] ✉️  Simulación de correo recibido:`
                  );
                  console.log(`De: ${name} <${email}>`);
                  console.log(`Mensaje: ${message}`);
                  console.log(
                    `ℹ️ Para envíos reales, agrega RESEND_API_KEY en tu archivo .env\n`
                  );

                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({
                      success: true,
                      simulated: true,
                      message:
                        "Correo simulado con éxito (agrega tu RESEND_API_KEY en .env para envíos reales con Resend)",
                    })
                  );
                  return;
                }

                const toEmail =
                  env.CONTACT_EMAIL || "danicamposdalence@gmail.com";
                const fromEmail =
                  env.RESEND_FROM || "Amveta <onboarding@resend.dev>";

                const { data, error } = await resend.emails.send({
                  from: fromEmail,
                  to: [toEmail],
                  replyTo: email,
                  subject: `Nuevo mensaje de ${name} vía Amveta`,
                  text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
                });

                if (error) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ success: false, error: error.message }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ success: true, id: data?.id }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    success: false,
                    error: err?.message || "Error interno al enviar el correo",
                  })
                );
              }
            });
          });
        },
      },
    ],
    build: {
      chunkSizeWarningLimit: 600,
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  };
});
