"use client";
import { useState } from "react";
import Image from "next/image";
import { Target, Eye, Heart, X, GraduationCap, Music, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Leonie Huggins",
    role: "Office Administrator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    accentVar: "var(--gold)",
    fullBio: "Hello, I'm Leonie, and I'm proud to be part of the amazing team at ETL Care as an Office Administrator. I've worked across various care settings over the years, including nursing care, profound learning disabilities, and complex autism. These experiences have shaped my understanding of individual needs and strengthened my commitment to delivering a truly person-centred approach in everything I do.",
    extra: "At ETL Care, I'm dedicated to supporting our team and service users with empathy, respect, and professionalism, making sure every person receives the quality care and treatment they deserve.",
    qualifications: ["NVQ Level 2 in Health and Social Care", "NVQ Level 3 in Health and Social Care"],
    interests: "I am passionate about care and remain committed to delivering excellence in every aspect of my administrative role.",
    mission: undefined as string | undefined,
  },
  {
    name: "Sarah",
    role: "Registered Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    accentVar: "var(--teal)",
    fullBio: "I am thrilled to be a part of our brand new secondary recovery home Canalside House. As the Registered Manager I will ensure that our service will provide the very best care and support to adults living with mental health conditions and recovering from addiction. I have the privilege of having over 20 years experience of working in the health and social care sector.",
    mission: "We at Canalside House, aim to improve people's quality of life by ensuring that they have the tools to remain abstinent, to manage their own tenancy, to manage their mental health and to support them to gain experience and qualifications to enable them to move successfully back into society.",
    extra: "I am passionate about providing a service that meets the needs of people who are recovering from addiction and wanting to improve and manage their mental health.",
    qualifications: ["Degree in Forensic Psychology", "Diploma in Cognitive Behavioural Therapy", "Diploma in Drug and Alcohol Abuse", "Level 3 in Mental Health", "Level 3 in Self Harm", "Mental Health First Aid"],
    interests: "I am a huge fan of music and like to go to music festivals in my motorhome. I have a motorbike and enjoy long rides through the countryside. I read a lot, love to cook, and paint in oil and acrylic.",
  },
];

const coreValues = [
  { title: "Compassion", desc: "We treat all clients with empathy, dignity, and respect, recognising the courage it takes to continue the recovery journey.", accentVar: "var(--gold)" },
  { title: "Integrity", desc: "We uphold the highest standards of professionalism and ethical practice, fostering trust through honest communication.", accentVar: "var(--teal)" },
  { title: "Empowerment", desc: "We support individuals to take ownership of their recovery by providing tools, knowledge, and opportunities for personal growth.", accentVar: "var(--gold)" },
  { title: "Respect for the Individual", desc: "We value each person's uniqueness, autonomy, and capacity for change, offering personalised care that honours their lived experience.", accentVar: "var(--teal)" },
  { title: "Community & Connection", desc: "We foster a sense of belonging through peer relationships, group engagement, and connection to 12-step fellowships.", accentVar: "var(--gold)" },
  { title: "Excellence", desc: "We are committed to continuous improvement, staff development, and evidence-informed practice to ensure the highest quality of care.", accentVar: "var(--teal)" },
  { title: "Recovery-Oriented Practice", desc: "All services are designed to support sustained recovery and relapse prevention, in alignment with a recovery-oriented system of care.", accentVar: "var(--gold)" },
];

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(null);

  return (
    <main style={{ backgroundColor: "var(--bg-main)" }} className="pt-20 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80" alt="About us" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.7 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>Who We Are</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>About Us</h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--text-muted)" }}>Our Secondary Treatment Programme provides a structured, person-centred, and recovery-focused environment for individuals who have completed primary addiction treatment.</p>
        </div>
      </section>

      {/* Purpose + Mission + Vision */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Primary Purpose</h2>
            <div className="w-16 h-0.5 rounded-full mx-auto mb-8" style={{ backgroundColor: "var(--gold)" }} />
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>The primary purpose of this programme is to offer continued care and support that promotes long-term abstinence from substances, enhances physical and mental wellbeing, and facilitates social inclusion and personal development in a safe and supportive setting.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: "var(--gold)" }}>
                <Target size={20} style={{ color: "var(--text-on-accent)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Our Mission</h3>
              <div className="w-8 h-0.5 rounded-full mb-5" style={{ backgroundColor: "var(--gold)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>To provide a safe, structured, and therapeutic environment where individuals in early recovery can build on the foundations of sobriety. Through group work, individual therapy, 12-step integration, and life skills development, we empower clients to achieve sustainable, long-term recovery.</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--teal)" }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: "var(--teal)" }}>
                <Eye size={20} style={{ color: "var(--text-on-accent)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Our Vision</h3>
              <div className="w-8 h-0.5 rounded-full mb-5" style={{ backgroundColor: "var(--teal)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>A future where individuals recovering from addiction live fulfilling, independent lives guided by personal responsibility and emotional resilience. We aim to be a nationally recognised provider of evidence-based secondary care, known for compassionate support and transformative outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>What Guides Us</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {coreValues.map((value, idx) => (
              <div key={idx} className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="w-6 h-0.5 rounded-full mb-4" style={{ backgroundColor: value.accentVar }} />
                <h4 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>{value.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Meet the Team</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Our Staff</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Our team consists of highly trained Recovery Practitioners who provide a fully supportive and non-judgmental approach to secondary treatment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }} onClick={() => setSelectedMember(member)}>
                <div className="relative h-72 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" />
                  <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.3 }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-bold px-5 py-2.5 rounded-md text-sm" style={{ backgroundColor: member.accentVar, color: "var(--text-on-accent)" }}>View Full Profile</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: member.accentVar }}>{member.role}</p>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>{member.name}</h3>
                  <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-muted)" }}>{member.fullBio}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: member.accentVar }}>Read More <ArrowRight size={13} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" style={{ backgroundColor: "rgba(0,0,0,0.85)" }} onClick={() => setSelectedMember(null)}>
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }} onClick={e => e.stopPropagation()}>
            <button className="absolute top-5 right-5 w-10 h-10 rounded-lg flex items-center justify-center z-10 transition-colors" style={{ backgroundColor: "var(--bg-section)" }} onClick={() => setSelectedMember(null)}>
              <X size={18} style={{ color: "var(--text-muted)" }} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-deep)", opacity: 0.2 }} />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: selectedMember.accentVar }}>{selectedMember.role}</p>
                  <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>{selectedMember.name}</h2>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart size={15} style={{ color: selectedMember.accentVar }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: selectedMember.accentVar }}>Biography</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{selectedMember.fullBio}</p>
                </div>
                {selectedMember.mission && (
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "var(--bg-section)", borderLeft: `3px solid ${selectedMember.accentVar}` }}>
                    <p className="text-sm italic leading-relaxed" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>&ldquo;{selectedMember.mission}&rdquo;</p>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={15} style={{ color: selectedMember.accentVar }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: selectedMember.accentVar }}>Qualifications</p>
                  </div>
                  <ul className="space-y-2">
                    {selectedMember.qualifications.map((q, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: selectedMember.accentVar }} />{q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Music size={15} style={{ color: selectedMember.accentVar }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: selectedMember.accentVar }}>Personal Interests</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{selectedMember.interests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stakeholder */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-section)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold)" }}>
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)" }}>Stakeholder Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Transparency & Accountability", desc: "We promote transparency and accountability to appeal to potential partners, commissioners, volunteers, or donors." },
                { title: "Target Groups & Eligibility", desc: "We support individuals who are homeless or at risk of homelessness, particularly those leaving detox, rehab, or primary treatment." },
                { title: "Our Social Impact", desc: "Our service contributes to reducing homelessness, reoffending, and relapse by providing a safe, structured transition back to independent living." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-6 h-0.5 rounded-full mb-4" style={{ backgroundColor: i % 2 === 0 ? "var(--gold)" : "var(--teal)" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: i % 2 === 0 ? "var(--gold)" : "var(--teal)" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 text-center" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-sm italic" style={{ color: "var(--text-dim)" }}>&ldquo;We aim to introduce staff and showcase the organisation&apos;s ethos and experience while highlighting links with other recovery services or community programmes.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;