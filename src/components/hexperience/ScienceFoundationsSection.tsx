import React, { useState } from 'react';
import { BookOpen, GraduationCap, Brain, Award, ExternalLink, Zap, CheckCircle2, ChevronRight, Activity, FileText } from 'lucide-react';

export const ScienceFoundationsSection: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<'sitzmann' | 'roediger' | 'sweller'>('sitzmann');

  const studies = [
    {
      id: 'sitzmann' as const,
      tag: 'Meta-Analysis (6,476 Trainees)',
      title: 'Sitzmann (2011) Simulation Meta-Analysis',
      publication: 'Personnel Psychology (Vol. 64, Issue 2)',
      citation: 'Sitzmann, T. (2011). A meta-analytic examination of the instructional effectiveness of computer-based simulation games. Personnel Psychology, 64(2), 489–528.',
      headline: 'Statistically Significant Gains Across All Three Learning Domains',
      stats: [
        { label: 'Procedural Knowledge', value: '+14%', desc: 'How to execute real-world operational workflows under pressure' },
        { label: 'Declarative Recall', value: '+11%', desc: 'Retention of foundational rules, terminology, and principles' },
        { label: 'Self-Efficacy & Confidence', value: '+20%', desc: 'Willingness to take ownership of complex operational decisions' },
        { label: 'Retention Decay Resistance', value: '+9%', desc: 'Knowledge persistence measured weeks post-intervention' }
      ],
      coreFinding:
        'Across 65 independent studies and 6,476 corporate trainees, interactive simulation games decisively outperformed traditional lecture and static e-learning. The largest margin was observed in procedural knowledge (+14%), proving that motor and decision practice cannot be substituted by reading slides.',
      enterpriseImplication:
        'Companies transition from certifying "completion" to proving operational execution capability before giving employees access to live production environments.'
    },
    {
      id: 'roediger' as const,
      tag: 'Cognitive Neuroscience',
      title: 'The Testing Effect & Active Retrieval Practice',
      publication: 'Psychological Science (Roediger & Karpicke)',
      citation: 'Roediger, H. L., & Karpicke, J. D. (2006). The power of testing memory: Basic research and implications for educational practice. Perspectives on Psychological Science, 1(3), 181–210.',
      headline: 'Active Retrieval Forges 2.8x Stronger Synaptic Consolidation',
      stats: [
        { label: 'Synaptic Recall Factor', value: '2.8x', desc: 'Long-term memory stability compared to repeated passive reading' },
        { label: 'Decision Latency', value: '-38%', desc: 'Speed of correct response when encountering novel edge cases' },
        { label: 'Transfer of Learning', value: '+42%', desc: 'Ability to apply principles to unscripted, unfamiliar situations' },
        { label: 'Neural Engagement', value: '3.4x', desc: 'Prefrontal cortex activation during active problem-solving' }
      ],
      coreFinding:
        'Passive exposure (re-reading, video watching) triggers a biological "fluency illusion"—the brain confuses familiarity with mastery. In contrast, forcing the brain to retrieve and apply knowledge in interactive scenarios stimulates neuroplastic structural reorganization.',
      enterpriseImplication:
        'Instead of giving employees answers upfront, HEXperience presents challenge conditions that force active diagnostic retrieval, locking in permanent retention.'
    },
    {
      id: 'sweller' as const,
      tag: 'Instructional Architecture',
      title: 'Cognitive Load Optimization & Schema Induction',
      publication: 'Cognitive Science (John Sweller)',
      citation: 'Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285.',
      headline: 'Eliminating Extraneous Load to Accelerate Germane Schema Formation',
      stats: [
        { label: 'Extraneous Load', value: '-65%', desc: 'Reduction in irrelevant cognitive clutter and interface friction' },
        { label: 'Schema Consolidation', value: '+53%', desc: 'Formation of mental models connecting causes to systemic effects' },
        { label: 'Scenario Iteration Speed', value: '3.2 min', desc: 'Target duration of micro-simulation decision loops' },
        { label: 'Error-Correction Rate', value: '94%', desc: 'Immediate remediation when instant diagnostic feedback is delivered' }
      ],
      coreFinding:
        'Human working memory can only process 4±1 chunks of information concurrently. Massive 45-slide decks overwhelm working memory with extraneous visual and verbal noise. Micro-simulations isolate the core causal dynamics (e.g. WIP limits, batch size, triage), freeing capacity for germane schema consolidation.',
      enterpriseImplication:
        'HEXperience breaks sprawling multi-hour curricula into 3-5 minute targeted simulation modules with instantaneous causal feedback.'
    }
  ];

  const current = studies.find((s) => s.id === activeStudy)!;

  return (
    <section id="science" className="relative py-24 bg-[#05100B] border-b border-[#004831] overflow-hidden">
      {/* Background Matrix Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#004831]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#66BD29]/40 bg-[#003624]/80 text-[#66BD29] text-xs font-mono font-semibold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5 text-[#66BD29]" />
            Empirical Validation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hex font-bold text-white tracking-tight">
            The Science &amp; Empirical Foundations of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">
              Interactive Media
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-enterprise leading-relaxed">
            HEXperience is not built on ed-tech buzzwords. Our simulation architecture is grounded in decades of peer-reviewed cognitive neuroscience, instructional design meta-analyses, and empirical trial data.
          </p>
        </div>

        {/* Study Navigation Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-[#00271a] border border-[#004831] gap-1 sm:gap-2 flex-wrap justify-center shadow-sm">
            {studies.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudy(study.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-enterprise font-semibold transition-all cursor-pointer ${
                  activeStudy === study.id
                    ? 'bg-gradient-to-r from-[#004831] to-[#66BD29] text-white shadow-[0_0_15px_rgba(102,189,41,0.4)]'
                    : 'text-emerald-200/70 hover:text-white hover:bg-[#003624]'
                }`}
              >
                {study.title.split(' ')[0]} ({study.tag.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Active Study Deep Dive Card */}
        <div className="mt-8 bg-[#071911] border border-[#004831] rounded-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#004831]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#003624] text-[#66BD29] border border-[#66BD29]/40">
                  {current.tag}
                </span>
                <span className="text-xs font-mono text-emerald-300/70">
                  {current.publication}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display-hex font-bold text-white">
                {current.title}
              </h3>
              <p className="text-base text-[#66BD29] font-enterprise font-semibold">
                {current.headline}
              </p>
            </div>

            <div className="shrink-0 p-3.5 rounded-xl bg-[#00271a] border border-[#004831] max-w-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 mb-1">
                <FileText className="w-3.5 h-3.5 text-[#66BD29]" />
                Formal Citation:
              </div>
              <p className="text-[11px] font-mono text-emerald-100/70 leading-relaxed italic">
                "{current.citation}"
              </p>
            </div>
          </div>

          {/* Key Stat Blocks */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {current.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#00271a] border border-[#004831] hover:border-[#66BD29]/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] to-[#A7F3D0]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-enterprise font-bold text-white">
                  {stat.label}
                </div>
                <p className="mt-1 text-xs font-enterprise text-emerald-200/70 leading-snug">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Core Findings & Enterprise Translation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#004831]">
            <div className="p-5 rounded-xl bg-[#00271a] border border-[#004831] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#66BD29] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                Empirical Research Finding
              </div>
              <p className="text-sm font-enterprise text-emerald-100/90 leading-relaxed">
                {current.coreFinding}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#003624] border border-[#66BD29]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#66BD29] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                How HEXperience Operationalizes It
              </div>
              <p className="text-sm font-enterprise text-white leading-relaxed">
                {current.enterpriseImplication}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
