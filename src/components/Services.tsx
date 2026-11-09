import type { ComponentType, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Blocks,
  Cloud,
  Code2,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Service = {
  id: "custom" | "web" | "mobile" | "ai" | "cloud" | "ux";
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const services: Service[] = [
  { id: "custom", icon: Blocks },
  { id: "web", icon: Code2 },
  { id: "mobile", icon: Smartphone },
  { id: "ai", icon: Sparkles },
  { id: "cloud", icon: Cloud },
  { id: "ux", icon: PenTool },
];

type ServiceCardProps = {
  service: Service;
  title: string;
  description: string;
  index: number;
};

function ServiceCard({
  service,
  title,
  description,
  index,
}: ServiceCardProps) {
  const Icon = service.icon;

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <article
      onMouseMove={handleMove}
      className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/45 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink hover:bg-ink hover:shadow-warm"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(245,158,11,0.18), transparent 65%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-amber/15 text-brown transition-colors duration-500 group-hover:bg-amber group-hover:text-ink">
          <Icon className="size-5" strokeWidth={1.8} />
        </span>
        <ArrowUpRight className="size-5 text-ink/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>

      <div className="relative z-10 mt-auto pt-12">
        <h3 className="font-display text-xl font-semibold tracking-[-0.02em] transition-colors duration-500 group-hover:text-cream sm:text-[1.35rem]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-cream/65">
          {description}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 -right-1 z-0 font-display text-[5.5rem] font-bold leading-none tracking-[-0.06em] text-ink/[0.04] transition-colors duration-500 group-hover:text-cream/[0.07]"
      >
        0{index + 1}
      </span>
    </article>
  );
}

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            className="max-w-2xl"
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink/65 md:pb-1 md:text-right">
            {t("services.intro.before")}
            <a
              href="#contacto"
              className="link-underline font-medium text-brown"
            >
              {t("services.intro.link")}
            </a>
            {t("services.intro.after")}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05} className="h-full">
              <ServiceCard
                service={service}
                title={t(`services.items.${service.id}.title`)}
                description={t(`services.items.${service.id}.description`)}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
