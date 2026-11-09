import { useTranslation } from "react-i18next";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO, NAV_LINKS } from "../config";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark grain relative overflow-hidden border-t border-cream/10 bg-ink-deep text-cream">
      <div className="wrap relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <a href="#inicio" aria-label={t("nav.home")}>
              <Logo markClassName="size-9" wordClassName="text-2xl" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              {t("footer.description")}
            </p>
          </div>

          <nav aria-label={t("footer.navLabel")}>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
              {t("footer.navigation")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {t(`nav.${link.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55">
              {t("footer.contact")}
            </p>
            <a
              href={CONTACT_MAILTO}
              className="link-underline mt-4 inline-block break-all text-sm text-cream/70"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-sm text-cream/55">
              {t("footer.remote")}
            </p>
            <a
              href="#contacto"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-gold/40 hover:text-cream"
            >
              {t("footer.cta")}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights", { year })}</p>
          <p>{t("footer.tagline")}</p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-cream"
          >
            {t("footer.backToTop")}
            <ChevronUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative select-none overflow-hidden pb-5 sm:pb-8"
      >
        <p className="whitespace-nowrap text-center font-display text-[23vw] font-bold leading-[0.7] tracking-[-0.07em] text-cream/[0.035]">
          amveta
        </p>
      </div>
    </footer>
  );
}
