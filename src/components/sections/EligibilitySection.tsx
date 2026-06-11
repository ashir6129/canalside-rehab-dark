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
    <section className="py-24" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-14 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              Eligibility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
              Is This Right for You?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
              Secondary treatment is ideal for those who have completed a primary programme and are ready to take the next step toward independent, sober living with ongoing professional support.
            </p>

            <ul className="space-y-4 mb-10">
              {criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}>
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: i % 2 === 0 ? "#C9A84C" : "#4A9B8E" }}>
                    <Check size={11} style={{ color: "#0D0D0D" }} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#888888" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3 rounded-md text-sm transition-all duration-300"
                style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4A9B8E")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C9A84C")}>
                Make an Enquiry <ArrowRight size={15} />
              </Link>
              <Link href="/eligibility"
                className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3 rounded-md text-sm transition-all duration-300"
                style={{ border: "1px solid #2C2C2C", color: "#888888" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#4A9B8E";
                  e.currentTarget.style.color = "#4A9B8E";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#2C2C2C";
                  e.currentTarget.style.color = "#888888";
                }}>
                Full Criteria <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — stacked images */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {/* Main image */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #2C2C2C" }}>
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                alt="Supportive recovery community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.3 }} />
            </div>
            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-2xl overflow-hidden"
                style={{ border: "1px solid #2C2C2C" }}>
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80"
                  alt="Peaceful environment"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.3 }} />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden flex flex-col justify-end p-4"
                style={{ backgroundColor: "#C9A84C" }}>
                <p className="text-sm font-bold italic"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "#0D0D0D" }}>
                  &ldquo;A bridge to independence.&rdquo;
                </p>
                <p className="text-xs mt-1" style={{ color: "#0D0D0D", opacity: 0.7 }}>— Residential Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
