import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Gauge,
  KeyRound,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ProcessItem = {
  title: string;
  description: string;
};

const valueIcons: ComponentType<{ className?: string; strokeWidth?: number }>[] =
  [ShieldCheck, KeyRound, Gauge, MessageSquare];

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", {
    returnObjects: true,
  }) as unknown as ProcessItem[];
  const values = t("process.values", {
    returnObjects: true,
  }) as unknown as ProcessItem[];

  return (
    <section
      id="proceso"
      className="on-dark grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 size-[30rem] rounded-full bg-brown/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 size-[34rem] rounded-full bg-amber/10 blur-[140px]" />
      </div>

      <div className="wrap relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            className="max-w-2xl"
          />
          <p className="max-w-sm text-sm leading-relaxed text-cream/55 lg:pb-1 lg:text-right">
            {t("process.description")}
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-cream/10 lg:block"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-amber via-gold to-gold/20 lg:block"
          />

          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="relative">
                <div className="relative z-10 grid size-14 place-items-center rounded-full border border-cream/15 bg-ink font-display text-lg font-medium text-gold">
                  0{index + 1}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-3 bg-ink p-6"
                >
                  <Icon className="size-5 text-gold" strokeWidth={1.8} />
                  <p className="font-display text-base font-medium text-cream">
                    {value.title}
                  </p>
                  <p className="text-sm leading-relaxed text-cream/50">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
