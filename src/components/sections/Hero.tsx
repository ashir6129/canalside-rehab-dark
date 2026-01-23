import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
        style={{
          backgroundImage: "url('/assets/images/hero-canal.png')",
          backgroundColor: '#001a3e'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <p className="text-[var(--accent)] font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in">ETL Care Presents</p>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Canalside House<br />
          <span className="text-[var(--accent)] italic text-3xl md:text-5xl">Secondary Accommodation for Addiction & Recovery Support</span>
        </h1>

        <p className="text-2xl md:text-3xl font-serif text-white mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Ongoing Support. Lasting Recovery.
        </p>

        <div className="max-w-4xl mx-auto space-y-6 mb-10 text-white/90 text-lg md:text-xl leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.6s' }}>
          <p>
            Welcome to our Secondary Treatment Programme—a safe and supportive environment where individuals in recovery from drug and alcohol addiction continue their healing journey.
          </p>
          <p className="hidden md:block text-base md:text-lg text-white/80">
            Secondary treatment is designed for those who have completed a primary rehab programme or achieved a level of sobriety through self help groups and are ready to take the next step. It bridges the gap between intensive treatment and a return to independent living, offering the structure and guidance needed for long-term sobriety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 shadow-xl">
            Start Your Journey <ArrowRight size={20} />
          </Link>
          <Link href="/programme" className="glass text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg">
            Our Programme
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;