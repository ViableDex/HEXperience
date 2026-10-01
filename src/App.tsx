import { PlatformNavbar } from './components/hexperience/PlatformNavbar';
import { HeroSection } from './components/hexperience/HeroSection';
import { ProblemSection } from './components/hexperience/ProblemSection';
import { ScienceFoundationsSection } from './components/hexperience/ScienceFoundationsSection';
import { PlatformPillarsSection } from './components/hexperience/PlatformPillarsSection';
import { ExperienceCatalogSection } from './components/hexperience/ExperienceCatalogSection';
import { LeadershipTelemetrySection } from './components/hexperience/LeadershipTelemetrySection';
import { HexperienceFooter } from './components/hexperience/HexperienceFooter';

export default function App() {
  const handleScrollToCatalog = () => {
    const el = document.querySelector('#catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05100B] text-[#F4F7F5] flex flex-col font-sans selection:bg-[#66BD29] selection:text-[#003624] overflow-x-hidden w-full max-w-full">
      {/* =========================================================================
          HEXPERIENCE ENTERPRISE PLATFORM SHOWCASE & CATALOG
          ========================================================================= */}
      <div className="flex-1 flex flex-col bg-hex-matrix overflow-x-hidden w-full max-w-full">
        {/* Sticky Platform Navigation */}
        <PlatformNavbar />

        {/* Main Showcase Page Architecture */}
        <main className="flex-1">
          {/* 1. Value Proposition (Centered Hero Section) */}
          <HeroSection onExploreCatalog={handleScrollToCatalog} />

          {/* 2. The HEXperience Catalog */}
          <ExperienceCatalogSection />

          {/* 3. Business Problem: The Cost of Enterprise Amnesia */}
          <ProblemSection />

          {/* 4. Cognitive Science & Empirical Research Foundations */}
          <ScienceFoundationsSection />

          {/* 5. Universal Pillars of Interactive Corporate Media */}
          <PlatformPillarsSection />

          {/* 6. Leadership Telemetry & Enterprise Analytics (Kirkpatrick Model) */}
          <LeadershipTelemetrySection />
        </main>

        {/* Platform Footer */}
        <HexperienceFooter />
      </div>
    </div>
  );
}
