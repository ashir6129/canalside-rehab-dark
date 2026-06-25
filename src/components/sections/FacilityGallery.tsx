"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/facility/bedroom1.jpeg", alt: "Bedroom" },
  { src: "/images/facility/bedroom2.jpeg", alt: "Bedroom" },
  { src: "/images/facility/dine1.jpeg", alt: "Dining Area" },
  { src: "/images/facility/wash1.jpeg", alt: "Washroom" },
  { src: "/images/facility/bedroom3.jpeg", alt: "Bedroom" },
  { src: "/images/facility/dine2.jpeg", alt: "Kitchen / Dining" },
  { src: "/images/facility/wash2.jpeg", alt: "Washroom" },
  { src: "/images/facility/bedroom4.jpeg", alt: "Bedroom" },
];

const FacilityGallery = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-section)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            Our Facilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
            A Comfortable Place to Heal
          </h2>
        </div>
        
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {images.map((img, i) => (
            <div key={i} className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-sm group">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityGallery;
