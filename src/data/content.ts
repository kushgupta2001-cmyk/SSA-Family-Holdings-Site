import boardroomDelhiImg from '../assets/images/boardroom-delhi-meeting.jpg';
import boardroomSilhouetteImg from '../assets/images/boardroom-silhouette.jpg';
import resortImg from '../assets/images/hospitality_resort_1789412842667.jpg';

export interface AssetPillar {
  id: string;
  category: string;
  title: string;
  since: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
}

export const STRATEGIC_PILLARS: AssetPillar[] = [
  {
    id: 'ca-firm',
    category: 'Practice',
    title: 'Sanjay Satpal and Associates',
    since: 'Chartered accountancy · New Delhi · since 1993',
    description:
      'A Delhi tax practice known for one thing in particular: defending clients through Income Tax search and seizure proceedings under Section 132. Alongside that, dispute resolution, corporate tax advisory and statutory audit.',
    ctaLabel: 'About the practice',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Legal and financial documentation representing the tax advisory practice',
  },
  {
    id: 'hospitality',
    category: 'Hospitality',
    title: 'Hotels & Resorts',
    since: 'Delhi/NCR and Jim Corbett',
    description:
      'We design, build and then run them ourselves. A small chain of boutique hotels across Delhi/NCR and wilderness eco-resorts on the edge of Jim Corbett National Park. Construction through to housekeeping stays in-house.',
    ctaLabel: 'About the hotels',
    imageUrl: resortImg,
    imageAlt: 'Eco-resort at dusk in the Jim Corbett foothills',
  },
  {
    id: 'investment-arm',
    category: 'Investments',
    title: 'The Investment Arm',
    since: 'Real estate, private and public markets',
    description:
      'Land in the NCR corridors, 50+ direct startup investments, LP positions in Tier-1 venture and venture debt funds, GP of Seafund and the SGRE real estate AIFs, and a public equities book running since the 1990s.',
    ctaLabel: 'Where the capital goes',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Modern financial district tower',
  },
];

export interface HomeMetric {
  value: string;
  label: string;
  detail: string;
}

/**
 * Four figures, each measuring something the others do not. Deliberately no overlap
 * between "investments made" (positions) and "companies reached" (names touched).
 */
export const HOME_METRICS: HomeMetric[] = [
  {
    value: '150+',
    label: 'Investments made',
    detail: 'Positions taken across land, private companies and listed equities.',
  },
  {
    value: '350+',
    label: 'Companies reached',
    detail: 'Directly, through Seafund, and through the funds we back as an LP.',
  },
  {
    value: '4',
    label: 'Funds we manage',
    detail: 'SEBI-registered AIFs: Seafund, and the SGRE real estate funds.',
  },
  {
    value: '1993',
    label: 'Founded',
    detail: 'Still run from the same office, by the same family.',
  },
];

export const IMAGES = {
  // Hero: the Delhi boardroom
  heroOffice: boardroomDelhiImg,
  // "No fund clock": silhouette, sits behind an 85% dark gradient as texture
  stableCapital: boardroomSilhouetteImg,
  // Investments: market data (no local equivalent)
  publicMarkets:
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85',
};
