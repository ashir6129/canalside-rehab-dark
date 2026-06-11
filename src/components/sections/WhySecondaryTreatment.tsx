"use client";
import Image from "next/image";
import { ShieldCheck, Sparkles, Brain, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Build Resilience",
    desc: "Against relapse, providing the strength and tools to overcome challenges in everyday sober life.",
    icon: ShieldCheck,
    accent: "#C9A84C",
  },
  {
    title: "Strengthen Life Skills",
    desc: "For daily living, including practical management of finances, relationships, and a fulfilling sober lifestyle.",
    icon: Sparkles,
    accent: "#4A9B8E",
  },
  {
    title: "Deepen Self-Awareness",
    desc: "Through therapy and group work, understanding individual triggers and building lasting emotional intelligence.",
    icon: Brain,
    accent: "#C9A84C",
  },
  {
    title: "Reconnect with Purpose",
    desc: "Set healthy goals, rebuild identity, and rediscover meaning and direction beyond addiction.",
    icon: Target,
    accent: "#4A9B8E",
  },
];

const WhySecondaryTreatment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-14 items-start transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — text + image */}
          <div className="lg:w-5/12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A9B8E" }}>
              The Case for Secondary Care
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
              Why Secondary Treatment?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
              Recovery doesn&apos;t end with detox or primary care. The early months after treatment are the most critical — secondary care provides the structured tools and safe space to truly thrive beyond initial sobriety.
            </p>

            {/* Image */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #2C2C2C" }}>
              <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80"
                alt="Recovery journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.35 }} />
              {/* Quote overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium italic" style={{ color: "#F0F0F0" }}>
                  &ldquo;Secondary care gave me the foundation I needed to stay sober long-term.&rdquo;
                </p>
                <p className="text-xs mt-1" style={{ color: "#C9A84C" }}>— Former Resident</p>
              </div>
            </div>
          </div>

          {/* Right — 2×2 benefit cards */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = reason.accent)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#2C2C2C")}
                >
                  {/* Number badge */}
                  <span className="absolute top-4 right-4 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: reason.accent, color: "#0D0D0D" }}>
                    {index + 1}
                  </span>
                  {/* Icon */}
                  <div className="mb-4 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: reason.accent + "22" }}>
                    <Icon size={20} style={{ color: reason.accent }} />
                  </div>
                  <h3 className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySecondaryTreatment;
