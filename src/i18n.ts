import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_STORAGE_KEY = "amveta-language";

const resources = {
  es: {
    translation: {
      meta: {
        title: "Amveta — Software a la medida y soluciones honestas",
        description:
          "Amveta diseña y desarrolla software a la medida: aplicaciones web, móviles, IA y automatización. Soluciones honestas que funcionan.",
      },
      language: {
        label: "Idioma",
        es: "Español",
        en: "English",
      },
      a11y: {
        skip: "Saltar al contenido",
      },
      nav: {
        home: "Amveta — ir al inicio",
        main: "Navegación principal",
        mobile: "Navegación móvil",
        services: "Servicios",
        process: "Proceso",
        about: "Nosotros",
        contact: "Contacto",
        talk: "Hablemos",
        cta: "Cuéntanos tu idea",
        writeUs: "Escríbenos",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Estudio de desarrollo de software",
        intro: "Creamos",
        phrases: [
          "software a la medida",
          "software y soluciones honestas",
          "productos digitales que funcionan",
          "tecnología que impulsa tu negocio",
        ],
        paragraphBefore: "Diseñamos y desarrollamos ",
        paragraphStrong: "software a la medida",
        paragraphAfter:
          " para equipos que quieren crecer sin complicaciones. Sin humo, sin atajos: soluciones honestas que funcionan.",
        ctaPrimary: "Cuéntanos tu idea",
        ctaSecondary: "Explorar servicios",
        bullets: [
          "Código 100% tuyo",
          "Sin dependencias innecesarias",
          "Acompañamiento real",
        ],
        visual: {
          open: "Abiertos a nuevos proyectos",
          logoAlt: "Logo de Amveta",
          chips: {
            web: "Web",
            ai: "IA",
            mobile: "Mobile",
            cloud: "Cloud",
          },
          code: {
            focusKey: "enfoque",
            focusValue: "honesto",
            deliveryKey: "entrega",
            deliveryValue: "a la medida",
            codeKey: "codigo",
            codeValue: "tuyo",
          },
        },
        carousel: {
          group: "Frases de Amveta",
          showPhrase: "Mostrar frase: {{phrase}}",
          pause: "Pausar rotación de frases",
          resume: "Reanudar rotación de frases",
        },
      },
      marquee: {
        items: [
          "Software a la medida",
          "Web",
          "Apps",
          "IA",
          "Cloud",
          "UX/UI",
          "Automatización",
          "Consultoría",
        ],
      },
      services: {
        eyebrow: "Servicios",
        title: "Lo que construimos",
        intro: {
          before:
            "Cada proyecto empieza con una conversación, no con una plantilla. ",
          link: "Cuéntanos el tuyo",
          after: ".",
        },
        items: {
          custom: {
            title: "Software a la medida",
            description:
              "Sistemas que se adaptan a tu operación, no al revés. Construidos para durar y crecer contigo.",
          },
          web: {
            title: "Desarrollo web",
            description:
              "Plataformas rápidas, accesibles y pensadas para convertir. Del primer clic al último detalle.",
          },
          mobile: {
            title: "Apps móviles",
            description:
              "Experiencias iOS y Android que se sienten naturales, responden rápido y la gente quiere usar.",
          },
          ai: {
            title: "IA y automatización",
            description:
              "Menos tareas repetitivas, más tiempo para lo importante. Automatizamos solo cuando tiene sentido.",
          },
          cloud: {
            title: "Cloud & DevOps",
            description:
              "Infraestructura estable, despliegues sin drama y monitoreo para dormir tranquilo.",
          },
          ux: {
            title: "UX/UI & producto",
            description:
              "Interfaces claras que la gente entiende y disfruta. Diseño con intención, no con decoración.",
          },
        },
      },
      process: {
        eyebrow: "Proceso",
        title: "Un proceso claro, sin cajas negras.",
        description:
          "Trabajamos en ciclos cortos y con avances visibles. Tú siempre sabes en qué punto está tu proyecto y qué viene después.",
        steps: [
          {
            title: "Escuchamos",
            description:
              "Entendemos el negocio, el problema y lo que realmente necesitas. Sin suposiciones.",
          },
          {
            title: "Diseñamos",
            description:
              "Definimos alcance, prototipos y prioridades antes de escribir una sola línea de código.",
          },
          {
            title: "Construimos",
            description:
              "Entregas iterativas, comunicación directa y código que puedes revisar en todo momento.",
          },
          {
            title: "Acompañamos",
            description:
              "Medimos, mantenemos y evolucionamos lo que construimos contigo. No desaparecemos al entregar.",
          },
        ],
        values: [
          {
            title: "Transparencia",
            description:
              "Decimos lo que cuesta, lo que falta y lo que no haríamos.",
          },
          {
            title: "Código propio",
            description:
              "El código, los accesos y la documentación son tuyos.",
          },
          {
            title: "Plazos reales",
            description:
              "Fechas que podemos cumplir, no las que suenan bien.",
          },
          {
            title: "Comunicación directa",
            description: "Hablas con quien construye, sin intermediarios.",
          },
        ],
      },
      manifesto: {
        eyebrow: "Nosotros",
        title: "Software honesto, de verdad.",
        description:
          "Creemos en el software que resuelve problemas reales: claro, mantenible y sin dependencias innecesarias. Trabajamos de forma directa, decimos lo que cuesta y explicamos cada decisión.",
        team: "Equipo Amveta",
        tagline: "Diseño, código y criterio.",
        quote:
          "Si algo no necesita IA, no le ponemos IA. Si una solución simple alcanza, no te vendemos una compleja.",
        quoteNote: "Cómo pensamos en Amveta",
        principles: [
          {
            title: "Hablamos claro",
            description:
              "Sin tecnicismos innecesarios ni promesas imposibles.",
          },
          {
            title: "Entregamos de verdad",
            description: "Alcance definido, avances visibles y fechas reales.",
          },
          {
            title: "Te dejamos el control",
            description:
              "Código, accesos y documentación siempre son tuyos.",
          },
        ],
        note: "Si tu proyecto no encaja con lo que hacemos bien, te lo decimos antes de empezar. Preferimos una conversación honesta a un contrato incómodo.",
      },
      stack: {
        eyebrow: "Stack",
        title: "La herramienta correcta, no la de moda.",
        description:
          "No nos casamos con una tecnología. Elegimos la que mejor resuelve tu problema, la documentamos y te dejamos el control.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "¿Tienes una idea? Hagámosla realidad.",
        description:
          "Cuéntanos qué quieres construir. Te respondemos con preguntas claras, no con una plantilla.",
        direct: "Escríbenos directo",
        copy: "Copiar",
        copied: "Copiado",
        copyAria: "Copiar correo {{email}}",
        copiedAria: "Correo copiado",
        bullets: [
          "Conversación inicial sin compromiso.",
          "Respuesta directa del equipo, sin intermediarios.",
          "Si no podemos ayudarte, te lo decimos igual.",
        ],
        form: {
          title: "Cuéntanos de tu proyecto",
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Tu correo",
          emailPlaceholder: "tu@correo.com",
          message: "¿Qué necesitas?",
          messagePlaceholder:
            "Cuéntanos la idea, el problema o lo que quieres mejorar…",
          submit: "Enviar correo",
          sent: "Abriendo tu aplicación de correo…",
          note: "Se abrirá tu aplicación de correo. No guardamos datos en ningún servidor.",
          subject: "Nuevo proyecto — {{name}}",
          greeting: "Hola Amveta,",
          nameLine: "Mi nombre es {{name}}.",
          replyLine: "Puedes responderme a {{email}}.",
        },
      },
      footer: {
        description:
          "Software a la medida. Soluciones honestas. Construido con criterio, no con prisa.",
        navigation: "Navegación",
        contact: "Contacto",
        remote: "Trabajamos remoto, sin fronteras.",
        cta: "Hablemos de tu proyecto",
        rights: "© {{year}} Amveta. Todos los derechos reservados.",
        tagline: "Software a la medida, soluciones honestas.",
        backToTop: "Volver arriba",
        navLabel: "Navegación del pie de página",
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: "Amveta — Custom software and honest solutions",
        description:
          "Amveta designs and builds custom software: web and mobile apps, AI and automation. Honest solutions that work.",
      },
      language: {
        label: "Language",
        es: "Spanish",
        en: "English",
      },
      a11y: {
        skip: "Skip to content",
      },
      nav: {
        home: "Amveta — back to top",
        main: "Main navigation",
        mobile: "Mobile navigation",
        services: "Services",
        process: "Process",
        about: "About us",
        contact: "Contact",
        talk: "Let's talk",
        cta: "Tell us your idea",
        writeUs: "Write to us",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "Software development studio",
        intro: "We build",
        phrases: [
          "custom software",
          "honest software and solutions",
          "digital products that work",
          "technology that moves your business",
        ],
        paragraphBefore: "We design and build ",
        paragraphStrong: "custom software",
        paragraphAfter:
          " for teams that want to grow without the friction. No fluff, no shortcuts: honest solutions that work.",
        ctaPrimary: "Tell us your idea",
        ctaSecondary: "Explore services",
        bullets: [
          "100% your code",
          "No unnecessary dependencies",
          "Real support",
        ],
        visual: {
          open: "Open to new projects",
          logoAlt: "Amveta logo",
          chips: {
            web: "Web",
            ai: "AI",
            mobile: "Mobile",
            cloud: "Cloud",
          },
          code: {
            focusKey: "focus",
            focusValue: "honest",
            deliveryKey: "delivery",
            deliveryValue: "tailored",
            codeKey: "code",
            codeValue: "yours",
          },
        },
        carousel: {
          group: "Amveta phrases",
          showPhrase: "Show phrase: {{phrase}}",
          pause: "Pause phrase rotation",
          resume: "Resume phrase rotation",
        },
      },
      marquee: {
        items: [
          "Custom software",
          "Web",
          "Apps",
          "AI",
          "Cloud",
          "UX/UI",
          "Automation",
          "Consulting",
        ],
      },
      services: {
        eyebrow: "Services",
        title: "What we build",
        intro: {
          before:
            "Every project starts with a conversation, not a template. ",
          link: "Tell us about yours",
          after: ".",
        },
        items: {
          custom: {
            title: "Custom software",
            description:
              "Systems that adapt to your operation, not the other way around. Built to last and grow with you.",
          },
          web: {
            title: "Web development",
            description:
              "Fast, accessible platforms designed to convert. From the first click to the last detail.",
          },
          mobile: {
            title: "Mobile apps",
            description:
              "iOS and Android experiences that feel natural, respond fast, and people actually want to use.",
          },
          ai: {
            title: "AI & automation",
            description:
              "Fewer repetitive tasks, more time for what matters. We automate only when it makes sense.",
          },
          cloud: {
            title: "Cloud & DevOps",
            description:
              "Stable infrastructure, drama-free deployments, and monitoring so you can sleep well.",
          },
          ux: {
            title: "UX/UI & product",
            description:
              "Clear interfaces people understand and enjoy. Design with intention, not decoration.",
          },
        },
      },
      process: {
        eyebrow: "Process",
        title: "A clear process, no black boxes.",
        description:
          "We work in short cycles with visible progress. You always know where your project stands and what comes next.",
        steps: [
          {
            title: "We listen",
            description:
              "We understand the business, the problem, and what you really need. No assumptions.",
          },
          {
            title: "We design",
            description:
              "We define scope, prototypes, and priorities before writing a single line of code.",
          },
          {
            title: "We build",
            description:
              "Iterative deliveries, direct communication, and code you can review at any time.",
          },
          {
            title: "We stay",
            description:
              "We measure, maintain, and evolve what we build with you. We don't disappear after delivery.",
          },
        ],
        values: [
          {
            title: "Transparency",
            description:
              "We say what it costs, what's missing, and what we wouldn't do.",
          },
          {
            title: "Your code",
            description: "The code, access, and documentation are yours.",
          },
          {
            title: "Real timelines",
            description:
              "Dates we can meet, not the ones that sound good.",
          },
          {
            title: "Direct communication",
            description:
              "You talk to the people building it, no middlemen.",
          },
        ],
      },
      manifesto: {
        eyebrow: "About us",
        title: "Honest software, for real.",
        description:
          "We believe in software that solves real problems: clear, maintainable, and free of unnecessary dependencies. We work directly, say what it costs, and explain every decision.",
        team: "Amveta team",
        tagline: "Design, code, and judgment.",
        quote:
          "If something doesn't need AI, we don't add AI. If a simple solution is enough, we won't sell you a complex one.",
        quoteNote: "How we think at Amveta",
        principles: [
          {
            title: "We speak clearly",
            description: "No unnecessary jargon or impossible promises.",
          },
          {
            title: "We actually deliver",
            description: "Defined scope, visible progress, and real dates.",
          },
          {
            title: "You stay in control",
            description:
              "Code, access, and documentation are always yours.",
          },
        ],
        note: "If your project doesn't fit what we do well, we tell you before we start. We'd rather have an honest conversation than an uncomfortable contract.",
      },
      stack: {
        eyebrow: "Stack",
        title: "The right tool, not the trendy one.",
        description:
          "We don't marry a technology. We choose the one that best solves your problem, document it, and leave you in control.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Have an idea? Let's make it real.",
        description:
          "Tell us what you want to build. We'll reply with clear questions, not a template.",
        direct: "Write to us directly",
        copy: "Copy",
        copied: "Copied",
        copyAria: "Copy email {{email}}",
        copiedAria: "Email copied",
        bullets: [
          "Initial conversation with no commitment.",
          "A direct reply from the team, no middlemen.",
          "If we can't help, we'll tell you anyway.",
        ],
        form: {
          title: "Tell us about your project",
          name: "Name",
          namePlaceholder: "Your name",
          email: "Your email",
          emailPlaceholder: "you@email.com",
          message: "What do you need?",
          messagePlaceholder:
            "Tell us the idea, the problem, or what you want to improve…",
          submit: "Send email",
          sent: "Opening your email app…",
          note: "Your email app will open. We don't store data on any server.",
          subject: "New project — {{name}}",
          greeting: "Hello Amveta,",
          nameLine: "My name is {{name}}.",
          replyLine: "You can reply to me at {{email}}.",
        },
      },
      footer: {
        description:
          "Custom software. Honest solutions. Built with judgment, not haste.",
        navigation: "Navigation",
        contact: "Contact",
        remote: "We work remotely, without borders.",
        cta: "Let's talk about your project",
        rights: "© {{year}} Amveta. All rights reserved.",
        tagline: "Custom software, honest solutions.",
        backToTop: "Back to top",
        navLabel: "Footer navigation",
      },
    },
  },
} as const;

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage can be unavailable in private contexts.
  }

  return "es";
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "es",
  supportedLngs: [...SUPPORTED_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  initAsync: false,
  react: {
    useSuspense: false,
  },
});

function applyDocumentLanguage(language: string) {
  document.documentElement.lang = language;
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
}

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore storage errors; the language still changes for this session.
  }

  applyDocumentLanguage(language);
});

export default i18n;
