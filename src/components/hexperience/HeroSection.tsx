import React from 'react';

interface HeroSectionProps {
  onExploreCatalog?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 lg:pt-18 lg:pb-20 bg-[#05100B]">
      {/* Background Ambient Glow & Hex Grids in Huntington Green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#004831]/35 via-[#006747]/20 to-[#66BD29]/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#66BD29]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        {/* Main Headline (Centered) */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display-hex font-extrabold tracking-tight text-white leading-[1.15]">
          From Passive Compliance to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">
            Active Competence
          </span>
        </h1>

        {/* Sub-headline (Centered) */}
        <p className="text-lg sm:text-xl text-emerald-100/90 max-w-3xl font-enterprise font-normal leading-relaxed mx-auto">
          HEXperience transforms static corporate training and click-through slides into{' '}
          <span className="text-white font-semibold underline decoration-[#66BD29] decoration-2 underline-offset-4">
            safe-to-fail interactive simulations
          </span>
          . Build procedural muscle memory, accelerate time-to-proficiency, and give leadership predictive competency telemetry.
        </p>

        {/* Rapid Trust & Evidence Metrics (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#004831] max-w-2xl mx-auto">
          <div className="bg-[#00271a] border border-[#004831] rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-mono font-bold text-[#66BD29]">+62%</div>
            <div className="text-xs font-enterprise text-emerald-200/80 leading-tight mt-1">Active Learner Engagement</div>
          </div>
          <div className="bg-[#00271a] border border-[#004831] rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-mono font-bold text-emerald-300">2.8x</div>
            <div className="text-xs font-enterprise text-emerald-200/80 leading-tight mt-1">Retention Multiplier</div>
          </div>
          <div className="bg-[#00271a] border border-[#004831] rounded-xl p-4 text-center shadow-sm">
            <div className="text-3xl font-mono font-bold text-white">-58%</div>
            <div className="text-xs font-enterprise text-emerald-200/80 leading-tight mt-1">Time-to-Proficiency</div>
          </div>
        </div>

      </div>
    </section>
  );
};
