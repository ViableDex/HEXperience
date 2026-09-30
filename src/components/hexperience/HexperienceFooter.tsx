import React, { useState } from 'react';
import { HexLogo } from './HexLogo';
import { Send, Check, ExternalLink } from 'lucide-react';
import { SPRINT_TOLL_URL, CYBER_FLOOR_URL } from '../../constants/links';

export const HexperienceFooter: React.FC = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackText('');
      setFeedbackSent(false);
    }, 3500);
  };

  return (
    <footer className="bg-[#030906] border-t border-[#004831] pt-16 pb-12 text-emerald-200/70 font-enterprise relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#004831]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#004831]/70">
          
          {/* Brand Info & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <HexLogo size="md" showSubtitle={true} />
            <p className="text-xs text-emerald-200/80 leading-relaxed max-w-sm pt-2">
              HEXperience is the enterprise interactive learning platform that transforms mandatory slide decks and passive video compliance into active, safe-to-fail simulations and serious games.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-emerald-300/80">
              <span className="px-2 py-0.5 rounded bg-[#00271a] border border-[#004831] text-[#66BD29]">
                v1.0.0-enterprise
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#66BD29]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#66BD29]"></span>
                Systems Operational
              </span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Platform Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalog" className="hover:text-[#66BD29] transition-colors">
                  Experience Catalog &amp; Prototypes
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-[#66BD29] transition-colors">
                  The Science &amp; Meta-Analysis
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-[#66BD29] transition-colors">
                  The Cost of Amnesia
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[#66BD29] transition-colors">
                  Universal Simulation Pillars
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-[#66BD29] transition-colors">
                  Kirkpatrick Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Prototype Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Featured Simulations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={SPRINT_TOLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#66BD29] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Sprint Toll: Flow Simulator</span>
                  <span className="px-1 text-[9px] rounded bg-[#004831] text-[#66BD29] border border-[#66BD29]/40">LIVE</span>
                  <ExternalLink className="w-3 h-3 text-[#66BD29]" />
                </a>
              </li>
              <li>
                <a
                  href={CYBER_FLOOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#66BD29] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>CyberFloor - Security Operations</span>
                  <span className="px-1 text-[9px] rounded bg-[#004831] text-[#66BD29] border border-[#66BD29]/40">LIVE</span>
                  <ExternalLink className="w-3 h-3 text-[#66BD29]" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#66BD29] transition-colors">
                  Little's Law Physics Engine
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#66BD29] transition-colors">
                  SOC Triage &amp; Zero Trust
                </a>
              </li>
            </ul>
          </div>

          {/* Evaluator Instant Feedback */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Enterprise Evaluation &amp; Feedback
            </h4>
            <p className="text-xs text-emerald-200/70">
              Have feedback or architectural questions? Transmit directly to the development team:
            </p>
            {feedbackSent ? (
              <div className="p-3 rounded-lg bg-[#003624] border border-[#66BD29]/60 text-[#66BD29] text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-[#66BD29]" />
                <span>Feedback transmitted to architecture team!</span>
              </div>
            ) : (
              <form onSubmit={handleSendFeedback} className="space-y-2">
                <input
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Feedback or architectural note..."
                  className="w-full px-3 py-2 rounded-lg bg-[#00271a] border border-[#004831] text-xs text-white placeholder-emerald-400/50 focus:outline-none focus:border-[#66BD29] font-mono"
                />
                <button
                  type="submit"
                  disabled={!feedbackText.trim()}
                  className="w-full py-1.5 rounded-lg bg-[#004831] hover:bg-[#006747] border border-[#66BD29]/60 disabled:opacity-50 text-xs font-mono text-[#66BD29] hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Transmit Note</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-emerald-300/60">
          <div>
            &copy; {new Date().getFullYear()} HEXperience Inc. Enterprise Learning Engine. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered by</span>
            <span className="font-bold text-emerald-100">HEXperience Architecture Team</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
