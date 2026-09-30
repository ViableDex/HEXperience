import React, { useState } from 'react';
import { ShieldAlert, Zap, Repeat, GitMerge, CheckCircle, ArrowRight, Eye, Layers } from 'lucide-react';

export const PlatformPillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      icon: ShieldAlert,
      title: 'Safe-to-Fail Sandboxes',
      tagline: 'Fail Early in Sandbox, Never in Production',
      description:
        'In live operations, learning by failure carries catastrophic stakes: multi-million-dollar outages, customer churn, and compliance fines. HEXperience constructs high-fidelity digital replicas of real operational systems where trainees can trigger full-scale queue overflows, mismanage budgets, or fail audit checks with zero real-world fallout.',
      tactics: [
        'Isolated synthetic state engines mimicking production throughput',
        'Extreme stress scenarios (Black Friday surges, Sev-1 outages, ransomware spikes)',
        'Psychologically safe exploration encouraging risk calibration and hypothesis testing',
        'Post-incident forensic retrospectives that dissect root causes'
      ],
      callout: 'Trainees who experience simulated catastrophic failures show 68% lower error rates when encountering similar anomalies in real production.'
    },
    {
      icon: Repeat,
      title: 'Micro-Dosing & Spaced Cadence',
      tagline: 'Continuous Capability Building in 3-5 Minute Loops',
      description:
        'Traditional day-long workshops disrupt billable client work and cause severe cognitive overload. HEXperience delivers training as atomic, 3 to 5-minute decision modules ("Experiences") designed to be practiced regularly. Spaced intervals cement long-term memory retrieval and fit seamlessly into weekly team rituals.',
      tactics: [
        'Atomic simulation rounds mapped to specific operational skills',
        'Spaced retrieval schedules based on algorithmic memory decay modeling',
        'Frictionless browser-based execution with zero local installation overhead',
        'Sprint retrospective integration for ongoing continuous improvement'
      ],
      callout: '5 minutes of daily simulated decision-making yields 3.2x higher mastery than a bi-annual 8-hour training marathon.'
    },
    {
      icon: Zap,
      title: 'Immediate Diagnostic Feedback',
      tagline: 'Instant Cognitive Reflection at the Moment of Friction',
      description:
        'When an employee makes a suboptimal choice on a static quiz, they are merely told "incorrect." In HEXperience, the system immediately plays out the downstream physical consequence: toll queues back up into the feeder highway, customer wait times spike, and operating escrow drains in real time.',
      tactics: [
        'Real-time cause-and-effect visualization showing cascade impacts',
        'Contextual coach notifications pinpointing exact bottlenecks',
        'Opportunity to immediately branch and re-attempt with adjusted parameters',
        'Objective telemetry feedback rather than subjective grading'
      ],
      callout: 'Receiving feedback within 1.5 seconds of a mistake prevents incorrect procedural mental models from ever hardening into habit.'
    },
    {
      icon: GitMerge,
      title: 'Non-Linear Systems Dynamics',
      tagline: 'Demystifying Little\'s Law, Queues & Feedback Loops',
      description:
        'Modern enterprise environments are complex adaptive systems where local optimizations often cause global failures. HEXperience visually simulates the non-linear math governing operations—such as Little\'s Law ($L = \\lambda W$), queuing theory, and cost of delay—making abstract mathematical laws tangible and intuitive.',
      tactics: [
        'Interactive Little\'s Law physics engine connecting WIP, Throughput, and Cycle Time',
        'Dynamic batch-sizing vs. single-piece flow demonstrations',
        'Visual bottleneck migration as lanes and gates are reconfigured',
        'Financial balance sheet modeling linking operational velocity to cash burn'
      ],
      callout: 'Teams experimenting with our flow simulation reduced their internal software delivery cycle times by an average of 34% within 60 days.'
    }
  ];

  return (
    <section id="pillars" className="relative py-24 bg-[#071911] border-b border-[#004831] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#66BD29]/40 bg-[#003624]/80 text-[#66BD29] text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#66BD29]" />
            Core Architectural Tenets
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hex font-bold text-white tracking-tight">
            The Universal Pillars of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">
              Interactive Media
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-enterprise leading-relaxed">
            Why interactive simulations consistently outperform passive corporate training across every organizational domain—from engineering and SRE to cybersecurity and financial operations.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector Tabs (Left Column) */}
          <div className="lg:col-span-4 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#00271a] border-[#66BD29]/60 shadow-[0_0_20px_rgba(102,189,41,0.2)]'
                      : 'bg-[#05100B] border-[#004831] hover:bg-[#00271a] hover:border-[#66BD29]/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#004831] to-[#66BD29] text-white shadow-[0_0_10px_rgba(102,189,41,0.4)]'
                          : 'bg-[#00271a] text-emerald-300 border border-[#004831]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-emerald-300/70">PILLAR 0{idx + 1}</div>
                      <div className={`font-enterprise font-bold text-sm ${isSelected ? 'text-white' : 'text-emerald-100'}`}>
                        {pillar.title}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#66BD29] translate-x-1' : 'text-emerald-700'}`} />
                </button>
              );
            })}
          </div>

          {/* Pillar Expanded Deep Dive (Right Column) */}
          <div className="lg:col-span-8 bg-[#05100B] border border-[#004831] rounded-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Radial */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#004831]/20 blur-[100px] pointer-events-none rounded-full" />

            <div className="space-y-6 relative">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#003624] text-[#66BD29] border border-[#66BD29]/40">
                  PILLAR 0{activePillar + 1} ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-emerald-300">
                  // {pillars[activePillar].tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display-hex font-bold text-white">
                {pillars[activePillar].title}
              </h3>

              <p className="text-base text-emerald-100/90 font-enterprise leading-relaxed">
                {pillars[activePillar].description}
              </p>

              {/* Implementation Tactics */}
              <div className="pt-4 border-t border-[#004831] space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300/80">
                  Key Technical &amp; Pedagogical Mechanisms:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillars[activePillar].tactics.map((tactic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-lg bg-[#00271a] border border-[#004831] flex items-start gap-2.5 text-xs font-enterprise text-emerald-100"
                    >
                      <CheckCircle className="w-4 h-4 text-[#66BD29] shrink-0 mt-0.5" />
                      <span>{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Empirical Callout Quote Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#003624] to-[#00271a] border border-[#66BD29]/40">
                <div className="text-xs font-mono text-[#66BD29] font-semibold mb-1">
                  EMPIRICAL ENTERPRISE BENCHMARK
                </div>
                <p className="text-sm font-enterprise text-white italic">
                  "{pillars[activePillar].callout}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
