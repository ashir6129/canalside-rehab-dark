import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake, Shield, MessageCircle, Lightbulb,
  ShieldAlert, Brain, GraduationCap, Users, UserPlus, ArrowRight
} from "lucide-react";

const familyGuide = [
  {
    title: "A Safer Transition Back to Daily Life",
    description: "Moving directly from inpatient rehab back into the 'real world' can be overwhelming. Secondary treatment provides a structured, supportive environment where your loved one can continue to heal while slowly adjusting to everyday responsibilities.",
    icon: Shield,
    accent: "#C9A84C",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Stronger Relapse Prevention",
    description: "The early stages of recovery are when relapse is most likely. In secondary care, individuals continue learning how to manage triggers, build healthy routines, and stay focused on long-term sobriety with professional guidance.",
    icon: ShieldAlert,
    accent: "#4A9B8E",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Ongoing Emotional and Therapeutic Support",
    description: "Secondary treatment gives your loved one continued access to therapists, counsellors, and peer support — allowing them to dive deeper into the root causes of their addiction.",
    icon: Brain,
    accent: "#C9A84C",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "More Time to Build Life Skills",
    description: "From managing finances to finding work or going back to school, secondary care focuses on developing the tools your loved one needs to succeed independently — without turning back to substances.",
    icon: GraduationCap,
    accent: "#4A9B8E",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Accountability and Community",
    description: "Living in a sober, structured setting with others who are also in recovery helps build responsibility, confidence, and healthy relationships — providing a strong support system outside the family unit.",
    icon: Users,
    accent: "#C9A84C",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Support for You, Too",
    description: "Many secondary treatment programmes offer family therapy, education, or support groups — because healing isn't just for the person in treatment. It's for the whole family.",
    icon: UserPlus,
    accent: "#4A9B8E",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&q=80",
  },
];

const tips = [
  { title: "Educate Yourself", description: "Learn about the science of addiction and recovery to understand what your loved one is experiencing.", icon: Lightbulb, accent: "#C9A84C" },
  { title: "Set Boundaries", description: "Establishing healthy boundaries is crucial for your well-being and their recovery success.", icon: Shield, accent: "#4A9B8E" },
  { title: "Open Communication", description: "Practice honest, non-judgmental communication to rebuild trust gradually.", icon: MessageCircle, accent: "#C9A84C" },
  { title: "Seek Your Own Support", description: "Consider family therapy or support groups like Al-Anon to manage your own stress and emotions.", icon: HeartHandshake, accent: "#4A9B8E" },
];

const FamiliesPage = () => {
  return (
    <main style={{ backgroundColor: "#111111" }} className="pt-20">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80"
            alt="Family support"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "#0D0D0D", opacity: 0.75 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4A9B8E" }}>
            Family Support
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            Support for Families
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#888888" }}>
            Recovery is a journey for the whole family. We are here to support you every step of the way — with compassion, guidance, and expert care.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
          >
            Book a Family Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Family Guide */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              Why It Matters
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              Why Secondary Treatment Matters
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "#888888" }}>
              Watching a loved one complete a residential treatment programme is a huge milestone — but recovery doesn&apos;t end there. Here&apos;s how secondary care makes all the difference for them and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyGuide.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.45 }} />
                    <div
                      className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Icon size={18} style={{ color: "#0D0D0D" }} />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <div className="w-8 h-0.5 rounded-full mb-3" style={{ backgroundColor: item.accent }} />
                    <h3 className="text-base font-bold mb-3" style={{ color: "#F0F0F0" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role of Families */}
      <section className="py-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text */}
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A9B8E" }}>
                Your Role
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
              >
                The Role of Families in Recovery
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#888888" }}>
                At Canalside, we believe that family support is a cornerstone of long-term recovery. However, we also understand the toll that addiction takes on loved ones.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
                Our secondary care programme includes professional guidance for families, helping them navigate the transition and create a safe, supportive environment for their loved one&apos;s return.
              </p>
              {/* Quote */}
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: "#1C1C1C", borderLeft: "4px solid #C9A84C" }}
              >
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "#DDDDDD" }}
                >
                  &ldquo;The goal is not just for the individual to stay sober, but for the entire family system to heal and find a new balance.&rdquo;
                </p>
                <p className="text-xs mt-3" style={{ color: "#555555" }}>— Canalside Clinical Team</p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden" style={{ border: "1px solid #2C2C2C" }}>
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80"
                  alt="Family in recovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.25 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              Practical Guidance
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              How You Can Help
            </h2>
            <p className="text-sm" style={{ color: "#888888" }}>
              Practical steps for families to support the recovery process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: tip.accent }}
                  >
                    <Icon size={18} style={{ color: "#0D0D0D" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: "#F0F0F0" }}>{tip.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>{tip.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Consultation CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=80"
            alt="Family consultation"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4A9B8E" }}>
            Take Action
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            Help Your Loved One Build a Stronger Foundation
          </h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "#888888" }}>
            Secondary treatment is more than just &ldquo;extra time&rdquo; in recovery — it&apos;s a chance to deepen healing, grow essential life skills, and create a solid path forward. We offer dedicated family sessions to discuss the recovery plan and provide you with the tools necessary for a healthy transition.
          </p>
          <div className="p-8 rounded-2xl mb-8" style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              Family Consultation
            </h3>
            <p className="text-sm mb-6" style={{ color: "#888888" }}>
              Speak confidentially with our clinical team about your loved one&apos;s care plan and how you can be part of their recovery journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm"
              style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default FamiliesPage;