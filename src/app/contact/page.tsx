"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ClipboardCheck } from "lucide-react";

const ContactPage = () => {
    const [formType, setFormType] = useState<"general" | "referral">("general");

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <section className="bg-[var(--primary)] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif mb-6">Connect With Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you have a question or are ready to make a referral, our team is here to listen and help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Info Column */}
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-serif text-[var(--primary)] mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="p-4 bg-gray-50 rounded-2xl text-[var(--accent)]"><Phone size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary)]">Call Us</h4>
                                        <p className="text-gray-600">+44 123 456 7890</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="p-4 bg-gray-50 rounded-2xl text-[var(--accent)]"><Mail size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary)]">Email Us</h4>
                                        <p className="text-gray-600">info@canalside-recovery.co.uk</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="p-4 bg-gray-50 rounded-2xl text-[var(--accent)]"><MapPin size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[var(--primary)]">Visit Us</h4>
                                        <p className="text-gray-600">Canalside Recovery Center,<br />London, United Kingdom</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 h-64 bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-200">
                                <p className="text-gray-400 font-medium">Interactive Map Integration</p>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-50">
                                {/* Form Switcher */}
                                <div className="flex p-1 bg-gray-100 rounded-xl mb-10 w-fit">
                                    <button
                                        onClick={() => setFormType("general")}
                                        className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${formType === "general" ? "bg-white text-[var(--primary)] shadow-sm" : "text-gray-500"}`}
                                    >
                                        <MessageSquare size={18} /> General Enquiry
                                    </button>
                                    <button
                                        onClick={() => setFormType("referral")}
                                        className={`px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${formType === "referral" ? "bg-white text-[var(--primary)] shadow-sm" : "text-gray-500"}`}
                                    >
                                        <ClipboardCheck size={18} /> Make a Referral
                                    </button>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Full Name</label>
                                            <input type="text" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--accent)] transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                                            <input type="email" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--accent)] transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    {formType === "referral" && (
                                        <div className="space-y-2 animate-in fade-in duration-500">
                                            <label className="text-sm font-bold text-gray-700">Organisation / Profession (If applicable)</label>
                                            <input type="text" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--accent)] transition-all" placeholder="Recovery Hub / GP" />
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Your Message</label>
                                        <textarea rows={5} className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--accent)] transition-all" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
                                        Send Message <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;