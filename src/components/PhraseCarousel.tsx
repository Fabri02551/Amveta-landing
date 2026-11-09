import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Pause, Play } from "lucide-react";

type PhraseCarouselProps = {
  phrases: readonly string[];
};

export function PhraseCarousel({ phrases }: PhraseCarouselProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduce = useReducedMotion();

  const autoRotate = !paused && !hovered && !focused && !reduce;

  useEffect(() => {
    if (!autoRotate || phrases.length < 2) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [autoRotate, phrases.length]);

  useEffect(() => {
    if (index > phrases.length - 1) setIndex(0);
  }, [index, phrases.length]);

  return (
    <span
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <span className="relative flex min-h-[3em] items-start overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={phrases[index]}
            initial={
              reduce
                ? false
                : { y: "0.55em", opacity: 0, filter: "blur(10px)" }
            }
            animate={
              reduce
                ? undefined
                : { y: 0, opacity: 1, filter: "blur(0px)" }
            }
            exit={
              reduce
                ? undefined
                : { y: "-0.5em", opacity: 0, filter: "blur(10px)" }
            }
            transition={{
              duration: reduce ? 0 : 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block max-w-full text-balance"
          >
            <span className="box-decoration-clone bg-[linear-gradient(transparent_63%,rgba(252,211,77,0.62)_63%)] px-0.5">
              {phrases[index]}
            </span>
          </motion.span>
        </AnimatePresence>
      </span>

      <span
        role="group"
        aria-label={t("hero.carousel.group")}
        className="mt-4 flex items-center gap-2"
      >
        <span className="flex items-center">
          {phrases.map((phrase, phraseIndex) => (
            <button
              key={phrase}
              type="button"
              onClick={() => setIndex(phraseIndex)}
              aria-label={t("hero.carousel.showPhrase", { phrase })}
              aria-pressed={phraseIndex === index}
              className="grid size-8 place-items-center rounded-full"
            >
              <span
                className={`block rounded-full transition-all duration-400 ${
                  phraseIndex === index
                    ? "h-2 w-5 bg-brown"
                    : "size-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            </button>
          ))}
        </span>

        {!reduce ? (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={
              paused
                ? t("hero.carousel.resume")
                : t("hero.carousel.pause")
            }
            className="grid size-8 place-items-center rounded-full border border-ink/15 text-ink/50 transition-colors hover:border-ink/30 hover:text-ink"
          >
            {paused ? (
              <Play className="size-3 fill-current" />
            ) : (
              <Pause className="size-3 fill-current" />
            )}
          </button>
        ) : null}
      </span>
    </span>
  );
}
