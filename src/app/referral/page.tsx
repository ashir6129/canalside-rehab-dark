"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Download, Phone, Mail, CheckCircle2, ClipboardCheck, ArrowRight } from "lucide-react";

const agencies = [
  { name: "Drug & Alcohol Services", examples: ["Change Grow Live", "Turning Point", "With You"], accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" },
  { name: "NHS Services", examples: ["Substance Misuse Teams", "Mental Health Crisis Teams"], accentVar: "var(--teal)", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80" },
  { name: "Social Care", examples: ["Social Workers", "Adult Social Care Teams"], accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { name: "Criminal Justice", examples: ["Probation Services", "Criminal Justice Teams"], accentVar: "var(--teal)", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
  { name: "Local Authorities", examples: ["Housing Units", "Homelessness Prevention"], accentVar: "var(--gold)", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" },
];

const pathway = [
  { step: "Initial Enquiry", desc: "Contact our admissions team via phone or email to discuss the client's needs and current status.", icon: Phone },
  { step: "Referral Pack", desc: "Download and complete our comprehensive referral pack, including risk assessments and clinical history.", icon: FileText },
  { step: "Assessment", desc: "Our clinical team will conduct a thorough assessment of the individual's readiness for secondary care.", icon: CheckCircle2 },
  { step: "Admission", desc: "Once approved, we coordinate with the referring agency to ensure a safe and structured move-in.", icon: ClipboardCheck },
];

const ReferralPage = () => {
  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 transition-colors duration-300">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80" alt="Professional referrals" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.75 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>For Professionals</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Professional Referrals</h1>
          <p className="btn-primary text-lg max-w-3xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>We work closely with referral agencies and professionals to ensure a seamless transition into secondary accommodation for individuals in recovery.</p>
          <Link href="/referral/apply" className="btn-primary inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
            Start Online Referral <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Who We Work With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {agencies.map((agency, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="relative h-32 overflow-hidden">
                  <Image src={agency.image} alt={agency.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="20vw" />
                  <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-main)", opacity: 0.45 }} />
                  <div className="absolute top-3 left-3 w-1 h-8 rounded-full" style={{ backgroundColor: agency.accentVar }} />
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{agency.name}</h4>
                  <ul className="space-y-1">
                    {agency.examples.map((ex, i) => (
                      <li key={i} className="text-xs flex items-center gap-2" style={{ color: "var(--text-dim)" }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: agency.accentVar }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Pathway */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Referral Pathway</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {pathway.map((step, idx) => {
              const Icon = step.icon;
              const accentVar = idx % 2 === 0 ? "var(--gold)" : "var(--teal)";
              return (
                <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl transition-all duration-300" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: accentVar }}>
                    <Icon size={20} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accentVar }}>Step {idx + 1}</span>
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{step.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads & Documents */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left */}
              <div className="p-10 md:p-12" style={{ backgroundColor: "var(--bg-card)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Resources</p>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Professional Resources</h2>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>Access our essential documents, including the professional referral pack and our latest policies and procedures.</p>
                <div className="btn-primary space-y-3">
                  <Link href="/referral/apply" className="btn-primary flex items-center gap-4 font-bold p-4 rounded-xl w-full transition-opacity hover:opacity-85 text-sm justify-center" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
                    <ClipboardCheck size={18} />Apply Online Now
                  </Link>
                  <button className="btn-outline flex items-center gap-4 p-4 rounded-xl w-full transition-colors duration-300 group" style={{ backgroundColor: "var(--bg-section)", border: "1px solid var(--border)" }}>
                    <FileText size={18} style={{ color: "var(--gold)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Referral Pack.pdf</span>
                    <Download size={15} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} />
                  </button>
                  <button className="btn-outline flex items-center gap-4 p-4 rounded-xl w-full transition-colors duration-300 group" style={{ backgroundColor: "var(--bg-section)", border: "1px solid var(--border)" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--teal)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Service Overview.pdf</span>
                    <Download size={15} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--teal)" }} />
                  </button>
                </div>
              </div>
              {/* Right */}
              <div className="p-10 md:p-12 relative overflow-hidden" style={{ backgroundColor: "var(--bg-section)" }}>
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80" alt="Clinical team" fill className="object-cover opacity-10" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Assessment Inquiries</p>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Clinical Discussions</h3>
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>For immediate clinical discussions or to check bed availability:</p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                        <Phone size={16} style={{ color: "var(--text-on-accent)" }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "var(--text-dim)" }}>Phone</p>
                        <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>+44 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--teal)" }}>
                        <Mail size={16} style={{ color: "var(--text-on-accent)" }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "var(--text-dim)" }}>Email</p>
                        <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>referrals@canalside-house.co.uk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReferralPage;
