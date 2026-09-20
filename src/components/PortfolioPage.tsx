import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { BACKED_PORTFOLIO, BackedEntity } from '../data/backedPortfolio';
import { PortfolioLogo } from './PortfolioLogos';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Backed (${BACKED_PORTFOLIO.length})` },
    { id: 'direct', label: 'Direct Venture & Angels' },
    { id: 'seafund', label: 'Seafund (GP DeepTech)' },
    { id: 'funds', label: 'Fund Alliances' },
  ];

  const filteredItems = BACKED_PORTFOLIO.filter((item) => {
    if (activeCategory === 'direct') return item.category === 'Direct Venture & Angels';
    if (activeCategory === 'seafund') return item.category === 'Seafund (GP DeepTech)';
    if (activeCategory === 'funds') return item.category === 'Institutional Fund Alliances';
    return true;
  });

  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. PORTFOLIO HERO */}
      <section
        id="portfolio-hero"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] mb-3 block"
          >
            DISCIPLINED CAPITAL ALLOCATION | 50+ BACKED ENTITIES
          </motion.span>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mt-2 mb-6"
          />

          <motion.h1
            id="portfolio-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-5"
          >
            Portfolio
          </motion.h1>

          <motion.p
            id="portfolio-subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#444444] font-light leading-relaxed"
          >
            Companies and institutional funds backed across direct angel rounds, our General Partner venture fund (Seafund), and leading institutional venture fund alliances including RPSG Capital Ventures, Stride Ventures, Founder Bank Capital, and Gemba Capital.
          </motion.p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="mt-10 pt-6 border-t border-[#e2ece6] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all cursor-pointer rounded-none ${
                  activeCategory === cat.id
                    ? 'bg-[#1a382d] text-white border border-[#1a382d]'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[#c59e5f] hover:text-[#1a382d]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono tracking-wider uppercase text-neutral-400 hidden sm:inline-block">
            ACTIVE PORTFOLIO
          </span>
        </div>
      </section>

      {/* 2. AUTHENTIC LOGO GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 sm:pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                id={`portfolio-logo-${item.id}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className="group relative bg-white p-6 sm:p-7 flex flex-col justify-between h-[210px] transition-transform duration-500 hover:-translate-y-1 shadow-[0_4px_20px_rgba(26,56,45,0.02)] hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)]"
              >
                <div className="absolute inset-0 bg-[#f8faf8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                
                {/* Top: Classification Pill */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-neutral-400 relative z-10">
                  <span className="text-[#c59e5f] font-medium">
                    {item.type}
                  </span>
                  <span>{item.vintage}</span>
                </div>

                {/* Center: Authentic Vector SVG Logo */}
                <div className="flex items-center justify-center h-16 my-auto text-[#10241d] group-hover:text-[#1a382d] transition-colors">
                  <PortfolioLogo
                    logoType={item.logoType}
                    className="max-h-12 w-auto max-w-[170px]"
                  />
                </div>

                {/* Bottom: Meta Info */}
                <div className="pt-3 border-t border-neutral-100 flex flex-col justify-end">
                  <span className="text-xs font-medium text-[#10241d] truncate">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-light truncate mt-0.5">
                    {item.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};
