import { useRef, type ComponentType, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PhraseCarousel } from "./PhraseCarousel";
import { Magnetic } from "./Magnetic";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(7px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const { t } = useTranslation();
  const phrases = t("hero.phrases", {
    returnObjects: true,
  }) as unknown as string[];
  const bullets = t("hero.bullets", {
    returnObjects: true,
  }) as unknown as string[];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-6 size-[32rem] rounded-full bg-gold/25 blur-[130px]" />
        <div className="absolute -right-24 top-1/3 size-[28rem] rounded-full bg-amber/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(43,29,15,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(43,29,15,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_74%)]" />
      </div>

      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/45 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-brown sm:text-[11px]"
          >
            <span className="pulse-dot relative size-1.5 rounded-full bg-amber text-amber" />
            {t("hero.badge")}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-sans text-xl font-medium leading-none text-brown sm:text-2xl"
          >
            {t("hero.intro")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 max-w-[13ch] font-display text-[clamp(2.55rem,5.8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            <PhraseCarousel phrases={phrases} />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            {t("hero.paragraphBefore")}
            <strong className="font-medium text-ink">
              {t("hero.paragraphStrong")}
            </strong>
            {t("hero.paragraphAfter")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-semibold text-ink shadow-[0_18px_45px_-18px_rgba(245,158,11,0.9)] transition-colors duration-300 hover:bg-gold"
              >
                {t("hero.ctaPrimary")}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>

            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-base font-medium text-ink/80 transition-colors duration-300 hover:border-ink/35 hover:bg-white/40 hover:text-ink"
            >
              {t("hero.ctaSecondary")}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/65"
          >
            {bullets.map((text) => (
              <li key={text} className="flex items-center gap-1.5">
                <Check className="size-4 text-brown" strokeWidth={2.2} />
                {text}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

type ChipProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  className: string;
  delay?: number;
};

function Chip({ icon: Icon, label, className, delay = 0 }: ChipProps) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-1.5 rounded-full border border-cream/15 bg-ink-deep/70 px-3 py-1.5 text-[10px] font-medium text-cream/80 shadow-lg backdrop-blur-md sm:text-[11px] ${className}`}
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 5.5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon className="size-3.5 text-gold" />
      {label}
    </motion.div>
  );
}

function HeroVisual() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.6 });

  const logoX = useTransform(smoothX, [-1, 1], [-11, 11]);
  const logoY = useTransform(smoothY, [-1, 1], [-9, 9]);
  const ringX = useTransform(smoothX, [-1, 1], [7, -7]);
  const ringY = useTransform(smoothY, [-1, 1], [6, -6]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[480px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3.5rem] bg-[radial-gradient(circle_at_50%_38%,rgba(245,158,11,0.38),transparent_65%)] blur-2xl"
      />

      <div
        ref={panelRef}
        onMouseMove={handleMove}
        onMouseLeave={resetPointer}
        className="grain relative aspect-[4/5] overflow-hidden rounded-[2.6rem] border border-ink/15 bg-ink p-5 shadow-warm sm:p-7"
      >
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-amber/25 blur-[85px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -right-20 size-64 rounded-full bg-gold/15 blur-[90px]"
        />

        <div className="relative z-20 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-cream/70 backdrop-blur-sm sm:text-[10px]">
          <span className="pulse-dot relative size-1.5 rounded-full bg-amber text-amber" />
          {t("hero.visual.open")}
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <motion.div
            style={{ x: ringX, y: ringY }}
            className="absolute left-1/2 top-[43%] size-[18rem] -translate-x-1/2 -translate-y-1/2 sm:size-[22rem]"
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-cream/15"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[14%] rounded-full border border-cream/10" />
            <div className="absolute inset-[29%] rounded-full border border-cream/[0.07]" />
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.24),transparent_62%)] blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          style={{ x: logoX, y: logoY }}
          className="absolute left-1/2 top-[43%] z-10 w-36 -translate-x-1/2 -translate-y-1/2 sm:w-44"
        >
          <motion.img
            src="/brand/amveta-mark.webp"
            alt={t("hero.visual.logoAlt")}
            width="512"
            height="512"
            className="w-full drop-shadow-[0_28px_36px_rgba(0,0,0,0.55)]"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <Chip
          icon={Code2}
          label={t("hero.visual.chips.web")}
          className="left-4 top-[25%] sm:left-5"
          delay={0.2}
        />
        <Chip
          icon={Sparkles}
          label={t("hero.visual.chips.ai")}
          className="right-4 top-[31%] sm:right-5"
          delay={0.9}
        />
        <Chip
          icon={Smartphone}
          label={t("hero.visual.chips.mobile")}
          className="left-3 top-[52%] sm:left-4"
          delay={1.5}
        />
        <Chip
          icon={Cloud}
          label={t("hero.visual.chips.cloud")}
          className="right-3 top-[47%] sm:right-4"
          delay={2.1}
        />

        <div className="absolute inset-x-4 bottom-4 z-20 overflow-hidden rounded-2xl border border-cream/10 bg-ink-deep/85 p-3.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-cream/20" />
            <span className="size-1.5 rounded-full bg-cream/20" />
            <span className="size-1.5 rounded-full bg-amber/70" />
            <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.18em] text-cream/50">
              amveta.ts
            </span>
          </div>
          <div className="font-mono text-[10px] leading-[1.7] text-cream/60 sm:text-[11px]">
            <p>
              <span className="text-gold">const</span>{" "}
              <span className="text-cream">amveta</span> = {"{"}
            </p>
            <p className="pl-3">
              {t("hero.visual.code.focusKey")}:{" "}
              <span className="text-amber">
                "{t("hero.visual.code.focusValue")}"
              </span>
              ,
            </p>
            <p className="pl-3">
              {t("hero.visual.code.deliveryKey")}:{" "}
              <span className="text-amber">
                "{t("hero.visual.code.deliveryValue")}"
              </span>
              ,
            </p>
            <p className="pl-3">
              {t("hero.visual.code.codeKey")}:{" "}
              <span className="text-amber">
                "{t("hero.visual.code.codeValue")}"
              </span>
              ,
            </p>
            <p>
              {"}"};
              <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-amber align-middle motion-reduce:animate-none" />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
