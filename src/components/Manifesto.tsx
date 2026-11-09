import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import {
  KeyRound,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Principle = {
  title: string;
  description: string;
};

const principleIcons: ComponentType<{
  className?: string;
  strokeWidth?: number;
}>[] = [MessageSquare, PackageCheck, KeyRound];

export function Manifesto() {
  const { t } = useTranslation();
  const principles = t("manifesto.principles", {
    returnObjects: true,
  }) as unknown as Principle[];

  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow={t("manifesto.eyebrow")}
            title={t("manifesto.title")}
            description={t("manifesto.description")}
          />

          <div className="mt-8 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl border border-ink/10 bg-white/50">
              <img
                src="/brand/amveta-mark.webp"
                alt=""
                className="size-7 object-contain"
                width="512"
                height="512"
              />
            </span>
            <div>
              <p className="font-display text-sm font-medium text-ink">
                {t("manifesto.team")}
              </p>
              <p className="text-xs text-ink/65">{t("manifesto.tagline")}</p>
            </div>
          </div>
        </div>

        <div>
          <Reveal>
            <blockquote className="on-dark grain relative overflow-hidden rounded-[2rem] bg-ink p-8 text-cream shadow-warm sm:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 size-64 rounded-full bg-amber/20 blur-[90px]"
              />
              <span
                aria-hidden="true"
                className="block font-display text-7xl leading-[0.6] text-gold/70"
              >
                “
              </span>
              <p className="mt-5 font-display text-[clamp(1.5rem,2.7vw,2.25rem)] font-medium leading-[1.28] tracking-[-0.025em] text-cream">
                {t("manifesto.quote")}
              </p>
              <footer className="mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/60">
                <span className="h-px w-8 bg-gold/60" />
                {t("manifesto.quoteNote")}
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principleIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={principle.title} delay={index * 0.06}>
                  <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white/45 p-6">
                    <Icon className="size-5 text-brown" strokeWidth={1.8} />
                    <p className="mt-5 font-display text-base font-semibold tracking-[-0.01em]">
                      {principle.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.14}>
            <div className="mt-4 flex items-start gap-3 rounded-[1.5rem] border border-brown/15 bg-sand/70 p-5 text-sm leading-relaxed text-ink/65">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-brown"
                strokeWidth={1.8}
              />
              <p>{t("manifesto.note")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
