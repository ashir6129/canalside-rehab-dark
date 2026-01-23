import { HeartHandshake, Shield, MessageCircle, Lightbulb, Heart, ShieldAlert, Brain, GraduationCap, Users, UserPlus } from "lucide-react";

const familyGuide = [
    {
        title: "A Safer Transition Back to Daily Life",
        description: "Moving directly from inpatient rehab back into the 'real world' can be overwhelming. Secondary treatment provides a structured, supportive environment where your loved one can continue to heal while slowly adjusting to everyday responsibilities.",
        icon: <Shield className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Stronger Relapse Prevention",
        description: "The early stages of recovery are when relapse is most likely. In secondary care, individuals continue learning how to manage triggers, build healthy routines, and stay focused on long-term sobriety—all with professional guidance.",
        icon: <ShieldAlert className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Ongoing Emotional and Therapeutic Support",
        description: "Secondary treatment gives your loved one continued access to therapists, counsellors, and peer support. This extra time allows them to dive deeper into the root causes of their addiction, such as trauma, anxiety, or family issues.",
        icon: <Brain className="text-[var(--accent)]" size={32} />
    },
    {
        title: "More Time to Build Life Skills",
        description: "From managing finances to finding work or going back to school, secondary care focuses on developing the tools your loved one needs to succeed independently—without turning back to substances for support.",
        icon: <GraduationCap className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Accountability and Community",
        description: "Living in a sober, structured setting with others who are also in recovery helps build responsibility, confidence, and healthy relationships. It also provides a strong support system outside the family unit.",
        icon: <Users className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Support for You, Too",
        description: "Many secondary treatment programmes offer family therapy, education, or support groups—because healing isn’t just for the person in treatment. It’s for the whole family. Learning how to rebuild trust, set healthy boundaries, and communicate effectively is essential for long-term success.",
        icon: <UserPlus className="text-[var(--accent)]" size={32} />
    }
];

const tips = [
    {
        title: "Educate Yourself",
        description: "Learn about the science of addiction and recovery to understand what your loved one is experiencing.",
        icon: <Lightbulb className="text-[var(--accent)]" size={24} />
    },
    {
        title: "Set Boundaries",
        description: "Establishing healthy boundaries is crucial for your well-being and their recovery success.",
        icon: <Shield className="text-[var(--accent)]" size={24} />
    },
    {
        title: "Open Communication",
        description: "Practice honest, non-judgmental communication to rebuild trust gradually.",
        icon: <MessageCircle className="text-[var(--accent)]" size={24} />
    },
    {
        title: "Seek Your Own Support",
        description: "Consider family therapy or support groups like Al-Anon to manage your own stress.",
        icon: <HeartHandshake className="text-[var(--accent)]" size={24} />
    }
];

const FamiliesPage = () => {
    return (
        <main className="pt-24">
            {/* Header Section */}
            <section className="bg-[var(--primary)] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif mb-6">Support for Families</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Recovery is a journey for the whole family. We are here to support you at every step.
                    </p>
                </div>
            </section>

            {/* Family Guide Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-6">Why Secondary Treatment Matters: A Guide for Families</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Watching a loved one complete a residential treatment programme is a huge milestone—but recovery doesn’t end there. Secondary treatment, also known as extended care or step-down support, offers a crucial next step in your loved one’s journey toward lasting sobriety. Here’s how it can make all the difference—for them and for your family.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {familyGuide.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Info */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif text-[var(--primary)] mb-8">Role of Families in Recovery</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                At Canalside, we believe that family support is a cornerstone of long-term recovery. However, we also understand the toll that addiction takes on loved ones.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Our secondary care programme includes professional guidance for families, helping them navigate the transition and create a safe, supportive environment for their loved one's return.
                            </p>
                            <div className="bg-white p-8 rounded-3xl border-l-4 border-[var(--accent)] shadow-sm">
                                <p className="italic text-[var(--primary)] font-medium">
                                    "The goal is not just for the individual to stay sober, but for the entire family system to heal and find a new balance."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Family Support"
                                className="rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Tips Grid */}
            <section className="py-24 bg-[#f4f7f6]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-4">How You Can Help</h2>
                        <p className="text-gray-600">Practical steps for families to support the recovery process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {tips.map((tip, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                                <div className="p-3 bg-gray-50 rounded-xl h-fit">{tip.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-[var(--primary)]">{tip.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Your Loved One Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-8">Help Your Loved One Build a Stronger Foundation</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Secondary treatment is more than just "extra time" in recovery—it’s a chance to deepen healing, grow essential life skills, and create a solid path forward. If your loved one has completed residential treatment, this next step could be exactly what they need to thrive.
                        </p>
                        <div className="bg-[var(--primary)] text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif mb-6">Family Consultation</h2>
                                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                                    We offer dedicated family sessions to discuss the recovery plan and provide you with the tools necessary for a healthy transition.
                                </p>
                                <button className="btn-primary hover:bg-white hover:text-[var(--primary)] transition-colors px-12 py-4">
                                    Book a Consultation
                                </button>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FamiliesPage;