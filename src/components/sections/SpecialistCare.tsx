import React from 'react';
import { Home, MessageSquare, GraduationCap, ShieldAlert, Users } from 'lucide-react';

const offers = [
    {
        title: "Safe, Supportive Housing",
        desc: "Live in a sober, structured environment with peers who understand your journey.",
        icon: <Home className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Counselling",
        desc: "Continue individual and group therapy with experienced addiction specialists.",
        icon: <MessageSquare className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Life Skills & Education",
        desc: "Learn budgeting, job readiness, emotional regulation, and more.",
        icon: <GraduationCap className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Relapse Prevention Planning",
        desc: "Build a personalised strategy to stay on track and identify early warning signs.",
        icon: <ShieldAlert className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Community & Peer Support",
        desc: "Create meaningful connections through shared experiences and mutual support.",
        icon: <Users className="text-[var(--accent)]" size={32} />
    }
];

const SpecialistCare = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-6">What We Offer</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our comprehensive range of services is designed to provide the necessary support and structure for a successful transition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                                {offer.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{offer.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{offer.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialistCare;
