import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileSpreadsheet, Scale, CheckCircle2, Quote } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vencore Nexus — HR & Legal Solutions in Bengaluru" },
      { name: "description", content: "End-to-end statutory compliance, payroll management and HR legal advisory for Indian enterprises. Based in Bengaluru, serving pan-India." },
      { property: "og:title", content: "Vencore Nexus — HR & Legal Solutions" },
      { property: "og:description", content: "Trusted HR compliance, payroll & legal advisory partner for Indian enterprises." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Statutory Compliance",
    desc: "Labour laws, PF, ESI, gratuity, minimum wages, bonus, professional tax and all mandatory filings — handled with audit-grade precision.",
  },
  {
    icon: FileSpreadsheet,
    title: "Payroll Management",
    desc: "End-to-end salary processing, statutory deductions, reimbursements, payslip generation and Form-16 — accurate, on time, every cycle.",
  },
  {
    icon: Scale,
    title: "HR Legal Advisory",
    desc: "Expert guidance on employment disputes, internal audits, government inspections, contracts and policy frameworks.",
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Years of Expertise" },
  { value: "100%", label: "Compliance Accuracy" },
  { value: "28", label: "States Covered" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        </div>

        <div className="relative container-edge py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">
              <span className="gold-rule" />
              Bengaluru · Pan-India
            </div>
            <h1 className="font-display text-cream text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              Compliance is not a checkbox.
              <span className="block text-gold italic font-normal mt-2">It&rsquo;s a discipline.</span>
            </h1>
            <p className="mt-8 text-lg text-cream/75 max-w-xl leading-relaxed">
              Vencore Nexus delivers statutory compliance, payroll management
              and HR legal advisory built on regulatory rigour — so your
              enterprise stays protected, audit-ready and respected.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary !bg-gold !border-gold !text-navy-deep hover:!bg-cream hover:!border-cream">
                Request Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-cream border-y border-border">
        <div className="container-edge grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-4 text-center">
              <div className="font-display text-4xl md:text-5xl text-navy-deep font-semibold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Core Practice"
            title="Three pillars. One uncompromising standard."
            description="From statutory filings to payroll precision and dispute defence — we operate as the in-house compliance arm your enterprise can rely on."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-card border border-border p-8 hover:border-gold transition-colors"
              >
                <div className="w-12 h-12 bg-navy-deep flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Icon className="text-gold group-hover:text-navy-deep transition-colors" size={22} />
                </div>
                <h3 className="font-display text-2xl text-navy-deep font-semibold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <Link to="/services" className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-deep inline-flex items-center gap-2 group-hover:text-gold transition">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — split layout */}
      <section className="bg-navy-deep py-24 md:py-32 text-cream">
        <div className="container-edge grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Why Vencore Nexus"
              title="Where regulation meets reliability."
              description="India's labour ecosystem shifts state by state, statute by statute. We translate that complexity into clean, defensible compliance — quietly, consistently, and at scale."
            />
          </div>
          <ul className="space-y-6">
            {[
              { t: "Central + State Specialisation", d: "Deep working knowledge of both central acts and state-specific labour codes across 28 states." },
              { t: "Audit-Grade Documentation", d: "Every filing, register and return is structured to withstand inspection scrutiny." },
              { t: "Secure Data Handling", d: "Encrypted infrastructure and strict access controls protect sensitive payroll and employee data." },
              { t: "Dedicated Advisory Team", d: "Named compliance officers for every client — not a ticketing queue." },
            ].map((item) => (
              <li key={item.t} className="flex gap-4 border-b border-cream/10 pb-6">
                <CheckCircle2 className="text-gold shrink-0 mt-1" size={22} />
                <div>
                  <div className="font-display text-xl font-semibold mb-1">{item.t}</div>
                  <p className="text-sm text-cream/70 leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-edge max-w-4xl text-center">
          <Quote className="mx-auto text-gold mb-8" size={48} strokeWidth={1} />
          <blockquote className="font-display text-2xl md:text-4xl text-navy-deep leading-[1.3] font-medium">
            &ldquo;Vencore Nexus turned our compliance chaos into clockwork.
            Three audits, zero observations — that&rsquo;s the difference real
            expertise makes.&rdquo;
          </blockquote>
          <div className="mt-10">
            <div className="font-semibold text-navy-deep">Director, HR Operations</div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
              Mid-cap Manufacturing Client
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gold">
        <div className="container-edge py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-navy-deep font-semibold leading-tight">
              Ready for compliance that runs itself?
            </h3>
            <p className="text-navy-deep/80 mt-2">Let&rsquo;s discuss your statutory and payroll roadmap.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
