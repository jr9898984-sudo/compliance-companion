// Featured clients — currently servicing these enterprises
const CLIENTS = [
  "Manipal Hospitals",
  "Replica Xerography Pvt Ltd",
  "Arera Health and Technologies Pvt Ltd",
];

export function ClientMarquee() {
  return (
    <section className="relative bg-cream border-y border-border py-20 overflow-hidden">
      {/* Decorative gold accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-navy-deep/5 blur-3xl" />

      <div className="container-edge relative">
        <div className="text-center mb-12">
          <div className="eyebrow inline-flex items-center justify-center mb-4">
            <span className="gold-rule" />
            Currently Serving
            <span className="gold-rule ml-3 !mr-0" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-navy-deep font-semibold leading-[1.1]">
            Trusted by <span className="text-gold italic font-normal">3+</span> enterprises
            <span className="block text-2xl md:text-3xl text-navy-deep/70 font-normal italic mt-2">
              across India
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {CLIENTS.map((name, i) => (
            <ClientCard key={name} name={name} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className="reveal group relative bg-background border border-border hover:border-gold p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold text-navy-deep flex items-center justify-center font-display text-sm font-bold">
        0{index + 1}
      </div>

      <div className="flex items-start gap-5">
        <div className="w-16 h-16 shrink-0 bg-navy-deep flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
          <span className="font-display text-cream group-hover:text-navy-deep text-xl font-bold transition-colors">
            {initials}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mb-2">
            Client
          </div>
          <h3 className="font-display text-xl text-navy-deep font-semibold leading-tight">
            {name}
          </h3>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs uppercase tracking-[0.15em] text-muted-foreground">
        <span>Active Engagement</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Ongoing
        </span>
      </div>
    </div>
  );
}
