export interface LPFundPosition {
  id: string;
  name: string;
  firm: string;
  /** Matches a file in src/assets/logos/ — see BrandLogo. */
  logoType: string;
  fundType: string;
  vintage: string;
  mandate: string;
  website: string;
  disclosed: boolean;
}

// Real Estate
export const REAL_ESTATE_OVERVIEW = {
  direct: {
    title: 'Direct land holdings',
    scope: 'Warehousing, residential and agricultural land in and around NCR',
    details: [
      'Contiguous parcels along high-growth NCR corridors',
      'Freehold, 100% clear title, held unlevered',
      'Warehousing and logistics sites on highway economic zones',
      'Agricultural holdings positioned ahead of urban expansion',
    ],
  },
  gpFunds: {
    title: 'SGRE Fund I and Fund 2',
    link: 'https://www.sgre.in/',
    scope: 'Two SEBI-registered Category II AIFs',
    details: [
      'Fund I: ₹450 Cr closed, targeting ₹2,000 Cr deployed',
      'Fund 2: distressed assets and turnaround financing',
      'Asset-backed debt and equity, residential and commercial',
      'In-house underwriting and governance',
    ],
  },
};

// Private markets: disclosed LP relationships
export const LP_FUND_POSITIONS: LPFundPosition[] = [
  {
    id: 'lp-rpsg',
    name: 'RPSG Capital Ventures',
    firm: 'RPSG Group',
    logoType: 'rpsg',
    fundType: 'Consumer & early stage',
    vintage: '2020',
    mandate:
      'The RPSG Group’s venture arm, backing Indian consumer, D2C and healthcare brands from seed through growth.',
    website: 'https://www.rpsgcapitalventures.com',
    disclosed: true,
  },
  {
    id: 'lp-stride',
    name: 'Stride Ventures',
    firm: 'Stride Ventures',
    logoType: 'stride',
    fundType: 'Venture debt',
    vintage: '2019',
    mandate:
      'India’s largest venture debt platform. Non-dilutive growth capital for companies that already have revenue and would rather not sell equity for it.',
    website: 'https://strideventures.in',
    disclosed: true,
  },
  {
    id: 'lp-founderbank',
    name: 'Founder Bank Capital',
    firm: 'Founder Bank Capital',
    logoType: 'fbc',
    fundType: 'Seed',
    vintage: '2021',
    mandate:
      'A founders-first seed fund, largely capitalised by operators, writing first institutional cheques into Indian tech.',
    website: 'https://founderbankcapital.com',
    disclosed: true,
  },
  {
    id: 'lp-gemba',
    name: 'Gemba Capital',
    firm: 'Gemba Capital',
    logoType: 'gemba',
    fundType: 'Micro-VC',
    vintage: '2021',
    mandate:
      'High-conviction micro-VC running a concentrated book across fintech, enterprise SaaS and consumer internet.',
    website: 'https://gembacapital.in',
    disclosed: true,
  },
];

// Private markets: angel portfolio by sector
export const ANGEL_SECTORS_SUMMARY = [
  {
    sector: 'DeepTech & AI',
    count: '15+ companies',
    description:
      'Autonomous robotics, POSIT silicon, orbital edge compute and defence AI.',
  },
  {
    sector: 'FinTech & InsurTech',
    count: '12+ companies',
    description:
      'Embedded premium financing, alternate credit underwriting and MSME supply-chain lending.',
  },
  {
    sector: 'HealthTech & BioTech',
    count: '8+ companies',
    description:
      'Medical drone delivery, diagnostic hardware and assistive exoskeletons.',
  },
  {
    sector: 'Defence & Aerospace',
    count: '6+ companies',
    description: 'Spatial intelligence, tactical UAV platforms and defence logistics.',
  },
  {
    sector: 'Consumer & D2C',
    count: '9+ companies',
    description: 'Branded consumer products, EV mobility and omnichannel retail.',
  },
];
