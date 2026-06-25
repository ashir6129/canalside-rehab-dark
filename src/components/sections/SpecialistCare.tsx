"use client";
import Image from "next/image";
import { Home, MessageSquare, GraduationCap, ShieldAlert, Users, HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offers = [
  {
    title: "Safe, Supportive Housing",
    desc: "Live in a sober, structured environment with peers who truly understand your journey.",
    icon: Home,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Individual Sessions",
    desc: "Continue therapy with experienced addiction specialists tailored to your individual needs.",
    icon: MessageSquare,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Life Skills & Education",
    desc: "Learn budgeting, job readiness, emotional regulation, and practical independence tools.",
    icon: GraduationCap,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Relapse Prevention",
    desc: "Build a personalised strategy to stay on track and identify early warning signs before they escalate.",
    icon: ShieldAlert,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Community & Peer Support",
    desc: "Create meaningful connections through shared experiences and mutual accountability.",
    icon: Users,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Family Involvement",
    desc: "Rebuild trust through structured family sessions and open, guided communication.",
    icon: HeartHandshake,
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
];

const SpecialistCare = () => {
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
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
          >
            Comprehensive Specialist Care
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Every service at Canalside House is designed to provide the structure and support you need for a successful transition to independent living.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                {/* Card image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.5 }} />
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <Icon size={16} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="w-6 h-0.5 mb-3 rounded-full" style={{ backgroundColor: offer.accent }} />
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
                  >
                    {offer.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {offer.desc}
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

export default SpecialistCare;
