"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Programme", href: "/programme" },
    { name: "Referrals", href: "/referral" },
    { name: "For Families", href: "/families" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-black/20 backdrop-blur-sm py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div id="etl-logo-placeholder" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 text-[8px] text-white/50 text-center p-1">
            ETL LOGO
          </div>
          <Link href="/" className={`text-xl font-serif font-bold transition-colors ${scrolled ? "text-[var(--primary)]" : "text-white"}`}>
            <span className="text-[var(--accent)]">ETL</span> Care | Canalside House
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors ${scrolled ? "text-slate-900 hover:text-[var(--accent)]" : "text-white hover:text-[var(--accent)]"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary flex items-center gap-2 shadow-lg">
            <Phone size={18} />
            Contact Us
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-[var(--primary)]" /> : <Menu className="text-[var(--primary)]" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary inline-block text-center">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;