import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { InvestmentsPage } from './components/InvestmentsPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Sync scroll on page change
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222] selection:bg-black selection:text-white font-sans">
      {/* Institutional Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'investments' && (
              <InvestmentsPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'portfolio' && (
              <PortfolioPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Institutional Dark Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
