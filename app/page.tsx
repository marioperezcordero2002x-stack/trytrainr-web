import { AboutSection } from "./components/landing/AboutSection";
import { FeaturesSection } from "./components/landing/FeaturesSection";
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
        <ShowcaseSection />
      </main>
      <SiteFooter />
    </>
  );
}
