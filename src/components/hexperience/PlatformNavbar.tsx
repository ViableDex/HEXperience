import React, { useState, useEffect } from 'react';
import { HexLogo } from './HexLogo';
import { Play, Menu, X, ArrowRight } from 'lucide-react';

interface PlatformNavbarProps {
  onLaunchSprintToll: () => void;
}

export const PlatformNavbar: React.FC<PlatformNavbarProps> = ({
  onLaunchSprintToll
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience Catalog', href: '#catalog' },
    { name: 'The Science & ROI', href: '#science' },
    { name: 'Cost of Amnesia', href: '#problem' },
    { name: 'Platform Pillars', href: '#pillars' },
    { name: 'Leadership Telemetry', href: '#telemetry' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05100B]/95 backdrop-blur-md border-b border-[#004831]/80 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity in Huntington Bank Green */}
          <div className="flex items-center gap-6">
            <HexLogo size="md" showSubtitle={true} />
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#004831] text-xs font-mono text-emerald-200/70">
              <span className="w-2 h-2 rounded-full bg-[#66BD29] animate-pulse"></span>
              <span>Huntington Bank Themed Engine</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-emerald-100/80 hover:text-white rounded-lg hover:bg-[#003624]/60 hover:text-[#66BD29] transition-colors font-enterprise"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary Launch CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onLaunchSprintToll}
              className="relative group overflow-hidden rounded-xl p-[1.5px] font-semibold text-sm cursor-pointer shadow-[0_0_25px_rgba(102,189,41,0.35)] hover:shadow-[0_0_35px_rgba(102,189,41,0.55)] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#004831] via-[#007A53] to-[#66BD29] transition-all duration-300 group-hover:scale-105" />
              <div className="relative px-4 py-2.5 bg-[#07150F] rounded-[10px] flex items-center gap-2 text-white group-hover:bg-[#00271a] transition-colors">
                <Play className="w-4 h-4 fill-[#66BD29] text-[#66BD29] group-hover:translate-x-0.5 transition-transform" />
                <span className="font-enterprise font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#66BD29]">
                  Launch Sprint Toll
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#004831]/80 text-[#66BD29] border border-[#66BD29]/40 font-mono">
                  Live
                </span>
                <ArrowRight className="w-4 h-4 text-[#66BD29] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onLaunchSprintToll}
              className="px-3 py-1.5 rounded-lg bg-[#004831] border border-[#66BD29] text-white text-xs font-semibold flex items-center gap-1 shadow-sm"
            >
              <Play className="w-3 h-3 fill-current text-[#66BD29]" />
              Sprint Toll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-200 hover:text-white rounded-lg hover:bg-[#003624]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#05100B]/98 border-b border-[#004831] px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 text-base font-medium text-emerald-100/90 hover:text-[#66BD29] rounded-lg hover:bg-[#003624]/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#004831] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchSprintToll();
              }}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#004831] to-[#66BD29] shadow-[0_0_20px_rgba(102,189,41,0.35)] flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              Launch Featured Experience: Sprint Toll
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
