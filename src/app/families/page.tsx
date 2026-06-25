"use client";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake, Shield, MessageCircle, Lightbulb,
  ShieldAlert, Brain, GraduationCap, Users, UserPlus, ArrowRight
} from "lucide-react";

const familyGuide = [
  { title: "A Safer Transition Back to Daily Life", description: "Moving directly from inpatient rehab back into the 'real world' can be overwhelming. Secondary treatment provides a structured, supportive environment where your loved one can continue to heal while slowly adjusting to everyday responsibilities.", icon: Shield, accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
  { title: "Stronger Relapse Prevention", description: "The early stages of recovery are when relapse is most likely. In secondary care, individuals continue learning how to manage triggers, build healthy routines, and stay focused on long-term sobriety with professional guidance.", icon: ShieldAlert, accentVar: "var(--teal)", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80" },
  { title: "Ongoing Emotional and Therapeutic Support", description: "Secondary treatment gives your loved one continued access to therapists, counsellors, and peer support — allowing them to dive deeper into the root causes of their addiction.", icon: Brain, accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { title: "More Time to Build Life Skills", description: "From managing finances to finding work or going back to school, secondary care focuses on developing the tools your loved one needs to succeed independently — without turning back to substances.", icon: GraduationCap, accentVar: "var(--teal)", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
  { title: "Accountability and Community", description: "Living in a sober, structured setting with others who are also in recovery helps build responsibility, confidence, and healthy relationships — providing a strong support system outside the family unit.", icon: Users, accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80" },
  { title: "Support for You, Too", description: "Many secondary treatment programmes offer family therapy, education, or support groups — because healing isn't just for the person in treatment. It's for the whole family.", icon: UserPlus, accentVar: "var(--teal)", image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&q=80" },
];

const tips = [
  { title: "Educate Yourself", description: "Learn about the science of addiction and recovery to understand what your loved one is experiencing.", icon: Lightbulb, accentVar: "var(--gold)" },
  { title: "Set Boundaries", description: "Establishing healthy boundaries is crucial for your well-being and their recovery success.", icon: Shield, accentVar: "var(--teal)" },
  { title: "Open Communication", description: "Practice honest, non-judgmental communication to rebuild trust gradually.", icon: MessageCircle, accentVar: "var(--gold)" },
  { title: "Seek Your Own Support", description: "Consider family therapy or support groups like Al-Anon to manage your own stress and emotions.", icon: HeartHandshake, accentVar: "var(--teal)" },
];

const FamiliesPage = () => {
  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80" alt="Family support" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: "var(--hero-overlay-opacity)" as string }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Family Support</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Support for Families</h1>
          <p className="btn-primary text-lg max-w-2xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>Recovery is a journey for the whole family. We are here to support you every step of the way — with compassion, guidance, and expert care.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
            Book a Family Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Family Guide */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Why Secondary Treatment Matters</h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>Watching a loved one complete a residential treatment programme is a huge milestone — but recovery doesn&apos;t end there. Here&apos;s how secondary care makes all the difference for them and your family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyGuide.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="relative h-44 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.45 }} />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.accentVar }}>
                      <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-8 h-0.5 rounded-full mb-3" style={{ backgroundColor: item.accentVar }} />
                    <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role of Families */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Your Role</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>The Role of Families in Recovery</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>At Canalside, we believe that family support is a cornerstone of long-term recovery. However, we also understand the toll that addiction takes on loved ones.</p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Our secondary care programme includes professional guidance for families, helping them navigate the transition and create a safe, supportive environment for their loved one&apos;s return.</p>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", borderLeft: "4px solid var(--gold)" }}>
                <p className="text-sm italic leading-relaxed" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>&ldquo;The goal is not just for the individual to stay sober, but for the entire family system to heal and find a new balance.&rdquo;</p>
                <p className="text-xs mt-3" style={{ color: "var(--text-dim)" }}>— Canalside Clinical Team</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80" alt="Family in recovery" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.25 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Practical Guidance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>How You Can Help</h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Practical steps for families to support the recovery process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: tip.accentVar }}>
                    <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{tip.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{tip.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=80" alt="Family consultation" fill className="object-cover opacity-10" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Take Action</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Help Your Loved One Build a Stronger Foundation</h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>Secondary treatment is more than just &ldquo;extra time&rdquo; in recovery — it&apos;s a chance to deepen healing, grow essential life skills, and create a solid path forward.</p>
          <div className="p-8 rounded-2xl mb-8" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Family Consultation</h3>
            <p className="btn-primary text-sm mb-6" style={{ color: "var(--text-muted)" }}>Speak confidentially with our clinical team about your loved one&apos;s care plan.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FamiliesPage;