import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Calendar, UserCheck, ArrowRight } from "lucide-react";

const criteria = [
  "Service is available to adults aged 18 and over.",
  "Completion of a recognised primary treatment programme.",
  "GP intervention and/or maintained sobriety for a minimum of 6 weeks.",
  "Care is tailored for clients with co-occurring mental health needs.",
  "Must demonstrate readiness to engage actively in treatment and recovery activities.",
  "Commitment to long-term abstinence and personal development.",
];

const expectations = [
  { icon: UserCheck, title: "Personal Accountability", desc: "Managing your own schedule and maintaining the rules of the house.", accentVar: "var(--gold)" },
  { icon: Calendar, title: "Active Participation", desc: "Engagement in all therapeutic sessions, group work, and workshops.", accentVar: "var(--teal)" },
];

const EligibilityPage = () => {
  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80" alt="Eligibility" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.72 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Admissions</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Admission Criteria</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>Clear guidelines to help you determine if Canalside is the right next step for your recovery journey.</p>
        </div>
      </section>

      {/* Criteria Grid */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Requirements</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Is This Right for You?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {criteria.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-xl transition-all duration-300" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: index % 2 === 0 ? "var(--gold)" : "var(--teal)" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--text-on-accent)" }} />
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Expect */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80" alt="Commitment" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.25 }} />
            </div>
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Expectations</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>What We Expect</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Secondary care requires a higher level of personal responsibility than primary treatment. We expect our residents to be proactive participants in their own healing.</p>
              <div className="space-y-4">
                {expectations.map(({ icon: Icon, title, desc, accentVar }, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentVar }}>
                      <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{title}</h4>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Please Note */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto flex gap-6 p-7 rounded-2xl items-start" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold)" }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--gold)" }}>
              <AlertCircle size={20} style={{ color: "var(--text-on-accent)" }} />
            </div>
            <div>
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--gold)" }}>Please Note</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Canalside is a secondary care facility, not a medical detox center. If you currently require intensive clinical supervision or 24/7 medical monitoring, secondary care may not yet be appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Next Steps</p>
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Not Sure If You Qualify?</h2>
          <div className="btn-primary flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
              Speak to Our Admissions Team <ArrowRight size={16} />
            </Link>
            <Link href="/referral" className="btn-outline inline-flex items-center gap-2 font-medium px-10 py-4 rounded-md text-sm transition-colors" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              Professional Referral Info <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EligibilityPage;