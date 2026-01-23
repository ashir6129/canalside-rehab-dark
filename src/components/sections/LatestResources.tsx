import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const resources = [
  {
    title: "Anxiety and Depression: The Trap of Self-Medication",
    excerpt: "Understanding how mental health issues and substance abuse often go hand-in-hand...",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "anxiety-and-depression",
  },
  {
    title: "Dealing With Relapse: A Setback, Not the End",
    excerpt: "Recovery is a journey, and sometimes obstacles happen. Learn how to get back on track...",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "dealing-with-relapse",
  },
  {
    title: "How to Help a Loved One in Rehab",
    excerpt: "Practical advice for families on how to provide support without losing themselves...",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "helping-loved-ones",
  },
];

const LatestResources = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-[var(--primary)] mb-4">Latest Resources</h2>
            <p className="text-gray-600">Guidance and support for your recovery journey.</p>
          </div>
          <Link href="/resources" className="hidden md:flex items-center gap-2 text-[var(--primary)] font-bold hover:text-[var(--accent)] transition-colors">
            View All Resources <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Clock size={14} /> {res.readTime}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                {res.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {res.excerpt}
              </p>
              <Link href={`/resources/${res.slug}`} className="text-sm font-bold flex items-center gap-1 text-[var(--primary)]">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <Link href="/resources" className="btn-primary w-full text-center inline-block">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestResources;