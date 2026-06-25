"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, MessageSquare, ClipboardCheck, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const [formType, setFormType] = useState<"general" | "referral">("general");
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 18px",
    backgroundColor: "var(--bg-section)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "14px", outline: "none", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px",
    color: "var(--text-muted)",
  };

  if (submitted) {
    return (
      <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center px-6 max-w-lg mx-auto">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--gold)" }}>
            <CheckCircle2 size={36} style={{ color: "var(--text-on-accent)" }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Message Sent!</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
            Send Another Message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="Contact us" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.7 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Connect With Us</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>Whether you have a question or are ready to make a referral, our team is here to listen and help.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="lg:col-span-1 space-y-5">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Get In Touch</h2>
              {[
                { icon: Phone, label: "Call Us", value: "+44 7405 608617", accentVar: "var(--gold)" },
                { icon: Mail, label: "Email Us", value: "info@canalside-recovery.co.uk", accentVar: "var(--teal)" },
                { icon: MapPin, label: "Visit Us", value: "464 Oldham Road, M35 0FH, UK", accentVar: "var(--gold)" },
              ].map(({ icon: Icon, label, value, accentVar }, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accentVar }}>
                    <Icon size={18} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accentVar }}>{label}</p>
                    <p className="text-sm" style={{ color: "var(--text-primary)" }}>{value}</p>
                  </div>
                </div>
              ))}
              {/* Map thumbnail */}
              <div className="relative h-48 rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80" alt="London" fill className="object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold)" }}>
                    <MapPin size={18} style={{ color: "var(--text-on-accent)" }} />
                  </div>
                  <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>M35 0FH, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                {/* Tab switcher */}
                <div className="flex p-1 rounded-xl mb-8 w-fit" style={{ backgroundColor: "var(--bg-section)" }}>
                  {([
                    { type: "general" as const, label: "General Enquiry", Icon: MessageSquare },
                    { type: "referral" as const, label: "Make a Referral", Icon: ClipboardCheck },
                  ]).map(({ type, label, Icon }) => (
                    <button key={type} onClick={() => setFormType(type)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
                      style={{ backgroundColor: formType === type ? "var(--gold)" : "transparent", color: formType === type ? "var(--text-on-accent)" : "var(--text-dim)" }}>
                      <Icon size={15} />{label}
                    </button>
                  ))}
                </div>

                <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input type="text" placeholder="John Doe" required style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--gold)")} onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" placeholder="john@example.com" required style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--gold)")} onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" placeholder="+44 7000 000000" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")} onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  {formType === "referral" && (
                    <div>
                      <label style={labelStyle}>Organisation / Profession</label>
                      <input type="text" placeholder="e.g. Recovery Hub / GP / NHS Trust" style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--teal)")} onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                  )}
                  <div>
                    <label style={labelStyle}>Your Message</label>
                    <textarea rows={5} placeholder="How can we help you?" required style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => (e.target.style.borderColor = "var(--gold)")} onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-dim)" }}>By submitting you consent to Canalside House processing your data in accordance with GDPR.</p>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 font-bold py-4 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--gold)", color: "var(--text-on-accent)" }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;