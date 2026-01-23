import React from 'react';
import { ShieldCheck, Sparkles, Brain, Target } from 'lucide-react';

const reasons = [
    {
        title: "Build Resilience",
        desc: "Against relapse, providing the strength to overcome challenges.",
        icon: <ShieldCheck className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Strengthen Life Skills",
        desc: "For daily living, including practical management of a sober life.",
        icon: <Sparkles className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Deepen Self-Awareness",
        desc: "Through therapy and group work, understanding individual triggers.",
        icon: <Brain className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Reconnect with Purpose",
        desc: "Set healthy goals and rediscover meaning beyond addiction.",
        icon: <Target className="text-[var(--accent)]" size={32} />
    }
];

const WhySecondaryTreatment = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-8">Why Secondary Treatment?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Recovery doesn’t end with detox or primary care. The early months after treatment are crucial, and secondary care provides the tools and space to:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition-all">
                            <div className="mt-1 p-3 bg-white rounded-2xl shadow-sm h-fit">
                                {reason.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySecondaryTreatment;
