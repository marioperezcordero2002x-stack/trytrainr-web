import { BundleSection } from "./components/landing/BundleSection";
import { CoachesSection } from "./components/landing/CoachesSection";
import { FinalCtaSection } from "./components/landing/FinalCtaSection";
import { HeroSection } from "./components/landing/HeroSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { PremiumFeelSection } from "./components/landing/PremiumFeelSection";
import { QuickValueSection } from "./components/landing/QuickValueSection";
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
        <CoachesSection />
        <HowItWorksSection />
        <BundleSection />
        <PremiumFeelSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
