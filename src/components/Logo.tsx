import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  format?: 'horizontal' | 'full' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  format = 'horizontal',
  size = 'md',
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light';

  // Primary text color: Forest Green on light bg, Pure White on dark bg
  const textColor = isLight ? '#ffffff' : '#1a382d';
  const subtextColor = isLight ? '#d4dfdb' : '#234438';

  // Scale map
  const scaleMap = {
    sm: { height: 32, emblemWidth: 58 },
    md: { height: 42, emblemWidth: 76 },
    lg: { height: 56, emblemWidth: 100 },
    xl: { height: 96, emblemWidth: 160 },
  };

  const { height, emblemWidth } = scaleMap[size] || scaleMap.md;

  // Render the distinctive Monogram (SSA with Golden Swoosh)
  const renderMonogram = (w: number, h: number) => (
    <svg
      viewBox="0 0 240 130"
      width={w}
      height={h}
      className="overflow-visible flex-shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`goldGrad-${variant}-${size}`} x1="0%" y1="80%" x2="100%" y2="20%">
          <stop offset="0%" stopColor="#a37b37" />
          <stop offset="25%" stopColor="#c59e5f" />
          <stop offset="55%" stopColor="#eed09b" />
          <stop offset="80%" stopColor="#c59e5f" />
          <stop offset="100%" stopColor="#a67f3b" />
        </linearGradient>
      </defs>

      {/* Intertwined SSA Letterforms */}
      <g
        fontFamily="'Cormorant Garamond', 'Didot', 'Bodoni MT', Georgia, serif"
        fontSize="120"
        fontWeight="500"
        fill={textColor}
      >
        {/* First S */}
        <text x="56" y="102" textAnchor="middle">S</text>
        {/* Second S (cascades closely behind) */}
        <text x="114" y="102" textAnchor="middle">S</text>
        {/* Letter A */}
        <text x="180" y="102" textAnchor="middle">A</text>
      </g>

      {/* Signature Golden Ribbon Swoosh that arches through the S's and forms the A's crossbar */}
      <path
        d="M 64 108 C 78 103, 93 92, 112 77 C 132 62, 152 56, 175 60 C 190 63, 206 69, 222 79 C 212 73, 198 67, 184 64 C 163 60, 145 66, 127 79 C 108 93, 91 104, 64 108 Z"
        fill={`url(#goldGrad-${variant}-${size})`}
      />
    </svg>
  );

  if (format === 'mark-only') {
    return (
      <div
        id="site-logo"
        onClick={onClick}
        className={`inline-flex items-center select-none cursor-pointer ${className}`}
        title="SSA Family Holdings"
      >
        {renderMonogram(emblemWidth, height)}
      </div>
    );
  }

  if (format === 'full') {
    return (
      <div
        id="site-logo"
        onClick={onClick}
        className={`flex flex-col items-center select-none cursor-pointer text-center group ${className}`}
      >
        {/* Monogram */}
        <div className="transition-transform duration-300 group-hover:scale-[1.02]">
          {renderMonogram(emblemWidth * 1.5, height * 1.5)}
        </div>

        {/* FAMILY HOLDINGS */}
        <span
          className="mt-3 font-serif uppercase tracking-[0.38em] font-medium text-center transition-colors"
          style={{ color: textColor, fontSize: size === 'xl' ? '28px' : '18px' }}
        >
          Family Holdings
        </span>

        {/* Centered Gold Bar */}
        <div
          className="h-[1.5px] my-3"
          style={{
            width: size === 'xl' ? '64px' : '44px',
            background: 'linear-gradient(90deg, #a67f3b 0%, #dcc18b 50%, #a67f3b 100%)',
          }}
        />

        {/* Tagline */}
        <span
          className="text-[10px] sm:text-xs tracking-[0.28em] font-normal uppercase"
          style={{ color: subtextColor }}
        >
          Long-Term Capital. Enduring Value.
        </span>
      </div>
    );
  }

  // Horizontal Format (Default for Navbar & Standard Headers)
  return (
    <div
      id="site-logo"
      onClick={onClick}
      className={`flex items-center gap-3 sm:gap-3.5 select-none cursor-pointer group ${className}`}
    >
      {/* SSA Monogram with Golden Swoosh */}
      <div className="transition-transform duration-300 group-hover:scale-[1.03]">
        {renderMonogram(emblemWidth, height)}
      </div>

      {/* Vertical subtle gold or muted divider */}
      <div
        className="w-[1px] h-7 sm:h-8 self-center opacity-40 transition-opacity group-hover:opacity-70"
        style={{
          background: isLight
            ? 'linear-gradient(180deg, transparent, #e2c68e, transparent)'
            : 'linear-gradient(180deg, transparent, #c59e5f, transparent)',
        }}
      />

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className="font-serif text-base sm:text-lg lg:text-xl font-medium tracking-[0.14em] uppercase transition-colors leading-none"
          style={{ color: textColor }}
        >
          SSA Family Holdings
        </span>
        <span
          className="text-[9px] sm:text-[10px] tracking-[0.24em] font-light uppercase mt-1 transition-colors"
          style={{ color: isLight ? '#d2ded8' : '#345749' }}
        >
          Long-Term Capital | Enduring Value
        </span>
      </div>
    </div>
  );
};
