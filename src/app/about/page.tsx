"use client";

import { useState } from "react";
import { Target, Eye, Heart, X, Music, Bike, Book, GraduationCap } from "lucide-react";

const team = [
    {
        name: "Leonie Huggins",
        role: "Office Administrator",
        bio: "Leonie has worked across various care settings over the years, including nursing care, profound learning disabilities, and complex autism. She is dedicated to supporting our team and service users with empathy, respect, and professionalism.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        fullBio: "Hello, I’m Leonie, and I’m proud to be part of the amazing team at ETL Care as an Office Administrator. I’ve worked across various care settings over the years, including nursing care, profound learning disabilities, and complex autism. These experiences have shaped my understanding of individual needs and strengthened my commitment to delivering a truly person-centred approach in everything I do. My passion for care began at the age of 17, and it’s been at the heart of my career ever since. Along the way, I’ve had the privilege of supporting many individuals and completed both my NVQ Level 2 and 3 in Health and Social Care.",
        extra: "At ETL Care, I’m dedicated to supporting our team and service users with empathy, respect, and professionalism, making sure every person receives the quality care and treatment they deserve.",
        qualifications: [
            "NVQ Level 2 in Health and Social Care",
            "NVQ Level 3 in Health and Social Care"
        ],
        interests: "I am passionate about care and remain mcommitted to delivering excellence in every aspect of my administrative role."
    },
    {
        name: "Sarah",
        role: "Registered Manager",
        shortBio: "I am thrilled to be a part of our brand new secondary recovery home Canalside House. As the Registered Manager I will ensure that our service will provide the very best care and support...",
        fullBio: "I am thrilled to be a part of our brand new secondary recovery home Canalside House. As the Registered Manager I will ensure that our service will provide the very best care and support to adults living with mental health conditions and recovering from addiction. I have the privilege of having over 20 years experience of working in the health and social care sector, primarily with people who experience mental health difficulties, have addiction issues and with people diagnosed with learning disabilities including complex care, dual diagnosis, supported living and forensic step down services. Within my previous roles as a Registered Manager, I have developed tools for people to measure their progress and success and accompanying resources, been part of a team opening brand new services, written and delivered training to staff to improve care and improved CQC ratings by improving standards.",
        mission: "We at Canalside House, aim to improve people's quality of life by ensuring that they have the tools to remain abstinent, to manage their own tenancy, to manage their mental health and to support them to gain experience and qualifications to enable them to move successfully back into society. We do this via groupwork that covers everything from practical skills to managing addiction and mental health issues as well as individual sessions, working with a 12 step recovery programme. We support individuals from 18 plus with addiction issues and mental health needs.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        extra: "I am passionate about providing a service that meets the needs of people who are recovering from addiction and wanting to improve and manage their mental health. Our service is registered with the Care Quality Commission to ensure we meet required standards.",
        qualifications: [
            "Degree in Forensic Psychology",
            "Diploma in Cognitive behavioural therapy",
            "Diploma in Drug and Alcohol Abuse",
            "Diploma in Social work access (Child and Adult Social Care)",
            "Diploma in Addictions, Substance Abuse and Mental Health Treatment",
            "Level 3 qualification in Mental Health",
            "Level 3 qualification in Self Harm",
            "Level 3 qualification in Mental Capacity",
            "Mental Health First Aid"
        ],
        interests: "I am a huge fan of music and like to go to music festivals for the weekend in my motorhome. I have a motorbike called Ziggy and enjoy long rides through the countryside and to meet other riders. I read a lot and love to cook. I am an artist and I paint in oil and acrylic, i'm not very good at it but I do keep trying! I feel very lucky to have a job I love with a life outside of work that I love too."
    }
];

const AboutPage = () => {
    const [selectedMember, setSelectedMember] = useState<any>(null);

    return (
        <main className="pt-24 min-h-screen">
            {/* Page Header */}
            <section className="bg-[var(--primary)] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif mb-6 font-bold">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        Our Secondary Treatment Programme provides a structured, person-centred, and recovery-focused environment for individuals who have completed primary addiction treatment.
                    </p>
                </div>
            </section>

            {/* Mission, Vision & Purpose Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Primary Purpose */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5">
                                <h2 className="text-4xl font-serif text-[var(--primary)] mb-6 font-bold">Primary Purpose</h2>
                                <div className="w-20 h-1 bg-[var(--accent)] mb-8"></div>
                            </div>
                            <div className="lg:col-span-7">
                                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                    The primary purpose of this programme is to offer continued care and support that promotes long-term abstinence from substances, enhances physical and mental wellbeing, and facilitates social inclusion and personal development in a safe and supportive setting.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                                <div className="p-4 bg-white rounded-2xl w-fit shadow-sm mb-8">
                                    <Target size={32} className="text-[var(--accent)]" />
                                </div>
                                <h3 className="text-3xl font-serif text-[var(--primary)] mb-6 font-bold">Our Mission</h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Our mission is to provide a safe, structured, and therapeutic environment where individuals in early recovery can build on the foundations of sobriety established in primary treatment. Through group work, individual therapy, 12-step integration, and life skills development, we empower clients to achieve sustainable, long-term recovery.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-[var(--primary)] p-12 rounded-[3rem] text-white">
                                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-8">
                                    <Eye size={32} className="text-[var(--accent)]" />
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-6 font-bold">Our Vision</h3>
                                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                    We envision a future where individuals recovering from addiction live fulfilling, independent lives, guided by personal responsibility, emotional resilience, and connection to a recovery community. We aim to be a nationally recognised provider of evidence-based secondary care, known for compassionate support and transformative outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-4 font-bold">Our Core Values</h2>
                        <div className="w-20 h-1 bg-[var(--accent)] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Compassion", desc: "We treat all clients with empathy, dignity, and respect, recognising the courage it takes to continue the recovery journey." },
                            { title: "Integrity", desc: "We uphold the highest standards of professionalism and ethical practice, fostering trust through honest communication and accountability." },
                            { title: "Empowerment", desc: "We support individuals to take ownership of their recovery by providing tools, knowledge, and opportunities for personal growth." },
                            { title: "Respect for the Individual", desc: "We value each person's uniqueness, autonomy, and capacity for change, offering personalised care that honours their lived experience." },
                            { title: "Community and Connection", desc: "We foster a sense of belonging and support through peer relationships, group engagement, and connection to 12-step fellowships." },
                            { title: "Excellence", desc: "We are committed to continuous improvement, staff development, and evidence-informed practice to ensure the highest quality of care." },
                            { title: "Recovery-Oriented Practice", desc: "All services and interventions are designed to support sustained recovery and relapse prevention, in alignment with a recovery-oriented system of care." },
                        ].map((value, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[var(--accent)] transition-colors group">
                                <h4 className="text-xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif text-[var(--primary)] mb-6 font-bold">Our Staff</h2>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            Our team consists of highly trained and experienced Recovery Practitioners who provide a fully supportive and non-judgmental approach to secondary treatment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-500 group"
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold bg-[var(--accent)] px-6 py-2 rounded-full">View Full Profile</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-xs">{member.role}</span>
                                    <h3 className="text-2xl font-serif font-bold mt-2 mb-4 text-[var(--primary)]">{member.name}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 font-medium">
                                        {member.fullBio}
                                    </p>
                                    <div className="text-[var(--accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Read More <Target size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedMember && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative shadow-2xl">
                        <button
                            className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                            onClick={() => setSelectedMember(null)}
                        >
                            <X size={24} className="text-[var(--primary)]" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 h-[400px] md:h-auto">
                                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12">
                                <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm">{selectedMember.role}</span>
                                <h2 className="text-4xl font-serif font-bold text-[var(--primary)] mt-2 mb-6">{selectedMember.name}</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--primary)] mb-3 flex items-center gap-2">
                                            <Heart size={20} className="text-[var(--accent)]" /> Professional Biography
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed font-medium">{selectedMember.fullBio}</p>
                                    </div>

                                    {selectedMember.mission && (
                                        <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[var(--accent)]">
                                            <p className="text-[var(--primary)] font-bold italic leading-relaxed">"{selectedMember.mission}"</p>
                                        </div>
                                    )}

                                    {selectedMember.extra && (
                                        <div>
                                            <p className="text-gray-600 leading-relaxed font-medium">{selectedMember.extra}</p>
                                        </div>
                                    )}

                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                                            <GraduationCap size={20} className="text-[var(--accent)]" /> Qualifications
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {selectedMember.qualifications.map((q: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                                                    {q}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--primary)] mb-3 flex items-center gap-2">
                                            <Music size={20} className="text-[var(--accent)]" /> Personal Interests
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed font-medium">{selectedMember.interests}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Stakeholder Engagement & Social Impact */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-[var(--primary)] p-12 md:p-16 rounded-[3rem] text-white">
                        <h2 className="text-3xl font-serif mb-8 text-white font-bold text-center">Stakeholder Engagement</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h4 className="text-[var(--accent)] font-bold mb-4 uppercase tracking-widest text-sm">Transparency & Accountability</h4>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    We promote transparency and accountability to appeal to potential partners, commissioners, volunteers, or donors.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[var(--accent)] font-bold mb-4 uppercase tracking-widest text-sm">Target Groups & Eligibility</h4>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    We support individuals who are homeless or at risk of homelessness, particularly those leaving detox, rehab, or primary treatment who are motivated to maintain recovery.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[var(--accent)] font-bold mb-4 uppercase tracking-widest text-sm">Our Social Impact</h4>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    Our service contributes to reducing homelessness, reoffending, and relapse by providing a safe, structured transition back to independent living.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10 text-center">
                            <p className="text-gray-400 italic">
                                "We aim to introduce staff and showcase the organisation’s ethos and experience while highlighting links with other recovery services or community programmes."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;