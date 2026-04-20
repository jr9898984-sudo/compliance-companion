import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vencore Nexus HR & Legal Solutions" },
      { name: "description", content: "A Bengaluru-based HR compliance and legal advisory firm building audit-grade systems for Indian enterprises." },
      { property: "og:title", content: "About Vencore Nexus" },
      { property: "og:description", content: "Discipline, regulatory depth and dedicated advisory for India's most demanding HR compliance work." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Precision", d: "Compliance is detail work. We treat every register, return and reconciliation as audit evidence." },
  { n: "02", t: "Discretion", d: "Sensitive employee and payroll data is handled with strict access controls and confidentiality protocols." },
  { n: "03", t: "Continuity", d: "Named advisors, stable teams — the people who learn your business stay with your business." },
  { n: "04", t: "Foresight", d: "We monitor regulatory change daily and act before deadlines arrive, not after." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep text-cream py-24 md:py-32">
        <div className="container-edge max-w-3xl">
          <div className="eyebrow mb-5"><span className="gold-rule" />About the Firm</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
            Built for the enterprises that <span className="text-gold italic font-normal">cannot afford to be wrong</span>.
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Story" title="A practice rooted in regulatory rigour." />
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
            <p>
              Vencore Nexus HR &amp; Legal Solutions was founded on a simple
              conviction: India&rsquo;s labour and statutory framework is too
              consequential to be handled casually. Penalties are real,
              reputational damage is permanent, and the cost of getting it
              wrong dwarfs the cost of getting it right.
            </p>
            <p>
              From our base in Bengaluru, we partner with SMEs, fast-growth
              startups and established enterprises across India — providing
              statutory compliance, payroll management and HR legal advisory
              that holds up under inspection, dispute and time.
            </p>
            <p>
              We don&rsquo;t scale by adding ticketing systems. We scale by
              adding senior practitioners. Every client engagement is anchored
              by a named compliance lead who knows your structure, your
              workforce and your risk profile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Operating Principles" title="Four values. Non-negotiable." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((v) => (
              <div key={v.n} className="border-t-2 border-gold pt-6">
                <div className="font-display text-5xl text-navy-deep/20 font-semibold mb-3">{v.n}</div>
                <h3 className="font-display text-xl text-navy-deep font-semibold mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-edge py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-display text-3xl md:text-4xl text-navy-deep font-semibold leading-tight">
            Speak with our advisory team.
          </h3>
          <Link to="/contact" className="btn-primary shrink-0">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
