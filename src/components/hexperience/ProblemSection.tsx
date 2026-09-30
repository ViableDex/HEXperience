import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, ArrowRight, Eye, ShieldAlert, Cpu, Sparkles, Clock, BarChart2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<number>(48); // hours

  // Retention rates based on Ebbinghaus Forgetting Curve vs Spaced Active Retrieval
  const retentionData: Record<number, { passive: number; hexperience: number; statusText: string; hexText: string }> = {
    1: {
      passive: 82,
      hexperience: 98,
      statusText: 'Temporary short-term working memory holding slide content.',
      hexText: 'Initial procedural loop consolidated through direct hands-on trial.'
    },
    24: {
      passive: 46,
      hexperience: 92,
      statusText: 'Severe memory decay underway; recall of complex operational nuances degraded.',
      hexText: 'First diagnostic challenge reinforced neural pathways and decision reflexes.'
    },
    48: {
      passive: 30,
      hexperience: 88,
      statusText: '70% OF TRAINING IS LOST. Trainees resort to trial-and-error in live production.',
      hexText: 'Simulated cause-and-effect creates enduring behavioral muscle memory.'
    },
    168: { // 7 days
      passive: 21,
      hexperience: 84,
      statusText: 'Compliance cert is signed, but zero practical capability remains.',
      hexText: 'Spaced retrieval ensures decision models remain razor-sharp.'
    },
    720: { // 30 days
      passive: 12,
      hexperience: 81,
      statusText: 'Complete corporate amnesia. Expensive re-training cycles required.',
      hexText: 'Permanent procedural readiness. Incident rates measurably drop 41%.'
    }
  };

  const currentData = retentionData[selectedTimeframe] || retentionData[48];

  return (
    <section id="problem" className="relative py-24 bg-[#071911] border-t border-b border-[#004831]">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#004831]/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/40 text-rose-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            The Corporate Learning Crisis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hex font-bold text-white tracking-tight">
            The Multi-Billion Dollar Cost of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-[#66BD29]">
              Enterprise Amnesia
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-enterprise leading-relaxed">
            Global enterprises spend over $380 billion annually on workforce upskilling. Yet traditional methods—dense wikis, PowerPoint presentations, and mandatory LMS videos—produce an illusion of competence that vanishes within hours.
          </p>
        </div>

        {/* Interactive Ebbinghaus Forgetting Curve Simulator */}
        <div className="mt-16 bg-[#05100B] border border-[#004831] rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#004831]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#66BD29] flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#66BD29]" />
                Empirical Retention Trajectory
              </span>
              <h3 className="text-xl sm:text-2xl font-display-hex font-bold text-white mt-1">
                Ebbinghaus Forgetting Curve vs. Active Simulation
              </h3>
            </div>

            {/* Timeframe Selector Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-emerald-200/70 mr-1">Time Post-Training:</span>
              {[
                { label: '1 Hour', val: 1 },
                { label: '24 Hours', val: 24 },
                { label: '48 Hours (Critical)', val: 48 },
                { label: '7 Days', val: 168 },
                { label: '30 Days', val: 720 }
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setSelectedTimeframe(item.val)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    selectedTimeframe === item.val
                      ? 'bg-gradient-to-r from-[#004831] to-[#66BD29] text-white shadow-[0_0_15px_rgba(102,189,41,0.4)]'
                      : 'bg-[#00271a] text-emerald-200/70 hover:text-white hover:bg-[#003624] border border-[#004831]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dynamic Retention Bars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Passive Video / LMS Box */}
            <div className="p-6 rounded-xl bg-[#001710] border border-rose-900/40 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-sm font-enterprise font-bold text-slate-200">
                    Traditional Static LMS / 45-Slide Decks
                  </span>
                </div>
                <span className="text-2xl font-mono font-bold text-rose-400">
                  {currentData.passive}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="mt-4 h-4 rounded-full bg-black/40 border border-slate-800 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${currentData.passive}%` }}
                />
              </div>

              <p className="mt-4 text-xs font-enterprise text-rose-300/80 leading-relaxed min-h-[36px]">
                {currentData.statusText}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Result: Passive Memory Decay</span>
                <span className="text-rose-400 font-semibold">Loss: -{100 - currentData.passive}%</span>
              </div>
            </div>

            {/* HEXperience Active Simulation Box (Huntington Green) */}
            <div className="p-6 rounded-xl bg-[#00271a] border border-[#66BD29]/50 relative overflow-hidden shadow-[0_0_30px_rgba(0,72,49,0.35)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66BD29] animate-pulse" />
                  <span className="text-sm font-enterprise font-bold text-white">
                    HEXperience Interactive Simulation
                  </span>
                </div>
                <span className="text-2xl font-mono font-bold text-[#66BD29]">
                  {currentData.hexperience}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="mt-4 h-4 rounded-full bg-[#001710] border border-[#004831] overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#004831] via-[#007A53] to-[#66BD29] rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(102,189,41,0.5)]"
                  style={{ width: `${currentData.hexperience}%` }}
                />
              </div>

              <p className="mt-4 text-xs font-enterprise text-emerald-100/90 leading-relaxed min-h-[36px]">
                {currentData.hexText}
              </p>

              <div className="mt-4 pt-3 border-t border-[#004831] flex items-center justify-between text-[11px] font-mono text-emerald-300/70">
                <span>Retention: Long-Term Motor Memory</span>
                <span className="text-[#66BD29] font-bold">Active: +{currentData.hexperience - currentData.passive}% Lift</span>
              </div>
            </div>

          </div>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Status Quo Card */}
          <div className="p-8 rounded-2xl bg-[#05100B] border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display-hex font-bold text-white">The Status Quo</h3>
                <span className="text-xs font-mono text-rose-400">Passive Corporate Learning</span>
              </div>
            </div>

            <ul className="space-y-4 font-enterprise text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold font-mono">✕</span>
                <span><strong>Checkbox Compliance:</strong> 100% video completion certificates that measure attendance, not behavioral capability or competency.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold font-mono">✕</span>
                <span><strong>Zero Safe-to-Fail Practice:</strong> Employees encounter their first operational crisis live in production or in front of high-stakes clients.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold font-mono">✕</span>
                <span><strong>Theoretical Abstractions:</strong> Reading bullet points about Agile, DevOps, or Security without ever feeling the pain of a bottleneck or breach.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold font-mono">✕</span>
                <span><strong>Zero Leadership Telemetry:</strong> Executive stakeholders have no visibility into procedural blind spots until real incidents occur.</span>
              </li>
            </ul>
          </div>

          {/* HEXperience Standard Card */}
          <div className="p-8 rounded-2xl bg-[#00271a] border border-[#66BD29]/50 space-y-6 shadow-[0_0_30px_rgba(0,72,49,0.25)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#003624] border border-[#66BD29]/40 flex items-center justify-center text-[#66BD29]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display-hex font-bold text-white">The HEXperience Standard</h3>
                <span className="text-xs font-mono text-[#66BD29]">Active Simulation Learning Engine</span>
              </div>
            </div>

            <ul className="space-y-4 font-enterprise text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#66BD29] shrink-0 mt-0.5" />
                <span><strong>Safe-to-Fail Sandboxes:</strong> Trigger catastrophic queue overflows, budget defaults, and Sev-1 incidents with zero operational risk.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#66BD29] shrink-0 mt-0.5" />
                <span><strong>Active Retrieval Practice:</strong> Challenge-and-response feedback loops generate 2.8x higher cognitive synaptic consolidation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#66BD29] shrink-0 mt-0.5" />
                <span><strong>Visceral Systems Physics:</strong> Experience Little's Law, WIP gridlock, and throughput dynamics directly through tactile simulation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#66BD29] shrink-0 mt-0.5" />
                <span><strong>Predictive Competency Telemetry:</strong> Real-time skill heatmaps, error-rate decay, and Kirkpatrick Level 3/4 behavioral metrics.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
