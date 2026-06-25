"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Peaceful nature landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay — lighter in light mode via CSS var */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ backgroundColor: "var(--bg-main)", opacity: "var(--hero-overlay-opacity)" }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-bold uppercase tracking-widest shadow-md"
          style={{ backgroundColor: "var(--bg-card)", border: "2px solid var(--gold)", color: "var(--gold)" }}
        >
          <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ backgroundColor: "var(--gold)" }} />
          A project of ETL and Rehbr UK limited
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
        >
          Canalside House
        </h1>

        <p className="text-lg md:text-xl font-medium mb-5 tracking-wide" style={{ color: "var(--gold)" }}>
          Secondary Accommodation for Addiction &amp; Recovery Support
        </p>

        <p
          className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-light"
          style={{ color: "var(--text-muted)" }}
        >
          A safe, structured environment where individuals in recovery from drug and alcohol addiction continue their healing journey — with professional support every step of the way.
        </p>

        {/* Stats strip */}
        <div className="flex justify-center gap-8 mb-10">
          {[
            { val: "24/7", label: "Support Available" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "var(--gold)", fontFamily: "var(--font-playfair), serif" }}>{s.val}</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-md text-base transition-all duration-300"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>
          <Link
            href="/programme"
            className="inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-md text-base transition-all duration-300"
            style={{ border: "1px solid var(--border)", color: "var(--text-primary)", backgroundColor: "var(--bg-card)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--teal)";
              e.currentTarget.style.color = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Our Programme
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "var(--text-dim)" }}>
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;