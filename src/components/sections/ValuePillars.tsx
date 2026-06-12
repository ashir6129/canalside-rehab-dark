"use client";
import Image from "next/image";
import { ShieldCheck, Heart, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Excellence",
    description: "We are committed to continuous improvement, staff development, and evidence-informed practice to ensure the highest quality of care.",
    icon: ShieldCheck,
    accentColor: "var(--gold)",
    accentHex: "#C9A84C",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Respect",
    description: "We value each person's uniqueness, autonomy, and capacity for change, offering personalised care that honours their lived experience.",
    icon: Heart,
    accentColor: "var(--teal)",
    accentHex: "#4A9B8E",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Community",
    description: "We foster a sense of belonging and support through peer relationships, group engagement, and connection to 12-step fellowships.",
    icon: Users,
    accentColor: "var(--gold)",
    accentHex: "#C9A84C",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
];

const ValuePillars = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
            Our Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
            Built on Three Pillars
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = pillar.accentHex)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.45 }} />
                  {/* Icon badge */}
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: pillar.accentColor }}
                  >
                    <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
                  >
                    {pillar.title}
                  </h3>
                  <div className="w-8 h-0.5 mb-3 rounded-full" style={{ backgroundColor: pillar.accentColor }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;