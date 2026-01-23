"use client";
import { useState } from "react";
import {
    User,
    Building2,
    Stethoscope,
    ShieldAlert,
    Send,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    Briefcase,
    Calendar,
    MapPin,
    Activity
} from "lucide-react";
import Link from "next/link";

const ReferralForm = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    if (submitted) {
        return (
            <main className="pt-32 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-xl text-center border border-gray-100">
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                            <CheckCircle2 size={48} />
                        </div>
                        <h1 className="text-4xl font-serif text-[var(--primary)] mb-6">Referral Submitted Successfully</h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Thank you for your referral. Our admissions team will review the information and contact you within 24 hours to discuss the next steps.
                        </p>
                        <Link href="/referral" className="btn-primary px-10 py-5 text-lg inline-block">
                            Return to Referrals
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-4">Professional Referral Form</h1>
                        <p className="text-lg text-gray-500 italic font-serif">A Confidential clinical assessment referral</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[var(--accent)] transition-all duration-500 ease-in-out"
                                style={{ width: `${((step - 1) / 3) * 100}%` }}
                            ></div>
                        </div>
                        <div className="relative flex justify-between">
                            {[
                                { icon: Building2, label: "Referrer" },
                                { icon: User, label: "Client" },
                                { icon: Stethoscope, label: "Clinical" },
                                { icon: Activity, label: "Review" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 group">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${step > idx + 1 ? 'bg-[var(--accent)] text-white' :
                                            step === idx + 1 ? 'bg-[var(--primary)] text-white ring-4 ring-white' :
                                                'bg-white text-gray-400 border border-gray-200'
                                        }`}>
                                        {step > idx + 1 ? <CheckCircle2 size={20} /> : <item.icon size={20} />}
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${step >= idx + 1 ? 'text-[var(--primary)]' : 'text-gray-400'}`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-50">
                        <form onSubmit={(e) => { e.preventDefault(); if (step === 4) setSubmitted(true); else nextStep(); }}>

                            {/* Step 1: Referrer Details */}
                            {step === 1 && (
                                <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                                    <div className="border-b border-gray-100 pb-4 mb-8">
                                        <h2 className="text-2xl font-serif text-[var(--primary)] flex items-center gap-3">
                                            <Building2 className="text-[var(--accent)]" /> Referrer Information
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Full Name *</label>
                                            <input required type="text" className="form-input" placeholder="e.g. Dr. Sarah Smith" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Job Title / Role *</label>
                                            <input required type="text" className="form-input" placeholder="e.g. Recovery Coordinator" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Organisation *</label>
                                            <input required type="text" className="form-input" placeholder="e.g. CGL / NHS Trust" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Email Address *</label>
                                            <input required type="email" className="form-input" placeholder="sarah@organisation.co.uk" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Direct Phone Number *</label>
                                            <input required type="tel" className="form-input" placeholder="+44 7000 000000" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Client Details */}
                            {step === 2 && (
                                <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                                    <div className="border-b border-gray-100 pb-4 mb-8">
                                        <h2 className="text-2xl font-serif text-[var(--primary)] flex items-center gap-3">
                                            <User className="text-[var(--accent)]" /> Client Information
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Client Initials (For Privacy)</label>
                                            <input required type="text" className="form-input" placeholder="e.g. J.D." />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Date of Birth *</label>
                                            <input required type="date" className="form-input" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Gender Identity</label>
                                            <select className="form-input">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Non-binary</option>
                                                <option>Prefer not to say</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Current Location *</label>
                                            <input required type="text" className="form-input" placeholder="e.g. Detox Unit / Rehab Name" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-bold text-gray-700">Current Housing Status</label>
                                            <textarea className="form-input h-24" placeholder="Briefly describe current living situation..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Clinical Information */}
                            {step === 3 && (
                                <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                                    <div className="border-b border-gray-100 pb-4 mb-8">
                                        <h2 className="text-2xl font-serif text-[var(--primary)] flex items-center gap-3">
                                            <Stethoscope className="text-[var(--accent)]" /> Clinical Overview
                                        </h2>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Primary Substance of Misuse *</label>
                                            <input required type="text" className="form-input" placeholder="e.g. Alcohol / Opioids" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Length of Current Abstinence (Days/Weeks)</label>
                                            <input type="text" className="form-input" placeholder="e.g. 4 weeks" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Mental Health Diagnosis (If any)</label>
                                            <textarea className="form-input h-24" placeholder="Briefly list any diagnosed conditions..."></textarea>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Primary Reason for Referral to Secondary Care *</label>
                                            <textarea required className="form-input h-32" placeholder="What are the goals for this individual?"></textarea>
                                        </div>
                                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                                            <ShieldAlert className="text-red-500 shrink-0" />
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-red-900 uppercase tracking-wide">Risk Assessment Note</label>
                                                <p className="text-sm text-red-700">Please confirm that a full risk assessment has been completed and will follow this referral.</p>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input required type="checkbox" className="rounded border-red-300 text-red-600 focus:ring-red-500" />
                                                    <span className="text-sm font-medium text-red-900">I confirm a full risk assessment is available.</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Final Review */}
                            {step === 4 && (
                                <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
                                    <div className="border-b border-gray-100 pb-4 mb-8">
                                        <h2 className="text-2xl font-serif text-[var(--primary)] flex items-center gap-3">
                                            <Activity className="text-[var(--accent)]" /> Final Review
                                        </h2>
                                    </div>
                                    <div className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                        <p className="text-gray-600 leading-relaxed italic">
                                            Please review the information provided. Once submitted, a copy of this referral will be sent to our admissions team and a confirmation will be emailed to your professional address.
                                        </p>
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                                <CheckCircle2 size={16} className="text-green-500" /> Referrer details verified
                                            </p>
                                            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                                <CheckCircle2 size={16} className="text-green-500" /> Client initials captured
                                            </p>
                                            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                                <CheckCircle2 size={16} className="text-green-500" /> Risk confirmation selected
                                            </p>
                                        </div>
                                        <div className="pt-4 mt-6 border-t border-gray-200">
                                            <p className="text-xs text-gray-400">
                                                By submitting this form, you certify that you have the client's consent to share this information for clinical assessment purposes in accordance with GDPR and local data protection policies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-[var(--primary)] hover:bg-gray-100'}`}
                                >
                                    <ChevronLeft size={20} /> Previous
                                </button>

                                {step === 4 ? (
                                    <button
                                        type="submit"
                                        className="btn-primary px-10 py-4 flex items-center gap-3 text-lg animate-in zoom-in duration-300"
                                    >
                                        Submit Referral <Send size={20} />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn-primary px-10 py-4 flex items-center gap-3 text-lg"
                                    >
                                        Next Step <ChevronRight size={20} />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <p className="mt-12 text-center text-gray-400 text-sm">
                        Difficulty with the form? Contact us directly at <span className="font-bold text-gray-600 underline">referrals@canalside-house.co.uk</span>
                    </p>
                </div>
            </div>

            <style jsx>{`
                .form-input {
                    @apply w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none border border-gray-100;
                }
            `}</style>
        </main>
    );
};

export default ReferralForm;
