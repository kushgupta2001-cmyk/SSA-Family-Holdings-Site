import { LeadershipMember } from '../types';
import sanjayImg from '../assets/images/Sanjay.jpg';
import agamImg from '../assets/images/Agam.png';
import kushagraImg from '../assets/images/Kushagra.png';

export interface Milestone {
  year: string;
  title: string;
  category: string;
  description: string;
  highlight?: string;
}

export interface ExtendedLeadershipMember extends LeadershipMember {
  pedigreeLogos?: Array<'deloitte' | 'microsoft' | 'northwestern' | 'uiuc' | 'tennr'>;
}

export const LEADERSHIP_TEAM: ExtendedLeadershipMember[] = [
  {
    name: 'Sanjay Kumar Gupta',
    role: 'Group MD, CA & Hospitality Lead',
    focus: 'CA Practice, Hospitality Construction & Management',
    bio: 'Fellow Chartered Accountant with 35+ years of practice. Founded Sanjay Satpal and Associates in 1990, establishing it as a premier Delhi firm specializing in Income Tax Search and Seizure operations. Directs the group\'s turnkey hospitality development, construction, and resort operations across NCR and Jim Corbett, as well as real estate AIF fund governance.',
    linkedin: 'https://www.linkedin.com/in/sanjay-kumar-gupta',
    image: sanjayImg,
  },
  {
    name: 'Agam Gupta',
    role: 'Lead of Investments',
    focus: 'Private & Public Investments, GP Funds & LP Allocations',
    bio: 'Leads multi-asset capital allocation across private venture capital, real estate funds, and public equities. General Partner at Seafund ($30M deeptech VC fund) and SGRE Real Estate AIF Funds, while actively managing strategic LP commitments in Tier-1 venture debt and venture capital funds.',
    linkedin: 'https://www.linkedin.com/in/agam-gupta',
    image: agamImg,
    pedigreeLogos: ['deloitte', 'microsoft', 'northwestern'],
  },
  {
    name: 'Kushagra Gupta',
    role: 'Head of New Projects',
    focus: 'Direct Angel Investments, AI & Emerging Tech',
    bio: 'Heads new technology initiatives, early-stage venture syndication, and angel investments across 50+ startups. Focuses on deeptech, artificial intelligence, defense, and healthcare innovation, while steering institutional technology integration across the family office\'s operating entities.',
    linkedin: 'https://www.linkedin.com/in/kushagra-gupta',
    image: kushagraImg,
    pedigreeLogos: ['uiuc', 'tennr'],
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: '1990',
    title: 'Founding of Sanjay Satpal and Associates (CA Practice)',
    category: 'CA & Taxation Services',
    description:
      'Established Sanjay Satpal and Associates in New Delhi. Built a leading Tier-1 chartered accountancy practice specializing in Income Tax search and seizure proceedings (Sec 132), dispute resolution, and full-suite tax and corporate advisory.',
    highlight: 'Premier search & seizure practice and full-suite tax advisory',
  },
  {
    year: '1990s',
    title: 'Public Markets Capital Allocation',
    category: 'Public Equities',
    description:
      'Initiated disciplined public equities investments across high-conviction direct holdings and institutional PMS allocations, maintaining a continuous 30+ year track record in emerging sectors of India.',
    highlight: '30+ year track record in direct equities & leading PMS',
  },
  {
    year: '2000s',
    title: 'Hospitality & Real Estate Expansion',
    category: 'Hospitality & Land',
    description:
      'Expanded into turnkey development, construction, and management of boutique hotels across Delhi/NCR and luxury eco-resorts in Jim Corbett, alongside acquisitions of strategic warehousing, residential, and agricultural land parcels.',
    highlight: 'Boutique hotels, Jim Corbett resorts & strategic land parcels',
  },
  {
    year: '2014',
    title: 'Angel Investments Expansion (50+ Startups)',
    category: 'Venture Capital',
    description:
      'Commenced direct angel investments, deploying seed capital across 50+ high-growth companies in fintech, healthtech, deeptech & AI, defence, biotech, and consumer sectors.',
    highlight: '50+ direct angel investments with notable market exits',
  },
  {
    year: '2018',
    title: 'Institutional LP Positions in Tier-1 Funds',
    category: 'LP Allocations',
    description:
      'Began deploying institutional Limited Partner capital into Tier-1 venture debt and venture capital funds across India, partnering with top-tier fund managers.',
    highlight: 'Active LP positions in leading venture debt & VC funds',
  },
  {
    year: '2022',
    title: 'GP Fund Launch: Seafund ($30M Tech VC Fund)',
    category: 'Fund Management (GP)',
    description:
      'Co-founded Seafund, a $30M SEBI-registered Category II AIF dedicated to early-stage deeptech, AI/ML, semiconductors, robotics, and spacetech.',
    highlight: '$30M AUM SEBI-registered Category II Tech AIF (www.seafund.in)',
  },
  {
    year: '2024-2025',
    title: 'GP Fund Expansion: SGRE Fund I & 2',
    category: 'Real Estate AIF (GP)',
    description:
      'Launched SGRE Fund I and SGRE Fund 2, two SEBI-registered Category II AIFs providing structured debt, equity, and turnaround financing for real estate and distressed asset investments.',
    highlight: '₹450 Cr closed (targeting ₹2,000 Cr) real estate AIFs (www.sgre.in)',
  },
];
