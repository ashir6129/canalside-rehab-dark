"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="pt-16 pb-8 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-deep)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
              <Image
                src="/images/logo-transparent.png"
                alt="ETL Logo"
                fill
                className="object-contain scale-[1.5] transform origin-center"
                sizes="80px"
              />
            </div>
            <span className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
              <span style={{ color: "var(--gold)" }}>Canalside</span> House
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            A project of Rehbr UK limited and ETL Care — providing a safe, structured, and therapeutic environment where individuals in early recovery build foundations for sustainable sobriety.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="transition-all duration-300 p-2 rounded-md"
                style={{ color: "var(--text-muted)", backgroundColor: "var(--bg-card)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--teal)" }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Programme", href: "/programme" },
              { label: "Professional Referrals", href: "/referral" },
              { label: "For Families", href: "/families" },
              { label: "Resource Centre", href: "/resources" },
              { label: "Eligibility", href: "/eligibility" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-all duration-300"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--teal)" }}>
            Get In Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
              <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                464 Oldham Road,<br />M35 0FH, United Kingdom
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0" style={{ color: "var(--gold)" }} />
              <Link href="https://wa.me/447405608617" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "var(--text-muted)" }}>+44 7405 608617</Link>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0" style={{ color: "var(--gold)" }} />
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>info@canalside-recovery.co.uk</span>
            </li>
          </ul>

          {/* Mini CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Make an Enquiry →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} A project of Rehbr UK limited and ETL Care — Canalside House. All rights reserved. Registered in England & Wales.
        </p>
      </div>
    </footer>
  );
};

export default Footer;