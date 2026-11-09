import { useTranslation } from "react-i18next";
import { STACK } from "../config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="relative pb-24 sm:pb-32">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/70 p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-72 rounded-full bg-gold/25 blur-[90px]"
            />

            <div className="relative grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-12">
              <SectionHeading
                eyebrow={t("stack.eyebrow")}
                title={t("stack.title")}
              />
              <p className="max-w-md text-sm leading-relaxed text-ink/65 lg:pb-1 lg:text-right">
                {t("stack.description")}
              </p>
            </div>

            <ul className="relative mt-10 flex flex-wrap gap-2.5">
              {STACK.map((technology) => (
                <li key={technology}>
                  <span className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 px-4 py-2 text-sm text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brown/30 hover:bg-cream hover:text-ink">
                    <span className="size-1.5 rounded-full bg-amber" />
                    {technology}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
