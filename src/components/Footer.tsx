import React from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="main-site-footer"
      className="bg-[#0c1a14] text-white pt-16 sm:pt-20 pb-12 sm:pb-16 border-t border-[#c59e5f]/30 relative"
    >
      {/* Top subtle golden shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c59e5f] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 pb-12 border-b border-white/10">
          {/* Left: Brand Identity using Authentic Logo */}
          <div className="flex flex-col items-start">
            <Logo
              variant="light"
              format="horizontal"
              size="md"
              onClick={() => onNavigate('home')}
              className="cursor-pointer"
            />
            <p className="mt-4 text-xs sm:text-sm text-[#9cb5a8] max-w-sm font-light leading-relaxed">
              A family office in New Delhi. Tax practice, hotels, and our own capital,
              since 1990.
            </p>
          </div>

          {/* Right: Institutional Coordinates with Delhi Address & Phone */}
          <div className="text-left sm:text-right text-xs sm:text-sm text-neutral-300 font-light space-y-1.5">
            <p className="text-[#c59e5f] text-xs uppercase tracking-[0.2em] font-medium mb-2">
              New Delhi
            </p>
            <p id="footer-address-line1" className="text-[#e2ece6]">
              Building no. - 5, 3rd floor, and terrace, Ring Rd
            </p>
            <p id="footer-address-line2" className="text-[#e2ece6]">
              Nirmal Puri, Nirmal Colony, Block 4, Lajpat Nagar 4, New Delhi 110024
            </p>
            <p id="footer-telephone" className="pt-1">
              <a
                href="tel:01146580000"
                className="hover:text-[#c59e5f] transition-colors font-mono"
              >
                011-46580000
              </a>
            </p>
            <p id="footer-email">
              <a
                href="mailto:agam@ssafamilyholdings.com"
                className="hover:text-[#c59e5f] transition-colors"
              >
                agam@ssafamilyholdings.com
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase font-light">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 text-[#b0cbbe]">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative cursor-pointer font-medium"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative cursor-pointer font-medium"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
            <button
              onClick={() => {
                onNavigate('investments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative cursor-pointer font-medium"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Investments</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative cursor-pointer font-medium"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Portfolio</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative cursor-pointer font-medium"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c59e5f] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d9b8c]">
          <p>© {new Date().getFullYear()} SSA Family Holdings. All rights reserved.</p>
          <p className="tracking-[0.24em] uppercase text-[10px] text-[#c59e5f]/90 font-light">
            New Delhi &middot; Founded 1990
          </p>
        </div>
      </div>
    </footer>
  );
};
