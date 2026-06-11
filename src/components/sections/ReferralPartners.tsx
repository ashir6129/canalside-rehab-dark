import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  "Change Grow Live",
  "Turning Point",
  "With You",
  "NHS Teams",
  "Social Workers",
  "Probation Services",
  "Local Authorities",
  "Private Clinicians",
];

const ReferralPartners = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#161616" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A9B8E" }}>
            Our Network
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
            Trusted Referral Partners
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "#888888" }}>
            We work in close partnership with leading rehabilitation and support agencies to ensure a seamless recovery journey. We accept referrals from across the UK.
          </p>
        </div>

        {/* Partner pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="p-5 rounded-xl flex items-center justify-center text-center text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#1C1C1C",
                border: "1px solid #2C2C2C",
                color: i % 2 === 0 ? "#C9A84C" : "#4A9B8E",
              }}
            >
              {partner}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#1C1C1C", border: "1px solid #2C2C2C" }}
        >
          <div className="max-w-xl">
            <div className="w-10 h-0.5 mb-4 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
            <h3 className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#F0F0F0" }}>
              Professional Referral Pack
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Are you a healthcare professional or recovery practitioner? Download our comprehensive referral pack including clinical assessment forms and service specifications.
            </p>
          </div>
          <Link
            href="/referral"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-md text-sm whitespace-nowrap transition-all duration-300 shrink-0"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
          >
            Download Referral Pack <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferralPartners;
