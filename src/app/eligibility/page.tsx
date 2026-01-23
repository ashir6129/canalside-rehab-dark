import { CheckCircle, AlertCircle, Calendar, UserCheck } from "lucide-react";
import Link from "next/link";

const criteria = [
  "Service is available to adults aged 18 and over.",
  "Completion of a recognised primary treatment programme.",
  "GP intervention and/or maintained sobriety for a minimum of 6 weeks.",
  "Care is tailored for clients with co-occurring mental health needs.",
  "Must demonstrate readiness to engage actively in treatment and recovery activities.",
  "Commitment to long-term abstinence and personal development."
];

const EligibilityPage = () => {
  return (
    <main className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-[var(--primary)] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-6">Admission Criteria</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Clear guidelines to help you determine if Canalside is the right next step for your recovery.
          </p>
        </div>
      </section>

      {/* Main Criteria Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[var(--primary)] mb-12 text-center">Is This Right for You?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {criteria.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle className="text-[var(--accent)] shrink-0" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-24 bg-[#f4f7f6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Commitment"
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif text-[var(--primary)] mb-8">What We Expect</h2>
              <p className="text-lg text-gray-600 mb-8">
                Secondary care requires a higher level of personal responsibility than primary treatment. We expect our residents to be proactive participants in their own healing.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm h-fit text-[var(--accent)]"><UserCheck size={24} /></div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">Personal Accountability</h4>
                    <p className="text-gray-600">Managing your own schedule and maintaining the rules of the house.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm h-fit text-[var(--accent)]"><Calendar size={24} /></div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">Participation</h4>
                    <p className="text-gray-600">Active engagement in all therapeutic sessions and workshops.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusion Note */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-100 p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center">
            <div className="p-5 bg-amber-100 rounded-full text-amber-600"><AlertCircle size={40} /></div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">Please Note</h3>
              <p className="text-amber-800">
                Canalside is a secondary care facility, not a medical detox center. If you currently require intensive clinical supervision or 24/7 medical monitoring, secondary care may not yet be appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-8 text-[var(--primary)]">Not sure if you qualify?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block px-12">
              Speak to our Admissions Team
            </Link>
            <Link href="/referral" className="glass text-[var(--primary)] border border-[var(--primary)]/20 px-12 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
              Professional Referral Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EligibilityPage;