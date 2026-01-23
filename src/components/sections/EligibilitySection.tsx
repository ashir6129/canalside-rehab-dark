import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const criteria = [
    "Individuals leaving detox, rehab, or primary treatment who are motivated to maintain recovery.",
    "Individuals who are homeless or at risk of homelessness and looking for a structured, supportive living environment.",
    "Adults aged 18+ with GP intervention and/or maintained sobriety for a minimum of 6 weeks.",
    "Clients with co-occurring mental health needs; care is tailored accordingly."
];

const EligibilitySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-8">Is This Right for You?</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Secondary treatment is ideal if:
                        </p>

                        <div className="space-y-4 mb-10">
                            {criteria.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 size={24} className="text-[var(--accent)]" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/eligibility" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold hover:gap-4 transition-all">
                            View Full Eligibility Criteria <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Supportive community"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-[var(--primary)] text-white p-10 rounded-[2.5rem] shadow-xl max-w-xs hidden md:block">
                            <p className="text-2xl font-serif mb-2 italic">"A bridge to independence."</p>
                            <p className="text-sm opacity-80">— Residential Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EligibilitySection;
