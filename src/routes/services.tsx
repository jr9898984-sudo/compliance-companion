import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileSpreadsheet, Scale, ArrowRight, Building2, ClipboardCheck, Factory, Wallet } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Statutory, Vendor, Factory & Payroll Compliance | Vencore Nexus" },
      { name: "description", content: "Statutory, vendor, factory & payroll compliance, compliance risk audits, payroll processing and HR legal advisory across India." },
      { property: "og:title", content: "Services — Vencore Nexus" },
      { property: "og:description", content: "Statutory, vendor, factory & payroll compliance, audits and HR legal advisory tailored to Indian enterprises." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Statutory Compliance",
    intro: "Complete coverage across central and state labour legislation, with audit-ready documentation and proactive change management.",
    items: [
      "Provident Fund (PF) registration, contributions, returns",
      "Employee State Insurance (ESI) compliance",
      "Payment of Gratuity Act administration",
      "Minimum Wages Act — state-wise updates",
      "Payment of Bonus Act calculations & filings",
      "Professional Tax registration and returns",
      "Shops & Establishments Act registration",
      "Contract Labour (R&A) Act compliance",
      "Maternity Benefit Act compliance",
      "Labour Welfare Fund contributions",
    ],
  },
  {
    icon: Building2,
    title: "Vendor Compliance Services",
    intro: "Insulate your principal-employer liability with rigorous vendor and contractor compliance monitoring across every site and engagement.",
    items: [
      "Vendor onboarding & due diligence",
      "Monthly statutory documentation review",
      "PF, ESI, PT contribution verification",
      "Wage register & attendance audits",
      "Bonus, leave & gratuity reconciliation",
      "Contract Labour Act licence tracking",
      "Periodic on-site compliance audits",
      "Vendor scorecards & risk dashboards",
      "Non-compliance escalation & closure",
      "Principal-employer indemnity reporting",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Risk Audit",
    intro: "Independent, audit-grade assessment of your end-to-end labour and statutory posture — with prioritised remediation roadmaps.",
    items: [
      "Central & state labour law gap analysis",
      "Documentation and register inspection",
      "Statutory remittance reconciliation",
      "Wage structure & minimum wages testing",
      "POSH, contract labour & factory checks",
      "Risk heatmap with severity scoring",
      "Root-cause analysis & remediation plan",
      "Management & board-level reporting",
      "Pre-inspection readiness audits",
      "Post-acquisition / due-diligence audits",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Compliance Services",
    intro: "The compliance layer that sits over your payroll — ensuring every deduction, filing and disclosure is legally airtight.",
    items: [
      "TDS computation, deposit & quarterly returns",
      "PF / ESI / PT challan generation & filing",
      "Form 16, Form 24Q, Form 12BA issuance",
      "Labour Welfare Fund remittances",
      "Bonus & gratuity statutory provisioning",
      "Income tax declarations & investment proofs",
      "Statutory leave & overtime tracking",
      "Year-end reconciliation & audit support",
      "Payroll-related notice handling",
      "Compliance calendar & alerting",
    ],
  },
  {
    icon: Factory,
    title: "Factory Compliance Services",
    intro: "Specialist compliance for manufacturing units under the Factories Act and allied state rules — keeping operations safe, licensed and inspection-ready.",
    items: [
      "Factory licence registration & renewal",
      "Plan approval & site layout compliance",
      "Form-wise statutory register maintenance",
      "Working hours, shifts & overtime records",
      "Health, safety & welfare compliance",
      "Hazardous process & chemical disclosures",
      "Annual & half-yearly returns filing",
      "Inspector liaison & visit management",
      "Accident reporting & investigation support",
      "Pollution control board coordination",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Payroll Services",
    intro: "Precision payroll for organisations of every size — from 20-person startups to 5,000-person enterprises across multiple entities.",
    items: [
      "Monthly salary processing across multiple entities",
      "Statutory deductions (TDS, PF, ESI, PT)",
      "Reimbursements, LTA, flexi-benefits",
      "Variable pay & incentive computation",
      "Payslip generation with secure portal access",
      "Form 16 / Form 24Q quarterly filings",
      "Full & final settlements",
      "Salary structure design and CTC optimisation",
      "Bank transfer files and integration",
      "Custom MIS reports for finance & leadership",
    ],
  },
  {
    icon: Scale,
    title: "HR Legal Advisory",
    intro: "Trusted counsel for the moments that matter — disputes, inspections, restructuring and policy.",
    items: [
      "Employment contract drafting & review",
      "HR policy development (POSH, code of conduct, leave)",
      "Representation in labour department inspections",
      "Industrial dispute handling & conciliation",
      "POSH committee formation & training",
      "Domestic enquiry & disciplinary proceedings",
      "Termination & retrenchment advisory",
      "Standing orders certification",
      "Trade union & collective bargaining support",
      "Litigation management & legal opinions",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep text-cream py-24 md:py-32">
        <div className="container-edge max-w-3xl">
          <div className="eyebrow mb-5"><span className="gold-rule" />Practice Areas</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
            Services engineered for <span className="text-gold italic font-normal">defensible compliance</span>.
          </h1>
          <p className="mt-6 text-lg text-cream/75 leading-relaxed">
            Three integrated practice areas. One operating system for HR
            compliance, payroll and legal risk — calibrated for India&rsquo;s
            evolving regulatory landscape.
          </p>
        </div>
      </section>

      {services.map((svc, idx) => {
        const Icon = svc.icon;
        return (
          <section
            key={svc.title}
            className={idx % 2 === 1 ? "bg-cream py-24 md:py-28" : "py-24 md:py-28"}
          >
            <div className="container-edge grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="w-14 h-14 bg-navy-deep flex items-center justify-center mb-6">
                  <Icon className="text-gold" size={26} />
                </div>
                <div className="eyebrow mb-3">0{idx + 1} · Practice</div>
                <h2 className="font-display text-4xl md:text-5xl text-navy-deep font-semibold leading-tight">
                  {svc.title}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{svc.intro}</p>
                <Link to="/contact" className="btn-primary mt-8 inline-flex">
                  Discuss Engagement <ArrowRight size={16} />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6">
                  {svc.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm border-b border-border pb-4">
                      <span className="text-gold font-semibold">→</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
