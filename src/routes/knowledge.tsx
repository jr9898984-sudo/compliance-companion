import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Labour Law & HR Compliance Updates | Vencore Nexus" },
      { name: "description", content: "Articles, FAQs and regulatory updates on Indian labour law, statutory compliance and payroll." },
      { property: "og:title", content: "Knowledge Hub — Vencore Nexus" },
      { property: "og:description", content: "Stay ahead of India's evolving HR and labour law landscape." },
    ],
  }),
  component: KnowledgePage,
});

const articles = [
  { tag: "Labour Codes", title: "The Four Labour Codes: What enterprises must prepare for", excerpt: "A practitioner's view on consolidating 29 central laws into four codes — and the operational shifts ahead.", date: "Coming soon" },
  { tag: "PF & ESI", title: "PF contribution thresholds: Common errors and how to avoid them", excerpt: "Wage definition, international workers, and the audit triggers we see most often.", date: "Coming soon" },
  { tag: "POSH", title: "Building a defensible POSH framework beyond compliance", excerpt: "Committee composition, awareness programs and inquiry protocols that withstand scrutiny.", date: "Coming soon" },
  { tag: "Payroll", title: "Designing CTC structures that are tax-efficient and compliant", excerpt: "Balancing employee take-home with statutory obligations and finance constraints.", date: "Coming soon" },
];

const faqs = [
  { q: "Do you serve clients outside Bengaluru?", a: "Yes. We support clients across all 28 states and 8 union territories of India, with deep familiarity in state-specific labour codes." },
  { q: "What is the typical engagement model?", a: "Most clients engage us on a retainer basis covering monthly compliance, payroll and advisory. Project-based engagements (audits, registrations, dispute defence) are also available." },
  { q: "How is sensitive payroll data protected?", a: "We operate on encrypted infrastructure with role-based access, audit trails and strict confidentiality clauses for every team member who touches client data." },
  { q: "Can you handle inspections and notices on our behalf?", a: "Yes. Our HR Legal Advisory practice represents clients during labour department inspections, prepares responses to notices, and manages conciliation and dispute proceedings." },
];

function KnowledgePage() {
  return (
    <>
      <section className="bg-navy-deep text-cream py-24 md:py-32">
        <div className="container-edge max-w-3xl">
          <div className="eyebrow mb-5"><span className="gold-rule" />Insights & Updates</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
            Knowledge that keeps you <span className="text-gold italic font-normal">ahead of the notice</span>.
          </h1>
          <p className="mt-6 text-lg text-cream/75">
            Practitioner perspectives on India&rsquo;s evolving labour and HR compliance landscape.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Articles" title="Recent perspectives." />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {articles.map((a) => (
              <article key={a.title} className="group border border-border bg-card p-8 hover:border-gold transition">
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen size={16} className="text-gold" />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">{a.tag}</span>
                </div>
                <h3 className="font-display text-2xl text-navy-deep font-semibold leading-tight mb-3 group-hover:text-gold transition">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{a.excerpt}</p>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{a.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQs" title="Common questions, answered." />
          </div>
          <div className="lg:col-span-8 space-y-2">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border-t border-border last:border-b py-6 cursor-pointer"
              >
                <summary className="flex justify-between items-start gap-6 list-none">
                  <h3 className="font-display text-xl text-navy-deep font-semibold">{f.q}</h3>
                  <span className="text-gold text-2xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed pr-12">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-edge py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-display text-3xl md:text-4xl text-navy-deep font-semibold leading-tight">
            Have a specific question for our team?
          </h3>
          <Link to="/contact" className="btn-primary shrink-0">
            Ask an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
