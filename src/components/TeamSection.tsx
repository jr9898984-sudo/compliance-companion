import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";

const TEAM = [
  {
    name: "Priya Raghavan",
    role: "Head of Statutory Compliance",
    bio: "15+ years navigating central & state labour codes for enterprises across India.",
    image: consultant1,
  },
  {
    name: "Arvind Menon",
    role: "Director, Payroll & Legal Advisory",
    bio: "Senior advisor on payroll governance, dispute resolution and inspection defence.",
    image: consultant2,
  },
];

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4"><span className="gold-rule" />The People Behind the Practice</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy-deep leading-[1.1]">
              Senior advisors. Not a ticket queue.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every Vencore Nexus engagement is led by a named compliance partner —
              a senior practitioner who knows your business, your workforce
              structure, and your risk profile from day one.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TEAM.map((m) => (
            <article key={m.name} className="group">
              <div className="relative overflow-hidden aspect-[4/5] bg-navy-deep">
                <img
                  src={m.image}
                  alt={m.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">
                    {m.role}
                  </div>
                  <h3 className="font-display text-3xl font-semibold">{m.name}</h3>
                  <p className="mt-3 text-sm text-cream/80 leading-relaxed max-w-md">
                    {m.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
