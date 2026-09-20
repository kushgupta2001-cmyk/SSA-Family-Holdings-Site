export interface AssetPillar {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const STRATEGIC_PILLARS: AssetPillar[] = [
  {
    id: 'ca-firm',
    category: 'PROFESSIONAL PRACTICE',
    title: 'CA Firm: Sanjay Satpal and Associates',
    description:
      'Tier-1 New Delhi chartered accountancy firm established in 1990, specializing in Income Tax Search and Seizure proceedings (Sec 132), dispute resolution, corporate tax advisory, and statutory audit.',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85', // Legal/documents, high-end professional
    imageAlt: 'Legal and financial documentation representing professional advisory',
  },
  {
    id: 'hospitality',
    category: 'PHYSICAL ASSETS & HOSPITALITY',
    title: 'Hospitality: Boutique Hotels & Resorts',
    description:
      'Turnkey architectural construction, civil development, and operational management of a curated boutique hotel chain across Delhi/NCR and luxury wilderness eco-resorts in Jim Corbett National Park.',
    imageUrl:
      '/assets/images/luxury-boutique-resort.jpg', // Curated luxury boutique resort with infinity pool
    imageAlt: 'Luxury boutique resort with panoramic pool and architectural sun terrace',
  },
  {
    id: 'investment-arm',
    category: 'CAPITAL ALLOCATION',
    title: 'Investment Arm: Real Estate, Private & Public',
    description:
      'Multi-asset family office deploying balance sheet capital and institutional funds across NCR land parcels & SGRE AIFs, 50+ startup investments, Tier-1 VC/venture debt LPs, and 30+ years in public equities.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85', // Modern financial district architectural tower
    imageAlt: 'Modern architectural financial headquarters tower',
  },
];

export const IMAGES = {
  // Hero: Prestigious modern executive conference suite with natural light and skyline perspective
  heroOffice:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
  // Mission & Vision: Timeless monumental institutional headquarters architecture
  heritageBoardroom:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  // Stable Capital Platform: Modern minimalist architectural atrium
  stableCapital:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85',
  // Investments: Modern fluted vertical facade
  privateMarketsFacade:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  // Investments: Architectural executive glass and steel civic interior
  publicMarketsCivic:
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
  // Investments: Architectural modernist facade
  realEstateModern:
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
};
