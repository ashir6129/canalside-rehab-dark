"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Our Programme", href: "/programme" },
  { name: "Referrals", href: "/referral" },
  { name: "For Families", href: "/families" },
  { name: "Resources", href: "/resources" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50" style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #2C2C2C" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ border: "1px solid #C9A84C", backgroundColor: "#1C1C1C" }}>
            <span className="text-[10px] font-bold" style={{ color: "#C9A84C" }}>ETL</span>
          </div>
          <span className="font-semibold text-base tracking-wide" style={{ color: "#F0F0F0" }}>
            <span style={{ color: "#C9A84C" }}>Canalside</span> House
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-all duration-300 pb-0.5"
                style={{
                  color: isActive ? "#C9A84C" : "#F0F0F0",
                  borderBottom: isActive ? "2px solid #C9A84C" : "2px solid transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => !isActive && (e.currentTarget.style.color = "#F0F0F0")}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="flex items-center gap-2 font-semibold px-5 py-2 rounded-md text-sm transition-all duration-300"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4A9B8E")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C9A84C")}
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden transition-all duration-300"
          style={{ color: "#F0F0F0" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #2C2C2C" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium transition-all duration-300"
                style={{ color: isActive ? "#C9A84C" : "#F0F0F0" }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 font-semibold px-5 py-2.5 rounded-md text-sm"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;