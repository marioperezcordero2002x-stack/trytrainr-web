import { AboutSection } from "./components/landing/AboutSection";
import { DifferentSection } from "./components/landing/DifferentSection";
import { FeaturesSection } from "./components/landing/FeaturesSection";
import { FinalCtaSection } from "./components/landing/FinalCtaSection";
import { HeroSection } from "./components/landing/HeroSection";
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
        <AboutSection />
        <FeaturesSection />
        <DifferentSection />
        <ShowcaseSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
