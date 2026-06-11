"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { useEffect, useRef, useState } from "react";

const LatestResources = () => {
  const displayArticles = ARTICLES.slice(0, 3);
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

  const accentColors = ["#C9A84C", "#4A9B8E", "#C9A84C"];

  return (
    <section className="py-24" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#4A9B8E" }}>
              Knowledge &amp; Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
              Latest Resources
            </h2>
          </div>
          <Link href="/resources"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: "#C9A84C" }}>
            View All <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {displayArticles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accentColors[i])}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#2C2C2C")}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0" style={{ backgroundColor: "#0D0D0D", opacity: 0.35 }} />
                {/* Category tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: accentColors[i], color: "#0D0D0D" }}>
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium mb-3"
                  style={{ color: "#888888" }}>
                  <Clock size={11} /> {article.readTime} read
                </span>

                <h3 className="text-base font-bold mb-2 line-clamp-2 leading-snug"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
                  {article.title}
                </h3>

                <p className="text-sm leading-relaxed line-clamp-3 mb-5 flex-1" style={{ color: "#888888" }}>
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-300"
                  style={{ color: accentColors[i] }}>
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden">
          <Link href="/resources"
            className="flex items-center justify-center gap-2 font-bold px-7 py-3 rounded-md text-sm w-full transition-all duration-300"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}>
            View All Resources <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestResources;