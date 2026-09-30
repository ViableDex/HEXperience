import React from 'react';

interface HexLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const HexLogo: React.FC<HexLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-lg', badge: 'text-[9px] px-1.5 py-0.5' },
    md: { icon: 36, text: 'text-xl', badge: 'text-[10px] px-2 py-0.5' },
    lg: { icon: 48, text: 'text-2xl sm:text-3xl', badge: 'text-xs px-2.5 py-1' }
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer hover:opacity-95 transition-opacity' : ''} ${className}`}
    >
      {/* Hexagonal Glowing Icon Glyph */}
      <div className="relative flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_0_12px_rgba(102,189,41,0.5)] transition-transform duration-300 hover:rotate-12"
        >
          {/* Outer Hexagon with gradient border */}
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="url(#hexDarkGradient)"
            stroke="url(#hexGreenGradient)"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Hexagon */}
          <polygon
            points="50,22 76,36.5 76,63.5 50,78 24,63.5 24,36.5"
            fill="url(#hexAccentFill)"
            opacity="0.4"
          />

          {/* Central Prismatic Core 'H' Lattice */}
          <path
            d="M36 32V68M64 32V68M36 50H64"
            stroke="#66BD29"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />

          {/* Gradients */}
          <defs>
            <linearGradient id="hexDarkGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#003624" />
              <stop offset="1" stopColor="#05100B" />
            </linearGradient>
            <linearGradient id="hexGreenGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#004831" />
              <stop offset="0.5" stopColor="#007A53" />
              <stop offset="1" stopColor="#66BD29" />
            </linearGradient>
            <linearGradient id="hexAccentFill" x1="24" y1="22" x2="76" y2="78" gradientUnits="userSpaceOnUse">
              <stop stopColor="#004831" />
              <stop offset="1" stopColor="#66BD29" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Glow Aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#004831]/40 via-[#66BD29]/30 to-[#007A53]/30 blur-md pointer-events-none -z-10" />
      </div>

      {/* Brand Wordmark & Enterprise Pill */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-display-hex font-bold tracking-tight text-white ${currentSize.text}`}>
            HEX<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66BD29] via-[#86DA4D] to-[#A7F3D0]">perience</span>
          </span>
          <span className="inline-flex items-center gap-1 font-mono font-semibold tracking-wider uppercase rounded-full border border-[#66BD29]/40 bg-[#003624]/90 text-[#66BD29] shadow-[0_0_10px_rgba(102,189,41,0.25)] px-2 py-0.5 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#66BD29] animate-pulse"></span>
            Enterprise
          </span>
        </div>

        {showSubtitle && (
          <span className="font-enterprise text-[11px] font-medium tracking-wider text-slate-400 uppercase -mt-0.5">
            Simulation Learning Engine
          </span>
        )}
      </div>
    </div>
  );
};
