/**
 * Configuración central de Amveta.
 *
 * ⚠️ Cuando tengas el correo definitivo, cambia SOLO el valor de
 * CONTACT_EMAIL. Toda la landing (formulario, footer y botones mailto)
 * se actualiza automáticamente.
 */
export const CONTACT_EMAIL = "danicamposdalence@gmail.com";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const NAV_LINKS = [
  { id: "services", href: "#servicios" },
  { id: "process", href: "#proceso" },
  { id: "about", href: "#nosotros" },
  { id: "contact", href: "#contacto" },
] as const;

export const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "React Native",
  "Flutter",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Figma",
] as const;
