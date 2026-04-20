import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vencore Nexus HR & Legal Solutions, Bengaluru" },
      { name: "description", content: "Talk to Vencore Nexus about statutory compliance, payroll and HR legal advisory. Bengaluru office, pan-India service." },
      { property: "og:title", content: "Contact Vencore Nexus" },
      { property: "og:description", content: "Reach our Bengaluru advisory team for compliance and HR legal consultations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-navy-deep text-cream py-24 md:py-32">
        <div className="container-edge max-w-3xl">
          <div className="eyebrow mb-5"><span className="gold-rule" />Get in Touch</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
            Let&rsquo;s discuss your <span className="text-gold italic font-normal">compliance roadmap</span>.
          </h1>
          <p className="mt-6 text-lg text-cream/75">
            Share your requirements and our advisory team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            <SectionHeading
              eyebrow="Reach Us Directly"
              title="One number. One inbox. One office."
            />

            <div className="space-y-6">
              <ContactItem
                icon={MapPin}
                label="Office"
                value="#62/2, 3rd Floor, 7th Main, 3rd Cross, Kammagondanahalli, Jalahalli West, Bengaluru — 560015"
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value="+91 86184 27262"
                href="tel:+918618427262"
              />
              <ContactItem
                icon={Mail}
                label="Email"
                value="vencorenexus@hotmail.com"
                href="mailto:vencorenexus@hotmail.com"
              />
              <ContactItem
                icon={Clock}
                label="Hours"
                value="Monday – Saturday · 9:30 AM – 6:30 PM IST"
              />
            </div>

            <a
              href="https://www.google.com/maps?q=13.060806,77.532278"
              target="_blank"
              rel="noreferrer"
              className="block border border-border overflow-hidden hover:border-gold transition-colors"
            >
              <iframe
                title="Vencore Nexus location"
                src="https://www.google.com/maps?q=13.060806,77.532278&z=16&output=embed"
                className="w-full h-64 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream border border-border p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto bg-gold flex items-center justify-center mb-6">
                    <Send className="text-navy-deep" size={26} />
                  </div>
                  <h3 className="font-display text-3xl text-navy-deep font-semibold">
                    Enquiry received.
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="eyebrow"><span className="gold-rule" />Enquiry Form</div>
                  <h2 className="font-display text-3xl text-navy-deep font-semibold">
                    Tell us about your requirement
                  </h2>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" required />
                    <Field label="Company" name="company" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
                    >
                      <option value="">Select a service</option>
                      <option>Statutory Compliance</option>
                      <option>Payroll Management</option>
                      <option>HR Legal Advisory</option>
                      <option>Multiple / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your team size, current setup and what you'd like help with..."
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon, label, value, href,
}: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="w-11 h-11 bg-navy-deep flex items-center justify-center shrink-0">
        <Icon className="text-gold" size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-1">
          {label}
        </div>
        <div className="text-foreground leading-snug">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex gap-4 group hover:text-gold transition">{content}</a>
  ) : (
    <div className="flex gap-4">{content}</div>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
