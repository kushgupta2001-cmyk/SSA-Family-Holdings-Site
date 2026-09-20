import React, { useState } from 'react';
import { PortfolioLogo } from './PortfolioLogos';

/**
 * Real brand artwork, keyed by the same `logoType` slug the portfolio data uses.
 * Drop a file named `<logoType>.png|svg|webp|jpg` into src/assets/logos/ and it is
 * picked up automatically — no code change needed. Anything without artwork falls
 * back to the hand-drawn vector wordmark in PortfolioLogos.
 */
const files = import.meta.glob('../assets/logos/*.{png,svg,webp,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const BRAND_ARTWORK: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    url,
  ])
);

export const hasBrandArtwork = (logoType: string) => logoType in BRAND_ARTWORK;

/**
 * Brand marks arrive at wildly different aspect ratios — Gemba is 4.8:1, FBC is a
 * 1:1 tile. Capping everything at one height makes the square ones look tiny next
 * to the wordmarks, so give stubbier marks more vertical room. Measured on load so
 * newly added files size themselves.
 */
const heightForAspect = (aspect: number) => {
  if (aspect >= 2.6) return 'max-h-12'; // wide wordmark
  if (aspect >= 1.8) return 'max-h-14';
  return 'max-h-[72px]'; // square-ish tile or stacked lockup
};

interface BrandLogoProps {
  logoType: string;
  name: string;
  /** Effects and max-width; the height cap is derived from the artwork itself. */
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ logoType, name, className = '' }) => {
  const [heightClass, setHeightClass] = useState('max-h-12');
  const src = BRAND_ARTWORK[logoType];

  // Drawn fallbacks are all drawn to roughly the same 3.6:1 wordmark box.
  if (!src) {
    return <PortfolioLogo logoType={logoType} className={`max-h-12 ${className}`} />;
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
        if (w && h) setHeightClass(heightForAspect(w / h));
      }}
      className={`object-contain ${heightClass} ${className}`}
    />
  );
};
