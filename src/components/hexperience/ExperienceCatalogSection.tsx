import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, ChevronRight, Layers, ExternalLink, ShieldCheck, Cpu, Terminal, Lock, Flame } from 'lucide-react';
import { SPRINT_TOLL_URL, CYBER_FLOOR_URL } from '../../constants/links';

export const ExperienceCatalogSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'live' | 'engineering' | 'security' | 'finops'>('all');
  const [activeRoadmapModal, setActiveRoadmapModal] = useState<any | null>(null);

  const roadmapItems = [
    {
      id: 'incident_horizon',
      title: 'Incident Horizon: Sev-1 Crisis Triage',
      domain: 'DevOps & Site Reliability Engineering',
      category: 'engineering',
      badge: 'Roadmap — Beta Q4 2026',
      description:
        'High-pressure simulation teaching cross-functional Sev-1 incident command, distributed observability triage, and transparent stakeholder communication.',
      targetRoles: ['SREs', 'DevOps Engineers', 'On-Call Leads', 'Infrastructure Architects'],
      completionTime: '7–12 min',
      proceduralSkills: [
        'Observability Metric Anomaly Triangulation',
        'Incident Commander Command Hierarchy',
        'Blast-Radius Containment & Canary Rollback',
        'Blameless Post-Mortem Forensic Reporting'
      ],
      scenariosCount: 4,
      kirkpatrickLevel: 'Level 4: -32% Mean Time to Resolution (MTTR)'
    },
    {
      id: 'finops_matrix',
      title: 'FinOps Matrix: Cloud Unit Economics',
      domain: 'Cloud Architecture & Financial Operations',
      category: 'finops',
      badge: 'Roadmap — Concept Stage',
      description:
        'Resource allocation puzzle game training engineering leads to balance high-speed cloud infrastructure delivery with architectural cost efficiency.',
      targetRoles: ['Cloud Architects', 'Engineering Directors', 'FinOps Practitioners'],
      completionTime: '8–15 min',
      proceduralSkills: [
        'Spot Instance vs. On-Demand Risk Balancing',
        'Data Egress Penalty Optimization',
        'Serverless Cold-Start vs. Always-On Provisioning',
        'Kubernetes Horizontal Pod Auto-Scaling Rightsizing'
      ],
      scenariosCount: 5,
      kirkpatrickLevel: 'Level 4: -24% Unbudgeted Cloud Overspend'
    }
  ];

  const showSprintToll = selectedFilter === 'all' || selectedFilter === 'live' || selectedFilter === 'engineering';
  const showCyberFloor = selectedFilter === 'all' || selectedFilter === 'live' || selectedFilter === 'security';

  const filteredRoadmap = roadmapItems.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'live') return false;
    return item.category === selectedFilter;
  });

  return (
    <section id="catalog" className="relative py-20 bg-[#05100B] border-b border-[#004831]/80 overflow-hidden w-full max-w-full">
      
      {/* Background Lighting in Huntington Forest Green */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[450px] bg-[#004831]/25 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#66BD29]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#004831]/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#66BD29]/40 bg-[#003624]/90 text-[#66BD29] text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(102,189,41,0.2)]">
              <Layers className="w-3.5 h-3.5 text-[#66BD29]" />
              Featured Interactive Simulations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hex font-bold text-white tracking-tight">
              The HEXperience{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">
                Catalog
              </span>
            </h2>
            <p className="text-base sm:text-lg text-emerald-100/80 font-enterprise">
              A continuously growing suite of high-fidelity, safe-to-fail simulations tailored to modern cross-functional enterprise capabilities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#00271a] border border-[#004831] overflow-x-auto shadow-sm max-w-full">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'live', label: '⚡ Playable Now (Live + Beta)' },
              { id: 'engineering', label: 'DevOps / SRE' },
              { id: 'security', label: 'Cybersecurity (Beta)' },
              { id: 'finops', label: 'Cloud FinOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-enterprise font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-gradient-to-r from-[#004831] to-[#66BD29] text-white shadow-[0_0_12px_rgba(102,189,41,0.4)]'
                    : 'text-emerald-200/70 hover:text-white hover:bg-[#003624]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Live Experiences Section */}
        <div className="mt-12 space-y-10">
          
          {/* =========================================================================
              EXPERIENCE 1: SPRINT TOLL: AGILE & LEAN FLOW SIMULATOR
              ========================================================================= */}
          {showSprintToll && (
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#071911] via-[#092218] to-[#003624] border-2 border-[#66BD29]/50 shadow-[0_0_40px_rgba(0,72,49,0.5)] relative overflow-hidden backdrop-blur-xl">
              
              {/* Ambient Background Gradient Corner */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#66BD29]/20 via-[#004831]/30 to-transparent blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Sprint Toll Description */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#66BD29] to-[#4EA31B] text-[#003624] shadow-[0_0_15px_rgba(102,189,41,0.35)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      Live Experience — Playable Now
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-[#66BD29] bg-[#003624] border border-[#66BD29]/40">
                      Systems &amp; Agile Delivery
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display-hex font-extrabold text-white">
                      Sprint Toll: Agile &amp; Lean Flow Simulator
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-emerald-100/90 font-enterprise leading-relaxed">
                      An interactive physical simulation where users operate a maritime toll plaza and ferry dock. Designed to make abstract Lean flow concepts—like <strong>Little's Law</strong>, <strong>batch size bottlenecks</strong>, and <strong>WIP limit constraints</strong>—immediately visceral and measurable.
                    </p>
                  </div>

                  {/* Simulated Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300/80">
                      Key Systems Dynamics Simulated:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-enterprise text-white">
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Little's Law ($L = \lambda W$) Queue Physics</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Vertical Story Slicing (13pt/21pt Epics)</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>E-ZPass RFID Gate Automation (CI/CD)</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Ferry Batch vs Continuous Flow Modes</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Link Button to Game */}
                  <div className="pt-4">
                    <a
                      href={SPRINT_TOLL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-7 py-4 rounded-xl font-enterprise font-bold text-base text-white bg-gradient-to-r from-[#004831] via-[#006747] to-[#66BD29] hover:from-[#00573b] hover:to-[#78BE20] shadow-[0_0_30px_rgba(102,189,41,0.4)] transition-all inline-flex items-center gap-3 cursor-pointer active:scale-98"
                    >
                      <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                      <span>Launch Sprint Toll</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

                {/* Right Column: Scenario Quick-Launch Deck */}
                <div className="lg:col-span-5 bg-[#00271a]/95 rounded-2xl border border-[#004831] p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#004831]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-100">
                      Featured Scenario Missions
                    </span>
                    <span className="text-xs font-mono text-[#66BD29]">Launch Game</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'black_friday_surge',
                        title: 'The Black Friday Surge',
                        concept: 'High-Volume Traffic & Queue Overflow Prevention',
                        color: 'text-amber-400'
                      },
                      {
                        id: 'monolith_refactoring',
                        title: 'Legacy Monolith Refactoring',
                        concept: 'Deconstruct Mega-Epics with Story Slicing',
                        color: 'text-[#66BD29]'
                      },
                      {
                        id: 'cicd_automation',
                        title: 'CI/CD Gate Telemetry',
                        concept: 'Deploy E-ZPass RFID & Zero-Friction Gates',
                        color: 'text-emerald-300'
                      },
                      {
                        id: 'wip_limits_crisis',
                        title: 'WIP Constraint Crisis',
                        concept: 'Defeat Multitasking Gridlock via Little\'s Law',
                        color: 'text-[#66BD29]'
                      },
                      {
                        id: 'startup_runway',
                        title: 'Runway & Daily Operating Dues',
                        concept: 'Financial Escrow & Cost of Delay Taxes',
                        color: 'text-amber-300'
                      }
                    ].map((scenario) => (
                      <a
                        key={scenario.id}
                        href={SPRINT_TOLL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#003624]/70 hover:bg-[#004831] border border-[#004831] hover:border-[#66BD29]/60 transition-all cursor-pointer flex items-center justify-between group block"
                      >
                        <div>
                          <div className={`text-xs font-mono font-bold ${scenario.color} group-hover:text-white transition-colors`}>
                            {scenario.title}
                          </div>
                          <div className="text-[11px] font-enterprise text-emerald-100/70 mt-0.5">
                            {scenario.concept}
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-[#00271a] group-hover:bg-[#66BD29] flex items-center justify-center text-emerald-300 group-hover:text-[#003624] transition-colors shrink-0">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] font-mono text-emerald-200/60">
                      Each scenario provides automated scoring &amp; post-mortem debriefs.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              EXPERIENCE 2: CYBERFLOOR - SECURITY OPERATIONS (NEW EXPERIENCE)
              ========================================================================= */}
          {showCyberFloor && (
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#071911] via-[#08261a] to-[#003624] border-2 border-[#66BD29]/60 shadow-[0_0_40px_rgba(102,189,41,0.25)] relative overflow-hidden backdrop-blur-xl">
              
              {/* Ambient Background Gradient Corner */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#66BD29]/25 via-[#004831]/40 to-transparent blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: CyberFloor Description */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.35)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      Beta Simulation — Playable Now
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-950/80 border border-amber-500/40 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      Enterprise Security Operations (Beta)
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl sm:text-4xl font-display-hex font-extrabold text-white">
                        CyberFloor - Security Operations
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/50">
                        Beta
                      </span>
                    </div>
                    <p className="mt-2 text-base sm:text-lg text-emerald-100/90 font-enterprise leading-relaxed">
                      A high-fidelity tactile SOC floor simulation where cyber defenders, engineers, and leadership triage live attack vectors, air-gap compromised network nodes, defuse credential harvesting, and master <strong>Zero-Trust architecture</strong> under active simulated breach conditions.
                    </p>
                  </div>

                  {/* Simulated Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300/80">
                      Key SecOps Capabilities Simulated:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-enterprise text-white">
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Real-Time SOC Threat Triage &amp; Incident Command</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Zero Trust Lateral Movement Defense</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Blast-Radius Isolation &amp; Node Air-Gapping</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a]/90 border border-[#004831]">
                        <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                        <span>Phishing, Spoofing &amp; Social Engineering Neutralization</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Link Button to Game */}
                  <div className="pt-4">
                    <a
                      href={CYBER_FLOOR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-7 py-4 rounded-xl font-enterprise font-bold text-base text-white bg-gradient-to-r from-[#004831] via-[#006747] to-[#66BD29] hover:from-[#00573b] hover:to-[#78BE20] shadow-[0_0_30px_rgba(102,189,41,0.4)] transition-all inline-flex items-center gap-3 cursor-pointer active:scale-98"
                    >
                      <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                      <span>Launch CyberFloor - Security Operations</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-black/40 text-amber-300 border border-amber-500/40 font-mono">
                        Beta
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

                {/* Right Column: SecOps Incident Response Missions */}
                <div className="lg:col-span-5 bg-[#00271a]/95 rounded-2xl border border-[#004831] p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#004831]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#66BD29]" />
                      Beta Incident Missions
                    </span>
                    <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">Beta Access</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'ransomware_quarantine',
                        title: 'Active Ransomware Containment',
                        concept: 'Air-Gap Infected Subnets & Prevent File Encryption',
                        color: 'text-rose-400'
                      },
                      {
                        id: 'credential_stuffing',
                        title: 'MFA Fatigue & Credential Stuffing',
                        concept: 'Defuse High-Velocity Session Takeover Exploits',
                        color: 'text-amber-400'
                      },
                      {
                        id: 'supply_chain',
                        title: 'Supply-Chain Dependency Poisoning',
                        concept: 'Trace Vulnerable Packages & Enforce Provenance',
                        color: 'text-[#66BD29]'
                      },
                      {
                        id: 'privilege_escalation',
                        title: 'Insider Threat & Privilege Escalation',
                        concept: 'Revoke Unsanctioned Sudo Roles via Zero Trust',
                        color: 'text-emerald-300'
                      },
                      {
                        id: 'soc_forensics',
                        title: 'Blameless SOC Forensic Reporting',
                        concept: 'Reconstruct Audit Logs & Kirkpatrick ROI Metrics',
                        color: 'text-[#66BD29]'
                      }
                    ].map((scenario) => (
                      <a
                        key={scenario.id}
                        href={CYBER_FLOOR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#003624]/70 hover:bg-[#004831] border border-[#004831] hover:border-[#66BD29]/60 transition-all cursor-pointer flex items-center justify-between group block"
                      >
                        <div>
                          <div className={`text-xs font-mono font-bold ${scenario.color} group-hover:text-white transition-colors`}>
                            {scenario.title}
                          </div>
                          <div className="text-[11px] font-enterprise text-emerald-100/70 mt-0.5">
                            {scenario.concept}
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-[#00271a] group-hover:bg-[#66BD29] flex items-center justify-center text-emerald-300 group-hover:text-[#003624] transition-colors shrink-0">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] font-mono text-emerald-200/60">
                      Live Kirkpatrick Level 4 target: -76% susceptibility to cyber breach vectors.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ROADMAP CARDS GRID */}
          {filteredRoadmap.length > 0 && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300/80 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-[#66BD29]" />
                <span>Upcoming Enterprise Modules on Product Roadmap</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRoadmap.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveRoadmapModal(item)}
                    className="p-6 rounded-2xl bg-[#071911]/80 border border-[#004831] hover:border-[#66BD29]/60 hover:bg-[#092218] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#003624] text-emerald-200 border border-[#004831]">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-[#66BD29]">{item.completionTime}</span>
                      </div>

                      <div>
                        <span className="text-xs font-mono text-[#66BD29] uppercase tracking-wider block">
                          {item.domain}
                        </span>
                        <h4 className="text-xl font-display-hex font-bold text-white mt-1 group-hover:text-[#66BD29] transition-colors">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-xs font-enterprise text-emerald-100/70 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#004831]">
                        <span className="text-[10px] font-mono text-emerald-300/80 uppercase">Core Competencies:</span>
                        <ul className="space-y-1">
                          {item.proceduralSkills.slice(0, 3).map((skill, sIdx) => (
                            <li key={sIdx} className="text-xs font-enterprise text-emerald-100/90 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#66BD29]"></span>
                              <span className="truncate">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#004831] flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-300/60">View Architecture</span>
                      <span className="text-[#66BD29] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Inspect</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Roadmap Detail Modal */}
      {activeRoadmapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#071911] border border-[#66BD29]/60 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#003624] text-[#66BD29] border border-[#66BD29]/40">
                  {activeRoadmapModal.badge}
                </span>
                <h3 className="text-2xl font-display-hex font-bold text-white mt-2">
                  {activeRoadmapModal.title}
                </h3>
                <span className="text-xs font-mono text-emerald-300/80 block mt-1">
                  Domain: {activeRoadmapModal.domain}
                </span>
              </div>
              <button
                onClick={() => setActiveRoadmapModal(null)}
                className="p-1 rounded-lg text-emerald-300 hover:text-white hover:bg-[#003624]"
              >
                ✕
              </button>
            </div>

            <p className="text-sm font-enterprise text-emerald-100/90 leading-relaxed">
              {activeRoadmapModal.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300/80">
                Procedural Learning Objectives:
              </h4>
              <div className="space-y-2">
                {activeRoadmapModal.proceduralSkills.map((skill: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#00271a] border border-[#004831] text-xs font-enterprise text-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-[#66BD29] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#003624] border border-[#66BD29]/30 text-xs font-mono text-[#66BD29]">
              Kirkpatrick ROI Target: {activeRoadmapModal.kirkpatrickLevel}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveRoadmapModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-enterprise text-emerald-200 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
