import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/proposal-writing", label: "Proposal Writing" },
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/cv-cover-letters", label: "CV & Cover Letters" },
  { href: "/services/data-services", label: "Data Services" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold-500 flex items-center justify-center text-navy-950 font-bold text-xl font-[family-name:var(--font-geist-sans)]">
                JM
              </div>
            </div>
            <p className="text-sm text-cream-100/70 italic mb-4">
              Precision. Professionalism. Results.
            </p>
            <div className="space-y-2 text-sm text-cream-100/60">
              <p>Nairobi, Kenya</p>
              <p>josiah@mwangi.co.ke</p>
              <p>+254 700 000 000</p>
            </div>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-cream-100/60 hover:text-gold-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-100/60">josiah@mwangi.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-100/60">+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-100/60">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-100/60">Mon-Fri 8am-6pm EAT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/40">
            &copy; {new Date().getFullYear()} Josiah Mwangi. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gold-500/60 font-medium tracking-widest">
              Precision | Professionalism | Results
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
