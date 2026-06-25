"use client";
import Image from "next/image";
import { useState } from "react";

const InteractiveImageSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2 w-full relative">
            <div 
              className="relative w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-500 shadow-lg"
              style={{ border: "1px solid var(--border)", transform: isHovered ? "scale(1.02)" : "scale(1)" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/images/home_screen.png"
                alt="Canalside House Living Area"
                fill
                className="object-cover transition-transform duration-700"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ backgroundColor: "var(--bg-deep)", opacity: isHovered ? 0.1 : 0.3 }} />
            </div>
          </div>

          {/* Text / Interactive Writing */}
          <div className="lg:w-1/2 w-full space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              A Space To Heal
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
              Welcome to Your New Beginning
            </h2>
            <div 
              className="p-6 rounded-xl transition-all duration-300"
              style={{ backgroundColor: isHovered ? "var(--bg-section)" : "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Experience a supportive, communal environment designed to foster lasting recovery. 
                Our space is more than just a residence; it's a foundation for rebuilding life skills, 
                forming meaningful connections, and taking the crucial next steps toward independence.
              </p>
              
              <div className="mt-6 overflow-hidden h-12 flex items-center relative">
                <p 
                  className={`text-base font-medium italic transition-all duration-500 absolute w-full`}
                  style={{ 
                    color: "var(--gold)",
                    transform: isHovered ? "translateY(0)" : "translateY(20px)",
                    opacity: isHovered ? 1 : 0
                  }}
                >
                  "We provide the tools. You build the future."
                </p>
                <p 
                  className={`text-sm transition-all duration-500 absolute w-full`}
                  style={{ 
                    color: "var(--text-dim)",
                    transform: isHovered ? "translateY(-20px)" : "translateY(0)",
                    opacity: isHovered ? 0 : 1
                  }}
                >
                  Hover over the image to interact...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveImageSection;
