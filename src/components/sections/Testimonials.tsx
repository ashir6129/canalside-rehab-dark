import Image from "next/image";

const testimonials = [
  {
    quote:
      "Coming to Canalside was the best decision I ever made for my recovery. The team helped me bridge the gap between being clean and actually living a fulfilling life.",
    name: "Former Resident",
    role: "Completed 6 Months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    accent: "var(--gold)",
    accentHex: "#C9A84C",
  },
  {
    quote:
      "The family sessions were a game changer. We finally learned how to support our son without enabling the addiction. We're a family again — whole and hopeful.",
    name: "Family Member",
    role: "Secondary Care Support",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    accent: "var(--teal)",
    accentHex: "#4A9B8E",
  },
  {
    quote:
      "I had tried other programmes before. Canalside was different — structure without judgment, support without pressure. I finally feel like myself again.",
    name: "Recovery Graduate",
    role: "12-Month Programme",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
    accent: "var(--gold)",
    accentHex: "#C9A84C",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            Real Stories
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}
          >
            Voices of Recovery
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col transition-colors duration-300"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl leading-none mb-4"
                style={{ color: t.accent, fontFamily: "Georgia, serif", opacity: 0.6 }}
              >
                &ldquo;
              </span>
              <p className="text-sm leading-relaxed mb-6 flex-1 italic" style={{ color: "var(--text-muted)" }}>
                {t.quote}
              </p>
              {/* Divider */}
              <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: t.accent }} />
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: `2px solid ${t.accentHex}` }}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
