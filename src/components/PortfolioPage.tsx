import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { BACKED_PORTFOLIO } from '../data/backedPortfolio';
import { BrandLogo } from './BrandLogo';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All (${BACKED_PORTFOLIO.length})` },
    { id: 'unicorns', label: 'Growth & Unicorns' },
    { id: 'consumer', label: 'Consumer & D2C' },
    { id: 'direct', label: 'Direct & Angel' },
    { id: 'seafund', label: 'Seafund' },
    { id: 'funds', label: 'Fund Alliances' },
  ];

  const filteredItems = BACKED_PORTFOLIO.filter((item) => {
    if (activeCategory === 'unicorns') return item.category === 'Growth & Unicorns';
    if (activeCategory === 'consumer') return item.category === 'Consumer & D2C';
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
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mb-6"
          />

          <motion.h1
            id="portfolio-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-5"
          >
            Companies we have backed
          </motion.h1>

          <motion.p
            id="portfolio-subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#444444] font-light leading-relaxed max-w-2xl"
          >
            Some we wrote the first cheque into. Some came through Seafund, the deeptech fund we
            manage. Some through the funds we back as a limited partner. A selection is below.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 pt-6 border-t border-[#e2ece6] flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`portfolio-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1a382d] text-white border border-[#1a382d]'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[#c59e5f] hover:text-[#1a382d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. LOGO WALL */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
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
                transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.4) }}
                className="group relative bg-white p-6 sm:p-7 flex flex-col justify-between h-[220px] transition-all duration-300 hover:-translate-y-1 border border-neutral-200/80 shadow-[0_2px_12px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_36px_rgba(26,56,45,0.08)] hover:border-[#c59e5f]/40"
              >
                {/* Top: Classification */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-neutral-400 relative z-10">
                  <span className="text-[#c59e5f] font-semibold">{item.type}</span>
                  <span>{item.vintage}</span>
                </div>

                {/* Centre: brand artwork, desaturated until hover so the wall reads as one set */}
                <div className="flex items-center justify-center h-20 my-auto text-[#10241d] relative z-10 px-2">
                  <BrandLogo
                    logoType={item.logoType}
                    name={item.name}
                    className="w-auto max-w-[180px] grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-400"
                  />
                </div>

                {/* Bottom: Meta */}
                <div className="pt-3 border-t border-neutral-100 flex flex-col justify-end relative z-10">
                  <span className="text-xs font-semibold text-[#10241d] truncate">{item.name}</span>
                  <span className="text-[11px] text-neutral-500 font-light truncate mt-0.5">
                    {item.sector}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Tail card */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative bg-gradient-to-br from-[#10241d] to-[#18392d] text-white p-6 sm:p-7 flex flex-col justify-between h-[220px] transition-all duration-300 hover:-translate-y-1 border border-[#c59e5f]/40 shadow-[0_10px_25px_rgba(16,36,29,0.2)]"
            >
              <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-[#c59e5f]">
                <span className="font-semibold">Plus the rest</span>
              </div>

              <div className="my-auto py-2 text-center">
                <span className="font-serif text-2xl sm:text-3xl text-white font-normal block leading-tight">
                  and many more
                </span>
                <span className="text-[11px] text-[#dcc18b] font-light mt-1.5 block">
                  Not every holding is public
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs text-[#dcc18b] font-medium hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. FOUNDER CTA */}
      <section className="bg-[#f8faf8] border-t border-[#e2ece6] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#10241d] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#c59e5f]/30 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute right-24 top-8 w-64 h-64 rounded-full border border-[#c59e5f]/10 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white mb-5">
                Raising? You will hear back from a decision-maker.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                There is no investment committee between you and the people who own the capital.
                We read what comes in, we say yes or no quickly, and when we pass we tell you why.
                Seed through pre-IPO, across technology, consumer, healthcare, deeptech and
                financial infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 mb-8">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#c59e5f] font-normal">
                    350+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    Companies reached
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#c59e5f] font-normal">
                    Since 1990
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    Same family, same office
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#c59e5f] font-normal">
                    Seed–Pre-IPO
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    Equity and venture debt
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="portfolio-contact-cta"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#c59e5f] hover:bg-[#b08b4f] text-[#10241d] font-semibold text-xs uppercase tracking-[0.16em] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Send us your deck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('investments')}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white border border-white/30 text-xs uppercase tracking-[0.16em] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>How we invest</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
