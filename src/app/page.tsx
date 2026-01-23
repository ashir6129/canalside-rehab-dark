import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ValuePillars from "@/components/sections/ValuePillars";
import LatestResources from "@/components/sections/LatestResources";
import SpecialistCare from "@/components/sections/SpecialistCare";
import EligibilitySection from "@/components/sections/EligibilitySection";
import WhySecondaryTreatment from "@/components/sections/WhySecondaryTreatment";
import TakeNextStep from "@/components/sections/TakeNextStep";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Value Pillars */}
      <ValuePillars />

      {/* Why Secondary Treatment Section */}
      <WhySecondaryTreatment />

      {/* Specialist Care Section */}
      <SpecialistCare />

      {/* Eligibility / Target Audience Section */}
      <EligibilitySection />

      {/* Latest Resources */}
      <LatestResources />

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-[var(--primary)] text-center mb-16 font-bold">Voices of Recovery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm relative">
              <span className="text-6xl text-[var(--accent)] opacity-20 absolute top-4 left-6 italic font-serif">"</span>
              <p className="text-lg text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                "Coming to Canalside was the best decision I ever made for my recovery. The team helped me bridge the gap between being clean and actually living a fulfilling life."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h4 className="font-bold text-[var(--primary)]">Former Resident</h4>
                  <p className="text-sm text-gray-400">Completed 6 Months</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm relative">
              <span className="text-6xl text-[var(--accent)] opacity-20 absolute top-4 left-6 italic font-serif">"</span>
              <p className="text-lg text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                "The family sessions were a game changer. We finally learned how to support our son without enabling the addiction. We're a family again."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <h4 className="font-bold text-[var(--primary)]">Family Member</h4>
                  <p className="text-sm text-gray-400">Secondary Care Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Partners & Professional Resources */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-[var(--primary)] mb-6 font-bold">Our Trusted Referral Partners</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We work in close partnership with leading rehabilitation and support agencies to ensure a seamless recovery journey. We accept referrals from across the UK.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "Change Grow Live",
              "Turning Point",
              "With You",
              "NHS Teams",
              "Social Workers",
              "Probation Services",
              "Local Authorities",
              "Private Clinicians"
            ].map((partner, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center font-bold text-[var(--primary)] hover:border-[var(--accent)] transition-all">
                {partner}
              </div>
            ))}
          </div>

          <div className="bg-[var(--primary)] p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-xl">
              <h3 className="text-3xl font-serif mb-4">Professional Referral Pack</h3>
              <p className="text-gray-300 font-medium">
                Are you a healthcare professional or recovery practitioner? Download our comprehensive referral pack including clinical assessment forms and service specifications.
              </p>
            </div>
            <Link href="/referral" className="btn-primary-accent whitespace-nowrap px-10 py-5 text-lg shadow-xl">
              Download Referral Pack
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <TakeNextStep />
    </main>
  );
}