"use client";
import { useState } from "react";
import Link from "next/link";
import {
  User, Building2, Stethoscope, ShieldAlert, Send,
  ChevronRight, ChevronLeft, CheckCircle2, Activity
} from "lucide-react";

const steps = [
  { icon: Building2, label: "Referrer" },
  { icon: User, label: "Client" },
  { icon: Stethoscope, label: "Clinical" },
  { icon: Activity, label: "Review" },
];

const ReferralForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(p => Math.min(p + 1, 4));
  const prevStep = () => setStep(p => Math.max(p - 1, 1));

  // Styles defined inside component so CSS vars resolve correctly at runtime
  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    backgroundColor: "var(--bg-main)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "14px", outline: "none", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    marginBottom: "8px", color: "var(--text-muted)",
  };

  if (submitted) {
    return (
      <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center px-6 max-w-lg mx-auto">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: "var(--gold)" }}>
            <CheckCircle2 size={44} style={{ color: "var(--text-on-accent)" }} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Success</p>
          <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
            Referral Submitted
          </h1>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Thank you. Our admissions team will review the information and contact you within 24 hours to discuss the next steps.
          </p>
          <Link href="/referral"
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
            Return to Referrals
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 pb-24 min-h-screen transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 pt-12">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>Confidential</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>
            Professional Referral Form
          </h1>
          <p className="text-sm italic" style={{ color: "var(--text-dim)", fontFamily: "var(--font-playfair), serif" }}>
            A confidential clinical assessment referral
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 relative">
          {/* Track */}
          <div className="absolute top-6 left-0 w-full h-0.5" style={{ backgroundColor: "var(--border)" }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%`, backgroundColor: "var(--gold)" }}
            />
          </div>
          {/* Step bubbles */}
          <div className="relative flex justify-between">
            {steps.map(({ icon: Icon, label }, idx) => {
              const done = step > idx + 1;
              const active = step === idx + 1;
              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                    style={{
                      backgroundColor: done || active ? "var(--gold)" : "var(--bg-card)",
                      border: active ? "3px solid var(--gold)" : done ? "none" : "1px solid var(--border)",
                      boxShadow: active ? "0 0 0 4px rgba(201,168,76,0.15)" : "none",
                    }}
                  >
                    {done
                      ? <CheckCircle2 size={20} style={{ color: "var(--text-on-accent)" }} />
                      : <Icon size={20} style={{ color: active ? "var(--text-on-accent)" : "var(--text-dim)" }} />
                    }
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: step >= idx + 1 ? "var(--gold)" : "var(--text-dim)" }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <form onSubmit={e => { e.preventDefault(); step === 4 ? setSubmitted(true) : nextStep(); }}>

            {/* Step 1: Referrer */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 mb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                    <Building2 size={16} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Referrer Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: "Full Name *", placeholder: "e.g. Dr. Sarah Smith", type: "text" },
                    { label: "Job Title / Role *", placeholder: "e.g. Recovery Coordinator", type: "text" },
                    { label: "Organisation *", placeholder: "e.g. CGL / NHS Trust", type: "text" },
                    { label: "Email Address *", placeholder: "sarah@organisation.co.uk", type: "email" },
                    { label: "Direct Phone Number *", placeholder: "+44 7000 000000", type: "tel" },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label} className={label.includes("Phone") ? "md:col-span-2" : ""}>
                      <label style={labelStyle}>{label}</label>
                      <input required type={type} placeholder={placeholder} style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Client */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 mb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--teal)" }}>
                    <User size={16} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Client Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Client Initials (For Privacy)</label>
                    <input required type="text" placeholder="e.g. J.D." style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Date of Birth *</label>
                    <input required type="date" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Gender Identity</label>
                    <select style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Current Location *</label>
                    <input required type="text" placeholder="e.g. Detox Unit / Rehab Name" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <div className="md:col-span-2">
                    <label style={labelStyle}>Current Housing Status</label>
                    <textarea rows={3} placeholder="Briefly describe current living situation..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Clinical */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 mb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                    <Stethoscope size={16} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Clinical Overview</h2>
                </div>
                <div>
                  <label style={labelStyle}>Primary Substance of Misuse *</label>
                  <input required type="text" placeholder="e.g. Alcohol / Opioids" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={labelStyle}>Length of Current Abstinence</label>
                  <input type="text" placeholder="e.g. 4 weeks" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={labelStyle}>Mental Health Diagnosis (If any)</label>
                  <textarea rows={3} placeholder="Briefly list any diagnosed conditions..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={labelStyle}>Primary Reason for Referral *</label>
                  <textarea required rows={4} placeholder="What are the goals for this individual?"
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                {/* Risk alert */}
                <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "var(--bg-section)", border: "1px solid var(--border)" }}>
                  <ShieldAlert size={20} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>Risk Assessment Note</p>
                    <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      Please confirm that a full risk assessment has been completed and will follow this referral.
                    </p>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input required type="checkbox" />
                      <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                        I confirm a full risk assessment is available.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 mb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--teal)" }}>
                    <Activity size={16} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Final Review</h2>
                </div>
                <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: "var(--bg-section)", border: "1px solid var(--border)" }}>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-muted)" }}>
                    Please review the information provided. Once submitted, a copy of this referral will be sent to our admissions team and a confirmation emailed to your professional address.
                  </p>
                  <div className="space-y-3 pt-2">
                    {["Referrer details verified", "Client initials captured", "Risk confirmation selected"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: i % 2 === 0 ? "var(--gold)" : "var(--teal)" }}>
                          <CheckCircle2 size={11} style={{ color: "var(--text-on-accent)" }} />
                        </div>
                        <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
                    <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                      By submitting, you certify the client&apos;s consent to share this information for clinical assessment under GDPR and local data protection policies.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <button type="button" onClick={prevStep}
                className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm transition-all ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                <ChevronLeft size={16} /> Previous
              </button>

              {step === 4 ? (
                <button type="submit"
                  className="flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
                  Submit Referral <Send size={16} />
                </button>
              ) : (
                <button type="submit"
                  className="flex items-center gap-2 font-bold px-10 py-4 rounded-md text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
                  Next Step <ChevronRight size={16} />
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-xs" style={{ color: "var(--text-dim)" }}>
          Difficulty with the form? Contact us at{" "}
          <span className="underline" style={{ color: "var(--text-muted)" }}>referrals@canalside-house.co.uk</span>
        </p>
      </div>
    </main>
  );
};

export default ReferralForm;
