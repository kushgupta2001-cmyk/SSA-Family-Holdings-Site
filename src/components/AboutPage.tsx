import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { LEADERSHIP_TEAM, TIMELINE_MILESTONES } from '../data/aboutData';
import { LeaderCard } from './LeaderCard';
import { ShieldCheck, Building2, TrendingUp, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO */}
      <section
        id="about-hero-section"
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
            id="about-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[70px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-6"
          >
            It started with one tax practice
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-base sm:text-lg text-[#333333] font-light leading-relaxed"
          >
            <p>
              Sanjay Kumar Gupta opened a chartered accountancy firm in New Delhi in 1990. The work
              that defined it — defending clients through Income Tax search and seizure
              proceedings — is unglamorous, adversarial and entirely about judgement under
              pressure. Thirty-five years later it is still the firm&rsquo;s reputation.
            </p>
            <p>
              What came after grew out of it. Retained earnings went into public equities, then
              land, then hotels the family built and chose to keep operating. In 2014 the next
              generation started writing angel cheques; by 2022 the group was managing funds for
              outside investors as well as its own. SSA Family Holdings is what holds those three
              businesses together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE THREE DIVISIONS */}
      <section
        id="operating-divisions-section"
        className="w-full bg-[#f8faf8] border-y border-[#e2ece6] py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              The three divisions
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* DIVISION 1: CA PRACTICE */}
            <div className="bg-white p-8 shadow-[0_12px_40px_rgba(26,56,45,0.06)] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div>
                <div className="w-10 h-10 bg-[#f6f9f7] border border-[#c59e5f]/30 flex items-center justify-center text-[#1a382d] mb-5">
                  <ShieldCheck size={20} />
                </div>

                <span className="text-[11px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-1">
                  01
                </span>

                <h3 className="font-serif text-2xl text-[#10241d] mb-1">
                  Sanjay Satpal and Associates
                </h3>
                <span className="text-xs font-mono text-[#1a382d] block mb-4">
                  Chartered accountancy &middot; New Delhi
                </span>

                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  Section 132 search and seizure defence, survey actions, and appellate litigation
                  before CIT(A) and ITAT. Alongside the contentious work: corporate tax advisory,
                  transaction structuring and statutory audit for closely held Indian businesses.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-6">
                <a
                  href="https://www.ssassociate.co.in/resource/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a382d] hover:text-[#c59e5f] uppercase tracking-wider transition-colors"
                >
                  <span>ssassociate.co.in</span>
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
                  02
                </span>

                <h3 className="font-serif text-2xl text-[#10241d] mb-1">Hospitality</h3>
                <span className="text-xs font-mono text-[#1a382d] block mb-4">
                  Delhi/NCR &middot; Jim Corbett
                </span>

                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  Unusually for an owner, we do the whole chain ourselves: site acquisition,
                  architecture, civil construction, then day-to-day operations. Boutique hotels in
                  and around Delhi, and eco-resorts on the Jim Corbett buffer.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200/60 mt-6">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex gap-4">
                  <span>Build</span>
                  <span>Own</span>
                  <span>Operate</span>
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
                  03
                </span>

                <h3 className="font-serif text-2xl text-white mb-1">Investments</h3>
                <span className="text-xs font-mono text-[#b0cbbe] block mb-4">
                  Direct &middot; LP &middot; GP
                </span>

                <p className="text-xs sm:text-sm text-[#8caba1] font-light leading-relaxed">
                  Three ways in. We buy land and companies directly off the balance sheet, commit
                  as a limited partner to funds run by managers we rate, and run our own funds as
                  GP — Seafund in deeptech, SGRE in real estate.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => onNavigate('investments')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a382d] hover:bg-white hover:text-[#10241d] text-white py-3 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
                >
                  <span>Where the capital goes &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP */}
      <section id="leadership-section" className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
              Who runs it
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
            <p className="text-sm sm:text-base text-[#555555] font-light mt-4 leading-relaxed">
              Two generations, three seats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14">
            {LEADERSHIP_TEAM.map((member, index) => (
              <LeaderCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE */}
      <section
        id="history-timeline-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#e2ece6]"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#10241d] tracking-tight">
            1990 to now
          </h2>
          <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
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
