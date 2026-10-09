import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { ExtendedLeadershipMember } from '../data/aboutData';
import { PedigreeLogo } from './PedigreeLogos';

interface LeaderCardProps {
  member: ExtendedLeadershipMember;
  index: number;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ member, index }) => {
  return (
    <motion.div
      id={`leader-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col p-7 sm:p-8 transition-transform duration-500 hover:-translate-y-1 relative group ${
        index === 1
          ? 'bg-[#f2f6f4] lg:mt-12' // Subtle staggered middle column for Agam
          : 'bg-white shadow-[0_4px_24px_rgba(26,56,45,0.03)] hover:shadow-[0_16px_60px_rgba(26,56,45,0.08)]'
      }`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${
          index === 1 ? 'bg-white shadow-[0_16px_60px_rgba(26,56,45,0.08)]' : 'bg-[#f8faf8]'
        }`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* 
          Permanently placed, unedited executive photo:
          Sized conservatively (max-w-[240px], h-[260px] sm:h-[280px]) so square crops
          and vertical shots frame naturally without distortion, excessive zoom, or edits.
        */}
        <div className="w-full max-w-[240px] mx-auto h-[260px] sm:h-[280px] mb-6 relative rounded-xs overflow-hidden bg-[#f4f7f5] border border-[#e2ece6] shadow-[0_2px_12px_rgba(26,56,45,0.04)]">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Role & LinkedIn Link */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c59e5f] font-semibold">
            {member.role}
          </span>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn Profile`}
              className="text-[#1a382d] hover:text-[#c59e5f] transition-colors p-1"
            >
              <Linkedin size={16} />
            </a>
          )}
        </div>

        <h3 className="font-serif text-2xl text-[#1a382d] font-normal mb-1">
          {member.name}
        </h3>

        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-5">
          {member.focus}
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-neutral-600 mb-6 flex-1 font-light">
          {member.bio}
        </p>

        {/* Pedigree & Affiliation Logos */}
        {member.pedigreeLogos && member.pedigreeLogos.length > 0 && (
          <div className="pt-5 border-t border-neutral-200/80">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 block mb-3">
              BACKGROUND &amp; AFFILIATIONS
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {member.pedigreeLogos.map((logoKey) => (
                <div key={logoKey} className="transition-transform duration-200 hover:-translate-y-0.5">
                  <PedigreeLogo name={logoKey} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
