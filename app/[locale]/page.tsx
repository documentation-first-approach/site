import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSolutionSection } from '@/components/home/ProblemSolutionSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { MetricsSection } from '@/components/home/MetricsSection';
import { KeyBenefitsSection } from '@/components/home/KeyBenefitsSection';
import { CallToActionSection } from '@/components/home/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <MetricsSection />
      <KeyBenefitsSection />
      <CallToActionSection />
    </>
  );
}
