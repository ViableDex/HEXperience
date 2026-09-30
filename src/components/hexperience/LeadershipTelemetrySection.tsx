import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, ShieldAlert, CheckCircle2, ChevronRight, Activity, ArrowUpRight, Zap, Target } from 'lucide-react';

export const LeadershipTelemetrySection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<'all' | 'eng' | 'sre' | 'product' | 'security'>('all');
  const [activeCellDetail, setActiveCellDetail] = useState<{ dept: string; skill: string; score: number; status: string } | null>(null);

  // Departments and Competency Matrix data
  const heatmapData = [
    {
      dept: 'Core Platform Engineering',
      code: 'eng',
      skills: [
        { name: 'Little\'s Law & WIP Limiting', score: 92, status: 'Mastered' },
        { name: 'Story Slicing & Decomposition', score: 88, status: 'Proficient' },
        { name: 'CI/CD Automated Gate Triage', score: 95, status: 'Mastered' },
        { name: 'Queue Bottleneck Remediation', score: 84, status: 'Proficient' },
        { name: 'Cost of Delay Prioritization', score: 78, status: 'Competent' }
      ]
    },
    {
      dept: 'Site Reliability Engineering (SRE)',
      code: 'sre',
      skills: [
        { name: 'Little\'s Law & WIP Limiting', score: 86, status: 'Proficient' },
        { name: 'Story Slicing & Decomposition', score: 74, status: 'Competent' },
        { name: 'CI/CD Automated Gate Triage', score: 98, status: 'Mastered' },
        { name: 'Queue Bottleneck Remediation', score: 94, status: 'Mastered' },
        { name: 'Cost of Delay Prioritization', score: 82, status: 'Proficient' }
      ]
    },
    {
      dept: 'Product & Agile Delivery',
      code: 'product',
      skills: [
        { name: 'Little\'s Law & WIP Limiting', score: 91, status: 'Mastered' },
        { name: 'Story Slicing & Decomposition', score: 96, status: 'Mastered' },
        { name: 'CI/CD Automated Gate Triage', score: 68, status: 'Developing' },
        { name: 'Queue Bottleneck Remediation', score: 89, status: 'Proficient' },
        { name: 'Cost of Delay Prioritization', score: 94, status: 'Mastered' }
      ]
    },
    {
      dept: 'Enterprise SecOps',
      code: 'security',
      skills: [
        { name: 'Little\'s Law & WIP Limiting', score: 72, status: 'Competent' },
        { name: 'Story Slicing & Decomposition', score: 69, status: 'Developing' },
        { name: 'CI/CD Automated Gate Triage', score: 91, status: 'Mastered' },
        { name: 'Queue Bottleneck Remediation', score: 80, status: 'Proficient' },
        { name: 'Cost of Delay Prioritization', score: 85, status: 'Proficient' }
      ]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-[#004831] text-[#66BD29] border-[#66BD29]/60 hover:bg-[#00573b]';
    if (score >= 80) return 'bg-[#003624] text-emerald-300 border-[#006747] hover:bg-[#004831]';
    if (score >= 70) return 'bg-amber-950/40 text-amber-300 border-amber-600/40 hover:bg-amber-900/40';
    return 'bg-rose-950/40 text-rose-300 border-rose-600/40 hover:bg-rose-900/40';
  };

  const filteredHeatmap = selectedDept === 'all'
    ? heatmapData
    : heatmapData.filter((d) => d.code === selectedDept);

  return (
    <section id="telemetry" className="relative py-24 bg-[#05100B] border-b border-[#004831]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[#004831]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#66BD29]/40 bg-[#003624]/80 text-[#66BD29] text-xs font-mono font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#66BD29]" />
            Executive Decision Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hex font-bold text-white tracking-tight">
            Leadership Telemetry &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">
              Kirkpatrick ROI
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-enterprise leading-relaxed">
            Move beyond superficial "completion certificates." HEXperience captures deep behavioral telemetry as employees navigate simulation sandboxes, projecting real operational readiness.
          </p>
        </div>

        {/* 4 Levels of the Kirkpatrick Model in HEXperience */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              level: 'Level 1',
              title: 'Learner Reaction',
              metric: '+74 NPS',
              sub: '92% Flow Absorption',
              desc: 'Trainees actively request additional simulation cycles over passive lectures.'
            },
            {
              level: 'Level 2',
              title: 'Procedural Learning',
              metric: '+14% Delta',
              sub: 'Zero Guessing Bias',
              desc: 'Proven cognitive ability to diagnose bottlenecks and tune WIP under pressure.'
            },
            {
              level: 'Level 3',
              title: 'Workplace Behavior',
              metric: '42% Smaller PRs',
              sub: '91% WIP Adherence',
              desc: 'Observed behavioral shift on production Jira, GitHub, and delivery boards.'
            },
            {
              level: 'Level 4',
              title: 'Business Results',
              metric: '-41% Incidents',
              sub: '$1.4M Saved Annually',
              desc: 'Direct reduction in Sev-1 outages and accelerated software cycle delivery.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#071911] border border-[#004831] hover:border-[#66BD29]/40 transition-all backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#003624] text-[#66BD29] border border-[#66BD29]/40">
                  {item.level}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#66BD29]"></span>
              </div>
              <h3 className="text-base font-display-hex font-bold text-white mt-3">
                {item.title}
              </h3>
              <div className="mt-2 text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#66BD29]">
                {item.metric}
              </div>
              <div className="text-xs font-mono text-[#66BD29]">{item.sub}</div>
              <p className="mt-3 text-xs font-enterprise text-emerald-200/70 leading-relaxed border-t border-[#004831] pt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real-time Heatmap & Time-to-Proficiency Dashboard Container */}
        <div className="mt-12 bg-[#071911] border border-[#004831] rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#004831]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#66BD29] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#66BD29]" />
                Live Competency Diagnostics
              </span>
              <h3 className="text-xl sm:text-2xl font-display-hex font-bold text-white mt-1">
                Organization-Wide Capability Heatmap
              </h3>
              <p className="text-xs font-enterprise text-emerald-200/70 mt-0.5">
                Aggregated simulation performance scores mapped against critical operational competencies.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-mono text-emerald-300/70 mr-1">Filter Department:</span>
              {[
                { id: 'all', label: 'All Teams' },
                { id: 'eng', label: 'Platform Eng' },
                { id: 'sre', label: 'SRE' },
                { id: 'product', label: 'Product' },
                { id: 'security', label: 'SecOps' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDept(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedDept === tab.id
                      ? 'bg-gradient-to-r from-[#004831] to-[#66BD29] text-white shadow-[0_0_12px_rgba(102,189,41,0.4)]'
                      : 'bg-[#00271a] text-emerald-200/70 hover:text-white border border-[#004831]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Heatmap Matrix */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#004831] text-[11px] font-mono text-emerald-300/80 uppercase tracking-wider">
                  <th className="py-3 px-4">Department / Cohort</th>
                  <th className="py-3 px-3 text-center">Little's Law</th>
                  <th className="py-3 px-3 text-center">Story Slicing</th>
                  <th className="py-3 px-3 text-center">CI/CD Gates</th>
                  <th className="py-3 px-3 text-center">Queue Triage</th>
                  <th className="py-3 px-3 text-center">Cost of Delay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#004831]/60 font-mono text-xs">
                {filteredHeatmap.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#00271a]/50 transition-colors">
                    <td className="py-3.5 px-4 font-enterprise font-semibold text-white">
                      {row.dept}
                    </td>
                    {row.skills.map((skill, sIdx) => (
                      <td key={sIdx} className="py-3 px-3 text-center">
                        <button
                          onClick={() => setActiveCellDetail({ dept: row.dept, skill: skill.name, score: skill.score, status: skill.status })}
                          className={`px-3 py-1 rounded-lg border text-xs font-bold transition-transform active:scale-95 cursor-pointer ${getScoreColor(skill.score)}`}
                        >
                          {skill.score}%
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend & Selected Cell Inspector */}
          <div className="mt-6 pt-4 border-t border-[#004831] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-4 text-emerald-300/70 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#66BD29]"></span>
                <span>90-100% Mastered</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#007A53]"></span>
                <span>80-89% Proficient</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-500/80"></span>
                <span>70-79% Competent</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-rose-500/80"></span>
                <span>&lt;70% Risk Blind Spot</span>
              </span>
            </div>

            {activeCellDetail ? (
              <div className="px-3 py-1.5 rounded-lg bg-[#003624] border border-[#66BD29]/40 text-emerald-100 flex items-center gap-2">
                <span>Selected: <strong>{activeCellDetail.dept}</strong> → {activeCellDetail.skill} ({activeCellDetail.score}%, {activeCellDetail.status})</span>
                <button onClick={() => setActiveCellDetail(null)} className="text-emerald-400 hover:text-white">✕</button>
              </div>
            ) : (
              <span className="text-emerald-300/60">Click any competency cell to inspect cohort breakdown</span>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
