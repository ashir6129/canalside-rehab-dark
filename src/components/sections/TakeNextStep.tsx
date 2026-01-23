import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

const TakeNextStep = () => {
    return (
        <section className="py-24 bg-[var(--primary)] text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent)] to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Take the Next Step</h2>
                <div className="max-w-3xl mx-auto space-y-6 mb-12 text-lg text-gray-300 leading-relaxed">
                    <p>
                        You’ve already done the hard part—now let’s build on that foundation. If you or a loved one are ready to explore secondary treatment, we're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all text-left">
                        <div className="bg-[var(--accent)] p-3 rounded-2xl w-fit mb-6">
                            <Phone className="text-[var(--primary)]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Professional Advice</h3>
                        <p className="text-gray-400 mb-6">Contact Us Today for a confidential conversation about your recovery journey.</p>
                        <Link href="/contact" className="text-[var(--accent)] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Contact Us Now <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all text-left">
                        <div className="bg-white p-3 rounded-2xl w-fit mb-6">
                            <MapPin className="text-[var(--primary)]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Visit & Learn</h3>
                        <p className="text-gray-400 mb-6">Schedule a Visit or learn more about our programme and therapeutic community.</p>
                        <Link href="/programme" className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all underline decoration-[var(--accent)] underline-offset-8">
                            Explore Our Programme <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary px-12 py-5 text-lg shadow-2xl">
                        Enquire Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TakeNextStep;
