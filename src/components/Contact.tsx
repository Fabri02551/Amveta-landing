import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Check,
  Copy,
  Send,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const emptyForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const bullets = t("contact.bullets", {
    returnObjects: true,
  }) as unknown as string[];

  function updateField(field: keyof FormState) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = CONTACT_MAILTO;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = t("contact.form.subject", {
      name: form.name || "Amveta",
    });
    const body = [
      t("contact.form.greeting"),
      "",
      t("contact.form.nameLine", { name: form.name }),
      "",
      form.message,
      "",
      t("contact.form.replyLine", { email: form.email }),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.setTimeout(() => setSent(false), 5000);
  }

  return (
    <section
      id="contacto"
      className="on-dark grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 size-[32rem] rounded-full bg-brown/30 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 size-[30rem] rounded-full bg-amber/12 blur-[140px]" />
      </div>

      <div className="wrap relative grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
          />

          <Reveal delay={0.08}>
            <div className="mt-8 rounded-[1.5rem] border border-cream/10 bg-cream/[0.04] p-5 backdrop-blur-sm">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/60">
                {t("contact.direct")}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_MAILTO}
                  className="break-all font-display text-lg font-medium text-cream underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold sm:text-xl"
                >
                  {CONTACT_EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={
                    copied
                      ? t("contact.copiedAria")
                      : t("contact.copyAria", { email: CONTACT_EMAIL })
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3 py-1.5 text-xs text-cream/60 transition-colors hover:border-gold/40 hover:text-cream"
                >
                  {copied ? (
                    <Check className="size-3.5 text-gold" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                  {copied ? t("contact.copied") : t("contact.copy")}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-6 space-y-3 text-sm text-cream/55">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    strokeWidth={2.2}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-cream/10 bg-cream/[0.04] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
                {t("contact.form.title")}
              </h3>
              <ArrowUpRight className="size-5 text-gold" aria-hidden="true" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-cream/60"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full rounded-xl border border-cream/15 bg-ink-deep/50 px-4 py-3 text-sm text-cream transition-colors placeholder:text-cream/45 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/25"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-cream/60"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField("email")}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full rounded-xl border border-cream/15 bg-ink-deep/50 px-4 py-3 text-sm text-cream transition-colors placeholder:text-cream/45 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/25"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] font-medium uppercase tracking-[0.18em] text-cream/60"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={updateField("message")}
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full resize-y rounded-xl border border-cream/15 bg-ink-deep/50 px-4 py-3 text-sm leading-relaxed text-cream transition-colors placeholder:text-cream/45 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/25"
              />
            </div>

            <button
              type="submit"
              className="group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-amber px-6 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold"
            >
              {t("contact.form.submit")}
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <p
              aria-live="polite"
              className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-cream/55"
            >
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              {sent ? t("contact.form.sent") : t("contact.form.note")}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
