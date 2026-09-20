export interface LPFundPosition {
  id: string;
  name: string;
  firm: string;
  fundType: string;
  vintage: string;
  mandate: string;
  website: string;
  disclosed: boolean;
}

// Real Estate Assets Breakdown
export const REAL_ESTATE_OVERVIEW = {
  direct: {
    title: 'Direct Land & Property Holdings',
    scope: 'Warehousing, residential, and agricultural land parcels in and around NCR',
    details: [
      'Contiguous land parcels in high-growth NCR corridors',
      'Direct freehold ownership with 100% clear titles',
      'Strategic warehousing and logistics hubs along highway economic zones',
      'Long-term agricultural land holdings positioned for future urban expansion',
    ],
  },
  gpFunds: {
    title: 'GP Real Estate Funds: SGRE 1 & 2',
    link: 'https://www.sgre.in/',
    scope: '2 SEBI-registered Category II Alternative Investment Funds (AIFs)',
    details: [
      'SGRE Fund I (₹450 Cr closed, targeting ₹2,000 Cr aggregate deployment)',
      'SGRE Fund 2 (Distressed assets and structured turnaround financing)',
      'Secured asset-backed debt and equity financing for residential and commercial assets',
      'Institutional risk underwriting and rigorous governance frameworks',
    ],
  },
};

// Private Markets: LP Positions in Tier-1 Venture Debt & VC Funds (10+ funds)
export const LP_FUND_POSITIONS: LPFundPosition[] = [
  {
    id: 'lp-rpsg',
    name: 'RPSG Capital Ventures',
    firm: 'RPSG Group',
    fundType: 'Early Stage & Consumer VC',
    vintage: '2020',
    mandate: 'Leading Indian venture capital fund backing pioneering consumer, healthcare, and D2C brands.',
    website: 'https://www.rpsgcapitalventures.com',
    disclosed: true,
  },
  {
    id: 'lp-stride',
    name: 'Stride Ventures',
    firm: 'Stride Ventures',
    fundType: 'Tier-1 Venture Debt Fund',
    vintage: '2019',
    mandate: 'India\'s premier venture debt platform providing non-dilutive growth capital to market-leading startups.',
    website: 'https://strideventures.in',
    disclosed: true,
  },
  {
    id: 'lp-founderbank',
    name: 'Founder Bank Capital',
    firm: 'Founder Bank Capital',
    fundType: 'Early Stage Venture Capital',
    vintage: '2021',
    mandate: 'Founders-first institutional seed fund investing in breakout tech innovators.',
    website: 'https://founderbankcapital.com',
    disclosed: true,
  },
  {
    id: 'lp-gemba',
    name: 'Gemba Capital',
    firm: 'Gemba Capital',
    fundType: 'Seed & Early-Stage Tech VC',
    vintage: '2021',
    mandate: 'High-conviction micro-VC investing in fintech, enterprise SaaS, and consumer tech founders.',
    website: 'https://gembacapital.in',
    disclosed: true,
  },
];

// Private Markets: Angel Portfolio Sector Breakdown (50+ direct investments)
export const ANGEL_SECTORS_SUMMARY = [
  {
    sector: 'DeepTech & AI',
    count: '15+',
    description: 'Autonomous robotics, silicon POSIT semiconductors, orbital edge computing, and defense AI.',
  },
  {
    sector: 'FinTech & InsurTech',
    count: '12+',
    description: 'Embedded premium financing, alternate credit underwriting, and MSME supply-chain lending.',
  },
  {
    sector: 'HealthTech & BioTech',
    count: '8+',
    description: 'Autonomous medical drone delivery, clinical diagnostic hardware, and assistive exoskeleton robotics.',
  },
  {
    sector: 'Defence & Aerospace',
    count: '6+',
    description: 'Multidomain spatial intelligence, tactical UAV platforms, and defense logistics systems.',
  },
  {
    sector: 'Consumer & D2C',
    count: '9+',
    description: 'Next-generation branded consumer products, EV mobility systems, and omnichannel retail platforms.',
  },
];
