import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { notFound } from "next/navigation";

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) return notFound();

  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen transition-colors duration-300">

      {/* Hero image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.45 }} />
        {/* Back link */}
        <div className="absolute top-8 left-6 md:left-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
          >
            <ArrowLeft size={14} /> Back to Library
          </Link>
        </div>
        {/* Category badge */}
        <div className="absolute bottom-6 left-6 md:left-16">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <Calendar size={16} style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>Published</p>
              <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{article.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <Clock size={16} style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>Reading Time</p>
              <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{article.readTime}</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
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
                    color: "var(--text-primary)",
                    borderBottom: "2px solid var(--gold)",
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
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {paragraph.replace(/\*\*/g, "").trim()}
                  </p>
                </div>
              );
            }

            // Normal paragraph
            return (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {paragraph.split(/(\*\*.*?\*\*)/).map((part, index) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={index} style={{ color: "var(--text-primary)", fontWeight: 700 }}>
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
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold)" }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
          >
            Interested in Our Programme?
          </h3>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Speak to our recovery specialists today for a confidential consultation about your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
          >
            Contact Admissions Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-16 transition-colors duration-300" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "var(--gold)" }}>
            Keep Reading
          </p>
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
          >
            More from Our Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel, index) => {
              return (
                <Link
                  key={index}
                  href={`/resources/${rel.slug}`}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.3 }} />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}
                    >
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4
                      className="text-sm font-bold mb-2 line-clamp-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {rel.title}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{rel.readTime} · {rel.date}</p>
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