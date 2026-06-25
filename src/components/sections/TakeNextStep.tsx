"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Phone,
    title: "Get Professional Advice",
    description: "Contact us today for a confidential conversation about your recovery journey. Our team is available to answer all your questions with compassion and expertise.",
    cta: "Contact Us Now",
    href: "/contact",
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: MapPin,
    title: "Visit & Learn More",
    description: "Schedule a visit or explore our programme and therapeutic community to see if Canalside House is the right fit for you or your loved one.",
    cta: "Explore Our Programme",
    href: "/programme",
    accent: "var(--gold)",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  },
];

const TakeNextStep = () => {
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
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-deep)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
            Begin Your Recovery
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
          >
            Take the Next Step
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            You&apos;ve already done the hard part — now let&apos;s build on that foundation. We&apos;re here to help you every step of the way.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.55 }} />
                  {/* Icon over image */}
                  <div
                    className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: step.accent }}
                  >
                    <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-8 h-0.5 mb-4 rounded-full" style={{ backgroundColor: step.accent }} />
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className="inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-md text-sm transition-all duration-300 w-fit"
                    style={{ backgroundColor: step.accent, color: "var(--text-on-accent)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {step.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width CTA strip */}
        <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
              alt="Recovery path"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.8 }} />
          </div>
          <div className="relative z-10 py-14 px-8 text-center">
            <p className="text-lg mb-6 max-w-lg mx-auto" style={{ color: "var(--text-primary)" }}>
              Ready to start? Our team responds within 24 hours — confidentially and compassionately.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-base transition-all duration-300"
              style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--teal)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
            >
              Enquire Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeNextStep;
