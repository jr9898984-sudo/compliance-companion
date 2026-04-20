// Animated client logos marquee — uses inline SVG so it always renders crisply
const CLIENTS = [
  "TechNova", "Brigade Group", "Aster Health", "Manipal", "Wipro Lite",
  "InfoEdge", "Sterling Mfg", "RedBus", "Prestige Estates", "Quess Corp",
  "Avani Logistics", "Indus Pharma", "Vortex Capital", "Zenith Auto",
];

export function ClientMarquee() {
  // Duplicate so the loop is seamless
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-cream border-y border-border py-14 overflow-hidden">
      <div className="container-edge text-center mb-8">
        <div className="eyebrow inline-flex items-center">
          <span className="gold-rule" />
          Trusted by 200+ enterprises across India
        </div>
      </div>
      <div className="marquee-mask">
        <div className="marquee-track gap-16 items-center">
          {items.map((name, i) => (
            <LogoBadge key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoBadge({ name }: { name: string }) {
  // Simple, distinctive monogram-style faux logos
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 px-4 py-2 shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
      <div className="w-10 h-10 border border-navy-deep/40 flex items-center justify-center">
        <span className="font-display text-navy-deep text-sm font-bold">{initials}</span>
      </div>
      <span className="font-display text-navy-deep/80 text-lg font-semibold tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
