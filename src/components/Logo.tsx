type LogoProps = {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
};

export function Logo({
  className = "",
  markClassName = "size-8",
  wordClassName = "text-xl",
}: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/amveta-mark.webp"
        alt=""
        className={`${markClassName} shrink-0 object-contain`}
        width="512"
        height="512"
      />
      <span
        className={`font-display font-semibold tracking-[-0.045em] ${wordClassName}`}
      >
        amveta
      </span>
    </span>
  );
}
