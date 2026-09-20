import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import {
  REAL_ESTATE_OVERVIEW,
  LP_FUND_POSITIONS,
  ANGEL_SECTORS_SUMMARY,
} from '../data/investmentsData';
import { IMAGES } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface InvestmentsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const InvestmentsPage: React.FC<InvestmentsPageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO */}
      <section
        id="investments-hero-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mb-6"
          />

          <motion.h1
            id="investments-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-6"
          >
            Where the capital goes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#333333] font-light leading-relaxed mb-8"
          >
            Three books, run differently. We own land and companies outright, we commit as a
            limited partner to managers we rate, and we run our own SEBI-registered funds as GP.
            The public equities book has been compounding since the 1990s.
          </motion.p>
        </div>

        {/* Section jump links */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <button
            onClick={() => scrollToSection('pillar-real-estate')}
            className="px-4 py-2 bg-white border border-[#c59e5f]/60 hover:border-[#1a382d] text-[#1a382d] cursor-pointer transition-colors"
          >
            Real estate &rarr;
          </button>
          <button
            onClick={() => scrollToSection('pillar-private-markets')}
            className="px-4 py-2 bg-white border border-[#1a382d]/40 hover:border-[#1a382d] text-[#1a382d] cursor-pointer transition-colors"
          >
            Private markets &rarr;
          </button>
          <button
            onClick={() => scrollToSection('pillar-public-markets')}
            className="px-4 py-2 bg-white border border-neutral-300 hover:border-[#1a382d] text-neutral-600 cursor-pointer transition-colors"
          >
            Public markets &rarr;
          </button>
        </div>
      </section>

      {/* 2. REAL ESTATE */}
      <section
        id="pillar-real-estate"
        className="w-full bg-[#f8faf8] border-t border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pb-8 border-b border-[#e2ece6]">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Real estate
            </h2>
            <p className="text-sm sm:text-base text-[#444444] font-light mt-3 max-w-2xl leading-relaxed">
              Land we own outright, and two funds we manage for others.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Direct land */}
            <div className="bg-white border border-[#e2ece6] hover:border-[#c59e5f] p-8 sm:p-10 shadow-[0_4px_20px_rgba(26,56,45,0.03)] flex flex-col justify-between transition-all">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-2">
                  Direct
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-4">
                  Land in the NCR corridors
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  Freehold, clear title, bought to hold. The thesis is unexciting on purpose:
                  capital preservation first, then zoning and connectivity upside as Delhi keeps
                  pushing outward. No leverage, no clock.
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs text-[#444444] font-light">
                  {REAL_ESTATE_OVERVIEW.direct.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#c59e5f] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-8 text-[11px] font-mono text-neutral-400 uppercase">
                Balance sheet
              </div>
            </div>

            {/* SGRE funds */}
            <div className="bg-white border-2 border-[#1a382d] p-8 sm:p-10 shadow-[0_8px_30px_rgba(26,56,45,0.06)] flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-2">
                  <span className="text-[#c59e5f] font-medium">As GP</span>
                  <span className="bg-[#1a382d] text-white px-2.5 py-0.5">2 SEBI Cat II AIFs</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-4">
                  SGRE Fund I and Fund 2
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  Structured debt, equity and turnaround financing into residential and commercial
                  assets — including situations other lenders have walked away from. Underwritten
                  by people who have spent thirty years reading Indian balance sheets.
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs text-[#444444] font-light">
                  {REAL_ESTATE_OVERVIEW.gpFunds.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#1a382d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-8">
                <a
                  href={REAL_ESTATE_OVERVIEW.gpFunds.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a382d] hover:text-[#c59e5f] uppercase tracking-wider transition-colors"
                >
                  <span>sgre.in</span>
                  <ExternalLink size={12} className="text-[#c59e5f]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIVATE MARKETS */}
      <section
        id="pillar-private-markets"
        className="w-full bg-white border-t border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="pb-8 border-b border-[#e2ece6]">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Private markets
            </h2>
            <p className="text-sm sm:text-base text-[#444444] font-light mt-3 max-w-2xl leading-relaxed">
              One fund we run, fifty-odd cheques we wrote ourselves, and ten managers we back.
            </p>
          </div>

          {/* Seafund */}
          <div className="mt-12 p-8 bg-[#f6f9f7] border border-[#c59e5f]/40">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] font-semibold block mb-2">
                  As GP &middot; SEBI-registered Cat II AIF
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-2">
                  Seafund &mdash; $30M, early deeptech
                </h3>

                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  We co-founded it to write the cheque most Indian funds still find too technical
                  and too early: semiconductors, robotics, industrial IoT, spacetech, and AI at the
                  model rather than the wrapper layer.
                </p>
              </div>

              <a
                href="https://www.seafund.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a382d] hover:bg-[#10241d] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium transition-colors border border-[#c59e5f] shrink-0"
              >
                <span>seafund.in</span>
                <ExternalLink size={13} className="text-[#c59e5f]" />
              </a>
            </div>
          </div>

          {/* Angel portfolio */}
          <div className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d]">
                  50+ direct investments
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  Written off our own balance sheet since 2014.
                </p>
              </div>

              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f6f9f7] text-[#1a382d] px-5 py-2.5 text-xs uppercase tracking-wider font-medium border border-[#1a382d] transition-colors cursor-pointer shrink-0"
              >
                <span>See the companies</span>
                <ArrowUpRight size={13} className="text-[#c59e5f]" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {ANGEL_SECTORS_SUMMARY.map((sec) => (
                <div
                  key={sec.sector}
                  className="p-6 bg-[#f8faf8] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_12px_40px_rgba(26,56,45,0.06)]" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-2">
                      {sec.count}
                    </span>
                    <h4 className="font-serif text-lg text-[#10241d] mb-3">{sec.sector}</h4>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LP positions */}
          <div className="mt-14 pt-12 border-t border-neutral-200">
            <div className="mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d]">
                LP in 10+ funds
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-1">
                Where someone else is better placed to source the deal than we are. Four of those
                relationships are public:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {LP_FUND_POSITIONS.map((lp) => (
                <div
                  key={lp.id}
                  className="bg-white border border-neutral-200/80 p-7 shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)] hover:border-[#c59e5f]/40 flex flex-col transition-all duration-500 hover:-translate-y-1 group"
                >
                  {/* Real fund artwork */}
                  <div className="h-12 flex items-center mb-5">
                    <BrandLogo
                      logoType={lp.logoType}
                      name={lp.name}
                      className="max-h-11 w-auto max-w-[150px] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-400"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono uppercase mb-2">
                    <span>{lp.fundType}</span>
                    <span>{lp.vintage}</span>
                  </div>

                  <h4 className="font-serif text-xl text-[#10241d] mb-3">{lp.name}</h4>

                  <p className="text-xs text-[#555555] font-light leading-relaxed mb-6 flex-grow">
                    {lp.mandate}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 mt-auto">
                    <a
                      href={lp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-xs text-[#1a382d] hover:text-[#c59e5f] inline-flex items-center gap-1.5 font-medium transition-colors"
                    >
                      <span className="relative overflow-hidden pb-0.5">
                        Website
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <ExternalLink size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PUBLIC MARKETS */}
      <section
        id="pillar-public-markets"
        className="w-full bg-[#10241d] relative text-white py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.publicMarkets}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10241d] via-[#10241d]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-[2px] bg-[#c59e5f] mb-8" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto mb-8">
            Public markets
          </h2>

          <p className="text-base sm:text-lg text-[#b0cbbe] font-light leading-relaxed max-w-2xl mx-auto">
            Direct holdings, selected PMS schemes and Category III AIFs. The book has run
            continuously since the 1990s, which means it has been wrong often enough to be useful.
            Balance sheet quality first, then fundamentals, then a long time doing nothing.
          </p>
        </div>
      </section>
    </div>
  );
};
