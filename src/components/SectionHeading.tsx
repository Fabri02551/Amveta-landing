type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      <p
        className={`flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] ${
          dark ? "text-gold" : "text-brown"
        }`}
      >
        <span
          className={`h-px w-7 ${dark ? "bg-gold/50" : "bg-brown/40"}`}
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 max-w-3xl text-balance font-display text-[clamp(2rem,4.3vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/60" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
