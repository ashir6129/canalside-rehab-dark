import React from 'react';
import { FileText, Download, Users, Phone, Mail, CheckCircle2, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const agencies = [
    { name: "Drug & Alcohol Services", examples: ["Change Grow Live", "Turning Point", "With You"] },
    { name: "NHS Services", examples: ["Substance Misuse Teams", "Mental Health Crisis Teams"] },
    { name: "Social Care", examples: ["Social Workers", "Adult Social Care Teams"] },
    { name: "Criminal Justice", examples: ["Probation Services", "Criminal Justice Teams"] },
    { name: "Local Authorities", examples: ["Housing Units", "Homelessness Prevention"] }
];

const ReferralPage = () => {
    return (
        <main className="pt-24 bg-white min-h-screen">
            {/* Header */}
            <section className="bg-[var(--primary)] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif mb-6">Professional Referrals</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        We work closely with referral agencies and professionals to ensure a seamless transition into secondary accommodation for individuals in recovery.
                    </p>
                    <Link href="/referral/apply" className="btn-primary-accent px-10 py-5 text-lg shadow-xl inline-block transition-transform hover:scale-105">
                        Start Online Referral
                    </Link>
                </div>
            </section>

            {/* Trusted Partners */}
            <section className="py-24 border-b border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-[var(--primary)] mb-12">Who We Work With</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {agencies.map((agency, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all">
                                <h4 className="text-[var(--primary)] font-bold mb-4">{agency.name}</h4>
                                <ul className="text-sm text-gray-500 space-y-2">
                                    {agency.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referral Pathway */}
            <section className="py-24 bg-[#f4f7f6]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-12 text-center">Referral Pathway</h2>
                        <div className="space-y-12">
                            {[
                                { step: "1. Initial Enquiry", desc: "Contact our admissions team via phone or email to discuss the client's needs and current status." },
                                { step: "2. Referral Pack", desc: "Download and complete our comprehensive referral pack, including risk assessments and clinical history." },
                                { step: "3. Assessment", desc: "Our clinical team will conduct a thorough assessment of the individual's readiness for secondary care." },
                                { step: "4. Admission", desc: "Once approved, we coordinate with the referring agency to ensure a safe and structured move-in." }
                            ].map((path, idx) => (
                                <div key={idx} className="flex gap-8 items-start">
                                    <div className="w-12 h-12 bg-[var(--primary)] text-white font-bold rounded-full flex items-center justify-center shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{path.step}</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">{path.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads & Documents */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-[var(--primary)] p-12 md:p-16 rounded-[3rem] text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-serif mb-6">Professional resources</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Access our essential documents, including the professional referral pack and our latest policies and procedures.
                                </p>
                                <div className="space-y-4">
                                    <Link href="/referral/apply" className="flex items-center gap-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--primary)] p-5 rounded-2xl w-full transition-colors group justify-center font-bold text-lg">
                                        <ClipboardCheck size={24} />
                                        <span>Apply Online Now</span>
                                    </Link>
                                    <button className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-5 rounded-2xl w-full transition-colors group">
                                        <FileText className="text-[var(--accent)]" />
                                        <span className="font-bold">Referral Pack.pdf</span>
                                        <Download size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                    <button className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-5 rounded-2xl w-full transition-colors group">
                                        <CheckCircle2 className="text-[var(--accent)]" />
                                        <span className="font-bold">Service Overview.pdf</span>
                                        <Download size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10">
                                <h3 className="text-2xl font-serif mb-6 text-[var(--accent)]">Assessment Inquiries</h3>
                                <p className="text-gray-300 mb-8">For immediate clinical discussions or to check bed availability:</p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-[var(--accent)]" />
                                        <span className="text-xl font-bold">+44 123 456 7890</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-[var(--accent)]" />
                                        <span>referrals@canalside-house.co.uk</span>
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
