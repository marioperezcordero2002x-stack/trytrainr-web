import { AboutSection } from "./components/landing/AboutSection";
import { CoachesSection } from "./components/landing/CoachesSection";
import { DifferentSection } from "./components/landing/DifferentSection";
import { ExecutionSocialSection } from "./components/landing/ExecutionSocialSection";
import { FeaturesSection } from "./components/landing/FeaturesSection";
import { ConversionBridgeSection } from "./components/landing/ConversionBridgeSection";
import { FinalCtaSection } from "./components/landing/FinalCtaSection";
import { HeroSection } from "./components/landing/HeroSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { ShowcaseSection } from "./components/landing/ShowcaseSection";
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
        <HowItWorksSection />
        <CoachesSection />
        <AboutSection />
        <FeaturesSection />
        <DifferentSection />
        <ShowcaseSection />
        <ExecutionSocialSection />
        <ConversionBridgeSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
