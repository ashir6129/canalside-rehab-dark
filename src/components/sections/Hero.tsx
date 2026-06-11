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
        {/* Dark matte overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.78 }} />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C", color: "#C9A84C" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#4A9B8E" }} />
          ETL Care — Secondary Recovery
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
        >
          Canalside House
        </h1>

        <p className="text-lg md:text-xl font-medium mb-5 tracking-wide" style={{ color: "#C9A84C" }}>
          Secondary Accommodation for Addiction &amp; Recovery Support
        </p>

        <p className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-light"
          style={{ color: "#888888" }}>
          A safe, structured environment where individuals in recovery from drug and alcohol addiction continue their healing journey — with professional support every step of the way.
        </p>

        {/* Stats strip */}
        <div className="flex justify-center gap-8 mb-10">
          {[
            { val: "12+", label: "Years Experience" },
            { val: "95%", label: "Success Rate" },
            { val: "24/7", label: "Support Available" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#C9A84C", fontFamily: "var(--font-playfair), serif" }}>{s.val}</div>
              <div className="text-xs mt-0.5" style={{ color: "#888888" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-md text-base transition-all duration-300"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4A9B8E")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C9A84C")}>
            Start Your Journey <ArrowRight size={18} />
          </Link>
          <Link href="/programme"
            className="inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-md text-base transition-all duration-300"
            style={{ border: "1px solid #2C2C2C", color: "#F0F0F0", backgroundColor: "#1C1C1C" }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#4A9B8E";
              e.currentTarget.style.color = "#4A9B8E";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#2C2C2C";
              e.currentTarget.style.color = "#F0F0F0";
            }}>
            Our Programme
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "#555555" }}>
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;