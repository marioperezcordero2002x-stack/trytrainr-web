import { BundleSection } from "./components/landing/BundleSection";
import { CoachesSection } from "./components/landing/CoachesSection";
import { FinalCtaSection } from "./components/landing/FinalCtaSection";
import { HeroSection } from "./components/landing/HeroSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { QuickValueSection } from "./components/landing/QuickValueSection";
import { ShowcaseSection } from "./components/landing/ShowcaseSection";
import { SupportingLayersSection } from "./components/landing/SupportingLayersSection";
import { WhyTrainrSection } from "./components/landing/WhyTrainrSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col bg-[var(--tr-canvas)]"
      >
        <HeroSection />
        <QuickValueSection />
        <HowItWorksSection />
        <CoachesSection />
        <BundleSection />
        <WhyTrainrSection />
        <ShowcaseSection />
        <SupportingLayersSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
