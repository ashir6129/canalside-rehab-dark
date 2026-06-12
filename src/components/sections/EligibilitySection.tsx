"use client";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const criteria = [
  "Individuals leaving detox, rehab, or primary treatment who are motivated to maintain recovery.",
  "Individuals who are homeless or at risk of homelessness and looking for a structured, supportive living environment.",
  "Adults aged 18+ with GP intervention and/or maintained sobriety for a minimum of 6 weeks.",
  "Clients with co-occurring mental health needs — care is tailored accordingly.",
];

const EligibilitySection = () => {
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
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-14 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
              Eligibility
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
            >
              Is This Right for You?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Secondary treatment is ideal for those who have completed a primary programme and are ready to take the next step toward independent, sober living with ongoing professional support.
            </p>

            <ul className="space-y-4 mb-10">
              {criteria.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: i % 2 === 0 ? "var(--gold)" : "var(--teal)" }}
                  >
                    <Check size={11} style={{ color: "var(--text-on-accent)" }} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3 rounded-md text-sm transition-all duration-300"
                style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
              >
                Make an Enquiry <ArrowRight size={15} />
              </Link>
              <Link
                href="/eligibility"
                className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3 rounded-md text-sm transition-all duration-300"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--teal)";
                  e.currentTarget.style.color = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                Full Criteria <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — stacked images */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {/* Main image */}
            <div
              className="relative w-full h-72 rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                alt="Supportive recovery community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.3 }} />
            </div>
            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative h-40 rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80"
                  alt="Peaceful environment"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.3 }} />
              </div>
              <div
                className="relative h-40 rounded-2xl overflow-hidden flex flex-col justify-end p-4"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <p
                  className="text-sm font-bold italic"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-on-accent)" }}
                >
                  &ldquo;A bridge to independence.&rdquo;
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-on-accent)", opacity: 0.7 }}>— Residential Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
