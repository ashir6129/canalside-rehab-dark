import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2, ArrowRightLeft, Users, Activity, Sparkles,
  Brain, Shield, Heart, GraduationCap, Clock, Home, Users2, ArrowRight
} from "lucide-react";

const benefits = [
  { title: "Smooth Transition to Independent Living", description: "Secondary treatment provides a bridge between intensive inpatient care and full independence, helping clients reintegrate into daily life with continued support.", icon: ArrowRightLeft, accent: "#C9A84C", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
  { title: "Ongoing Therapy and Support", description: "Continued access to individual therapy, group counseling, and peer support allows clients to work through deeper emotional issues and triggers.", icon: Heart, accent: "#4A9B8E", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { title: "Relapse Prevention", description: "Clients learn advanced coping skills and relapse prevention strategies, helping them recognise early warning signs without returning to substance use.", icon: Shield, accent: "#C9A84C", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80" },
  { title: "Structured Routine", description: "Secondary programs offer structure and accountability—therapy, life skills classes, 12-step meetings, and recreational activities keeping recovery on track.", icon: Clock, accent: "#4A9B8E", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80" },
  { title: "Supportive Environment", description: "Being in a sober, supportive community helps reduce the isolation often felt during early recovery. Clients build strong relationships with others who share similar goals.", icon: Home, accent: "#C9A84C", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80" },
  { title: "Life Skills & Personal Growth", description: "Education on budgeting, healthy living habits, and communication skills — essential tools for long-term success and self-sufficiency after recovery.", icon: GraduationCap, accent: "#4A9B8E", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
  { title: "Family Involvement", description: "Many programs incorporate family therapy or education, helping loved ones understand the recovery process and rebuild trust and communication.", icon: Users2, accent: "#C9A84C", image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&q=80" },
];

const focusAreas = [
  "Building Self-Confidence",
  "Repairing and Maintaining Relationships",
  "Strategies for Managing Stress",
  "Relapse Prevention",
  "12 Step Programme Consolidation",
  "Weekly Group Therapy",
  "Individual Care Planning",
  "Recognising Triggers and How to Manage Them",
  "Structured Daily Routine",
  "Building a Support Network",
  "How to Manage Cravings if They Occur",
  "Developing Skills in Budget and Meal Planning",
  "How to Take Responsibility in Personal Life",
];

const ProgrammePage = () => {
  return (
    <main style={{ backgroundColor: "#111111" }} className="pt-20">

      {/* Hero Header */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1600&q=80"
            alt="Programme background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "#0D0D0D", opacity: 0.7 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4A9B8E" }}>
            Secondary Care
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            Our Programme
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#888888" }}>
            Bridging the gap between initial rehabilitation and a full, independent life — with structure, community, and expert clinical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/referral/apply"
              className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm transition-colors duration-300"
              style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/referral"
              className="inline-flex items-center gap-2 font-medium px-8 py-3.5 rounded-md text-sm transition-colors duration-300"
              style={{ border: "1px solid #2C2C2C", color: "#888888" }}
            >
              For Professionals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              Understanding Care
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              Secondary Care vs Primary Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Primary */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "#555555", fontFamily: "var(--font-playfair), serif" }}>
                Primary Care
              </h3>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#555555" }}>The Foundation</p>
              <ul className="space-y-4">
                {["Clinical detoxification and stabilization.", "24/7 high-intensity clinical supervision.", "Short-term intervention (typically 28 days)."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#444444" }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: "#555555" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary (Canalside) */}
            <div className="p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: "#1C1C1C", border: "2px solid #C9A84C" }}>
              <div
                className="absolute top-0 right-0 text-xs font-bold uppercase px-4 py-1.5"
                style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
              >
                Canalside Recovery
              </div>
              <h3 className="text-xl font-bold mb-2 mt-4" style={{ color: "#F0F0F0", fontFamily: "var(--font-playfair), serif" }}>
                Secondary Care
              </h3>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9A84C" }}>Sustainable Living</p>
              <ul className="space-y-4">
                {["Semi-independent therapeutic living.", "Focus on community integration and employment.", "Extended support for lasting abstinence."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: "#C9A84C" }} className="shrink-0 mt-0.5" />
                    <span className="text-sm font-medium" style={{ color: "#CCCCCC" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A9B8E" }}>
              Why It Works
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              Benefits of Secondary Treatment
            </h2>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "#888888" }}>
              After completing detox or residential rehab, many individuals benefit from continued support to solidify their progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                >
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.5 }} />
                    <div
                      className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: benefit.accent }}
                    >
                      <Icon size={15} style={{ color: "#0D0D0D" }} />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="w-6 h-0.5 rounded-full mb-3" style={{ backgroundColor: benefit.accent }} />
                    <h3 className="text-sm font-bold mb-2" style={{ color: "#F0F0F0" }}>{benefit.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              Programme Structure
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
            >
              Key Areas of Our Secondary Care Programme
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#888888" }}>
              Our structured approach ensures every aspect of recovery is addressed with clinical excellence and personal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: index % 2 === 0 ? "#C9A84C" : "#4A9B8E", color: "#0D0D0D" }}
                >
                  {index + 1}
                </div>
                <span className="text-sm font-medium" style={{ color: "#CCCCCC" }}>{area}</span>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <div className="mt-20 max-w-3xl mx-auto text-center p-10 rounded-2xl" style={{ backgroundColor: "#1C1C1C", border: "1px solid #C9A84C" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C9A84C" }}>From Our Team</p>
            <p
              className="text-lg italic leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#DDDDDD" }}
            >
              &ldquo;The structure of the programme incorporates a balance of freedom and timetabled events and enables the confidence and resilience to build on recovery gains.&rdquo;
            </p>
            <p className="text-xs" style={{ color: "#666666" }}>— Canalside Residential Team</p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A9B8E" }}>
                Eligibility
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
              >
                Who Is It For?
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
                Available to adults aged 18 and over who have completed a recognised primary treatment programme, have had GP intervention and/or maintained sobriety for a minimum of 6 weeks.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Clients may present with co-occurring mental health needs — care tailored accordingly.",
                  "Clients must demonstrate readiness to engage actively in recovery activities.",
                  "We work with Change Grow Live, Turning Point, With You, NHS Teams, and more."
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
                  >
                    <span
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: i % 2 === 0 ? "#C9A84C" : "#4A9B8E" }}
                    >
                      <CheckCircle2 size={11} style={{ color: "#0D0D0D" }} />
                    </span>
                    <span className="text-sm" style={{ color: "#888888" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {["18+ Years Old", "Primary Care Completed", "6 Weeks Minimum Sobriety"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "#1C1C1C",
                      border: `1px solid ${i % 2 === 0 ? "#C9A84C" : "#4A9B8E"}`,
                      color: i % 2 === 0 ? "#C9A84C" : "#4A9B8E"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden" style={{ border: "1px solid #2C2C2C" }}>
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                  alt="Recovery group session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ backgroundColor: "#111111", opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
            alt="Take next step"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}
          >
            Take the Next Step
          </h2>
          <p className="text-sm mb-10" style={{ color: "#888888" }}>
            If you or a loved one are ready to bridge the gap to a permanent, sober lifestyle, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/referral/apply"
              className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm"
              style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/eligibility"
              className="inline-flex items-center gap-2 font-medium px-10 py-4 rounded-md text-sm"
              style={{ border: "1px solid #2C2C2C", color: "#888888" }}
            >
              View Eligibility <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProgrammePage;