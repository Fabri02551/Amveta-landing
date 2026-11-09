import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

function MarqueeGroup({
  items,
  hidden = false,
}: {
  items: readonly string[];
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 whitespace-nowrap font-display text-xs font-medium uppercase tracking-[0.22em] text-ink sm:text-sm"
        >
          {item}
          <Sparkles className="size-3.5 text-ink/60" strokeWidth={1.8} />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  const { t } = useTranslation();
  const items = t("marquee.items", {
    returnObjects: true,
  }) as unknown as string[];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-ink/20 bg-amber py-4"
    >
      <div className="animate-marquee flex w-max">
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} hidden />
      </div>
    </div>
  );
}
