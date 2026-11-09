import { useTranslation } from "react-i18next";
import type { Language } from "../i18n";

const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language).startsWith("en")
    ? "en"
    : "es";

  return (
    <div
      id="language-switcher"
      role="group"
      aria-label={t("language.label")}
      className={`inline-flex items-center rounded-full border border-ink/15 bg-white/45 p-0.5 ${className}`}
    >
      {LANGUAGES.map((language) => {
        const active = current === language.code;

        return (
          <button
            key={language.code}
            type="button"
            lang={language.code}
            onClick={() => {
              void i18n.changeLanguage(language.code);
            }}
            aria-pressed={active}
            aria-label={`${language.short} — ${language.label}`}
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.08em] transition-colors duration-300 sm:px-3 sm:text-[11px] ${
              active
                ? "bg-ink text-cream"
                : "text-ink/75 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {language.short}
          </button>
        );
      })}
    </div>
  );
}
