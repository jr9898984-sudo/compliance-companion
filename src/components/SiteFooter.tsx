import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream mt-24">
      <div className="container-edge py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 border border-gold flex items-center justify-center">
              <span className="font-display text-gold text-xl font-bold">V</span>
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Vencore Nexus</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                HR &amp; Legal Solutions
              </div>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed max-w-md">
            India&rsquo;s trusted partner for statutory compliance, payroll management
            and HR legal advisory — protecting enterprises from risk through
            precision, reliability and deep regulatory expertise.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-sans font-semibold">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/knowledge" className="hover:text-gold transition">Knowledge Hub</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-sans font-semibold">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>#62/2, 3rd Floor, 7th Main, 3rd Cross, Kammagondanahalli, Jalahalli West, Bengaluru 560015</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+918618427262" className="hover:text-gold">+91 86184 27262</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:vencorenexus@hotmail.com" className="hover:text-gold break-all">vencorenexus@hotmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-edge py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Vencore Nexus HR &amp; Legal Solutions. All rights reserved.</p>
          <p>www.vencorenexus.com</p>
        </div>
      </div>
    </footer>
  );
}
