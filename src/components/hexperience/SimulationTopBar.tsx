import React from 'react';
import { HexLogo } from './HexLogo';
import { ArrowLeft, Play, Sparkles, Activity, Layers, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { PREDETERMINED_SCENARIOS } from '../../data/scenarios';

interface SimulationTopBarProps {
  onReturnToShowcase: () => void;
  onOpenScenarioSelect: () => void;
  onSelectScenario: (scenario: any) => void;
  onResetToFreePlay: () => void;
  activeScenarioTitle?: string;
  activeScenarioDay?: number;
  activeScenarioTotalDays?: number;
  funds: number;
  totalPoints: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const SimulationTopBar: React.FC<SimulationTopBarProps> = ({
  onReturnToShowcase,
  onOpenScenarioSelect,
  onSelectScenario,
  onResetToFreePlay,
  activeScenarioTitle,
  activeScenarioDay,
  activeScenarioTotalDays,
  funds,
  totalPoints,
  soundEnabled,
  onToggleSound
}) => {
  return (
    <div className="sticky top-0 z-40 bg-[#05100B]/98 backdrop-blur-md border-b border-[#004831] px-4 sm:px-6 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.7)] flex items-center justify-between gap-4">
      
      {/* Left: Return to Showcase CTA & Brand */}
      <div className="flex items-center gap-4">
        <button
          onClick={onReturnToShowcase}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-enterprise font-semibold text-xs text-white bg-[#00271a] hover:bg-[#003624] border border-[#004831] hover:border-[#66BD29] transition-all shadow-sm cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#66BD29] group-hover:-translate-x-1 transition-transform" />
          <span>Exit to HEXperience Platform Showcase</span>
        </button>

        <div className="hidden md:flex items-center gap-2 border-l border-[#004831] pl-4">
          <HexLogo size="sm" showSubtitle={false} />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#003624] text-[#66BD29] border border-[#66BD29]/40">
            Sandbox: Sprint Toll v1.0
          </span>
        </div>
      </div>

      {/* Center: Active Scenario or Free Play Status */}
      <div className="flex items-center gap-2">
        {activeScenarioTitle ? (
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-200 font-bold truncate max-w-[200px] sm:max-w-none">
              Scenario: {activeScenarioTitle}
            </span>
            {activeScenarioDay && activeScenarioTotalDays && (
              <span className="text-amber-400/80">
                (Day {activeScenarioDay}/{activeScenarioTotalDays})
              </span>
            )}
            <button
              onClick={onResetToFreePlay}
              className="ml-1 text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
            >
              Reset to Free Play
            </button>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-[#003624] border border-[#66BD29]/40 text-xs font-mono text-[#66BD29]">
            <span className="w-2 h-2 rounded-full bg-[#66BD29]"></span>
            <span>Free Play Sandbox Active</span>
          </div>
        )}
      </div>

      {/* Right: Quick Scenario Switcher & Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenScenarioSelect}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#66BD29] bg-[#003624] border border-[#66BD29]/40 hover:bg-[#004831] transition-all cursor-pointer"
        >
          <Activity className="w-3.5 h-3.5 text-[#66BD29]" />
          <span>Switch Scenario</span>
        </button>

        <button
          onClick={onToggleSound}
          title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          className="p-1.5 rounded-lg bg-[#00271a] text-emerald-300 hover:text-white border border-[#004831] transition-colors cursor-pointer"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-[#66BD29]" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

    </div>
  );
};
