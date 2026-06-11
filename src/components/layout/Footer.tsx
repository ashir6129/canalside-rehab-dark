"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #2C2C2C" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
              style={{ border: "1px solid #C9A84C", backgroundColor: "#1C1C1C" }}>
              <span className="text-[10px] font-bold" style={{ color: "#C9A84C" }}>ETL</span>
            </div>
            <span className="font-semibold text-lg" style={{ color: "#F0F0F0" }}>
              <span style={{ color: "#C9A84C" }}>Canalside</span> House
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#888888" }}>
            A service by ETL Care — providing a safe, structured, and therapeutic environment where individuals in early recovery build foundations for sustainable sobriety.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="transition-all duration-300 p-2 rounded-md"
                style={{ color: "#888888", backgroundColor: "#1C1C1C" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#C9A84C";
                  e.currentTarget.style.backgroundColor = "#252525";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#888888";
                  e.currentTarget.style.backgroundColor = "#1C1C1C";
                }}>
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#4A9B8E" }}>
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
                <Link href={link.href} className="text-sm transition-all duration-300"
                  style={{ color: "#888888" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888888")}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#4A9B8E" }}>
            Get In Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
              <span className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                Canalside Recovery Center,<br />London, United Kingdom
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0" style={{ color: "#C9A84C" }} />
              <span className="text-sm" style={{ color: "#888888" }}>+44 123 456 7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0" style={{ color: "#C9A84C" }} />
              <span className="text-sm" style={{ color: "#888888" }}>info@canalside-recovery.co.uk</span>
            </li>
          </ul>

          {/* Mini CTA */}
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4A9B8E")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C9A84C")}>
            Make an Enquiry →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6" style={{ borderTop: "1px solid #2C2C2C" }}>
        <p className="text-center text-xs" style={{ color: "#555555" }}>
          © {new Date().getFullYear()} ETL Care — Canalside House. All rights reserved. Registered in England & Wales.
        </p>
      </div>
    </footer>
  );
};

export default Footer;