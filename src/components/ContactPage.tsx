import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Building2, TrendingUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-[#222222] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.24em] font-medium text-[#c59e5f] mb-3 block"
          >
            COMMUNICATIONS | DIRECTORY
          </motion.span>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 sm:w-48 h-[2px] bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736] mt-2 mb-6"
          />

          <motion.h1
            id="contact-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.06] text-[#10241d] tracking-tight mb-6"
          >
            Contact &amp; Coordinates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#333333] font-light leading-relaxed"
          >
            Principal headquarters for SSA Family Holdings, our premier chartered accountancy practice Sanjay Satpal and Associates, hospitality division, and institutional investment offices in New Delhi.
          </motion.p>
        </div>

        {/* Primary Office Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Headquarters Details */}
          <div className="lg:col-span-7 bg-[#f8faf8] p-8 sm:p-12 flex flex-col justify-between shadow-[0_12px_40px_rgba(26,56,45,0.05)] relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a382d] to-[#10241d]" />
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#c59e5f] block mb-2">
                PRINCIPAL HEADQUARTERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#10241d] mb-6">
                New Delhi Office
              </h2>

              <div className="space-y-6 text-[#333333]">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-[#c59e5f]/40 flex items-center justify-center text-[#1a382d] shrink-0 mt-0.5">
                    <MapPin size={20} className="text-[#c59e5f]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Office Location
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-[#10241d]">
                      Building no. - 5, 3rd floor, and terrace, Ring Rd
                    </p>
                    <p className="text-sm text-[#555555] font-light mt-0.5">
                      Nirmal Puri, Nirmal Colony, Block 4, Lajpat Nagar 4, New Delhi 110024
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 pt-4 border-t border-neutral-200">
                  <div className="w-10 h-10 bg-white border border-[#c59e5f]/40 flex items-center justify-center text-[#1a382d] shrink-0 mt-0.5">
                    <Phone size={20} className="text-[#c59e5f]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Direct Telephone Line
                    </span>
                    <a
                      href="tel:01146580000"
                      className="font-mono text-xl sm:text-2xl text-[#1a382d] hover:text-[#c59e5f] transition-colors font-medium"
                    >
                      011-46580000
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5 font-light">
                      Available Monday to Friday | 09:30 to 18:30 IST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-4 border-t border-neutral-200">
                  <div className="w-10 h-10 bg-white border border-[#c59e5f]/40 flex items-center justify-center text-[#1a382d] shrink-0 mt-0.5">
                    <Mail size={20} className="text-[#c59e5f]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      General Institutional Inquiries
                    </span>
                    <a
                      href="mailto:contact@ssassociate.co.in"
                      className="font-sans text-base sm:text-lg text-[#1a382d] hover:text-[#c59e5f] transition-colors font-medium underline underline-offset-4"
                    >
                      contact@ssassociate.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200 mt-8 text-xs font-mono text-neutral-400 tracking-wider uppercase">
              VISITS STRICTLY BY PRIOR INSTITUTIONAL APPOINTMENT
            </div>
          </div>

          {/* Division Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Division 1: CA Practice */}
            <div className="bg-white p-6 shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)] transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#f8faf8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={18} className="text-[#c59e5f]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c59e5f]">
                    CA PRACTICE (SANJAY SATPAL AND ASSOCIATES)
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#10241d] mb-1">
                  Search &amp; Seizure | Tax Advisory
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed mb-4">
                  Section 132 defense, survey litigation, corporate taxation, and statutory audit representation.
                </p>
                <a
                  href="https://www.ssassociate.co.in/resource/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-[#1a382d] hover:text-[#c59e5f] uppercase tracking-wider transition-colors"
                >
                  <span className="relative overflow-hidden pb-0.5">
                    Visit SSAssociate.co.in
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ExternalLink size={12} className="text-[#c59e5f] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Division 2: Hospitality */}
            <div className="bg-[#f2f6f4] p-6 shadow-none hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)] transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 size={18} className="text-[#c59e5f]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c59e5f]">
                    HOSPITALITY DIVISION
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#10241d] mb-1">
                  Hotels &amp; Resorts Management
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Turnkey development, asset construction, and management of NCR boutique hotels and Jim Corbett luxury resorts.
                </p>
              </div>
            </div>

            {/* Division 3: Investment Arm */}
            <div className="bg-white p-6 shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_40px_rgba(26,56,45,0.08)] transition-transform duration-500 hover:-translate-y-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#f8faf8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp size={18} className="text-[#c59e5f]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c59e5f]">
                    INVESTMENT ARM
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#10241d] mb-1">
                  Fund Partnerships &amp; Venture Investments
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed mb-4">
                  Direct angel allocations, Seafund GP fund queries, SGRE Real Estate AIFs, and institutional LP relations.
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <a
                    href="https://www.seafund.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-[#1a382d] hover:text-[#c59e5f] font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden pb-0.5">
                      Seafund.in
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ExternalLink size={11} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  <span className="text-neutral-300">|</span>
                  <a
                    href="https://www.sgre.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-[#1a382d] hover:text-[#c59e5f] font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden pb-0.5">
                      SGRE.in
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ExternalLink size={11} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
