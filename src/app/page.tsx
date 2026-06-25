import Hero from "@/components/sections/Hero";
import InteractiveImageSection from "@/components/sections/InteractiveImageSection";
import ValuePillars from "@/components/sections/ValuePillars";
import LatestResources from "@/components/sections/LatestResources";
import SpecialistCare from "@/components/sections/SpecialistCare";
import EligibilitySection from "@/components/sections/EligibilitySection";
import WhySecondaryTreatment from "@/components/sections/WhySecondaryTreatment";
import TakeNextStep from "@/components/sections/TakeNextStep";

import ReferralPartners from "@/components/sections/ReferralPartners";

export default function Home() {
  return (
    <main>
      <Hero />
      <InteractiveImageSection />
      <ValuePillars />
      <WhySecondaryTreatment />
      <SpecialistCare />
      <EligibilitySection />

      <ReferralPartners />
      <LatestResources />
      <TakeNextStep />
    </main>
  );
}