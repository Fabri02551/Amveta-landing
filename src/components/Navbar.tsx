import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS } from "../config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const main = document.getElementById("contenido");
    const footer = document.querySelector<HTMLElement>("#root > footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const getFocusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = [
        ...Array.from(
          document.querySelectorAll<HTMLElement>("#language-switcher button"),
        ),
        toggleRef.current,
        ...getFocusable(),
      ].filter((node): node is HTMLElement => node instanceof HTMLElement);
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => getFocusable()[0]?.focus(), 120);

    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="wrap relative z-50 pt-3 sm:pt-4">
        <nav
          aria-label={t("nav.main")}
          className={`flex items-center justify-between gap-3 rounded-full border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-ink/15 bg-cream/90 shadow-[0_18px_50px_-30px_rgba(43,29,15,0.65)]"
              : "border-ink/10 bg-cream/70"
          }`}
        >
          <a
            href="#inicio"
            aria-label={t("nav.home")}
            className="rounded-full"
          >
            <Logo markClassName="size-8 sm:size-8" />
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-ink/65 transition-colors duration-300 hover:bg-ink/[0.05] hover:text-ink"
              >
                {t(`nav.${link.id}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#contacto"
              className="group hidden h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-brown sm:inline-flex"
            >
              {t("nav.talk")}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream px-6 pb-10 pt-28 lg:hidden"
          >
            <motion.nav
              aria-label={t("nav.mobile")}
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
              }}
              className="flex flex-col border-t border-ink/10"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="group flex items-center justify-between border-b border-ink/10 py-5"
                >
                  <span className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="font-mono text-[10px] text-brown/80">
                      0{index + 1}
                    </span>
                    <span className="font-display text-3xl font-semibold tracking-[-0.03em]">
                      {t(`nav.${link.id}`)}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 text-ink/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brown" />
                </motion.a>
              ))}
            </motion.nav>

            <div className="mt-auto pt-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brown">
                {t("nav.writeUs")}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline mt-2 inline-block break-all text-lg text-ink/80"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-amber px-6 text-base font-semibold text-ink"
              >
                {t("nav.cta")}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
