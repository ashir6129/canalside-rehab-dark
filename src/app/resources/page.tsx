import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

const categoryColors: Record<string, string> = {
  "Mental Health": "var(--teal)",
  "Relapse Prevention": "var(--gold)",
  "Personal Growth": "var(--teal)",
  "Family Support": "var(--gold)",
  "Practical Guides": "var(--teal)",
};

const ResourcesPage = () => {
  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80" alt="Resource library" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.75 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Knowledge Centre</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Resource Centre</h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>Expert guides, recovery strategies, and mental health insights designed to support your journey back to independent living.</p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article, index) => {
              const accentVar = categoryColors[article.category] ?? "var(--gold)";
              return (
                <Link
                  key={index}
                  href={`/resources/${article.slug}`}
                  className="group rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.35 }} />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: accentVar, color: "var(--text-on-accent)" }}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-dim)" }}>
                        <Clock size={12} style={{ color: accentVar }} />
                        {article.readTime}
                      </span>
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--border)" }} />
                      <span className="text-xs" style={{ color: "var(--text-dim)" }}>{article.date}</span>
                    </div>
                    {/* Title */}
                    <h3 className="text-base font-bold mb-3 line-clamp-2 transition-colors duration-300" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
                      {article.title}
                    </h3>
                    {/* Accent line */}
                    <div className="w-8 h-0.5 rounded-full mb-3" style={{ backgroundColor: accentVar }} />
                    {/* Excerpt */}
                    <p className="text-xs leading-relaxed mb-6 line-clamp-3 flex-grow" style={{ color: "var(--text-muted)" }}>
                      {article.excerpt}
                    </p>
                    {/* Read link */}
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-auto group-hover:gap-3 transition-all" style={{ color: accentVar }}>
                      Read Article <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl relative overflow-hidden" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold)" }}>
            <div className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80" alt="Support background" fill className="object-cover opacity-5" />
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--gold)" }}>
                <BookOpen size={24} style={{ color: "var(--text-on-accent)" }} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>We&apos;re Here to Help</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Need Immediate Support?</h2>
              <p className="btn-primary text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>Our clinical team at Canalside House is ready to help you or your loved one start their secondary recovery journey today.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
                Contact Our Admissions Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
