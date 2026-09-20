import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { LEADERSHIP_TEAM, TIMELINE_MILESTONES } from '../data/aboutData';
import { LeaderCard } from './LeaderCard';
import {
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO SECTION (Editorial, natural, no AI-slop grey pill tags or $100M+ badge) */}
      <section
        id="about-hero-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] mb-3 block"
          >
            NEW DELHI, INDIA
          </motion.span>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mt-2 mb-6"
          />

          <motion.h1
            id="about-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-6"
          >
            About SSA Family Holdings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#333333] font-light leading-relaxed"
          >
            Founded in 1990 in New Delhi, SSA Family Holdings is a private multi-disciplinary operating group and family office. Built on deep professional integrity and disciplined capital stewardship, the group operates across three core divisions: our premier chartered accountancy practice, turnkey hospitality construction and management, and a multi-asset investment arm.
          </motion.p>
        </div>
      </section>

      {/* 2. THE THREE OPERATING DIVISIONS (Concise, punchy, no redundant text) */}
      <section
        id="operating-divisions-section"
        className="w-full bg-[#f8faf8] border-y border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#c59e5f] block mb-2">
              Three Decades of Operating Capability
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Our Core Operating Arms
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* DIVISION 1: CA PRACTICE (Sanjay Satpal and Associates) */}
            <div className="bg-white p-8 shadow-[0_12px_40px_rgba(26,56,45,0.06)] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="w-10 h-10 bg-[#f6f9f7] border border-[#c59e5f]/30 flex items-center justify-center text-[#1a382d] mb-5">
                  <ShieldCheck size={20} />
                </div>

                <span className="text-[11px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-1">
                  DIVISION 01
                </span>

                <h3 className="font-serif text-2xl text-[#10241d] mb-1">
                  Sanjay Satpal and Associates
                </h3>
                <span className="text-xs font-mono text-[#1a382d] block mb-4">
                  Chartered Accountancy Practice | New Delhi
                </span>

                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  A leading Tier-1 Delhi chartered accountancy firm with decades of practice, renowned for defense in high-stakes Income Tax Search and Seizure proceedings (Section 132), survey actions, appellate litigation before CIT(A) and ITAT, and comprehensive corporate tax advisory.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between">
                <a
                  href="https://www.ssassociate.co.in/resource/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a382d] hover:text-[#c59e5f] uppercase tracking-wider transition-colors"
                >
                  <span>Visit SSAssociate.co.in</span>
                  <ExternalLink size={12} className="text-[#c59e5f]" />
                </a>
              </div>
            </div>

            {/* DIVISION 2: HOSPITALITY */}
            <div className="bg-[#f2f6f4] p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-[#1a382d] mb-5">
                  <Building2 size={20} />
                </div>

                <span className="text-[11px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-1">
                  DIVISION 02
                </span>

                <h3 className="font-serif text-2xl text-[#10241d] mb-1">
                  Hospitality Division
                </h3>
                <span className="text-xs font-mono text-[#1a382d] block mb-4">
                  Boutique Hotels &amp; Luxury Resorts
                </span>

                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  Turnkey architectural development, civil construction, and operating management of a curated chain of boutique hotels across Delhi/NCR and premier luxury eco-resorts in Jim Corbett National Park.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-6">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex gap-4">
                  <span>CONSTRUCTION</span>
                  <span>ASSET MANAGEMENT</span>
                </span>
              </div>
            </div>

            {/* DIVISION 3: INVESTMENT ARM */}
            <div className="bg-[#10241d] text-white p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="w-10 h-10 bg-[#1a382d] flex items-center justify-center mb-5">
                  <TrendingUp size={20} className="text-[#c59e5f]" />
                </div>

                <span className="text-[11px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-1">
                  DIVISION 03
                </span>

                <h3 className="font-serif text-2xl text-white mb-1">
                  Investment Arm
                </h3>
                <span className="text-xs font-mono text-[#b0cbbe] block mb-4 flex flex-wrap gap-2">
                  <span>Direct Holdings</span>
                  <span className="opacity-50">|</span>
                  <span>LP Positions</span>
                  <span className="opacity-50">|</span>
                  <span>GP Funds</span>
                </span>

                <p className="text-xs sm:text-sm text-[#8caba1] font-light leading-relaxed">
                  Our family office investment platform deploying balance-sheet capital and leading institutional fund platforms across real estate land parcels &amp; AIFs, private market venture investments, and long-term public equities.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => {
                    onNavigate('investments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a382d] hover:bg-white hover:text-[#10241d] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
                >
                  <span>Explore Investments &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP TEAM SECTION (With Pedigree Logos for Agam & Kushagra) */}
      <section
        id="leadership-section"
        className="w-full bg-white py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#c59e5f] block mb-2">
              Principal Stewardship
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Executive Leadership
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
            <p className="text-sm sm:text-base text-[#555555] font-light mt-4 leading-relaxed">
              Uniting senior chartered accountancy expertise, turnkey real estate execution, and institutional venture fund governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14">
            {LEADERSHIP_TEAM.map((member, index) => (
              <LeaderCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHRONICLE OF GROWTH (1990 -> 2025) */}
      <section
        id="history-timeline-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#e2ece6]"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#c59e5f] block mb-2">
            Chronicle of Growth
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
            Our Evolution Since 1990
          </h2>
          <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#555555] font-light mt-4 leading-relaxed">
            From founding a landmark Delhi taxation practice to pioneering venture capital GP funds and institutional real estate AIFs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-[#c59e5f]/40 space-y-12 sm:space-y-14">
          {TIMELINE_MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 bg-white border-2 border-[#c59e5f] rounded-full group-hover:bg-[#1a382d] transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#10241d] font-normal leading-none tracking-tight">
                  {milestone.year}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c59e5f] font-medium">
                  {milestone.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#10241d] mb-2 font-normal">
                {milestone.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-3">
                {milestone.description}
              </p>

              {milestone.highlight && (
                <div className="inline-block text-[11px] font-mono text-[#1a382d] bg-[#f6f9f7] px-3 py-1 border border-[#e2ece6]">
                  {milestone.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
