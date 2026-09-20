import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import {
  REAL_ESTATE_OVERVIEW,
  LP_FUND_POSITIONS,
  ANGEL_SECTORS_SUMMARY,
} from '../data/investmentsData';
import {
  ArrowUpRight,
  Building2,
  TrendingUp,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface InvestmentsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const InvestmentsPage: React.FC<InvestmentsPageProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO & ARCHITECTURE OVERVIEW (Clean, natural, no "//" or tier boxes) */}
      <section
        id="investments-hero-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] mb-3 block"
          >
            CAPITAL ALLOCATION | THREE CORE ASSET CLASSES
          </motion.span>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mt-2 mb-6"
          />

          <motion.h1
            id="investments-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-6"
          >
            Investments &amp; Asset Classes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#333333] font-light leading-relaxed mb-6"
          >
            SSA Family Holdings deploys capital across three primary asset classes: <strong>Real Estate</strong>, <strong>Private Markets</strong>, and <strong>Public Markets</strong>. Our approach combines direct balance-sheet ownership, active Limited Partner commitments in premier institutional funds, and dedicated General Partner fund platforms.
          </motion.p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
          <button
            onClick={() => scrollToSection('pillar-real-estate')}
            className="px-4 py-2 bg-white border border-[#c59e5f]/60 hover:border-[#1a382d] text-[#1a382d] cursor-pointer transition-colors"
          >
            Real Estate &rarr;
          </button>
          <button
            onClick={() => scrollToSection('pillar-private-markets')}
            className="px-4 py-2 bg-white border border-[#1a382d]/40 hover:border-[#1a382d] text-[#1a382d] cursor-pointer transition-colors"
          >
            Private Markets &rarr;
          </button>
          <button
            onClick={() => scrollToSection('pillar-public-markets')}
            className="px-4 py-2 bg-white border border-neutral-300 hover:border-[#1a382d] text-neutral-600 cursor-pointer transition-colors"
          >
            Public Markets &rarr;
          </button>
        </div>
      </section>

      {/* 2. PILLAR 1: REAL ESTATE (Direct Land in NCR & GP SGRE Funds; Hospitality removed) */}
      <section
        id="pillar-real-estate"
        className="w-full bg-[#f8faf8] border-t border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="pb-8 border-b border-[#e2ece6]">
            <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] block mb-2">
              ASSET CLASS | DIRECT HOLDINGS &amp; AIF FUNDS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Real Estate
            </h2>
            <p className="text-sm sm:text-base text-[#444444] font-light mt-3 max-w-2xl leading-relaxed">
              Direct freehold land holdings in and around NCR alongside institutional GP fund platforms managing SEBI-registered Category II AIFs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* 1. DIRECT INVESTMENTS: LAND PARCELS */}
            <div className="bg-white border border-[#e2ece6] hover:border-[#c59e5f] p-8 sm:p-10 shadow-[0_4px_20px_rgba(26,56,45,0.03)] flex flex-col justify-between transition-all">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-2">
                  DIRECT HOLDINGS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-1">
                  Land Parcels in &amp; around NCR
                </h3>
                <span className="text-xs font-mono text-[#1a382d] block mb-4">
                  Warehousing, Residential &amp; Agricultural Land
                </span>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {REAL_ESTATE_OVERVIEW.direct.scope}. Direct freehold acquisitions focused on capital preservation, zoning upside, logistics connectivity, and highway economic growth corridors.
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
                DIRECT BALANCE SHEET OWNERSHIP
              </div>
            </div>

            {/* 2. GP REAL ESTATE FUNDS: SGRE 1 & 2 */}
            <div className="bg-white border-2 border-[#1a382d] p-8 sm:p-10 shadow-[0_8px_30px_rgba(26,56,45,0.06)] flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-2">
                  <span className="text-[#c59e5f] font-medium">GP FUND MANAGEMENT</span>
                  <span className="bg-[#1a382d] text-white px-2.5 py-0.5">2 SEBI AIFs</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-1">
                  SGRE Fund I &amp; SGRE Fund 2
                </h3>
                <span className="text-xs font-mono text-[#c59e5f] block mb-4">
                  Real Estate &amp; Distressed Assets Investments
                </span>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {REAL_ESTATE_OVERVIEW.gpFunds.scope}. Institutional capital vehicles deploying structured debt, equity, and turnaround financing into viable residential and commercial real estate assets.
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

              <div className="pt-6 border-t border-neutral-100 mt-8 flex items-center justify-between">
                <a
                  href={REAL_ESTATE_OVERVIEW.gpFunds.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a382d] hover:text-[#c59e5f] uppercase tracking-wider transition-colors"
                >
                  <span>Visit SGRE.in</span>
                  <ExternalLink size={12} className="text-[#c59e5f]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILLAR 2: PRIVATE MARKETS (GP Seafund, 50+ Angels, 10+ LP Funds) */}
      <section
        id="pillar-private-markets"
        className="w-full bg-white border-t border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="pb-8 border-b border-[#e2ece6]">
            <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] block mb-2">
              ASSET CLASS | GP VENTURE FUND | 50+ ANGELS | 10+ LP POSITIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Private Markets
            </h2>
            <p className="text-sm sm:text-base text-[#444444] font-light mt-3 max-w-2xl leading-relaxed">
              Institutional venture capital leadership as GP of Seafund, 50+ direct angel investments across emerging tech, and LP allocations across 10+ leading venture funds.
            </p>
          </div>

          {/* 1. GP FUND: SEAFUND */}
          <div className="mt-12 p-8 bg-[#f6f9f7] border border-[#c59e5f]/40 relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] font-semibold">
                    GP VENTURE CAPITAL FUND
                  </span>
                  <span className="w-1 h-1 bg-[#c59e5f] rounded-full" />
                  <span className="text-[10px] font-mono uppercase text-[#1a382d]">
                    SEBI-REGISTERED CAT II AIF
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d] mb-2">
                  Seafund | $30M Institutional DeepTech VC Fund
                </h3>

                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  General Partner of Seafund, a $30M institutional venture capital fund investing early in foundational technology founders across deeptech, AI/ML, semiconductors, industrial IoT, robotics, and spacetech.
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <a
                  href="https://www.seafund.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a382d] hover:bg-[#10241d] text-white px-6 py-3 text-xs uppercase tracking-wider font-medium transition-colors border border-[#c59e5f]"
                >
                  <span>Visit Seafund.in</span>
                  <ExternalLink size={13} className="text-[#c59e5f]" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. DIRECT ANGEL INVESTMENTS (50+ Startups across Sectors - no 'since 2014' repeated in each box) */}
          <div className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c59e5f] block">
                  50+ DIRECT ANGEL INVESTMENTS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d]">
                  Angel Portfolio Across Emerging Sectors
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  Direct investments across fintech, healthtech, deeptech &amp; AI, defence, biotech, and consumer sectors.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f6f9f7] text-[#1a382d] px-5 py-2.5 text-xs uppercase tracking-wider font-medium border border-[#1a382d] transition-colors cursor-pointer shrink-0"
              >
                <span>View Portfolio Companies</span>
                <ArrowUpRight size={13} className="text-[#c59e5f]" />
              </button>
            </div>

            {/* Sector Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {ANGEL_SECTORS_SUMMARY.map((sec) => (
                <div
                  key={sec.sector}
                  className="p-6 bg-[#f8faf8] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_12px_40px_rgba(26,56,45,0.06)]" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-2">
                      {sec.count} COMPANIES
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

          {/* 3. LP POSITIONS IN INSTITUTIONAL VC & VENTURE DEBT FUNDS (10+ Funds, disclosing RPSG, Stride, Founder Bank, Gemba) */}
          <div className="mt-14 pt-12 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c59e5f] block">
                  LIMITED PARTNER (LP) ALLOCATIONS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#10241d]">
                  LP Positions in 10+ Leading Venture Funds
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  We invest in 10+ institutional funds. Some of our disclosed fund relationships include <strong>RPSG Capital Ventures</strong>, <strong>Stride Ventures</strong>, <strong>Founder Bank Capital</strong>, and <strong>Gemba Capital</strong>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {LP_FUND_POSITIONS.map((lp) => (
                <div
                  key={lp.id}
                  className="bg-white p-8 shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#f8faf8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono uppercase mb-3">
                        <span className="text-[#c59e5f] font-medium">{lp.firm}</span>
                        <span>{lp.vintage}</span>
                      </div>
                      <h4 className="font-serif text-xl text-[#10241d] mb-3">{lp.name}</h4>
                      <span className="inline-block text-[11px] font-mono text-[#1a382d] bg-[#f6f9f7] px-2 py-0.5 border-l-2 border-[#c59e5f] mb-4">
                        {lp.fundType}
                      </span>
                      <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
                        {lp.mandate}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-mono text-neutral-400">ACTIVE LP COMMITMENT</span>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLAR 3: PUBLIC MARKETS */}
      <section
        id="pillar-public-markets"
        className="w-full bg-[#10241d] relative text-white py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85"
            alt="Stock exchange data and financial charts"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10241d] via-[#10241d]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] block mb-4">
            PUBLIC MARKETS ALLOCATION
          </span>
          <div className="w-12 h-[2px] bg-[#c59e5f] mb-8" />
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto mb-8">
            "We have been investing in leading PMS schemes, Category 3 AIFs and direct investments."
          </h2>

          <p className="text-base sm:text-lg text-[#b0cbbe] font-light leading-relaxed max-w-2xl mx-auto">
            Anchored in balance-sheet quality and fundamental research, our public equity allocation focuses on compounding capital alongside India&apos;s secular economic expansion over a multi-decade horizon.
          </p>
        </div>
      </section>
    </div>
  );
};
