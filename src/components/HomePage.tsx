import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { STRATEGIC_PILLARS, IMAGES, HOME_METRICS } from '../data/content';
import { ArrowUpRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToMission = () => {
    document.getElementById('mission-vision-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO */}
      <section
        id="hero-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: heading */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 sm:w-40 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mb-6"
            />

            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-normal leading-[1.1] text-[#10241d] tracking-tight"
            >
              Three businesses. One balance sheet. Since 1993.
            </motion.h1>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#333333] font-light leading-relaxed max-w-lg mt-6"
            >
              A New Delhi family office. A chartered accountancy practice, boutique hotels and
              resorts we build and run ourselves, and our own capital in land, private companies
              and public markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto"
            >
              <button
                id="hero-philosophy-btn"
                onClick={scrollToMission}
                className="bg-[#1a382d] hover:bg-[#10241d] active:bg-[#0b1a14] text-white px-7 py-3 text-sm font-normal transition-all cursor-pointer border-none shadow-[0_4px_16px_rgba(26,56,45,0.15)] flex items-center justify-center gap-3 group whitespace-nowrap"
              >
                <span>Why we do it this way</span>
                <span className="w-4 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover:w-7" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-3 text-sm font-medium text-[#1a382d] hover:text-[#c59e5f] transition-colors bg-neutral-50/50 hover:bg-neutral-50 whitespace-nowrap"
              >
                Our history
              </button>
            </motion.div>
          </div>

          {/* Right: hero image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl shadow-[0_22px_55px_-12px_rgba(26,56,45,0.14)] group"
            >
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/11] max-h-[420px] xl:max-h-[450px] bg-[#f0f4f2] relative">
                <img
                  id="hero-office-image"
                  src={IMAGES.heroOffice}
                  alt="A board meeting in the New Delhi office"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* METRICS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 p-7 sm:p-9 bg-[#f9fcfb] border border-[#e2ece6] shadow-sm"
        >
          {HOME_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-start border-l-2 border-[#c59e5f]/60 pl-4 sm:pl-5"
            >
              <span className="font-serif text-5xl sm:text-6xl lg:text-[64px] text-[#10241d] block font-normal tracking-tight leading-none">
                {metric.value}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-[#c59e5f] font-semibold mt-3 block">
                {metric.label}
              </span>
              <p className="text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2. MISSION & VISION */}
      <section
        id="mission-vision-section"
        className="w-full bg-[#fafbfa] border-y border-[#e2ece6] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#10241d] tracking-tight">
              What we are trying to do
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mt-4" />
            <p className="font-serif text-lg sm:text-xl text-[#1a382d] italic leading-snug mt-6 max-w-xl">
              &ldquo;We invest our own money, on our own timeline. That is the whole
              advantage.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-7 sm:p-8 relative shadow-[0_8px_30px_rgba(26,56,45,0.04)] border border-[#e2ece6] hover:border-[#c59e5f]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f0f5f2] border border-[#c59e5f]/40 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[#c59e5f]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#10241d] tracking-tight">
                    Mission
                  </h3>
                </div>
                <span className="text-3xl font-serif text-[#e2ece6] font-bold">01</span>
              </div>

              <p className="text-base text-[#444444] font-light leading-relaxed">
                Back technical founders early and stay useful after the cheque clears. Defend
                clients through the hardest tax proceedings in India without taking shortcuts.
                Build hotels we intend to own for decades rather than flip. The three are
                different trades, but they reward the same thing: being right slowly.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f3f7f5] p-7 sm:p-8 relative shadow-[0_8px_30px_rgba(26,56,45,0.04)] border border-[#d6e5dd] hover:border-[#1a382d] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white border border-[#1a382d]/30 flex items-center justify-center">
                    <TrendingUp size={18} className="text-[#1a382d]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#10241d] tracking-tight">
                    Vision
                  </h3>
                </div>
                <span className="text-3xl font-serif text-[#d6e5dd] font-bold">02</span>
              </div>

              <p className="text-base text-[#444444] font-light leading-relaxed">
                To compound across generations instead of fund cycles. The practice gives us
                regulatory judgement, the hotels give us hard assets that pay through a downturn,
                and the investment book gives us growth. Each one funds the patience the other
                two need. We would like all three to still be here in fifty years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE BUSINESSES */}
      <section
        id="strategic-pillars-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2
            id="pillars-section-title"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#10241d] tracking-tight"
          >
            What we run
          </h2>
          <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#555555] font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Each one old enough to have been through a downturn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {STRATEGIC_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col p-6 sm:p-7 transition-all hover:-translate-y-1.5 duration-500 group relative border border-[#e2ece6] ${
                index === 1
                  ? 'bg-[#f4f7f5] shadow-sm'
                  : 'bg-white shadow-[0_8px_30px_rgba(26,56,45,0.04)] hover:shadow-[0_16px_50px_rgba(26,56,45,0.09)]'
              }`}
            >
              <div className="overflow-hidden w-full h-64 lg:h-72 mb-5 relative bg-[#eef3f0] shadow-sm">
                <img
                  src={pillar.imageUrl}
                  alt={pillar.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 bg-[#10241d]/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#dcc18b]">
                  {pillar.category}
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#10241d] mb-1 leading-snug">
                {pillar.title}
              </h3>

              <span className="text-[11px] font-mono tracking-[0.16em] text-[#c59e5f] uppercase mb-3">
                {pillar.since}
              </span>

              <p className="text-[#555555] text-sm font-light leading-relaxed flex-grow mb-5">
                {pillar.description}
              </p>

              <div className="mt-auto pt-4 border-t border-neutral-200/70">
                <button
                  onClick={() => onNavigate(pillar.id === 'investment-arm' ? 'investments' : 'about')}
                  className="group/btn relative text-[11px] uppercase tracking-[0.2em] font-medium text-[#10241d] inline-flex items-center gap-2 cursor-pointer overflow-hidden pb-1"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#c59e5f]">
                    {pillar.ctaLabel}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-[#c59e5f]"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover/btn:w-full" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE ADVANTAGE */}
      <section
        id="stable-capital-platform-section"
        className="relative w-full overflow-hidden py-14 sm:py-20 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.stableCapital}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a14]/85 via-[#10241d]/70 to-[#0b1a14]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex justify-end">
          <motion.div
            id="stable-capital-card"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl bg-white border-2 border-[#1a382d] p-8 sm:p-10 shadow-2xl relative"
          >
            <div className="w-12 h-[2px] bg-[#c59e5f] mb-5" />

            <h2
              id="stable-capital-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#10241d] mb-4"
            >
              No fund clock
            </h2>
            <p className="text-sm sm:text-base text-[#333333] font-light leading-relaxed">
              The capital is ours, so there is no ten-year window to return it in. We can write a
              first cheque, sit through a flat year, or hold a land parcel for a decade without
              explaining it to an investment committee. Founders and fund managers deal directly
              with the people who own the money.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
