import React from 'react';

interface LogoProps {
  logoType: string;
  className?: string;
}

export const PortfolioLogo: React.FC<LogoProps> = ({ logoType, className = 'w-full h-full' }) => {
  switch (logoType) {
    case 'thb':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <rect x="0" y="2" width="20" height="20" rx="3" fill="#10241d" />
            <path d="M5 12H15M10 7V17" stroke="#c59e5f" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text
            x="36"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            THB
          </text>
        </svg>
      );

    case 'flam':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="10" fill="#1a382d" />
            <circle cx="12" cy="12" r="4" fill="#c59e5f" />
            <circle cx="17" cy="7" r="2" fill="#dcc18b" />
          </g>
          <text
            x="38"
            y="27"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="-0.04em"
            fill="currentColor"
          >
            flam
          </text>
        </svg>
      );

    case 'nse':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="2" y="2" width="24" height="24" rx="2" fill="#1a382d" />
            <path d="M7 21V7L15 21V7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 14H22" stroke="#c59e5f" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text
            x="40"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="0.12em"
            fill="currentColor"
          >
            NSE
          </text>
        </svg>
      );

    case 'truly-madly':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 9)">
            <path
              d="M10 18L8.5 16.5C3.5 12 0 9 0 5C0 2 2 0 5 0C6.8 0 8.5 1 9.5 2.5C10.5 1 12.2 0 14 0C17 0 19 2 19 5C19 9 15.5 12 10.5 16.5L10 18Z"
              fill="#c59e5f"
            />
          </g>
          <text
            x="32"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="17"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            TrulyMadly
          </text>
        </svg>
      );

    case 'faarms':
      return (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M10 2C5 6 2 12 2 18H18C18 12 15 6 10 2Z" fill="#1a382d" />
            <path d="M10 8V18" stroke="#c59e5f" strokeWidth="2" />
          </g>
          <text
            x="34"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="20"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            FAARMS
          </text>
        </svg>
      );

    case 'celsius':
      return (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 7)">
            <circle cx="12" cy="13" r="10" stroke="#f97316" strokeWidth="2.5" fill="none" />
            <path d="M12 6L14 13L20 15" stroke="#1a382d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="36"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            CELSIUS
          </text>
        </svg>
      );

    case 'uptime-ai':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <circle cx="12" cy="12" r="10" fill="#10241d" />
            <path d="M7 14L11 9L14 13L17 8" stroke="#c59e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="17"
            letterSpacing="-0.01em"
            fill="currentColor"
          >
            UptimeAI
          </text>
        </svg>
      );

    case 'giva':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 9)">
            <polygon points="10,0 20,8 10,22 0,8" stroke="#c59e5f" strokeWidth="1.5" fill="#fdfcf9" />
            <polygon points="10,4 16,9 10,18 4,9" fill="#1a382d" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="Georgia, serif"
            fontWeight="700"
            fontSize="22"
            letterSpacing="0.16em"
            fill="currentColor"
          >
            GIVA
          </text>
        </svg>
      );

    case 'wint-wealth':
      return (
        <svg viewBox="0 0 165 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <rect x="1" y="1" width="22" height="22" rx="3" fill="#1a382d" />
            <path d="M6 8L10 16L13 11L16 16L20 8" stroke="#c59e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="17"
            letterSpacing="-0.03em"
            fill="currentColor"
          >
            Wint Wealth
          </text>
        </svg>
      );

    case 'seafund':
      return (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <circle cx="12" cy="12" r="10" fill="#1a382d" />
            <path d="M4 14C8 12 16 12 20 14M6 17C9 15 15 15 18 17" stroke="#c59e5f" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <text
            x="35"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            SEAFUND
          </text>
        </svg>
      );

    case 'wigzo':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="10" fill="#ff5722" />
            <text x="12" y="16" textAnchor="middle" fill="white" fontWeight="900" fontSize="13">W</text>
          </g>
          <text
            x="36"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="19"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            wigzo
          </text>
        </svg>
      );

    case 'finsall':
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#0052cc" />
            <path d="M7 7H17M7 12H14M7 17H11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text
            x="36"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="18"
            letterSpacing="-0.01em"
            fill="currentColor"
          >
            Finsall
          </text>
        </svg>
      );

    case 'redwing':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M2 18L12 4L22 18L12 14L2 18Z" fill="#e53935" />
            <path d="M12 4V14" stroke="#ffffff" strokeWidth="1.5" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            Redwing
          </text>
        </svg>
      );

    case 'genrobotics':
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#10241d" />
            <circle cx="9" cy="9" r="2" fill="#c59e5f" />
            <circle cx="15" cy="9" r="2" fill="#c59e5f" />
            <line x1="8" y1="16" x2="16" y2="16" stroke="#c59e5f" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            Genrobotics
          </text>
        </svg>
      );

    case 'calligo':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <circle cx="12" cy="12" r="10" stroke="#1a382d" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="5" fill="#c59e5f" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            Calligo Tech
          </text>
        </svg>
      );

    case 'takeme2space':
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 7)">
            <ellipse cx="12" cy="13" rx="10" ry="4" stroke="#c59e5f" strokeWidth="1.5" fill="none" transform="rotate(-30 12 13)" />
            <circle cx="12" cy="13" r="4" fill="#1a382d" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="15"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            TakeMe2Space
          </text>
        </svg>
      );

    case 'rpsg':
      return (
        <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <rect x="0" y="2" width="22" height="20" fill="#1a382d" />
            <text x="11" y="16" textAnchor="middle" fill="#c59e5f" fontWeight="900" fontSize="10">RP</text>
          </g>
          <text
            x="34"
            y="23"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="14"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            RPSG Ventures
          </text>
        </svg>
      );

    case 'stride':
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M4 20L12 4L18 12L22 4" stroke="#c59e5f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            STRIDE
          </text>
        </svg>
      );

    case 'fbc':
      return (
        <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#10241d" />
            <text x="12" y="16" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="11">FBC</text>
          </g>
          <text
            x="34"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="14"
            letterSpacing="-0.01em"
            fill="currentColor"
          >
            FBC Venture Partners
          </text>
        </svg>
      );

    case 'gemba':
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <circle cx="12" cy="12" r="10" fill="#1a382d" />
            <polygon points="12,6 18,15 6,15" fill="#c59e5f" />
          </g>
          <text
            x="34"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            GEMBA
          </text>
        </svg>
      );

    default:
      return (
        <div className="flex items-center justify-center font-bold text-sm tracking-wider uppercase">
          {logoType}
        </div>
      );
  }
};
