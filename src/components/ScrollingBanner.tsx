// Scrolling text banner — used for visual rhythm between sections
export function ScrollingBanner({
  items,
  reverse = false,
  variant = "navy",
}: {
  items: string[];
  reverse?: boolean;
  variant?: "navy" | "gold" | "cream";
}) {
  const dup = [...items, ...items, ...items];

  const styles = {
    navy: "bg-navy-deep text-cream",
    gold: "bg-gold text-navy-deep",
    cream: "bg-cream text-navy-deep",
  }[variant];

  return (
    <div className={`${styles} py-6 overflow-hidden border-y border-navy-deep/10`}>
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""} gap-12 items-center`}>
        {dup.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-3xl md:text-5xl font-semibold tracking-tight whitespace-nowrap italic">
              {item}
            </span>
            <span className="text-gold text-2xl shrink-0">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
