import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Investments', page: 'investments' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
        scrolled ? 'border-[#c59e5f]/40 shadow-[0_4px_20px_rgba(26,56,45,0.06)]' : 'border-neutral-200/80'
      }`}
    >
      {/* Top micro-stripe in antique gold */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#9d7736] via-[#dcc18b] to-[#9d7736]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Authentic SSA Logo Lockup */}
          <Logo
            variant="dark"
            format="horizontal"
            size="md"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            <nav
              id="desktop-nav-links"
              className="flex items-center gap-10 lg:gap-12"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    id={`nav-link-${item.page}`}
                    onClick={() => handleNavClick(item.page)}
                    className={`relative group text-[13px] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer font-medium py-1.5 ${
                      isActive
                        ? 'text-[#10241d]'
                        : 'text-neutral-500 hover:text-[#10241d]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#c59e5f] transition-all duration-500 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1a382d] hover:bg-neutral-100 rounded-none focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-[#c59e5f]/30 px-6 py-4 shadow-md animate-in slide-in-from-top-1 duration-150"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`mobile-nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-base py-2.5 px-2 transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'font-medium text-[#1a382d] bg-[#f3f7f5] border-l-2 border-[#c59e5f]'
                      : 'text-neutral-700 hover:text-[#1a382d]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c59e5f]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

