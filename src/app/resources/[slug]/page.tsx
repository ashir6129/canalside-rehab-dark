import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { notFound } from "next/navigation";

const categoryColors: Record<string, string> = {
  "Mental Health": "#4A9B8E",
  "Relapse Prevention": "#C9A84C",
  "Personal Growth": "#4A9B8E",
  "Family Support": "#C9A84C",
  "Practical Guides": "#4A9B8E",
};

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) return notFound();

  const accentColor = categoryColors[article.category] ?? "#C9A84C";

  return (
    <main style={{ backgroundColor: "#111111" }} className="pt-20 min-h-screen">

      {/* Hero image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "#0D0D0D", opacity: 0.5 }} />
        {/* Back link */}
        <div className="absolute top-8 left-6 md:left-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#CCCCCC", border: "1px solid #333333" }}
          >
            <ArrowLeft size={14} /> Back to Library
          </Link>
        </div>
        {/* Category badge */}
        <div className="absolute bottom-6 left-6 md:left-16">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: accentColor, color: "#0D0D0D" }}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8" style={{ borderBottom: "1px solid #2C2C2C" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1C1C1C" }}>
              <Calendar size={16} style={{ color: accentColor }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#555555" }}>Published</p>
              <p className="text-sm font-bold" style={{ color: "#CCCCCC" }}>{article.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1C1C1C" }}>
              <Clock size={16} style={{ color: accentColor }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#555555" }}>Reading Time</p>
              <p className="text-sm font-bold" style={{ color: "#CCCCCC" }}>{article.readTime}</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
        >
          {article.title}
        </h1>

        {/* Content */}
        <div className="space-y-6">
          {article.content.map((paragraph, i) => {
            // Section heading
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold pt-6 pb-2"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: "#F0F0F0",
                    borderBottom: `2px solid ${accentColor}`,
                  }}
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h2>
              );
            }

            // List items
            const isListItem =
              /^\d\./.test(paragraph.trim()) ||
              paragraph.trim().startsWith("●") ||
              paragraph.startsWith(" ");

            if (isListItem) {
              return (
                <div key={i} className="flex gap-4 items-start pl-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                    style={{ backgroundColor: accentColor }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: "#AAAAAA" }}>
                    {paragraph.replace(/\*\*/g, "").trim()}
                  </p>
                </div>
              );
            }

            // Normal paragraph
            return (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#AAAAAA" }}>
                {paragraph.split(/(\*\*.*?\*\*)/).map((part, index) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={index} style={{ color: "#F0F0F0", fontWeight: 700 }}>
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-10 rounded-2xl text-center"
          style={{ backgroundColor: "#1C1C1C", border: `1px solid ${accentColor}` }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            Interested in Our Programme?
          </h3>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "#888888" }}>
            Speak to our recovery specialists today for a confidential consultation about your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm"
            style={{ backgroundColor: accentColor, color: "#0D0D0D" }}
          >
            Contact Admissions Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-16" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#C9A84C" }}>
            Keep Reading
          </p>
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            More from Our Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel, index) => {
              const relAccent = categoryColors[rel.category] ?? "#C9A84C";
              return (
                <Link
                  key={index}
                  href={`/resources/${rel.slug}`}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.4 }} />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: relAccent, color: "#0D0D0D" }}
                    >
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4
                      className="text-sm font-bold mb-2 line-clamp-2"
                      style={{ color: "#F0F0F0" }}
                    >
                      {rel.title}
                    </h4>
                    <p className="text-xs" style={{ color: "#666666" }}>{rel.readTime} · {rel.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ArticlePage;