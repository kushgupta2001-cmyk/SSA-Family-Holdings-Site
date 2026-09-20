import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { STRATEGIC_PILLARS, IMAGES } from '../data/content';
import { ArrowUpRight, ShieldCheck, Award, TrendingUp, Building2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToMission = () => {
    const el = document.getElementById('mission-vision-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-[#222222] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-[1.15] text-[#10241d] tracking-tight"
            >
              Entrepreneurial Excellence &amp; Disciplined Capital Allocation
            </motion.h1>

            {/* Elegant Antique Gold Rule Line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 sm:w-40 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mt-4 mb-4 sm:mb-5"
            />

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#333333] font-light leading-relaxed max-w-lg"
            >
              Operating across a premier chartered accountancy practice, turnkey hospitality construction and management, and multi-asset investments across real estate, private markets, and public securities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mt-5 sm:mt-6"
            >
              <button
                id="hero-philosophy-btn"
                onClick={scrollToMission}
                className="bg-[#1a382d] hover:bg-[#10241d] active:bg-[#0b1a14] text-white px-7 py-3 text-sm font-normal tracking-normal transition-all cursor-pointer border-none shadow-[0_4px_16px_rgba(26,56,45,0.15)] flex items-center gap-3 group"
              >
                <span>Mission &amp; Vision</span>
                <span className="w-4 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover:w-7" />
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 text-sm font-medium text-[#1a382d] hover:text-[#c59e5f] transition-colors bg-neutral-50/50 hover:bg-neutral-50"
              >
                About Our History
              </button>
            </motion.div>
          </div>

          {/* Right Column: Hero Office Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
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
                  alt="SSA Family Holdings leadership and investment team collaborating in boardroom"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* METRICS BANNER - Bold, larger numbers with tight clean spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-7 bg-[#f9fcfb] border border-[#e2ece6] shadow-sm rounded-sm"
        >
          <div className="flex flex-col items-start border-l-2 border-[#c59e5f]/60 pl-4 sm:pl-5">
            <span className="font-serif text-6xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#10241d] block font-black tracking-tighter leading-none">
              150+
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#c59e5f] font-semibold mt-2.5 block">
              Total Investments
            </span>
            <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
              Deployed across real estate, private &amp; public equities.
            </p>
          </div>
          <div className="flex flex-col items-start border-l-2 border-[#c59e5f]/60 pl-4 sm:pl-5">
            <span className="font-serif text-6xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#10241d] block font-black tracking-tighter leading-none">
              50+
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#c59e5f] font-semibold mt-2.5 block">
              Startups Backed
            </span>
            <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
              Direct angels and venture syndicate co-investments.
            </p>
          </div>
          <div className="flex flex-col items-start border-l-2 border-[#c59e5f]/60 pl-4 sm:pl-5">
            <span className="font-serif text-6xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#10241d] block font-black tracking-tighter leading-none">
              4+
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#c59e5f] font-semibold mt-2.5 block">
              Funds Managed
            </span>
            <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
              GP leadership across SGRE Funds &amp; Seafund AIF.
            </p>
          </div>
          <div className="flex flex-col items-start border-l-2 border-[#c59e5f]/60 pl-4 sm:pl-5">
            <span className="font-serif text-6xl sm:text-7xl lg:text-7xl xl:text-8xl text-[#10241d] block font-black tracking-tighter leading-none">
              1990
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#c59e5f] font-semibold mt-2.5 block">
              Continuous Heritage
            </span>
            <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
              Steady operating and advisory stewardship over decades.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION SECTION - Aesthetic Visual Layout */}
      <section
        id="mission-vision-section"
        className="w-full bg-[#fafbfa] border-y border-[#e2ece6] py-10 sm:py-14"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Sub-header */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-[0.28em] font-medium text-[#c59e5f] block mb-2">
              FOUNDATIONAL PURPOSE &amp; OUTLOOK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#10241d] tracking-tight">
              Mission &amp; Vision
            </h2>
            <div className="w-16 h-[2px] bg-[#c59e5f] mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Visual Element (Left on Desktop): Framing the new high-res Boardroom image */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden shadow-[0_20px_50px_rgba(26,56,45,0.12)] border-2 border-[#1a382d]/20 bg-[#10241d]"
              >
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden relative">
                  <img
                    src={IMAGES.heritageBoardroom}
                    alt="Historic Qutub Minar in New Delhi representing foundational heritage since 1990"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a14]/80 via-transparent to-black/10" />

                  {/* Corner Accent Seals */}
                  <div className="absolute top-4 left-4 border border-[#c59e5f]/60 px-3 py-1.5 bg-[#10241d]/80 backdrop-blur-sm">
                    <span className="text-[10px] font-mono tracking-[0.24em] text-[#dcc18b] uppercase">
                      EST. 1990 • NEW DELHI
                    </span>
                  </div>

                  {/* Bottom Caption Plaque */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm border-l-3 border-[#c59e5f] shadow-md">
                    <p className="font-serif text-sm text-[#10241d] italic leading-snug">
                      &ldquo;Disciplined stewardship is not merely managing capital; it is safeguarding the generational trust of founders and partners.&rdquo;
                    </p>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#777] block mt-1.5">
                      Sanjay Satpal &amp; Associates Family Office
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Geometric Underlay */}
              <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#e8efe9] -z-10" />
              <div className="absolute -top-3 -left-3 w-28 h-28 border border-[#c59e5f]/40 -z-10" />
            </div>

            {/* Text Content (Right on Desktop): Distinctive Two Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-7 sm:p-8 relative shadow-[0_8px_30px_rgba(26,56,45,0.04)] border border-[#e2ece6] group hover:border-[#c59e5f]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#f0f5f2] border border-[#c59e5f]/40 flex items-center justify-center text-[#1a382d]">
                      <ShieldCheck size={18} className="text-[#c59e5f]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.24em] text-[#c59e5f] uppercase block">
                        CORE PURPOSE
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#10241d] tracking-tight">
                        Our Mission
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-serif text-[#e2ece6] font-bold">01</span>
                </div>

                <p className="text-base text-[#444444] font-light leading-relaxed">
                  To drive long-lasting societal development and enduring commercial value through disciplined stewardship. We empower transformational founders via emerging technology venture investments, protect institutional resilience through ethical corporate finance, and build lasting physical infrastructure through premier boutique hospitality.
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-4 text-xs font-mono text-neutral-500">
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#c59e5f] rounded-full" />
                    Emerging Tech Empowerment
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#c59e5f] rounded-full" />
                    Ethical Tax Governance
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#c59e5f] rounded-full" />
                    Curated Hospitality
                  </span>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#f3f7f5] p-7 sm:p-8 relative shadow-[0_8px_30px_rgba(26,56,45,0.04)] border border-[#d6e5dd] group hover:border-[#1a382d] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white border border-[#1a382d]/30 flex items-center justify-center text-[#1a382d]">
                      <TrendingUp size={18} className="text-[#1a382d]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.24em] text-[#1a382d] uppercase block">
                        LONG-TERM HORIZON
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#10241d] tracking-tight">
                        Our Vision
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-serif text-[#d6e5dd] font-bold">02</span>
                </div>

                <p className="text-base text-[#444444] font-light leading-relaxed">
                  To cultivate multi-generational wealth and enduring institutional sovereignty that transcends financial capital. We envision an integrated family office ecosystem where three decades of statutory regulatory mastery, turnkey physical asset creation, and patient venture allocation converge to compound unshakeable institutions for decades to come.
                </p>

                <div className="mt-4 pt-3 border-t border-[#e2ece6] flex flex-wrap gap-4 text-xs font-mono text-neutral-600">
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#1a382d] rounded-full" />
                    Generational Compounding
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#1a382d] rounded-full" />
                    Sovereign Balance Sheet
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#1a382d]">
                    <span className="w-1.5 h-1.5 bg-[#1a382d] rounded-full" />
                    Decades of Proven Trust
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC PILLARS SECTION - Larger Images & Distinct Photos */}
      <section
        id="strategic-pillars-section"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-xs uppercase tracking-[0.28em] font-medium text-[#c59e5f] block mb-2">
            The Three Pillars of SSA Family Holdings
          </span>
          <h2
            id="pillars-section-title"
            className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#10241d] tracking-tight text-center"
          >
            Strategic Pillars
          </h2>
          <div className="w-16 h-[2px] bg-[#c59e5f] mx-auto mt-3" />
          <p className="text-sm sm:text-base text-[#555555] font-light mt-3 max-w-2xl mx-auto leading-relaxed">
            Our multi-disciplinary foundation spans professional advisory, physical asset creation, and sovereign capital allocation.
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
              {/* Pillar Image - Significantly bigger height and prominent framing */}
              <div className="overflow-hidden w-full h-64 sm:h-68 lg:h-72 mb-5 relative bg-[#eef3f0] shadow-sm">
                <img
                  src={pillar.imageUrl}
                  alt={pillar.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 bg-[#10241d]/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#dcc18b]">
                  PILLAR 0{index + 1}
                </div>
              </div>

              {/* Category Tag */}
              <span className="text-[11px] font-medium tracking-[0.24em] text-[#c59e5f] uppercase font-mono mb-2">
                {pillar.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#10241d] mb-3 leading-snug">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[#555555] text-sm font-light leading-relaxed flex-grow mb-5">
                {pillar.description}
              </p>

              {/* Action Link */}
              <div className="mt-auto pt-4 border-t border-neutral-200/70">
                <button
                  onClick={() => {
                    if (pillar.id === 'investment-arm') {
                      onNavigate('investments');
                    } else {
                      onNavigate('about');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group/btn relative text-[11px] uppercase tracking-[0.2em] font-medium text-[#10241d] inline-flex items-center gap-2 cursor-pointer overflow-hidden pb-1"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#c59e5f]">Explore Division</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-[#c59e5f]" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover/btn:w-full" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. STABLE CAPITAL PLATFORM SECTION */}
      <section
        id="stable-capital-platform-section"
        className="relative w-full overflow-hidden py-12 sm:py-16 px-6 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.stableCapital}
            alt="Dramatic architectural stone gallery with monolithic boardroom table"
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
            className="w-full max-w-xl bg-white border-2 border-[#1a382d] p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="w-12 h-[2px] bg-[#c59e5f] mb-5" />

            <h2
              id="stable-capital-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#10241d] mb-4"
            >
              Institutional Integrity &amp; Sovereign Discretion
            </h2>
            <p className="text-sm sm:text-base text-[#333333] font-light leading-relaxed">
              SSA Family Holdings operates as a patient, high-conviction capital partner. With thirty-five years of foundation in Indian enterprise, we provide balance-sheet certainty, deep industry access, and strategic alignment to the founders and fund managers we back.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
