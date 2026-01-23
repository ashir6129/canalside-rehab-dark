import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Search } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

const ResourcesPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-[var(--primary)] py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--accent)] opacity-10 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 font-bold">Resource Centre</h1>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Explore our library of expert guides, recovery strategies, and mental health insights designed to support your journey back to independent living.
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <Link
                key={index}
                href={`/resources/${article.slug}`}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[var(--accent)]" /> {article.readTime}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3 font-medium">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[var(--primary)] font-bold group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                    Read Article <ArrowRight size={16} className="text-[var(--accent)]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-white border-2 border-[var(--primary)] rounded-[3rem] p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <BookOpen className="mx-auto text-[var(--accent)] mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)] mb-6">Need Immediate Support?</h2>
            <p className="text-lg text-gray-600 mb-10 font-medium">
              Our clinical team at Canalside House is ready to help you or your loved one start their secondary recovery journey today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--primary)] text-white px-12 py-5 rounded-full font-bold hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-all shadow-xl hover:shadow-2xl"
            >
              Contact Our Admissions Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
