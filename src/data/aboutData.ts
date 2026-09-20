import { LeadershipMember } from '../types';
import sanjayImg from '../assets/images/Sanjay.jpg';
import agamImg from '../assets/images/Agam.jpg';
import kushagraImg from '../assets/images/Kushagra.jpg';

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
    role: 'Group Managing Director',
    focus: 'Tax practice & hospitality',
    bio: 'Fellow Chartered Accountant. Founded the firm in 1990 and built its search and seizure practice into what the group is still best known for. Also runs the hospitality side end to end \u2014 sites, construction and operations across NCR and Jim Corbett \u2014 and sits on the governance side of the SGRE real estate funds.',
    linkedin: 'https://www.linkedin.com/in/sanjay-kumar-gupta',
    image: sanjayImg,
  },
  {
    name: 'Agam Gupta',
    role: 'Lead of Investments',
    focus: 'Funds, venture & public markets',
    bio: 'Runs allocation across venture, real estate and public equities. General Partner at Seafund and at the SGRE real estate AIFs, and the person who decides which outside managers the family commits to as an LP.',
    linkedin: 'https://www.linkedin.com/in/agam-gupta',
    image: agamImg,
    pedigreeLogos: ['deloitte', 'microsoft', 'northwestern'],
  },
  {
    name: 'Kushagra Gupta',
    role: 'Head of New Projects',
    focus: 'Angel investing & emerging tech',
    bio: 'Handles the early-stage book \u2014 50+ angel cheques, syndication, and first conversations with founders. Concentrated in AI, deeptech, defence and healthcare. Also responsible for dragging the group\'s own operating companies onto better technology.',
    linkedin: 'https://www.linkedin.com/in/kushagra-gupta',
    image: kushagraImg,
    pedigreeLogos: ['uiuc', 'tennr'],
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: '1990',
    title: 'The firm opens',
    category: 'Tax practice',
    description:
      'Sanjay Satpal and Associates is founded in New Delhi. The practice builds its name on Section 132 search and seizure defence — the cases most firms would rather not take — and adds dispute resolution and corporate advisory around it.',
    highlight: 'Still the group\u2019s founding business',
  },
  {
    year: '1990s',
    title: 'First capital into public markets',
    category: 'Public equities',
    description:
      'Retained earnings from the practice go into listed Indian equities, held directly and later through PMS mandates. That book has run continuously ever since, through every cycle since liberalisation.',
    highlight: '30+ years, never interrupted',
  },
  {
    year: '2000s',
    title: 'Hotels, resorts and land',
    category: 'Hospitality & real estate',
    description:
      'The group starts building rather than only advising: boutique hotels across Delhi/NCR, eco-resorts near Jim Corbett, and acquisitions of warehousing, residential and agricultural land in the NCR corridors.',
    highlight: 'Built in-house, operated in-house',
  },
  {
    year: '2014',
    title: 'The first angel cheques',
    category: 'Venture',
    description:
      'The next generation begins investing directly in early-stage companies. Over the following decade that grows to 50+ investments across fintech, healthtech, deeptech and AI, defence, biotech and consumer.',
    highlight: '50+ direct investments, several exited',
  },
  {
    year: '2018',
    title: 'Backing other managers',
    category: 'LP commitments',
    description:
      'Rather than compete with good funds, the family starts committing to them. LP positions follow in Tier-1 Indian venture capital and venture debt funds.',
    highlight: '10+ active fund commitments',
  },
  {
    year: '2022',
    title: 'Seafund',
    category: 'GP \u2014 venture',
    description:
      'Co-founded Seafund, a $30M SEBI-registered Category II AIF backing early deeptech: AI and ML, semiconductors, robotics and spacetech. The first time the group managed outside capital.',
    highlight: 'seafund.in',
  },
  {
    year: '2024\u20132025',
    title: 'SGRE Fund I and Fund 2',
    category: 'GP \u2014 real estate',
    description:
      'Two more SEBI-registered Category II AIFs, this time in real estate: structured debt, equity and turnaround financing for residential and commercial assets, including distressed situations.',
    highlight: '\u20b9450 Cr closed, targeting \u20b92,000 Cr \u00b7 sgre.in',
  },
];
