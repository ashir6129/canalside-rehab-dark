import Hero from "@/components/sections/Hero";
import ValuePillars from "@/components/sections/ValuePillars";
import LatestResources from "@/components/sections/LatestResources";
import SpecialistCare from "@/components/sections/SpecialistCare";
import EligibilitySection from "@/components/sections/EligibilitySection";
import WhySecondaryTreatment from "@/components/sections/WhySecondaryTreatment";
import TakeNextStep from "@/components/sections/TakeNextStep";
import Testimonials from "@/components/sections/Testimonials";
import ReferralPartners from "@/components/sections/ReferralPartners";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuePillars />
      <WhySecondaryTreatment />
      <SpecialistCare />
      <EligibilitySection />
      <Testimonials />
      <ReferralPartners />
      <LatestResources />
      <TakeNextStep />
    </main>
  );
}