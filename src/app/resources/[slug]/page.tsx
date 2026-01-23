import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { notFound } from "next/navigation";

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] transition-colors mb-12 font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={18} /> Back to Library
          </Link>

          <header className="mb-16">
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--primary)] mb-8 leading-[1.1] font-bold">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-100 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[var(--accent)]"><Calendar size={18} /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-black">Published</p>
                  <p className="text-sm font-bold text-[var(--primary)]">{article.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[var(--accent)]"><Clock size={18} /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-black">Reading Time</p>
                  <p className="text-sm font-bold text-[var(--primary)]">{article.readTime}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="article-content space-y-8">
            {article.content.map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h2 key={i} className="text-3xl font-serif font-bold text-[var(--primary)] pt-8 pb-2 border-b-2 border-gray-50">
                    {paragraph.replace(/\*\*/g, "")}
                  </h2>
                );
              }

              // Detecting lists (starts with digit, bullet, or leading space as the user removed bullets)
              const isListItem = /^\d\./.test(paragraph.trim()) || paragraph.trim().startsWith("●") || paragraph.startsWith(" ");

              if (isListItem) {
                return (
                  <div key={i} className="flex gap-4 items-start pl-4 py-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-3 shrink-0"></span>
                    <p className="text-xl text-[#333] leading-relaxed font-medium">
                      {paragraph.replace(/\*\*/g, "").trim()}
                    </p>
                  </div>
                );
              }

              return (
                <p key={i} className="text-xl text-[#333] leading-relaxed font-medium text-justify md:text-left">
                  {paragraph.split(/(\*\*.*?\*\*)/).map((part, index) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={index} className="text-[var(--primary)] font-extrabold">{part.replace(/\*\*/g, "")}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          <div className="mt-20 p-12 bg-[var(--primary)] rounded-[3rem] text-white">
            <h3 className="text-3xl font-serif mb-6 text-white font-bold">Interested in our programme?</h3>
            <p className="text-gray-300 mb-10 text-lg font-medium leading-relaxed">Speak to our recovery specialists today for a confidential consultation about your specific needs.</p>
            <Link href="/contact" className="btn-primary bg-[var(--accent)] border-none text-[var(--primary)]">
              Contact Admission Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;