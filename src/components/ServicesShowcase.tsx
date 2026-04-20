import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function ServicesShowcase({ services }: { services: Service[] }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-edge space-y-24 md:space-y-32">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Image side */}
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative overflow-hidden bg-navy-deep aspect-[4/3] group">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-full object-cover ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/50 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="font-display text-7xl md:text-8xl text-gold/90 font-semibold leading-none">
                    {s.number}
                  </span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="eyebrow mb-4">
                <span className="gold-rule" />
                Practice {s.number}
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-semibold text-navy-deep leading-[1.1]">
                {s.title}
              </h3>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-foreground/85">
                    <span className="text-gold font-bold mt-0.5">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-navy-deep border-b-2 border-gold pb-1 hover:text-gold transition"
              >
                Explore this practice <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
