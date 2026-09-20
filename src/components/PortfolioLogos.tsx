import React from 'react';

interface LogoProps {
  logoType: string;
  className?: string;
}

export const PortfolioLogo: React.FC<LogoProps> = ({ logoType, className = 'w-full h-full' }) => {
  switch (logoType) {
    // =========================================================================
    // 1. UNICORNS & GROWTH LEADERS
    // =========================================================================
    case 'zepto':
      return (
        <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="160" height="50" rx="10" fill="url(#zepto-grad)" />
          <defs>
            <linearGradient id="zepto-grad" x1="0" y1="0" x2="160" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3d0347" />
              <stop offset="1" stopColor="#751147" />
            </linearGradient>
          </defs>
          <text
            x="80"
            y="33"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="-0.03em"
            fill="#ff5c6a"
          >
            zepto
          </text>
        </svg>
      );

    case 'spinny':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="3" y="3" width="26" height="26" rx="6" transform="rotate(45 16 16)" fill="#e53935" />
            <path
              d="M19 10C15 9.5 12 11.5 12 14.5C12 17.5 15 18 17 19C19 20 20 21 20 22.5C20 24.5 17.5 25.5 14 25"
              stroke="#ffffff"
              strokeWidth="2.75"
              strokeLinecap="round"
            />
          </g>
          <text
            x="48"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="-0.04em"
            fill="#e53935"
          >
            spinny
          </text>
        </svg>
      );

    case 'ather-energy':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <path d="M14 2L2 26H12L10 14L22 26H16L14 2Z" fill="#10241d" />
            <circle cx="21" cy="6" r="3" fill="#00d084" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="0.12em"
            fill="currentColor"
          >
            ATHER
          </text>
        </svg>
      );

    case 'ola-electric':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="10"
            y="30"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            OLA
          </text>
          <rect x="94" y="10" width="1.5" height="24" fill="#c59e5f" />
          <text
            x="104"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="12"
            letterSpacing="0.22em"
            fill="#10241d"
          >
            ELECTRIC
          </text>
        </svg>
      );

    case 'bluestone':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <polygon points="14,2 26,14 14,26 2,14" fill="#10241d" />
            <polygon points="14,6 22,14 14,22 6,14" fill="#ffffff" />
            <polygon points="14,10 18,14 14,18 10,14" fill="#c59e5f" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="Georgia, serif"
            fontWeight="700"
            fontSize="19"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            BlueStone
          </text>
        </svg>
      );

    case 'infra-market':
      return (
        <svg viewBox="0 0 180 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="6"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="0.02em"
            fill="#ea580c"
          >
            INFRA.MARKET
          </text>
          <text
            x="7"
            y="38"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="7.5"
            letterSpacing="0.24em"
            fill="#222222"
          >
            A BUILDING MATERIALS PLATFORM
          </text>
        </svg>
      );

    case 'pharmeasy':
      return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 10)">
            <path
              d="M10 2C5.5 2 2 5.5 2 10C2 14.5 5.5 18 10 18H16C19.5 18 22 15.5 22 12C22 8.5 19.5 6 16 6"
              stroke="#0d9488"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M7 10H13M10 7V13" stroke="#0d9488" strokeWidth="2.2" strokeLinecap="round" />
          </g>
          <g transform="translate(34, 0)">
            <text
              x="0"
              y="15"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontStyle="italic"
              fontWeight="600"
              fontSize="9"
              fill="#0d9488"
            >
              Take it easy
            </text>
            <text
              x="0"
              y="32"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="20"
              letterSpacing="-0.02em"
              fill="#0d9488"
            >
              PharmEasy
            </text>
          </g>
        </svg>
      );

    case 'slice':
      return (
        <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="4" y="4" width="152" height="40" rx="10" fill="#a8008a" />
          <text
            x="80"
            y="31"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="25"
            letterSpacing="-0.04em"
            fill="#ffffff"
          >
            slice
          </text>
        </svg>
      );

    case 'upstox':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 12)">
            <path d="M4 14V4L12 4M12 4L4 12" stroke="#5b21b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="32"
            y="29"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="-0.03em"
            fill="#5b21b6"
          >
            upstox
          </text>
        </svg>
      );

    case 'zetwerk':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 9)">
            <circle cx="12" cy="13" r="9" stroke="#10241d" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="13" r="9" stroke="#10241d" strokeWidth="2.5" fill="none" />
          </g>
          <text
            x="42"
            y="29"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="19"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            ZETWERK
          </text>
        </svg>
      );

    // =========================================================================
    // 2. CONSUMER & D2C BRANDS
    // =========================================================================
    case 'giva':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="80"
            y="32"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="0.28em"
            fill="currentColor"
          >
            GIVA
          </text>
        </svg>
      );

    case 'mcaffeine':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="16" cy="16" r="14" stroke="#0d9488" strokeWidth="2" fill="none" />
            <path
              d="M14 9C15 13 18 15 21 16C19 19 16 21 15 25H11C12 21 12 18 10 16C9 14 9 12 11 10Z"
              fill="#0d9488"
            />
          </g>
          <text
            x="46"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="19"
            letterSpacing="-0.02em"
            fill="#0d9488"
          >
            mCaffeine
          </text>
        </svg>
      );

    case 'the-souled-store':
      return (
        <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path
              d="M12 2C6 2 2 6 2 12V24L5 22L8 24L11 22L14 24L17 22L20 24L22 22V12C22 6 18 2 12 2Z"
              stroke="#ef4444"
              strokeWidth="2.2"
              fill="none"
            />
            <circle cx="8" cy="10" r="1.5" fill="#ef4444" />
            <circle cx="16" cy="10" r="1.5" fill="#ef4444" />
          </g>
          <text
            x="36"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="14"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            THE SOULED STORE
          </text>
        </svg>
      );

    case 'supertails':
      return (
        <svg viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(4, 8)">
            <path
              d="M6 10L9 16H22V24H19V20H15V24H12V17H8L5 12Z"
              fill="#84cc16"
            />
            <path d="M4 6L6 10L2 12Z" fill="#111827" />
          </g>
          <text
            x="32"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="-0.02em"
            fill="#111827"
          >
            supertails<tspan fill="#84cc16">.com</tspan>
          </text>
          <text
            x="33"
            y="37"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="8"
            letterSpacing="0.16em"
            fill="#222222"
          >
            YOUR PET'S SUPER STORE
          </text>
        </svg>
      );

    case 'perfora':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="80"
            y="30"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="26"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            perfora
          </text>
        </svg>
      );

    case 'plix':
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <rect x="2" y="2" width="24" height="24" rx="7" fill="#4ade80" />
            <path d="M10 21V10H16C18.2 10 20 11.8 20 14C20 16.2 18.2 18 16 18H10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text
            x="42"
            y="29"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="-0.03em"
            fill="currentColor"
          >
            plix
          </text>
        </svg>
      );

    case 'true-elements':
      return (
        <svg viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="170" height="48" rx="8" fill="#111111" />
          <text
            x="85"
            y="24"
            textAnchor="middle"
            fontFamily="Brush Script MT, cursive, serif"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="20"
            fill="#ffffff"
          >
            True
          </text>
          <text
            x="85"
            y="40"
            textAnchor="middle"
            fontFamily="Brush Script MT, cursive, serif"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="17"
            fill="#ffffff"
          >
            Elements®
          </text>
        </svg>
      );

    case 'vedix':
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="75"
            y="30"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="28"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            vēdix™
          </text>
        </svg>
      );

    case 'nutrabay':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="#0284c7" />
            <path d="M10 24V8L22 24V8" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="0.04em"
            fill="#0284c7"
          >
            NUTRABAY
          </text>
        </svg>
      );

    case 'miraggio':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="2" y="2" width="28" height="28" fill="#111111" />
            <text x="16" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#ffffff">
              M
            </text>
          </g>
          <text
            x="44"
            y="27"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            MIRAGGIO
          </text>
        </svg>
      );

    case 'mydesignation':
      return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="90"
            y="28"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="17"
            letterSpacing="0.1em"
            fill="currentColor"
          >
            MYDESIGNATION
          </text>
        </svg>
      );

    // =========================================================================
    // 3. DIRECT VENTURE & ANGEL INVESTMENTS
    // =========================================================================
    case 'kuku-fm':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 6)">
            <text x="10" y="28" fontFamily="Georgia, serif" fontWeight="900" fontSize="32" fill="#222222">
              k
            </text>
            <circle cx="24" cy="25" r="4.5" fill="#ef4444" />
          </g>
          <text
            x="48"
            y="27"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            Kuku FM
          </text>
        </svg>
      );

    case 'procol':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 10)">
            <circle cx="12" cy="7" r="7" fill="#ef4444" />
            <circle cx="7" cy="15" r="7" fill="#f59e0b" />
            <circle cx="17" cy="15" r="7" fill="#3b82f6" />
          </g>
          <text
            x="42"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.03em"
            fill="currentColor"
          >
            procol
          </text>
        </svg>
      );

    case 'rooter':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 10)">
            <path d="M4 12C4 7 8 3 13 3C18 3 22 7 22 12C22 17 26 21 31 21C36 21 40 17 40 12" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M4 12C4 17 8 21 13 21C18 21 22 17 22 12C22 7 26 3 31 3C36 3 40 7 40 12" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
          <text
            x="58"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="20"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            rooter
          </text>
        </svg>
      );

    case 'wint-wealth':
      return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M2 24L8 6H14L8 24H2Z" fill="#16a34a" />
            <path d="M12 24L18 6H24L18 24H12Z" fill="#16a34a" />
            <path d="M22 24L28 6H34L28 24H22Z" fill="#16a34a" />
          </g>
          <text
            x="48"
            y="27"
            fontFamily="Georgia, serif"
            fontWeight="900"
            fontSize="23"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            wint
          </text>
        </svg>
      );

    case 'zippee':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M2 14L14 4L26 14V24H2V14Z" fill="#222222" />
            <path d="M6 14H12V20H6V14Z" fill="#ffffff" />
          </g>
          <text
            x="42"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="-0.03em"
            fill="currentColor"
          >
            Zippee®
          </text>
        </svg>
      );

    case 'grip-invest':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="156" height="40" rx="8" fill="#03256c" />
          <g transform="translate(38, 0)">
            <text
              x="30"
              y="28"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="24"
              letterSpacing="0.04em"
              fill="#ffffff"
            >
              GR<tspan fill="#06b6d4">I</tspan>P
            </text>
            <polygon points="31,7 35,13 27,13" fill="#06b6d4" />
          </g>
        </svg>
      );

    case 'myhq':
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="16" cy="16" r="14" fill="#1e40af" />
            <path d="M12 22V10L16 11L18 10C20 10 21 11 21 12V16C21 17 20 18 18 18L16 17L12 18" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="-0.02em"
            fill="#1e40af"
          >
            myHQ
          </text>
        </svg>
      );

    case 'navadhan':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 0)">
            <polygon points="40,5 56,15 32,15" fill="#0284c7" />
            <polygon points="48,5 64,15 40,15" fill="#06b6d4" />
            <text
              x="0"
              y="32"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="24"
              letterSpacing="-0.02em"
              fill="#1d4ed8"
            >
              Navadhan®
            </text>
          </g>
        </svg>
      );

    case 'plum':
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="75"
            y="32"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="-0.05em"
            fill="currentColor"
          >
            plum
          </text>
        </svg>
      );

    case 'sbnri':
      return (
        <svg viewBox="0 0 180 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="2" width="176" height="42" rx="8" fill="#0f172a" />
          <g transform="translate(8, 9)">
            <circle cx="12" cy="12" r="10" fill="#38bdf8" />
            <path d="M4 12C8 9 16 9 20 12M5 16C9 13 15 13 19 16" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <text
            x="36"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="15"
            letterSpacing="0.08em"
            fill="#ffffff"
          >
            SB NRI
          </text>
          <text
            x="36"
            y="36"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="500"
            fontSize="7"
            letterSpacing="0.04em"
            fill="#94a3b8"
          >
            Simplifying Banking for NRIs
          </text>
        </svg>
      );

    case 'shopkirana':
      return (
        <svg viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="10"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.02em"
            fill="#ea580c"
          >
            Shop<tspan fill="#ea580c">Kirana</tspan>
          </text>
          <text
            x="12"
            y="38"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="8.5"
            letterSpacing="0.1em"
            fill="#4b5563"
          >
            Empowering Retailers
          </text>
        </svg>
      );

    case 'strata':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="14"
            y="30"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            Strata
          </text>
          <rect x="92" y="8" width="10" height="10" fill="currentColor" />
        </svg>
      );

    case 'unnati':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M4 18C4 8 12 4 18 4C18 14 12 18 4 18Z" fill="#15803d" />
            <circle cx="12" cy="11" r="2" fill="#ffffff" />
            <path d="M14 20C14 10 22 6 28 6C28 16 22 20 14 20Z" fill="#16a34a" />
            <circle cx="22" cy="13" r="2" fill="#ffffff" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            unnati
          </text>
        </svg>
      );

    case 'zuper':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <polygon points="12,2 2,14 10,14 6,24 18,10 10,10" fill="#2563eb" />
          </g>
          <text
            x="32"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="23"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            ZUPER™
          </text>
        </svg>
      );

    case 'celsius':
      return (
        <svg viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="6"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="-0.02em"
            fill="#0284c7"
          >
            °Celc<tspan fill="#ef4444">i</tspan>us
          </text>
          <text
            x="8"
            y="40"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="8"
            letterSpacing="0.16em"
            fill="#0369a1"
          >
            THE UNBROKEN COLD CHAIN
          </text>
        </svg>
      );

    case 'breathe-well-being':
      return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="16" cy="16" r="14" fill="#0d9488" />
            <text x="16" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" fill="#ffffff">
              B
            </text>
          </g>
          <text
            x="44"
            y="22"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="14"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            breathe
          </text>
          <text
            x="44"
            y="34"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="0.06em"
            fill="#0d9488"
          >
            WELL-BEING
          </text>
        </svg>
      );

    case 'thb':
      return (
        <svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="0" y="0" width="30" height="30" rx="8" fill="#06b6d4" />
            <text x="15" y="21" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#ffffff">
              thb
            </text>
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            THB
          </text>
          <text
            x="6"
            y="44"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="6.5"
            letterSpacing="0.14em"
            fill="#64748b"
          >
            TECHNOLOGY | HEALTHCARE | BIG DATA
          </text>
        </svg>
      );

    case 'flam':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="10" fill="#1a382d" />
            <circle cx="12" cy="12" r="4" fill="#c59e5f" />
          </g>
          <text
            x="36"
            y="27"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="-0.04em"
            fill="currentColor"
          >
            Flam<tspan fontSize="12" dy="-10" fill="#c59e5f"> AI</tspan>
          </text>
        </svg>
      );

    case 'nse':
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="15" cy="15" r="14" fill="#ea580c" />
            <circle cx="15" cy="15" r="8" fill="#1d4ed8" />
            <circle cx="15" cy="15" r="3" fill="#ffffff" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="23"
            letterSpacing="0.1em"
            fill="currentColor"
          >
            NSE
          </text>
        </svg>
      );

    case 'truly-madly':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="15" cy="15" r="14" fill="#ec4899" opacity="0.8" />
            <circle cx="20" cy="15" r="10" fill="#0284c7" opacity="0.8" />
            <text x="16" y="20" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="#ffffff">tm</text>
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="-0.03em"
            fill="#0284c7"
          >
            truly<tspan fill="#ec4899">madly</tspan>
          </text>
        </svg>
      );

    case 'uptime-ai':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 10)">
            <path d="M4 14H16M10 4V14M14 6L10 10M6 6L10 10" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text
            x="32"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="-0.02em"
            fill="#7c3aed"
          >
            uptimeAI
          </text>
        </svg>
      );

    case 'faarms':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="#15803d" />
            <path d="M10 22V10H22M10 16H18" stroke="#ffffff" strokeWidth="2.75" strokeLinecap="round" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            FAARMS
          </text>
        </svg>
      );

    // =========================================================================
    // 4. SEAFUND (GP DEEPTECH) PORTFOLIO
    // =========================================================================
    case 'calligo':
      return (
        <svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="18" cy="18" r="16" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 2" fill="none" />
            <circle cx="18" cy="18" r="11" stroke="#06b6d4" strokeWidth="2" fill="none" />
            <rect x="13" y="13" width="10" height="10" rx="2" fill="#06b6d4" />
          </g>
          <text
            x="48"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="15"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            CALLIGO
          </text>
          <text
            x="48"
            y="37"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="9"
            letterSpacing="0.14em"
            fill="#06b6d4"
          >
            TECHNOLOGIES
          </text>
        </svg>
      );

    case 'genrobotics':
      return (
        <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14" fill="currentColor">
              G
            </text>
          </g>
          <text
            x="44"
            y="23"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="14"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            GENROBOTICS
          </text>
          <text
            x="44"
            y="35"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="8"
            letterSpacing="0.18em"
            fill="#64748b"
          >
            FOUNDATION
          </text>
        </svg>
      );

    case 'takeme2space':
      return (
        <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="16" cy="16" r="14" fill="#111827" />
            <polygon points="16,6 23,10 16,14 9,10" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            <polygon points="9,10 16,14 16,22 9,18" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            <polygon points="23,10 16,14 16,22 23,18" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          </g>
          <text
            x="44"
            y="27"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            TakeMe2Space
          </text>
        </svg>
      );

    case 'finsall':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <circle cx="14" cy="14" r="11" stroke="#0ea5e9" strokeWidth="2.5" fill="none" />
            <path d="M14 6V22M6 14H22" stroke="#0ea5e9" strokeWidth="2.5" />
          </g>
          <text
            x="38"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.02em"
            fill="#0ea5e9"
          >
            Finsall
          </text>
        </svg>
      );

    case 'clootrack':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="14" cy="12" r="10" fill="#f97316" />
            <rect x="8" y="22" width="12" height="3" rx="1.5" fill="#ea580c" />
            <rect x="10" y="26" width="8" height="2" rx="1" fill="#ea580c" />
          </g>
          <text
            x="38"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="-0.02em"
            fill="#ea580c"
          >
            Clootrack
          </text>
        </svg>
      );

    case 'consint-ai':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <circle cx="16" cy="16" r="14" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="2 3" />
            <text x="16" y="22" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="#06b6d4">
              C
            </text>
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            Consint AI
          </text>
        </svg>
      );

    case 'bestdoc':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 6)">
            <rect x="2" y="2" width="28" height="28" rx="8" fill="#0d9488" />
            <rect x="9" y="7" width="14" height="18" rx="3" stroke="#ffffff" strokeWidth="1.8" fill="none" />
            <path d="M12 16H14L15 13L17 19L18 16H20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <text
            x="44"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="20"
            letterSpacing="-0.02em"
            fill="#0d9488"
          >
            BestDoc
          </text>
        </svg>
      );

    case 'advarisk':
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <path d="M4 6L14 2L24 6V16C24 22 14 26 14 26C14 26 4 22 4 16V6Z" fill="#eab308" />
            <path d="M10 14L13 17L19 11" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text
            x="36"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="-0.02em"
            fill="#0f172a"
          >
            Adva<tspan fill="#eab308">Risk</tspan>
          </text>
        </svg>
      );

    case 'pupilfirst':
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(6, 8)">
            <ellipse cx="14" cy="14" rx="12" ry="8" fill="#111827" />
            <circle cx="14" cy="14" r="4.5" fill="#ffffff" />
          </g>
          <text
            x="36"
            y="24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="-0.03em"
            fill="currentColor"
          >
            pupilfirst
          </text>
          <text
            x="37"
            y="36"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="9"
            letterSpacing="0.2em"
            fill="#6b7280"
          >
            SCHOOL
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

    case 'redwing':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <path d="M2 14L12 4L22 14L12 18L2 14Z" fill="#e53935" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            Redwing
          </text>
        </svg>
      );

    // =========================================================================
    // 5. INSTITUTIONAL FUND ALLIANCES
    // =========================================================================
    case 'stride':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <rect x="0" y="2" width="20" height="20" rx="3" fill="#1a382d" />
            <path d="M5 16L9 9L15 16" stroke="#c59e5f" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            STRIDE
          </text>
        </svg>
      );

    case 'rpsg':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="10" fill="#c59e5f" />
            <text x="12" y="16" textAnchor="middle" fill="#10241d" fontWeight="900" fontSize="11">RP</text>
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            RPSG VENTURES
          </text>
        </svg>
      );

    case 'fbc':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#10241d" />
            <path d="M7 8H17M7 13H14M7 18H11" stroke="#c59e5f" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            FBC VENTURES
          </text>
        </svg>
      );

    case 'gemba':
      return (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="10" stroke="#c59e5f" strokeWidth="2.5" fill="none" />
            <circle cx="12" cy="12" r="4" fill="#10241d" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            GEMBA CAPITAL
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text
            x="70"
            y="25"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            {logoType.toUpperCase()}
          </text>
        </svg>
      );
  }
};
