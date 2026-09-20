import React from 'react';

interface PedigreeLogoProps {
  name: 'deloitte' | 'microsoft' | 'northwestern' | 'uiuc' | 'tennr';
  className?: string;
}

export const PedigreeLogo: React.FC<PedigreeLogoProps> = ({ name, className = 'h-7 sm:h-8' }) => {
  switch (name) {
    case 'deloitte':
      return (
        <div
          className={`inline-flex items-center px-3 py-1.5 bg-white rounded border border-neutral-200/90 shadow-xs hover:border-[#86bc25]/60 hover:shadow-sm transition-all ${className}`}
          title="Deloitte"
        >
          <svg
            viewBox="0 0 112 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 sm:h-6 w-auto"
            aria-label="Deloitte Logo"
          >
            <text
              x="2"
              y="20"
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
              fontWeight="800"
              fontSize="20"
              letterSpacing="-0.035em"
              fill="#10241d"
            >
              Deloitte
            </text>
            <circle cx="88" cy="18" r="3.2" fill="#86bc25" />
          </svg>
        </div>
      );

    case 'microsoft':
      return (
        <div
          className={`inline-flex items-center px-3 py-1.5 bg-white rounded border border-neutral-200/90 shadow-xs hover:border-neutral-400 hover:shadow-sm transition-all ${className}`}
          title="Microsoft"
        >
          <svg
            viewBox="0 0 126 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 sm:h-6 w-auto"
            aria-label="Microsoft Logo"
          >
            {/* 4 Colored Squares */}
            <g transform="translate(2, 4)">
              <rect x="0" y="0" width="9.2" height="9.2" fill="#f25022" />
              <rect x="10.8" y="0" width="9.2" height="9.2" fill="#7fba00" />
              <rect x="0" y="10.8" width="9.2" height="9.2" fill="#00a4ef" />
              <rect x="10.8" y="10.8" width="9.2" height="9.2" fill="#ffb900" />
            </g>
            <text
              x="29"
              y="19"
              fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
              fontWeight="600"
              fontSize="17"
              letterSpacing="-0.025em"
              fill="#222222"
            >
              Microsoft
            </text>
          </svg>
        </div>
      );

    case 'northwestern':
      return (
        <div
          className={`inline-flex items-center px-3 py-1.5 bg-white rounded border border-neutral-200/90 shadow-xs hover:border-[#4e2a84]/50 hover:shadow-sm transition-all ${className}`}
          title="Northwestern University"
        >
          <svg
            viewBox="0 0 152 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 sm:h-6 w-auto"
            aria-label="Northwestern University Logo"
          >
            {/* Northwestern N Mark */}
            <g transform="translate(2, 3)">
              <rect x="0" y="0" width="21" height="22" rx="2" fill="#4e2a84" />
              <text
                x="10.5"
                y="16.5"
                textAnchor="middle"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontWeight="900"
                fontSize="16"
                fill="#ffffff"
              >
                N
              </text>
            </g>
            <text
              x="30"
              y="19"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="700"
              fontSize="15"
              letterSpacing="0.015em"
              fill="#4e2a84"
            >
              Northwestern
            </text>
          </svg>
        </div>
      );

    case 'uiuc':
      return (
        <div
          className={`inline-flex items-center px-3 py-1.5 bg-white rounded border border-neutral-200/90 shadow-xs hover:border-[#ff5f05]/50 hover:shadow-sm transition-all ${className}`}
          title="UIUC (University of Illinois Urbana-Champaign)"
        >
          <svg
            viewBox="0 0 102 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 sm:h-6 w-auto"
            aria-label="UIUC Logo"
          >
            {/* Official Illinois Block I */}
            <g transform="translate(2, 2)">
              <rect x="0" y="0" width="20" height="24" rx="2" fill="#13294b" />
              <path
                d="M4 3H16V7H12.5V17H16V21H4V17H7.5V7H4V3Z"
                fill="#ff5f05"
              />
            </g>
            <text
              x="29"
              y="19"
              fontFamily="system-ui, -apple-system, 'Arial Black', sans-serif"
              fontWeight="800"
              fontSize="16"
              letterSpacing="0.06em"
              fill="#13294b"
            >
              UIUC
            </text>
          </svg>
        </div>
      );

    case 'tennr':
      return (
        <div
          className={`inline-flex items-center px-3 py-1.5 bg-white rounded border border-neutral-200/90 shadow-xs hover:border-neutral-600 hover:shadow-sm transition-all ${className}`}
          title="Tennr"
        >
          {/* Authentic Tennr stepped logo as attached by user */}
          <svg
            viewBox="0 0 106 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 sm:h-6 w-auto"
            aria-label="Tennr Logo"
          >
            {/* Stepped Double Square Icon */}
            <g transform="translate(2, 3)">
              {/* Top-left block */}
              <rect x="0" y="1" width="11" height="11" fill="#101413" />
              {/* Bottom-right stepped block */}
              <rect x="8.5" y="9.5" width="11" height="11" fill="#101413" />
            </g>
            {/* Tennr Clean Brand Typography */}
            <text
              x="28"
              y="19.5"
              fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
              fontWeight="700"
              fontSize="17.5"
              letterSpacing="-0.025em"
              fill="#101413"
            >
              Tennr
            </text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
