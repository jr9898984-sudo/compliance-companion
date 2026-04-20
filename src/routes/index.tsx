import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, CheckCircle2, Quote, ShieldCheck, FileSpreadsheet, Scale, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg";
import signing from "@/assets/signing.jpg";
import consultation from "@/assets/consultation.jpg";
import payrollImg from "@/assets/team-meeting.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { ClientMarquee } from "@/components/ClientMarquee";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ScrollingBanner } from "@/components/ScrollingBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vencore Nexus — HR & Legal Solutions in Bengaluru" },
      { name: "description", content: "Statutory compliance, payroll management & HR legal advisory for Indian enterprises. Trusted by 200+ companies. Bengaluru office, pan-India service." },
      { property: "og:title", content: "Vencore Nexus — HR & Legal Solutions" },
      { property: "og:description", content: "India's trusted HR compliance, payroll & legal advisory partner." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    number: "01",
    title: "Statutory Compliance",
    description:
      "End-to-end coverage of India's labour ecosystem — from PF and ESI to gratuity, minimum wages, bonus, professional tax and Shops & Establishments. We translate the maze of central and state legislation into clean, defensible filings.",
    features: [
      "PF & ESI registration and monthly returns",
      "Gratuity & bonus computations",
      "Minimum wages — state-wise tracking",
      "Professional tax across all states",
      "Shops & Establishments registration",
      "Contract Labour (R&A) compliance",
      "Maternity Benefit Act compliance",
      "Labour Welfare Fund contributions",
    ],
    image: signing,
  },
  {
    number: "02",
    title: "Payroll Management",
    description:
      "Salary processing, statutory deductions, reimbursements, payslips and Form-16 — accurate, on time, every cycle. Built to scale from 20-person startups to 5,000-person enterprises across multiple entities.",
    features: [
      "Monthly payroll across multiple entities",
      "TDS, PF, ESI, PT statutory deductions",
      "Reimbursements & flexi-benefits",
      "Variable pay & incentive computation",
      "Secure payslip portal access",
      "Form 16 / Form 24Q quarterly filings",
      "Full & final settlements",
      "Custom MIS for finance & leadership",
    ],
    image: payrollImg,
  },
  {
    number: "03",
    title: "HR Legal Advisory",
    description:
      "Trusted counsel for the moments that matter — disputes, labour department inspections, terminations, restructuring and policy. Senior advisors who represent and protect you when it counts.",
    features: [
      "Employment contract drafting & review",
      "POSH framework & committee setup",
      "Labour department inspection support",
      "Industrial dispute & conciliation",
      "Domestic enquiry & disciplinary proceedings",
      "Termination & retrenchment advisory",
      "Standing orders certification",
      "Litigation management & legal opinions",
    ],
    image: consultation,
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years of Expertise" },
  { value: 100, suffix: "%", label: "Compliance Accuracy" },
  { value: 28, suffix: "", label: "States Covered" },
];

function HomePage() {
  return (
    <>
      {/* HERO — compact cinematic video banner */}
      <section className="relative bg-navy-deep overflow-hidden h-[68vh] min-h-[520px] max-h-[760px] flex items-center">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
        </div>

        <div className="relative container-edge py-16 md:py-20 w-full">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5 reveal text-gold">
              <span className="gold-rule" />
              Bengaluru · Pan-India · Since 2025
            </div>
            <h1 className="reveal reveal-delay-1 font-display text-cream text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              Compliance is not a checkbox.
              <span className="block text-gold italic font-normal mt-2">
                It&rsquo;s a discipline.
              </span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 text-base md:text-lg text-cream/80 max-w-xl leading-relaxed">
              Statutory compliance, payroll management and HR legal advisory —
              built on regulatory rigour for India&rsquo;s most demanding
              enterprises.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                preload="intent"
                className="btn-primary !bg-gold !border-gold !text-navy-deep hover:!bg-cream hover:!border-cream"
              >
                Request Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" preload="intent" className="btn-outline">
                <PlayCircle size={16} /> Explore Services
              </Link>
            </div>

            <div className="reveal reveal-delay-4 mt-10 flex items-center gap-4 text-cream/60 text-xs uppercase tracking-[0.2em]">
              <div className="scroll-hint">
                <ArrowDown size={16} className="text-gold" />
              </div>
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING BANNER #1 */}
      <ScrollingBanner
        variant="gold"
        items={[
          "Statutory Compliance",
          "Payroll Management",
          "HR Legal Advisory",
          "Audit Defence",
          "POSH Framework",
          "Labour Law",
        ]}
      />

      {/* CLIENT LOGOS MARQUEE */}
      <ClientMarquee />

      {/* SERVICES OVERVIEW — quick cards */}
      <section className="py-24 md:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="What We Do"
            title="Three pillars. One uncompromising standard."
            description="From statutory filings to payroll precision and dispute defence — we operate as the in-house compliance arm your enterprise can rely on."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { Icon: ShieldCheck, t: "Statutory Compliance", d: "PF, ESI, gratuity, minimum wages, bonus and all mandatory filings — handled with audit-grade precision across 28 states." },
              { Icon: FileSpreadsheet, t: "Payroll Management", d: "End-to-end payroll, statutory deductions, payslips and Form-16 — accurate, on time, every single cycle." },
              { Icon: Scale, t: "HR Legal Advisory", d: "Senior counsel on disputes, inspections, terminations, contracts and policy frameworks that hold up under scrutiny." },
            ].map(({ Icon, t, d }) => (
              <div
                key={t}
                className="group relative bg-card border border-border p-8 hover:border-gold transition-colors hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-navy-deep flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Icon className="text-gold group-hover:text-navy-deep transition-colors" size={22} />
                </div>
                <h3 className="font-display text-2xl text-navy-deep font-semibold mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATED STATS BAND with bg image */}
      <section className="relative bg-navy-deep text-cream py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={teamMeeting}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" />
        </div>
        <div className="relative container-edge">
          <div className="text-center mb-16">
            <div className="eyebrow inline-flex items-center mb-4 text-gold">
              <span className="gold-rule" />
              The Numbers
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream max-w-2xl mx-auto leading-tight">
              Built on a track record that speaks quietly but unmistakably.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center border-l border-cream/20 first:border-l-0 px-2 md:px-6">
                <div className="font-display text-5xl md:text-7xl text-gold font-semibold leading-none">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-cream/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SHOWCASE with imagery */}
      <ServicesShowcase services={services} />

      {/* SCROLLING BANNER #2 — reverse */}
      <ScrollingBanner
        variant="navy"
        reverse
        items={[
          "Trusted by 200+ Enterprises",
          "Pan-India Service",
          "Audit-Ready Documentation",
          "Senior Advisory",
          "Zero Compromise",
        ]}
      />

      {/* WHY US — image + list */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-edge grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Vencore Nexus"
              title="Where regulation meets reliability."
              description="India's labour ecosystem shifts state by state, statute by statute. We translate that complexity into clean, defensible compliance — quietly, consistently, and at scale."
            />
            <div className="mt-8 overflow-hidden aspect-[4/3]">
              <img
                src={consultation}
                alt="Vencore Nexus consulting"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-full object-cover ken-burns"
              />
            </div>
          </div>
          <ul className="lg:col-span-7 space-y-2">
            {[
              { t: "Central + State Specialisation", d: "Working knowledge of both central acts and state-specific labour codes across all 28 states and 8 union territories." },
              { t: "Audit-Grade Documentation", d: "Every filing, register and return is structured to withstand inspection scrutiny — not just to clear deadlines." },
              { t: "Secure Data Handling", d: "Encrypted infrastructure, role-based access and strict confidentiality protocols protect sensitive payroll and employee data." },
              { t: "Dedicated Advisory Team", d: "Named senior compliance officers for every client — direct lines, not ticketing queues." },
              { t: "Regulatory Foresight", d: "We monitor labour code changes daily and act before deadlines arrive, not after." },
            ].map((item, i) => (
              <li
                key={item.t}
                className="flex gap-5 border-b border-navy-deep/10 py-7 group hover:bg-background -mx-4 px-4 transition"
              >
                <span className="font-display text-3xl text-gold/60 group-hover:text-gold font-semibold leading-none w-12 shrink-0 transition">
                  0{i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="text-gold shrink-0" size={20} />
                    <h3 className="font-display text-2xl text-navy-deep font-semibold">{item.t}</h3>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed pl-8">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* (Team section removed per requirement) */}

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 bg-navy-deep text-cream">
        <div className="container-edge max-w-4xl text-center">
          <Quote className="mx-auto text-gold mb-8" size={56} strokeWidth={1} />
          <blockquote className="font-display text-2xl md:text-4xl leading-[1.3] font-medium">
            &ldquo;Vencore Nexus turned our compliance chaos into clockwork.
            Three audits, zero observations — that&rsquo;s the difference real
            expertise makes.&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-1">
            <div className="w-12 h-px bg-gold mb-4" />
            <div className="font-semibold">Director, HR Operations</div>
            <div className="text-xs uppercase tracking-[0.18em] text-cream/60 mt-1">
              Mid-cap Manufacturing Client · Bengaluru
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gold relative overflow-hidden">
        <div className="container-edge py-20 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-navy-deep/70 font-semibold mb-3">
              Get Started
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-navy-deep font-semibold leading-[1.05]">
              Ready for compliance that runs itself?
            </h3>
            <p className="text-navy-deep/80 mt-3 text-lg">
              Speak with a senior advisor about your statutory and payroll roadmap.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary shrink-0 !text-base !py-4 !px-8"
          >
            Book a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
