import Link from "next/link";
import { CheckCircle2, ArrowRightLeft, Users, Activity, Sparkles, Brain, Shield, Heart, GraduationCap, Clock, Home, Users2 } from "lucide-react";

const benefits = [
    {
        title: "Smooth Transition to Independent Living",
        description: "Secondary treatment provides a bridge between intensive inpatient care and full independence. It helps individuals gradually reintegrate into daily life while still receiving therapeutic support.",
        icon: <ArrowRightLeft className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Ongoing Therapy and Support",
        description: "Continued access to individual therapy, group counseling, and peer support allows clients to work through deeper emotional issues and triggers that may not have been fully addressed in primary treatment.",
        icon: <Heart className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Relapse Prevention",
        description: "Clients learn advanced coping skills and relapse prevention strategies, helping them recognise early warning signs and respond to challenges without returning to substance use.",
        icon: <Shield className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Structured Routine",
        description: "Secondary programs offer structure and accountability—essential elements for maintaining sobriety. Daily schedules may include therapy, life skills classes, 12-step meetings, and recreational activities.",
        icon: <Clock className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Supportive Environment",
        description: "Being in a sober, supportive community helps reduce the isolation often felt during early recovery. Clients build strong relationships with others who share similar goals and experiences.",
        icon: <Home className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Focus on Life Skills and Personal Growth",
        description: "Secondary treatment often includes education and vocational support, budgeting, healthy living habits, and communication skills—tools essential for long-term success and self-sufficiency.",
        icon: <GraduationCap className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Family Involvement",
        description: "Many programs incorporate family therapy or education, helping loved ones understand the recovery process and rebuild trust and communication.",
        icon: <Users2 className="text-[var(--accent)]" size={32} />
    }
];

const focusAreas = [
    {
        title: "Clinical Excellence",
        description: "Weekly group therapy and individual care planning focused on emotional regulation and underlying trauma.",
        icon: <Brain className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Relapse Prevention",
        description: "Intensive training on identifying personal triggers, managing cravings, and building robust coping strategies.",
        icon: <Shield className="text-[var(--accent)]" size={32} />
    },
    {
        title: "12-Step Consolidation",
        description: "Deepening connection to mutual aid groups and establishing a permanent sober support network.",
        icon: <Users className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Life Skills & Autonomy",
        description: "Practical development in budgeting, meal planning, and taking full responsibility for one's personal life.",
        icon: <Sparkles className="text-[var(--accent)]" size={32} />
    },
    {
        title: "Healthy Routine",
        description: "Building a structured daily routine that balances therapeutic work with personal freedom and resilience.",
        icon: <Activity className="text-[var(--accent)]" size={32} />
    }
];

const ProgrammePage = () => {
    return (
        <main className="pt-24">
            {/* Hero Header */}
            <section className="bg-[var(--primary)] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif mb-6">Our Programme</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Bridging the gap between initial rehabilitation and a full, independent life.
                    </p>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-4">Secondary Care vs Primary Care</h2>
                        <p className="text-gray-600">Understanding where we fit in your recovery journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Primary Care */}
                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-400">Primary Care (The Foundation)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-500">
                                    <CheckCircle2 size={24} className="shrink-0" />
                                    <span>Clinical detoxification and stabilization.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-500">
                                    <CheckCircle2 size={24} className="shrink-0" />
                                    <span>24/7 high-intensity clinical supervision.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-500">
                                    <CheckCircle2 size={24} className="shrink-0" />
                                    <span>Short-term intervention (typically 28 days).</span>
                                </li>
                            </ul>
                        </div>

                        {/* Secondary Care (Canalside) */}
                        <div className="p-10 bg-white rounded-3xl border-2 border-[var(--primary)] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[var(--accent)] text-[var(--primary)] px-4 py-1 font-bold text-xs uppercase">Canalside Recovery</div>
                            <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">Secondary Care (Sustainable Living)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 size={24} className="text-[var(--accent)] shrink-0" />
                                    <span>Semi-independent therapeutic living.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 size={24} className="text-[var(--accent)] shrink-0" />
                                    <span>Focus on community integration and employment.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 size={24} className="text-[var(--accent)] shrink-0" />
                                    <span>Extended support for lasting abstinence.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-[#f4f7f6]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-6">Benefits of Secondary Treatment for Drug and Alcohol Recovery</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Secondary treatment, also known as extended or step-down care, plays a crucial role in long-term addiction recovery. After completing detox or residential rehab, many individuals benefit from continued support to solidify the progress they’ve made. Here are the key benefits of secondary treatment:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Focus Areas */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-4 font-bold">Key Areas of Secondary Care Programme</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                            Our structured approach ensures every aspect of recovery is addressed with clinical excellence and personal care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            "Building Self-Confidence",
                            "Repairing and Maintaining Relationships",
                            "Strategies for Managing Stress",
                            "Relapse Prevention",
                            "12 Step Programme Consolidation",
                            "Weekly Group Therapy",
                            "Individual Care Planning",
                            "Recognising Triggers and how to manage them",
                            "Structured Daily routine",
                            "Building a support network",
                            "How to manage cravings if they occur",
                            "Developing skills in budget and meal planning",
                            "How to take responsibility in personal life"
                        ].map((area, index) => (
                            <div key={index} className="flex gap-4 items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                                <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0 font-bold">
                                    {index + 1}
                                </div>
                                <h4 className="text-lg font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">{area}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center max-w-4xl mx-auto p-12 bg-gray-50 border border-gray-100 rounded-[3rem] relative">
                        <h3 className="text-2xl font-serif text-[var(--primary)] mb-6">Is Secondary Treatment Right for You or Your Loved One?</h3>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                            If you or someone you care about has completed detox or residential rehab but still needs structure and support, secondary treatment may be the next vital step. It provides the time, tools, and environment needed to build a strong foundation for lifelong recovery.
                        </p>
                        <div className="bg-[var(--primary)] text-white p-8 rounded-2xl italic">
                            "The structure of the programme incorporates a balance of freedom and timetabled events and enables the confidence and resilience to build on recovery gains."
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-8">Who is it for?</h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            The service is available to adults aged 18 and over who have completed a recognised primary treatment programme, have had GP intervention and/or maintained sobriety for a minimum of 6 weeks.
                            <br /><br />
                            We work in close partnership with <strong>Change Grow Live (CGL)</strong>, <strong>Turning Point</strong>, <strong>With You (formerly Addaction)</strong>, <strong>NHS Substance Misuse Teams</strong>, <strong>Social Workers</strong>, and <strong>Probation Services</strong>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <CheckCircle2 className="text-[var(--accent)] shrink-0" size={24} />
                                <p className="text-gray-700 font-medium">Clients may present with co-occurring mental health needs; care is tailored accordingly.</p>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <CheckCircle2 className="text-[var(--accent)] shrink-0" size={24} />
                                <p className="text-gray-700 font-medium">Clients must demonstrate readiness to engage actively in treatment and recovery activities.</p>
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap gap-4">
                            <span className="bg-white border border-gray-100 px-6 py-2 rounded-full text-sm font-bold text-[var(--primary)] shadow-sm">18+ Years Old</span>
                            <span className="bg-white border border-gray-100 px-6 py-2 rounded-full text-sm font-bold text-[var(--primary)] shadow-sm">Primary Care Completed</span>
                            <span className="bg-white border border-gray-100 px-6 py-2 rounded-full text-sm font-bold text-[var(--primary)] shadow-sm">6 Weeks Minimum Sobriety</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-[var(--primary)] text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif mb-8">Take the Next Step</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        If you or a loved one are ready to bridge the gap to a permanent, sober lifestyle, we are here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary px-10 py-4 text-lg">
                            Apply Now
                        </Link>
                        <Link href="/eligibility" className="glass text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg">
                            Eligibility Criteria
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProgrammePage;