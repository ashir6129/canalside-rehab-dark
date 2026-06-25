"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className="fixed w-full z-50 transition-colors duration-300"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-28">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
            <Image
              src="/images/logo-transparent.png"
              alt="ETL Logo"
              fill
              className="object-contain scale-[2.5]"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
          <span className="font-semibold text-base tracking-wide" style={{ color: "var(--text-primary)" }}>
            <span style={{ color: "var(--gold)" }}>Canalside</span> House
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
                  color: isActive ? "var(--gold)" : "var(--text-primary)",
                  borderBottom: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{
              backgroundColor: isDark ? "#2C2C2C" : "#BCCBC9",
            }}
          >
            {/* Track icons */}
            <Moon size={12} className="absolute left-1.5" style={{ color: isDark ? "#C9A84C" : "#AAB8B6", opacity: isDark ? 1 : 0.4, transition: "opacity 0.3s" }} />
            <Sun size={12} className="absolute right-1.5" style={{ color: isDark ? "#555555" : "#3A7A70", opacity: isDark ? 0.4 : 1, transition: "opacity 0.3s" }} />
            {/* Thumb */}
            <span
              className="w-5 h-5 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center"
              style={{
                backgroundColor: isDark ? "#C9A84C" : "#ffffff",
                transform: isDark ? "translateX(0px)" : "translateX(28px)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}
            />
          </button>

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="flex items-center gap-2 font-semibold px-5 py-2 rounded-md text-sm transition-all duration-300"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </div>

        {/* Hamburger + mobile theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md transition-colors duration-300"
            style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            {isDark ? <Sun size={16} style={{ color: "var(--gold)" }} /> : <Moon size={16} style={{ color: "var(--teal)" }} />}
          </button>
          <button
            className="transition-all duration-300"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4 transition-colors duration-300"
          style={{ backgroundColor: "var(--nav-bg)", borderTop: "1px solid var(--nav-border)" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium transition-all duration-300"
                style={{ color: isActive ? "var(--gold)" : "var(--text-primary)" }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 font-semibold px-5 py-2.5 rounded-md text-sm transition-all duration-300"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
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