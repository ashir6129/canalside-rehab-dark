"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Bedrooms",
    thumbnail: "/images/facility/bedroom1.jpeg",
    images: [
      "/images/facility/bedroom1.jpeg",
      "/images/facility/bedroom2.jpeg",
      "/images/facility/bedroom3.jpeg",
      "/images/facility/bedroom4.jpeg",
    ]
  },
  {
    title: "Kitchen & Dining",
    thumbnail: "/images/facility/dine1.jpeg",
    images: [
      "/images/facility/dine1.jpeg",
      "/images/facility/dine2.jpeg",
      "/images/facility/dine3.jpeg",
      "/images/facility/dine4.jpeg",
    ]
  },
  {
    title: "Washrooms",
    thumbnail: "/images/facility/wash2.jpeg",
    images: [
      "/images/facility/wash2.jpeg",
      "/images/facility/wash1.jpeg",
    ]
  }
];

const FacilityGallery = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (index: number) => {
    setActiveCategory(index);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setActiveCategory(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategory === null) return;
    const cat = categories[activeCategory];
    setCurrentSlide((prev) => (prev + 1) % cat.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategory === null) return;
    const cat = categories[activeCategory];
    setCurrentSlide((prev) => (prev - 1 + cat.images.length) % cat.images.length);
  };

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
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => openModal(i)}
            >
              <Image 
                src={cat.thumbnail} 
                alt={cat.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-xl bg-black/40 px-6 py-2 rounded-lg backdrop-blur-sm">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCategory !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
          >
            <X size={36} />
          </button>
          
          {/* Left Arrow */}
          <button 
            className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft size={36} />
          </button>
          
          {/* Main Image */}
          <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={categories[activeCategory].images[currentSlide]}
              alt={`${categories[activeCategory].title} image ${currentSlide + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {/* Title / Counter at bottom */}
            <div className="absolute -bottom-12 left-0 right-0 text-center text-white font-medium">
              {categories[activeCategory].title} ({currentSlide + 1} / {categories[activeCategory].images.length})
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 z-10"
            onClick={nextSlide}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default FacilityGallery;
